import React, { useState } from "react";
import {Routes, Route, Navigate, NavLink } from "react-router-dom";
//using react@18.2.0, react-router-dom@6.3.0
//Routes instead of Switch
//Navigate instead of Redirect
/*
<Route 
  path={ROUTES.CONTACTS}   
  element = {<ContactsPage contacts={contacts} addContact={addContact} />}
/>
<Route 

instead of 

<Route 
  path={ROUTES.CONTACTS}>
  <ContactsPage contacts={contacts} addContact={addContact} />
</Route>
*/
import AppointmentsPage from "./containers/appointmentsPage/AppointmentsPage";
import ContactsPage from "./containers/contactsPage/ContactsPage";

const App = () => {
  const [contacts, setContacts] = useState([]);
  const [appointments, setAppointments] = useState([]);

  const ROUTES = {
    CONTACTS: "/contacts",
    APPOINTMENTS: "/appointments",
  };

  const addContact = (name, phone, email) => {
    setContacts((prev) => {
      return [...prev, {name: name, phone: phone, email: email}];
    });
  }

  const addAppointment = (title, contact, date, time) => {
    setAppointments((prev) => {
      return [...prev, {title: title, contact: contact, date: date, time: time}]
    });
  }

  return (
    <>
      <nav>
        <NavLink to={ROUTES.CONTACTS} className={({ isActive }) => "nav-link" + (isActive ? " activated" : "")}>
          Contacts
        </NavLink>
        <NavLink to={ROUTES.APPOINTMENTS} className={({ isActive }) => "nav-link" + (isActive ? " activated" : "")}>
          Appointments
        </NavLink>
      </nav>
      <main>
      
        <Routes>
          <Route path="/" element={ <Navigate to="/error-page" /> } />
          <Route 
            path={ROUTES.CONTACTS}   
            element = {<ContactsPage contacts={contacts} addContact={addContact} />}
          />
          <Route 
            path={ROUTES.APPOINTMENTS} 
            element = {<AppointmentsPage appointments={appointments} addAppointment={addAppointment} contacts={contacts} /> } 
            />
        </Routes>
      </main>
    </>
  );
}

export default App;

