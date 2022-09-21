import Chat from './components/Chat'
import Join from './components/Join'
import {BrowserRouter as Router , Route , Routes} from 'react-router-dom'

function App() {
  return (
   <div className='container bg-white flex flex-col items-center justify-center  w-screen h-screen  text-gray-900'>
   <Router>
    <Routes>
    <Route exact path="/" element={<Join/>}/>
    <Route path='/chat' element={<Chat/>}/>
    </Routes>
   </Router>
   </div>
  );
}

export default App;
