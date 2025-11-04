import "./Inspiration.css";

export default function Inspiration() {
  return (
    <section id="inspiration">
      <h2>Inspiration</h2>
      <div>
        <h3>Music</h3>
        <h4>Genres</h4>
        <p>
          Fusion/Metalcore/Metal/Jazz/Rock/Alternative/Electronic/Classical/RnB
        </p>
        <h4>Musicians/Bands</h4>
        <ul>
          <li>Plini, Guthrie Govan, Allan Holdsworth</li>
          <li>Cynic, Erra, Invent Animate, Periphery, Death, Obscura</li>
          <li>toe, Sweet Trip, Radiohead, Aphex Twin</li>
        </ul>
        <img className="plini" src="/plini-1.jpg" alt="Plini" />
        <img className="erra" src="/Erra1.jpg" alt="Erra" />
        <img
          className="guthrie-govan"
          src="/Guthrie_Govan_1200x.webp"
          alt="Guthrie Govan"
        />
      </div>
      <div>
        <h3>Film And TV Works /Animations/</h3>
        <ul>
          <li>Attack On Titan</li>
          <li>Fight Club</li>
          <li>Bladerunner 2049</li>
          <li>All About Lily Chou-Chou</li>
          <li>Sonny Boy</li>
        </ul>
        <img
          className="attack-on-titan"
          src="/attack-on-titan.jpg"
          alt="Attack On Titan"
        />
        <img
          className="fight-club"
          src="/Fight Club film post.jpg"
          alt="Fight Club"
        />
        <img
          className="blade-runner-2049"
          src="/Blade Runner 2049 film post.jpg"
          alt="Blade Runner 2049"
        />
      </div>
      <div>
        <h3>Books</h3>
        <p>施工中</p>
      </div>
      <div>
        <h3>People</h3>
        <p>施工中</p>
      </div>
    </section>
  );
}
