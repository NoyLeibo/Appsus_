const { Link, NavLink } = ReactRouterDOM


export function Home() {
  return (
    <div className="container">

        <div className="background-image">
           <h1>Welcome to the Appsus app</h1>
           <h3>What would you like to do?</h3>
           <nav>
            <NavLink className="nav" to="/mail/cmps/inbox">Go to the email</NavLink>
            <NavLink className="nav" to="/note">Go to the notes</NavLink>
        </nav>
        </div>
    </div>
  );
}


