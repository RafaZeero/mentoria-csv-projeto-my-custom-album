//make books api
import noImage from 'images/no-image.jpg'

export default function MoviesAPI({
  imageApi,
  altImage,
  resultTitle,
  firstTopicTitle,
  firstTopicContent,
  firstTopicContentNotFound,
  secondTopicTitle,
  secondTopicContent,
  secondTopicContentNotFound,
  thirdTopicTitle,
  thirdTopicContent,
  thirdTopicContentNotFound
}) {
  return (
    <>
      <div className="card">
        {/* Imagem do item */}
        <img
          src={imageApi ? imageApi : noImage}
          alt={altImage}
          className="card_img"
        />
        <div className="card_info">
          {/* Título do item */}
          <h2>{resultTitle}</h2>
          {/* Conteúdo iterável */}
          {/* <span>
            {firstTopicTitle}:{' '}
            {firstTopicContent ? firstTopicContent : firstTopicContentNotFound}
          </span> */}
          {/* Data de lançamento */}
          <p>
            {thirdTopicContent
              ? thirdTopicTitle +
                thirdTopicContent.split('-').reverse().join('/')
              : thirdTopicContentNotFound}
          </p>
          {/* Conteúdo não iterável */}
          <p>
            {secondTopicContent
              ? typeof secondTopicContent === Array
                ? secondTopicContent.map(sinopse => <span>{sinopse}</span>)
                : secondTopicTitle + secondTopicContent.slice(0, 300) + '...'
              : secondTopicContentNotFound}
          </p>
          <button className="btn">Adicionar a lista</button>
        </div>
      </div>
    </>
  )
}
