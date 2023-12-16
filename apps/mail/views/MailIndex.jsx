import { mailService } from "../services/mail.service.js"

const { useState, useEffect } = React
const { Outlet, Link } = ReactRouterDOM
const { useParams, useNavigate } = ReactRouterDOM

export function MailIndex() {
    const [mails, setMails] = useState(null)
    const [filterBy, setFilterBy] = useState(mailService.getDefaultFilter())
    const [isOpen, setIsOpen] = useState(false)
   
    return (
        <section>
            <Outlet/>
        </section>
        )
}

