export function SearchButton({ buttonContent }) {
  const addToMyAlbum = () => {}

  return (
    <>
      <button
        // onClick={addToMyAlbum}
        className="bg-emerald-700 border-0 rounded-md text-base text-white p-3 shadow-slate-500 shadow-md cursor-pointer"
      >
        {buttonContent}
      </button>
    </>
  )
}
