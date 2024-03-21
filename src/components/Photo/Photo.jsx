import { Link, useParams } from 'react-router-dom'
const Photo = ({ photo }) => {
  const { url, id, title } = photo
  const params = useParams()
  console.log(params)
  return (
    <div>
      <Link to={`/photos/${id}`}>
        <img src={url} alt={title} className="w-20 h-20 " />
      </Link>
    </div>
  )
}

export default Photo
