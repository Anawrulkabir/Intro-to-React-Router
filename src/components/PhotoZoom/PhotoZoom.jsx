import { useLoaderData, useParams } from 'react-router-dom'
import BackButton from '../Buttons/BackButton'

const PhotoZoom = () => {
  //   const params = useParams() // returns the parameters we passed ,here we used id
  //   console.log(params)
  const { userId } = useParams()
  console.log(userId)
  const photo = useLoaderData()
  const { url, title, id } = photo
  return (
    <div>
      <img src={url} alt={title} className="w-full" />
      <BackButton></BackButton>
    </div>
  )
}

export default PhotoZoom
