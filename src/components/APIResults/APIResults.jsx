import noImage from '/images/no-image.jpg'

export default function APIResults({
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
          <span>
            {firstTopicTitle}:{' '}
            {firstTopicContent
              ? firstTopicContent.map(topic => (
                  <span key={topic.id ? topic.id : topic}>
                    {topic.name ? topic.name : topic} -{' '}
                  </span>
                ))
              : firstTopicContentNotFound}
          </span>
          {/* Conteúdo não iterável */}
          <p>
            {secondTopicContent
              ? typeof secondTopicContent === 'array'
                ? secondTopicContent.map(platform => <span>{platform}</span>)
                : secondTopicTitle + secondTopicContent
              : secondTopicContentNotFound}
          </p>
          {/* Data de lançamento */}
          <p>
            {thirdTopicContent
              ? thirdTopicTitle +
                thirdTopicContent.split('-').reverse().join('/')
              : thirdTopicContentNotFound}
          </p>
          <button className="btn">Adicionar a lista</button>
        </div>
      </div>
    </>
  )
}
