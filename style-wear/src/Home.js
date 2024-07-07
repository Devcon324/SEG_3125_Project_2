const Home = () => {
  const title = 'Welcome to the Style Wear online store';
  const likes = 50;
  const link = 'https://www.google.com';

  return (
    <div className="home">
      <h1>{ title }</h1>
      <p>
        Shop the latest fashion trends
        liked by { likes } people
      </p>
      <p>
        { Math.random() * 100 }
      </p>
      <a
        href={ link }>Google
      </a>
    </div>
   );
}

export default Home;