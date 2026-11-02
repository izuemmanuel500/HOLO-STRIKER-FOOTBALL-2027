import React, { useEffect, useState } from "react";
import {
  Trophy,
  Globe,
  Users,
  Gamepad2,
  Star,
  ChartNoAxesCombined
} from "lucide-react";

import "./launch-screen.css";

const stars = [
  "Lionel Messi",
  "Cristiano Ronaldo",
  "Kylian Mbappé",
  "Erling Haaland",
  "Neymar",
  "Vinícius Júnior",
  "Lamine Yamal"
];

const ratings = [97, 96, 95, 95, 94, 94, 93];

const features = [
  { icon: Gamepad2, title: "STUNNING", sub: "GAMEPLAY" },
  { icon: Trophy, title: "CHAMPIONSHIP", sub: "LEAGUES" },
  { icon: Globe, title: "ONLINE", sub: "MULTIPLAYER" },
  { icon: Users, title: "BUILD YOUR", sub: "TEAM" },
  { icon: Star, title: "EARN", sub: "REWARDS" },
  { icon: ChartNoAxesCombined, title: "TRACK YOUR", sub: "PROGRESS" }
];

export default function LaunchScreen({ onEnter }) {
  const [progress, setProgress] = useState(0);
  const [photos, setPhotos] = useState({});

  useEffect(() => {
    let value = 0;

    const timer = setInterval(() => {
      value = Math.min(value + Math.floor(Math.random() * 5) + 2, 100);
      setProgress(value);

      if (value >= 100) {
        clearInterval(timer);

        setTimeout(() => {
          onEnter?.();
        }, 900);
      }
    }, 130);

    return () => clearInterval(timer);
  }, [onEnter]);

  useEffect(() => {
    let active = true;

    Promise.all(
      stars.map(async name => {
        try {
          const response = await fetch(
            `https://en.wikipedia.org/api/rest_v1/page/summary/${encodeURIComponent(name.replaceAll(" ", "_"))}`
          );

          const data = await response.json();

          if (active && data.thumbnail?.source) {
            setPhotos(old => ({
              ...old,
              [name]: data.thumbnail.source
            }));
          }
        } catch {
          // Player initials remain visible if photos fail.
        }
      })
    );

    return () => {
      active = false;
    };
  }, []);

  return (
    <main className="holo-launch">
      <div className="stadium-glow" />
      <div className="stadium-lights" />
      <div className="stadium-lines" />

      <header className="launch-top">
        <span>HS 2027</span>
        <span className="online-indicator">
          <i /> ONLINE FOOTBALL WORLD
        </span>
      </header>

      <section className="launch-hero">
        <div className="messi-feature">
          {photos["Lionel Messi"] ? (
            <img src={photos["Lionel Messi"]} alt="Lionel Messi" />
          ) : (
            <div className="player-placeholder">MESSI</div>
          )}

          <div className="messi-label">
            <span>FEATURED LEGEND</span>
            <h2>LIONEL MESSI</h2>
            <p>ARGENTINA • FORWARD</p>
            <strong>OVR 97</strong>
          </div>
        </div>

        <div className="launch-brand">
          <div className="football-symbol">⚽</div>
          <p className="brand-small">THE FUTURE OF FOOTBALL</p>

          <h1>
            HOLO
            <span>STRIKER</span>
          </h1>

          <h2>FOOTBALL <b>2027</b></h2>
          <div className="brand-line" />

          <p className="brand-slogan">
            PLAY • COMPETE • CONQUER
          </p>
        </div>

        <div className="floating-ball">⚽</div>
      </section>

      <section className="top-players">
        <div className="section-heading">
          <span>GLOBAL FOOTBALL ICONS</span>
          <span>TOP PLAYER RATINGS</span>
        </div>

        <div className="player-strip">
          {stars.map((name, index) => (
            <article className="launch-player" key={name}>
              <div className="player-photo">
                {photos[name] ? (
                  <img src={photos[name]} alt={name} />
                ) : (
                  <span>
                    {name.split(" ").map(x => x[0]).join("")}
                  </span>
                )}

                <b>{index + 1}</b>
              </div>

              <h3>{name}</h3>

              <div className="rating-line">
                <span>OVR</span>
                <strong>{ratings[index]}</strong>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="loading-section">
        <h3>
          {progress >= 100
            ? "FOOTBALL WORLD READY"
            : "INITIALIZING HOLO STRIKER EXPERIENCE..."}
        </h3>

        <div className="loading-track">
          <div
            className="loading-fill"
            style={{ width: `${progress}%` }}
          />
        </div>

        <strong className="loading-number">
          {progress}%
        </strong>
      </section>

      <section className="launch-features">
        {features.map(({ icon: Icon, title, sub }) => (
          <div className="feature-item" key={title}>
            <Icon size={27} />
            <strong>{title}</strong>
            <span>{sub}</span>
          </div>
        ))}
      </section>

      <footer className="launch-footer">
        <span>BUILD 2027 • HOLO STRIKER</span>

        <strong>
          {progress >= 100 ? "ENTERING FOOTBALL WORLD..." : "PLEASE WAIT..."}
        </strong>
      </footer>
    </main>
  );
  }
