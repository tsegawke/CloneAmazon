import { FadeLoader, HashLoader } from "react-spinners";
function Loader() {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        height: "50vh",
      }}
    >
      <HashLoader color="#d7c736ff" />
    </div>
  );
}

export default Loader;
