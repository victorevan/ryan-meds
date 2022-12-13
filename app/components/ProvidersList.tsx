"use client";
import React from "react";
import { useGetProvidersQuery } from "services/graphql/GetProviders.generated";

const ProvidersList: React.FunctionComponent = () => {
  const { data, isLoading } = useGetProvidersQuery();

  console.log(data);

  if (isLoading) return <div>Loading...</div>;

  return (
    <div>
      <ul>
        <li>{JSON.stringify(data)}</li>
      </ul>
    </div>
  );
};

export default ProvidersList;
