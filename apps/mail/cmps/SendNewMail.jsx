const { useState, useEffect } = React
const { useNavigate, useParams } = ReactRouterDOM


import { mailService } from "../services/mail.service.js"
import { showSuccessMsg } from '../../../services/event-bus.service.js'




export function SendNewMail({isOpen,onSetIsClose}){


    const [newMail, setNewMail] = useState(mailService.getEmptyMail())

    function handleTxtChange({ target }) {
        const field=target.id
        const value = target.value
        //console.log(target,field,value)
        setNewMail(prevFilterBy => ({ ...prevFilterBy, [field]: value }))           
         }



function onSaveMail(ev){
    ev.preventDefault()
    console.log(newMail)
    mailService.save(newMail)
        .then(() => {onSetIsClose()
            showSuccessMsg('The Email was sent successfully')
        })
        .catch(err => console.log('err:', err))
}




const{sentTo,subject,body} = newMail

    return(
        <section>
        {isOpen && <form onSubmit={onSaveMail} className="newMail">
            <button className="close" onClick={onSetIsClose}>X</button>
                <label htmlform="sendTo">to:</label>
                <input onChange={handleTxtChange} value={sentTo} type="text" id="sendTo" name="sendTo"/>
                <label htmlform="subject">subject:</label>
                <input onChange={handleTxtChange} value={subject} type="text" id="subject" name="subject"/>
                <label htmlform="body"></label>
                <textarea onChange={handleTxtChange} value={body} className="body"  type="text" id="body" name="body"/>
                <div></div>
            <button className="submit">send</button>
            </form>}
            </section>
    )
}