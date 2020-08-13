
import React from 'react'
import { BrowserRouter, Route } from 'react-router-dom'


import Home from './Home/Home'
import Header from './Home/Header'
import Avengers from './Home/Avengers'
import Onduty from './Home/Onduty'
import Rank from './Home/Rank'
import History from './Home/History'

export default function App() {
  return (
    <div>
      <BrowserRouter>
      <div className="header">
                    <Header/>
       <Route path="/" exact component={Avengers} />
       <Route path="/task" exact component={Home} />
       <Route path="/onduty" exact component={Onduty} />
       <Route path="/rank" exact component={Rank} />
       <Route path="/history" exact component={History} />
       </div>
       </BrowserRouter>
    </div>
  )
}
