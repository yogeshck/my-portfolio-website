import {BsLinkedin} from 'react-icons/bs'
import {FaGithub} from 'react-icons/fa'
import {FaHackerrank} from 'react-icons/fa'

const HeaderSocials = () => {
    return ( 
        <div className="header__socials">
            <a href="https://linkedin.com/in/yogeshck" target="_blank"><BsLinkedin/></a>
            <a href="https://github.com/in/yogeshck" target="_blank"><FaGithub/></a>
            <a href="https://hackerrank.com" target="_blank"><FaHackerrank/></a>
        </div>
    );
}
 
export default HeaderSocials;