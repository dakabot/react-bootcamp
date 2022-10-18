import logo from './logo.svg';
import './App.css';
import ContactListComponent from './components/container/contact_list';
// import Greetingf from './components/pure/example_Greetingf'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        {/* <Greetingf></Greetingf> */}
        <ContactListComponent></ContactListComponent>
      </header>
    </div>
  );
}

export default App;
