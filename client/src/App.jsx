import { useState, useEffect } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";

import testSvc from "./services/testService";

function App() {
  const [testData, setTestData] = useState(null);

  useEffect(() => {
    fetchCategories();
    async function fetchCategories() {
      const result = await testSvc.getTest();

      setTestData(result);
    }
  }, []);

  return (
    <div className="App">
      <div>
        <p>Hello Sebastian! This is a test</p>
        <a href="https://vitejs.dev" target="_blank">
          <img src="/vite.svg" className="logo" alt="Vite logo" />
        </a>
        <a href="https://reactjs.org" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      {testData && <h1>{testData}</h1>}
    </div>
  );
}

export default App;
