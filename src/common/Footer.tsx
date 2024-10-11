import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
    const footerMenu = ['Globe-Guide','Home', 'About', 'Create Itinerary', 'Destination','Search'];

    const FooterMenuData = footerMenu.map((footerdata, index) => (
        <li key={footerdata}>
            <Link to={`#${footerdata.toLocaleLowerCase().replace(" ", "_")}`} className="footer-link">
                {footerdata}
            </Link>
        </li>
    ));

    return (
        <>
            <div className="main-footer">
                <div className='text-center text-white py-5'>COPYRIGHT ©2024 dkhrsolutions.com.ALL RIGHTS RESERVED </div>         
            </div>
        </>
    );
};

export default Footer;
