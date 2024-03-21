import { GoHomeFill } from 'react-icons/go'
import { Outlet, NavLink, useNavigation } from 'react-router-dom'
import './Home.css'
const Home = () => {
  const navigation = useNavigation()
  return (
    <div className="flex flex-col justify-center items-center gap-4">
      <nav className="flex gap-4 bg-gray-300 p-3 w-full items-center justify-around">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/contact">Contact</NavLink>
        <NavLink to="/users">Users</NavLink>
        <NavLink to="/photos">Galary</NavLink>
        <NavLink to="/error">Error</NavLink>
      </nav>

      <div className="flex flex-row justify-center items-center gap-2 mt-32 text-3xl">
        <GoHomeFill className="text-green-700" />
        <span>Home Page</span>
      </div>

      {navigation.state === 'loading' ? 'Loading Now ...' : <Outlet></Outlet>}
    </div>
  )
}

export default Home
