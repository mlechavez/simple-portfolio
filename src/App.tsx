import "./App.scss";
import Experience from "./components/experience/Experience";
import Intro from "./components/intro/Intro";
import Gallery from "./components/gallery/Gallery";
import Portfolio from "./components/portfolio/Portfolio";
import Topbar from "./components/topbar/Topbar";
import Usedtodo from "./components/usedtodo/Usedtodo";
import Whoami from "./components/whoami/Whoami";

function App() {
  return (
    <div className="app">
      <Topbar />
      <Intro />
      <Whoami />
      <Experience />
      <Gallery />
      <Usedtodo
        element="music"
        title="Music"
        subtitle="Learn to fly cover - Foo Fighters"
        desc={`Quote for the day: "Where words fail, music speaks" - Hans Christian Anderson`}
        videoSrc="https://titerniumstorage.blob.core.windows.net/my-assets/learn-to-fly.mp4"
        navigateTo="dance" />
      <Usedtodo
        element="dance"
        title="Dance"
        subtitle="New years party - Doha, Qatar"
        desc={`Quote for the day: "Those who can’t dance say the music is no good - Jamaican Proverb`}
        videoSrc="https://titerniumstorage.blob.core.windows.net/my-assets/dance.mp4" navigateTo="portfolio" />
      <Portfolio />
    </div>
  );
}

export default App;
