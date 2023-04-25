import { useState, useEffect } from 'react'
import './App.css'
import WeatherBox from './components/WeatherBox'
import axios from 'axios';

function App() {
  const [city, setCity] = useState('Mumbai');
  const [name, setName] = useState('Mumbai');
  const [tempC, setTempC] = useState(30);
  const [tempF, setTempF] = useState(86);
  const [img, setImg] = useState();
  const [text, setText] = useState();
  const [humidity, setHumidity] = useState();
  // const url = 'https://square-queen-c110.blanolia.workers.dev/';
  const handleChange = (e) => {
    console.log(e.target.value);
    setCity(e.target.value);
  }
  useEffect(() => {
    const FetchApi = async () => {
      let response = await fetch(`https://api.weatherapi.com/v1/current.json?key=${import.meta.env.VITE_API_KEY}&aqi=no&q=${city}`);
      let data = await response.json();
      console.log(data);
      if (data.error) {
        setName('No Such city Found:)');
        setTempC('');
        setTempF('');
      }
      else {
        setName(data.location.name + ', ' + data.location.region + ', ' + data.location.country);
        setHumidity(data.current.humidity);
        setText(data.current.condition.text);
        setImg('https:' + data.current.condition.icon);
        setTempC(data.current.temp_c);
        setTempF(data.current.temp_f);
      }
    }
    FetchApi();
  }, [city]);
  return (
    <>
      <WeatherBox humidity={humidity} text={text} img={img} city={city} handleChange={handleChange} tempC={tempC} tempF={tempF} name={name} />
    </>
  )
}

export default App
