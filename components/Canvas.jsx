import { useEffect, useRef, useState } from "react";

const Canvas = () => {
  const canvasRef = useRef(null);
  const [width, setWidth] = useState(0);
  const [height, setHeight] = useState(0);

  const handleWindowWidth = () => {
    setWidth(window.innerWidth);
  };
  const handleWindowHeight = () => {
    setHeight(window.innerHeight);
  };

  // const draw = (ctx) => {
  //   ctx.fillStyle = "#fff";
  //   ctx.beginPath();
  //   ctx.arc(50, 100, 20, 0, 2 * Math.PI);
  //   ctx.fill();
  // };

  // const characters =
  //   "ァアィイゥウェエォオカガキギクグケゲコゴサザシジスズセゼソゾタダチヂッツヅテデトドナニヌネノハバパヒビピフブプヘベペホボポマミムメモャヤュユョヨラリルレロヮワヰヱヲンヴヵヶヽヾАБВГДЕЁЖЗИЙКЛМНОПРСТУФХЦЧШЩЪЫЬЭЮЯ0123456789!@#$%^&*()_+=-?><{}[]/|";

  // let currentText = "";
  // const fontSize = 25;

  // const draw = (x, y, fontSize, canvasHeight, context) => {
  //   currentText = characters.charAt(
  //     Math.floor(Math.random() * characters.length)
  //   );
  //   context.fillStyle = "#0aff0a";
  //   context.fillText(currentText, x * fontSize, y * fontSize);
  //   y * fontSize > canvasHeight ? (y = 0) : (y += 1);
  // };

  // const symbolsArr = characters.split("");
  // const effect = (canvasWidth, canvasHeight) => {
  //   const columns = canvasWidth / fontSize;
  //   console.log("symbolsArr :>> ", symbolsArr);
  // };

  // const animate = (ctx, canvasHeight) => {
  //   symbolsArr.forEach((symbol, index) =>
  //     draw(index, 0, canvasHeight, fontSize, ctx)
  //   );
  //   requestAnimationFrame(animate);
  // };

  const characters =
    "ァアィイゥウェエォオカガキギクグケゲコゴサザシジスズセゼソゾタダチヂッツヅテデトドナニヌネノハバパヒビピフブプヘベペホボポマミムメモャヤュユョヨラリルレロヮワヰヱヲンヴヵヶヽヾАБВГДЕЁЖЗИЙКЛМНОПРСТУФХЦЧШЩЪЫЬЭЮЯ0123456789";

  class Symbol {
    constructor(x, y, fontSize, canvasHeight) {
      // this.characters =
      //   "ァアィイゥウェエォオカガキギクグケゲコゴサザシジスズセゼソゾタダチヂッツヅテデトドナニヌネノハバパヒビピフブプヘベペホボポマミムメモャヤュユョヨラリルレロヮワヰヱヲンヴヵヶヽヾАБВГДЕЁЖЗИЙКЛМНОПРСТУФХЦЧШЩЪЫЬЭЮЯ0123456789";
      this.x = x;
      this.y = y;
      this.fontSize = fontSize;
      // currently active symbol
      this.text = "";
      this.canvasHeight = canvasHeight;
    }
    // randomize character and draw at a specific position
    draw(context) {
      this.text = characters.charAt(
        Math.floor(Math.random() * characters.length)
      );
      context.fillStyle = "#0aff0a";
      context.fillText(
        this.text,
        this.x * this.fontSize,
        this.y * this.fontSize
      );
      if (this.y * this.fontSize > this.canvasHeight && Math.random() > 0.98) {
        this.y = 0;
      } else {
        this.y += 1;
      }
    }
  }

  const fontSize = 25;
  const symbolsArr = characters.split();
  class Effect {
    constructor(canvasWidth, canvasHeight) {
      this.canvasWidth = canvasWidth;
      this.canvasHeight = canvasHeight;
      this.columns = this.canvasWidth / fontSize;
      this.symbols = [];
      this.#initialize();
    }

    // use to fill the symbols array with symbols i want to rain down
    //start with a # to make it private
    #initialize() {
      for (let i = 0; i < this.columns; i++) {
        this.symbols[i] = new Symbol(
          i,
          height * Math.random(),
          fontSize,
          this.canvasHeight
        );
      }
    }
  }

  const effect = new Effect(width, height);
  let lastTime = useRef(0);
  const fps = 30;
  const nextFrame = 1000 / fps;
  console.log("nextFrame :>> ", nextFrame);

  // make the canvas appear on initial load
  useEffect(() => {
    let timer = 0;
    handleWindowWidth();
    handleWindowHeight();
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    ctx.font = fontSize;
    canvas.width = width;
    canvas.height = height;

    const animate = (timeStamp) => {
      const deltaTime = timeStamp - lastTime.current;

      lastTime.current = timeStamp;
      if (timer > nextFrame) {
        ctx.fillStyle = "rgba(0, 0, 0, 0.001)";
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        ctx.font = fontSize + "px monospace";
        effect.symbols.forEach((symbol) => symbol.draw(ctx));
        timer = 0;
      } else {
        timer += deltaTime;
      }
      requestAnimationFrame(animate);
    };
    animate(0);
  });

  return <canvas id="canvas1" className="canvas" ref={canvasRef} />;
};
export default Canvas;
