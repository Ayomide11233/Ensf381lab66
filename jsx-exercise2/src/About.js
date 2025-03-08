import './App.css';

function About({ title, description }) {
  return (
    <div className="About">
      <h1>{title}</h1>
      <p>{description}</p>
    </div>
  );
}

export default About;