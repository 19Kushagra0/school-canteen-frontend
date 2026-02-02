import "./StudentDetail.css";
import Link from "next/link";

const orders = [
  {
    id: 1,
    snack: "Samosa",
    quantity: 2,
    amount: 40,
  },
  {
    id: 2,
    snack: "Cold Coffee",
    quantity: 1,
    amount: 50,
  },
  {
    id: 3,
    snack: "Burger",
    quantity: 1,
    amount: 60,
  },
];

export default function StudentDetail() {
  return (
    <section className="student-detail-page">
      {/* Back Link */}
      <Link href="/students" className="back-link">
        ← Back to Students
      </Link>

      {/* Student Summary */}
      <div className="student-summary-card">
        <h1 className="student-name">Rahul Sharma</h1>
        <p className="student-code">Referral Code: EDZ123</p>

        <div className="student-total">
          <span>Total Spent</span>
          <strong>₹320</strong>
        </div>
      </div>

      {/* Orders */}
      <div className="orders-section">
        <h2 className="section-title ">Order History</h2>

        <div className="orders-list">
          {orders.map((order) => (
            <div className="order-row" key={order.id}>
              <div>
                <p className="order-snack">{order.snack}</p>
                <span className="order-qty">Qty: {order.quantity}</span>
              </div>

              <span className="order-amount">₹{order.amount}</span>
            </div>
          ))}
        </div>
      </div>

      {/* CTA */}
      <button className="place-order-btn">Place New Order</button>
    </section>
  );
}
