import { ReactNode } from "react";

import Link from "next/link";

import { MainLayout } from "../components/layouts/MainLayout";
import { DarkLayout } from "../components/layouts/DarkLayout";

export default function AboutPage() {
  return (
    <>
      <h1 className="title">Esta es /about</h1>
      <p className="description">
        Ir a<Link href="/">Home</Link>
      </p>
    </>
  );
}

AboutPage.getLayout = function getLayout(page: ReactNode) {
  return (
    <MainLayout>
      <DarkLayout>{page}</DarkLayout>
    </MainLayout>
  );
};
