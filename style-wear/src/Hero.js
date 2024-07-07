import fashion_hero from './assets/videos/hero_trim_1440p.mp4';

const Hero = () => {
  return (
    <div className="hero">
      <video src={ fashion_hero } autoPlay loop muted />
      <div className="heroText">
        <h1>Keep Cool, Look Cool</h1>
        <p>Shop the latest trends in fashion</p>
      </div>
    </div>
   );
}

export default Hero;