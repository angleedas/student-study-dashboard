
import { Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Dashboard from "./components/Dashboard";
import TaskList from "./components/TaskList";
import CustomCountdown from "./components/CustomCountdown";

function App() {
  const [tasks, setTasks] = useState(() => {
    const saved = localStorage.getItem("tasks");
    return saved ? JSON.parse(saved) : [];
  });

  // Save tasks
  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  return (
    <>
     <div className="min-h-screen bg-gradient-to-r from-purple-500 via-indigo-300 to-purple-400 text-gray-100">
      <Navbar />

      <Routes>
        <Route path="/" element={<Dashboard tasks={tasks} />} />
        <Route
          path="/tasks"
          element={<TaskList tasks={tasks} setTasks={setTasks} />}
        />
        {/* <Route path="/timetable" element={<Timetable />} /> */}
        <Route path="/exams" element={<CustomCountdown />} />
      </Routes>
      </div>
    </>
  );
}

export default App;
