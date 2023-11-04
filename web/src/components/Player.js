import { Events, World, Body, Bodies } from "matter-js";

function Player(canMove, engine, runner){
    
    let time = 0;
    
    const player = Bodies.rectangle(160, 300, 45, 45, 
        {mass: 10, friction: 0.1, render: {fillStyle: "#ff6262"}})

    const keys = {};
    
    document.addEventListener('keydown', (event) => {
        keys[event.key] = true;
        const force = 0.05;

        if(event.key == 'w' || event.key == 'ArrowUp'){
            Body.applyForce(player, player.position, { x: 0, y: -force*2})
        }
            
    });
    
    document.addEventListener('keyup', (event) => {
        keys[event.key] = false;
        
    });
    

    Events.on(runner, "beforeUpdate", () => {
        const force = 0.0025;
        

        if (keys['a'] || keys['ArrowLeft']){
            Body.applyForce(player, player.position, { x: -force, y: 0})
        }

        if (keys['d'] || keys['ArrowRight']){
            Body.applyForce(player, player.position, { x: force, y: 0})
        }
    })


    

    World.add(engine.current.world, [player]);
}


export default Player;