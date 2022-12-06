import React, { useState } from "react";
import './Contact.css';

function ContactForm() {

  //Hook to manage the form data
  const [formState, setFormState] = useState({ name: '', email: '', message: '' });
  const { name, email, message } = formState;
  const [errorMessage, setErrorMessage] = useState('');

  //Using setFormState function to update the formState value for the name property. Assigning the value from input with e.target.value and assign this value to the property formState.name and using the spread operator, ...formState, will allow retaining the other key-value pairs in this object.
  //The name property of e.target.name refers to the name attribute of the form elements
  // setFormState({ ...formState, [e.target.name]: e.target.value })
  function handleInput(e) {
    //The name property of e.target.name refers to the name attribute of the form elements
    if (!e.target.value.length) {
      setErrorMessage(`${e.target.name} is required.`);
    } else {
      setErrorMessage('');
    }

    if (!errorMessage) {
      setFormState({ ...formState, [e.target.name]: e.target.value })
    }
    console.log('errorMessage', errorMessage);
  };
  console.log(formState);

  //Need to send data to database
  function handleSubmit(e) {
    e.preventDefault();
    console.log(formState)
  }

  return (
    <div className="ms-5 me-5 mt-3 pt-3">
      <h2 id="contact-header" className="ms-3 pt-1">Contact me</h2>

      <form id="contact-form" onSubmit={handleSubmit} className="ms-4 pb-3">
        <div class="mb-3 pb-2">
          <label for="name" htmlFor="name" class="form-label">Name</label>
          <br></br>
          {/* Adding onChange event listener */}
          <input type="name" defaultValue={name} onChange={handleInput} name="name" aria-label="full-name" id="contact-name"></input>
        </div>

        <div class="mb-3 pb-2">
          <label for="email" htmlFor="email" class="form-label">Email</label>
          <br></br>
          <input type="email" defaultValue={email} onChange={handleInput} name="email" id="contact-email"></input>
        </div>

        <div class="mb-3 form-message">
          <label htmlFor="message" className="pb-2">Message:</label>
          <br></br>
          <textarea name="message" defaultValue={message} onChange={handleInput} rows="5" id="contact-message" />
        </div>

        {errorMessage && (
          <di>
            <p className="error-message">{errorMessage} </p>
          </di>
        )}

        <button type="submit" class="contact-btn btn-lg mt-3 mb-5">Submit</button>
      </form>

    </div>
  )
}

export default ContactForm;