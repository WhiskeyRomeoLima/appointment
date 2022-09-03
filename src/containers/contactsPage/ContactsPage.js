import React, { useState, useEffect } from 'react'
import ContactForm from "../../components/contactForm/ContactForm";
import TileList from "../../components/tileList/TileList";

const ContactsPage = ({contacts, addContact}) => {
  const [newName, setNewName] = useState('');
  const [newPhone, setNewPhone] = useState('');
  const [newEmail, setNewEmail] = useState('');
  const [duplicate, setDuplicate] = useState(false);
  const [alert, setAlert] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!duplicate) {
      addContact(newName, newPhone, newEmail);
      setNewName('');
      setNewPhone('');
      setNewEmail('');
    }

  };

  useEffect(() => {
  
    for(const contactItem of contacts) {
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

  }, [contacts, newName, duplicate]);

  return (
    <div>
      <section>
        <h2>Add Contact</h2> 
        <ContactForm name={newName} 
                     setName={setNewName} 
                     phone={newPhone}
                     setPhone={setNewPhone}
                     email={newEmail}
                     setEmail={setNewEmail}
                     handleSubmit={handleSubmit}
                     alert={alert} />
        
      </section>
      <hr />
      <section>
        <h2>Contacts</h2>
        <TileList tiles={contacts} />
      </section>
    </div>
  );
};
export default ContactsPage
