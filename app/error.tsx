"use client";

export default function Error({
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <section>
      <h1>Something went wrong</h1>
      <p>We couldn’t load the movies right now. Please try again in a moment.</p>
      <button type="button" onClick={() => reset()}>
        Try again
      </button>
    </section>
  );
}