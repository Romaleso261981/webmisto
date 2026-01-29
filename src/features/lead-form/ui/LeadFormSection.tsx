"use client";

import LeadForm from "./LeadForm";
import { Contacts } from "@/widgets/contacts/ui";
import { useLeadForm } from "../model/useLeadForm";
import { NotificationPopup } from "@/shared/ui/NotificationPopup";

export default function LeadFormSection() {
  const formHook = useLeadForm();

  return (
    <>
      <section
        id="lead-form"
        className="grid gap-10 py-14 md:grid-cols-[minmax(0,1.1fr)_minmax(0,1fr)] md:py-20"
      >
        <LeadForm hook={formHook} />
        <Contacts />
      </section>

      <NotificationPopup
        type={formHook.notification.type}
        message={formHook.notification.message}
        isVisible={formHook.notification.isVisible}
        onClose={formHook.closeNotification}
        duration={formHook.notification.type === "success" ? 5000 : 7000}
      />
    </>
  );
}
