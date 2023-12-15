const { useState, useEffect } = React
const { useNavigate, useParams } = ReactRouterDOM


import { mailService } from "../services/mail.service.js"



export function SendNewMail({isOpen}){


    const [newMail, setNewMail] = useState(mailService.getEmptyMail())

    function handleTxtChange({ target }) {
        const field=target.field
        const value = target.value
        console.log(field,value)
        setFilterByToEdit(prevFilterBy => ({ ...prevFilterBy, [field]: value }))           
         }


function onSaveDraft(){

}

function onSaveMail(ev){
    ev.preventDefault()
    mailService.save(newMail)
        .then(/*() => navigate('/mail')*/)
        .catch(err => console.log('err:', err))
}




const{sentTo,subject,body} = newMail

    return(
        <section>
        {isOpen && <form onSubmit={onSaveMail} className="newMail">
                <label htmlform="sendTo">to:</label>
                <input onChange={handleTxtChange} value={sentTo} type="text" id="sendTo" name="sendTo"/>
                <label htmlform="subject">subject:</label>
                <input onChange={handleTxtChange} value={subject} type="text" id="subject" name="subject"/>
                <label htmlform="body"></label>
                <input onChange={handleTxtChange} value={body} className="body"  type="text" id="body" name="body"/>
                <div></div>
            <button onClick={onSaveDraft}>save at drafts</button>
            <button>send</button>
            </form>}
            </section>
    )
}