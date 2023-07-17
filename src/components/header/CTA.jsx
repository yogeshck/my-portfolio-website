import CV from '../../assests/CV.docx'

const CTA = () => {
    return ( 
        <dir className="cta">
            <a href={CV} download className='btn'> Download CV</a>
            <a href="#contact" className='btn btn-primary'>Let's Talk</a>
        </dir>
     );
}
 
export default CTA;