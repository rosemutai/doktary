
import HomePage from './routes/HomePage'
import './App.css';


function App() {
  return (
    <div className="App w-full  pb-20 min-h-screen bg-slate-200 overflow-x-hidden relative">
      <br/>
      <br/>
       <div className='rect bg-indigo-700 w-32 md:w-64 h-96 absolute 
        top-2/4 mt-36 right-0 skey-y-45 z-10 mix-blend-overlay'>

      </div>
      <HomePage />
       
       
      <div className='rect bg-indigo-700 w-64 h-64 absolute 
        top-0 left-0 skew-x-12 skey-y-12 -ml-8 mix-blend-overlay'>

      </div>

       <div className='circle rounded-full bg-indigo-700 w-64 h-64 absolute 
        top-0 right-0 skey-y-45 z-10 mix-blend-overlay'></div>

        <div className='circle rounded-full bg-indigo-700 w-64 h-40 absolute 
        bottom-0 left-1/4 ml-32 skey-y-45 z-10 mix-blend-overlay'></div>
        

        <div className='circle rounded-full bg-indigo-700 w-28 h-28 md:w-64 md:h-64 absolute 
        bottom-2/4 left-0 -ml-8 skey-y-45 z-10 mix-blend-overlay'></div>

      
      
      
    </div>
  );
}

export default App;
