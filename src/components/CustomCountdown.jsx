

import React, { useEffect, useState } from "react";

function CustomCountdown() {
  const [title, setTitle] = useState("");
  const [dateTime, setDateTime] = useState("");
  const [countdown, setCountdown] = useState(null);
  const [timeLeft, setTimeLeft] = useState("");

  useEffect(() => {
    if ("Notification" in window) Notification.requestPermission();
  }, []);

  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem("countdown"));
    if (saved) setCountdown(saved);
  }, []);

  useEffect(() => {
    if (countdown) localStorage.setItem("countdown", JSON.stringify(countdown));
  }, [countdown]);

  useEffect(() => {
    if (!countdown) return;
    const interval = setInterval(() => {
      const now = new Date().getTime();
      const target = new Date(countdown.dateTime).getTime();
      const distance = target - now;

      if (distance <= 0) {
        setTimeLeft("Time Completed 🎉");
        if (Notification.permission === "granted") {
          new Notification("⏰ Countdown Finished!", { body: countdown.title });
        }
        clearInterval(interval);
      } else {
        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);
        setTimeLeft(`${days}d ${hours}h ${minutes}m ${seconds}s`);
      }
    }, 1000);
    return () => clearInterval(interval);
  }, [countdown]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title || !dateTime) return alert("Fill all fields");
    setCountdown({ title, dateTime });
    setTitle("");
    setDateTime("");
  };

  const clearCountdown = () => {
    localStorage.removeItem("countdown");
    setCountdown(null);
    setTimeLeft("");
  };

  return (
    <div className="p-4 sm:p-6 max-w-lg mx-auto">
      <h1 className="text-2xl font-bold text-white mb-4">Custom Countdown</h1>

      {/* Countdown Form */}
      <form onSubmit={handleSubmit} className="bg-white p-4 rounded-lg shadow mb-6 flex flex-col gap-3">
        <input
          type="text"
          placeholder="Countdown Title"
          className="border p-2 rounded text-black"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <input
          type="datetime-local"
          className="border p-2 rounded"
          value={dateTime}
          onChange={(e) => setDateTime(e.target.value)}
        />
        <button className="bg-purple-700 text-white py-2 rounded hover:bg-indigo-500 transition">
          Start Countdown
        </button>
      </form>

      {/* Countdown Display */}
      {countdown && (
        <div className="bg-white p-6 rounded-lg shadow text-center">
          <h3 className="text-xl font-semibold mb-2 text-purple-700">{countdown.title}</h3>
          <p className="text-lg text-gray-700 mb-4">{timeLeft}</p>
          <button
            onClick={clearCountdown}
            className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700 transition"
          >
            Clear Countdown
          </button>
        </div>
      )}
    </div>
  );
}

export default CustomCountdown;