import classes from './Counter.module.css';
import { useSelector, useDispatch } from "react-redux"
import { counterActions } from "../store/index";

const Counter = () => {
  const dispatch=useDispatch();
  const counter = useSelector(state => state.counter.counter);
  const show = useSelector(state => state.counter.showCounter);

  const incrementHandler = () => {
    dispatch(counterActions.increment());
  }
   const decrementHandler = () => {
     dispatch(counterActions.decrement());
  }

    const increaseBy5 = () => {
    dispatch(counterActions.increase(10))
  }
 
  const toggleCounterHandler = () => {
  dispatch(counterActions.showToggle())
  };

 // const incrementHandler = () => {
  //   dispatch({type:"increment"})
  // }
  //  const decrementHandler = () => {
  //   dispatch({type:"decrement"})
  // }

  //   const increaseBy5 = () => {
  //   dispatch({type:"increase",amount:5})
  // }

  // const toggleCounterHandler = () => {
  // dispatch({type:"toggle"})
  // };


  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
     {show &&  <div className={classes.value}>{counter}</div>}
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
