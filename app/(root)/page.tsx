import SearchForm from "@/app/components/SearchForm";

export default async function Home( { searchParams }: {
  searchParams: Promise<{ query?: string }>
} ) {
  const query = ( await searchParams ).query;

  return (
      <>
        <section className={ "pink_container pattern-bg" }>
          <h1 className={ "heading" }>
            Pitch your Startup, <br/>
            Connect with Entrepreneurs
          </h1>
          <p className="sub-heading !max-w-3xl">
            Submit Ideas, Vote on Pitches, and Get Noticed in Virtual
            Competitions.
          </p>

          <SearchForm query={ query }/>


        </section>
      </>


  );
}
