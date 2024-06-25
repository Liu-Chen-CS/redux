import logo from './logo.svg';
import './App.css';
import {useDispatch, useSelector} from "react-redux";
import {addToNum, decrement, increment} from "./store/modules/counterStore";
import {useEffect} from "react";
import {fetchChannelList} from "./store/modules/channelStore";

function App() {
  const {count} = useSelector(state => state.counter);
  const {channelList} = useSelector(state=> state.channel);
  const dispatch = useDispatch();
  useEffect(()=>{
      dispatch(fetchChannelList())
  },[dispatch]);
  return (
      <div className="App">
          <button onClick={() => {
              dispatch(increment())
          }}>+
          </button>
          <button onClick={() => {
              dispatch(decrement())
          }}>-
          </button>
          <button onClick={() => {
              dispatch(addToNum(10))
          }}>
              +10
          </button>
          <button onClick={()=>{dispatch(addToNum(20))}}>
              +20
          </button>
          {count}
          {channelList}
      </div>
  );
}

export default App;
