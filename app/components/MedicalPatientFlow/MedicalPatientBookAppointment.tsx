import React, { useState } from "react";
import { MedicalBooking, Status } from "services/graphql/generated";
import { useConfirmSlotMutation } from "services/graphql/ConfirmSlot.generated";
import { Button } from "../Shared/Button";
import { NavLink } from "../Shared/NavLink";

type Props = {
  bookingId: MedicalBooking["id"];
  expiresAt: MedicalBooking["expires_at"];
};

/**
 * @description This component could be a good place to collect user details/collect payment before confirming the booking
 * @param param0
 * @returns
 */
function MedicalPatientBookAppointment({ bookingId, expiresAt }: Props) {
  const [confirmed, setConfirmed] = useState(false);
  const [confirmSlot] = useConfirmSlotMutation();

  const handleConfirm = async () => {
    const result = await confirmSlot({
      bookingId,
    }).unwrap();

    if (result?.confirmSlot?.status !== Status.Confirmed) {
      /**
       * handle error here
       */
      console.error("Unable to confirm slot");
      return;
    }

    setConfirmed(true);
  };

  if (confirmed) {
    return (
      <div>
        <div className="pb-2">Thank you! You&apos;re succesfully booked!</div>
        <div>
          <NavLink isA={false} href="/">
            Go Home
          </NavLink>
        </div>
      </div>
    );
  }

  return (
    <div>
      <h1 className="pb-4">Hurry! Your booking expires at {expiresAt}</h1>
      <div>
        {/* update to use human readable format */}
        <Button onClick={handleConfirm} className={undefined} href={undefined}>
          Confirm
        </Button>
      </div>
    </div>
  );
}

export default MedicalPatientBookAppointment;
