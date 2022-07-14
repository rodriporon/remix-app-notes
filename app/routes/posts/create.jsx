import { redirect } from '@remix-run/node'
import { db } from '../../services/db'

export const action = async ({ request }) => {
  const form = await request.formData()
  const title = form.get('title')
  const body = form.get('body')

  const post = await db.post.create({ data: { title, body } })

  return redirect(`/posts/${post.id}`)
}

export function ErrorBoundary () {
  return (
    <div>
      <h1>Algo salió mal :{'('}</h1>
    </div>
  )
}
export default function CreatePost () {
  return (
    <>
      <h2>Create Post</h2>
      <form method="POST">
          <div>
            <label htmlFor="title">Title</label>
            <input type="text" name="title" id="title" />
          </div>

          <div>
            <label htmlFor="body">Body</label>
            <textarea type="text" name="body" id="body" />
          </div>

          <button type="submit">Add new post</button>
        </form>
      </>
  )
}
