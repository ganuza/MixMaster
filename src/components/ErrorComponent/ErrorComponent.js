import PropTypes from 'prop-types'
import './ErrorComponent.css'

const ErrorComponent = ({error, message}) => {

  return (
    <div className='error-container'>
      <h2 className='error-h2'>ERROR</h2>
      <h3 className='error-h3'>{error} </h3>
      <h3 className='error-h3'>{message}</h3>
    </div>
  )
}

export default ErrorComponent