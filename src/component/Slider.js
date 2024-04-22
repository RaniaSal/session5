import './Slider.css';
function Slider(){
    return(
        <>
        <div id="carouselExampleIndicators" className="carousel slide">
  <div className="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSmubXldMm09NKIbfC0TxTVnT542PgP4MLkPzih-CIWyCsTNRRSITu4d4xWvAgpDgZPmC4&usqp=CAU" className="d-block w-100 heigh-300" alt="..."/>
    </div>
    <div className="carousel-item">
      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSTcRlZbrb6ILjndMut1XWRlrDwtyh2ZazSGa3k6lswgcnQg6_urUgoyazDCDNHe76Bi8s&usqp=CAU" className="d-block w-100 heigh-300" alt="..."/>
    </div>
    <div className="carousel-item">
      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_7RYqjNbsgs6Nhp7z4dIEp56TC2gZY-R1Mde1A1A9hSpG-deM-LKfLPrDpexwMdY3dro&usqp=CAU" className="d-block w-100 heigh-300" alt="..."/>
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>

        </>
    );
}
export default Slider;