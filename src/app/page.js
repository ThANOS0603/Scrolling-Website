
import Navbar from "./component/NavBar";
import Header from "./component/Header";
import AboutSection from "./component/AboutSection";


export default function Home() {
  return (
    <main className="body flex min-h-screen flex-col ">
      <Header />
      <AboutSection />
      
    </main>
  );
}
