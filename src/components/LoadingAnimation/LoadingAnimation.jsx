import { useSelector } from "react-redux";
import "./LoadingAnimation.css";

const LoadingAnimation = () => {
  const { isVisible, message } = useSelector((state) => state.loader);

  if (!isVisible) {
    return null; // If not loading, don't render anything
  }

  return (
    <div className="loading-overlay">
      <span className="loader"></span>
      <div style={{ fontSize: 20 }}>{message}</div>
    </div>
  );
};

export default LoadingAnimation;
