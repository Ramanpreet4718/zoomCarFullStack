import loading from "./Loading_Ani.svg";
export default function Loading() {
  return (
    <div style={{ display: "flex", justifyContent: "center", height: "100vh" }}>
      <img
        style={{ width: "50%", height: "400px" }}
        src={loading}
        alt="Loading"
      />
    </div>
  );
}
