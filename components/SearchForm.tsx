type SearchFormProps = {
  defaultValue?: string;
};

export default function SearchForm({ defaultValue = "" }: SearchFormProps) {
  return (
    <form action="/movies" role="search">
      <label htmlFor="search">Search by title</label>
      <input id="search" name="q" type="search" defaultValue={defaultValue} />
      <button type="submit">Search</button>
    </form>
  );
}