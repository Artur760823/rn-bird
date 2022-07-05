import Matter from "matter-js";
import Bird from "../components/Bird";
import Floor from "../components/Floor";
import Obsticle from "../components/Obsticle";
import { Dimensions } from "react-native";
import { getPipeSizePosPair } from "../utils/random";


const windowHeight = Dimensions.get('window').height;
const windowWidth = Dimensions.get('window').width;

export default restart =>{
  let engine = Matter.Engine.create({enableSleeping: false});

  let world = engine.world;
  world.y = 0.4;

  const pipeSizePosA = getPipeSizePosPair();
  const pipeSizePosB = getPipeSizePosPair(windowWidth * 0.9);

  return {
    physics: {engine, world},
    Bird: Bird(world, 'green', {x: 50, y: 300}, {height: 40, width: 40}),

    ObsticleTop1: Obsticle(world, 'ObsticleTop1', 'red', pipeSizePosA.pipeTop.pos, pipeSizePosA.pipeTop.size),
    ObsticleBottom1: Obsticle(world, 'ObsticleBottom1', 'blue', pipeSizePosA.pipeBottom.pos, pipeSizePosA.pipeBottom.size),

    ObsticleTop2: Obsticle(world, 'ObsticleTop2', 'red', pipeSizePosB.pipeTop.pos, pipeSizePosB.pipeTop.size),
    ObsticleBottom2: Obsticle(world, 'ObsticleBottom2', 'blue', pipeSizePosB.pipeBottom.pos, pipeSizePosB.pipeBottom.size),

    Floor: Floor(world, 'magenta', {x: windowWidth / 2, y: windowHeight}, {height: 50, width: windowWidth}),

  }
}