import React, { useState } from 'react';
// @ts-ignore
import { Routes, Route, Navigate, NavLink, } from 'react-router-dom';
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
import AppointmentsPage from './containers/appointmentsPage/AppointmentsPage';
import ContactsPage from './containers/contactsPage/ContactsPage';

// function NavLink(to, className, activeClassName, inActiveClassName, ...rest) {
//   let location = useLocation();
//   let isActive = location.pathname === to;
//   let allClassNames = className + (isActive ? `${activeClassName}` : `${inActiveClassName}`);
//   return <Link className={allClassNames} to={to} {...rest} />;
// }

const App = () => {
  const [contacts, setContacts] = useState([]);
  const [appointments, setAppointments] = useState([]);
  //reminder:  take setContacts() as an example as it utomatically points the current state of contacts.
  //whatever you name the argument to the set function, it will point to the current state.
  //Note: if you are updating the state, this normally called the previous state or prev for short.

  const ROUTES = {
    CONTACTS: '/contacts',
    APPOINTMENTS: '/appointments',
  };

  const addContact = (name, phone, email) => {
    setContacts((prev) => {
      return [...prev, { name: name, phone: phone, email: email }]; //destructure prev and add the new contact
    });
  };

  const addAppointment = (title, contact, date, time) => {
    setAppointments((prev) => {
      return [...prev, { title: title, contact: contact, date: date, time: time }];
    });
  };
  /*
see NavLink below. In public folder, index.css has:
 nav > a.active {
   border-bottom: solid 4px;
  }

  isActive is a property given to us by React Router.   
  the function is overriding the default behavior of isActive via the className attribute and the styling function
  In the dom after Contacts is clicked:  <a class="nav-link activated" href="/contacts" aria-current="page">Contacts</a>
*/
  return (
    <> {/*shorthand for fragment */}
      <nav>
        <NavLink to={ROUTES.CONTACTS} className={({ isActive }) => 'nav-link' + (isActive ? ' activated' : '')}>
          Contacts
        </NavLink>
        <NavLink to={ROUTES.APPOINTMENTS} className={({ isActive }) => 'nav-link' + (isActive ? ' activated' : '')}>
          Appointments
        </NavLink>
      </nav>
      <main>
        <Routes>
          <Route path="/" element={<Navigate to="/error-page" />} />
          <Route path={ROUTES.CONTACTS} element={<ContactsPage contacts={contacts} addContact={addContact} />} />
          <Route path={ROUTES.APPOINTMENTS} element={<AppointmentsPage appointments={appointments} addAppointment={addAppointment} contacts={contacts} />} />
        </Routes>
      </main>
    </>
  );
};

export default App;

/*
React II Challenge Project:  Appointment application

The Appoinment application is limited to making appointments with 
an existing contact. It functionality for adding contacts, making 
appointment.  Currently one cannot delete or edit a contact or
appointment. 

Implemented as follows:

App renders navigation links and provides routing functionality
  navbar has two links (Contacts and Appointment) 

The structure of the application consists of 
App which renders a navbar at top of page consisting of
nav-links:  Contacts and Appointments

Clicking on Contacts or Appointments in the navabar renders
a form for entering a new contact or new appointment respectively.
Specifically clicking on Contacts renders <ContactPage /> consisting of two items:
  1: A <ContactForm /> which renders a form for adding a new contact
  2: A list of  current contacts (if any) as <TileList /> (see below)

The AppointmentPage does the exact same thing for Appointments
It renders the <AppointmentForm />.  

Current contacts or appointments both render a list.
The list will done with one component that can adapt to
whether it is a list of contacts or appointments.

The above will be implemented in two components:

<TileList /> is rendered by <ContactsPage /> or <AppointmentPage />
<TileList /> in turn renders a <Tile /> component for each item in the list 

The <ContactPicker /> component is specific to the <AppointmentForm /> component
Within <AppointmentForm />, the <ContactPicker /> component is rendered.

This component renders a html <select> element consisting of <option> elements.
The first option is the standard "no contact selected."  Subsequention options
are one each for each contact.  Selecting a contact enables one to continue
making an appointment with the selected contact.

*/
