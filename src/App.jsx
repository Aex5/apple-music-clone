import Explore from "./components/Explore";
import Hero from "./components/Hero";
import LatestSongs from "./components/LatestSongs";
import Footer from "./components/layouts/Footer";
import Header from "./components/layouts/Header";
import Side from "./components/layouts/Side";
import NewRelease from "./components/NewRelease";

export default function App() {
  return (
    <div className="flex h-screen">
      <Side />
      <div className="flex-1 flex flex-col">
        <main className="overflow-y-auto">
          <Header />
          <Hero />
          <LatestSongs />
          <NewRelease />
          <Explore />
          <Footer/>
        </main>
      </div>
    </div>
  );
}
