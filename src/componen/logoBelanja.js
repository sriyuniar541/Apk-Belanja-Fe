import logoTas from './../image/tas.png' //untuk import gambar



function GambarLogo() {
  return (
    <div className='d-flex'>
        <img alt="" src={logoTas} width="40" height="40" className="d-inline-block align-top"/>{' '}
        <h2 className="text-danger mx-2">Blanja</h2>
    </div>
  );
}

export default GambarLogo;

//untuk pemanggilan
//import GambarLogo from './logoBelanja';