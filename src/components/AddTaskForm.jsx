 import React, { useState } from "react";

function AddTaskForm({ addTask }) {
  const [title, setTitle] = useState("");
  const [subject, setSubject] = useState("");
  const [date, setDate] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title || !subject || !date) return alert("Please fill all fields.");

    addTask({ id: Date.now(), title, subject, date, completed: false });
    setTitle("");
    setSubject("");
    setDate("");
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white p-4 shadow rounded-lg mb-4 flex flex-col gap-3 max-w-md mx-auto">
      <input
        type="text"
        placeholder="Task Title"
        className="border p-2 rounded text-black"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <input
        type="text"
        placeholder="Subject"
        className="border p-2 rounded text-black"
        value={subject}
        onChange={(e) => setSubject(e.target.value)}
      />
      <input
        type="date"
        className="border p-2 rounded text-black"
        value={date}
        onChange={(e) => setDate(e.target.value)}
      />
      <button className="bg-purple-700 text-white py-2 rounded hover:bg-indigo-500 transition">
        Add Task
      </button>
    </form>
  );
}

export default AddTaskForm;