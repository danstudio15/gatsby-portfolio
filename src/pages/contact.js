import React, { useRef } from 'react'
import Layout from '../components/Layout'
import * as styles from '../styles/contact.module.css'
// import emailjs from "emailjs-com"


const Contact = () => {

  const form = useRef();

  function sendEmail() {
    // emailjs.sendForm(
    //   "service_vjggo6j",
    //   "template_h49ynqt",
    //   form.current,
    //   "user_CRBT49Rt117fRFsVJCWfX"
    // )
  }

  return (
    <Layout>
    <form ref={form} className={styles.form} onSubmit={sendEmail}>

      <div>
        <label>
          Name
          <input type="text" name="user_name"/>
        </label>

        <label>
          Email
          <input type="email" name="user_email"/>
        </label>

        <button type="submit">Send</button>
      </div>
      
      <label>
        Message
        <textarea name="message"/>
      </label>

    </form>
    </Layout>
  );
}
 
export default Contact