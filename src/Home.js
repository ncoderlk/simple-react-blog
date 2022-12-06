const Home = () => {
  const handleClick = (name, e) => {
    console.log("hello" + name, e.target);
  };
  return (
    <div className="home">
      <h2>Homepage</h2>
      <button onClick={(e) => handleClick(" alex", e)}>Click me</button>
    </div>
  );
};

export default Home;
