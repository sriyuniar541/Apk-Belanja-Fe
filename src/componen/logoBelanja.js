import logoTas from './../image/tas.png' 
import '../index.css'
import './../font/Metropolis-ExtraBold.otf'


function GambarLogo() {
  return (
    <div className='d-flex'>
        <img alt="" src={logoTas} width="40" height="45" className="d-inline-block align-top"/>{' '}
        <h2 className="text-danger mx-2" style={{fontFamily :'ExtraBold', marginTop:'8px'}}><b>Blanja</b></h2>
    </div>
  );
}

export default GambarLogo;
