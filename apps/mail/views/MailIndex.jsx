import { mailService } from "../services/mail.service.js"
import { MailList } from "../cmps/MailList.jsx"
import { MailFilter } from "../cmps/MailFilter.jsx"
import { MailUpperFilter } from "../cmps/MailUpperFilter.jsx"


const { useState, useEffect } = React

export function MailIndex() {

    const [mails, setMails] = useState(null)
    const [selectedMailId, setSelectedMailId] = useState(null)
    const [filterBy, setFilterBy] = useState(mailService.getDefaultFilter())
    const [isOpen, setIsOpen] = useState(false)



    useEffect(() => {
        mailService.query(filterBy)
        .then((mails) => {
            setMails(mails)
           console.log(mails)})
        .catch(err => console.log('err:', err))

},[filterBy])


function onSetFilter(filterBy) {
    //setFilterBy(filterBy)
    setFilterBy(prevFilter =>({...prevFilter,...filterBy}))
}

function onSetIsOpen(){
    setIsOpen(true)
}

if(!mails) return <div>loading...</div>
    return (<section className="mail-index">
        <MailFilter mails={mails} onSetIsOpen={onSetIsOpen}/>
        <div>
        <MailUpperFilter filterBy={filterBy} onSetFilter={onSetFilter} />
        <MailList mails={mails} setMails={setMails} isOpen={isOpen} setIsOpen={setIsOpen}/>
        </div>
        </section>)
}

