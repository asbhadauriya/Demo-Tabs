import React from 'react';
import { FooterData } from '../json/FooterData';
import { Link } from 'react-router-dom';
// import './Footer.css'; // Import your CSS file for styling

function Footer() {
  return (
    <div className="footer">
    {
        FooterData.map((data)=>{
            return(

                <Link style={{textDecoration:'none',backgroundColor:data?.color}} to={data.link} className="footer-button">{data.title}</Link>
            )

        })
    }
    </div>
  );
}

export default Footer;
