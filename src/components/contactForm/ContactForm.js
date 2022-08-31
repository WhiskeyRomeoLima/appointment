import React from 'react';

const ContactForm = ({ name, setName, phone, setPhone, email, setEmail, handleSubmit, alert }) => {
  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="name">Name:</label>
      <input type="text" id="name" name="nameIn" value={name} 
        onChange={(e) => setName(e.target.value)} required>
      </input>

      <label htmlFor="phone">Phone:</label>
      <input type="tel" id="phone" name="phoneIn" value={phone} 
        onChange={(e) => setPhone(e.target.value)} required
        pattern="[1-9][0-9]{2}-[1-9][0-9]{2}-[0-9]{4}"
        placeholder="Contact Phone (###-###-####)">
      </input>

      <label htmlFor="email">Email:</label>
      <input type="text" id="email" name="emailIn" value={email} 
        onChange={(e) => setEmail(e.target.value)} required>
      </input>
      
      <button type="submit" disabled={alert ? true : false}>
        Add Contact
      </button>
      <h2 className="alert">{alert}</h2>
    </form>
  );
};

export default ContactForm;
