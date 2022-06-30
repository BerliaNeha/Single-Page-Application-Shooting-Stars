import React, { useState, useEffect, createContext, useReducer } from "react";
import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom";
import Navigation from "./components/Navigation";
import Home from "./views/Home";
import Ozzy from "./views/Ozzy";
import Tony from "./views/Tony";
import Geezer from "./views/Geezer";
import Bill from "./views/Bill";
import NotFound from "./views/NotFound";
import Albums from "./views/Albums";
import CurrentAlbum from "./views/CurrentAlbum";
import "./App.css";


export const AlbumsContext = createContext();



const initialState = {
    albums:[],
    newAlbumTitle: "",
    newAlbumYear:""
}


const reducer = (state, action)=>{
    switch(action.type){
        case "initialize":
            return{...state, albums: action.payload}
        case "updateTitle":
                return{...state, newAlbumTitle:action.payload}
        case "updateYear":
                return{...state, newAlbumYear:action.payload}  
        case "addAlbum":
            return{
                albums: [...state.albums, action.payload],
                newAlbumTitle:"",
                newAlbumYear:""
     } 

        default:
            return state;
    }
}

const App = () => {

    const [state, dispatch] = useReducer(reducer, initialState);

    useEffect(() => {
    
       dispatch({type:"initialize", payload: pretendToUseFetch()})
    }, [])

    useEffect(()=>{
        console.log("!", state)
    })

    const pretendToUseFetch = () => {
        return [
            {
                id: "1",
                title: "Black Sabbath",
                year: "1970"
            },
            {
                id: "2",
                title: "Master of Reality",
                year: "1971"
            },
            {
                id: "3",
                title: "Sabotage",
                year: "1975"
            }
        ]
    }

    const updateNewAlbumTitle = newTitle => {
        dispatch({type:"updateTitle", payload:newTitle});
    }

    const updateNewAlbumYear = newYear => {
        dispatch({type:"updateYear", payload:newYear});
    }

   
    const updateAlbums = newAlbum => {
        dispatch({type:"addAlbum", payload: newAlbum})
       
    }

    return (
        <div>
            <Router>
                <header>
                    <Navigation />
                </header>

        
                <main>
                    <Switch>     
                      
                        <Route path="/" exact component={Home} />

                        <Route path="/vocals" exact component={Ozzy} />

                        <Route path="/guitar" exact component={Tony} />

                        <Route path="/bass" exact component={Geezer} />

                        <Route path="/drums" exact component={Bill} />
                        
                        
                        <Route path="/albums" exact>
                          
                            <AlbumsContext.Provider value={{
                                allAlbums: state.albums,
                                newTitle: state.newAlbumTitle,
                                newYear: state.newAlbumYear,
                                update: updateAlbums,
                                updateTitle: updateNewAlbumTitle,
                                updateYear: updateNewAlbumYear
                            }}>
                                <Albums 
                                    allAlbums={state.albums} 
                                />
                            </AlbumsContext.Provider>
                        </Route>

                        <Route path="/albums/new-album/:id" exact>
                            <CurrentAlbum allAlbums={state.albums} />
                        </Route>

                        <Route path="*" component={NotFound} /> 
                    </Switch>
                </main>
            </Router>
        </div>
    )
}

export default App;