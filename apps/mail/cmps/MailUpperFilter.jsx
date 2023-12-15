const { useState, useEffect } = React



export function MailUpperFilter({filterBy,onSetFilter}){


    const [filterByToEdit, setFilterByToEdit] = useState(filterBy)

    
    useEffect(() => {
        onSetFilter(filterByToEdit)
    }, [filterByToEdit])


    function onSetFilterBy(ev){
        ev.preventDefault()
        onSetFilter(filterByToEdit)
    }

    function handleTxtChange({ target }) {
             const value = target.value
             setFilterByToEdit(prevFilterBy => ({ ...prevFilterBy, txt: value }))           
              }


    const { txt } = filterByToEdit

    return(
        <form className="search-box" onSubmit={onSetFilterBy}>
        <label htmlFor="txt" >search: </label>
        <input value={txt} onChange={handleTxtChange} tupe="text" id="txt" name="txt"/>
        <button><i className="fa-solid fa-magnifying-glass"></i></button>
        </form> 
    )
}