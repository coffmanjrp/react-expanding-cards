import { useState } from 'react';
import data from './data/data';
import './App.scss';

function App() {
  const [panels, setPanels] = useState(data);

  const handleClick = (id) => {
    const newPanels = panels.map((panel) =>
      panel.id === id
        ? { ...panel, active: !panel.active }
        : { ...panel, active: false }
    );

    setPanels(newPanels);
  };

  return (
    <div className="App">
      {panels.length > 0 &&
        panels.map((panel) => (
          <div
            key={panel.id}
            className={`panel${panel.active ? ' active' : ''}`}
            style={{ backgroundImage: `url('${panel.url}')` }}
            onClick={() => handleClick(panel.id)}
          >
            <h3>{panel.text}</h3>
          </div>
        ))}
    </div>
  );
}

export default App;
