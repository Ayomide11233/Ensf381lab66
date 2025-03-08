import './App.css';

function Contact({ title, description }) {
  return (
    <div className="Contact">
      <h1>{title}</h1>
      <p>{description}</p>
    </div>
  );
}

export default Contact;