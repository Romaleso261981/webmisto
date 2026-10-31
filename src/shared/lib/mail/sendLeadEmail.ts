import { CONTACT_EMAIL } from "@/shared/config/contacts";

type LeadEmailInput = {
  name?: string;
  phone: string;
  details?: string;
  niche?: string;
  budget?: string;
};

export async function sendLeadEmail(input: LeadEmailInput): Promise<boolean> {
  const submittedAt = new Date().toLocaleString("uk-UA", {
    timeZone: "Europe/Kyiv",
  });

  try {
    const response = await fetch(
      `https://formsubmit.co/ajax/${encodeURIComponent(CONTACT_EMAIL)}`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
          Origin: "https://www.webzona.site",
          Referer: "https://www.webzona.site/",
          "User-Agent":
            "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/131.0.0.0 Safari/537.36",
        },
        body: JSON.stringify({
          _subject: "Нова заявка з сайту webzona",
          _template: "table",
          _captcha: "false",
          Імʼя: input.name?.trim() || "—",
          Телефон: input.phone,
          Опис: input.details?.trim() || "—",
          ...(input.niche?.trim() ? { "Ніша/Послуга": input.niche.trim() } : {}),
          ...(input.budget?.trim() ? { Бюджет: input.budget.trim() } : {}),
          Час: submittedAt,
        }),
      },
    );

    const data = (await response.json().catch(() => null)) as
      | { success?: boolean | string; message?: string }
      | null;
    const accepted = data?.success === true || data?.success === "true";

    if (!accepted) {
      console.error("Lead email was not accepted:", data?.message || response.status);
      return false;
    }

    return true;
  } catch (error) {
    console.error("Lead email failed:", error);
    return false;
  }
}
