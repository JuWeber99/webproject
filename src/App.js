import React from 'react';
import MyCanvasRenderer from "./components/MyCanvasRenderer";
import CanvasDrawer from "./components/CanvasDrawer";
import Navbar from "./components/Navbar/Navbar";

const bubbleColor = "rgba(56,56,96,0.7)"
const lineColor = "#bea071"
const backgroundColor = "#ece6e6"


const App = () => {

    return (
        <div id={"App"}>
            <Navbar/>
            <CanvasDrawer/>
        </div>
    );
};

export default App;

