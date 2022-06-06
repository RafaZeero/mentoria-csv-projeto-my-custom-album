import { SearchButton } from '../components/Search/SearchButton'
import noImage from '/assets/images/no-image.jpg'

export default function GamesAPI({
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
  const platformskeys = Object.entries(secondTopicContent)
  // console.log(platformskeys)
  return (
    <>
      <div className="flex flex-col max-w-[93vw] w-full flex-wrap bg-white rounded-lg shadow-customShadow justify-center align-center p-4 gap-2">
        {/* Imagem do item */}

        <img
          src={imageApi ? imageApi : noImage}
          alt={altImage}
          className="flex-auto m-auto z-10 inset-0 w-full h-40 object-cover rounded-lg"
        />
        <div className="flex-auto gap-5 leading-6">
          {/* Título do item */}
          <h2>{resultTitle}</h2>
          {/* Conteúdo iterável */}
          <span>
            {firstTopicTitle}:{' '}
            {firstTopicContent.length > 0
              ? firstTopicContent.map(topic => (
                  <span key={topic.id ? topic.id : topic}>
                    {' '}
                    {topic.name ? topic.name : topic} -
                  </span>
                ))
              : firstTopicContentNotFound}
          </span>
          {/* Conteúdo não iterável */}
          <p>
            {secondTopicContent !== undefined
              ? secondTopicTitle +
                Object.values(secondTopicContent).map(test =>
                  Object.values(test).map(gameName => {
                    return ' ' + gameName.name
                  })
                )
              : secondTopicContentNotFound}
          </p>
          {/* Data de lançamento */}
          <p>
            {thirdTopicContent
              ? thirdTopicTitle +
                thirdTopicContent.split('-').reverse().join('/')
              : thirdTopicContentNotFound}
          </p>
          <SearchButton buttonContent={'Adicionar a lista'} />
        </div>
      </div>
    </>
  )
}
