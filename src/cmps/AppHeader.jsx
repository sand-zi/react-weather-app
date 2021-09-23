import { NavLink } from 'react-router-dom'

export const AppHeader = () => {
    return (
        <header className='app-header'>
        <nav className='main-nav'>
         <ul className="flex auto-center clean-list column-gap">
             <li><NavLink className="main-link" exact to='/'>Home</NavLink></li>
             <li><NavLink className="main-link" to='/favorites'>Favorites</NavLink></li>
          
         </ul>
        </nav>
    </header>
    )
}