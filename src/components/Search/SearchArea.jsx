export function SearchArea({
  nameValue,
  searchParams,
  searchFunction,
  placeholderValue
}) {
  return (
    <>
      <input
        type="text"
        name={nameValue}
        value={searchParams}
        onChange={searchFunction}
        placeholder={placeholderValue}
      />
    </>
  )
}
