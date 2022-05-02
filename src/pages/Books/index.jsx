import { useState } from 'react'

const books_api_url = 'https://www.googleapis.com/books/v1/volumes?key='

export default function Books() {
  const [searchParams, setSearchParams] = useState('')
  const [data, setData] = useState([])

  const handleSearch = e => {
    setSearchParams(e.target.value)
  }

  const onSubmit = e => {
    e.preventDefault()

    const slug = searchParams.split(' ').join('-').toLowerCase()

    setData([])

    fetch(books_api_url + import.meta.env.VITE_BOOKS_API_KEY + `&q=${slug}`)
      .then(response => response.json())
      .then(data => setData(data.items))
      // .then(data => console.log(data))
      .catch(err => console.log(err))

    setSearchParams('')
  }

  return (
    <div>
      <h1>Books</h1>
      <form onSubmit={onSubmit}>
        <input type="text" value={searchParams} onChange={handleSearch} />
        <button type="submit">Pesquisar livro</button>
      </form>

      {data &&
        data.map(book => (
          <ul key={book.id}>
            <li>Título: {book.volumeInfo.title}</li>
            <li>Série: {book.volumeInfo.subtitle}</li>
            <li>Número de Páginas:{book.volumeInfo.pageCount}</li>
            <li>{book.volumeInfo.publishedDate}</li>
            <img src={book.volumeInfo.imageLinks?.thumbnail} alt="Book cover" />
          </ul>
        ))}
    </div>
  )
}
