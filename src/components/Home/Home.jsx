import React, { useState, useEffect, useRef } from 'react'
import axios from '../../config/api'
import { Table,Modal,
         ModalHeader, 
        ModalBody, 
        ModalFooter,
        Col, 
        Form, 
        FormGroup, 
        Label, 
        Input, 
        FormText } from 'reactstrap';

function Home() {
    const [isOpen, setIsOpen] = useState(false)
    const [modal, setModal] = useState(false)
    const [pahlawan, setPahlawan] = useState([])
    const [oneHero, setOneHero ] = useState([])
    const missionRef = useRef()

    const getData = () => {
        axios.get('avengers')
        .then(res => setPahlawan(res.data))
        .catch(err => console.log({err}))
    }

    useEffect(() => {
        getData()
  
     }, [pahlawan])

     const isToggle = () => setIsOpen((prevState) => !prevState)
     const funModal = (id) => {
        axios.get(`/avenger/${id}`)
        .then(res => setOneHero(res.data))
        .catch(err => console.log({err}))
         setModal((prevState) => !prevState)
        }

        const funClose = () => {
            setModal((prevState) => !prevState)
        }

     const deployBtn = () => {
        console.log(oneHero)
       
     }

     const okBtn = () => {
         const notice_start = missionRef.current.value
         const heroID = oneHero[0].id
        const body = {heroID ,notice_start}
        axios.post('/history', body)
        .then(res => {
            console.log(res.data.message)
         })
         .catch(err => {
            console.log(err.response.data.message)
         })
         setModal((prevState) => !prevState)
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
            <td ><input type="button" value="Deploy" className="btn btn-danger" onClick={() => {funModal(hero.id)}}/></td>
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
            <Modal isOpen={modal}>
                        
                <ModalBody>
                    <div className="border-bottom border-secondary card-title text-center ">
                        <h1>CREATE MISSION</h1>
                    </div>
                    <Form>
                    <textarea ref={missionRef} type='text' placeholder="Please provide information related to the mission" className='form-control' required/>
                    </Form>
                    
                </ModalBody>
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-8">
                        </div>
                        <div className="col-4">
                        <input type="button" className="mr-2 mb-2  btn btn-warning" value="Cancel" onClick={() => {funClose()}}/>
                        <input type="button" className=" mb-2 btn btn-success " value="OK" onClick={() => {okBtn()}}/>
                        </div>

                    </div>
                
                </div>
                
                
            </Modal> 
        </div>
    )
}

export default Home
