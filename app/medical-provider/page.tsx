import Head from "next/head";
import Link from "next/link";
import MedicalProviderFlow from "@components/MedicalProviderFlow";

import { AuthLayout } from "@components/AuthLayout";
import { Logo } from "@components/Logo";

export default function Login() {
  return (
    <>
      <Head>
        <title>Medical Provider Flow</title>
      </Head>
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
