import App from '../App'
import {BrowserRouter as Router,Route,Routes} from 'react-router-dom'
import Login from '../pages/Login'

const BaseRouter = ()=>{
  <Router>
    <Routes>
      <Route path='/' element={<App/>}></Route>
      <Route path='/login' element={<Login/>}></Route>
    </Routes>
  </Router>
}

export default BaseRouter;