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

    if (!form.username.trim() || !form.email.trim() || !form.password) {
      alert("Please complete all fields.");
      return;
    }

    const newAccount = {
      username: form.username.trim(),
      email: form.email.trim(),
      country: form.country,
      registered: true
    };

    localStorage.setItem("holo_player", JSON.stringify(newAccount));
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

        <div className="holo-logo" onClick={() => navigate("home")}>
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
            onClick={() => account ? navigate("profile") : setRegisterOpen(true)}
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

          {page === "players" && <PlayersPage search={search} />}

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
              title="FOOT
