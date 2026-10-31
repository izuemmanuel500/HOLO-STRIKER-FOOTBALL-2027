import React, { useState } from "react";
import {
  Trophy,
  Users,
  Globe,
  Shield,
  Settings,
  User,
  Play,
  Star,
  Menu,
  X,
  Crown,
  Target
} from "lucide-react";

import "./style.css";

const players = [
  {
    name: "Lionel Messi",
    country: "Argentina",
    position: "Forward",
    image: "https://commons.wikimedia.org/wiki/Special:FilePath/Lionel_Messi_20180626.jpg"
  },
  {
    name: "Cristiano Ronaldo",
    country: "Portugal",
    position: "Forward",
    image: "https://commons.wikimedia.org/wiki/Special:FilePath/Cristiano_Ronaldo_2018.jpg"
  },
  {
    name: "Kylian Mbappé",
    country: "France",
    position: "Forward",
    image: "https://commons.wikimedia.org/wiki/Special:FilePath/Kylian_Mbapp%C3%A9_2019.jpg"
  },
  {
    name: "Erling Haaland",
    country: "Norway",
    position: "Striker",
    image: "https://commons.wikimedia.org/wiki/Special:FilePath/Erling_Haaland_2023.jpg"
  },
  {
    name: "Mohamed Salah",
    country: "Egypt",
    position: "Forward",
    image: "https://commons.wikimedia.org/wiki/Special:FilePath/Mohamed_Salah_2018.jpg"
  },
  {
    name: "Vinícius Júnior",
    country: "Brazil",
    position: "Forward",
    image: "https://commons.wikimedia.org/wiki/Special:FilePath/Vinicius_Junior_2022.jpg"
  }
];

export default function App() {
  const [page, setPage] = useState(
    localStorage.getItem("holo_player") ? "dashboard" : "home"
  );

  const [player, setPlayer] = useState(
    JSON.parse(localStorage.getItem("holo_player") || "null")
  );

  const [mobileMenu, setMobileMenu] = useState(false);

  const [form, setForm] = useState({
    username: "",
    email: "",
    password: "",
    country: "Nigeria"
  });

  function register(event) {
    event.preventDefault();

    if (!form.username || !form.email || !form.password) {
      alert("Please complete all registration fields.");
      return;
    }

    const profile = {
      username: form.username,
      email: form.email,
      country: form.country,
      registered: true
    };

    localStorage.setItem("holo_player", JSON.stringify(profile));

    setPlayer(profile);
    setPage("dashboard");

    // The password is deliberately not stored in the browser.
  }

  function logout() {
    localStorage.removeItem("holo_player");
    setPlayer(null);
    setPage("home");
  }

  function go(destination) {
    setPage(destination);
    setMobileMenu(false);
    window.scrollTo(0, 0);
  }

  const navigation = [
    ["home", "Home"],
    ["players", "Superstars"],
    ["coach", "Coach Mode"],
    ["league", "Premier League"]
  ];

  return (
    <div className="app">

      <header className="topbar">

        <div className="brand" onClick={() => go("home")}>
          HOLO <span>STRIKER</span>
          <small>FOOTBALL 2027</small>
        </div>

        <button
          className="mobile-toggle"
          onClick={() => setMobileMenu(!mobileMenu)}
        >
          {mobileMenu ? <X /> : <Menu />}
        </button>

        <nav className={mobileMenu ? "navigation show" : "navigation"}>
          {navigation.map(([destination, label]) => (
            <button
              key={destination}
              onClick={() => go(destination)}
            >
              {label}
            </button>
          ))}
        </nav>

        {player ? (
          <button className="account-button" onClick={() => go("dashboard")}>
            <User size={17} />
            {player.username}
          </button>
        ) : (
          <button className="register-button" onClick={() => go("register")}>
            REGISTER
          </button>
        )}

      </header>

      {page === "home" && (
        <>

          <section className="hero">

            <div className="hero-content">
              <div className="eyebrow">
                THE NEXT GENERATION OF FOOTBALL
              </div>

              <h1>
                OWN THE GAME.
                <span> MAKE HISTORY.</span>
              </h1>

              <p>
                Build your football career, select your superstars,
                manage your club and compete against football fans
                around the world.
              </p>

              <div className="hero-actions">
                <button
                  className="primary-button"
                  onClick={() => go(player ? "dashboard" : "register")}
                >
                  <Play size={19} fill="currentColor" />
                  PLAY NOW
                </button>

                <button
                  className="secondary-button"
                  onClick={() => go("players")}
                >
                  EXPLORE PLAYERS
                </button>
              </div>

              <div className="hero-stats">
                <div><strong>2027</strong><small>EDITION</small></div>
                <div><strong>GLOBAL</strong><small>FOOTBALL</small></div>
                <div><strong>YOUR</strong><small>LEGACY</small></div>
              </div>
            </div>

          </section>

          <section className="section">
            <div className="section-heading">
              <div>
                <small>WORLD FOOTBALL SUPERSTARS</small>
                <h2>FEATURED PLAYERS</h2>
              </div>

              <button onClick={() => go("players")}>
                VIEW ALL
              </button>
            </div>

            <div className="player-grid">
              {players.map((item) => (
                <div className="player-card" key={item.name}>
                  <img src={item.image} alt={item.name} />
                  <div className="player-details">
                    <small>{item.country}</small>
                    <h3>{item.name}</h3>
                    <p>{item.position}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          <section className="section modes-section">
            <div className="section-heading">
              <div>
                <small>ENTER YOUR FOOTBALL WORLD</small>
                <h2>CHOOSE YOUR MODE</h2>
              </div>
            </div>

            <div className="mode-grid">

              <Mode
                icon={<Trophy />}
                title="Career Mode"
                description="Build your career and become a football legend."
                onClick={() => go("dashboard")}
              />

              <Mode
                icon={<Crown />}
                title="Tournament"
                description="Compete for championships and trophies."
                onClick={() => go("dashboard")}
              />

              <Mode
                icon={<Globe />}
                title="Online Multiplayer"
                description="Challenge football players around the world."
                onClick={() => go("dashboard")}
              />

              <Mode
                icon={<Users />}
                title="Coach Mode"
                description="Manage your squad, formations and tactics."
                onClick={() => go("coach")}
              />

            </div>
          </section>

          <section className="section">
            <div className="section-heading">
              <div>
                <small>BUILD YOUR FOOTBALL IDENTITY</small>
                <h2>EXPLORE HOLO STRIKER</h2>
              </div>
            </div>

            <div className="feature-grid">
              <Feature icon={<User />} title="Player Selection" />
              <Feature icon={<Shield />} title="Football Associations" />
              <Feature icon={<Globe />} title="Country Selection" />
              <Feature icon={<Trophy />} title="Club Management" />
              <Feature icon={<Star />} title="Trophy Cabinet" />
              <Feature icon={<Settings />} title="Game Settings" />
            </div>
          </section>

        </>
      )}

      {page === "register" && (
        <section className="registration-page">
          <div className="registration-box">

            <small>JOIN THE FOOTBALL WORLD</small>
            <h1>CREATE YOUR PLAYER ACCOUNT</h1>

            <p>Your football journey starts here.</p>

            <form onSubmit={register}>

              <label>Username</label>
              <input
                value={form.username}
                onChange={e => setForm({...form, username:e.target.value})}
                placeholder="Choose your username"
                required
              />

              <label>Email address</label>
              <input
                type="email"
                value={form.email}
                onChange={e => setForm({...form, email:e.target.value})}
                placeholder="Enter your email"
                required
              />

              <label>Password</label>
              <input
                type="password"
                value={form.password}
                onChange={e => setForm({...form, password:e.target.value})}
                placeholder="Create a password"
                required
              />

              <label>Country</label>
              <select
                value={form.country}
                onChange={e => setForm({...form, country:e.target.value})}
              >
                {[
                  "Nigeria","Ghana","England","Brazil",
                  "Argentina","France","Portugal","Egypt",
                  "Spain","Germany","United States"
                ].map(country => (
                  <option key={country}>{country}</option>
                ))}
              </select>

              <button className="primary-button full-button">
                CREATE MY ACCOUNT
              </button>

            </form>

            <p className="small-note">
              Registration is currently a local prototype.
              Secure server-side account registration will be connected next.
            </p>

          </div>
        </section>
      )}

      {page === "dashboard" && (
        <section className="dashboard">

          <div className="welcome-panel">
            <small>PLAYER DASHBOARD</small>
            <h1>WELCOME, {player?.username || "PLAYER"}</h1>
            <p>Your football journey continues.</p>
          </div>

          <div className="dashboard-grid">

            <Feature
              icon={<Play />}
              title="Play Football"
              onClick={() => go("game")}
            />

            <Feature
              icon={<Users />}
              title="Player Selection"
              onClick={() => go("players")}
            />

            <Feature
              icon={<Trophy />}
              title="Coach Mode"
              onClick={() => go("coach")}
            />

            <Feature
              icon={<Globe />}
              title="Premier League"
              onClick={() => go("league")}
            />

            <Feature
              icon={<Shield />}
              title="Association"
              onClick={() => go("association")}
            />

            <Feature
              icon={<Settings />}
              title="Settings"
              onClick={() => go("settings")}
            />

          </div>

          <button className="secondary-button" onClick={logout}>
            SIGN OUT
          </button>

        </section>
      )}

      {page === "players" && (
        <section className="section">
          <div className="section-heading">
            <div>
              <small>BUILD YOUR SQUAD</small>
              <h2>PLAYER SELECTION</h2>
            </div>
          </div>

          <div className="player-grid">
            {players.map(item => (
              <div className="player-card" key={item.name}>
                <img src={item.image} alt={item.name} />
                <div className="player-details">
                  <small>{item.country}</small>
                  <h3>{item.name}</h3>
                  <p>{item.position}</p>
                  <button onClick={() => alert(item.name + " selected for your squad.")}>
                    SELECT PLAYER
                  </button>
                </div>
              </div>
            ))}
          </div>
        </section>
      )}

      {page === "coach" && (
        <section className="section">
          <small>TEAM MANAGEMENT</small>
          <h1>COACH MODE</h1>
          <p>Manage your football team and build your winning strategy.</p>
          <div className="feature-grid">
            <Feature icon={<Users />} title="Manage Squad" />
            <Feature icon={<Target />} title="Team Tactics" />
            <Feature icon={<Shield />} title="Formations" />
            <Feature icon={<Trophy />} title="Competitions" />
          </div>
        </section>
      )}

      {page === "league" && (
        <section className="section">
          <small>COMPETITIONS</small>
          <h1>PREMIER LEAGUE</h1>
          <p>League standings will appear here when the competition system is connected.</p>
        </section>
      )}

      {page === "game" && (
        <section className="section">
          <h1>GAME CENTER</h1>
          <p>The existing football gameplay engine will be connected here without deleting it.</p>
        </section>
      )}

      {["association","settings"].includes(page) && (
        <section className="section">
          <h1>{page === "association" ? "FOOTBALL ASSOCIATION" : "SETTINGS"}</h1>
          <p>This section will be developed and connected in the next stage.</p>
        </section>
      )}

      <footer>
        <strong>HOLO STRIKER FOOTBALL 2027</strong>
        <p>The Future of Football Gaming.</p>
      </footer>

    </div>
  );
}

function Mode({icon,title,description,onClick}) {
  return (
    <button className="mode-card" onClick={onClick}>
      {icon}
      <h3>{title}</h3>
      <p>{description}</p>
    </button>
  );
}

function Feature({icon,title,onClick}) {
  return (
    <button className="feature-card" onClick={onClick || (() => alert(title + " section will be connected next."))}>
      {icon}
      <strong>{title}</strong>
    </button>
  );
  }
