import './PostDelete.css'

export default function PostDelete({
    onClose,
    deleteBlogHandler,
}) {
  return (
    <div className="overlay-container">
      <div className="backdrop-container" onClick={onClose}>
      <div className="modal-container">
        <div className="confirm-container">
          <header className="headers-container">
            <h2>Are you sure you want to delete this blog?</h2>
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
