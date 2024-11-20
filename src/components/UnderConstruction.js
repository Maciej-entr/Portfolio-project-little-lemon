export default function Construction() {
    const styles = {
      container: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
        height: '100vh',
        backgroundColor: '#f8f9fa',
        color: '#333',
        fontFamily: "'Arial', sans-serif",
      },
      messageBox: {
        padding: '20px',
        border: '2px dashed #333',
        borderRadius: '10px',
        backgroundColor: '#fff',
      },
      messageText: {
        fontSize: '1.5rem',
        fontWeight: 'bold',
      },
    };
  
    return (
      <div style={styles.container}>
        <div style={styles.messageBox}>
          <p style={styles.messageText}>
            This Page is under construction. Please check back soon!
          </p>
        </div>
      </div>
    );
  }
  