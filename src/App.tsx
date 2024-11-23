import React from 'react'
import Card, { CardVariant } from './components/Card'

const App = () => {
  return (
    <div>
      <Card width="200px" height="220px" variant={CardVariant.primary}>
        <button>Кнопка</button>
        <p>sduvsdbivi</p>
      </Card>
    </div>
  )
}

export default App
