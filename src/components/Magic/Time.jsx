import { useEffect, useState } from "react";

function App() {
  const [count1, setCount1] = useState(59);
  const [count2, setCount2] = useState(59);
  const [count3, setCount3] = useState(59);
  useEffect(() => {
    //Implementing the setInterval method
    //
    const interval = setInterval(() => {
      if (count1 > 0 || count2 > 0 || count3 > 0) {
        setCount3(count3 - 1);
      }

      if (count3 === 0) {
        if (count2 !== 0) {
          setCount2(count2 - 1);
          setCount3(59);
        }
      }
      if (count2 === 0) {
        if (count1 !== 0) {
          setCount1(count1 - 1);
          setCount2(59);
          setCount3(59);
        }
      }
    }, 1000);

    //Clearing the interval
    return () => clearInterval(interval);
  }, [count3]);

  return (
    <div
      className="time"
      style={{
        borderRadius: "20px",
        background: "rgba(59, 59, 59, 0.50)",
        backdropFilter: "blur(5px)",
        width: "295px",
        padding: "30px",
      }}
    >
      <p
        style={{
          fontFamily: "Space Mono",
          fontSize: "12px",
          color: "white",
          marginBottom: "10px",
        }}
      >
        Auction ends in:
      </p>
      <div
        style={{ display: "flex", justifyContent: "space-between" }}
        className="time-box"
      >
        <h1
          className="time"
          style={{ fontSize: "38px", fontWeight: "700", color: "white" }}
        >
          {count1}
        </h1>
        <h1
          className="time"
          style={{ fontSize: "38px", fontWeight: "700", color: "white" }}
        >
          :
        </h1>
        <h1
          className="time"
          style={{ fontSize: "38px", fontWeight: "700", color: "white" }}
        >
          {count2}
        </h1>
        <h1
          className="time"
          style={{ fontSize: "38px", fontWeight: "700", color: "white" }}
        >
          :
        </h1>
        <h1
          className="time"
          style={{ fontSize: "38px", fontWeight: "700", color: "white" }}
        >
          {count3}
        </h1>
      </div>
    </div>
  );
}

export default App;
