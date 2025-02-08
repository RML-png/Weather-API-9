import { Router } from 'express';
const router = Router();

import HistoryService from '../../service/historyService.js';
import WeatherService from '../../service/weatherService.js';

// dODO: POST Request with city name to retrieve weather data
router.post('/', (req, res) => {
  router.get('/:city', async (req: Request, res: Response) => {
    try {
      const stateName = req.params.city;
      const cityCode = await WeatherService.convertCityNameToCode(cityName);
      const weather = await WeatherService.getParksByState(cityCode);
      //ensures saved data has proper casing regardless of input
      const sanitizedCityName = await WeatherService.convertCityCodeToName(
        cityCodeCode
      );
      await HistoryService.addCity(sanitizedCityName);
      res.json(weather);
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
  });
  // dODO: GET weather data from city name
  router.get('/events/:city', async (req: Request, res: Response) => {
    try {
      const city = req.params.state;
      const cityCode = await WeatherService.convertCityNameToCode(city);
      const events = await WeatherService.getClosestEventByState(cityCode);
      if (typeof events === 'string') {
        res.status(404).json({ message: 'No events found' });
      } else {
        res.json(events);
      }
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
  }); 
  // TODO: save city to search history
});

// dODO: GET search history
router.get('/history', async (req, res) => {});
router.get('/', async (_req: Request, res: Response) => {
  try {
    const savedCities = await HistoryService.getCities();
    res.json(savedCities);
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});
// * BONUS dODO: DELETE city from search history
router.delete('/history/:id', async (req, res) => {});
router.delete('/:id', async (req: Request, res: Response) => {
  try {
    if (!req.params.id) {
      res.status(400).json({ msg: 'City id is required' });
    }
    await historyService.removeCity(req.params.id);
    res.json({ success: 'City successfully removed from search history' });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

export default router;
