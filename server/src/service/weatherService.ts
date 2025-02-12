import dotenv from 'dotenv';
import { console } from 'inspector';
dotenv.config();

// TODO: Define an interface for the Coordinates object
interface Coordinates{
  lat:number, 
  lon:number,
}  
// dODO: Define a class for the Weather object
// fix classes
// class Weather { 
//   city:string;
//   date:string;
//   icon:string;
//   iconDescription:string;
//   tempF:number;
//   windSpeed:number;
//   humidity:number;
//   constructor(
//     city:string,
//     date:string,
//     icon:string,
//     iconDescription:string,
//     tempF:number,
//     windSpeed:number,
//     humidity:number
//   ) {
//     this.city=city
//     this.date=date
//     this.icon=icon
//     this.iconDescription=iconDescription
//     this.tempF=tempF
//     this.windSpeed=windSpeed
//     this.humidity=humidity
//   }


// }
// TODO: Complete the WeatherService class
class WeatherService {
  // TODO: Define the baseURL, API key, and city name properties
  
    private baseURL?: string;
  
    private apiKey?: string;
  private cityName = ""
    constructor() {
      this.baseURL = process.env.API_BASE_URL || '';
  
      this.apiKey = process.env.API_KEY || '';
    }
  // TODO: Create fetchLocationData method
  private async fetchLocationData(query: string) {
   const response=await fetch(query)
    const data=await response.json()
   return data[0]

  }
  // do fetch
  // TODO: Create destructureLocationData method

  private destructureLocationData(locationData: Coordinates): Coordinates {
    let {lat,lon}=locationData
    const coordinates:Coordinates={
      lat,
      lon
    }
    return coordinates
  }
  // TODO: Create buildGeocodeQuery method
  private buildGeocodeQuery(): string {
      return `${this.baseURL}/geo/1.0/direct?q=${this.cityName}&limit=1&appid=${this.apiKey}`
  }
  // TODO: Create buildWeatherQuery method
  // private buildWeatherQuery(coordinates: Coordinates): string {}
  // TODO: Create fetchAndDestructureLocationData method
  private async fetchAndDestructureLocationData() {
    const locationData = await this.fetchLocationData (this.buildGeocodeQuery())
    return this.destructureLocationData(locationData)
  }

  // TODO: Create fetchWeatherData method
  // private async fetchWeatherData(coordinates: Coordinates) {}
  // TODO: Build parseCurrentWeather method
  // private parseCurrentWeather(response: any) {}
  // TODO: Complete buildForecastArray method
  // private buildForecastArray(currentWeather: Weather, weatherData: any[]) {}
  // TODO: Complete getWeatherForCity method
  async getWeatherForCity(city: string) {
    this.cityName = city
  const coordinates = this.fetchAndDestructureLocationData()
  console.log (coordinates)
  } 
  
}

export default new WeatherService();
