"use client";

import { createContext, useContext, useState } from "react";
// ✅ CHANGED: added useState so orders can update dynamically

const StudentContext = createContext();

export function StudentProvider({ children }) {
  const [students, setStudents] = useState([
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
  ]);

  // ✅ CHANGED: orders is now React STATE (not const array)
  const [orders, setOrders] = useState([
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
  ]);

  // ✅ NEW: function to create a new order
  function addOrder(studentId) {
    const newOrder = {
      id: Date.now(), // unique id
      studentId: studentId, // links order to correct student
      snack: "Samosa", // dummy snack
      quantity: 1,
      amount: 20,
    };

    setOrders([...orders, newOrder]);
    // ✅ CHANGED: updates state → React re-renders UI
  }

  function addStudent() {
    const newStudent = {
      id: Date.now(),
      name: "New Student",
      referralCode: "EDZ" + Math.floor(Math.random() * 1000),
      totalSpent: 0,
    };

    setStudents([...students, newStudent]);
  }

  return (
    <StudentContext.Provider value={{ students, orders, addOrder, addStudent }}>
      {/* ✅ CHANGED: expose addOrder instead of setOrders */}
      {children}
    </StudentContext.Provider>
  );
}

export function useStudentContext() {
  return useContext(StudentContext);
}
