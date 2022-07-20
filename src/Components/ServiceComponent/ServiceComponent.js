import "./ServiceComponent.style.scss";
import ButtonComponent from "../ButtonComponent/ButtonComponent";

const ServiceComponent = () => {
  return (
    <section >
      <h2>our Services</h2>
      <div className="wrapper row">
        <div className="service-card">
          <img
            className="service-img"
            src={process.env.PUBLIC_URL + `/images/b2.jpg`}
            alt="buycar"
          />
          <div className="footer-card">
            <h3> buy a car</h3>
            <ButtonComponent solid='btn' text="Browse all" />
          </div>
        </div>

        <div className="service-card">
          <img
            className="service-img"
            src={process.env.PUBLIC_URL + `/images/l1.jpg`}
            alt="buycar"
          />
          <div className="footer-card">
            <h3> sell your car</h3>
            <ButtonComponent solid='btn' text="Get an offer" />
          </div>
        </div>

        <div className="service-card">
          <img
            className="service-img"
            src={process.env.PUBLIC_URL + `/images/b1.jpg`}
            alt="buycar"
          />
          <div className="footer-card">
            <h3> rent a car</h3>
            <ButtonComponent solid='btn' text="View Deal" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceComponent;
