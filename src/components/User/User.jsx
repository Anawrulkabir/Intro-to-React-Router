import { Link } from 'react-router-dom'
const User = ({ user }) => {
  const { name, email, phone, id } = user
  return (
    <div className="flex flex-col justify-between border-2 border-orange-400 rounded-lg p-4 ">
      <h2 className="text-xl font-semibold">{name}</h2>
      <p>Email : {email}</p>
      <p className="text-sm">Phone : {phone}</p>

      <Link to={`/user/${id}`}>
        <button className=" bg-yellow-400 w-full rounded-xl mt-3 p-1">
          Show Details
        </button>
      </Link>
    </div>
  )
}

export default User
