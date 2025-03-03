# Weather App React
[Live Demo](https://weather-app-react-001.netlify.app/)
## Screenshots

![App Screenshot](./public/weather.gif)


## Description
This is a simple weather application built with React. It fetches real-time weather data from the OpenWeatherMap API and displays the current weather conditions for a searched location.

## Features
- Search for current weather by city name
- Displays temperature, weather conditions, and location details
- Dynamic background changes based on temperature
- Fully responsive design with a maximum width of 500px centered on the page

## Technologies Used
- React.js
- CSS3
- OpenWeatherMap API

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/weather-app-react.git
   ```
2. Navigate to the project directory:
   ```bash
   cd weather-app-react
   ```
3. Install dependencies:
   ```bash
   npm install
   ```
4. Start the application:
   ```bash
   npm start
   ```

## API Configuration
To use the OpenWeatherMap API, you need to get an API key:
1. Sign up at [OpenWeatherMap](https://openweathermap.org/)
2. Generate an API key
3. Replace the placeholder in `api.js`:
   ```js
   const api = {
       key: "YOUR_API_KEY_HERE",
       base: "https://api.openweathermap.org/data/2.5/"
   }
   ```

## Usage
- Enter a city name in the search bar and press "Enter."
- The app will display the weather details for the searched city.

## Screenshots
![Weather App Screenshot](./public/image%20copy.png)
![](./public/image%20copy%202.png) 

## License
This project is open-source and available under the [MIT License](LICENSE).

## Contact
For any inquiries or contributions, feel free to reach out at [your-email@example.com](mailto:your-email@example.com).

