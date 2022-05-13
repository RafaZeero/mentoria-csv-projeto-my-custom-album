export function SearchButton({ buttonContent }) {
  const addToMyAlbum = () => {}

  return (
    <>
      <button onClick={addToMyAlbum} className="search_button">
        {buttonContent}
      </button>
    </>
  )
}
