// TODO: Define a City class with name and id properties

// dODO: Complete the HistoryService class
class City {
  name: string;
  id: string;

  constructor(name: string, id: string) {
    this.name = name;
    this.id = id;
  }
}class HistoryService {
  // dODO: Define a read method that reads from the searchHistory.json file
  private async read() {}
  private async read() {
    return await fs.readFile('db/db.json', {
      flag: 'a+',
      encoding: 'utf8',
    });
  }
  // TODO: Define a write method that writes the updated cities array to the searchHistory.json file
  private async write(cities: City[]) {}
  return await fs.writeFile('db/db.json', JSON.stringify(states, null, '\t'));
}
  // TODO: Define a getCities method that reads the cities from the searchHistory.json file and returns them as an array of City objects
  async getCities() {}
  return await this.read().then((cities) => {
    let parsedCities: Cities[];
  // TODO Define an addCity method that adds a city to the searchHistory.json file
  async addCity(city: string) {}
  // * BONUS TODO: Define a removeCity method that removes a city from the searchHistory.json file
  async removeCity(id: string) {}
  return await this.getStates()
  .then((cities) => cities.filter((state) => cities.id !== id))
  .then((filteredCities) => this.write(filteredCities));
}
}

export default new HistoryService();
