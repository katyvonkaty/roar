import React, { Component } from "react";
import { render } from "react-dom";
import ParticlesBg from "particles-bg";
import Copy from "./Copy";


const Frames = () => {

  let config = {
      num: [1, 7],
      rps: 0.1,
      radius: [5, 40],
      life: [1.5, 3],
      v: [2, 3],
      tha: [-40, 40],
      // body: "./img/icon.png", // Whether to render pictures
      // rotate: [0, 20],
      alpha: [0.6, 0],
      scale: [1, 0.1],
      backgroundColor:"black",
      position: "center", // all or center or {x:1,y:1,width:100,height:100}
      color: ["9EE493", "#42273B"],
      cross: "dead", // cross or bround
      random: 15,  // or null,
      g: 5,    // gravity
      // f: [2, -1], // force
      onParticleUpdate: (ctx, particle) => {
          ctx.beginPath();
          ctx.rect(particle.p.x, particle.p.y, particle.radius * 2, particle.radius * 2);
          ctx.fillStyle = particle.color;
          ctx.fill();
          ctx.closePath();
      }
    }

    return (
      <div>
      <Copy
        smallHeader= "hi"
        headLine= "ok trying this"
        body =" are you working?"
        />
        <ParticlesBg config={config} backgroundColor="black" type="circle" num={15} bg={true} className="testing"/>
      </div>
    );

}

export default Frames
