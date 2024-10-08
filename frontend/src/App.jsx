import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Signin from './Components/Signin'
import Signup from './Components/Signup'
import Dashboard from './Components/Dashboard'
import SendMoney from './Components/SendMoney'


function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Signup/>}/>
          <Route path='/signup' element={<Signup/>}/>
          <Route path='/signin' element={<Signin/>}/>
          <Route path='/dashboard' element={<Dashboard/>}/>
          <Route path='/send' element={<SendMoney/>}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
