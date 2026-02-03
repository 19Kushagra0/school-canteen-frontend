"use client";
import "./Student.css";
import Link from "next/link";
import { useStudentContext } from "@/context/StudentContext";

export default function Student() {
  const students = useStudentContext();
  return (
    <section className="students-page">
      <header className="students-header">
        <div>
          <h1 className="students-title">Students</h1>
          <p className="students-subtitle">
            View students and track their spending
          </p>
        </div>

        <button className="add-student-btn">+ Add Student</button>
      </header>

      <div className="students-list">
        {students.map((student) => (
          <Link
            href={`/students/${student.id}`}
            className="student-card"
            key={student.id}
          >
            <div className="student-info">
              <h2 className="student-name">{student.name}</h2>
              <span className="student-code">
                Referral Code: {student.referralCode}
              </span>
            </div>

            <div className="student-meta">
              <span className="student-spent">₹{student.totalSpent}</span>
              <span className="spent-label">Total Spent</span>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
