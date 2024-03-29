import { useLoaderData } from "@remix-run/react";
import { getPosts } from "../models/posts.server"
import ListadoPosts from "../components/listado-posts";
import style from '../styles/blog.css'

export function meta() {
  return [
    {
      title : 'GuitarLA - Nuestro Blog',
      description: 'GuitarLA, Blog de música y venta de guitarras'
    }
  ]
}

export function links() {
  return [
    {
      rel: 'stylesheet',
      href : style
    }
  ]
}

export async function loader() {
  const posts = await getPosts();
  return posts.data
}

function Blog() {

  const posts = useLoaderData()

  return (
    <main className='contenedor'>   
      <ListadoPosts posts={posts} />
    </main>
  )
}

export default Blog
