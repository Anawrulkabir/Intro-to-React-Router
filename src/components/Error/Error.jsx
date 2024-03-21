import { MdError } from 'react-icons/md'
import HomeButton from '../Buttons/HomeButton'
import { useRouteError } from 'react-router-dom'

const Error = () => {
  const error = useRouteError()
  return (
    <div className="flex justify-center items-center gap-4">
      <h1>Error 404</h1>
      <MdError className=" text-red-600"></MdError>
      <p>{error.statusText || error.message}</p>
      <HomeButton></HomeButton>
    </div>
  )
}

export default Error
