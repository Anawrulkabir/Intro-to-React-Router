import { useLoaderData } from 'react-router-dom'
import BackButton from '../Buttons/BackButton'

const PhotoZoom = () => {
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
