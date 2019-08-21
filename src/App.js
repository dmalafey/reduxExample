import React, {useState} from 'react';
import {connect} from "react-redux";

import getTracks from './actions';

function App(props) {
    let [inputData, setInputData ]  = useState(0);
    let [searchData, setSearchtData ]  = useState(0);
    const handleChangeInput = (event) => {
        setInputData ({value: event.target.value});
    };
    const handleChangeSearch = (event) => {

        setSearchtData  ({value: event.target.value});

    };
    const handleAddTrack = () => {
        console.log((props.testStore));
        props.onAddTrack(inputData.value);

    };
    const handleFindTrack = () => {
        console.log((props.testStore));
        props.onFindTrack(searchData.value);
    };

      return <div className="App">
        <div>
            <input type={'text'} onChange={handleChangeInput}/>
            <button onClick={handleAddTrack}>push</button>
        </div>
        <div>
            <input type={'text'} onChange={handleChangeSearch}/>
            <button onClick={handleFindTrack}>find</button>
        </div>
          <div>
              <button onClick={props.onGetTracks}>Get tracks</button>
          </div>
        <div>
            {
                props.tracks.map((item, index) => (<li key={index}>{item.name}</li>))
            }
        </div>

    </div>;
}

export default connect(
    state=>({
        testStore: state,
        tracks: state.tracks.filter(track => track.name.includes(state.filterTracks))

    }),
    dispatch =>({
        onAddTrack: name => {
            const playload = {
                id: Date.now().toString(),
                name,
            };
            dispatch({type: 'ADD_TRACK', playload});
        },
        onFindTrack: name => {
            dispatch({type: 'FIND_TRACK',payload: name})
        },
        onGetTracks: () => {
           dispatch(getTracks());
        }
    })
)(App);