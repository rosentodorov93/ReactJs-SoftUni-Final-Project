import './BlogDelete.css'

export default function BlogDelete({
    onClose,
    deleteBlogHandler,
}) {
  return (
    <div className="overlay-container">
      <div className="backdrop-container" onClick={onClose}>
      <div className="modal-container">
        <div className="confirm-container">
          <header className="headers-container">
            <h2>Are you sure you want to delete this account?</h2>
            <button className="btn" onClick={onClose}>x</button>
          </header>
          <div className="actions">
            
              <button
                id="action-save"
                className="btn"
                type="submit"
                onClick={deleteBlogHandler}
              >
                Delete
              </button>
              <button
                id="action-cancel"
                className="btn"
                type="button"
                onClick={onClose}
              >
                Cancel
              </button>
            
          </div>
        </div>
      </div>
      </div>
     
    </div>
  );
}
