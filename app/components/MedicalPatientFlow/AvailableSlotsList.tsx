import React from "react";
import { useGetAvailableSlotsQuery } from "services/graphql/GetAvailableSlots.generated";

type Props = {
  onSlotSelect: (startTime: string, providerId: string) => void;
};

export default function AvailableSlotsList({ onSlotSelect }: Props) {
  const { data, isLoading } = useGetAvailableSlotsQuery();

  if (isLoading) {
    return <div>Availabilities Loading...</div>;
  }

  return (
    <div>
      <h1>Available Slots List</h1>

      <ul>
        {data?.availableSlots.map((slot) => (
          <li
            key={slot.startTime}
            className="cursor-pointer py-2 mb-4"
            onClick={() => onSlotSelect(slot.startTime, slot.providerId)}
          >
            {slot.startTime} - {slot.providerId}
          </li>
        ))}
      </ul>
    </div>
  );
}
