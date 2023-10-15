//
import data2 from "../../__mock__/data2";
import "./Browse.css";

const Browse = () => {
  return (
    <div className="browse">
      <div className="browse-in">
        {data2.map((el, idx) => {
          return (
            <div key={idx} className="browse-child">
              <div className="browse-child-top">
                <img className="brow-bg"  src={`./public/images/brow-${el.id}.png`} alt="" />
                <img className="brow-bg-pos" src={`./public/images/pos-${el.id}.png`} alt="" />
              </div>

              <div className="browse-child-bottom">
                <p>{el.name}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Browse;
