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
        {data?.available_slots.map((slot) => (
          <li
            key={slot.start_time}
            className="cursor-pointer py-2 mb-4"
            onClick={() => onSlotSelect(slot.start_time, slot.provider_id)}
          >
            {slot.start_time} - {slot.provider_id}
          </li>
        ))}
      </ul>
    </div>
  );
}
