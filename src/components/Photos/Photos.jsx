import { useLoaderData, Link, useParams } from 'react-router-dom'
import Photo from '../Photo/Photo'
const Photos = () => {
  const photos = useLoaderData()

  return (
    <div>
      <h1>Photo Galary</h1>
      <h2>Explore {photos.length} photos from our galary</h2>
      <div className="grid grid-cols-5 gap-1">
        {photos.map((photo) => (
          <Photo photo={photo}></Photo>
        ))}
      </div>
    </div>
  )
}

export default Photos
