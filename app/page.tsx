import Link from "next/link";

export default function Home() {
  return (
    <section>
      <h1>Movie Portal</h1>
      <p>
        Can’t decide what to watch tonight? Browse the films everyone is
        talking about right now, or search for any movie by its title.
      </p>
      <p>
        Every movie has its own page with the poster, release year, rating
        and a short summary of the plot, so you can quickly decide whether
        it’s worth your evening.
      </p>
      <Link href="/movies">Browse movies</Link>
    </section>
  );
}