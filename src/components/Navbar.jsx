// // import React from "react";
// // import { Link } from "react-router-dom";

// // function Navbar() {
// //   return (
// //     <nav className="bg-black text-white px-6 py-3 flex flex-col sm:flex-row justify-between items-center shadow-md">
// //       <h1 className="text-2xl font-bold mb-2 sm:mb-0">Study Planner</h1>
// //       <ul className="flex flex-col sm:flex-row gap-3 sm:gap-6 text-lg">
// //         <li><Link to="/" className="hover:text-gray-200">Dashboard</Link></li>
// //         <li><Link to="/tasks" className="hover:text-gray-200">Tasks</Link></li>
// //         <li><Link to="/timetable" className="hover:text-gray-200">Timetable</Link></li>
// //         <li><Link to="/exams" className="hover:text-gray-200">Countdown</Link></li>
// //       </ul> 
// //     </nav>
// //   );

// // }

// // export default Navbar;
// import React, { useState } from "react";
// import { Link } from "react-router-dom";

// function Navbar() {
//   const [menuOpen, setMenuOpen] = useState(false);

//   return (
//     <nav className="bg-black text-white px-6 py-3 shadow-md flex flex-col sm:flex-row sm:justify-between sm:items-center">
      
//       {/* Left: Logo + Mobile Hamburger */}
//       <div className="flex justify-between items-center">
//         <h1 className="text-2xl font-bold">Study Planner</h1>

//         {/* Hamburger / Close (MOBILE ONLY) */}
//         <button
//           className="sm:hidden text-3xl"
//           onClick={() => setMenuOpen(!menuOpen)}
//         >
//           {menuOpen ? "✖" : "☰"}
//         </button>
//       </div>

//       {/* Menu */}
//       <ul
//         className={`
//           ${menuOpen ? "flex" : "hidden"}
//           flex-col gap-3 text-lg mt-3
//           sm:flex sm:flex-row sm:gap-6 sm:mt-0
//         `}
//       >
//         <li>
//           <Link to="/" onClick={() => setMenuOpen(false)} className="hover:text-gray-200">
//             Dashboard
//           </Link>
//         </li>
//         <li>
//           <Link to="/tasks" onClick={() => setMenuOpen(false)} className="hover:text-gray-200">
//             Tasks
//           </Link>
//         </li>
//         <li>
//           <Link to="/exams" onClick={() => setMenuOpen(false)} className="hover:text-gray-200">
//             Countdown
//           </Link>
//         </li>
//       </ul>
//     </nav>
//   );
// }

// export default Navbar;
import React, { useState } from "react";
import { Link } from "react-router-dom";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="bg-purple-700 text-white px-6 py-3 shadow-md flex flex-col sm:flex-row sm:justify-between sm:items-center">
      {/* Left: Logo + Mobile Hamburger */}
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold">Study Planner</h1>

        {/* Hamburger / Close (MOBILE ONLY) */}
        <button
          className="sm:hidden text-3xl"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? "✖" : "☰"}
        </button>
      </div>

      {/* Menu */}
      <ul
        className={`
          ${menuOpen ? "flex" : "hidden"}
          flex-col gap-3 text-lg mt-3
          sm:flex sm:flex-row sm:gap-6 sm:mt-0
        `}
      >
        <li>
          <Link
            to="/"
            onClick={() => setMenuOpen(false)}
            className="hover:text-indigo-300 transition-colors"
          >
            Dashboard
          </Link>
        </li>
        <li>
          <Link
            to="/tasks"
            onClick={() => setMenuOpen(false)}
            className="hover:text-indigo-300 transition-colors"
          >
            Tasks
          </Link>
        </li>
        <li>
          <Link
            to="/exams"
            onClick={() => setMenuOpen(false)}
            className="hover:text-indigo-300 transition-colors"
          >
            Countdown
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;