// import React, { useState, useEffect } from "react";
// import AddTaskForm from "./AddTaskForm";

// function TaskList() {
//   const [tasks, setTasks] = useState([]);

//   // Load saved tasks
//   useEffect(() => {
//     const saved = JSON.parse(localStorage.getItem("tasks"));
//     if (saved) setTasks(saved);
//   }, []);

//   // Save tasks
//   useEffect(() => {
//     localStorage.setItem("tasks", JSON.stringify(tasks));
//   }, [tasks]);

//   const addTask = (task) => setTasks([...tasks, task]);
//   const toggleComplete = (id) => {
//     setTasks(
//       tasks.map((task) =>
//         task.id === id ? { ...task, completed: !task.completed } : task
//       )
//     );
//   };
//   const deleteTask = (id) => setTasks(tasks.filter((task) => task.id !== id));

//   // Tasks due today
//   const today = new Date().toISOString().split("T")[0];
//   const todayTasks = tasks.filter((t) => t.date === today);

//   // Progress %
//   const completedTasks = tasks.filter((t) => t.completed).length;
//   const progress = tasks.length ? Math.round((completedTasks / tasks.length) * 100) : 0;

//   return (
//     <div className="p-6">
//       <h2 className="text-2xl font-bold mb-4 text-black">Manage Tasks</h2>
//       <AddTaskForm addTask={addTask} />

//       {/* Progress Circle */}
//       <div className="mb-6 flex flex-col items-center">
//         <div className="relative w-32 h-32">
//           <svg className="transform -rotate-90" viewBox="0 0 36 36">
//             <path
//               className="text-gray-200"
//               strokeWidth="3"
//               fill="none"
//               stroke="currentColor"
//               d="M18 2.0845
//                  a 15.9155 15.9155 0 0 1 0 31.831
//                  a 15.9155 15.9155 0 0 1 0 -31.831"
//             />
//             <path
//               className="text-black"
//               strokeWidth="3"
//               fill="none"
//               strokeLinecap="round"
//               stroke="currentColor"
//               strokeDasharray={`${progress}, 100`}
//               d="M18 2.0845
//                  a 15.9155 15.9155 0 0 1 0 31.831
//                  a 15.9155 15.9155 0 0 1 0 -31.831"
//             />
//           </svg>
//           <div className="absolute inset-0 flex items-center justify-center">
//             <span className="text-xl font-bold">{progress}%</span>
//           </div>
//         </div>
//         <p className="mt-2 text-gray-700">Tasks Completed</p>
//       </div>

//       {/* Today’s Tasks */}
//       <h3 className="text-xl font-semibold mb-2">Today’s Tasks</h3>
//       {todayTasks.length === 0 ? (
//         <p className="text-gray-600 mb-4">No tasks due today.</p>
//       ) : (
//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-6">
//           {todayTasks.map((task) => (
//             <div
//               key={task.id}
//               className={`p-4 rounded-lg shadow border ${
//                 task.completed ? "bg-green-200 border-green-500" : "bg-white"
//               }`}
//             >
//               <h4 className="font-semibold">{task.title}</h4>
//               <p className="text-gray-700">{task.subject}</p>
//               <p className="text-sm text-gray-500">Due: {task.date}</p>
//               <div className="flex justify-between mt-3">
//                 <button
//                   onClick={() => toggleComplete(task.id)}
//                   className="text-sm bg-black text-white px-3 py-1 rounded hover:bg-gray-800"
//                 >
//                   {task.completed ? "Undo" : "Done"}
//                 </button>
//                 <button
//                   onClick={() => deleteTask(task.id)}
//                   className="text-sm bg-red-600 text-white px-3 py-1 rounded hover:bg-red-700"
//                 >
//                   Delete
//                 </button>
//               </div>
//             </div>
//           ))}
//         </div>
//       )}

//       {/* All Tasks Card View */}
//       <h3 className="text-xl font-semibold mb-2">All Tasks</h3>
//       {tasks.length === 0 ? (
//         <p className="text-gray-600">No tasks added yet.</p>
//       ) : (
//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
//           {tasks.map((task) => (
//             <div
//               key={task.id}
//               className={`p-4 rounded-lg shadow border ${
//                 task.completed ? "bg-green-200 border-green-500" : "bg-white"
//               }`}
//             >
//               <h4 className="font-semibold">{task.title}</h4>
//               <p className="text-gray-700">{task.subject}</p>
//               <p className="text-sm text-gray-500">Due: {task.date}</p>
//               <div className="flex justify-between mt-3">
//                 <button
//                   onClick={() => toggleComplete(task.id)}
//                   className="text-sm bg-black text-white px-3 py-1 rounded hover:bg-gray-800"
//                 >
//                   {task.completed ? "Undo" : "Done"}
//                 </button>
//                 <button
//                   onClick={() => deleteTask(task.id)}
//                   className="text-sm bg-red-600 text-white px-3 py-1 rounded hover:bg-red-700"
//                 >
//                   Delete
//                 </button>
//               </div>
//             </div>
//           ))}
//         </div>
//       )}
//     </div>
//   );
// }
// export default TaskList;

import AddTaskForm from "./AddTaskForm";

function TaskList({ tasks, setTasks }) {
  const addTask = (task) => {
    setTasks((prev) => [...prev, task]);
  };

  const toggleComplete = (id) => {
    setTasks((prev) =>
      prev.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  const deleteTask = (id) => {
    setTasks((prev) => prev.filter((task) => task.id !== id));
  };

  const today = new Date().toISOString().split("T")[0];
  const todayTasks = tasks.filter((t) => t.date === today);

  const completedTasks = tasks.filter((t) => t.completed).length;
  const progress =
    tasks.length > 0
      ? Math.round((completedTasks / tasks.length) * 100)
      : 0;

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4 text-white">Manage Tasks</h1>

      <AddTaskForm addTask={addTask} />

      {/* Progress Circle */}
      <div className="mb-6 flex flex-col items-center">
        <div className="relative w-32 h-32">
          <svg className="transform -rotate-90" viewBox="0 0 36 36">
            <path
              className="text-gray-200"
              strokeWidth="3"
              fill="none"
              stroke="currentColor"
              d="M18 2.0845
                 a 15.9155 15.9155 0 0 1 0 31.831
                 a 15.9155 15.9155 0 0 1 0 -31.831"
            />
            <path
              className="text-black"
              strokeWidth="3"
              fill="none"
              strokeLinecap="round"
              stroke="currentColor"
              strokeDasharray={`${progress}, 100`}
              d="M18 2.0845
                 a 15.9155 15.9155 0 0 1 0 31.831
                 a 15.9155 15.9155 0 0 1 0 -31.831"
            />
          </svg>

          <div className="absolute inset-0 flex items-center justify-center">
            <span className="text-xl font-bold">{progress}%</span>
          </div>
        </div>
        <p className="mt-2 text-gray-700">Tasks Completed</p>
      </div>

      {/* Today's Tasks */}
      <h3 className="text-xl font-semibold mb-2">Today’s Tasks</h3>
      {todayTasks.length === 0 ? (
        <p className="text-gray-600 mb-4">No tasks due today.</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-6">
          {todayTasks.map((task) => (
            <TaskCard
              key={task.id}
              task={task}
              toggleComplete={toggleComplete}
              deleteTask={deleteTask}
            />
          ))}
        </div>
      )}

      {/* All Tasks */}
      <h3 className="text-xl font-semibold mb-2">All Tasks</h3>
      {tasks.length === 0 ? (
        <p className="text-gray-600">No tasks added yet.</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {tasks.map((task) => (
            <TaskCard
              key={task.id}
              task={task}
              toggleComplete={toggleComplete}
              deleteTask={deleteTask}
            />
          ))}
        </div>
      )}
    </div>
  );
}

function TaskCard({ task, toggleComplete, deleteTask }) {
  return (
    <div
      className={`p-4 rounded-lg shadow border ${
        task.completed ? "bg-green-200 border-green-500" : "bg-white"
      }`}
    >
      <h4 className="font-semibold">{task.title}</h4>
      <p className="text-gray-700">{task.subject}</p>
      <p className="text-sm text-gray-500">Due: {task.date}</p>

      <div className="flex justify-between mt-3">
        <button
          onClick={() => toggleComplete(task.id)}
          className="text-sm bg-black text-white px-3 py-1 rounded"
        >
          {task.completed ? "Undo" : "Done"}
        </button>

        <button
          onClick={() => deleteTask(task.id)}
          className="text-sm bg-red-600 text-white px-3 py-1 rounded"
        >
          Delete
        </button>
      </div>
    </div>
  );
}

export default TaskList;