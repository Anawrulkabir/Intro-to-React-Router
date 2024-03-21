import { useLoaderData } from 'react-router-dom'
import User from '../User/User'
const Users = () => {
  const users = useLoaderData()
  return (
    <div>
      <p>Total Users : {users.length}</p>
      <h2>All Users</h2>
      <div className="grid md:grid-cols-3 gap-3">
        {users.map((user) => (
          <User user={user}></User>
        ))}
      </div>
    </div>
  )
}

export default Users
