export function SearchArea({
  nameValue,
  searchParams,
  searchFunction,
  placeholderValue
}) {
  return (
    <>
      <input
        className="rounded-md px-2 mr-2 placeholder:italic bg-emerald-200"
        type="text"
        name={nameValue}
        value={searchParams}
        onChange={searchFunction}
        placeholder={placeholderValue}
      />
    </>
  )
}
