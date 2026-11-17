import runs from "@/data/runs.mock.json";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Dashboard | Spire Run Tracker",
  description: "See your total runs, wins, losses, and overall win rate.",
};

export default function Home() {
  const totalRuns = runs.length;

  const wins = runs.filter(run => run.result === "win").length;
  const losses = runs.filter(run => run.result === "loss").length;

  const winRate = totalRuns === 0
    ? 0
    : (wins / totalRuns) * 100


  const characterNames = runs.map((run) => {
    return run.character;
  });

  const characters = [...new Set(characterNames)];

  const characterStats = characters.map((character) => {
    const characterRuns = runs.filter((run) => {
      return run.character === character;
    });

    const characterWins = characterRuns.filter((run) => {
      return run.result === "win";
    }).length;

    const winRate = characterRuns.length === 0
      ? 0
      : characterWins / characterRuns.length * 100

    return {
      character,
      totalRuns: characterRuns.length,
      wins: characterWins,
      winRate,
    };
  });

  return (
    <main className="mx-auto max-w-2xl p-8">
      <h1 className="text-3xl font-bold">Spire Run Tracker</h1>
      <p>Total runs: {totalRuns}</p>
      <p>Wins: {wins}</p>
      <p>Losses: {losses}</p>
      <p>Winrate: {winRate}%</p>
      <h2 className="mt-6 text-xl font-semibold">Stats by character</h2>
      <p>Tracked characters: {characters.join(", ")}</p>
      {characterStats.map((stats) => (
        <p key={stats.character}>
          {stats.character}: Runs - {stats.totalRuns} · Wins - {stats.wins} · Winrate - {stats.winRate}%
        </p>
      ))}
    </main>
  );
}