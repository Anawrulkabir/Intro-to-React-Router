import { useLoaderData } from 'react-router-dom'
const UserDetails = () => {
  const user = useLoaderData()
  return (
    <div>
      <h2 className="text-xl font-semibold">{user.name}</h2>
      <p>Email : {user.email}</p>
      <p className="text-sm">Phone : {user.phone}</p>
      <p className="text-sm">Web : {user.website}</p>
    </div>
  )
}

export default UserDetails
