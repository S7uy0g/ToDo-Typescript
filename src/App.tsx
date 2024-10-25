import './App.css'
import Types from './components/types'

function App() {

  return (
    <div className='text-white'> 
      <div className='fixed top-0 -z-10 h-full w-full'>
        <div className="absolute top-0 z-[-2] h-screen w-screen bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]">
        </div>
      </div>
     <div>Hello World</div>
     <Types/>
    </div>
  )
}

export default App
