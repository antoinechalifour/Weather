import React from 'react'
import Cloudy from 'react-icons/lib/ti/weather-cloudy'
import PartlySunny from 'react-icons/lib/ti/weather-partly-sunny'
import Snow from 'react-icons/lib/ti/weather-snow'
import Rain from 'react-icons/lib/ti/weather-shower'
import Storm from 'react-icons/lib/ti/weather-stormy'
import Sun from 'react-icons/lib/ti/weather-sunny'
import Wind from 'react-icons/lib/ti/weather-windy-cloudy'

const WeatherBackground = ({ className, name }) => {
  let src = null

  switch (name) {
    case 'Thunderstorm':
      src = 'https://images.unsplash.com/photo-1492011221367-f47e3ccd77a0?dpr=1&auto=format&fit=crop&w=1199&h=1799&q=80&cs=tinysrgb&crop=&bg='
      break

    case 'Drizzle':
      src = 'https://images.unsplash.com/photo-1446478129398-42db46ee0475?dpr=1&auto=format&fit=crop&w=1199&h=1599&q=80&cs=tinysrgb&crop=&bg='
      break

    case 'Rain':
      src = 'https://images.unsplash.com/photo-1428592953211-077101b2021b?dpr=1&auto=compress,format&fit=crop&w=568&h=426&q=80&cs=tinysrgb&crop=&bg='
      break

    case 'Snow':
      src = 'https://images.unsplash.com/photo-1477682440513-fb3367847916?dpr=1&auto=format&fit=crop&w=1199&h=796&q=80&cs=tinysrgb&crop=&bg='
      break

    case 'Atmosphere':
      src = 'https://images.unsplash.com/photo-1475181624534-3e2ff2beb57c?dpr=1&auto=format&fit=crop&w=1199&h=799&q=80&cs=tinysrgb&crop=&bg='
      break

    case 'Clear':
      src = 'https://images.unsplash.com/photo-1470058509904-9ed83ee074aa?dpr=1&auto=format&fit=crop&w=1199&h=675&q=80&cs=tinysrgb&crop=&bg='
      break

    case 'Clouds':
      src = 'https://images.unsplash.com/photo-1438045809872-34a58ff469f6?dpr=1&auto=format&fit=crop&w=1080&h=627&q=80&cs=tinysrgb&crop=&bg='
      break

    case 'Extreme':
      src = 'https://images.unsplash.com/photo-1475181624534-3e2ff2beb57c?dpr=1&auto=format&fit=crop&w=1199&h=799&q=80&cs=tinysrgb&crop=&bg='
      break
  }

  return (
    <div
      className={className}
      style={{
        backgroundImage: `url(${src})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center center'
      }}
    />
  )
}

export default WeatherBackground
