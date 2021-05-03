import React, {useEffect} from 'react';
import MyCanvasRenderer from "./components/MyCanvasRenderer";
import CanvasDrawer from "./components/CanvasDrawer";
import Navbar from "./components/Navbar/Navbar";

const bubbleColor = "rgba(56,56,96,0.7)"
const lineColor = "#bea071"
const backgroundColor = "#ece6e6"


const App = () => {

    const [dimensions, setDimensions] = React.useState({
        height: window.innerHeight,
        width: window.innerWidth
    });

    useEffect(() => {
        console.log("resize")
        const debouncedHandleResize = debounce(function handleResize() {
            setDimensions({
                height: window.innerHeight,
                width: window.innerWidth
            });
        }, 10);

        window.addEventListener("resize", debouncedHandleResize);

        return _ => {
            window.removeEventListener("resize", debouncedHandleResize);
        };
    }, [window.innerHeight, window.innerWidth]);

    function debounce(fn, ms) {
        let timer;
        return _ => {
            clearTimeout(timer);
            timer = setTimeout(_ => {
                timer = null;
                fn.apply(this, arguments);
            }, ms);
        };
    }




    return (
        <div id={"App"}>
            <Navbar/>
            <CanvasDrawer dimensions={dimensions}/>
        </div>
    );
};

export default App;

