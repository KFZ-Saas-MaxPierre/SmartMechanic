import Link from "next/link";

export default function HomePage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center gap-6 p-8 text-center">
      <h1 className="text-3xl font-bold text-brand-700">Werkstattlotse</h1>
      <p className="max-w-md text-gray-600">
        Intelligente Terminplanung für KFZ-Reparaturwerkstätten. Mechaniker,
        Hebebühnen und Arbeitsdauer automatisch mitgedacht.
      </p>
      <Link
        href="/calendar"
        className="rounded-md bg-brand-600 px-5 py-2.5 font-medium text-white hover:bg-brand-700"
      >
        Zum Kalender
      </Link>
    </main>
  );
}
