import './App.css';

function Home({ title, description }) {
  return (
    <div className="Home">
      <h1>{title}</h1>
      <p>{description}</p>
    </div>
  );
}

export default Home;
