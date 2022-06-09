import Link from 'next/link'
export default function Posts(props) {
    return (
      <div>
        <div>Ahmed</div>
        {props.posts.map(post => (
         <Link key={post.id}>{post.title}</Link>
        ))}
      </div>
    );
  }
  
  
  export async function getStaticProps() {
    const res = await fetch('https://jsonplaceholder.typicode.com/posts');
    const posts = await res.json();
    return {
      props: {
        posts,
     }
  }
  }