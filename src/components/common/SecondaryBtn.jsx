import { Link } from "react-router";

export default function SecondaryBtn({
  text,
  to,
  className = "",
  onClick,
  varient,
}) {
  return (
    <>
      {varient == "button" ? (
        <button
          onClick={onClick}
          className={`rounded-full border px-4 py-3 border-primary hover:bg-secondary cursor-pointer duration-300 text-primary font-semibold ${className}`}
        >
          {text}
        </button>
      ) : (
        <Link
          to={to}
          className={`rounded-full border px-4 py-3 border-primary hover:bg-secondary cursor-pointer duration-300 text-primary font-semibold ${className}`}
        >
          {text}
        </Link>
      )}
    </>
  );
}
