
import { LongTxt } from '../cmps/LongTxt.jsx'
import { mailService } from "../services/mail.service.js"
import { MailUpperFilter } from "../cmps/MailUpperFilter.jsx"
import { MailFilter } from "../cmps/MailFilter.jsx"
import { SendNewMail } from '../cmps/SendNewMail.jsx'
import { showSuccessMsg } from '../../../services/event-bus.service.js'







const { useState, useEffect } = React
const { Outlet, Link } = ReactRouterDOM
const { useParams, useNavigate } = ReactRouterDOM



export function UnRead() {

    const [render, setRender] = useState(false)
    const [mails, setMails] = useState(null)
    const [filterBy, setFilterBy] = useState(mailService.getDefaultFilter())
    const [isOpen, setIsOpen] = useState(false)
    const [dynClassRead, setDynClassRead] = useState('')
    const [selectedMailId, setSelectedMailId] = useState(null)
    const [mailToEdit, setMailToEdit] = useState(mailService.getEmptyMail)




    useEffect(() => {

        mailService.query(filterBy)
            .then((mails) => {
                mails = mails.filter(mail => (mail.from !== 'user@appsus.com') && (!mail.isRead) && (mail.sentAt) && (!mail.removedAt))

                setMails(mails)
                console.log(mails)
            })
            .catch(err => console.log('err:', err))

    }, [filterBy])


    function setIsStar(mail) {
        mail.isStar = !mail.isStar
        console.log(mail);
        mailService.save(mail)
        setRender(!render)

    }



    function onSetFilter(filterBy) {
        //setFilterBy(filterBy)
        setFilterBy(prevFilter => ({ ...prevFilter, ...filterBy }))
    }

    function onSetIsOpen() {
        setIsOpen(true)
    }

    function onSetIsClose() {
        setIsOpen(false)
    }

    function onRemoveMail(mail) {

        mail.removedAt = new Date().toString()
        console.log(mail);
        mailService.save(mail)
        showSuccessMsg('The Email was removed to the ricycle bin')
        setRender(!render)
    }

    function isRead(mail) {
        mail.isRead = !mail.isRead
        console.log(mail);
        mailService.save(mail)
        setRender(!render)
    }

    function isOpenMail(mail) {
        mail.isRead = true
        console.log(mail);
        mailService.save(mail)
        setRender(!render)
    }

    if (!mails) return <div>loading...</div>
    return (
        <section className="mail-index">
            <MailFilter onSetIsOpen={onSetIsOpen} />
            <section>
                <MailUpperFilter filterBy={filterBy} onSetFilter={onSetFilter} />
                <table className="mail-list">
                    <tbody>
                        {mails.map(mail =>
                            <tr key={mail.id} className={dynClassRead} >
                                <td onClick={() => setIsStar(mail)} className={"star"}>
                                    {mail.isStar ? (
                                        <i className="fa-solid fa-star" style={{ color: '#ffee00' }}></i>
                                    ) : (
                                        <i className="fa-solid fa-star"></i>
                                    )
                                    }
                                </td>
                                <td onClick={() => isOpenMail(mail)} style={{ 'fontWeight': (!mail.isRead) ? 'bold' : '' }}>
                                    {mail.fromName}
                                </td>
                                <td onClick={() => isOpenMail(mail)}><span style={{ 'fontWeight': (!mail.isRead) ? 'bold' : '' }} className="subject">{mail.subject}
                                    <LongTxt txt={mail.body} length={mail.body.length} /></span></td>
                                <td className="deliveryDate" style={{ 'fontWeight': (!mail.isRead) ? 'bold' : '' }}>{new Date(mail.sentAt).getDate() + ' / ' + new Date(mail.sentAt).getMonth()}</td>
                                <td>
                                    <button onClick={() => onRemoveMail(mail)} title="move to the ricycle bin"> <i className="fa-solid fa-trash"> </i></button>
                                    <button onClick={() => isRead(mail)} title="change to read/unread"><i className="fa-regular fa-envelope-open"></i></button>
                                    {/*<button onClick={() => onNote(mail.id)} title="send email to the note section"><i className="fa-solid fa-note-sticky"></i></button>*/}
                                </td>
                            </tr>)}
                    </tbody>
                </table>
                <SendNewMail isOpen={isOpen} onSetIsClose={onSetIsClose} />
            </section>
        </section>
    )
}




import { LongTxt } from '../cmps/LongTxt.jsx'
import { mailService } from "../services/mail.service.js"
import { MailUpperFilter } from "../cmps/MailUpperFilter.jsx"
import { MailFilter } from "../cmps/MailFilter.jsx"
import { SendNewMail } from '../cmps/SendNewMail.jsx'
import { showSuccessMsg } from '../../../services/event-bus.service.js'







const { useState, useEffect } = React
const { Outlet, Link } = ReactRouterDOM
const { useParams, useNavigate } = ReactRouterDOM



export function UnRead() {

    const [render, setRender] = useState(false)
    const [mails, setMails] = useState(null)
    const [filterBy, setFilterBy] = useState(mailService.getDefaultFilter())
    const [isOpen, setIsOpen] = useState(false)
    const [dynClassRead, setDynClassRead] = useState('')
    const [selectedMailId, setSelectedMailId] = useState(null)
    const [mailToEdit, setMailToEdit] = useState(mailService.getEmptyMail)




    useEffect(() => {

        mailService.query(filterBy)
            .then((mails) => {
                mails = mails.filter(mail => (mail.from !== 'user@appsus.com') && (!mail.isRead) && (mail.sentAt) && (!mail.removedAt))

                setMails(mails)
                console.log(mails)
            })
            .catch(err => console.log('err:', err))

    }, [filterBy])


    function setIsStar(mail) {
        mail.isStar = !mail.isStar
        console.log(mail);
        mailService.save(mail)
        setRender(!render)

    }



    function onSetFilter(filterBy) {
        //setFilterBy(filterBy)
        setFilterBy(prevFilter => ({ ...prevFilter, ...filterBy }))
    }

    function onSetIsOpen() {
        setIsOpen(true)
    }

    function onSetIsClose() {
        setIsOpen(false)
    }

    function onRemoveMail(mail) {

        mail.removedAt = new Date().toString()
        console.log(mail);
        mailService.save(mail)
        showSuccessMsg('The Email was removed to the ricycle bin')
        setRender(!render)
    }

    function isRead(mail) {
        mail.isRead = !mail.isRead
        console.log(mail);
        mailService.save(mail)
        setRender(!render)
    }

    function isOpenMail(mail) {
        mail.isRead = true
        console.log(mail);
        mailService.save(mail)
        setRender(!render)
    }

    if (!mails) return <div>loading...</div>
    return (
        <section className="mail-index">
            <MailFilter onSetIsOpen={onSetIsOpen} />
            <section>
                <MailUpperFilter filterBy={filterBy} onSetFilter={onSetFilter} />
                <table className="mail-list">
                    <tbody>
                        {mails.map(mail =>
                            <tr key={mail.id} className={dynClassRead} >
                                <td onClick={() => setIsStar(mail)} className={"star"}>
                                    {mail.isStar ? (
                                        <i className="fa-solid fa-star" style={{ color: '#ffee00' }}></i>
                                    ) : (
                                        <i className="fa-solid fa-star"></i>
                                    )
                                    }
                                </td>
                                <td onClick={() => isOpenMail(mail)} style={{ 'fontWeight': (!mail.isRead) ? 'bold' : '' }}>
                                    {mail.fromName}
                                </td>
                                <td onClick={() => isOpenMail(mail)}><span style={{ 'fontWeight': (!mail.isRead) ? 'bold' : '' }} className="subject">{mail.subject}
                                    <LongTxt txt={mail.body} length={mail.body.length} /></span></td>
                                <td className="deliveryDate" style={{ 'fontWeight': (!mail.isRead) ? 'bold' : '' }}>{new Date(mail.sentAt).getDate() + ' / ' + new Date(mail.sentAt).getMonth()}</td>
                                <td>
                                    <button onClick={() => onRemoveMail(mail)} title="move to the ricycle bin"> <i className="fa-solid fa-trash"> </i></button>
                                    <button onClick={() => isRead(mail)} title="change to read/unread"><i className="fa-regular fa-envelope-open"></i></button>
                                    {/*<button onClick={() => onNote(mail.id)} title="send email to the note section"><i className="fa-solid fa-note-sticky"></i></button>*/}
                                </td>
                            </tr>)}
                    </tbody>
                </table>
                <SendNewMail isOpen={isOpen} onSetIsClose={onSetIsClose} />
            </section>
        </section>
    )
}


