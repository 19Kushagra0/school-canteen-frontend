"use client";

import "./StudentDetail.css";
import Link from "next/link";
import { useParams } from "next/navigation";
import { useStudentContext } from "@/context/StudentContext";

export default function StudentDetail() {
  // ✅ CHANGED: get addOrder from context
  const { students, orders, addOrder } = useStudentContext();

  const params = useParams();
  const studentId = Number(params.id);

  // find selected student
  const student = students.find((item) => {
    return item.id === studentId;
  });

  // ✅ NEW: filter only this student’s orders
  const studentOrders = orders.filter((order) => {
    return order.studentId === studentId;
  });

  // ✅ NEW: safety check
  if (!student) {
    return <p>Student not found</p>;
  }

  return (
    <section className="student-detail-page">
      <Link href="/students" className="back-link">
        ← Back to Students
      </Link>

      {/* Student Summary */}
      <div className="student-summary-card">
        {/* ✅ CHANGED: dynamic student data */}
        <h1 className="student-name">{student.name}</h1>
        <p className="student-code">Referral Code: {student.referralCode}</p>

        <div className="student-total">
          <span>Total Spent</span>
          <strong>₹{student.totalSpent}</strong>
        </div>
      </div>

      {/* Orders */}
      <div className="orders-section">
        <h2 className="section-title">Order History</h2>

        {/* ✅ NEW: show message if no orders */}
        {studentOrders.length === 0 ? (
          <p>No orders yet</p>
        ) : (
          <div className="orders-list">
            {studentOrders.map((order) => (
              <div className="order-row" key={order.id}>
                <div>
                  <p className="order-snack">{order.snack}</p>
                  <span className="order-qty">Qty: {order.quantity}</span>
                </div>

                <span className="order-amount">₹{order.amount}</span>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* ✅ CHANGED: button now WORKS */}
      <button className="place-order-btn" onClick={() => addOrder(studentId)}>
        Place New Order
      </button>
    </section>
  );
}
