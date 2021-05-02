import React, {useRef, useEffect, useState, useLayoutEffect} from 'react'

const MyCanvasRenderer = props => {

    const [initial, setInitial] = useState(true);
    const [bubbles, setBubbles] = useState([]);
    const canvasRef = useRef(null)

    function updateBubblePositions  (context, bubbles) {
        let bubbleCord = [...bubbles]
        for (let i = 0; i < bubbleCord.length; i++) {
            let bubble = bubbleCord[i];
            if (bubble.x < 0 || bubble.x > context.canvas.width) {
                bubble.dx = -bubble.dx;
            }
            if (bubble.y < 0 || bubble.y > context.canvas.height) {
                bubble.dy = -bubble.dy;
            }
            bubble.x += bubble.dx;
            bubble.y += bubble.dy;
        }
        setBubbles(bubbleCord)
    }

    function fixDpi(context, canvas)
    {
        // internally the calculations must be scaled with dpi
        context.scale(devicePixelRatio, devicePixelRatio)
        // but the "real" print should be forced into our wanted size
        canvas.style.width = (window.innerWidth * 0.75) + "px"
        canvas.style.height = (window.innerHeight * 0.3) + 'px';
    }

    function generateBubbles(canvas){
        let ballCount = canvas.width * 1.3 / 10;
        // before dom uses effect => generate bubbles
        for (let i = 0; i < ballCount; i++) {
            bubbles.push({
                x: Math.random() * canvas.width * devicePixelRatio,
                y: Math.random() * canvas.height * devicePixelRatio,
                dx: (Math.random() - 0.5) * 2,
                dy: (Math.random() - 0.5) * 2,
                radius: Math.floor(Math.random() * 4)
            });
        }
    }

    useLayoutEffect(() => {
        if(!initial) {
            setBubbles({})
        }
        const canvas = canvasRef.current
        const context = canvas.getContext('2d')
        fixDpi(context,canvas)

        generateBubbles(canvas)

    }, [])

    useEffect(() => {
        const canvas = canvasRef.current
        const context = canvas.getContext('2d')
        let animationFrameId;

        // render the animated canvas
        const getUpdatedAnimation = () => {
            updateBubblePositions(context, bubbles)
        }
        // draw the changes
        props.draw(context, bubbles)
        animationFrameId = window.requestAnimationFrame(getUpdatedAnimation)

        return () => {
           // window.cancelAnimationFrame(animationFrameId)
            //context.clearRect(0, 0, canvas.width, canvas.height);
        }

        setTimeout(function () { //throttle requestAnimationFrame to 20fps
            getUpdatedAnimation()
        }, 15)
    }, [bubbles])

    return <canvas height={window.innerHeight * 0.3} width={window.innerWidth * 0.75} ref={canvasRef} {...props}/>
}

export default MyCanvasRenderer;