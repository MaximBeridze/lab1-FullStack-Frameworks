import runs from "@/data/runs.mock.json";
import Link from "next/link";
import type { Metadata } from "next";

export const dynamic = "force-dynamic";
export const metadata: Metadata = {
    title: "Run History | Spire Run Tracker",
    description: "Browse your Slay the Spire 2 runs by character, Ascension level, and result.",
};

export default async function RunsPage() {
    await new Promise((resolve) => {
        setTimeout(resolve, 1000);
    });
    return (
        <main>
            <h1>Run history</h1>
            <ul>
                {runs.map((run) => (
                    <li key={run.id}>
                        <Link href={`/runs/${run.id}`}>
                            {run.character} · Ascension {run.ascension} · {run.result}
                        </Link>
                    </li>
                ))}
            </ul>
        </main>
    );
}

