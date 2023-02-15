
import { useEffect, useState } from 'react';
import './App.css';

function App() {

  const [advice, setAdvice] = useState("")
  const [image, setImage] = useState("")

  useEffect ( ()=> {
    const getResponse = async () => {
    const responce = await fetch("http://www.boredapi.com/api/activity/");
    const data = await responce.json();
    setAdvice(data.activity);
    }
    getResponse()
  },[])

  const changeAdvice = async () => {
    const responce = await fetch("http://www.boredapi.com/api/activity/");
    const data = await responce.json();
    setAdvice(data.activity);
  }

    const accessKey = 'Ih9cQX5igRDGvADWU3WrRKBA6LdB0GltAB4r3bNBpVs';
    const orientation = 'landscape';
    const query = 'dark';

  useEffect ( ()=> {
    const getRandomPhoto = async () => {
    const response = await fetch(`https://api.unsplash.com/photos/random?orientation=${orientation}&query=${query}`, {
      headers: {
        'Authorization': `Client-ID ${accessKey}`
      }
    });
    const data = await response.json();
    setImage(data.urls.regular);
    console.log(data.urls.regular);
  
}
getRandomPhoto();

  },[])

  const changeImage = async () => {
    const response = await fetch(`https://api.unsplash.com/photos/random?orientation=${orientation}&query=${query}`, {
      headers: {
        'Authorization': `Client-ID ${accessKey}`
      }
    });
    const data = await response.json();
    setImage(data.urls.regular);
  }


  return (
    <div className="App">
      <div>
        <img className='picture' src={image} alt="random"/>
      </div>
      
<div >
<h1>If you do not know what to do, read advice bellow:</h1>
</div>
<div>
  <h2>{advice}</h2>
</div>
<div>
  <button className='btn' onClick={event => {
          			changeAdvice();
          			changeImage();
        		}}>Refresh Advice</button>
</div>
    </div>
  );
}

export default App;
