import { SearchArea } from './Search/SearchArea'
import { SearchButton } from './Search/SearchButton'

//styles
import './Search.css'

export default function Search({
  sectionName,
  onSubmitFunction,
  nameValue,
  searchParams,
  searchFunction,
  placeholderValue,
  buttonContent,
  searchWord,
  error
}) {
  return (
    <>
      <form onSubmit={onSubmitFunction} className="form_search">
        <h1>{sectionName}</h1>
        <div className="search_area">
          <SearchArea
            nameValue={nameValue}
            searchParams={searchParams}
            searchFunction={searchFunction}
            placeholderValue={placeholderValue}
          />
          <SearchButton buttonContent={buttonContent} />
        </div>
      </form>

      {searchWord && (
        <p className="search_word">Resultados para '{searchWord}'</p>
      )}

      {error && <p>{error}</p>}
    </>
  )
}
