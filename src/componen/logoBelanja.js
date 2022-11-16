import logoTas from './../image/tas.png' //untuk import gambar
import '../index.css'
import './../font/Metropolis-ExtraBold.otf'



function GambarLogo() {
  return (
    <div className='d-flex'>
        <img alt="" src={logoTas} width="40" height="40" className="d-inline-block align-top"/>{' '}
        <h2 className="text-danger mx-2" style={{fontFamily :'ExtraBold'}}>Blanja</h2>
    </div>
  );
}

export default GambarLogo;

//untuk pemanggilan
//import GambarLogo from './logoBelanja';