export function SearchArea({
  nameValue,
  searchParams,
  searchFunction,
  placeholderValue
}) {
  return (
    <>
      <input
        className="search_input"
        type="text"
        name={nameValue}
        value={searchParams}
        onChange={searchFunction}
        placeholder={placeholderValue}
      />
    </>
  )
}
