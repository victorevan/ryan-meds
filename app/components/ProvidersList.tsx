"use client";
import React from "react";
import { EllipsisVerticalIcon } from "@heroicons/react/20/solid";
import { useGetProvidersQuery } from "services/graphql/GetProviders.generated";
import { MedicalProvider } from "services/graphql/generated";

interface Props {
  onProviderSelect: Function;
}

const ProvidersList: React.FunctionComponent<Props> = ({
  onProviderSelect,
}) => {
  const { data, isLoading } = useGetProvidersQuery();

  const handleProviderSelect = (providerId: MedicalProvider["id"]) => {
    onProviderSelect(providerId);
  };

  if (isLoading) return <div>Loading...</div>;

  return (
    <div>
      <h2 className="text-sm font-medium text-gray-500">Our Providers</h2>
      <ul
        role="list"
        className="mt-3 grid grid-cols-1 gap-5 sm:grid-cols-2 sm:gap-6 lg:grid-cols-2"
      >
        {data?.providers.map((provider) => (
          <li
            key={provider.id}
            onClick={() => handleProviderSelect(provider.id)}
            className="col-span-1 flex rounded-md shadow-sm cursor-pointer"
          >
            <div
              className={
                "bg-blue-600 flex-shrink-0 flex items-center justify-center w-16 text-white text-sm font-medium rounded-l-md"
              }
            ></div>
            <div className="flex flex-1 items-center justify-between truncate rounded-r-md border-t border-r border-b border-gray-200 bg-white">
              <div className="flex-1 truncate px-4 py-2 text-sm">
                <div className="font-medium text-gray-900 hover:text-gray-600">
                  {provider.name}
                </div>
              </div>
              <div className="flex-shrink-0 pr-2">
                <button
                  type="button"
                  className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-white bg-transparent text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                >
                  <span className="sr-only">Open options</span>
                  <EllipsisVerticalIcon
                    className="h-5 w-5"
                    aria-hidden="true"
                  />
                </button>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProvidersList;
