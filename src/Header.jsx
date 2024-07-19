
import './Header.css';
import { CiSearch } from "react-icons/ci";
import Logo from './Logo';
import Mini from './MiniCard';


const Header = () => {
    return (
        <>

        <header>
        <nav>
            <div><Logo/></div>
            
            <div>
                <input type="text" className="barra-pesquisa" placeholder="Pesquisar Produtos..." />
            </div>

            <div className="pesquisa"><CiSearch/></div>

            <div className="div-container">
            <h4 className="texto"><u>Cadastre-se</u></h4>
            <div> <button className="botao">Entrar</button></div>
            <div><Mini/></div>
            <div className='circulo'>
                <p className='numero'>2</p>
            </div>
            </div>
   
        </nav>
        </header>
        
        <nav className="menu">
            <a href="#">Home</a>
            <a href="#">Produtos</a>
            <a href="#">Categorias</a>
            <a href="#">Meus pedidos</a>
        </nav>
    
            
        </>
    );
}
 
export default Header;