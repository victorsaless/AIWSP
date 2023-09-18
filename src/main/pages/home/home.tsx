import Profile from "../../../components/avatar/avatar";
import NavBar from "../../../components/head/head";

function Home() {
  return (
    <>
      <div style={{ display: "flex" }}>
        <div style={{}}>
          <NavBar />
        </div>
        <div
          style={{
            width: "100%",
            height: "20%",
            display: "flex",
            justifyContent: "end",
            borderRight: "2px solid",
            borderBottom: " 2px solid",
            borderRadius: "0px 35px 35px 0px",
          }}
        >
          <Profile />
        </div>
      </div>
    </>
  );
}

export default Home;
