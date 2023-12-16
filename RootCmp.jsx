const { Route, Routes } = ReactRouterDOM
const Router = ReactRouterDOM.HashRouter

import { AppHeader } from "./cmps/AppHeader.jsx"
import { About } from "./views/About.jsx"
import { Home } from "./views/Home.jsx"
import { MailIndex } from "./apps/mail/views/MailIndex.jsx"
import { NoteIndex } from "./apps/note/views/NoteIndex.jsx"
import { PinnedNotes } from "./apps/note/views/PinnedNotes.jsx"
import { Inbox } from "./apps/mail/cmps/inbox.jsx"
import { Read } from "./apps/mail/cmps/Read.jsx"
import { UnRead } from "./apps/mail/cmps/UnRead.jsx"
import { Marked } from "./apps/mail/cmps/Marked.jsx"
import { Drafts } from "./apps/mail/cmps/Drafts.jsx"
import { Sent } from "./apps/mail/cmps/Sent.jsx"
import { Ricycle } from "./apps/mail/cmps/Ricycle.jsx"
import { UserMsg } from "./cmps/UserMsg.jsx"



export function App() {
    return (
    <Router>
        <section className="app">
            <AppHeader />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/mail" element={<MailIndex />} >
                    <Route path="cmps/inbox" element={<Inbox/>}/>
                    <Route path="cmps/read" element={<Read />} />
                    <Route path="cmps/unread" element={<UnRead />} />
                    <Route path="cmps/marked" element={<Marked />} />
                    <Route path="cmps/drafts" element={<Drafts />} />
                    <Route path="cmps/sent" element={<Sent />} />
                    <Route path="cmps/ricycle" element={<Ricycle />} />
                    
                </Route>
                <Route path="/note" element={<NoteIndex />} />
                <Route path="/note/pinned" element={<PinnedNotes />} />
                
            </Routes>
            <UserMsg/>
        </section>
    </Router>)
}