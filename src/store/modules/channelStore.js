import {createSlice} from "@reduxjs/toolkit";
import axios from "axios";

const channelStore = createSlice({
    name: "channelList",
    initialState:{
        channelList: [],
    },
    reducers:{
      setChannel(state, action){
          state.channelList = action.payload;
      }
    }
});

const {setChannel} = channelStore.actions;

const fetchChannelList = ()=>{
    return(
        async (dispatch)=>{
            const res = await axios({
                method: "GET",
                url: "https://dogapi.dog/api/v2/facts",
            });
            // console.log(res.data.data[0].attributes.body);
            const arr= [];
            arr.push(res.data.data.map(item => item.attributes.body));
            dispatch(setChannel(arr));
        }
    );
}

export {fetchChannelList}

const reducer = channelStore.reducer;

export default reducer;