
export default function Details ({post}) {
    return (
        <div>
            <h1>{post.title}</h1>
            <p>{post.body}</p>
        </div>
    );
}

// first way 
export async function getStaticPaths() {
    const res = await fetch('http://localhost:3000/api/data');
    const posts = await res.json();
    const paths = posts.map(post => {
        return {
            params: { id: post.id.toString() }
        }
    })
    return {
        paths,
        fallback: false
    }
}

export async function getStaticProps(context) {
    const res = await fetch(`http://localhost:3000/api/${context.params.id} `);
    const post = await res.json();
       return {
           props: {
               post,
           }
       }
   }
