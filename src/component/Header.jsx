import React from 'react'
// import img from '../image/m1.jpg'
import { Link } from 'react-router-dom'
const Header = () => {



  function openNav() {
    document.getElementById("mySidenav").style.width = "100%";
    document.getElementById("main").style.marginLeft = "250px";
  }

  function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
    document.getElementById("main").style.marginLeft = "0";
  }

  return (
    <div>
      <>
        <div className="container-fluid con">
          <marquee>In today’s world, almost everybody chooses to travel and tourism as their leisure. Traveling is a good way to learn about the world.</marquee>
        </div>

      </>
      <>
        <section className="nav-bar" id='header'>
          <div className="logo">
            <img className="" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQ4r6qaeLj8nKP1evGA42vh29o9OUWjFQ8sw&s" style={{ height: '70px', width: '150px',position:'relative',bottom:'12px' }} alt='about' />
          </div>
          <ul className="menu1">
            <li><Link className='underline active' to="/tourism-management-system">home</Link></li>
            <li><Link className='underline' to="/Blog">blog</Link></li>
            <li><Link className='underline' to="/Destination">destination</Link></li>
            <li><Link className='underline' to="/About">about</Link></li>
            <li><Link className='underline' to="/Guide">guide</Link></li>
            <li><Link className='underline' to="/Contact">Contact us</Link></li>
            {/* <li><Link className='underline ' to="/Register">Login/Register</Link></li> */}
          </ul>
        </section>
        <div id="header1">
          <div id="mySidenav" className="sidenav" >
            <Link
              // to="javascript:void(0)"
              className="closebtn"
              onClick={closeNav}
            >
            
            </Link>
            <ul className="">
              <li><Link to="/tourism-management-system"  onClick={closeNav}>home</Link></li>
              <li><Link to="/pages/Blog.jsx"  onClick={closeNav}>blog</Link></li>
              <li><Link to="/pages/Destination"  onClick={closeNav}>destination</Link></li>
              <li><Link to="/pages/About.jsx"  onClick={closeNav}>about</Link></li>
              <li><Link to="/pages/Guide.jsx"  onClick={closeNav}>guide</Link></li>
              <li><Link to="/pages/Contact.jsx"  onClick={closeNav}>Contact us</Link></li>
              <li><Link to="/feedback">Feedback</Link></li>
            </ul>
          </div>
          <div id="main">
           
            <span style={{ fontSize: 30, cursor: "pointer", float: 'right' }} onClick={openNav}>
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQ4r6qaeLj8nKP1evGA42vh29o9OUWjFQ8sw&s"
                style={{ height: '60px', width: '150px', position: 'relative', right: '178px' }}
                alt="Bootstrap"
              />
              ☰
            </span>
          </div>
        </div>

      </>
    </div>
  )
}


export default Header