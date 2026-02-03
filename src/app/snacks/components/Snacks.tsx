import "./Snacks.css";

const snacks = [
  {
    id: 1,
    name: "Samosa",
    price: 20,
    ordersCount: 15,
  },
  {
    id: 2,
    name: "Sandwich",
    price: 40,
    ordersCount: 23,
  },
  {
    id: 3,
    name: "Cold Coffee",
    price: 50,
    ordersCount: 18,
  },
  {
    id: 4,
    name: "Burger",
    price: 60,
    ordersCount: 12,
  },
  {
    id: 5,
    name: "Pizza Slice",
    price: 80,
    ordersCount: 8,
  },
  {
    id: 6,
    name: "French Fries",
    price: 45,
    ordersCount: 12,
  },
  {
    id: 7,
    name: "Noodles",
    price: 70,
    ordersCount: 7,
  },
  {
    id: 8,
    name: "Juice",
    price: 30,
    ordersCount: 20,
  },
  {
    id: 9,
    name: "Water Bottle",
    price: 20,
    ordersCount: 20,
  },
];

export default function Snacks() {
  return (
    <section className="snacks-page">
      <header className="snacks-header">
        <h1 className="snacks-title">Snacks You’ll Love</h1>
        <p className="snacks-subtitle">
          Pick a snack and order it in just a few clicks
        </p>
      </header>

      <div className="snacks-list">
        {snacks.map((snack) => (
          <div key={snack.id} className="snack-card">
            <div className="snack-info">
              <h2 className="snack-name">{snack.name}</h2>
              <span className="snack-orders">{snack.ordersCount} orders</span>
            </div>

            <div className="snack-footer">
              <span className="snack-price">₹{snack.price}</span>
              <button className="order-btn">Order</button>
            </div>
          </div>
        ))}

        <div className="snack-card ghost" />
        <div className="snack-card ghost" />
        <div className="snack-card ghost" />

        {/* <div className="snack-card ghost" /> */}
      </div>
    </section>
  );
}
