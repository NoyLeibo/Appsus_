
const {  Link } = ReactRouterDOM

export function MailFilter({onSetIsOpen}){



    /*function getPriceClass() {
        if (book.listPrice.amount > 150) return 'red'
        else if (book.listPrice.amount < 20) return 'green'
        else return ''
    }*/

    



    return(
        <section className="mail-filter">
            <h1 className="new-mail" onClick={onSetIsOpen}><i className="fa-solid fa-pen"></i> New Mail </h1>
            <ul>
            <li><button><Link to="../cmps/inbox"><i className="fa-solid fa-inbox"></i> Inbox</Link></button></li>
            <li><button><Link to="../cmps/read"><i className="fa-regular fa-envelope-open"></i> Read</Link></button></li>
            <li><button><Link to="../cmps/unread"><i className="fa-regular fa-envelope"></i> Unread</Link></button></li>
            <li><button><Link to="../cmps/marked"><i className="fa-regular fa-star"></i> Marked</Link></button></li>
            <li><button><Link to="../cmps/sent"><i className="fa-solid fa-envelope-circle-check"></i> Sent</Link></button></li>
            <li><button><Link to="../cmps/drafts"><i className="fa-regular fa-note-sticky"></i> Drafts</Link></button></li>
            <li><button><Link to="../cmps/ricycle"><i className="fa-solid fa-trash"></i> Recycle bin </Link></button></li>
            </ul>
        </section>
    )
}