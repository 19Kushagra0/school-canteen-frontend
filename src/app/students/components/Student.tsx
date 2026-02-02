import "./Student.css";

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

export default function Student() {
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
          <div className="student-card" key={student.id}>
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
          </div>
        ))}
      </div>
    </section>
  );
}
