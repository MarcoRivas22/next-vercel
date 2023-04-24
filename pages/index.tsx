import Link from "next/link";
import { MainLayout } from "../components/layouts/MainLayout";

export default function HomePage() {
  return (
    <MainLayout>
      <h1 className="title">Esta es /home</h1>
      <p className="description">
        Ir a<Link href="/about">About</Link>
      </p>
    </MainLayout>
  );
}
