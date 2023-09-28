import './App.css';
import Main from './components/main';
import Header from './components/header';
import ContactForm from './components/ContactForm';
// import {useState, useEffect} from 'react';
import Footer from '../src/components/footer';

function App() {
  // const [isLoading, setLoading] = useState(true);

  // function someRequest() { //Simulates a request; makes a "promise" that'll run for 2.5 seconds
  //   return new Promise(resolve => setTimeout(() => resolve(), 4500));
  // } 

  // useEffect(() => {
  //   someRequest().then(() => {
  //     const loaderElement = document.querySelector(".loader-container");
  //     if (loaderElement) {
  //       loaderElement.remove();
  //       setLoading(!isLoading);
  //     }
  //   });
  // });

  // if (isLoading) {
  //   return null;
  // }

  return (
    <div className="App">
      <Header/>
      <Main/>
      <ContactForm/>
      <Footer/>
    </div>
  );
}

export default App;
