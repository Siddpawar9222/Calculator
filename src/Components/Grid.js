import "./Grid.css";

import { useState } from "react";

function Grid() {
  const [result, setResult] = useState("");

  const handleClick = (event) => {
      setResult(result.concat(event.target.name));
  };
  const clear = () => {
    setResult("");
  };
  const deletePrev = () => {
    setResult(result.slice(0, -1));
  };
  const evaluate = () => {
    try {
      setResult(eval(result).toString());
    } catch (error) {
      setResult("Error");
    }
   
  };
  const enterButton =(event)=>{
    if(event.key==="Enter"){
       evaluate();
       event.preventDefault();  //Prevent Rendering page beacuse of usestate
    }
  } 
  return (
    <div className="cal">
      <form action="" method="get">
      <input type="text" value={result} placeholder="0" onChange={(event)=>setResult(event.target.value)} onKeyDown={(event)=>enterButton(event)} />
      </form>
      <div className="num">
        <button onClick={() => clear()} className="comp button ac">
          AC
        </button>
        <button onClick={() => deletePrev()} className="comp button del">
          DEL
        </button>
        <button
          name="%"
          onClick={(event) => handleClick(event)}
          className="comp button"
        >
          &#37;
        </button>
        <button
          name="/"
          onClick={(event) => handleClick(event)}
          className="comp button"
        >
          &#247;
        </button>
        <button
          name="7"
          onClick={(event) => handleClick(event)}
          className="button"
        >
          7
        </button>
        <button
          name="8"
          onClick={(event) => handleClick(event)}
          className="button"
        >
          8
        </button>
        <button
          name="9"
          onClick={(event) => handleClick(event)}
          className="button"
        >
          9
        </button>
        <button
          name="*"
          onClick={(event) => handleClick(event)}
          className="comp button"
        >
         &#215;
        </button>
        <button
          name="4"
          onClick={(event) => handleClick(event)}
          className="button"
        >
          4
        </button>
        <button
          name="5"
          onClick={(event) => handleClick(event)}
          className="button"
        >
          5
        </button>
        <button
          name="6"
          onClick={(event) => handleClick(event)}
          className="button"
        >
          6
        </button>
        <button
          name="-"
          onClick={(event) => handleClick(event)}
          className="comp button"
        >
          &#8722;
        </button>
        <button
          name="1"
          onClick={(event) => handleClick(event)}
          className="button"
        >
          1
        </button>
        <button
          name="2"
          onClick={(event) => handleClick(event)}
          className="button"
        >
          2
        </button>

        <button
          name="3"
          onClick={(event) => handleClick(event)}
          className="button"
        >
          3
        </button>
        <button
          name="+"
          onClick={(event) => handleClick(event)}
          className="comp button"
        >
          &#43;
        </button>
        <button name="00" onClick={(event) => handleClick(event)} className="button">
          00
        </button>
        <button
          name="0"
          onClick={(event) => handleClick(event)}
          className="button"
        >
          0
        </button>
        <button
          name="."
          onClick={(event) => handleClick(event)}
          className="button"
        >
          &#8901;
        </button>
        <button onClick={() => evaluate()} className="comp">
          =
        </button>
      </div>
    </div>
  );
}

export default Grid;
