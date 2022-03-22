import react from 'react';
import { AiOutlineLinkedin } from 'react-icons/ai';
import { AiOutlineGithub } from 'react-icons/ai';

const Footer = () => {
    return (
        <footer className='footer'>
            <div> <AiOutlineGithub /> <AiOutlineLinkedin /></div>
        </footer>
    )
}

export default Footer;