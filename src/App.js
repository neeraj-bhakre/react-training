import logo from './logo.svg';
import './App.css';
import { useState } from "react";
import "./styles.css";

const content = [
  [
    "React is extremely popular",
    "It makes building complex, interactive UIs a breeze",
    "It's powerful & flexible",
    "It has a very active and versatile ecosystem"
  ],
  [
    "Components, JSX & Props",
    "State",
    "Hooks (e.g., useEffect())",
    "Dynamic rendering"
  ],
  [
    "Official web page (react.dev)",
    "Next.js (Fullstack framework)",
    "React Native (build native mobile apps with React)"
  ]
];

function App() {
  
  const [activeContentIndex, setActiveContentIndex] = useState(0);
  return (
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>

    <div>
      <header>
        <img src="react-logo-xs.png" alt="React logo" />
        <div>
          <h1>React.js</h1>
          <p>i.e., using the React library for rendering the UI</p>
        </div>
      </header>

      <div id="tabs">
        <menu>
          <button
            className={activeContentIndex === 0 ? "active" : ""}
            onClick={() => setActiveContentIndex(0)}
          >
            Why React?
          </button>
          <button
            className={activeContentIndex === 1 ? "active" : ""}
            onClick={() => setActiveContentIndex(1)}
          >
            Core Features
          </button>
          <button
            className={activeContentIndex === 2 ? "active" : ""}
            onClick={() => setActiveContentIndex(2)}
          >
            Related Resources
          </button>
        </menu>
        <div id="tab-content">
          <ul>
            {content[activeContentIndex].map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default App;

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// import "./styles.css";

// const content = [
//   [
//     "React is extremely popular",
//     "It makes building complex, interactive UIs a breeze",
//     "It's powerful & flexible",
//     "It has a very active and versatile ecosystem"
//   ],
//   [
//     "Components, JSX & Props",
//     "State",
//     "Hooks (e.g., useEffect())",
//     "Dynamic rendering"
//   ],
//   [
//     "Official web page (react.dev)",
//     "Next.js (Fullstack framework)",
//     "React Native (build native mobile apps with React)"
//   ]
// ];

// export default function App() {
//   const [activeContentIndex, setActiveContentIndex] = useState(0);

//   return (
//     <div>
//       <header>
//         <img src="react-logo-xs.png" alt="React logo" />
//         <div>
//           <h1>React.js</h1>
//           <p>i.e., using the React library for rendering the UI</p>
//         </div>
//       </header>

//       <div id="tabs">
//         <menu>
//           <button
//             className={activeContentIndex === 0 ? "active" : ""}
//             onClick={() => setActiveContentIndex(0)}
//           >
//             Why React?
//           </button>
//           <button
//             className={activeContentIndex === 1 ? "active" : ""}
//             onClick={() => setActiveContentIndex(1)}
//           >
//             Core Features
//           </button>
//           <button
//             className={activeContentIndex === 2 ? "active" : ""}
//             onClick={() => setActiveContentIndex(2)}
//           >
//             Related Resources
//           </button>
//         </menu>
//         <div id="tab-content">
//           <ul>
//             {content[activeContentIndex].map((item) => (
//               <li key={item}>{item}</li>
//             ))}
//           </ul>
//         </div>
//       </div>
//     </div>
//   );
// }
