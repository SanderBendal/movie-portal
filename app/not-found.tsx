import Link from "next/link";

export default function NotFound() {
  return (
    <section>
      <h1>Page not found</h1>
      <p>We couldn’t find what you were looking for. The movie may not exist, or the link may be wrong.</p>
      <Link href="/movies">Back to movies</Link>
    </section>
  );
}