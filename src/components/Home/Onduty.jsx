import React, { useState, useEffect } from 'react'
import axios from '../../config/api'
import { Table } from 'reactstrap';

function Onduty() {
    const [onduty, setOnduty] = useState([])

    const getData = () => {
        axios.get('avengers/onduty')
        .then(res => setOnduty(res.data))
        .catch(err => console.log({err}))
    }

    useEffect(() => {
        getData()
    

     }, [])

     const deployBtn = (id) => {
    //     axios.get('avengers')
    //     .then(res => setPahlawan(res.data))
    //     .catch(err => console.log({err}))
        
       
     }
     

     const heroList = () => {
      return (
        onduty.map((hero,idx) => (
            
        <tr>
            <td>{idx + 1}</td>
            <td>{hero.name_hero}</td>
            <td>{hero.ability}</td>
            <td>{hero.weapon_name}</td>
            <td>{hero.ultimate_move}</td>
            <td ><input type="button" value="Finish" className="btn btn-info" onClick={() => {deployBtn(hero.id)}}/></td>
        </tr>  
                
            
        ))
  
      )
           
     }
     


    return (
        <div>
            <div className="container-fluid">
                <div className="row"> 
                <div className="col-2">
                    
                    </div>
                    
                    <div className="col-8">
                    <h1 className="text-center">HEROES ONDUTY</h1>
                      <Table>
                        <thead>
                                <tr>
                                <th>No</th>
                                <th>Hero</th>
                                <th>Ability</th>
                                <th>weapon</th>
                                <th>Ultimate move</th>
                                <th>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {heroList()}
                        </tbody>
                     </Table>
    
                    </div>
                    <div className="col-2">
                    
                    </div>
                </div>
                
            </div>
        </div>
    )
}

export default Onduty
