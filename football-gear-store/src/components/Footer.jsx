import './Footer.css'

function Footer({ storeName, email }) {
  return (
    <footer className="footer">
      <div>
        <h3>{storeName}</h3>
        <p>Your source for quality football gear.</p>
      </div>

      <div>
        <h3>Contact Us</h3>
        <p>Email: {email}</p>
      </div>

      <div>
        <h3>Quick Links</h3>
        <p>Home | Shop | About</p>
      </div>
    </footer>
  )
}

export default Footer