import Logo from '../assets/LogoAutomatas.png';
import '../Styles/Header.css'

function Header() {
    return(
        <>
        <div className='headerCont'>
            <div className="brand">
                <img src={Logo} alt="" />
                <h1>Token Inspector</h1>
            </div>
        </div>
        </>
    )
}

export default Header;