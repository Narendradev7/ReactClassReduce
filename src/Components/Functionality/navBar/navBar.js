import { Link } from "react-router-dom"

const NavBar = ()=>{
    const darkTheme=false
    return(
        <nav 
        class={darkTheme ?"navbar navbar-expand-sm bg-dark navbar-dark":"navbar navbar-expand-sm bg-light navbar-light"}
        
        >
  <div className="container-fluid">
    <ul className="navbar-nav">
      <li className="nav-item nav-link active">
        <Link to={"/"}>Home</Link>
      </li>
      <li className="nav-item nav-link">
          <Link to={"/about"}>About</Link>
      </li>
      <li className="nav-item nav-link">
          <Link to={"/setting"}>Setting</Link>
      </li>
      <li className="nav-item nav-link">
          <Link to={"/blog"}>Blog</Link>
      </li>
    </ul>
  </div>
</nav>

    )
}

export default NavBar