

export function MailFilter({onSetIsOpen}){



    /*function getPriceClass() {
        if (book.listPrice.amount > 150) return 'red'
        else if (book.listPrice.amount < 20) return 'green'
        else return ''
    }*/

    function openNewMassage(){
      //  setIsOpen(isOpen=true)
    }




    return(
        <section className="mail-filter">
            <h1 className="new-mail" onClick={onSetIsOpen}><i className="fa-solid fa-pen"></i> New Mail </h1>
            <ul>
            <li><button><i className="fa-solid fa-inbox"></i> inbox</button></li>
            <li><button><i className="fa-regular fa-envelope-open"></i> read</button></li>
            <li><button><i className="fa-regular fa-envelope"></i> unread</button></li>
            <li><button><i className="fa-regular fa-star"></i> marked with star </button></li>
            <li><button><i className="fa-solid fa-envelope-circle-check"></i> sent</button></li>
            <li><button><i className="fa-regular fa-note-sticky"></i> drafts</button></li>
            <li><button><i className="fa-solid fa-trash"></i> recycle bin </button></li>
            </ul>
        </section>
    )
}