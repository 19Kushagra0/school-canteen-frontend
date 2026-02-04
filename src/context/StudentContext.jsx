"use client";

import { createContext, useContext } from "react";

const StudentContext = createContext();

export function StudentProvider({ children }) {
  const students = [
    {
      id: 1,
      name: "Rahul Sharma",
      referralCode: "EDZ123",
      totalSpent: 320,
    },
    {
      id: 2,
      name: "Priya Singh",
      referralCode: "EDZ456",
      totalSpent: 540,
    },
    {
      id: 3,
      name: "Amit Verma",
      referralCode: "EDZ789",
      totalSpent: 210,
    },
  ];

  const orders = [
    {
      id: 1,
      studentId: 1,
      snack: "Samosa",
      quantity: 2,
      amount: 40,
    },
    {
      id: 2,
      studentId: 1,
      snack: "Cold Coffee",
      quantity: 1,
      amount: 50,
    },
    {
      id: 3,
      studentId: 2,
      snack: "Burger",
      quantity: 1,
      amount: 60,
    },
  ];

  return (
    <StudentContext.Provider value={{ students, orders }}>
      {children}
    </StudentContext.Provider>
  );
}

export function useStudentContext() {
  return useContext(StudentContext);
}
