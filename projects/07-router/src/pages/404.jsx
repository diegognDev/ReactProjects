import { Link } from '../Link'

export default function Page404() {
  return (
    <div>
      <h1>This is not fine</h1>
      <img
        src="https://imgs.search.brave.com/W9LtemSgY1IMefa3HD_ofsyEofVB5u4i6bp2315kmtw/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvODYw/NDYzNTIyL3ZlY3Rv/ci80MDQtZXJyb3It/cGFnZS10ZW1wbGF0/ZS1mb3Itd2Vic2l0/ZS00MDQtYWxlcnQt/ZmxhdC1kZXNpZ24u/anBnP3M9NjEyeDYx/MiZ3PTAmaz0yMCZj/PWFkMEQ1Y1FxblJN/UmN5UXRhRmRyazRH/Z085TFlSWWwwNlY0/TVJlWktzT0U9"
        alt="image de error 404"
      />
      <Link to="/">Home</Link>
    </div>
  )
}
