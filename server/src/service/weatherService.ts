import dotenv from 'dotenv';
dotenv.config();

// TODO: Define an interface for the Coordinates object

// TODO: Define a class for the Weather object
// fix classes
class city {

}  class date {

} class city {

}
class date {

}
class icon {

}  
class icondescription {

}
class tempF {

}
class windSpeed {

} 
class humidity{

}
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

  }
  // do fetch
  // TODO: Create destructureLocationData method

  private destructureLocationData(locationData: Coordinates): Coordinates {
    return coordinates
  }
  // TODO: Create buildGeocodeQuery method
  private buildGeocodeQuery(): string {
      return 'url+${this.cityName}'
  }
  // TODO: Create buildWeatherQuery method
  private buildWeatherQuery(coordinates: Coordinates): string {}
  // TODO: Create fetchAndDestructureLocationData method
  private async fetchAndDestructureLocationData() {
    const locationData = this.fetchLocationData {this.buildGeocodeQuery{}}
    return this.destructureLocationData(locationData)
  }

  // TODO: Create fetchWeatherData method
  private async fetchWeatherData(coordinates: Coordinates) {}
  // TODO: Build parseCurrentWeather method
  private parseCurrentWeather(response: any) {}
  // TODO: Complete buildForecastArray method
  private buildForecastArray(currentWeather: Weather, weatherData: any[]) {}
  // TODO: Complete getWeatherForCity method
  async getWeatherForCity(city: string) {} 
  this.cityName = city
  const coordinates = this.fetchAndDestructureLocationData()
}

export default new WeatherService();
