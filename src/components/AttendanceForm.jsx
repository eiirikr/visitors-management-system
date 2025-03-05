import { useReducer } from "react";

const initialState = {
  visitors: [],
  showModal: false,
  formData: {
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    purpose: "",
  },
};

const reducer = (state, action) => {
  switch (action.type) {
    case "SHOW_MODAL":
      return { ...state, showModal: true };
    case "HIDE_MODAL":
      return { ...state, showModal: false, formData: initialState.formData };
    case "UPDATE_FORM":
      return { ...state, formData: { ...state.formData, ...action.payload } };
    case "ADD_VISITOR":
      return {
        ...state,
        visitors: [...state.visitors, { ...state.formData, logIn: new Date().toLocaleTimeString(), logOut: "" }],
        showModal: false,
        formData: initialState.formData,
      };
    case "LOG_OUT_VISITOR":
      return {
        ...state,
        visitors: state.visitors.map((visitor, index) =>
          index === action.payload ? { ...visitor, logOut: new Date().toLocaleTimeString() } : visitor
        ),
      };
    default:
      return state;
  }
};

const AttendanceForm = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const handleSubmit = (e) => {
    e.preventDefault();
    const { firstName, lastName, email, phone, purpose } = state.formData;

    if (!firstName || !lastName || !email || !phone || !purpose) {
      alert("All fields are required.");
      return;
    }
    dispatch({ type: "ADD_VISITOR" });
  };

  return (
    <div className="container mt-4 p-4 bg-light rounded shadow">
      <h2 className="text-center mb-3">Visitors Elogbook System</h2>
      <button className="btn btn-primary mb-3" onClick={() => dispatch({ type: "SHOW_MODAL" })}>
        Log In
      </button>

      <div className="table-responsive">
        <table className="table table-bordered text-center">
          <thead className="table-primary">
            <tr>
              <th>#</th>
              <th>Name</th>
              <th>Email</th>
              <th>Phone</th>
              <th>Purpose</th>
              <th>Log In</th>
              <th>Log Out</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {state.visitors.length === 0 ? (
              <tr>
                <td colSpan="8" className="text-center">No visitors yet</td>
              </tr>
            ) : (
              state.visitors.map((visitor, index) => (
                <tr key={index}>
                  <td>{index + 1}</td>
                  <td>{visitor.firstName} {visitor.lastName}</td>
                  <td>{visitor.email}</td>
                  <td>{visitor.phone}</td>
                  <td>{visitor.purpose}</td>
                  <td>{visitor.logIn}</td>
                  <td>{visitor.logOut || "—"}</td>
                  <td>
                    {!visitor.logOut && (
                      <button className="btn btn-danger btn-sm" onClick={() => dispatch({ type: "LOG_OUT_VISITOR", payload: index })}>
                        Log Out
                      </button>
                    )}
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>

      {state.showModal && (
        <div className="modal-overlay d-flex justify-content-center align-items-center">
          <div className="modal-dialog">
            <div className="modal-content glassmorphism">
              <div className="modal-header border-0">
                <h5 className="modal-title">Log In</h5>
                <button
                  className="btn-close"
                  onClick={() => dispatch({ type: "HIDE_MODAL" })}
                ></button>
              </div>
              <div className="modal-body">
                <form onSubmit={handleSubmit}>
                  {Object.keys(initialState.formData).map((key) => (
                    <div className="mb-3" key={key}>
                      <input
                        type={key === "email" ? "email" : key === "phone" ? "tel" : "text"}
                        className="form-control"
                        placeholder={key.charAt(0).toUpperCase() + key.slice(1)}
                        value={state.formData[key]}
                        onChange={(e) =>
                          dispatch({ type: "UPDATE_FORM", payload: { [key]: e.target.value } })
                        }
                        required
                      />
                    </div>
                  ))}
                  <div className="d-flex justify-content-end">
                    <button className="btn btn-success me-2" type="submit">
                      Submit
                    </button>
                    <button
                      className="btn btn-secondary"
                      type="button"
                      onClick={() => dispatch({ type: "HIDE_MODAL" })}
                    >
                      Cancel
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AttendanceForm;
