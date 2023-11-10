import PropTypes from 'prop-types'
import './ErrorComponent.css'

const ErrorComponent = ({error, message}) => {

  return (
    <div className="oval-container">
        <div className="oval overlap-3"></div>
        <div className="oval overlap-2"></div>
        <div className="oval overlap-1"></div>
        <div className="selection-box">
          <div className='error-container'>
            <h2 className='error-h2'>ERROR</h2>
            <h3 className='error-h3'>{error} </h3>
            <h3 className='error-h3'>{message}</h3>
          </div>
        </div>
      </div>
  )
}

export default ErrorComponent

ErrorComponent.propTypes = {
  error: PropTypes.string, 
  message: PropTypes.string
}