import React from "react";
import { ContactPicker } from "../contactPicker/ContactPicker";

const getTodayString = () => {
  const [month, day, year] = new Date()
    .toLocaleDateString("en-US")
    .split("/");
  return `${year}-${month.padStart(2, "0")}-${day.padStart(2, "0")}`;
};

export const AppointmentForm = ({
  name,
  setName,
  contact,
  setContact,
  date,
  setDate,
  time,
  setTime,
  handleSubmit,
  contacts
}) => {

  return (
    <form onSubmit={handleSubmit} id="apptForm">
      <input id="name" name="name" type="text"  value={name} onChange={(e) => setName(e.target.value) } placeholder="What is Appt for?"></input>
      <input id="date" name="date" type="date" value={date} onChange={(e) => setDate(e.target.value) } required min={getTodayString()} ></input>
      <input id="time" name="time" type="time" value={time} onChange={(e) => setTime(e.target.value) } ></input>
      <ContactPicker contacts={contacts} onChange={(e) => setContact(e.target.value)} value={contact} name={name}/>
      <button type="submit">Submit</button>
    </form>
  );
};
