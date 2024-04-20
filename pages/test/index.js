import WorkSlider from "@/components/WorkSlider";
import Bulb from "@/components/Bulb";
import Circles from '../../components/Circles';


import {} from 'react-icons/rx';

import {motion} from 'framer-motion'
import { fadeIn } from "@/variants";
import { useState } from "react";

const countries =  [
    {
        name: 'India',
        value: 'IN',
        cities: [
            'Delhi',
            'Mumbai'
        ]
    },
    {
        name: 'Pak',
        value: 'KN',
        cities: [
            'Lahore',
            'Karachi'
        ]
    },
    {
        name: 'Bangladesh',
        value: 'BG',
        cities: [
            'Dakha',
            'Chittagong'
        ]
    },
]


const Test = () => {
    const [country, setCountry] = useState('');
    console.log('country: ', country)

    const selectedCountry = countries.filter((item)=> item.name === country);

    console.log('selected country object: ', selectedCountry[0])
  return (
    <div className="h-full bg-primary/30 py-36 flex items-center flex-col gap-2 text-black">
        <select onChange={(e)=>setCountry(e.target.value)}>
            {countries.map((country, index)=> {
                return (
                    <option key={index}>
                        {country.name}
                    </option>
                )
            })}

        </select>
        <select onChange={(e)=>setCountry(e.target.value)}>
            {selectedCountry[0].cities.map((country, index)=> {
                return (
                    <option key={index}>
                        {country}
                    </option>
                )
            })}

        </select>
  </div>
  )
};

export default Test;
