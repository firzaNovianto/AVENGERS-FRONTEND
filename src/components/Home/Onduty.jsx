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

function Onduty() {
    const [modal, setModal] = useState(false)
    const [onduty, setOnduty] = useState([])
    const [oneHero, setOneHero ] = useState([])
    const missionRef = useRef()
    const statusRef = useRef()

    const getData = () => {
        axios.get('avengers/onduty')
        .then(res => setOnduty(res.data))
        .catch(err => console.log({err}))
    }

    useEffect(() => {
        getData()
    

     }, [onduty])

     const funModal = (id) => {
        axios.get(`/onduty/${id}`)
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
        const notice_finish = missionRef.current.value
        const status = statusRef.current.value 
        const id = oneHero[0].id
        const heroID = oneHero[0].heroID
       const body = {id ,heroID ,notice_finish ,status}
       axios.patch(`/history/${id}`, body)
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
        onduty.map((hero,idx) => (
            
        <tr>
            <td>{idx + 1}</td>
            <td>{hero.name_hero}</td>
            <td>{hero.weapon_name}</td>
            <td>{hero.ultimate_move}</td>
            <td>{hero.notice_start}</td>
            <td>{hero.start_time}</td>
            <td ><input type="button" value="Finish" className="btn btn-info" onClick={() => {funModal(hero.id)}}/></td>
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
                                <th>Weapon</th>
                                <th>Ultimate move</th>
                                <th>Mission</th>
                                <th>Start_time</th>
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
            <input type="button" value="cek" onclick={() => {deployBtn()}}/>
            <Modal isOpen={modal}>
                        
                <ModalBody>
                    <div className="border-bottom border-secondary card-title text-center ">
                        <h1>RESULT MISSION</h1>
                    </div>
                    <Form>
                    <textarea ref={missionRef} type='text' placeholder="Please provide information related to the mission" className='form-control' required/>
                    </Form>
                    <FormGroup>
        <Label >Result</Label>
        <select ref={statusRef} className="form-control">
                        <option value="Success">Success</option>
                        <option value="Failed">Failed</option>
                        </select>
        </FormGroup>
                    
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

export default Onduty
