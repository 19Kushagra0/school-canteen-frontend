import React from "react";
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
    {
      id: 4,
      name: "Neha Gupta",
      referralCode: "EDZ321",
      totalSpent: 430,
    },
  ];

  return (
    <StudentContext.Provider value={students}>
      {children}
    </StudentContext.Provider>
  );
}

export function useStudentContext() {
  return useContext(StudentContext);
}
