import React, { useEffect, useState } from 'react';

export default function DoctorList() {
  const [doctors, setDoctors] = useState([]);

  useEffect(() => {
    fetch('http://localhost:5000/api/doctors')
      .then(res => res.json())
      .then(setDoctors)
      .catch(console.error);
  }, []);

  return (
    <div className="mb-6">
      <h2 className="text-xl font-semibold">Doctors Available</h2>
      <ul className="mt-2 space-y-2">
        {doctors.map(doc => (
          <li key={doc.id} className="bg-white p-4 rounded shadow">
            {doc.name} — <em>{doc.specialty}</em>
          </li>
        ))}
      </ul>
    </div>
  );
}
