import Link from "next/link";
import MedicalPatientFlow from "@components/MedicalPatientFlow/MedicalPatientFlow";

import { AuthLayout } from "@components/Shared/AuthLayout";
import { Logo } from "@components/Shared/Logo";

export default function Register() {
  return (
    <>
      <AuthLayout>
        <div className="flex flex-col">
          <Link href="/" aria-label="Home">
            <Logo className="h-10 w-auto" />
          </Link>
          <div className="mt-20">
            <h2 className="text-lg font-semibold text-gray-900">
              Patient Portal
            </h2>
          </div>
        </div>
        <MedicalPatientFlow />
      </AuthLayout>
    </>
  );
}
