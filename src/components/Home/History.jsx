import React, { useState, useEffect } from 'react'
import axios from '../../config/api'
import { Table } from 'reactstrap';

function History() {
    const [history, setHistory] = useState([])

    const getData = () => {
        axios.get('history')
        .then(res => setHistory(res.data))
        .catch(err => console.log({err}))
    }

    useEffect(() => {
        getData()
    

     }, [])

     const deployBtn = (id) => {
        // axios.get('avengers')
        // .then(res => setHisory(res.data))
        // .catch(err => console.log({err}))
        
       
     }
     

     const heroList = () => {
      return (
        history.map((hero,idx) => (
            
        <tr>
            <td>{idx + 1}</td>
            <td>{hero.name_hero}</td>
            <td>{hero.notice_start}</td>
            <td>{hero.notice_finish}</td>
            <td>{hero.start_time}</td>
            <td>{hero.finish_time}</td>
            <td>{hero.status}</td>
            <td>{hero.ultimate_move}</td>
        </tr>  
                
            
        ))
  
      )
           
     }
     


    return (
        <div>
            <div className="container-fluid">
                <div className="row"> 
                <div className="col-1">
                    
                    </div>
                    
                    <div className="col-10">
                    <h1 className="text-center">HISTORY HEROES</h1>
                      <Table>
                        <thead>
                                <tr>
                                <th>No</th>
                                <th>Hero</th>
                                <th>Notice Start</th>
                                <th>Notice Finish</th>
                                <th>Start Time</th>
                                <th>Finish Time</th>
                                <th>Status</th>
                                </tr>
                            </thead>
                            <tbody>
                                {heroList()}
                        </tbody>
                     </Table>
    
                    </div>
                    <div className="col-1">
                    
                    </div>
                </div>
                
            </div>
        </div>
    )
}

export default History
