"use client";
import Navbar from "../components/ui/Navbar/Navbar";
import { StudentProvider } from "../context/StudentContext";

export default function AppWrapper({ children }) {
  return (
    <StudentProvider>
      <div className="app-wrapper">
        <Navbar />
        <main className="app-content">{children}</main>
      </div>
    </StudentProvider>
  );
}
