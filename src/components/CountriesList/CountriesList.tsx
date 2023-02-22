import React, { useEffect, useState, useCallback } from "react";
import ListItem from "../ListItem/ListItem";

import { fetchCountriesData } from "../../api";
import Search from "../../store/search";

import { observer } from "mobx-react-lite";

interface CountryData {
  Country: string;
  CountryCode: string;
  Slug: string;
  NewConfirmed: number;
  TotalConfirmed: number;
  NewDeaths: number;
  TotalDeaths: number;
  NewRecovered: number;
  TotalRecovered: number;
  Date: string;
  }

const CountriesList: React.FC = observer(() => {
  const [countries, setCountries] = useState([]);

  const fetchData = useCallback(async () => {
    const data = await fetchCountriesData();
    setCountries(data);
  },[]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  return (
    <ul>
      <ListItem
        isBlue
        number="№"
        Country="Country"
        TotalConfirmed="Total Confirmed"
      />
      {countries
        .slice()
        ?.filter((item:{ Country: string }) => item.Country.includes(Search.searchCondition))
        // ?.map(({ ID, ...restProps }, i) => (
        //   <ListItem key={ID} {...restProps} number={i + 1} />
        // ))}
        ?.map(({ ID, Country,TotalConfirmed, }, i) => (
          <ListItem key={ID} Country={Country} TotalConfirmed={TotalConfirmed} number={i + 1} />
        ))}
    </ul>
  );
});

export default CountriesList;
