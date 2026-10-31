import React, { useEffect, useState } from "react";
import {
  Home, Play, Trophy, Shield, Users, User,
  Globe, Target, Settings, Store, Crown,
  Menu, X, Bell, Search, ChevronRight,
  Star, Radio, CalendarDays, Zap, Medal,
  Swords
} from "lucide-react";

import "./style.css";

/* PLAYER DATA */

const players = [
  { name: "Lionel Messi", country: "Argentina", position: "Forward", rating: 93, wiki: "Lionel Messi" },
  { name: "Cristiano Ronaldo", country: "Portugal", position: "Forward", rating: 90, wiki: "Cristiano Ronaldo" },
  { name: "Kylian Mbappé", country: "France", position: "Forward", rating: 92, wiki: "Kylian Mbappé" },
  { name: "Erling Haaland", country: "Norway", position: "Striker", rating: 91, wiki: "Erling Haaland" },
  { name: "Mohamed Salah", country: "Egypt", position: "Forward", rating: 89, wiki: "Mohamed Salah" },
  { name: "Vinícius Júnior", country: "Brazil", position: "Forward", rating: 91, wiki: "Vinícius Júnior" }
];

/* NAVIGATION */

const menuItems = [
  { id: "home", name: "Home", icon: Home },
  { id: "play", name: "Play Football", icon: Play },
  { id: "competitions", name: "Competitions", icon: Trophy },
  { id: "players", name: "Players", icon: Users },
  { id: "clubs", name: "Clubs", icon: Shield },
  { id: "national", name: "National Teams", icon: Globe },
  { id: "coach", name: "Coach Mode", icon: Target },
  { id: "career", name: "Player Career", icon: User },
  { id: "live", name: "Live Matches", icon: Radio },
  { id: "honors", name: "Honors Room", icon: Medal },
  { id: "store", name: "Football Store", icon: Store }
];

/* STORAGE HELPERS */

function loadStorage(key, fallback) {
  try {
    const saved = localStorage.getItem(key);
    return saved ? JSON.parse(saved) : fallback;
  } catch {
    return fallback;
  }
}

/* MAIN APP */

export default function App() {
  const [page, setPage] = useState("home");
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [search, setSearch] = useState("");
  const [account, setAccount] = useState(null);
  const [registerOpen, setRegisterOpen] = useState(false);

  const [form, setForm] = useState({
    username: "",
    email: "",
    password: "",
    country: "Nigeria"
  });

  useEffect(() => {
    const saved = loadStorage("holo_player", null);
    if (saved) setAccount(saved);
  }, []);

  function navigate(destination) {
    setPage(destination);
    setSidebarOpen(false);
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  function register(e) {
    e.preventDefault();

    if (
      !form.username.trim() ||
      !form.email.trim() ||
      !form.password
    ) {
      alert("Please complete all fields.");
      return;
    }

    const newAccount = {
      username: form.username.trim(),
      email: form.email.trim(),
      country: form.country,
      registered: true
    };

    localStorage.setItem(
      "holo_player",
      JSON.stringify(newAccount)
    );

    setAccount(newAccount);
    setRegisterOpen(false);

    setForm({
      username: "",
      email: "",
      password: "",
      country: "Nigeria"
    });

    navigate("home");
  }

  function signOut() {
    if (!window.confirm("Are you sure you want to sign out?")) return;

    localStorage.removeItem("holo_player");
    setAccount(null);
    navigate("home");
  }

  return (
    <div className="holo-app">

      {/* HEADER */}

      <header className="top-header">

        <button
          className="mobile-menu-button"
          onClick={() => setSidebarOpen(!sidebarOpen)}
          aria-label="Toggle menu"
        >
          {sidebarOpen ? <X /> : <Menu />}
        </button>

        <div
          className="holo-logo"
          onClick={() => navigate("home")}
        >
          <div className="logo-symbol">H</div>
          <div>
            <h2>HOLO<span>STRIKER</span></h2>
            <small>FOOTBALL 2027</small>
          </div>
        </div>

        <div className="header-search">
          <Search size={17} />
          <input
            placeholder="Search players, clubs, competitions..."
            value={search}
            onChange={e => setSearch(e.target.value)}
          />
        </div>

        <div className="header-right">

          <button
            className="icon-button"
            aria-label="Notifications"
            onClick={() => alert("Your notifications will appear here.")}
          >
            <Bell size={19} />
            <i></i>
          </button>

          <div className="header-coins">
            <Zap size={16} />
            <span>1,000</span>
          </div>

          <button
            className="profile-button"
            onClick={() =>
              account ? navigate("profile") : setRegisterOpen(true)
            }
          >
            <User size={17} />
            <span>{account ? account.username : "GUEST"}</span>
          </button>

        </div>
      </header>

      <div className="app-layout">

        {/* SIDEBAR */}

        <aside className={`sidebar ${sidebarOpen ? "sidebar-open" : ""}`}>

          <div className="sidebar-label">MAIN MENU</div>

          {menuItems.map(item => {
            const Icon = item.icon;

            return (
              <button
                key={item.id}
                className={`sidebar-link ${page === item.id ? "active" : ""}`}
                onClick={() => navigate(item.id)}
              >
                <Icon size={19} />
                <span>{item.name}</span>
                {item.id === "live" && <i className="live-dot" />}
              </button>
            );
          })}

          <div className="sidebar-divider"></div>

          <div className="sidebar-label">PERSONAL</div>

          <button
            className={`sidebar-link ${page === "profile" ? "active" : ""}`}
            onClick={() => navigate("profile")}
          >
            <User size={19} />
            <span>My Profile</span>
          </button>

          <button
            className={`sidebar-link ${page === "settings" ? "active" : ""}`}
            onClick={() => navigate("settings")}
          >
            <Settings size={19} />
            <span>Settings</span>
          </button>

          <div className="sidebar-bottom">

            <div className="club-mini">
              <div className="club-emblem">H</div>
              <div>
                <strong>HOLO FC</strong>
                <small>YOUR FOOTBALL CLUB</small>
              </div>
            </div>

            <div className="online-status">
              <span></span> SYSTEM ONLINE
            </div>

          </div>
        </aside>

        {/* MAIN CONTENT */}

        <main className="main-content">

          {page === "home" && (
            <HomePage
              account={account}
              navigate={navigate}
              openRegister={() => setRegisterOpen(true)}
            />
          )}

          {page === "play" && <PlayPage />}

          {page === "players" && (
            <PlayersPage search={search} />
          )}

          {page === "coach" && <CoachPage />}

          {page === "competitions" && <CompetitionsPage />}

          {page === "clubs" && (
            <SimplePage
              title="CLUB UNIVERSE"
              subtitle="Discover clubs, build your squad and manage your football identity."
              icon={Shield}
            />
          )}

          {page === "national" && (
            <SimplePage
              title="NATIONAL TEAMS"
              subtitle="Choose your country and represent your nation."
              icon={Globe}
            />
          )}

          {page === "career" && (
            <SimplePage
              title="PLAYER CAREER"
              subtitle="Create your football story and rise to greatness."
              icon={User}
            />
          )}

          {page === "live" && (
            <SimplePage
              title="LIVE FOOTBALL"
              subtitle="Watch and follow live HOLO STRIKER matches."
              icon={Radio}
            />
          )}

          {page === "honors" && (
            <SimplePage
              title="HONORS ROOM"
              subtitle="Your trophies, medals, awards and football achievements."
              icon={Medal}
            />
          )}

          {page === "store" && (
            <SimplePage
              title="FOOTBALL STORE"
              subtitle="Explore jerseys, rewards and football collections."
              icon={Store}
            />
          )}

          {page === "profile" && (
            <ProfilePage
              account={account}
              signOut={signOut}
              openRegister={() => setRegisterOpen(true)}
            />
          )}

          {page === "settings" && <SettingsPage />}

        </main>
      </div>

      {/* REGISTRATION MODAL */}

      {registerOpen && (
        <div
          className="modal-overlay"
          onClick={() => setRegisterOpen(false)}
        >
          <div
            className="register-modal"
            onClick={e => e.stopPropagation()}
          >

            <button
              className="modal-close"
              onClick={() => setRegisterOpen(false)}
            >
              <X />
            </button>

            <div className="modal-brand">
              HOLO<span>STRIKER</span>
            </div>

            <small>JOIN THE FOOTBALL UNIVERSE</small>

            <h2>CREATE YOUR PLAYER ACCOUNT</h2>

            <form onSubmit={register}>

              <label>PLAYER USERNAME</label>
              <input
                required
                value={form.username}
                onChange={e =>
                  setForm({ ...form, username: e.target.value })
                }
                placeholder="Choose a username"
              />

              <label>EMAIL ADDRESS</label>
              <input
                required
                type="email"
                value={form.email}
                onChange={e =>
                  setForm({ ...form, email: e.target.value })
                }
                placeholder="Your email address"
              />

              <label>PASSWORD</label>
              <input
                required
                type="password"
                minLength={8}
                value={form.password}
                onChange={e =>
                  setForm({ ...form, password: e.target.value })
                }
                placeholder="Create a password"
              />

              <label>YOUR COUNTRY</label>
              <select
                value={form.country}
                onChange={e =>
                  setForm({ ...form, country: e.target.value })
                }
              >
                {[
                  "Nigeria", "Ghana", "England", "Brazil",
                  "Argentina", "France", "Portugal",
                  "Egypt", "Spain", "Germany"
                ].map(c => (
                  <option key={c}>{c}</option>
                ))}
              </select>

              <button className="gold-button full-width">
                CREATE ACCOUNT <ChevronRight size={18} />
              </button>

            </form>

            <p className="modal-note">
              This registration is a local prototype. Secure account
              storage will be connected before public launch.
            </p>

          </div>
        </div>
      )}

      <footer className="holo-footer">
        <strong>HOLO STRIKER FOOTBALL 2027</strong>
        <span>THE FUTURE OF FOOTBALL GAMING</span>
      </footer>

    </div>
  );
}

/* HOMEPAGE */

function HomePage({ account, navigate, openRegister }) {
  return (
    <>
      <div className="welcome-strip">
        <div>
          <span className="green-indicator"></span>
          FOOTBALL UNIVERSE <b>2027</b>
        </div>

        <div>
          WELCOME {account?.username?.toUpperCase() || "GUEST PLAYER"}
        </div>
      </div>

      <section className="hero-banner">

        <div className="hero-overlay"></div>

        <div className="hero-content">

          <div className="competition-tag">
            <Trophy size={15} /> THE INTERNATIONAL CHAMPIONSHIP
          </div>

          <h1>
            THE ROAD<br />
            TO <span>GLORY.</span>
          </h1>

          <p>
            Every nation. Every club. Every dream.
            Write your name into football history.
          </p>

          <div className="hero-buttons">

            <button
              className="gold-button"
              onClick={() => navigate("competitions")}
            >
              EXPLORE COMPETITIONS <ChevronRight size={18} />
            </button>

            <button
              className="outline-button"
              onClick={account ? () => navigate("play") : openRegister}
            >
              {account ? "ENTER GAME" : "CREATE ACCOUNT"}
            </button>

          </div>

          <div className="hero-bottom">
            <span>
              <span className="green-indicator"></span> SEASON 2027
            </span>
            <span>GLOBAL FOOTBALL EXPERIENCE</span>
          </div>

        </div>

        <div className="hero-trophy">
          <div className="trophy-glow"></div>
          <Trophy size={145} strokeWidth={1.1} />
          <div className="trophy-caption">CHAMPIONSHIP</div>
        </div>

      </section>

      <section className="quick-access">

        <QuickCard
          icon={<Play />}
          title="QUICK MATCH"
          description="Jump into football"
          onClick={() => navigate("play")}
        />

        <QuickCard
          icon={<Users />}
          title="MY SQUAD"
          description="Build your team"
          onClick={() => navigate("players")}
        />

        <QuickCard
          icon={<Target />}
          title="COACH MODE"
          description="Manage your club"
          onClick={() => navigate("coach")}
        />

        <QuickCard
          icon={<Radio />}
          title="LIVE MATCHES"
          description="Watch football"
          onClick={() => navigate("live")}
        />

      </section>

      <section className="home-section">

        <SectionTitle
          label="THE WORLD OF FOOTBALL"
          title="FOOTBALL MOMENTS"
          action="VIEW ALL"
          onAction={() => navigate("players")}
        />

        <div className="moments-grid">

          <div className="moment-card moment-large">
            <div className="moment-image moment-one"></div>
            <div className="moment-info">
              <span>SUPERSTAR SPOTLIGHT</span>
              <h3>THE GREATEST<br />OF THE GAME</h3>
              <button onClick={() => navigate("players")}>
                EXPLORE PLAYERS <ChevronRight size={16} />
              </button>
            </div>
          </div>

          <div className="moment-card">
            <div className="moment-image moment-two"></div>
            <div className="moment-info">
              <span>CLUB FOOTBALL</span>
              <h3>BUILD YOUR<br />LEGACY</h3>
              <button onClick={() => navigate("clubs")}>
                EXPLORE CLUBS <ChevronRight size={16} />
              </button>
            </div>
          </div>

          <div className="moment-card">
            <div className="moment-image moment-three"></div>
            <div className="moment-info">
              <span>INTERNATIONAL</span>
              <h3>REPRESENT<br />YOUR NATION</h3>
              <button onClick={() => navigate("national")}>
                EXPLORE NATIONS <ChevronRight size={16} />
              </button>
            </div>
          </div>

        </div>
      </section>

      <section className="home-section">

        <SectionTitle
          label="WORLD CLASS TALENT"
          title="FOOTBALL SUPERSTARS"
          action="ALL PLAYERS"
          onAction={() => navigate("players")}
        />

        <PlayerCards limit={4} />

      </section>

      <section className="home-section">

        <SectionTitle
          label="CREATE YOUR STORY"
          title="YOUR FOOTBALL JOURNEY"
        />

        <div className="career-grid">

          <CareerCard
            number="01"
            title="PLAYER CAREER"
            description="Rise from a young talent to a global football legend."
            icon={<User />}
            onClick={() => navigate("career")}
          />

          <CareerCard
            number="02"
            title="TEAM CAREER"
            description="Build a club, recruit players and dominate competitions."
            icon={<Shield />}
            onClick={() => navigate("clubs")}
          />

          <CareerCard
            number="03"
            title="COACH CAREER"
            description="Choose tactics, manage your squad and win trophies."
            icon={<Target />}
            onClick={() => navigate("coach")}
          />

        </div>

      </section>

      <section className="home-section">

        <SectionTitle
          label="FIGHT FOR GREATNESS"
          title="FEATURED COMPETITIONS"
          action="VIEW COMPETITIONS"
          onAction={() => navigate("competitions")}
        />

        <div className="competition-grid">

          <CompetitionCard
            icon={<Trophy />}
            title="INTERNATIONAL CUP"
            subtitle="NATIONAL TEAM CHAMPIONSHIP"
            color="gold"
            onClick={() => navigate("competitions")}
          />

          <CompetitionCard
            icon={<Medal />}
            title="CHAMPIONS LEAGUE"
            subtitle="THE ULTIMATE CLUB BATTLE"
            color="blue"
            onClick={() => navigate("competitions")}
          />

          <CompetitionCard
            icon={<Crown />}
            title="PREMIER LEAGUE"
            subtitle="THE RACE FOR THE TITLE"
            color="green"
            onClick={() => navigate("competitions")}
          />

        </div>

      </section>

      <section className="final-banner">

        <div>
          <small>YOUR LEGEND STARTS HERE</small>
          <h2>READY TO MAKE HISTORY?</h2>
          <p>Enter the football universe and create your legacy.</p>
        </div>

        <button
          className="gold-button"
          onClick={account ? () => navigate("play") : openRegister}
        >
          {account ? "PLAY NOW" : "JOIN HOLO STRIKER"}
          <ChevronRight />
        </button>

      </section>
    </>
  );
}

/* PLAY FOOTBALL - GAME CENTER */

function PlayPage() {
  const [mode, setMode] = useState("Quick Match");
  const [team, setTeam] = useState("Nigeria");
  const [opponent, setOpponent] = useState("Brazil");
  const [difficulty, setDifficulty] = useState("Professional");
  const [duration, setDuration] = useState("6 Minutes");
  const [matchReady, setMatchReady] = useState(false);

  const [savedMatches, setSavedMatches] = useState(
    () => loadStorage("holo_match_history", [])
  );

  const teams = [
    "Nigeria", "Brazil", "Argentina", "England",
    "France", "Portugal", "Germany", "Spain",
    "Ghana", "Egypt"
  ];

  const modes = [
    {
      name: "Quick Match",
      description: "Jump straight into a football match.",
      icon: Zap
    },
    {
      name: "Offline Match",
      description: "Play against computer-controlled opponents.",
      icon: Shield
    },
    {
      name: "Training Mode",
      description: "Practice your football skills.",
      icon: Target
    },
    {
      name: "Tournament",
      description: "Prepare for competitive football.",
      icon: Trophy
    }
  ];

  function prepareMatch() {
    if (team === opponent && mode !== "Training Mode") {
      alert("Please select two different teams.");
      return;
    }

    const match = {
      id: Date.now(),
      mode,
      team,
      opponent: mode === "Training Mode" ? "Training Ground" : opponent,
      difficulty,
      duration,
      date: new Date().toLocaleString()
    };

    const updated = [match, ...savedMatches].slice(0, 20);

    localStorage.setItem(
      "holo_match_history",
      JSON.stringify(updated)
    );

    setSavedMatches(updated);
    setMatchReady(true);
  }

  return (
    <section className="content-page holo-game-center">

      <div className="page-heading">
        <small>HOLO STRIKER FOOTBALL 2027</small>
        <h1>GAME CENTER</h1>
        <p>Choose your football experience and prepare for the arena.</p>
      </div>

      <div className="play-mode-grid">

        {modes.map(item => {
          const Icon = item.icon;

          return (
            <button
              key={item.name}
              className={`play-mode-card ${mode === item.name ? "selected" : ""}`}
              onClick={() => {
                setMode(item.name);
                setMatchReady(false);
              }}
            >
              <div className="play-mode-icon">
                <Icon size={30} />
              </div>

              <h3>{item.name}</h3>
              <p>{item.description}</p>

              <span>
                {mode === item.name ? "SELECTED" : "SELECT MODE"}
                <ChevronRight size={15} />
              </span>
            </button>
          );
        })}

      </div>

      <div className="match-setup-panel">

        <div className="match-setup-heading">
          <div>
            <small>YOUR NEXT CHALLENGE</small>
            <h2>MATCH CONFIGURATION</h2>
          </div>
          <Swords size={35} />
        </div>

        <div className="match-team-selection">

          <div className="match-team">
            <div className="team-emblem">
              <Shield size={38} />
            </div>

            <small>YOUR TEAM</small>

            <select
              value={team}
              onChange={e => {
                setTeam(e.target.value);
                setMatchReady(false);
              }}
            >
              {teams.map(item => (
                <option key={item}>{item}</option>
              ))}
            </select>
          </div>

          <div className="versus-display">
            <span>VS</span>
          </div>

          <div className="match-team">
            <div className="team-emblem opponent-emblem">
              <Globe size={38} />
            </div>

            <small>OPPONENT</small>

            <select
              value={opponent}
              disabled={mode === "Training Mode"}
              onChange={e => {
                setOpponent(e.target.value);
                setMatchReady(false);
              }}
            >
              {teams.map(item => (
                <option key={item}>{item}</option>
              ))}
            </select>
          </div>

        </div>

        <div className="match-options">

          <div>
            <label>MATCH DIFFICULTY</label>

            <select
              value={difficulty}
              onChange={e => setDifficulty(e.target.value)}
            >
              <option>Beginner</option>
              <option>Amateur</option>
              <option>Professional</option>
              <option>World Class</option>
              <option>Legendary</option>
            </select>
          </div>

          <div>
            <label>MATCH DURATION</label>

            <select
              value={duration}
              onChange={e => setDuration(e.target.value)}
            >
              <option>3 Minutes</option>
              <option>6 Minutes</option>
              <option>10 Minutes</option>
              <option>15 Minutes</option>
            </select>
          </div>

        </div>

        <button
          className="gold-button start-match-button"
          onClick={prepareMatch}
        >
          <Play size={19} />
          PREPARE MATCH
          <ChevronRight size={19} />
        </button>

      </div>

      {matchReady && (
        <div className="match-preview-panel">

          <div className="match-preview-top">
            <span className="green-indicator"></span>
            MATCH CONFIGURATION SAVED
          </div>

          <h2>YOUR MATCH IS READY</h2>

          <div className="match-preview-versus">

            <div>
              <Shield size={35} />
              <h3>{team}</h3>
            </div>

            <strong>VS</strong>

            <div>
              <Globe size={35} />
              <h3>
                {mode === "Training Mode" ? "TRAINING GROUND" : opponent}
              </h3>
            </div>

          </div>

          <div className="match-preview-details">
            <span>MODE: {mode}</span>
            <span>DIFFICULTY: {difficulty}</span>
            <span>DURATION: {duration}</span>
          </div>

          <p>
            Your match configuration has been saved.
            The playable football engine is the next development stage.
          </p>

          <button
            className="outline-button"
            onClick={() => setMatchReady(false)}
          >
            BACK TO GAME CENTER
          </button>

        </div>
      )}

      <div className="match-history-panel">

        <div className="section-title">
          <div>
            <small>YOUR FOOTBALL ACTIVITY</small>
            <h2>RECENT MATCH SETUPS</h2>
          </div>
        </div>

        {savedMatches.length === 0 ? (
          <div className="empty-state">
            <CalendarDays size={35} />
            <h3>No match history yet</h3>
            <p>Your prepared matches will appear here.</p>
          </div>
        ) : (
          savedMatches.map(match => (
            <div className="match-history-item" key={match.id}>
              <div>
                <strong>{match.team} VS {match.opponent}</strong>
                <small>{match.mode} • {match.difficulty}</small>
                <small>{match.date}</small>
              </div>

              <span className="coming-soon">PREPARED</span>
            </div>
          ))
        )}

      </div>

    </section>
  );
}

/* PLAYER PAGE */

function PlayersPage({ search }) {
  const filteredPlayers = players.filter(player =>
    `${player.name} ${player.country} ${player.position}`
      .toLowerCase()
      .includes(search.toLowerCase())
  );

  return (
    <section className="content-page">

      <div className="page-heading">
        <small>WORLD CLASS FOOTBALL TALENT</small>
        <h1>PLAYER UNIVERSE</h1>
        <p>Discover football superstars and build your dream squad.</p>
      </div>

      {filteredPlayers.length > 0 ? (
        <PlayerCards customPlayers={filteredPlayers} />
      ) : (
        <div className="empty-state">
          <Search size={35} />
          <h3>No players found</h3>
          <p>Try another player name or country.</p>
        </div>
      )}

    </section>
  );
}

/* PLAYER CARDS */

function PlayerCards({ limit, customPlayers }) {
  const list = customPlayers || (limit ? players.slice(0, limit) : players);

  return (
    <div className="superstar-grid">
      {list.map((player, index) => (
        <PlayerCard
          key={player.name}
          player={player}
          index={index}
        />
      ))}
    </div>
  );
}

function PlayerCard({ player, index }) {
  const [image, setImage] = useState("");

  useEffect(() => {
    let active = true;

    fetch(
      "https://en.wikipedia.org/api/rest_v1/page/summary/" +
      encodeURIComponent(player.wiki)
    )
      .then(response => response.json())
      .then(data => {
        if (active && data.thumbnail?.source) {
          setImage(data.thumbnail.source);
        }
      })
      .catch(() => {});

    return () => {
      active = false;
    };
  }, [player.wiki]);

  return (
    <div className="superstar-card">

      <div className="player-number">
        {String(index + 1).padStart(2, "0")}
      </div>

      <div className="player-image">
        {image ? (
          <img src={image} alt={player.name} loading="lazy" />
        ) : (
          <div className="player-image-placeholder">
            <User size={55} />
          </div>
        )}
      </div>

      <div className="player-rating">
        <Star size={13} /> {player.rating}
      </div>

      <div className="player-card-info">
        <small>{player.country} • {player.position}</small>
        <h3>{player.name}</h3>
        <span>HOLO STRIKER SUPERSTAR</span>
      </div>

    </div>
  );
}

/* COACH MODE */

function CoachPage() {
  const [formation, setFormation] = useState(
    () => localStorage.getItem("holo_formation") || "4-3-3"
  );

  const [clubName, setClubName] = useState(
    () => localStorage.getItem("holo_club_name") || "HOLO FC"
  );

  const formations = [
    "4-3-3", "4-4-2", "4-2-3-1", "3-5-2", "5-3-2"
  ];

  function saveTactics() {
    localStorage.setItem("holo_formation", formation);
    localStorage.setItem("holo_club_name", clubName);
    alert("Your club name and formation have been saved.");
  }

  return (
    <section className="content-page">

      <div className="page-heading">
        <small>MANAGERIAL EXPERIENCE</small>
        <h1>COACH MODE</h1>
        <p>Build your team, choose your formation and prepare your tactics.</p>
      </div>

      <div className="coach-panel">

        <div className="coach-top">
          <div>
            <small>YOUR CLUB</small>
            <h2>{clubName}</h2>
          </div>
          <Shield size={45} />
        </div>

        <label>CLUB NAME</label>

        <input
          value={clubName}
          onChange={e => setClubName(e.target.value)}
          maxLength={25}
          placeholder="Enter your club name"
        />

        <h3>SELECT FORMATION</h3>

        <div className="formation-options">
          {formations.map(item => (
            <button
              key={item}
              className={formation === item ? "selected" : ""}
              onClick={() => setFormation(item)}
            >
              {item}
            </button>
          ))}
        </div>

        <div className="formation-pitch">
          <div className="pitch-label">YOUR TACTICAL FORMATION</div>
          <div className="pitch-center-circle"></div>
          <div className="pitch-formation">{formation}</div>

          <div className="pitch-player-row">
            <span>LW</span><span>ST</span><span>RW</span>
          </div>

          <div className="pitch-player-row">
            <span>CM</span><span>CM</span><span>CM</span>
          </div>

          <div className="pitch-player-row">
            <span>LB</span><span>CB</span><span>CB</span><span>RB</span>
          </div>

          <div className="pitch-player-row">
            <span>GK</span>
          </div>
        </div>

        <p className="coach-note">
          Your selected formation: <strong>{formation}</strong>.
          Save your choices to keep them on this device.
        </p>

        <button className="gold-button" onClick={saveTactics}>
          SAVE CLUB TACTICS
        </button>

      </div>

    </section>
  );
}

/* COMPETITIONS PAGE */

function CompetitionsPage() {
  const competitions = [
    {
      title: "INTERNATIONAL CUP",
      subtitle: "Represent your nation on the global stage.",
      icon: Trophy,
      color: "gold"
    },
    {
      title: "CHAMPIONS LEAGUE",
      subtitle: "Compete against the world's best clubs.",
      icon: Medal,
      color: "blue"
    },
    {
      title: "PREMIER LEAGUE",
      subtitle: "Fight for the domestic league title.",
      icon: Crown,
      color: "green"
    },
    {
      title: "WORLD CLUB CUP",
      subtitle: "The ultimate club football challenge.",
      icon: Swords,
      color: "gold"
    }
  ];

  return (
    <section className="content-page">

      <div className="page-heading">
        <small>FIGHT FOR GREATNESS</small>
        <h1>COMPETITIONS</h1>
        <p>Discover tournaments and chase football glory.</p>
      </div>

      <div className="competition-grid">

        {competitions.map(item => {
          const Icon = item.icon;

          return (
            <div
              className={`competition-card ${item.color}`}
              key={item.title}
            >
              <Icon size={40} />
              <h3>{item.title}</h3>
              <p>{item.subtitle}</p>
              <span className="coming-soon">COMING SOON</span>
            </div>
          );
        })}

      </div>

    </section>
  );
}

/* PROFILE PAGE */

function ProfilePage({ account, signOut, openRegister }) {
  return (
    <section className="content-page">

      <div className="page-heading">
        <small>FOOTBALL IDENTITY</small>
        <h1>MY PROFILE</h1>
      </div>

      <div className="profile-panel">

        <div className="profile-avatar">
          <User size={40} />
        </div>

        <h2>{account?.username || "GUEST PLAYER"}</h2>
        <p>{account?.country || "No country selected"}</p>
        <p>{account?.email || "Register to create your profile."}</p>

        {!account && (
          <button className="gold-button" onClick={openRegister}>
            REGISTER NOW
          </button>
        )}

        {account && (
          <button className="outline-button" onClick={signOut}>
            SIGN OUT
          </button>
        )}

      </div>

    </section>
  );
}

/* SETTINGS PAGE */

function SettingsPage() {
  const [sound, setSound] = useState(
    () => localStorage.getItem("holo_sound") !== "off"
  );

  const [notifications, setNotifications] = useState(
    () => localStorage.getItem("holo_notifications") !== "off"
  );

  function changeSound(value) {
    setSound(value);
    localStorage.setItem("holo_sound", value ? "on" : "off");
  }

  function changeNotifications(value) {
    setNotifications(value);
    localStorage.setItem("holo_notifications", value ? "on" : "off");
  }

  return (
    <section className="content-page">

      <div className="page-heading">
        <small>PERSONAL PREFERENCES</small>
        <h1>GAME SETTINGS</h1>
        <p>Manage your football experience and preferences.</p>
      </div>

      <div className="settings-panel">

        <div className="setting-row">
          <div>
            <h3>Game Sound</h3>
            <p>Sound preferences for the game.</p>
          </div>

          <input
            type="checkbox"
            checked={sound}
            onChange={e => changeSound(e.target.checked)}
          />
        </div>

        <div className="setting-row">
          <div>
            <h3>Notifications</h3>
            <p>Receive football updates and announcements.</p>
          </div>

          <input
            type="checkbox"
            checked={notifications}
            onChange={e => changeNotifications(e.target.checked)}
          />
        </div>

        <div className="setting-row">
          <div>
            <h3>Game Version</h3>
            <p>HOLO STRIKER FOOTBALL 2027</p>
          </div>
          <span className="coming-soon">2027</span>
        </div>

      </div>

    </section>
  );
}

/* GENERAL PAGE */

function SimplePage({ title, subtitle, icon: Icon }) {
  return (
    <section className="content-page">

      <div className="page-heading">
        <small>HOLO STRIKER FOOTBALL 2027</small>
        <h1>{title}</h1>
        <p>{subtitle}</p>
      </div>

      <div className="simple-feature-panel">

        <div className="simple-feature-icon">
          <Icon size={65} />
        </div>

        <div>
          <span className="green-indicator"></span>
          <small>HOLO STRIKER UNIVERSE</small>
          <h2>YOUR NEXT FOOTBALL CHAPTER STARTS HERE</h2>
          <p>
            This section is part of the HOLO STRIKER experience.
            More interactive features will be added as development continues.
          </p>
          <span className="coming-soon">FEATURE DEVELOPMENT IN PROGRESS</span>
        </div>

      </div>

    </section>
  );
}

/* REUSABLE COMPONENTS */

function QuickCard({ icon, title, description, onClick }) {
  return (
    <button className="quick-card" onClick={onClick}>
      <div className="quick-icon">{icon}</div>
      <div>
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
      <ChevronRight size={18} />
    </button>
  );
}

function SectionTitle({ label, title, action, onAction }) {
  return (
    <div className="section-title">

      <div>
        <small>{label}</small>
        <h2>{title}</h2>
      </div>

      {action && (
        <button onClick={onAction}>
          {action} <ChevronRight size={16} />
        </button>
      )}

    </div>
  );
}

function CareerCard({ number, title, description, icon, onClick }) {
  return (
    <button className="career-card" onClick={onClick}>
      <div className="career-number">{number}</div>
      <div className="career-icon">{icon}</div>
      <h3>{title}</h3>
      <p>{description}</p>
      <span>EXPLORE MODE <ChevronRight size={15} /></span>
    </button>
  );
}

function CompetitionCard({ icon, title, subtitle, color, onClick }) {
  return (
    <button
      className={`competition-card ${color}`}
      onClick={onClick}
    >
      <div className="competition-icon">{icon}</div>
      <h3>{title}</h3>
      <p>{subtitle}</p>
      <span>EXPLORE <ChevronRight size={15} /></span>
    </button>
  );
    }
