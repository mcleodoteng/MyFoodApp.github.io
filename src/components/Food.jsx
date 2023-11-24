import PropTypes from "prop-types";

const Food = (props) => {
  return (
    <div
      style={{
        backgroundImage: `url(${props.bgImage})`,
      }}
      className="w-full h-screen bg-no-repeat bg-center bg-cover"
    >
      <div className="w-full h-full grid md:grid-cols-2 grid-cols-1">
        <div
          className="bg-no-repeat bg-center bg-cover"
          style={{
            backgroundImage: `url(${props.bgImage1})`,
          }}
        ></div>
        <div
          className="bg-no-repeat bg-center bg-cover"
          style={{
            backgroundImage: `url(${props.bgImage2})`,
          }}
        ></div>
      </div>
    </div>
  );
};

export default Food;
Food.propTypes = {
  bgImage1: PropTypes.element.isRequired,
  bgImage2: PropTypes.element.isRequired,
  bgImage: PropTypes.element.isRequired,
};
