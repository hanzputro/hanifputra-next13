import Header from "@/components/Header";
import Hero from "@/components/Section/Hero";

export default function Home() {
  return (
    <>
      <Header />
      <main className="flex min-h-screen flex-col items-center justify-between">
        <Hero />
      </main>
    </>
  );
}
