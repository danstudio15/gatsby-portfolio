import React, { useRef } from 'react'
import Layout from '../components/Layout'
import * as styles from '../styles/contact.module.css'
import emailjs from "@emailjs/browser"


const Contact = () => {

  const form = useRef<HTMLFormElement>(null);

  function sendEmail(): void {
    if (form.current) {
      emailjs.sendForm(
        "service_vjggo6j",
        "template_h49ynqt",
        form.current,
        "user_CRBT49Rt117fRFsVJCWfX"
      )
    }
  }

  return (
    <Layout>
    <form ref={form} className={styles.form} onSubmit={sendEmail}>
      
      <label className={styles.left}>
        Message
        <textarea name="message"/>
      </label>

      <div className={styles.right}>
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

    </form>
    </Layout>
  );
}
 
export default Contact