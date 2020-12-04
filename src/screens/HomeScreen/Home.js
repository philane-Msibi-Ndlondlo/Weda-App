import React, { useState, useEffect } from "react";
import {
  SafeAreaView,
  Text,
  StyleSheet,
  Button,
  StatusBar,
  View,
  TouchableOpacity,
} from "react-native";
import Icon from "@expo/vector-icons/MaterialCommunityIcons";
import moment from "moment";

const weatherData = {
  clouds: {color: '#4DB1D0', icon: 'cloudy'},
  sunny: {color: '#F7C67A', icon: 'sunny'},
  rain: {color: '#364C73', icon: 'rainy'},
  snow: {color: '#1e3799', icon: 'snowy'}
}

const Home = ({ navigation }) => {
  const [currentDate, setCurrentDate] = useState(null);
  const [currentTime, setCurrentTime] = useState(null);
  const [location, setLocation] = useState(null);
  const [weatherType, setWeatherType] = useState(null);
  const [weatherDiscription, setweatherDiscription] = useState(null);
  const [temperature, setTemperature] = useState(null);
  const [pressure, setPressure] = useState(null);
  const [humidity, setHumidity] = useState(null);
  const [speed, setSpeed] = useState(null);
  const [country, setCountry] = useState(null);
  const [weather, setweather] = useState(null);

  const getDateTime = async () => {
    const date = `${moment().format("dddd")} ${moment().format(
      "MMMM Do YYYY"
    )}`;
    const time = `${moment().format("LT")}`;
    setCurrentDate(date);
    setCurrentTime(time);
  };
  const getWeather = async () => {
    const data =  {
      coord: { lon: 28.23, lat: -26 },
      weather: [
        { id: 801, main: "Clouds", description: "few clouds", icon: "02n" },
      ],
      base: "stations",
      main: {
        temp: 18.43,
        feels_like: 15.96,
        temp_min: 17.78,
        temp_max: 20,
        pressure: 1020,
        humidity: 68,
      },
      visibility: 10000,
      wind: { speed: 4.6, deg: 330 },
      clouds: { all: 22 },
      dt: 1607020099,
      sys: {
        type: 1,
        id: 2001,
        country: "ZA",
        sunrise: 1606964838,
        sunset: 1607014024,
      },
      timezone: 7200,
      id: 949880,
      name: "Tembisa",
      cod: 200,
    };

    console.log(data)

    setLocation(data.name);
    setWeatherType(data.weather[0].main.toLowerCase());
    setweatherDiscription(data.main.description);
    setTemperature(data.main.temp);
    setPressure(data.main.pressure);
    setHumidity(data.main.humidity);
    setSpeed(data.wind.speed);
    setCountry(data.sys.country);
    console.log(weatherData[weatherType].icon)
    setweather(data);
  };

  useEffect( async () => {
    await getDateTime();
    await getWeather();
  });

  return (
    <SafeAreaView style={[styles.container, { backgroundColor: weatherData[weatherType].color }]}>
      <StatusBar barStyle="light-content"></StatusBar>
      <View style={styles.header}>
        <Text style={styles.currentDate}>{currentDate}</Text>
        <Text style={styles.currentTime}>{currentTime}</Text>
        <Text style={styles.city}>{location}</Text>
      </View>
      <View style={styles.main}>
        <Text style={styles.temperatureText}>{weatherType}</Text>
        <Text style={styles.moreTextText}>{weatherDiscription}</Text>
        <Icon name={`weather-${weatherData[weatherType].icon}`} size={200} style={styles.icon} />
        <Text style={styles.temperature}>{temperature}&deg;C</Text>
      </View>
      <View style={styles.footer}>
        <View style={styles.tempType}>
          <TouchableOpacity style={styles.btn}>
            <Text style={styles.btnText}>&deg;C</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.btn}>
            <Text style={styles.btnText}>&deg;F</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.moreInfo}>
          <View style={styles.more}>
            <Text style={styles.moreText}>Speed</Text>
            <Text style={styles.moreTextText}>{speed}</Text>
          </View>
          <View style={styles.more}>
            <Text style={styles.moreText}>Humidity</Text>
            <Text style={styles.moreTextText}>{humidity}</Text>
          </View>
          <View style={styles.more}>
            <Text style={styles.moreText}>Pressure</Text>
            <Text style={styles.moreTextText}>{pressure}</Text>
          </View>
          <View style={styles.more}>
            <Text style={styles.moreText}>country</Text>
            <Text style={styles.moreTextText}>{country}</Text>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F7C67A",
    flexDirection: "column",
    paddingHorizontal: 20,
  },
  header: {
    flex: 0.3,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  main: {
    flex: 0.5,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  currentDate: {
    fontSize: 18,
    color: "#fff",
    marginVertical: 5,
  },
  currentTime: {
    fontSize: 36,
    color: "#fff",
    marginVertical: 5,
  },
  city: {
    fontSize: 18,
    color: "#fff",
    marginVertical: 5,
  },
  icon: {
    color: "#fff",
  },
  temperatureText: {
    color: "#fff",
    fontSize: 25,
  },
  temperature: {
    fontSize: 45,
    color: "#fff",
  },
  tempType: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
    marginBottom: 30,
    textAlign: "center",
  },
  btn: {
    backgroundColor: "#efb864",
    width: "50%",
    maxWidth: "50%",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    minHeight: 40,
    marginHorizontal: 10,
    borderRadius: 4,
  },
  btnText: {
    fontSize: 18,
    color: "#fff",
    fontWeight: "bold",
  },
  moreInfo: {
    justifyContent: "space-around",
    alignItems: "center",
    flexDirection: "row",
    width: "90%",
  },
  more: {
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
  },
  moreText: {
    color: "#fff",
    fontWeight: "bold",
    textTransform: "uppercase",
    fontSize: 13,
  },
  moreTextText: {
    color: "#fff",
    fontWeight: "bold",
    textTransform: "uppercase",
    fontSize: 14,
  },
  footer: {
    flex: 0.2,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
});

export default Home;
