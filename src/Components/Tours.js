import tour1 from "../images/tour-1.jpeg";
import tour2 from "../images/tour-2.jpeg";
import tour3 from "../images/tour-3.jpeg";
import tour4 from "../images/tour-4.jpeg";
import tour5 from "../images/tour-5.jpeg";
import tour6 from "../images/tour-6.jpeg";

import Title from "./Title";
import { tours } from "../data";

const Tours = () => {
  return (
    <section className="section" id="tours">
      <Title title="featured" subTitle="tours" />

      <div className="section-center featured-center">
        {tours.map((data) => {
          const {
            id,
            img,
            icon,
            title,
            info,
            date,
            duration,
            price,
            location,
          } = data;
          return (
            <article className="tour-card" key={id}>
              <div className="tour-img-container">
                <img src={img} className="tour-img" alt="" />
                <p className="tour-date">{date}</p>
              </div>
              <div className="tour-info">
                <div className="tour-title">
                  <h4>{title}</h4>
                </div>
                <p>{info}</p>
                <div className="tour-footer">
                  <p>
                    <span>
                      <i className={icon}></i>
                    </span>{" "}
                    {location}
                  </p>
                  <p>{duration}</p>
                  <p>{price}</p>
                </div>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default Tours;
