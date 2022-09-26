// import logo from './logo.svg';
// import './App.css';
import Customer from './components/Customers'
import SignUp from "./components/Signup"
import {Route} from 'react-router-dom'

function App() {
  return (<>
  <Route path="/Customer" >
  
   <Customer/>
   </Route>
   <Route path="/CustomerSignup" >
   <SignUp/>
   </Route>
   </>
  );
}

export default App;
