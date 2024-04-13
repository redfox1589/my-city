import React, { useEffect, useState } from "react";
import {
    StatisticValue,
    StatisticLabel,
    Segment,
    Statistic,
  } from 'semantic-ui-react'
  import 'semantic-ui-css/semantic.min.css';

export default function Weather() {
    const [data, setData] = useState([]);
  
    useEffect(() => {
        const fetchData = async () => {
        const url = 'https://api.openweathermap.org/data/2.5/weather/?lat=54.20005&lon=45.17451&units=metric&APPID=0464acec801c184df72a55e4a8be0f75'
          await fetch(url)
          .then(res => res.json())
          .then(result => {
            setData(result)
            console.log(result);
          });
        }
        fetchData();
      }, [])
  
    return (
      <div className="Weather">
    {(typeof data.main != 'undefined') ? (
        <Segment inverted>
        <Statistic color='violet' inverted>
          <StatisticValue>{Math.round(data.main.temp)}</StatisticValue>
          <StatisticLabel>Температура, °C</StatisticLabel>
        </Statistic>

        <Statistic color='red' inverted>
          <StatisticValue>{Math.round(data.main.pressure)}</StatisticValue>
          <StatisticLabel>Давление, мм рт.ст</StatisticLabel>
        </Statistic>

        <Statistic color='teal' inverted>
          <StatisticValue>{Math.round(data.wind.speed)}</StatisticValue>
          <StatisticLabel>Ветер, м/с</StatisticLabel>
        </Statistic>
      </Segment>
      ): (
        <div>
            Загрузка...
        </div>
      )}
      </div>
    );
  }
