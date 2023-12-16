import { utilService } from '../../../services/util.service.js'
import { storageService } from '../../../services/async-storage.service.js'
import { storagesService } from '../../../services/storage.service.js'
const KEY = 'emailDB'
let gEmail=[]
//var gFilterBy = { txt: '', price: 0 }
//_createBooks()

export const mailService = {
    query,
    get,
    getEmptyMail,
    getDefaultFilter,
    save,
    remove, 
    /*getNextBookId,
    getFilterBy,
    setFilterBy,
    findBookIdx,*/
}

function query(filterBy) {
    return storageService.query(KEY)
    .then(mails => {
      if (!mails || !mails.length) {
          mails = gEmail
          
          _saveMailsToStorage()
      }
      if (filterBy.txt) {
        const regExp = new RegExp(filterBy.txt, 'i')
        mails = mails.filter(mail => (regExp.test(mail.subject) || regExp.test(mail.fromName) || regExp.test(mail.body)))
    }
    
      return mails
        })
}

function get(mailId) {
    return storageService.get(KEY, mailId)
}

function remove(mailId) {
  
    return storageService.remove(KEY, mailId)
}

function save(mail) {
    if (mail.id) {
        return storageService.put(KEY, mail)
    } else {
        return storageService.post(KEY, mail)
    }
}

function getEmptyMail(to='',subject = '', body = '') {
    return {
        subject: '',
        body: '',
        sentAt : new Date().toString(),
        from: 'user@appsus.com',
        fromName:'my user',
        to: '',
        }
}
/*
function getFilterBy() {
    return { ...gFilterBy }
}

function setFilterBy(filterBy = {}) {
    if (filterBy.txt !== undefined) gFilterBy.txt = filterBy.txt
    if (filterBy.minSpeed !== undefined) gFilterBy.minSpeed = filterBy.minSpeed
    return gFilterBy
}

function getNextBookId(bookId) {
    return storageService.query(BOOK_KEY)
        .then(books => {
            let nextBookIdx = books.findIndex(book => book.id === bookId) + 1
            if (nextBookIdx === books.length) nextBookIdx = 0
            return books[nextCarIdx].id
        })
}

function _createBooks() {
  /*  let books = utilService.loadFromStorage(BOOK_KEY)
    if (!books || !books.length) {
        gBooks.map((book) => {        console.log(book)

         // books.push(_createBook(book.title,book.listPrice.amount))})
        })
        console.log(books)
        
        utilService.saveToStorage(BOOK_KEY, books)
    }*/


/*function _createBook(title, price) {
    const book = getEmptyBook(title, price)
    book.id = utilService.makeId()
    return book
}

function findBookIdx(bookId)
{
  //console.log(bookId)
  return storageService.query(BOOK_KEY)
        .then(books => {
  let idx=books.findIndex(book => book.id === bookId) + 1
  //console.log(idx)
  return idx
        })
}*/

function getDefaultFilter(){
  return {txt: '', folder:'inbox'}
}


function _saveMailsToStorage() {
  storageService.save(KEY, gEmail)
}


gEmail= [
     {
        id: 'e101',
        subject: 'Miss you!',
        body: 'Would love to catch up sometimes',
        isRead: false,
        sentAt : 1552573930594,
        removedAt : null,
        from: 'momo@momo.com',
        fromName:'momo or',
        to: 'user@appsus.com',
        isStar:false,
        },
    {
        id: 'e102',
        subject: 'your Invoice is here',
        body: 'please open the link below',
        isRead: true,
        sentAt : 1552350920594,
        removedAt : null,
        from: 'yes-service@co.il',
        fromName:'YES',
        to: 'user@appsus.com',
        isStar:true,

        },
    {
        id: 'e103',
        subject: 'Hello!',
        body: utilService.makeLorem(50),
        isRead: true,
        sentAt : 1552233810594,
        removedAt : null,
        from: 'danF@momo.com',
        fromName:'dan fer',
        to: 'user@appsus.com',
        isStar:false,

        },
{
        id: 'e104',
        subject: 'Your bill is here',
        body: 'It is waiting for you in the link below',
        isRead: true,
        sentAt : 1552123790594,
        removedAt : null,
        from: 'service@momo.com',
        fromName:'ServiceMail',
        to: 'user@appsus.com',
        isStar:true,

        },
        {
        id: 'e105',
        subject: 'We have new products and new sales',
        body: 'You can chack our website',
        isRead: false,
        sentAt : 1552013640594,
        removedAt : null,
        from: 'Super-Pharm@Super-Pharm.com',
        fromName:'Super-Pharm',
        to: 'user@appsus.com',
        isStar:false,

        },
     {
        id: 'e106',
        subject: 'Hello my friend!',
        body: utilService.makeLorem(100),
        isRead: true,
        sentAt : 1551883600594,
        removedAt : null,
        from: 'Shir@Shir.com',
        fromName:'Shir Odel',
        to: 'user@appsus.com',
        isStar:false,

        },
         {
        id: 'e107',
        subject: 'Miss you!',
        body: utilService.makeLorem(20),
        isRead: false,
        sentAt : 1551463580594,
        removedAt : null,
        from: 'Shir@Shir.com',
        fromName:'Shir Odel',
        to: 'user@appsus.com',
        isStar:false,

        },
         {
        id: 'e108',
        subject: 'Shabat Shalom',
        body: utilService.makeLorem(50),
        isRead: true,
        sentAt : 1551345500594,
        removedAt : null,
        from: 'Shir@Shir.com',
        fromName:'Shir Odel',
        to: 'user@appsus.com',
        isStar:false,

        },
         {
        id: 'e109',
        subject: 'Thank you for buying here',
        body: 'your recipt is here',
        isRead: false,
        sentAt : 1551233440594,
        removedAt : null,
        from: 'Super-Pharm@Super-Pharm.com',
        fromName:'Super-Pharm',
        to: 'user@appsus.com',
        isStar:true,

        },
         {
        id: 'e110',
        subject: 'Information',
        body: 'The information you wanted is here, in the link below:',
        isRead: false,
        sentAt : 1551120330594,
        removedAt : null,
        from: 'ServiceMail@ServiceMail.com',
        fromName:'ServiceMail',
        to: 'user@appsus.com',
        isStar:false,
        }
    ,
{
    id: 'e111',
    subject: 'Miss you!',
    body: utilService.makeLorem(20),
    isRead: false,
    sentAt : 1551463580594,
    removedAt : null,
    from: 'user@appsus.com',
    fromName:'user',
    to: 'Shir Odel',
    isStar:false,

    },
     {
    id: 'e112',
    subject: 'Shabat Shalom',
    body: utilService.makeLorem(50),
    isRead: false,
    sentAt : 1551345500594,
    removedAt : null,
    from: 'user@appsus.com',
    fromName:'user',
    to: 'Dana or',
    isStar:false,

    },
     {
    id: 'e113',
    subject: 'Updating Info',
    body: 'Hi,I want to update my info',
    isRead: false,
    sentAt : 1551233440594,
    removedAt : null,
    from: 'user@appsus.com',
    fromName:'user',
    to: 'Super-Pharm',
    isStar:false,

    },
     {
    id: 'e114',
    subject: 'Information',
    body: 'The information you wanted is here, in the link below:',
    isRead: false,
    sentAt : 1551120330594,
    removedAt : null,
    from: 'user@appsus.com',
    fromName:'user',
    to: 'ServiceMail',
    isStar:false,
    }
    ,
    {
        id: 'e113',
        subject: 'Updating Info',
        body: 'Hi,I want to update my info',
        isRead: false,
        sentAt : null,
        removedAt : null,
        from: 'user@appsus.com',
        fromName:'user',
        to: 'Super-Pharm',
        isStar:false,
    
        },
         {
        id: 'e114',
        subject: 'Information',
        body: 'The information you wanted is here, in the link below:',
        isRead: false,
        sentAt : null,
        removedAt : null,
        from: 'user@appsus.com',
        fromName:'user',
        to: 'ServiceMail',
        isStar:false,
        }
]