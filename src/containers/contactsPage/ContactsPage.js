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
  const [dupeName, SetDupeName] = useState(false);



  const handleSubmit = (e) => {
    e.preventDefaul.t();
    // 2023-10-27 START at #3 HINT: ...Within 'handleSubmit(), if the duplicate...
    /*
    Add contact info and clear data
    if the contact name is not a duplicate
    */
    

  };

  /*
  Using hooks, check for contact name in the 
  contacts array variable in props
  */ 
  useEffect(() => {
    const dupeNameFind = props.contacts.filter((contact) => contact.name === name)
    if (dupeNameFind.length > 0) {
      SetDupeName(true);
    }
  }, [name])

  return (
    <div>
      <section>
        <h2>Add Contact</h2> 
      </section>
      <hr />
      <section>
        <h2>Contacts</h2>
      </section>
    </div>
  );
};
