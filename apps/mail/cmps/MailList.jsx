import { LongTxt } from '../cmps/LongTxt.jsx'
import { mailService } from "../services/mail.service.js"
import { SendNewMail } from '../cmps/SendNewMail.jsx'




const { useState, useEffect } = React



export function MailList({ filterBy, mails,onClose, setMails, onRemoveMail, onChangingReadind,isOpen }) {

    const [isStar, setStar] = useState(false)
    const dynClass = isStar ? 'yellow' : 'regular'
    


    /*useEffect(() => {
        mailService.query(filterBy)
        .then((mails) => {
            setMails(mails)
           console.log(mails)})
        .catch(err => console.log('err:', err))

},[filterBy,dynstyle])*/



    function setIsStar(id){
       setStar(!isStar)  
        console.log(isStar, id)
        //setMailStar(id)

    }
    function setMailStar(id){
        let mail=mailService.get(id)
        console.log(mail)
        setMails(mail.isStar=true)
    }



/*export function Accordion({ title, children }) {
    const [isOpen, setIsOpen] = useState(false)
    const arrow = isOpen ? '▲' : '▼';
    return (
        <section className="accordion">
            <section onClick={() => setIsOpen(isOpen => !isOpen)} className="title-container">
                <h2>{title}</h2>
                <span>{arrow}</span>
            </section>
            {isOpen && <p>{children}</p>}
            <hr />
        </section>
    )
}*/


    if (!mails) return <div>loading...</div>
    return (
        <section >
            <table className="mail-list">             
                <tbody>
                    {mails.map(mail => <tr key={mail.id}>
                        <td onClick={() =>setIsStar(mail.id)} className={dynClass + " star"}>
                        <i  className ="fa-solid fa-star"></i>
                        </td>
                        <td>{mail.fromName}</td>
                        <td><span className="subject">{mail.subject}</span>{mail.body}{/*<div>{mail.body}<LongTxt txt={mail.body} /></div>*/}</td>
                        <td className="deliveryDate">{new Date(mail.sentAt).getDate() + ' / ' + new Date(mail.sentAt).getMonth()}</td>
                        <td>
                            <button onClick={() => onRemoveMail(mail.id)} title="move to the ricycle bin"> <i className="fa-solid fa-trash"> </i></button>
                            <button onClick={() => onChangingReadind(mail.id)} title="change to read/unread"><i className="fa-regular fa-envelope-open"></i></button>
                            <button onClick={() => onNote(mail.id)} title="send email to the note section"><i className="fa-solid fa-note-sticky"></i></button>
                        </td>
                    </tr>)}
                    </tbody>
            </table>
            <SendNewMail isOpen={isOpen}/>
            
        </section>
    )
}

