"use client";
import MedicalProvidersList from "@components/MedicalProviderFlow/MedicalProvidersList";
import MedicalProviderUpdateAvailabilities from "./MedicalProviderUpdateAvailabilities";
import { MedicalProvider } from "services/graphql/generated";
import { useState } from "react";

export default function MedicalProviderFlow() {
  const [selectedProvider, setSelectedProvider] = useState<
    MedicalProvider["id"] | null
  >(null);
  const handleProviderSelect = (providerId: MedicalProvider["id"]) => {
    setSelectedProvider(providerId);
  };

  return (
    <div>
      {selectedProvider ? (
        <MedicalProviderUpdateAvailabilities providerId={selectedProvider} />
      ) : (
        <MedicalProvidersList onProviderSelect={handleProviderSelect} />
      )}
    </div>
  );
}
