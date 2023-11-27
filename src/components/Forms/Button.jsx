
import PropTypes from 'prop-types'; 
import styles from './Button.module.css';

const Button = ({ children, ...props }) => {
  return (
    <button {...props} className={styles.button}>
      {children}
    </button>
  );
};

// Defina as propTypes corretamente
Button.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Button;
