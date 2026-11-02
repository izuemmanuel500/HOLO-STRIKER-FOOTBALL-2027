import React, { useEffect, useState } from "react";
import {
  Gamepad2,
  Globe,
  Trophy,
  Star
} from "lucide-react";

import "./launch-screen.css";

const players = [
  { name: "Vinícius Jr.", wiki: "Vinícius Júnior" },
  { name: "Mohamed Salah", wiki: "Mohamed Salah" },
  { name: "Lionel Messi", wiki: "Lionel Messi" },
  { name: "Cristiano Ronaldo", wiki: "Cristiano Ronaldo" },
  { name: "Kylian Mbappé", wiki: "Kylian Mbappé" },
  { name: "Erling Haaland", wiki: "Erling Haaland" }
];

export default function LaunchScreen({ onEnter }) {
  const [progress, setProgress] = useState(0);
  const [photos, setPhotos] = useState({});

  useEffect(() => {
    let value = 0;

    const timer = setInterval(() => {
      value += Math.floor(Math.random() * 4) + 1;

      if (value >= 100) {
        value = 100;
        clearInterval(timer);
      }

      setProgress(value);
    }, 180);

    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    let active = true;

    players.forEach(async player => {
      try {
        const response = await fetch(
          "https://en.wikipedia.org/api/rest_v1/page/summary/" +
          encodeURIComponent(player.wiki)
        );

        const data = await response.json();

        if (active && data.thumbnail?.source) {
          setPhotos(old => ({
            ...old,
            [player.name]: data.thumbnail.source
          }));
        }
      } catch {
        // Keep the player placeholder if an image cannot load.
      }
    });

    return () => {
      active = false;
    };
  }, []);

  return (
    <main className="holo-launch">

      <div className="stadium-background"></div>
      <div className="stadium-lights"></div>
      <div className="stadium-glow"></div>
      <div className="stadium-crowd"></div>

      <header className="cinematic-header">
        <div>DREAM <span>•</span> PLAY <span>•</span> WIN</div>
        <div>NEXT LEVEL FOOTBALL GAME</div>
      </header>

      <section className="cinematic-players">

        {players.map((player, index) => (
          <div
            className={`cinematic-player player-${index + 1}`}
            key={player.name}
          >
            {photos[player.name] ? (
              <img
                src={photos[player.name]}
                alt={player.name}
              />
            ) : (
              <div className="player-fallback">
                {player.name}
              </div>
            )}
          </div>
        ))}

      </section>

      <div className="champions-ball">
        ⚽
      </div>

      <div className="champions-glow"></div>

      <section className="cinematic-title">

        <div className="title-crown">♛</div>

        <p className="title-small">
          THE FUTURE OF FOOTBALL
        </p>

        <h1>
          HOLO
          <span>STRIKER</span>
        </h1>

        <h2>
          FOOTBALL <strong>2027</strong>
        </h2>

        <div className="title-decoration"></div>

      </section>

      <div className="silver-trophy">
        🏆
      </div>

      <div className="right-football">
        ⚽
      </div>

      <section className="cinematic-loading">

        <h3>
          {progress >= 100 ? "FOOTBALL WORLD READY" : "LOADING..."}
        </h3>

        <div className="cinematic-progress">
          <div
            className="cinematic-progress-fill"
            style={{ width: `${progress}%` }}
          ></div>
        </div>

        <strong>{progress}%</strong>

        <p>Be the Champion!</p>

      </section>

      <footer className="cinematic-footer">

        <div>
          <Gamepad2 />
          <span>REALISTIC<br />GAMEPLAY</span>
        </div>

        <div>
          <Globe />
          <span>ONLINE<br />MULTIPLAYER</span>
        </div>

        <div>
          <Trophy />
          <span>CHAMPIONS<br />LEAGUE MODE</span>
        </div>

        <div className="studio-name">
          HOLO STRIKER<br />STUDIOS
        </div>

      </footer>

      {progress >= 100 && (
        <button
          className="enter-game-button"
          onClick={onEnter}
        >
          ENTER FOOTBALL WORLD →
        </button>
      )}

    </main>
  );
      }
