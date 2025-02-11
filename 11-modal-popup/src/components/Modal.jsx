export default function Modal({id, header, body, footer, closeModal}) {
    return (
        <div
            id={id || 'Modal'}
            className="modal"
        >
            <div className="modal-content">
                <div className="header">
                    <span className="close-icon" onClick={closeModal}>&times;</span>
                    <h2>{header ? jeader : 'Header'}</h2>
                </div>
                <div className="body">
                    {body ? body : (<p>This is out Modal Body</p>)}
                </div>
                <div className="footer">
                    {footer ? footer : <h2>Footer</h2>}
                </div>
            </div>
            
        </div>
    )
}