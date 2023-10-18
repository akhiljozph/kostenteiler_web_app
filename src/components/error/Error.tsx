import './Error.scss';

export default function Error() {
    return (
        <div className="error-container">
            <h2 className="error-message">Sorry, we couldn't find that page!</h2>
            <h4 className="error-subscript">Please check the page address.</h4>
            <button className='btn-back'>Take me back to hompage</button>
        </div>
    )
}