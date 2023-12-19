import Image from "next/image";
import Link from "next/link";
import ProductCard from "./components/ProductCard";

export default function Home() {
  return (
    <main>
      <h1>Hell World</h1>
      <ProductCard></ProductCard>
      <Link href="/users">Users</Link>
    </main>
  );
}
