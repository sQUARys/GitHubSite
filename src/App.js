import React from 'react'
import {Navbar} from "./components/NavBar/NavBar";
import {Routes ,Route} from "react-router-dom";
import {Home} from "./pages/Home/Home";
import {About} from "./pages/About";
import {Alert} from "./components/Alert/Alert";
import {AlertState} from "./context/alert/alertState";
import {GithubState} from "./context/github/GithubState";
import {Profile} from "./pages/Profile/Profile";
import cls from "./App.css"

// 1.Alert Context + ActionType +
// 2. Card+
// 3. GithubContext +
// 4. Search+
// 5. About + Profile +
// 6. Repos +
// 7. CSS:
// 0. Nav +-
//  1. Home
//  2. About
//  3. Profile
//  4. Search
//  5. Card


function App() {
    return (
        <div className={cls.Main}>
            <GithubState>
                <AlertState>

                        <Navbar />
                        <div>
                            <Alert alert={{text: "Test alert"}}/>
                            <Routes>
                                <Route path="/" exact={true} element={<Home/>}/>
                                <Route path="/about" element={<About/>}/>
                                <Route path="/profile/:name" element={<Profile/>}/>
                            </Routes>
                        </div>
                </AlertState>
            </GithubState>
        </div>
    );
}

export default App;
