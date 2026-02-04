"use client";

import "./StudentDetail.css";
import Link from "next/link";
import { useParams } from "next/navigation";
import { useStudentContext } from "@/context/StudentContext";

export default function StudentDetail() {
  const { students, orders } = useStudentContext();

  const params = useParams();
  const studentId = Number(params.id);

  const student = students.find(function (item) {
    return item.id === studentId;
  });

  const studentOrders = orders.filter(function (order) {
    return order.studentId === studentId;
  });

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

      <button className="place-order-btn">Place New Order</button>
    </section>
  );
}
