import { useRef } from 'react';
import emailjs from '@emailjs/browser';
import '../styles/contact.css'
   
    export default function ContactForm() {
      const form = useRef();
    
      const sendEmail = (e) => {
        e.preventDefault();   
        emailjs.sendForm('service_2g40c6q', 'template_dx8srnq', form.current, 'KNshdyHxDVE80s1gd')
          .then((result) => {
              document.querySelector('.submit-btn').textContent = "Submmitted Successfully";
              document.querySelector('.submit-btn').style.background = 'green'; 
          }, (error) => {
              document.querySelector('.submit-btn').textContent = "Try Again Later";
              document.querySelector('.submit-btn').style.background = 'red'; 
          });
        }
    
      return (

        <div className="contact-container">
            <div className='reveal'>
              <h1>Contact</h1>
              <form ref={form} onSubmit={sendEmail}>
                <label>Name</label>
                <input type="text" name="user_name" />
                <label>Email</label>
                <input type="email" name="user_email" />
                <label>Message</label>
                <textarea name="message" />
                <button className='submit-btn' type="submit" value="Send">Submit</button>
              </form>
            </div>
        </div>
      );
    };
