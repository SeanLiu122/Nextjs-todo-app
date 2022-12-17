export default function Blog({ posts }) {
  return (
    <>
      <h1>List of blogs</h1>
      <ul>
        {posts.map((post, index) => (
          <li key={index}>{post.title}</li>
        ))}
      </ul>
    </>
  )
}

export async function getStaticProps() {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts');
  const posts = await res.json();

  console.log(posts);

  return {
    props: {
      posts,
    },
  }
}