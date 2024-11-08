import { useSelector } from "react-redux";
import "./LoadingBox.css";

const LoadingBoxAnimation = () => {
  const { isBoxVisible, boxMessage } = useSelector((state) => state.loader);

  if (!isBoxVisible) {
    return null; // If not loading, don't render anything
  }

  return (
    <div className="loading-boxoverlay">
      <span className="boxloader"></span>
      {/* <div style={{ fontSize: 20 }}>{boxMessage}</div> */}
    </div>
  );
};

export default LoadingBoxAnimation;
