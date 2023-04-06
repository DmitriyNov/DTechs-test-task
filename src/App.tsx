import './App.css';
import Userform from './components/Form';
import AppModal from './components/Modal';
import Card from './components/Card'

function App() {
  return (
    // хэддер не стал отдельным компонентом делать, на ReactBootstrap тоже кстати не нашёл ничего с этим связанного
    <div className="App">
      <header className="App-header">
        Test task for Dtechs
        <AppModal />
      </header>
      <main className="App-content">
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </main>
    </div>
  );
}

export default App;
