import {NavLink} from "react-router-dom";

const Navbar = () => {
    return (
        <header className='header'>
            <NavLink to={'/'} className='w-10 h-10 rounded-lg bg-white
            flex-center font-bold shadow-md'>
                <p className='blue-gradient_text'>IM</p>
            </NavLink>
           <nav className='flex text-sm lg:text-lg gap-7 font-medium'>
               <NavLink to={'/about'} className={({isActive}) => isActive? 'text-blue-500': 'text-black'}>
                   About
               </NavLink>
               <NavLink to={'/projects'} className={({isActive}) => isActive? 'text-blue-500': 'text-black'}>
                   Projects
               </NavLink>
               <NavLink to={'/contacts'} className={({isActive}) => isActive? 'text-blue-500': 'text-black'}>
                   Contacts
               </NavLink>
           </nav>
        </header>
    );
};

export default Navbar;