import { useNavigate } from 'react-router-dom'

const BackButton = () => {
  const navigate = useNavigate()
  const goBack = () => {
    navigate(-1)
  }
  return (
    <div>
      <button
        onClick={goBack}
        className="text-white bg-amber-500 p-1 rounded-md m-2"
      >
        Back
      </button>
    </div>
  )
}

export default BackButton
