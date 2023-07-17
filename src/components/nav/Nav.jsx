import './nav.css'
import {AiOutlineHome} from 'react-icons/ai'
import {AiOutlineUser} from 'react-icons/ai'
import {AiFillBook} from 'react-icons/ai'
import {MdMiscellaneousServices} from 'react-icons/md'
import {MdPermContactCalendar} from 'react-icons/md'


const Nav = () => {
    return (
        <nav>
            <a href='#'><AiOutlineHome/></a>
            <a href='#about'><AiOutlineUser/></a>
            <a href='#experience'><AiFillBook/></a>
            <a href='#services'><MdMiscellaneousServices/></a>
            <a href='#contact'><MdPermContactCalendar/></a>
        </nav>
    );
}
 
export default Nav;
