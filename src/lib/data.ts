import { UserSquare, Calendar, FileX, Home } from 'lucide-react';

export const userProfile = {
  fullName: 'Musa Adekunle',
  email: 'm.adekunle@example.com',
  phone: '08012345678',
  isProfileComplete: false,
  details: {
    passportPhotoUrl: 'https://placehold.co/150x150.png',
    idCardUrl: 'https://placehold.co/400x250.png',
    signatureUrl: 'https://placehold.co/200x100.png',
    nin: '',
    gender: '',
    religion: '',
    state: '',
    lga: '',
    occupation: '',
    address: '',
  },
};

export const affidavitTypes = [
  {
    category: 'Personal Information',
    icon: UserSquare,
    types: [
      { id: 'change-of-name', name: 'Affidavit for Change of Name' },
      { id: 'age-declaration', name: 'Affidavit of Age Declaration' },
      { id: 'correction-of-name', name: 'Affidavit for Correction of Name' },
      { id: 'confirmation-of-name', name: 'Affidavit for Confirmation of Name' },
    ],
  },
  {
    category: 'Date of Birth',
    icon: Calendar,
    types: [
        { id: 'declaration-of-dob', name: 'Affidavit for Declaration of Date of Birth' },
        { id: 'correction-of-dob', name: 'Affidavit for Correction of Date of Birth' },
    ],
  },
  {
    category: 'Loss of Documents',
    icon: FileX,
    types: [
      { id: 'loss-of-id', name: 'Affidavit for Loss of ID Card' },
      { id: 'loss-of-certificate', name: 'Affidavit for Loss of Certificate' },
      { id: 'loss-of-sim', name: 'Affidavit for Loss of SIM Card' },
    ],
  },
  {
    category: 'Property & Marital Status',
    icon: Home,
    types: [
      { id: 'proof-of-ownership', name: 'Affidavit for Proof of Ownership' },
      { id: 'marital-status', name: 'Affidavit of Marital Status' },
    ],
  },
];


export const applications = [
    {
        id: 'APP202407-001',
        affidavitType: 'Affidavit for Change of Name',
        date: '2024-07-28',
        status: 'Approved',
        paymentStatus: 'Paid',
    },
    {
        id: 'APP202407-002',
        affidavitType: 'Affidavit of Age Declaration',
        date: '2024-07-27',
        status: 'Paid',
        paymentStatus: 'Paid',
    },
    {
        id: 'APP202407-003',
        affidavitType: 'Affidavit for Loss of ID Card',
        date: '2024-07-25',
        status: 'Draft',
        paymentStatus: 'Unpaid',
    },
     {
        id: 'APP202406-015',
        affidavitType: 'Affidavit for Correction of Date of Birth',
        date: '2024-06-15',
        status: 'Rejected',
        paymentStatus: 'Paid',
    },
];

export type Application = (typeof applications)[0];
