import { Link } from 'react-router-dom'
const Photo = ({ photo }) => {
  const { url, id, title } = photo
  return (
    <div>
      <Link to={`/photos/${id}`}>
        <img src={url} alt={title} className="w-20 h-20 " />
      </Link>
    </div>
  )
}

export default Photo
