const Alert = ({ setAlert }) => {
  return (
    <div className="modal" tabindex="-1">
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">Hey! We're checking in.</h5>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div className="modal-body">
            <p>
              It's been a few minutes since we last heard from you. How's it
              going?
            </p>
          </div>
          <div className="modal-footer">
            <button
              type="button"
              className="btn btn-secondary"
              data-bs-dismiss="modal"
            >
              Close
            </button>
            <button
              type="button"
              onClick={() => setAlert(flase)}
              className="btn btn-success"
            >
              I'm OK!
            </button>
            <button type="button" className="btn btn-secondary">
              Call my Friend
            </button>
            <button type="button" className="btn btn-danger">
              Call 911
            </button>
            <button
              type="button"
              className="btn btn-success"
              onClick={() => setAlert(flase)}
            >
              I've reached my destination!
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Alert;
