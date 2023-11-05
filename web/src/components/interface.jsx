function Interface(props) {
  // eslint-disable-next-line react/prop-types
  const { shape, setShape } = props;
  return (
    <div
      style={{
        backgroundColor: "#D9D9D9",
        width: "800px",
        height: "115px",
        position: "absolute",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-around",
      }}
    >
      <div
        onMouseDown={() => setShape("circle")}
        style={{
          backgroundColor: (shape == "circle" && "#C6C5C5") || "#D9D9D9",
          padding: "10px",
          display: "flex",
          gap: "20px",
        }}
      >
        <img src={"/Circle.svg"} />
        <p style={{ fontFamily: "sans-serif", fontSize: "20px" }}>x 1</p>
      </div>
      <div
        onMouseDown={() => setShape("square")}
        style={{ display: "flex", gap: "20px" }}
      >
        <img src={"/Square.svg"} />
        <p style={{ fontFamily: "sans-serif", fontSize: "20px" }}>x 1</p>
      </div>
      <div
        onMouseDown={() => setShape("triangle")}
        style={{ display: "flex", gap: "20px" }}
      >
        <img src={"/Triange.svg"} />
        <p style={{ fontFamily: "sans-serif", fontSize: "20px" }}>x 1</p>
      </div>
      <div
        onMouseDown={() => setShape("bridge")}
        style={{ display: "flex", gap: "20px" }}
      >
        <img src={"/Bridge.svg"} />
        <p style={{ fontFamily: "sans-serif", fontSize: "20px" }}>x 1</p>
      </div>
      <div
        style={{
          position: "absolute",
          right: "40px",
          top: "140px",
          transform: "scaleX(-1)",
        }}
      >
        <img src={"/restart.svg"} />
      </div>
    </div>
  );
}
export default Interface;
