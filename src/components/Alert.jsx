import React, { useEffect } from "react";

export default function Alert({ message, onClose }) {
  useEffect(() => {
    const timer = setTimeout(onClose, 2000);
    return () => clearTimeout(timer);
  }, [onClose]);

  return (
    <div className="alert-box">
      {message}
    </div>
  );
}
