import "./Hero.css";

export default function Hero() {
  return (
    <section id="hero" className="flex justify-center items-center h-screen">
      <div>
        <h1 className="hero-hello">Hi, 我是Aaron! 😈👋</h1>
        <p className="hero-identity">Developer/ Musician/ Creator</p>
      </div>
      <img className="hero-avatar" src="/Eren1.jpg" alt="My Avatar" />
    </section>
  );
}
