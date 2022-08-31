import React, { useState, useEffect } from 'react'
import ContactForm from "../../components/contactForm/ContactForm";
import TileList from "../../components/tileList/TileList";

const ContactsPage = (props) => {
  const [newName, setCurrentName] = useState('');
  const [newPhone, setCurrentPhone] = useState('');
  const [newEmail, setCurrentEmail] = useState('');
  const [duplicate, setDuplicate] = useState(false);
  const [alert, setAlert] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!duplicate) {
      props.addContact(newName, newPhone, newEmail);
      setCurrentName('');
      setCurrentPhone('');
      setCurrentEmail('');
    }

  };

  useEffect(() => {
  
    for(const contactItem of props.contacts) {
      if (contactItem.name === newName) {
        if (!duplicate) {
          setDuplicate(true);
          setAlert('Contact is already in the list.');
          console.log('Contact is already in the list.');
        } 
        return;
      } else {
        setDuplicate(false);
        setAlert('');
      }
    }

  }, [props.contacts, newName, duplicate]);

  return (
    <div>
      <section>
        <h2>Add Contact</h2> 
        <ContactForm name={newName} 
                     setName={setCurrentName} 
                     phone={newPhone}
                     setPhone={setCurrentPhone}
                     email={newEmail}
                     setEmail={setCurrentEmail}
                     handleSubmit={handleSubmit}
                     alert={alert} />
        
      </section>
      <hr />
      <section>
        <h2>Contacts</h2>
        <TileList tiles={props.contacts} />
      </section>
    </div>
  );
};
export default ContactsPage
