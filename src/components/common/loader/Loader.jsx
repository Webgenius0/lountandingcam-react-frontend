import "./loader.css";

export default function Loader() {
  document.body.style.overflow = "hidden";
  return (
    <div className="fixed top-0 left-0 w-full h-full z-50 backdrop-blur-sm flex items-center justify-center">
      <div className="dot-spinner">
        <div className="dot-spinner__dot"></div>
        <div className="dot-spinner__dot"></div>
        <div className="dot-spinner__dot"></div>
        <div className="dot-spinner__dot"></div>
        <div className="dot-spinner__dot"></div>
        <div className="dot-spinner__dot"></div>
        <div className="dot-spinner__dot"></div>
        <div className="dot-spinner__dot"></div>
      </div>
    </div>
  );
}
