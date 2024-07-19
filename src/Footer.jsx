import Face from './Facebook';
import './Footer.css';
import Instagram from './Instagram';
import Logof from './Logofooter';
import Twitter from './Twitter';
const Footer = () => {
    return (
        <>
            <footer>
                <div className='container'>
                    <div><Logof/></div>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. <br /> 
                    Qui distinctio eius recusandae, nemo corporis ut accusantium! <br /> 
                    Nesciunt beatae voluptatum quibusdam ab tenetur, laborum dolore,<br />
                    quisquam rem, fugit doloribus provident quos.</p>

                    <div className='container-icons'>
                        <div><Face/></div>
                    <div><Instagram/></div>
                    <div><Twitter/></div>
                    </div>
                </div>

                <section className='informacoes'>
                    <h4>informações</h4>
                    <ul>
                        <li>Sobre Drip Store</li>
                        <li>Segurança</li>
                        <li>Wishlist</li>
                        <li>Blog</li>
                        <li>Trabalhe conosco</li>
                        <li>Meus pedidos</li>
                    </ul>
                </section>

                <section className='informacoes1'>
                    <h4>Categorias</h4>
                    <ul className='u1'>
                        <li>Camisetas</li>
                        <li>Calças</li>
                        <li>Bonés</li>
                        <li>Headphones</li>
                        <li>Tênis</li>
                    </ul>
                </section>

                <section className='informacoes2'>
                    <h4>Contato</h4>
                    <ul className='u2'>
                        <li><p>Av. Santos Dumont, 1510-1 <br />andar - Aldeota, Fortaleza - <br /> CE, 60150-161</p></li>
                        <li>(85) 3051-3411</li>
                    </ul>
    
                </section>

                <div className='linha'></div>

                <div className='reserva'>
                    <p>© 2024 Digital College</p>

                    </div>

             
            </footer>
        </>
    );
}
 
export default Footer;