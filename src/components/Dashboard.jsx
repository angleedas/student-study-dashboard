//  import React from "react";

// function Dashboard({ tasks }) {
//   const total = tasks.length;
//   const completed = tasks.filter((t) => t.completed).length;
//   const pending = total - completed;

//   const today = new Date().toISOString().split("T")[0];
//   const todayTasks = tasks.filter((t) => t.date === today);

//   const progress = total === 0 ? 0 : Math.round((completed / total) * 100);

//   // Filter completed tasks for the list
//   const completedTasksList = tasks.filter((t) => t.completed);

//   return (
//     <div className="p-4 sm:p-6">
//       <h2 className="text-2xl font-bold text-black mb-6">Dashboard</h2>

//       {/* Stats */}
//       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
//         <StatCard title="Total Tasks" value={total} />
//         <StatCard title="Completed" value={completed} />
//         <StatCard title="Pending" value={pending} />
//         <StatCard title="Today" value={todayTasks.length} />
//       </div>

//       {/* Circular Progress */}
//       <div className="flex flex-col items-center mb-10">
//         <div className="relative w-32 h-32">
//           <svg viewBox="0 0 36 36" className="-rotate-90">
//             <path
//               d="M18 2.0845
//                  a 15.9155 15.9155 0 0 1 0 31.831
//                  a 15.9155 15.9155 0 0 1 0 -31.831"
//               fill="none"
//               stroke="currentColor"
//               strokeWidth="3"
//               className="text-gray-300"
//             />
//             <path
//               d="M18 2.0845
//                  a 15.9155 15.9155 0 0 1 0 31.831
//                  a 15.9155 15.9155 0 0 1 0 -31.831"
//               fill="none"
//               stroke="currentColor"
//               strokeWidth="3"
//               strokeDasharray={`${progress}, 100`}
//               strokeLinecap="round"
//               className="text-black"
//             />
//           </svg>

//           <div className="absolute inset-0 flex items-center justify-center">
//             <span className="text-xl font-bold">{progress}%</span>
//           </div>
//         </div>
//         <p className="mt-2 text-gray-600">Overall Progress</p>
//       </div>

//       {/* Completed Tasks List */}
//       <div className="bg-white p-4 rounded-lg shadow">
//         <h3 className="text-lg font-semibold mb-2">Completed Tasks</h3>
//         {completedTasksList.length === 0 ? (
//           <p className="text-gray-500">No tasks completed yet.</p>
//         ) : (
//           <ul className="list-disc list-inside space-y-1">
//             {completedTasksList.map((task) => (
//               <li key={task.id} className="text-gray-700">
//                 {task.title}
//               </li>
//             ))}
//           </ul>
//         )}
//       </div>
//     </div>
//   );
// }

// function StatCard({ title, value }) {
//   return (
//     <div className="bg-white p-4 rounded-lg shadow text-center">
//       <h4 className="text-gray-600">{title}</h4>
//       <p className="text-2xl font-bold text-blue-700">{value}</p>
//     </div>
//   );
// }

// export default Dashboard;

import React from "react";

function Dashboard({ tasks }) {
  const total = tasks.length;
  const completed = tasks.filter((t) => t.completed).length;
  const pending = total - completed;

  const today = new Date().toISOString().split("T")[0];
  const todayTasks = tasks.filter((t) => t.date === today);

  const progress = total === 0 ? 0 : Math.round((completed / total) * 100);
  const completedTasksList = tasks.filter((t) => t.completed);

  return (
    <div className="p-4 sm:p-6">
      <h1 className="text-2xl font-bold text-white mb-6">Dashboard</h1>

      {/* Stats */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        <StatCard title="Total Tasks" value={total} color="black-900" />
        <StatCard title="Completed" value={completed} color="green-500" />
        <StatCard title="Pending" value={pending} color="amber-500" />
        <StatCard title="Today" value={todayTasks.length} color="purple-500" />
      </div>

      {/* Circular Progress */}
      <div className="flex flex-col items-center mb-10">
        <div className="relative w-32 h-32 sm:w-40 sm:h-40">
          <svg viewBox="0 0 36 36" className="-rotate-90">
            <path
              d="M18 2.0845
                 a 15.9155 15.9155 0 0 1 0 31.831
                 a 15.9155 15.9155 0 0 1 0 -31.831"
              fill="none"
              stroke="#E5E7EB"
              strokeWidth="3"
            />
            <path
              d="M18 2.0845
                 a 15.9155 15.9155 0 0 1 0 31.831
                 a 15.9155 15.9155 0 0 1 0 -31.831"
              fill="none"
              stroke="#6D28D9"
              strokeWidth="3"
              strokeDasharray={`${progress}, 100`}
              strokeLinecap="round"
            />
          </svg>
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="text-xl sm:text-2xl font-bold text-purple-700">
              {progress}%
            </span>
          </div>
        </div>
        <p className="mt-2 text-gray-600">Overall Progress</p>
      </div>

      {/* Completed Tasks List */}
      <div className="bg-white p-4 rounded-lg shadow">
        <h3 className="text-lg font-semibold mb-2 text-purple-700">Completed Tasks</h3>
        {completedTasksList.length === 0 ? (
          <p className="text-gray-500">No tasks completed yet.</p>
        ) : (
          <ul className="list-disc list-inside space-y-1">
            {completedTasksList.map((task) => (
              <li key={task.id} className="text-gray-700">
                {task.title}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}

function StatCard({ title, value, color }) {
  return (
    <div className="bg-white p-4 rounded-lg shadow text-center">
      <h4 className="text-gray-600">{title}</h4>
      <p className={`text-2xl font-bold text-${color}`}>{value}</p>
    </div>
  );
}

export default Dashboard;