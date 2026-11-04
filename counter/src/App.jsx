
import './App.css'
import Counter from './components/Counter'
import {useDispatch, useSelector} from 'react-redux'
import { decrement, increment, incrementByAmount, reset } from './redux/slices/counterSlice'
import { useRef } from 'react'

function App() {

  const {count} = useSelector(state=>state.counterReducer)
  const dispatch =useDispatch()
  const inputRef = useRef()

  const handleIncrement =() =>{
    const amount =inputRef.current.value
    inputRef.current.value = ""

    if(amount){
      dispatch(incrementByAmount(+amount))
    }else{
      alert("Please enter a valid input!")
    }
  }

  return (
    <>
      <div class="container p-5 my-5 rounded border text-white" >
        <div>
      <p style={{fontSize:"80px", textAlign:'center'}}>{count}</p>
        </div>
        <div class="d-flex align-item-center justify-content-center my-5 ">
          <button onClick={()=>dispatch(decrement())} class="btn btn-warning mx-3">Decrement</button>
          <button onClick={()=>dispatch(reset())} class="btn btn-danger mx-3">Reset</button>
          <button onClick={()=>dispatch(increment())} class="btn btn-success mx-3">Increment</button>
        </div>
        <div class="d-flex justify-content-center align items-center my-5" >
          <input ref={inputRef} className='mx-5 form-control' type="text" placeholder="Enter the amount to be incremented" />
          <button onClick={handleIncrement} className="btn btn-primary rounded border">Increment by amount</button>
        </div>

      </div>
    </>
  )
}

export default App
