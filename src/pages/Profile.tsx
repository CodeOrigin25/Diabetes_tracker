import React from 'react';
import { User, Mail, Phone, MapPin, Calendar, Activity } from 'lucide-react';
import { useAuth } from '../context/AuthContext';

const Profile: React.FC = () => {
  const { user } = useAuth();

  // Mock additional user data
  const userDetails = {
    phone: '+91 98765 43210',
    address: '42/B, Krishna Nagar, Koramangala 4th Block, Bangalore, Karnataka 560034',
    dateOfBirth: 'January 15, 1990',
    diagnosisDate: 'March 10, 2020',
    diabetesType: 'Type 2',
    emergencyContact: 'Raj Kumar (+91 98765 12345)',
    primaryDoctor: 'Dr. Patel',
    medications: ['Metformin (500mg, twice daily)', 'Glimepiride (2mg, once daily)'],
    allergies: ['Sulfa drugs', 'Aspirin']
  };

  return (
    <div className="max-w-4xl mx-auto">
      <div className="bg-white shadow rounded-lg overflow-hidden">
        <div className="bg-blue-600 h-32"></div>
        <div className="px-6 py-4 relative">
          <div className="absolute -top-16 left-6">
            <img
              className="h-32 w-32 rounded-full border-4 border-white"
              src={user?.avatar || "https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"}
              alt="User avatar"
            />
          </div>
          <div className="mt-16">
            <h1 className="text-2xl font-bold text-gray-900">{user?.name}</h1>
            <p className="text-gray-600">{userDetails.diabetesType} Diabetes Patient</p>
          </div>
        </div>
      </div>

      <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white shadow rounded-lg p-6">
          <h2 className="text-lg font-semibold text-gray-800 mb-4">Personal Information</h2>
          <div className="space-y-4">
            <div className="flex items-center">
              <User className="h-5 w-5 text-gray-400 mr-3" />
              <div>
                <p className="text-sm font-medium text-gray-500">Full Name</p>
                <p className="text-gray-900">{user?.name}</p>
              </div>
            </div>
            <div className="flex items-center">
              <Mail className="h-5 w-5 text-gray-400 mr-3" />
              <div>
                <p className="text-sm font-medium text-gray-500">Email</p>
                <p className="text-gray-900">{user?.email}</p>
              </div>
            </div>
            <div className="flex items-center">
              <Phone className="h-5 w-5 text-gray-400 mr-3" />
              <div>
                <p className="text-sm font-medium text-gray-500">Phone</p>
                <p className="text-gray-900">{userDetails.phone}</p>
              </div>
            </div>
            <div className="flex items-center">
              <MapPin className="h-5 w-5 text-gray-400 mr-3" />
              <div>
                <p className="text-sm font-medium text-gray-500">Address</p>
                <p className="text-gray-900">{userDetails.address}</p>
              </div>
            </div>
            <div className="flex items-center">
              <Calendar className="h-5 w-5 text-gray-400 mr-3" />
              <div>
                <p className="text-sm font-medium text-gray-500">Date of Birth</p>
                <p className="text-gray-900">{userDetails.dateOfBirth}</p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white shadow rounded-lg p-6">
          <h2 className="text-lg font-semibold text-gray-800 mb-4">Medical Information</h2>
          <div className="space-y-4">
            <div className="flex items-center">
              <Activity className="h-5 w-5 text-gray-400 mr-3" />
              <div>
                <p className="text-sm font-medium text-gray-500">Diabetes Type</p>
                <p className="text-gray-900">{userDetails.diabetesType}</p>
              </div>
            </div>
            <div className="flex items-center">
              <Calendar className="h-5 w-5 text-gray-400 mr-3" />
              <div>
                <p className="text-sm font-medium text-gray-500">Diagnosis Date</p>
                <p className="text-gray-900">{userDetails.diagnosisDate}</p>
              </div>
            </div>
            <div className="flex items-start">
              <User className="h-5 w-5 text-gray-400 mr-3 mt-0.5" />
              <div>
                <p className="text-sm font-medium text-gray-500">Primary Doctor</p>
                <p className="text-gray-900">{userDetails.primaryDoctor}</p>
              </div>
            </div>
            <div className="flex items-start">
              <Phone className="h-5 w-5 text-gray-400 mr-3 mt-0.5" />
              <div>
                <p className="text-sm font-medium text-gray-500">Emergency Contact</p>
                <p className="text-gray-900">{userDetails.emergencyContact}</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white shadow rounded-lg p-6">
          <h2 className="text-lg font-semibold text-gray-800 mb-4">Medications</h2>
          <ul className="space-y-2">
            {userDetails.medications.map((medication, index) => (
              <li key={index} className="flex items-start">
                <div className="flex-shrink-0 mt-1">
                  <div className="h-2 w-2 rounded-full bg-blue-500"></div>
                </div>
                <p className="ml-3 text-gray-600">{medication}</p>
              </li>
            ))}
          </ul>
        </div>

        <div className="bg-white shadow rounded-lg p-6">
          <h2 className="text-lg font-semibold text-gray-800 mb-4">Allergies</h2>
          <ul className="space-y-2">
            {userDetails.allergies.map((allergy, index) => (
              <li key={index} className="flex items-start">
                <div className="flex-shrink-0 mt-1">
                  <div className="h-2 w-2 rounded-full bg-red-500"></div>
                </div>
                <p className="ml-3 text-gray-600">{allergy}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="mt-6 bg-white shadow rounded-lg p-6">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-lg font-semibold text-gray-800">Account Settings</h2>
        </div>
        <div className="space-y-4">
          <button className="w-full md:w-auto px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
            Change Password
          </button>
          <button className="w-full md:w-auto px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
            Update Profile
          </button>
          <button className="w-full md:w-auto px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
            Notification Settings
          </button>
        </div>
      </div>
    </div>
  );
};

export default Profile;