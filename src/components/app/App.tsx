import { Link, Outlet } from 'react-router-dom';
import './App.scss';
import { decremented, incremented, store } from '../../store/store';

function App() {

  return (
    <div className='kostlr-wrapper'>
      <button onClick={store.dispatch(decremented)}>
        <Link to={'/login'}>Login</Link>
      </button>
      <button onClick={store.dispatch(incremented)}>
        <Link to={'/registration'}>Registration</Link>
      </button>
      <Outlet />
    </div>
  )
}

export default App
