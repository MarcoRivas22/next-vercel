import Link from "next/link";
import { MainLayout } from "../components/layouts/MainLayout";

export default function ContactPage() {
  return (
    <MainLayout>
      <h1 className="title">Esta es /contact</h1>
      <p className="description">
        Ir a<Link href="/">Home</Link>
      </p>
    </MainLayout>
  );
}
