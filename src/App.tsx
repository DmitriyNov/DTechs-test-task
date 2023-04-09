import './App.css';
import UserForm from './components/Form';
import Card from './components/Card';

interface WorkBorders {
  id: string;
  name: string;
}

export interface User {
  userName: string;
  password: string;
  firstName: string;
  latsName: string;
  roles: string[];
  workBorders: WorkBorders[];
}

export const userList: User[] = [];

export default function App() {
  return (
    // хэддер не стал отдельным компонентом делать, на ReactBootstrap тоже кстати не нашёл ничего с этим связанного
    <div className="App">
      <header className="App-header">
        Test task for Dtechs
        <UserForm />
      </header>
      <main className="App-content">
      </main>
    </div>
  );
}
