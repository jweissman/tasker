import React from 'react';
import './App.css';
import { TaskManager } from './components/TaskManager';

const App: React.FC = () => {
  return (
    <div className="App">
      <header className="App-header">
        taskr
      </header>
      <main className="App-main">
        {/* <section className="App-list"> */}
          <TaskManager />
        {/* </section> */}
      </main>
    </div>
  );
}

export default App;