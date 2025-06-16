import React, { useState } from 'react';

export default function AppointmentForm() {
  const [doctorId, setDoctorId] = useState('');
  const [patient, setPatient] = useState('');
  const [date, setDate] = useState('');
  const [msg, setMsg] = useState('');

  async function handleSubmit(e) {
    e.preventDefault();
    const res = await fetch('http://localhost:5000/api/book', {
      method: 'POST',
      headers: { 'Content-Type':'application/json' },
      body: JSON.stringify({ doctor_id: doctorId, patient, date })
    });
    const data = await res.json();
    if (data.id) setMsg('Appointment booked! 🗓️');
    else setMsg(`Error: ${data.error}`);
  }

  return (
    <form onSubmit={handleSubmit} className="bg-white p-4 rounded shadow">
      <h2 className="text-xl mb-4">Book an Appointment</h2>
      <input type="number" placeholder="Doctor ID" value={doctorId}
        onChange={e => setDoctorId(e.target.value)}
        className="block w-full mb-2 p-2 border" required />
      <input type="text" placeholder="Patient Name" value={patient}
        onChange={e => setPatient(e.target.value)}
        className="block w-full mb-2 p-2 border" required />
      <input type="date" value={date}
        onChange={e => setDate(e.target.value)}
        className="block w-full mb-2 p-2 border" required />
      <button className="bg-blue-600 text-white px-4 py-2 rounded">Book</button>
      {msg && <p className="mt-2 text-green-600">{msg}</p>}
    </form>
  );
}
