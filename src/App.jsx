import React from 'react'
import Mainroute from './routes/Mainroute'
import Navabar from './components/Navabar'
import Home from './pages/Home'

const App = () => {
  return (
    <div className='w-full min-h-screen bg-[#091513] font-[Helvetica_Now_Display] flex flex-col gap-[4rem] text-white'>
      <Navabar/>
      <Mainroute/>
    </div>
  )
}

export default App
