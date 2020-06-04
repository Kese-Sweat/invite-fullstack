import React from 'react'
import '../styles/invitee.css'
import { useInvitee } from '../hooks'



function Users (){

const {invitee, getInvitee} = useInvitee()
console.log(invitee)

    return( <div className="inviteeContainer">

        <div >
         <div className="userInfo">
            <span>Name:</span>
            <p>Phone:</p>
            <p>Email:</p>
         </div>
         <div className="myButtons">
            <button>going</button>
            <button>not going</button>
            </div>
        </div>

    </div>


    )
}

export default Users