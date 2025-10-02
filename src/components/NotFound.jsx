import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>404</h1>
      <h2 style={styles.subheading}>Page Not Found</h2>
      <p style={styles.text}>
        Sorry, the page you are looking for does not exist.
      </p>
      <Link to="/" style={styles.button}>
        Go Back Home
      </Link>
    </div>
  );
};

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    minHeight: '100vh',
    textAlign: 'center',
    padding: '20px',
  },
  heading: {
    fontSize: '120px',
    fontWeight: 'bold',
    margin: '0',
    color: '#333',
  },
  subheading: {
    fontSize: '32px',
    margin: '10px 0',
    color: '#555',
  },
  text: {
    fontSize: '18px',
    color: '#777',
    marginBottom: '30px',
  },
  button: {
    padding: '12px 30px',
    backgroundColor: '#007bff',
    color: 'white',
    textDecoration: 'none',
    borderRadius: '5px',
    fontSize: '16px',
    transition: 'background-color 0.3s',
  },
};

export default NotFound;
