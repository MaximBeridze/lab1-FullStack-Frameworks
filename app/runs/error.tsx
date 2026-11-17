"use client";

type Props = {
  error: unknown;
  retry: () => void;
};

export default function RunsError({ error, retry }: Props) {
  return (
    <main className="mx-auto max-w-2xl p-8">
      <div role="alert">
        <h1>Run history could not be loaded</h1>
            <p>{error instanceof Error ? error.message : "Something went wrong."}</p>
      </div>

      <button type="button" onClick={() => retry()}>Try again</button>
    </main>
  );
}