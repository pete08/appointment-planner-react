import React, { useState, useEffect } from "react";

import { ContactForm } from "../../components/contactForm/ContactForm";
import { TileList } from "../../components/tileList/TileList";

export const ContactsPage = (props) => {
  /*
  Define state variables for 
  contact info and duplicate check
  */
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [dupeName, setDupeName] = useState(false);



  const handleSubmit = (e) => {
    e.preventDefault();
    // const {name, phone, email} = e.target.value;
    /*
    Add contact info and clear data
    if the contact name is not a duplicate
    */
    if (dupeName === false) {
      console.log(`\nCreate new contact in ContactsPage.js, handleSubmit's\n name is: ${name}, \nphone is: ${phone}, \nemail is: ${email}\n`);
      props.contactCallback(name, phone, email);
      setName("");
      setPhone("");
      setEmail("");
    } else {
      alert(`${name}, name is already taken!`);
    }
    

    
  };

  /*
  Using hooks, check for contact name in the 
  contacts array variable in props
  */ 
  useEffect(() => {
    console.log(`checkng existing names in contact. Names are: ${JSON.stringify(props.contacts)}`)
    // change useEffect to set dupeName to true if name is already in contacts 
    for (const contact of props.contacts) {
      if (Object.values(contact).includes(name)) {
        setDupeName(true);
      }
    }
  }, [name])

  return (
    <div>
      <section>
        <h2>Add Contact</h2>
        <ContactForm name={name} setName={setName} phone={phone} setPhone={setPhone} email={email} setEmail={setEmail} handleSubmit={handleSubmit} />
      </section>
      <hr />
      <section>
        <h2>Contacts</h2>
        <TileList array={props.contacts}/>
      </section>
    </div>
  );
};
