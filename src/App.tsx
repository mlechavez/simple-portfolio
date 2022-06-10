import "./App.scss";

import Hero from "./components/hero";
import About from "./components/about";
import Gallery from "./components/gallery";
import Portfolio from "./components/portfolio";
import Topbar from "./components/topbar";
import Usedtodo from "./components/usedtodo";
import ThankYou from "./components/thankYou";

function App() {
  return (
    <div className="app">
      <Topbar />
      <Hero />
      <About />
      <Gallery />
      <Usedtodo
        element="music"
        title="Music"
        subtitle="Learn to fly cover - Foo Fighters"
        desc={`Where words fail, music speaks - Hans Christian Anderson`}
        videoSrc="https://titerniumstorage.blob.core.windows.net/my-assets/learn-to-fly.mp4"
        navigateTo="dance"
        buttonText="The Groove"
      />
      <Usedtodo
        element="dance"
        title="Dance"
        subtitle="New years party - Doha, Qatar"
        desc={`"Those who can't dance say the music is no good - Jamaican Proverb`}
        videoSrc="https://titerniumstorage.blob.core.windows.net/my-assets/dance.mp4"
        navigateTo="portfolio"
        buttonText="Passion"
      />
      <Portfolio />
      <ThankYou />
    </div>
  );
}

export default App;
