import './App.scss'
import React from 'react'
import Card from './components/Card'
import { data } from './data/data'
import { colors } from './data/colors'

const App = () => {
  return (
    <div className='app'>
      <div>
        <div className='app__title'>
          <p>Ты сегодня покормил кота?</p>
        </div>
        <div className='app__cards'>
          {data.map(item => (
            <Card
              key={item.id}
              tagline={item.tagline}
              taglineRejected={item.taglineRejected}
              brand={item.brand}
              taste={item.taste}
              quantity={item.quantity}
              present={item.present}
              weight={item.weight}
              underline={item.underline}
              underlineWordLink={item.underlineWordLink}
              underlineSelected={item.underlineSelected}
              soldout={item.soldout}
              soldoutText={item.soldoutText}
              colors={colors}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

export default App