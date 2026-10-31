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
