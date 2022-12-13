"use client";
import { getDay, lightFormat, nextDay, getUnixTime } from "date-fns";
import { FormEvent, useState } from "react";
import { useAddAvailabilitiesMutation } from "services/graphql/AddAvailabilities.generated";
import { MedicalProvider } from "services/graphql/generated";
import { useGetCurrentTimeQuery } from "services/graphql/GetCurrentTime.generated";

type Props = {
  providerId: MedicalProvider["id"];
};

const getMinDate = (currentTime: number) => {
  const currentDay = getDay(currentTime);
  const tomorrow = nextDay(currentTime, currentDay);
  const minDate = lightFormat(tomorrow, "yyyy-MM-dd");

  return minDate;
};

export default function MedicalProviderUpdateAvailabilities({
  providerId,
}: Props) {
  const [formData, setFormData] = useState({
    date: null as null | string,
    startTime: null as null | Date,
    endTime: null as null | Date,
  });

  const [updateAvailabilities, { isLoading: isUpdating }] =
    useAddAvailabilitiesMutation();
  const { data, isLoading } = useGetCurrentTimeQuery();

  const handleFormSubmit = (e: FormEvent) => {
    e.preventDefault();

    if (
      typeof formData.date !== "string" ||
      !(formData.startTime instanceof Date) ||
      !(formData.endTime instanceof Date)
    )
      return;

    const startHour = formData.startTime.getHours();
    const startMinutes = formData.startTime.getMinutes();

    const endHour = formData.endTime.getHours();
    const endMinutes = formData.endTime.getMinutes();

    const [year, month, day] = formData.date
      .split("-")
      .map((str) => parseInt(str));

    const startTime = getUnixTime(
      new Date(year, month, day, startHour, startMinutes)
    );

    const endTime = getUnixTime(
      new Date(year, month, day, endHour, endMinutes)
    );

    updateAvailabilities({
      medical_provider_id: providerId,
      start_time: startTime,
      end_time: endTime,
    });
  };

  if (isLoading) return <div>Loading Form...</div>;

  return (
    <div className="bg-white shadow sm:rounded-lg">
      <div className="px-4 py-5 sm:p-6">
        <h3 className="text-lg font-medium leading-6 text-gray-900">
          Add Availability
        </h3>
        <div className="mt-2 max-w-xl text-sm text-gray-500">
          <p>Change the email address you want associated with your account.</p>
        </div>
        <form className="mt-5" onSubmit={handleFormSubmit}>
          <div className="w-full sm:max-w-xs pb-4">
            <label htmlFor="email" className="pb-2">
              Date
            </label>
            <input
              required
              min={getMinDate(data?.currentTime)}
              type="date"
              name="date"
              id="date"
              onChange={(e) => {
                setFormData((prevFormData) => ({
                  ...prevFormData,
                  date: e.target.value,
                }));
              }}
              className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
              placeholder="you@example.com"
            />
          </div>
          <div className="w-full sm:max-w-xs pb-4">
            <label htmlFor="startTime" className="pb-2">
              Start Time
            </label>
            <input
              required
              type="time"
              name="time"
              id="startTime"
              onChange={(e) => {
                setFormData((prevFormData) => ({
                  ...prevFormData,
                  startTime: e.target.valueAsDate,
                }));
              }}
              className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
              placeholder="you@example.com"
            />
          </div>
          <div className="w-full sm:max-w-xs">
            <label htmlFor="endTime" className="pb-2">
              End Time
            </label>
            <input
              required
              type="time"
              name="time"
              id="endTime"
              onChange={(e) => {
                setFormData((prevFormData) => ({
                  ...prevFormData,
                  endTime: e.target.valueAsDate,
                }));
              }}
              className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
              placeholder="you@example.com"
            />
          </div>
          <button
            type="submit"
            className="mt-3 inline-flex items-center rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
          >
            Save
          </button>
        </form>
      </div>
    </div>
  );
}
