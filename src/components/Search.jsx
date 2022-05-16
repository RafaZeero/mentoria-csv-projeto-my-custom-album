import { SearchArea } from './Search/SearchArea'
import { SearchButton } from './Search/SearchButton'

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
      <form
        onSubmit={onSubmitFunction}
        className="flex flex-col justify-center"
      >
        <h1 className="text-xl font-semibold m-3">{sectionName}</h1>
        <div className="flex justify-center">
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
        <p className="text-gray-800 font-searchArea mt-4">
          Resultados para '{searchWord}'
        </p>
      )}

      {error && <p className="text-red-700 mt-3">{error}</p>}
    </>
  )
}
