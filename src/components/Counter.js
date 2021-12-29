import classes from './Counter.module.css';
import {useSelector,useDispatch} from "react-redux"

const Counter = () => {
  const dispatch=useDispatch();
  const counter = useSelector(state => state.counter);
  const incrementHandler = () => {
    dispatch({type:"increment"})
  }
   const decrementHandler = () => {
    dispatch({type:"decrement"})
  }

    const increaseBy5 = () => {
    dispatch({type:"increase",amount:5})
  }
  const toggleCounterHandler = () => {};
  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      <div className={classes.value}>{counter}</div>
      <div>
      <button style={{margin:"1rem"}} onClick={incrementHandler}>Increment</button>
        <button style={{ margin: "1rem" }} onClick={decrementHandler}>Decrement</button>
      <button style={{margin:"1rem"}} onClick={increaseBy5}>Increase By 5</button>
        
      </div> 
      <button onClick={toggleCounterHandler}>Toggle Counter</button>


    </main>
  );
};

export default Counter;
