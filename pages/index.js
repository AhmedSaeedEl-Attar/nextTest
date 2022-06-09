import Link from "next/link";

export default function Home(props) {
  return (
    <div>
      <div>Ahmed</div>
      {props.posts.map(post => (
       <div  key={post.id}>
         <Link href={`/${post.id}`} key={post.id}>{post.title}</Link>
       </div>
      ))}
    </div>
  );
}


export async function getStaticProps() {
  const res = await fetch('http://localhost:3000/api/data');
  const posts = await res.json();
  return {
    props: {
      posts,
   }
}
}

// getStaticProps is a function that is called by Next.js when your page is requested.
// It's used to get the data needed to render your page.
// It's called before the page is actually rendered.
// It's useful for fetching data from a database or API.
// It's also useful for pre-rendering the page.

// getStaticPaths is a function that is called by Next.js when your page is requested.
// It's used to get the paths needed to render your page.
// It's called before the page is actually rendered.
// It's useful for pre-rendering the page.
// It's also useful for fetching data from a database or API.

// getServerSideProps is a function that is called by Next.js when your page is requested.
// It's used to get the data needed to render your page.
// It's called after the page is actually rendered.
// It's useful for fetching data from a database or API.
// It's also useful for pre-rendering the page.

