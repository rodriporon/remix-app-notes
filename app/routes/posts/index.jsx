import { Link, useLoaderData } from '@remix-run/react'
import { db } from '../../services/db'

export const loader = async () => {
  const posts = await db.post.findMany()
  return {
    posts
  }
}

export default function Posts () {
  const { posts } = useLoaderData()
  return (
        <div>
      <h1>Lista de Posts</h1>
      <nav>
        <ul>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/posts/create">Create Post</Link>
          </li>
        </ul>
      </nav>

      {posts.map(post => (
        <div key={post.id}>
          <h2>{post.title}</h2>
          <p>{post.body}</p>
        </div>))}
    </div>
  )
}
