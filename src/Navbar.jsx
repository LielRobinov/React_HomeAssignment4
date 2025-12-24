import { NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <div>
       <nav>
      <NavLink to="/" style={({ isActive }) => ({ color: isActive ? 'red' : 'black' })}>Home</NavLink>  {" | "}
      <NavLink to="/about" style={({ isActive }) => ({ color: isActive ? 'red' : 'black' })}>About</NavLink>  {" | "}
      <NavLink to="/characters" style={({ isActive }) => ({ color: isActive ? 'red' : 'black' })}>Characters</NavLink>
      </nav>
    </div>
  )
}
