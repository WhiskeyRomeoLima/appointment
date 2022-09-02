# React II Challenge Project:  Appointment application

The Appointment application is limited to making appointments with 
an existing contact. It has functionality for adding contacts and making 
appointments.  Currently one cannot delete or edit a contact or
appointment. 

Implemented as follows:

\<App/\> renders navigation links and provides routing functionality.
  The navigation bar has two links (Contacts and Appointment) 

The structure of the application consists of 
\<App /\> which renders a navbar at top of page consisting of
nav-links:  Contacts and Appointments.

Clicking on Contacts or Appointments in the navbar renders
a form for entering a new contact or new appointment respectively.
Specifically clicking on Contacts renders \<ContactPage /\> consisting of two items:
  1: A \<ContactForm /\> which renders a form for adding a new contact
  2: A list of  current contacts (if any) as \<TileList /\> (see below)

The AppointmentPage does the exact same thing for Appointments
It renders the \<AppointmentForm /\>.  

Current contacts or appointments both render a list.
The list will done with one component that can adapt to
whether it is a list of contacts or appointments.

The above will be implemented in two components:

\<TileList /\> is rendered by \<ContactsPage /\> or \<AppointmentPage />
\<TileList /\> in turn renders a \<Tile /\> component for each item in the list 

The \<ContactPicker /\> component is specific to the \<AppointmentForm /\> component.
Within \<AppointmentForm /\>, the \<ContactPicker /\> component is rendered.

\<ContactPicker /\> renders a html \<select\> element consisting of \<option\> elements.
The first option is the standard "no contact selected."  Subsequent options
are one each for each contact.  Selecting a contact enables one to continue
making an appointment with the selected contact.
