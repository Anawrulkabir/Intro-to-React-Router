import { MdError } from 'react-icons/md'
import HomeButton from '../Buttons/HomeButton'

const Error = () => {
  return (
    <div className="flex justify-center items-center gap-4">
      <h1>Error 404</h1>
      <MdError className=" text-red-600"></MdError>
      <HomeButton></HomeButton>
    </div>
  )
}

export default Error
