import logo from './logo.svg';
import background from './uploads/t.jpg';
import './App.css';
function App() {
  return (
   <>
    <nav className="navbar fixed-top navbar-expand-lg navbar-light bg-light">
  <div className="container">
    <a className="navbar-brand" href="/"><img src={logo}/></a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="/">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/">about</a>
        </li>
      </ul>
      <form className="d-flex">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button className="btn btn-outline-success" type="submit">Search</button>
      </form>
    </div>
  </div>
</nav>
<section className='slider'>
<div id="carouselExampleControls" class="carousel slide" data-ride="carousel">
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img className="d-block w-100" src={background} alt="First slide"/>
    </div>
    <div className="carousel-item">
      <img className="d-block w-100" src="" alt="Second slide"/>
    </div>
    <div className="carousel-item">
      <img className="d-block w-100" src="" alt="Third slide"/>
    </div>
  </div>
  <a className="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="sr-only">Previous</span>
  </a>
  <a className="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="sr-only">Next</span>
  </a>
  
</div>
</section>
<div className='text'>
<h1>The World Best Traval Website</h1>
<p>the best solutions to choose your best</p>
<button type='button' className='btn btn-warning'>read More</button>
</div>

   </>
  );
}

export default App;
