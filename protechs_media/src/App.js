import Footer from './Footer';
import Podcast from './Podcast';
import Video from './Videos';
import './App.css';
import Navbar from './Navbar';
import Page from './Landing';
import  Summary from'./Summary'
import Portfolio from './Portfolio';
function App() {
  return (
    <div>
      <Navbar/>
      <Page/>
      <Podcast/>
      <Video/>
      <Summary/>
      <Portfolio/>
      <Footer/>   
    </div>
  );
}
export default App;

