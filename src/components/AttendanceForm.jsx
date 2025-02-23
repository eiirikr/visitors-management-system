import { useState } from "react";

const AttendanceForm = () => {
  const [visitors, setVisitors] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    purpose: "",
  });

  const handleLogIn = () => setShowModal(true);

  const handleSubmit = (e) => {
    e.preventDefault();
    const now = new Date().toLocaleTimeString();
    setVisitors([...visitors, { ...formData, logIn: now, logOut: "" }]);
    setShowModal(false);
    setFormData({
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      purpose: "",
    });
  };

  const handleLogOut = (index) => {
    const now = new Date().toLocaleTimeString();
    setVisitors(
      visitors.map((visitor, i) =>
        i === index ? { ...visitor, logOut: now } : visitor
      )
    );
  };

  return (
    <div className="attendance-container">
      <div className="attendance-section">
        <h2 className="text-center">Visitors E-Logbook</h2>
        <button className="btn btn-success" onClick={handleLogIn}>
          Log In
        </button>
      </div>

      {/* Table */}
      <table className="table mt-3">
        <thead>
          <tr>
            <th>No.</th>
            <th>Full Name</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Purpose</th>
            <th>Log In</th>
            <th>Log Out</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {visitors.length === 0 ? (
            <tr>
              <td colSpan="8" className="text-center">
                No visitors yet
              </td>
            </tr>
          ) : (
            visitors.map((visitor, index) => (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>
                  {visitor.firstName} {visitor.lastName}
                </td>
                <td>{visitor.email}</td>
                <td>{visitor.phone}</td>
                <td>{visitor.purpose}</td>
                <td>{visitor.logIn}</td>
                <td>{visitor.logOut || "—"}</td>
                <td>
                  {!visitor.logOut && (
                    <button
                      className="btn btn-danger btn-sm"
                      onClick={() => handleLogOut(index)}
                    >
                      Log Out
                    </button>
                  )}
                </td>
              </tr>
            ))
          )}
        </tbody>
      </table>

      {/* Log In Modal */}
      {showModal && (
        <div className="modal-overlay">
          <div className="modal-content">
            <h3>Log In</h3>
            <form onSubmit={handleSubmit}>
              <input
                type="text"
                placeholder="First Name"
                value={formData.firstName}
                onChange={(e) =>
                  setFormData({ ...formData, firstName: e.target.value })
                }
                required
              />
              <input
                type="text"
                placeholder="Last Name"
                value={formData.lastName}
                onChange={(e) =>
                  setFormData({ ...formData, lastName: e.target.value })
                }
                required
              />
              <input
                type="email"
                placeholder="Email"
                value={formData.email}
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
                required
              />
              <input
                type="tel"
                placeholder="Phone"
                value={formData.phone}
                onChange={(e) =>
                  setFormData({ ...formData, phone: e.target.value })
                }
                required
              />
              <input
                type="text"
                placeholder="Purpose of Visit"
                value={formData.purpose}
                onChange={(e) =>
                  setFormData({ ...formData, purpose: e.target.value })
                }
                required
              />
              <button type="submit">Submit</button>
              <button type="button" onClick={() => setShowModal(false)}>
                Cancel
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default AttendanceForm;
