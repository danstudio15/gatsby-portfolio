import React, {useRef} from 'react'
import * as styles from '../styles/form.module.css';
import { navigate } from "gatsby"

const Form = ({json}) => {

  const content = json.inputs.map(input => (
    <label key={input.label}>
      {input.label}
      <input type={input.type} name={input.name}/>
    </label>
  ));
  
  const path = json.link;
  const form = useRef(null);

  let onSubmitHandler = (event) => {
    if (form.current) {
      event.preventDefault();

      let data = [];
      for (let i=0; i<event.target.length; i++) {
        data.push(event.target[i].value);
      }

      navigate(path, {state: { data }})
    }
  }

  return (
    <div className={styles.form} onSubmit={onSubmitHandler}>
      <form ref={form}>
        {content}
        <button type="submit">Go</button>
      </form>
    </div>
  )
}

export default Form