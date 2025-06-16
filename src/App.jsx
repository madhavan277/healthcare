import React from 'react';
import DoctorList from './components/DoctorList';
import AppointmentForm from './components/AppointmentForm';

export default function App() {
  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-3xl font-bold text-center mb-6">HealthCare App</h1>
      <DoctorList />
      <AppointmentForm />
    </div>
  );
}
