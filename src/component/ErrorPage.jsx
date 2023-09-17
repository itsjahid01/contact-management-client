import { Link, useRouteError } from "react-router-dom";

const ErrorPage = () => {
  const error = useRouteError();
  // console.log(error);
  return (
    <div className="flex justify-center items-center min-h-screen text-center">
      <div>
        <h1 className="text-6xl mb-3">{error.status}</h1>
        <p className="text-red-600 text-2xl mb-4">{error.data}</p>
        <Link to={"/"}>
          <button className="px-3 py-2 bg-blue-600 text-white rounded">
            Back to Home
          </button>
        </Link>
      </div>
    </div>
  );
};

export default ErrorPage;
