import React from 'react'
import Mainroute from './routes/Mainroute'
import Navabar from './components/Navabar'

const App = () => {
  return (
    <div className='w-full h-full bg-[#DDEB9D] px-[5rem] py-[2rem] font-[Helvetica_Now_Display] flex flex-col gap-[5rem]'>
      <Navabar/>
      <Mainroute/>
    </div>
  )
}

export default App
