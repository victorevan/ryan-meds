"use client";
import AvailableSlotsList from "@components/AvailableSlotsList";
import MedicalPatientBookAppointment from "@components/MedicalPatientBookAppointment";
import { MedicalBooking, SlotWithProvider } from "services/graphql/generated";
import { useState } from "react";
import { useBeginBookSlotMutation } from "services/graphql/BeginBookSlot.generated";

export default function MedicalProviderFlow() {
  const [bookSlot, result] = useBeginBookSlotMutation();

  const [selectedSlot, setSelectedSlot] = useState<{
    expiresAt: MedicalBooking["expires_at"];
    bookingId: MedicalBooking["id"];
    startTime: SlotWithProvider["start_time"];
    providerId: SlotWithProvider["provider_id"];
  } | null>(null);
  const handleSlotSelect = (
    startTime: SlotWithProvider["start_time"],
    providerId: SlotWithProvider["provider_id"]
  ) => {
    bookSlot({
      /**
       * mock patient- create patient mutation before would be ideal
       * could for example use ip address just to get a unique id
       * or temporarily use a session id and attach it to the customer afterwards
       * or could collect information upfront, but that might not be ideal
       */
      medical_patient_id: "1",
      medical_provider_id: providerId,
      slot: startTime,
    });

    if (!result.data?.begin_book_slot) {
      /**
       * handle error here
       */
      console.error("Unable to book slot");
      return;
    }

    const { id: bookingId, expires_at: expiresAt } =
      result.data?.begin_book_slot;

    setSelectedSlot({ expiresAt, bookingId, startTime, providerId });
  };

  return (
    <div>
      {selectedSlot ? (
        <MedicalPatientBookAppointment
          bookingId={selectedSlot.bookingId}
          expiresAt={selectedSlot.expiresAt}
        />
      ) : (
        <AvailableSlotsList onSlotSelect={handleSlotSelect} />
      )}
    </div>
  );
}
