import axios from "axios";

const url = "https://covid19.mathdro.id/api";


// For Cards Data
export const fetchdata = async () => {
  try {
    const {
      data: { confirmed, recovered, deaths, lastUpdate },
    } = await axios.get(url);
    const modifiedData = {
      confirmed,
      recovered,
      deaths,
      lastUpdate,
    };
    return modifiedData;
  } catch (error) {
     return error;
  }
};


// For Chart data

export const fetchDailyData = async () => {
  try{
    const { data } = await axios.get(`${url}/daily`);
    const modifiedData = data.map((dailyData) => ({
      confirmed: dailyData.confirmed.total,
      deaths: dailyData.deaths.total,
      date: dailyData.reportDate,
    }));

    return modifiedData;
  } catch (error) {
    return error;
  }
};