import Link from "next/link";
import MedicalProviderFlow from "@components/MedicalProviderFlow/MedicalProviderFlow";

import { AuthLayout } from "@components/Shared/AuthLayout";
import { Logo } from "@components/Shared/Logo";

export default function Login() {
  return (
    <>
      <AuthLayout>
        <div className="flex flex-col">
          <Link href="/" aria-label="Home">
            <Logo className="h-10 w-auto" />
          </Link>
          <div className="mt-20">
            <h2 className="text-lg font-semibold text-gray-900">
              Doctor Portal
            </h2>
          </div>
        </div>
        <div>
          <MedicalProviderFlow />
        </div>
      </AuthLayout>
    </>
  );
}
