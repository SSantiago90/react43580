import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function NotFoundPage() {
  let navigateTo = useNavigate();

  useEffect(() => {
    setTimeout(() => {
      navigateTo(-1);
    }, 2000);
  }, []);

  return (
    <div>
      <h1>404: Page not found</h1>
      <small>Serás redirigido a la homepage en breve.</small>
    </div>
  );
}

export default NotFoundPage;
