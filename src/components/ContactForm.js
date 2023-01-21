import { useRef } from 'react';
import emailjs from '@emailjs/browser';
   
    export default function ContactForm() {
      const form = useRef();
    
      const sendEmail = (e) => {
        e.preventDefault();    
        emailjs.sendForm('service_s1hmk1s', 'template_dx8srnq', form.current, 'KNshdyHxDVE80s1gd')
          .then((result) => {
              console.log(result.text);

          }, (error) => {
              console.log(error.text);
          });
      };
    
      return (

        <div className="contact-container">
            <h1>Contact</h1>
            <form ref={form} onSubmit={sendEmail}>
              <label>Name</label>
              <input type="text" name="user_name" />
              <label>Email</label>
              <input type="email" name="user_email" />
              <label>Message</label>
              <textarea name="message" />
              <input type="submit" value="Send" />
            </form>
        </div>
      );
    };
