import React, {createContext, useState} from 'react';
import { BiWorld } from 'react-icons/bi';
const cities = require('../country-json-master/src/country-by-currency-code.json')

export const CurrencyContext = createContext()

const CurrencyContextProvider = (props) => {
    const [currency, setCurrency] = useState('USD')
    const [country, setCountry] = useState('Select Country');
    const [rate, setRate] = useState('1')

    const toggleCurrency = async (e) => {
        const country = e
        setCountry(country)
        const response = await fetch('https://v6.exchangerate-api.com/v6/cf7024ca22f4cbaac745ae9e/latest/USD',
        {
            "method": "GET"
        })

        const json = await response.json()

        for(let i = 0; i < cities.length; i++){
            if(cities[i].country === country){
                setCurrency(cities[i].currency_code)
                setRate(json.conversion_rates[cities[i].currency_code])
                break
            }
        }
    };
        return (
            <CurrencyContext.Provider value={{rate, currency, country, toggleCurrency}}>
                {props.children}
            </CurrencyContext.Provider>
        );
}

export default CurrencyContextProvider