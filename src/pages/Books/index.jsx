import { useState } from 'react'
//styles
import './books.css'

const books_api_url = 'https://www.googleapis.com/books/v1/volumes?key='

export default function Books() {
  const [searchParams, setSearchParams] = useState('')
  const [searchWord, setSearchWord] = useState('')
  const [data, setData] = useState([])
  const [error, setError] = useState(null)

  const handleSearch = e => {
    setSearchParams(e.target.value)
  }

  const onSubmit = e => {
    e.preventDefault()
    setError(null)

    const slug = searchParams.split(' ').join('-').toLowerCase()

    setData([])

    if (!slug.length || slug.length < 3) {
      setSearchWord('')
      return setError('Busque com no mínimo 3 caracteres')
    }

    fetch(books_api_url + import.meta.env.VITE_BOOKS_API_KEY + `&q=${slug}`)
      .then(response => response.json())
      .then(data => setData(data.items))
      // .then(data => console.log(data))
      .catch(err => console.log(err))

    setSearchWord(searchParams)
    setSearchParams('')
  }

  return (
    <div>
      <form onSubmit={onSubmit} className="form_search">
        <h1>Books</h1>
        <div className="search_area">
          <input
            type="text"
            name="books"
            value={searchParams}
            onChange={handleSearch}
            placeholder="books"
          />
          <button type="submit">Pesquisar</button>
        </div>
      </form>

      {error && <p>{error}</p>}

      {searchWord && (
        <p className="search_word">Resultados para '{searchWord}'</p>
      )}

      <section className="book_list">
        {data &&
          data.map(book => (
            <div key={book.id}>
              <div className="card">
                <img
                  src={
                    book.volumeInfo.imageLinks?.thumbnail
                      ? book.volumeInfo.imageLinks?.thumbnail
                      : '../../../public/images/no-image.jpg'
                  }
                  alt="Book cover"
                  className="card_img"
                />
                <div className="card_info">
                  <h2>{book.volumeInfo.title}</h2>
                  <span>
                    Autor:{' '}
                    {book.volumeInfo.authors
                      ? book.volumeInfo.authors.map(author => (
                          <span key={author}>{author} - </span>
                        ))
                      : 'Autor não encontrado'}
                  </span>
                  <p>
                    {book.volumeInfo.categories
                      ? 'Gênero: ' + book.volumeInfo.categories
                      : 'Gênero não encontrado'}
                  </p>
                  <p>
                    {book.volumeInfo.publishedDate
                      ? 'Lançado em ' +
                        book.volumeInfo.publishedDate
                          .split('-')
                          .reverse()
                          .join('/')
                      : 'Lançamento não encontrado'}
                  </p>
                  <button className="btn">Adicionar aos lidos</button>
                </div>
              </div>
            </div>
          ))}
      </section>
    </div>
  )
}
