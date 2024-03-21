import { GoHomeFill } from 'react-icons/go'
import { Outlet, Link } from 'react-router-dom'

const Home = () => {
  return (
    <div className="flex flex-col justify-center items-center gap-4">
      <nav className="flex gap-4 bg-gray-300 p-3 w-full items-center justify-around">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
        <Link to="/users">Users</Link>
        <Link to="/photos">Galary</Link>
        <Link to="/error">Error</Link>
      </nav>

      <div className="flex flex-row justify-center items-center gap-2 mt-32 text-3xl">
        <GoHomeFill className="text-green-700" />
        <span>Home Page</span>
      </div>
      <Outlet></Outlet>
    </div>
  )
}

export default Home
