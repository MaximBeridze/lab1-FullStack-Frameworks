type Props = {
  children: React.ReactNode;
};

export default function RunsLayout({ children }: Props) {
  return (
    <section className="mx-auto w-full max-w-3xl p-6">
      <p className="mb-6 rounded border p-3 text-sm">
        Sample data — these fictional runs are for demonstration.
      </p>

      {children}
    </section>
  );
}