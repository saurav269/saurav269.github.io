import React from 'react'
import { useState } from 'react'
import './contact.css'

const Contact = () => {

    const[text,setText] = useState("")

    const handleSubmit=(e)=>{
        //   e.preventDefault()
        //   e.target.reset()
        setText("")
    }
  return (
    <section id='contact'>
      <h5 className='contact__G'>Get In Touch</h5>
      <h2 className='contact__C'>Contact Me</h2>

      <div className='container contact__container'>
        <div className='contact__options'>
      <article className='contact__option'>
        <i class="uil uil-envelope-edit contact__option-icon"></i>
           <h4 className='contact__4'>Email</h4>
           <h5 className='contact__5'>sauravmallik786@gmail.com</h5>
           <a href='mailto:sauravmallik786@gmail.com' target="_blank">Send a massege</a>
        </article>

        <article className='contact__option'>
        <i class="uil uil-whatsapp contact__option-icoon"></i>
           <h4 className='contact__4'>WhatsApp</h4>
           <h5 className='contact__5'>+918670548700</h5>
           <a href='https://api.whatsapp.com/send?phone=+918670548700' target="_blank">Send a massege</a>
        </article>
        </div>
        {/* =======END OF CONTACT OPTIONS======== */}
        <form action='https://formspree.io/f/mqkoabng'
        method='POST'
        onSubmit={handleSubmit}
        >
            <input type='text' name='name' placeholder='Your Full Name' style={{color : "white"}} required/>
            <input type='email' name='email' placeholder='Your Email' required />
            <textarea name='message' rows='7' placeholder='Your Message' required ></textarea>
            <button type='submit' className='button__form'>Send Message</button>
        </form>
      </div>
    </section>
  )
}

export default Contact
