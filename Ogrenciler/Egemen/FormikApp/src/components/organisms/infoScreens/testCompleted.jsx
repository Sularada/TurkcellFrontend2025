import React, { useState } from "react";
import { useNavigate } from "react-router";

const TestResult = ({ customMessage }) => {
  const navigate = useNavigate();
  const [message, setMessage] = useState(
    "Teknik testi tamamladınız! 🎉 Değerlendirmelerimiz sonucunda sizinle iletişime geçeceğiz."
  );

  const handleClick = () => {
    navigate("/applications");
  };

  return (
    <div className="test-result">
      <div className="card">
        <span>
          <h2 className="d-inline-block">Tebrikler! </h2> 🎊
        </span>
        <p>{customMessage ? customMessage : message}</p>
        <button className="btn" onClick={handleClick}>
          Tamam
        </button>
      </div>
    </div>
  );
};

export default TestResult;
