# Weather App

A **React-based Weather App** that allows users to search for city weather conditions using the **OpenWeatherMap API**. The app displays real-time weather data such as temperature, max/min temperature, humidity, and weather descriptions with relevant weather icons.

## Features
- Search for any city's current weather conditions.
- Displays:
  - Current temperature
  - Max temperature
  - Min temperature
  - Humidity level
  - Weather description
  - Weather icon based on conditions
- User-friendly UI built with **Material-UI** for styling.
- **Vite** used as a build tool for faster development.

## Getting Started

Follow the instructions below to set up and run the project locally.

### Prerequisites

Make sure you have the following installed:

- [Node.js](https://nodejs.org/en/download/) (v14 or higher)
- [npm](https://www.npmjs.com/) (comes with Node.js) or [Yarn](https://yarnpkg.com/)

### Installation

1. **Clone the repository**:

   ```bash
   git clone https://github.com/vaishnavi-mapari/Weather-App.git
   cd Weather-App
   ```

2. **Install dependencies**:

   If you're using npm:

   ```bash
   npm install
   ```

   Or if you're using Yarn:

   ```bash
   yarn install
   ```

3. **Get OpenWeatherMap API Key**:

   - Go to [OpenWeatherMap](https://openweathermap.org/api) and sign up for a free account.
   - Obtain your **API key**.

4. **Configure the API Key**:

   In the project directory, create a `.env` file and add your API key like this:

   ```
   VITE_API_KEY=your_openweathermap_api_key
   ```

### Running the App

To start the development server:

```bash
npm run dev
```

Or with Yarn:

```bash
yarn dev
```

This will start the app at `http://localhost:3000`.

### Building the App for Production

To create an optimized production build:

```bash
npm run build
```

Or with Yarn:

```bash
yarn build
```

The production-ready files will be in the `dist` folder.

## Usage

1. Enter a city name in the search input.
2. Click the **Search** button.
3. The app will display the current weather information for the specified city.

## Technologies Used

- **React**: Frontend UI framework
- **Material-UI (MUI)**: For building responsive and accessible components
- **Axios**: For making HTTP requests to the OpenWeatherMap API
- **OpenWeatherMap API**: For fetching real-time weather data
- **Vite**: Build tool for faster development
- **GitHub Pages / Vercel**: (Optional) for hosting the project

## Contributing

Contributions are welcome! Feel free to submit a pull request or open an issue if you find bugs or want to improve the project.

## Contact

If you have any questions or feedback, feel free to reach out:

- GitHub: [vaishnavi-mapari](https://github.com/vaishnavi-mapari)
