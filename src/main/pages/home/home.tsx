import { IFPICamp, Mambee, Virtex } from "../../../components/Image/image";
import Profile from "../../../components/avatar/avatar";
import NavBar from "../../../components/head/head";

function Home() {
  return (
    <div>
      <div style={{ display: "flex" }}>
        <NavBar />
        <section
          style={{
            height: "10%",
            display: "flex",
            justifyContent: "center",
            borderRight: "2px solid",
            borderBottom: " 2px solid",
            borderRadius: "0px 35px 35px 0px",
            maxWidth: "100%",
            margin: "0 auto",
          }}
        >
          <Profile />
        </section>
      </div>
      <div
        style={{
          width: "55%",
          textAlign: "justify",
          margin: "0 auto",
          maxWidth: "100%",
          position: "relative",
          bottom: "100px",
        }}
      >
        Hello, my name is Paulo Victor Sales dos Santos, I'm 20 years old and
        I'm from Picos, Piauí. I am a student at the Federal Institute of Piauí
        (IFPI), in the course Systems Analysis and Development. I also work at
        Virtex Telecom, an internet provider company, as a developer of
        software, support and systems maintenance. Furthermore, I am a student
        at Mambee- software school and former Proagrupar Robótica scholarship
        holder.
        <br />
        <br />
        Here you can find some of my projects, both software as well as
        artificial intelligence. I hope you enjoy! If you want to enter contact
        me, you can find me in the footer of this web portfolio my
        communications and social media channels.
      </div>{" "}
      <div
        style={{
          width: "10%",
          display: "flex",
          margin: "0 auto",
          position: "relative",
          right: "10%",
          gap: "10px",
        }}
      >
        <IFPICamp />
        <Virtex />
        <Mambee />
      </div>
    </div>
  );
}

export default Home;
