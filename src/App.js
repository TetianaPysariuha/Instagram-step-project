import './App.css';
import UserName from './components/UserName/UserName';

function App() {
  return (
    <div className="App">
      <UserName
        image="./url/..."
        nickname="Elise"
        additionalString="4 HOURS AGO"
      />
    </div>
  );
}

export default App;
