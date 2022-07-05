import Matter from "matter-js";

const Physics = (entities, {touches, time, dispatch}) =>{
  let engine = entities.physics.engine;

  touches.filter(t => t.type === 'press')
  .forEach(t => {
    Matter.Body.setVelocity(entities.Bird.body, {
      x: 0, y: -10
    })
  });

  Matter.Engine.update(engine, time.delta);

  for(let i = 1; i <= 2; i++){

    if(entities[`ObsticleTop${i}`].body.bounds.max.x <= 0){
      const pipeSizePos = 
    }
    Matter.Body.translate(entities[`ObsticleTop${i}`].body, {x: -2, y: 0});
    Matter.Body.translate(entities[`ObsticleBottom${i}`].body, {x: -3, y: 0})
  }
 

  return entities;
}

export default Physics;