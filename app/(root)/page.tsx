import SearchForm from "@/components/SearchForm";
import StartupCard, {StartupTypeCard} from "@/components/StartupCard";
import {sanityFetch, SanityLive} from "@/sanity/lib/live";
import {STARTUPS_QUERY} from "@/sanity/lib/queries";


export default async function Home( { searchParams }: {
  searchParams: Promise<{ query?: string }>
} ) {
  const query = (await searchParams).query;
  const params = { search: query || null };

  const { data: posts } = await sanityFetch({ query: STARTUPS_QUERY, params });
  return (
      <>
        <section id={ 'header-section' } className={ "pink_container pattern-bg" }>
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


        <section id={ 'startups-section' } className={ 'section_container' }>
          <p className={ 'text-30-semibold' }>
            { query ? `Search Results for "${ query }"` : 'Top Startups' }
          </p>

          <ul className="mt-7 card_grid">
            {
              posts?.length > 0
              ? posts.map((post: StartupTypeCard) => (
                  <StartupCard key={ post?._id } {...post}/>
              ) ) : (
                  <p className={ 'no-result' }>
                    No Startups Found
                  </p>
              )
            }
          </ul>

        </section>
        <SanityLive/>


      </>


  );
}
