import React, { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

function PageNotFound() {
  let navigate = useNavigate();
  let [autoRedirect, setAutoRedirect] = React.useState(5);

  useEffect(() => {
    let timer = setInterval(() => {
      setAutoRedirect((prev) => prev - 1);
    }, 1000);

    return () => {
      clearInterval(timer);
    };
  }, []);

  useEffect(() => {
    if (autoRedirect === 0) {
      navigate();
    }
  }, [autoRedirect]);
  return (
    <div>
      This Page is not found , click
      <Link to="/">Here</Link>
      for home page
      <p>Page will redirect in {autoRedirect} sec</p>
    </div>
  );
}

export default PageNotFound;

// The advanced hooks.
// The context service.
// Next will be Redux and Thunk.
// Authentication and authorizations.
// internationalization.
// Lazy loading and code splitting.
// Testing in React.
