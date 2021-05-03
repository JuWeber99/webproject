import React, {useEffect} from 'react';
import MyCanvasRenderer from "./MyCanvasRenderer";

const bubbleColor = "rgba(56,56,96,0.7)"
const lineColor = "rgba(37,37,65, 1)"
const textColor = "#ece6e6"
const textBg = "rgba(37,37,65, 0.65)";

const mobileMinSize = 400

const CanvasDrawer = ({dimensions}) => {

    const draw = (context, bubbles) => {
        let canvas = context.canvas;
        let factor = canvas.width
        if(canvas.width < canvas.height) {
            factor = canvas.height
        }
        let width = (window.innerWidth * devicePixelRatio)//(window.innerWidth * 0.75) * devicePixelRatio
        let height = (window.innerHeight * devicePixelRatio) //(window.innerHeight * 0.3) * devicePixelRatio
        canvas.width = width  ;
        canvas.height = height ;

        for (let i = 0; i < bubbles.length; i++) {
            let bubble = bubbles[i];
            context.beginPath();
            context.arc(bubble.x, bubble.y, bubble.radius, 0, Math.PI * 2, false);
            context.stroke();
            context.fillStyle = bubbleColor
            context.fill();
        }
        context.beginPath();
        for (let i = 0; i < bubbles.length; i++) {
            let l1 = bubbles[i];
            context.moveTo(l1.x, l1.y)
            for (let j = 0; j < bubbles.length; j++) {
                let l2 = bubbles[j];
                if (distance(l1, l2) < ((factor * devicePixelRatio / 90 ) * 100) * 0.03) {
                    context.lineTo(l2.x, l2.y)
                }
            }
        }
        context.lineWidth = "0.4";
        context.strokeStyle = lineColor;
        context.stroke();

        let ractalFactor = canvas.height * 0.15;
        let adjustedFontsize=0;
        let adjustedFontString = ""
        let i = "Connect the dots for YOUR business".length * ractalFactor * 0.5;
        context.fillStyle = textBg;
        context.fillRect(canvas.width / 2 - i  / 2, canvas.height / 2 - (ractalFactor * 1.5) / 2 *devicePixelRatio , i , (ractalFactor * 1.5)*devicePixelRatio);
        if(dimensions.width < mobileMinSize) {
            adjustedFontsize = 35;
            adjustedFontString = `${adjustedFontsize}px Sans-Serif`;
        }
        else  {
            adjustedFontsize = 60;
        }
        adjustedFontString = `${adjustedFontsize}px Sans-Serif`;
        context.font = adjustedFontString;
        context.fillStyle = textColor;
        context.textBaseline = "middle";
        context.textAlign = "center"
        context.fillText("Connect the dots for your business . ", context.canvas.width / 2, context.canvas.height / 2);
    }

    function distance(point1, point2) {

        let dx = 0;
        let dy = 0;

        dx = point2.x - point1.x;
        dx = dx * dx;

        dy = point2.y - point1.y;
        dy = dy * dy;

        return Math.sqrt(dx + dy);
    }

    return (
        <div id={"box"}>
            <MyCanvasRenderer draw={draw}/>
        </div>
    );
};

export default CanvasDrawer;

