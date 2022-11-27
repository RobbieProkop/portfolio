import { useEffect, useRef } from "react";

const Canvas = () => {
  const canvasRef = useRef(null);

  // const draw = (ctx) => {
  //   ctx.fillStyle = "#fff";
  //   ctx.beginPath();
  //   ctx.arc(50, 100, 20, 0, 2 * Math.PI);
  //   ctx.fill();
  // };

  class Symbol {
    constructor(x, y, fontSize, canvasHeight) {
      this.characters =
        "ァアィイゥウェエォオカガキギクグケゲコゴサザシジスズセゼソゾタダチヂッツヅテデトドナニヌネノハバパヒビピフブプヘベペホボポマミムメモャヤュユョヨラリルレロヮワヰヱヲンヴヵヶヽヾАБВГДЕЁЖЗИЙКЛМНОПРСТУФХЦЧШЩЪЫЬЭЮЯ0123456789";
      this.x = x;
      this.y = y;
      this.fontSize = fontSize;
      // currently active symbol
      this.text = "";
      this.canvasHeight = canvasHeight;
    }
    // randomize character and draw at a specific position
    draw(context) {
      this.text = this.characters.charAt(
        Math.floor(Math.random() * this.characters.length)
      );
      context.fillStyle = "#0aff0a";
      context.fillText(
        this.text,
        this.x * this.fontSize,
        this.y * this.fontSize
      );
      if (this.y * this.fontSize > this.canvasHeight) {
        this.y = 0;
      } else {
        this.y += 1;
      }
    }
  }

  class Effect {
    constructor(canvasWidth, canvasHeight) {
      this.canvasWidth = canvasWidth;
      this.canvasHeight = canvasHeight;
      this.fontSize = 25;
      this.columns = this.canvasWidth / this.fontSize;
      this.symbols = [];
    }

    // use to fill the symbols array with symbols i want to rain down
    //start with a # to make it private
    #initialize() {
      for (let i = 0; i < this.columns.length; i++) {
        this.symbols[i] = new Symbol();
      }
    }
  }

  const animate = () => {};

  // make the canvas appear on initial load
  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    Symbol.draw(ctx);
  }, [Symbol.draw]);

  return <canvas id="canvas1" className="canvas" ref={canvasRef} />;
};
export default Canvas;
