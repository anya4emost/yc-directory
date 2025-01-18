import Image from "next/image";
import SearchForm from "../../components/SearchForm";
import StartupCard from "../../components/StartupCard";

export default async function Home({ searchParams }: { searchParams: Promise<{ query?: string }> }) {
  const query = (await searchParams).query;

  const posts = [{
    _createdAt: new Date(),
    views: 55,
    author: { _id: 1, name:'Anna' },
    _id: 1,
    description: "This is a description",
    image: "https://demo-source.imgix.net/group_photo.jpg",
    category: "Robots",
    title: "We Robots"
  }]
  return (
    <>
      <section className="pink_container">
        <h1 className="heading">Pitch your startup, connect with entrepreneurs</h1>
        <p className='sub-heading !max-w-3xl'>Submit ideas, vote on pitches and get noticed in virtual competitions.</p>
        <SearchForm query={query} />
      </section>

      <section className="section_container">
        <p className="text-30-semibold">
          {query ? `Search result for "${query}"` : 'All Startups'}
        </p>

        <ul className='mt-7 card_grid'>
          {posts?.length > 0 ? (posts.map((post: StartupCardType) => (
            <StartupCard key={post?._id} post={post} />
          ))
          ) : (
              <p className="no-results">No startups found</p>
          )}
        </ul>
      </section>
    </>
  );
}
