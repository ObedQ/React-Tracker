import PropTypes from 'prop-types'
const Button = ({color, text }) => {

    const onClick = (e) => {
        
    }
  return (
    <button onClick={onClick} className='btn' style={{backgroundColor: color}}>{text}</button>
  )
}

Button.defaultProps = {
    color: 'steelblue',
}

Button.propTypes = {
    text: PropTypes.string.isRequired,
    color: PropTypes.string,
}

export default Button
