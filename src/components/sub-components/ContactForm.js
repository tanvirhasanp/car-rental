import React, { useState } from 'react';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    message: ''
  });

  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  function handleChange(e) {
    const { id, value } = e.target;
    setFormData({ ...formData, [id]: value });
    setErrors({ ...errors, [id]: '' }); // clear error when user types
    setSubmitted(false); // clear submitted message when editing
  }

  function formCheck(e) {
    e.preventDefault();

    const newErrors = {};
    if (!formData.fullName.trim()) newErrors.fullName = 'Required';
    if (!formData.email.trim()) newErrors.email = 'Required';
    if (!formData.message.trim()) newErrors.message = 'Required';

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
    } else {
      setErrors({});
      setSubmitted(true);
      // Clear form (optional)
      setFormData({ fullName: '', email: '', message: '' });
    }
  }

  return (
    <section className='contactForm-section'>
      <div className='contactForm-section__container'>
        <div className='contactForm-left'>
          <h2>Need additional information?</h2>
          <p>A multifaceted professional skilled in multiple fields of research, development as well as a learning specialist. Over 15 years of experience.</p>
          <ul>
            <li>
              <i className="fa-solid fa-phone"></i>
              <a href="tel:+880156-928918">+8801756-928918</a>
            </li>
            <li>
              <i className="fa-solid fa-envelope"></i>
              <a href="mailto:contact@carrental.com">contact@carrental.com</a>
            </li>
            <li>
              <i className="fa-solid fa-location-dot"></i>
              <a href="#">Patuakhali, Bangladesh</a>
            </li>
          </ul>
        </div>

        <form className='contactForm-right' onSubmit={formCheck}>
          <label htmlFor="fullName" className='contactFormLabel'>Full Name</label>
          <input
            type="text"
            id='fullName'
            value={formData.fullName}
            onChange={handleChange}
            placeholder='e.g. John Smith'
          />
          {errors.fullName && <span className="error-text">{errors.fullName}</span>}

          <label htmlFor="email" className='contactFormLabel'>Email</label>
          <input
            type="email"
            id='email'
            value={formData.email}
            onChange={handleChange}
            placeholder='example@email.com'
          />
          {errors.email && <span className="error-text">{errors.email}</span>}

          <label htmlFor="message" className='contactFormLabel'>Tell us about it</label>
          <textarea
            id="message"
            value={formData.message}
            onChange={handleChange}
            placeholder='Please type your message here'
          ></textarea>
          {errors.message && <span className="error-text">{errors.message}</span>}

          <button type='submit'><i className='fa-solid fa-envelope-open-text'></i> Send Message</button>

          {submitted && <p className="success-text">✅ Message sent successfully!</p>}
        </form>
      </div>
    </section>
  );
}
