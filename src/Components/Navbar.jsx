import React from 'react'

const Navbar = ({setCategory}) => {
  return (
    <>
    <nav className="navbar navbar-expand-lg bg-body-tertiary" data-bs-theme="dark">
  <div className="container-fluid">
    <a className="navbar-brand badge bg-light text-dark fs-5" href="/">LatestNews</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
      <ul className="navbar-nav" style={{cursor:"pointer"}}>
        <li className='nav-item '>
        <div className="nav-link pe-auto" onClick={()=>setCategory("technology")}>Technology</div>
        </li>
        <li className='nav-item '>
        <div className="nav-link pe-auto" onClick={()=>setCategory("sports")}>Sports</div>
        </li>
        <li className='nav-item '>
        <div className="nav-link pe-auto" onClick={()=>setCategory("science")}>Science</div>
        </li>
        <li className='nav-item '>
        <div className="nav-link pe-auto" onClick={()=>setCategory("entertainment")}>Entertainment</div>
        </li>
      </ul>
    </div>
  </div>
</nav>
    </>
  )
}

export default Navbar
