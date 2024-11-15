import etsy from './data/etsy.json';
import './App.css'
import Listing from './Listing';

function App() {

  return (
    <>
      <Listing data={etsy} />
    </>
  )
}

export default App
