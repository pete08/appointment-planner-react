import React from "react";

export const ContactForm = ({
  name,
  setName,
  phone,
  setPhone,
  email,
  setEmail,
  handleSubmit
}) => {
  return (
    <form onSubmit={handleSubmit} id="contactForm">
      <label>Name:</label>
      <input onChange={(e) => setName(e.target.value)} id="name" name="name" type="text" value={name}></input>
      
      <label>Phone #: (###)-###-####</label>
      <input onChange={(e) => setPhone(e.target.value)} id="phone" name="phone" type="tel" value={phone} required pattern="((\(\d{3}\) ?)|(\d{3}-))?\d{3}-\d{4}"></input>

      <label>Email:</label>
      <input onChange={(e) => setEmail(e.target.value)} id="email" name="email" type="email" value={email}></input>
      <button type="submit">Submit</button>
    </form>
  );
};

