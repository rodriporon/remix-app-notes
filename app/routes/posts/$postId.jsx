import { useLoaderData } from '@remix-run/react'
import { db } from '../../services/db'

export const loader = async ({ params }) => {
  const { postId } = params
  const post = await db.post.findUnique({ where: { id: postId } })
  return {
    post
  }
}

export default function SinglePost () {
  const { post } = useLoaderData()
  return (
        <>
            <h2>Post Title of {post.title}</h2>
            <p>
                {post.body}
            </p>
        </>
  )
}
