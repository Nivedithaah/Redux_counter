
import './App.css'
import Counter from './components/Counter'

function App() {


  return (
    <>
          <div className="container p-5 my-5 rounded border text-white text-center bg-black" >
        <div>
          <p className="text-center my-5">0</p>
        </div>
        <div className="d-flex align-item-center justify-content-center my-5 ">
          <button className="btn btn-warning me-3">Decrement</button>
          <button className="btn btn-danger me-3">Reset</button>
          <button className="btn btn-success me-3">Increment</button>
        </div>
        <div className="d-flex justify-content-center align-items-center my-5" >
          <input className="form-control me-2" type="text" placeholder="Enter the amount to be incremented" />
          <button className="btn btn-primary">Increment by amount</button>
        </div>
      </div>
    </>
  )
}

export default App
