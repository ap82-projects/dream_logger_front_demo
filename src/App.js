import './App.css';
import List from './components/List';
import ComposeAndEdit from './components/ComposeAndEdit';

function App() {
  return (
    <div className="App">
      <h1>Dream Logger Demo</h1>
      <h3><a href="https://github.com/ap82-projects/dream_logger" target="_blank">Back-End GitHub Site</a></h3>
      <h3><a href="https://github.com/ap82-projects/dream_logger_front_demo" target="_blank">Front-End GitHub Site</a></h3>
      {/* <ComposeAndEdit /> */}
      <List />
    </div>
  );
}

export default App;
