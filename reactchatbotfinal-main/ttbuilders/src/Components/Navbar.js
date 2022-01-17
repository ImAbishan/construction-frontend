import React, { useState, useEffect  } from 'react';
import { Link } from 'react-router-dom';
import { Button } from './Button';
import './Navbar.css';





function Navbar() {
    const [click, setClick] = useState(false);
    const[button,setButton] = useState(true);

    const closeMobileMenu = () => setClick(false);
    const handleClick = () => setClick(!click);


    const showButton = ()=> {
        if(window.innerWidth <970){
            setButton(false);
        }
        else{
            setButton(true);
        }
    };

    useEffect(() => {
        showButton();
      }, []);


    window.addEventListener('resize', showButton);


    return (
        <>
            <nav className="navbar">
                <div className="navbar-container">
                    <Link to="/" className="navbar-logo" onClick = {closeMobileMenu}>
                        AMANA <i className="fab fa-typo3"></i>

                    </Link>

                    <div className='menu-icon' onClick={handleClick}>
                        <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
                    </div>

                    <ul className={click ? 'nav-menu active' : 'nav-menu'}>



                        
                    <li className = "nev-item">
                        <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                            Home
                        </Link>
                        </li>
               

                    

                   
                    <li className = "nev-item">
                        <Link to='' className='nav-links' onClick={closeMobileMenu}>
                            Calculators
                        </Link>
                        </li>
              
              
                    <li className = "nev-item">
                        <Link to='/services' className='nav-links' onClick={closeMobileMenu}>
                            Services
                        </Link>
                        </li>
                 


                    <li className = "nev-item">
                        <Link to='/contact' className='nav-links' onClick={closeMobileMenu}>
                            Contact us
                        </Link>
                        </li>
    
             
</ul>
                     {button && <Button buttonStyle='btn--outline'> Sign Up </Button> }
                </div>

            </nav>

        </>
    );
}

export default Navbar