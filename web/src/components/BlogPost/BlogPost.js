function toISO(date) {
  return new Date(date).toLocaleString()
}

const BlogPost = ({ post }) => {
  return (
    <article key={post.id} id={post.id}>
      <header>
        <h2>{post.title}</h2>
      </header>
      <p>{post.body}</p>
      Posted @ <time>{toISO(post.createdAt)}</time>
    </article>
  )
}

export default BlogPost
