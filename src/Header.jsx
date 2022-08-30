import React from 'react';

export default function Header(){
    return(
        <header>
            <nav>
                <div className="logo">
                    <p>Favour Badakin</p>
                </div>
                <div>
                    <ul  className='nav-ul'>
                        <li>Home</li>
                        <li>About us</li>
                        <li>Services</li>
                        <li>Contact us</li>
                    </ul>
                </div>
            </nav>
        </header>
    )
}