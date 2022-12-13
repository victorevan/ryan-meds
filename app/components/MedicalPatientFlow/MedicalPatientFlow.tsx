"use client";
import AvailableSlotsList from "@components/MedicalPatientFlow/AvailableSlotsList";
import MedicalPatientBookAppointment from "@components/MedicalPatientFlow/MedicalPatientBookAppointment";
import { MedicalBooking, SlotWithProvider } from "services/graphql/generated";
import { useState } from "react";
import { useBeginBookSlotMutation } from "services/graphql/BeginBookSlot.generated";

export default function MedicalProviderFlow() {
  const [bookSlot] = useBeginBookSlotMutation();

  const [selectedSlot, setSelectedSlot] = useState<{
    expiresAt: MedicalBooking["expires_at"];
    bookingId: MedicalBooking["id"];
    startTime: SlotWithProvider["start_time"];
    providerId: SlotWithProvider["provider_id"];
  } | null>(null);
  const handleSlotSelect = async (
    startTime: SlotWithProvider["start_time"],
    providerId: SlotWithProvider["provider_id"]
  ) => {
    const result = await bookSlot({
      /**
       * mock patient- create patient mutation before would be ideal
       * could for example use ip address just to get a unique id
       * or temporarily use a session id and attach it to the customer afterwards
       * or could collect information upfront, but that might not be ideal
       */
      medicalPatientId: "1",
      medicalProviderId: providerId,
      slot: startTime,
    }).unwrap();

    if (!result?.beginBookSlot) {
      /**
       * handle error here
       */
      console.error("Unable to book slot");
      return;
    }

    const { id: bookingId, expiresAt } = result.beginBookSlot;

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
