import "./Inspiration.css";

export default function Inspiration() {
  return (
    <section id="inspiration">
      <h2 className="inspiration-title">Inspiration</h2>
      <div className="music">
        <h3 className="inspiration-h3">Music</h3>
        <div className="flex">
          <div className="music-genre-and-people">
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
          </div>
          <img className="plini" src="/plini-1.jpg" alt="Plini" />
        </div>
      </div>
      <div>
        <h3 className="inspiration-h3">Film And TV Works /Animations</h3>
        <div className="film-tv-anime-list">
          <p>Attack On Titan</p>
          <p>Fight Club</p>
          <p>Bladerunner 2049</p>
          <p>All About Lily Chou-Chou</p>
          <p>Sonny Boy</p>
        </div>
        <div className="flex">
          <div className="film-tv-anime-posts">
            <img
              className="attack-on-titan"
              src="/attack-on-titan.jpg"
              alt="Attack On Titan"
            />
          </div>
          <div className="film-tv-anime-posts">
            <img
              className="fight-club"
              src="/Fight Club film post.jpg"
              alt="Fight Club"
            />
          </div>
          <div className="film-tv-anime-posts">
            <img
              className="blade-runner-2049"
              src="/Blade Runner 2049 film post.jpg"
              alt="Blade Runner 2049"
            />
          </div>
        </div>
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
