import React, { useState, useEffect } from 'react'
import axios from '../../config/api'
import { Table,Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

function Home() {
    const [isOpen, setIsOpen] = useState(false)
    const [modal, setModal] = useState(false)
    const [pahlawan, setPahlawan] = useState([])

    const getData = () => {
        axios.get('avengers')
        .then(res => setPahlawan(res.data))
        .catch(err => console.log({err}))
    }

    useEffect(() => {
        getData()
    

     }, [])

     const isToggle = () => setIsOpen((prevState) => !prevState)
     const funModal = () => setModal((prevState) => !prevState)

     const deployBtn = (id) => {
        axios.get('avengers')
        .then(res => setPahlawan(res.data))
        .catch(err => console.log({err}))
        
       
     }
     

     const heroList = () => {
      return (
        pahlawan.map((hero,idx) => (
            
        <tr>
            <td>{idx + 1}</td>
            <td>{hero.name_hero}</td>
            <td>{hero.ability}</td>
            <td>{hero.weapon_name}</td>
            <td>{hero.ultimate_move}</td>
            <td ><input type="button" value="Deploy" className="btn btn-danger" onClick={() => {deployBtn(hero.id)}}/></td>
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
                    <h1 className="text-center">AVAILABLE HEROES</h1>
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

export default Home
