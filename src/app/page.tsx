import { Header } from "@/components/hearder";
import { LanguageProvider } from "@/contexts/linguage-context";
import Image from "next/image";

export default function Home() {
  return (
    <main className="h-screen w-screen">
      <LanguageProvider>
        <Header />
      </LanguageProvider>
    </main>
  );
}
