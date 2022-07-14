import { Link } from '@remix-run/react'

export default function Index () {
  return (
    <div>
      <h1>Posts with Remix</h1>
      <nav>
        <ul>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/posts/create">Create Post</Link>
          </li>
          <li>
            <Link to="/posts">List Posts</Link>
          </li>
        </ul>
      </nav>
    </div>
  )
}
