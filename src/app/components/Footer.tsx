
import {FaFacebook} from "react-icons/fa";
import {FaGithub} from "react-icons/fa";
import {FaInstagram} from "react-icons/fa";
import {FaGoogle} from "react-icons/fa";
import {FaYoutube} from "react-icons/fa";

const Footer = () => {
  return (
   
<section className='contact-form'>
<h2 className='contact-me'>Contact <span>Me</span></h2>
<form action="">
    <div className='input'>
     <input type="text" placeholder='Full Name'/>
     <input type="email" placeholder='Email'/>
     <div>
        <input type="number" placeholder='Phone Number'/>
        <input type="text" placeholder='Subject' />
        <textarea name="" id="" cols={30} rows={10} placeholder='Your Message'></textarea>
     </div>
     <input type="Submit" value="send message"  className='btn'/>
    </div>
</form>
<footer className='footer'>
<div className='social'>
     <FaFacebook />
     <FaGithub/>
     <FaInstagram/>
     <FaGoogle/>
     <FaYoutube/>
   <section id="Contact-section"></section>
</div>
 <ul className='list'>
       <li><a href="#">FAQS</a></li>
       <li><a href="#">About Me</a></li>
       <li><a href="#">Contact</a></li>
       <li><a href="#">Privacy Policy</a></li>
</ul>
<p className='copyright'>2024 Faiza | All rights reserved</p>
</footer>
</section>
  )
}

export default Footer;