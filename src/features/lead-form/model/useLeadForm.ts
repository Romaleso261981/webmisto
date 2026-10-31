import { useRef, useState } from "react";
import { useI18n } from "@/shared/lib/i18n/I18nProvider";

export interface FormData {
  name: string;
  phone: string;
  details: string;
}

function isValidPhone(value: string): boolean {
  const digits = value.replace(/\D/g, "");
  return /^380\d{9}$/.test(digits) || /^0\d{9}$/.test(digits);
}

export interface FormErrors {
  [key: string]: string;
}

export interface NotificationState {
  type: "success" | "error" | "info";
  message: string;
  isVisible: boolean;
}

export function useLeadForm() {
  const { t } = useI18n();
  const [formData, setFormData] = useState<FormData>({
    name: "",
    phone: "",
    details: "",
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const isSubmittingRef = useRef(false);
  const [notification, setNotification] = useState<NotificationState>({
    type: "info",
    message: "",
    isVisible: false,
  });

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    // Очищаємо помилку для поля, коли користувач починає вводити
    if (errors[name]) {
      setErrors((prev) => {
        const newErrors = { ...prev };
        delete newErrors[name];
        return newErrors;
      });
    }
  };

  const validateForm = () => {
    const newErrors: FormErrors = {};

    if (!isValidPhone(formData.phone)) {
      newErrors.phone = t.form.fields.phone.error;
    }

    setErrors(newErrors);
    return { isValid: Object.keys(newErrors).length === 0, errors: newErrors };
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (isSubmittingRef.current) return;

    const { isValid, errors: validationErrors } = validateForm();
    if (!isValid) {
      // Прокручуємо до першого поля з помилкою
      const firstErrorField = Object.keys(validationErrors)[0];
      if (firstErrorField) {
        setTimeout(() => {
          const element = document.querySelector(`[name="${firstErrorField}"]`);
          element?.scrollIntoView({ behavior: "smooth", block: "center" });
          (element as HTMLInputElement)?.focus();
        }, 100);
      }
      return;
    }

    isSubmittingRef.current = true;
    setIsSubmitting(true);

    try {
      const response = await fetch("/api/send-telegram", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (!response.ok || data?.success !== true) {
        // Якщо це помилка конфігурації, показуємо загальне повідомлення
        if (data.isConfigError) {
          throw new Error("Сервіс тимчасово недоступний. Будь ласка, спробуйте пізніше або зв'яжіться з нами безпосередньо.");
        }
        throw new Error(data.error || "Помилка відправки заявки");
      }

      // Успішна відправка
      setNotification({
        type: "success",
        message: t.form.success,
        isVisible: true,
      });
      setFormData({ name: "", phone: "", details: "" });
      setErrors({});
    } catch (error) {
      console.error("Error submitting form:", error);
      const errorMessage =
        error instanceof Error
          ? error.message
          : "Сталася помилка при відправці заявки. Будь ласка, спробуйте ще раз або зв'яжіться з нами безпосередньо.";

      setNotification({
        type: "error",
        message: errorMessage,
        isVisible: true,
      });
    } finally {
      isSubmittingRef.current = false;
      setIsSubmitting(false);
    }
  };

  const closeNotification = () => {
    setNotification((prev) => ({ ...prev, isVisible: false }));
  };

  return {
    formData,
    errors,
    isSubmitting,
    notification,
    handleInputChange,
    handleSubmit,
    closeNotification,
  };
}
