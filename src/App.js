import './App.css';
import UserCard from './features/user/UserCard';
import { Provider } from 'react-redux';
import store from './app/store';

function App() {
  return (
    <div className="App">
       <Provider store={store}>
          <UserCard />
       </Provider>
    </div>
  );
}

export default App;
