import runs from "@/data/runs.mock.json";
import Link from "next/link";
import { notFound } from "next/navigation";

type Props = {
  params: Promise<{ id: string }>;
};

export async function generateMetadata({ params }: Props) {
  const { id } = await params;
  const run = runs.find((run) => run.id === id);

  return {
    title: run
      ? `${run.character} · ${run.id} | Spire Run Tracker`
      : "Run not found | Spire Run Tracker",
  };
}

export default async function RunPage({ params }: Props) {
  const { id } = await params;
  const run = runs.find((run) => run.id === id);

  if (!run) {
    notFound();
  }

  return (
    <main className="mx-auto max-w-2xl p-8">
      <h1 className="text-3xl font-bold">{run.character} run</h1>
      <p>
        Ascension {run.ascension} · {run.mode} · {run.result}
      </p>

      <h2 className="mt-6 text-xl font-semibold">Final deck</h2>
      <p>{run.deck.join(", ")}</p>

      <h2 className="mt-6 text-xl font-semibold">Relics</h2>
      <p>{run.relics.join(", ")}</p>

      <Link href="/runs" className="mt-6 inline-block underline">
        Back to run history
      </Link>
    </main>
  );
}