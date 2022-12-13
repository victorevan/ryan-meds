import Head from "next/head";
import Link from "next/link";
import ProvidersList from "@components/ProvidersList";

import { AuthLayout } from "@components/AuthLayout";
import { Logo } from "@components/Logo";

export default function Login() {
  return (
    <>
      <Head>
        <title>Sign In - TaxPal</title>
      </Head>
      <AuthLayout>
        <div className="flex flex-col">
          <Link href="/" aria-label="Home">
            <Logo className="h-10 w-auto" />
          </Link>
          <div className="mt-20">
            <h2 className="text-lg font-semibold text-gray-900">
              Doctor Unauthenticated Sign In
            </h2>
          </div>
        </div>
        <div>
          <ProvidersList />
        </div>
      </AuthLayout>
    </>
  );
}
