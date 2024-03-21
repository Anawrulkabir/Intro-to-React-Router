import { useNavigate } from 'react-router-dom'

const HomeButton = () => {
  const navigate = useNavigate()
  const Home = () => {
    navigate('/')
  }
  return (
    <div>
      <button
        onClick={Home}
        className="text-white bg-amber-500 p-1 rounded-md m-2"
      >
        Home
      </button>
    </div>
  )
}

export default HomeButton
