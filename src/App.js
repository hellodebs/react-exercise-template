import "./App.css";
import UserList from "./components/UserList";
import Header from "./components/Header";

function App() {
  return (
    <div className="App">
      <Header text="Hallo" />
      <UserList />
    </div>
  );
}

export default App;
