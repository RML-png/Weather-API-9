import { Router, type Request, type Response } from 'express';
const router = Router();

import HistoryService from '../../service/historyService.js';
import WeatherService from '../../service/weatherService.js';

// : POST Request with city name to retrieve weather data
router.post('/',async (req: Request, res:Response) => {
  
    try {
      const cityName = req.body.cityName;
      
      
      //ensures saved data has proper casing regardless of input
      const weather=await WeatherService.getWeatherForCity(cityName)
  
      await HistoryService.addCity(cityName);
      res.json(weather);
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
  });
  // dODO: GET weather data from city name
  document.getElementById('weather')?.addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the default form submission

    const cityName = document.getElementById('cityName')?.value; // Get the city name from the input

    // Fetch weather data for the city
    fetch(`WeatherService${cityName}&appid=Key&units=metric`)
        .then(response => {
            if (!response.ok) {
                throw new Error('City not found');
            }
            return response.json();
        })
        .then(data => {
            // Process and display the weather data
            const weatherOutput = document.getElementById('weather');
            weatherOutput.innerHTML = `
                <h2>Weather in ${data.name}</h2>
                <p>Temperature: ${data.main.temp} °C</p>
                <p>Weather: ${data.weather[0].description}</p>
                <p>Humidity: ${data.main.humidity}%</p>
                <p>Wind Speed: ${data.wind.speed} m/s</p>
            `;
        })
        .catch(error => {
            console.error('Error fetching weather data:', error);
            document.getElementById('weather')?.innerHTML = `<p>${error.message}</p>`;
        });
        const temp = document.getElementById('weather') if (temp) { temp.innerHTML = `&lt;p&gt;${error.message}&lt;/p&gt;`; }
});
  // TODO: save city to search history


// dODO: GET search history
router.get('/history', async (_req: Request, res: Response) => {

  try {
    const savedCities = await HistoryService.getCities();
    res.json(savedCities);
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});
// * BONUS dODO: DELETE city from search history
router.delete('/history/:id', async (req, res) => {

  try {
    if (!req.params.id) {
      res.status(400).json({ msg: 'City id is required' });
    }
    await HistoryService.removeCity(req.params.id);
    res.json({ success: 'City successfully removed from search history' });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

export default router;
