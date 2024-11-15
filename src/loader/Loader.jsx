import "./PageLoader.css";

const Loader = () => {
  return (
    <div id="loader" className="loader_page">
      <div
        style={{ display: "flex", margin: "auto", justifyContent: "center" }}
        className="page-loader-main"
      >
        {/* <Stars number={2000} /> */}
        <div className="hexagon" aria-label="Animated hexagonal ripples">
          <div className="hexagon__group">
            <div className="hexagon__sector"></div>
            <div className="hexagon__sector"></div>
            <div className="hexagon__sector"></div>
            <div className="hexagon__sector"></div>
            <div className="hexagon__sector"></div>
            <div className="hexagon__sector"></div>
          </div>
          <div className="hexagon__group">
            <div className="hexagon__sector"></div>
            <div className="hexagon__sector"></div>
            <div className="hexagon__sector"></div>
            <div className="hexagon__sector"></div>
            <div className="hexagon__sector"></div>
            <div className="hexagon__sector"></div>
          </div>
          <div className="hexagon__group">
            <div className="hexagon__sector"></div>
            <div className="hexagon__sector"></div>
            <div className="hexagon__sector"></div>
            <div className="hexagon__sector"></div>
            <div className="hexagon__sector"></div>
            <div className="hexagon__sector"></div>
          </div>
          <div className="hexagon__group">
            <div className="hexagon__sector"></div>
            <div className="hexagon__sector"></div>
            <div className="hexagon__sector"></div>
            <div className="hexagon__sector"></div>
            <div className="hexagon__sector"></div>
            <div className="hexagon__sector"></div>
          </div>
          <div className="hexagon__group">
            <div className="hexagon__sector"></div>
            <div className="hexagon__sector"></div>
            <div className="hexagon__sector"></div>
            <div className="hexagon__sector"></div>
            <div className="hexagon__sector"></div>
            <div className="hexagon__sector"></div>
          </div>
          <div className="hexagon__group">
            <div className="hexagon__sector"></div>
            <div className="hexagon__sector"></div>
            <div className="hexagon__sector"></div>
            <div className="hexagon__sector"></div>
            <div className="hexagon__sector"></div>
            <div className="hexagon__sector"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Loader;