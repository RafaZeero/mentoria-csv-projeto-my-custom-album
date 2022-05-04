import noImage from '../../public/images/no-image.jpg'

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
  const platformskeys = secondTopicContent.map(plat => plat.platform.name)
  console.log(platformskeys)
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
            {firstTopicContent.length > 0
              ? firstTopicContent.map(topic => (
                  <span key={topic.id ? topic.id : topic}>
                    {topic.name ? topic.name : topic} -{' '}
                  </span>
                ))
              : firstTopicContentNotFound}
          </span>
          {/* Conteúdo não iterável */}
          <p>
            {secondTopicContent !== undefined
              ? secondTopicTitle + secondTopicContent[0].platform.name
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
