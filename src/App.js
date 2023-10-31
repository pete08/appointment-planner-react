import React, { useState } from "react";
import { RouterProvider, createBrowserRouter, createRoutesFromElements, Route, Navigate } from "react-router-dom";
import Root, { ROUTES } from "./components/root/Root";
import { AppointmentsPage } from "./containers/appointmentsPage/AppointmentsPage";
import { ContactsPage } from "./containers/contactsPage/ContactsPage";

function App() {
  /*
  Define state variables for 
  contacts and appointments 
  */
  const [ contacts, setContacts ] = useState([]);
  const [ appointments, setAppointments ] = useState([]);

  /*
  Implement functions to add data to
  contacts and appointments
  */
  const handleContacts = (name, phone, email) => {
    console.log(`Before creating new contact in App.js, contacts is: ${JSON.stringify(contacts)}`);
    console.log(`Create new contact in App.js, handleContact's args name, phone, email are: ${name},  ${phone},  ${email}`);
    setContacts(prevContacts => [...prevContacts, {"name": name, "phone": phone, "email": email}]);
    // setContacts((prev) => [...prev, {
    //   "name": name,
    //   "phone": phone,
    //   "email": email
    // }]);

    // setContacts((prev) => ([
    //   //spread operatior ... adds to existing value
    //   ...prev,
    //   {[name]: name}
    // ]));

    console.log(`Following creating new contact in App.js: contacts are now: ${JSON.stringify(contacts)}`);
  }

  const handleAppointments = (name, contact, date, time) => { setAppointments((prev) => {
      return [...prev, {
        "name": name,
        "contact": contact,
        "date": date,
        "time": time
      }];
    })
  }

  const router = createBrowserRouter(createRoutesFromElements(
    <Route path="/" element={ <Root/> }>
      <Route index element={ <Navigate to={ROUTES.CONTACTS} replace/> }/>
      <Route path={ROUTES.CONTACTS} element={ <ContactsPage contacts={contacts} contactCallback={handleContacts}/> /* Add props to ContactsPage */ }/>
      <Route path={ROUTES.APPOINTMENTS} element={ <AppointmentsPage appointments={appointments} contacts={contacts} appointmentCallback={handleAppointments} /> /* Add props to AppointmentsPage */ }/>
    </Route>
  ));
  
  return (
    <RouterProvider router={router}/>
  );
}

export default App;
