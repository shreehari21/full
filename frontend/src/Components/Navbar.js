import React from 'react'
import { Link } from 'react-router-dom'
import '../Styles.css'
const Navbar = () => {
  return (
    <div>
        <nav class="navbar navbar-expand bg-dark px-3">
        <div class="container-fluid">
        
            <Link class="navbar-brand text-white stynav1" to='/'><img src='https://static.vecteezy.com/system/resources/thumbnails/004/297/596/small/education-logo-open-book-dictionary-textbook-or-notebook-with-sunrice-icon-modern-emblem-idea-concept-design-for-business-libraries-schools-universities-educational-courses-vector.jpg' alt='' className='imgnav rounded-pill'></img>&ensp;&ensp;Book Haven</Link>&ensp;&ensp;
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div class="navbar-nav">
                <Link class="nav-link stynav px-3" aria-current="page" to='/'><div className='col'>Home</div></Link>&ensp;&ensp;
                 <Link class="nav-link stynav text-secondary px-3" to='/courses'><div className='col'>Courses</div></Link>&ensp;&ensp; 
                <Link class="nav-link stynav px-3" to='/aboutus'><div className='col'>About</div></Link>&ensp;&ensp;
            </div>
            </div>
        </div>
        </nav>
    </div>
  )
}
export default Navbar