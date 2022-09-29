import './App.css';
import Dashboard from './components/Dashboard/Dashboard';
import PropsState from './components/PropsState/PropsState';
import ReactWork from './components/ReactWork/ReactWork';
import UseEffectUses from './components/UseEffectUses/UseEffectUses';

function App() {
  return (
    <div className="App">
      <div className="">
        <Dashboard />
      </div>
      <div className="mt-20 w-10/12 mx-auto shadow-2xl bg-yellow-200 rounded-lg p-5">
        <ReactWork />
      </div>
      <div className="my-10 w-10/12 mx-auto shadow-2xl bg-yellow-200 rounded-lg p-5">
        <PropsState />
      </div>
      <div className="my-10 w-10/12 mx-auto shadow-2xl bg-yellow-200 rounded-lg p-5">
        <UseEffectUses />
      </div>
    </div>
  );
}

export default App;
