const styles = {
  container: {
    minHeight: 'calc(100vh - 50px)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontWeight: 500,
    fontSize: 48,
    textAlign: 'center',
  },
};

export default function Home() {
  return (
    <div style={styles.container}>
      <h1 style={styles.title}>
        Phone
        <span>BOOK</span>
      </h1>
      <h2>Simple - Intuitive - Efficeint</h2>
      <p>
        Your phonebook should be easy to use and actually help you achieve
        maximum productivity without compromising on the look and feel
      </p>
    </div>
  );
}
