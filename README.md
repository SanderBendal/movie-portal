# Movie Portal

Movie Portal is a website for finding something to watch. The front page
shows what is popular right now, and you can search for any film by title in the Movies selection.
Every movie has its own page with the poster, release year, rating and a
short plot summary.

It is made for anyone who wants a quick overview of a movie without
scrolling through streaming menus.

Built with Next.js (App Router) and TypeScript as a school assignment.

## Getting started

1. Clone the repository and install dependencies:

   ```bash
   git clone https://github.com/SanderBendal/movie-portal.git
   cd movie-portal
   npm install
   ```

2. Get a free API Read Access Token from TMDB:
   create an account at themoviedb.org, then go to
   **Settings → API** and request a Developer key.

3. Create a file named `.env.local` in the project root with this line,
   replacing the placeholder with your own token (see `.env.example`):

   `TMDB_TOKEN=your-token-here`

   The file is ignored by Git, so the token is never committed.

4. Start the development server:

   ```bash
   npm run dev
   ```

   Then open http://localhost:3000.

To create a production build, run `npm run build`.

## API

All movie data and images come from [The Movie Database (TMDB) API](https://developer.themoviedb.org/).
The site uses these endpoints:

- `/movie/popular`: popular movies (front page and movies page)
- `/search/movie`: search by title
- `/movie/{id}`: details for one movie

This product uses the TMDB API but is not endorsed or certified by TMDB.

## Known limitations

- Only the first page of results (20 movies) is shown, both for the
  popular list and for search results. There is no pagination yet.
- Search only matches movie titles. There is no filtering by genre or
  sorting.
- The detail page shows basic information only (no cast, trailers or
  where to stream).
- The site is only available in English.