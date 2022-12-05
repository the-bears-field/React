import { Router } from './router/Router';
import './App.css';
import { UserProvider } from './providers/UserProvider';

export const App = () => {
  return (
    <UserProvider>
      <Router />
    </UserProvider>
  );
}
