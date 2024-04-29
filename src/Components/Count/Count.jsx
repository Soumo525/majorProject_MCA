import React, { useEffect } from 'react';

function Count() {
  useEffect(() => {
    let valueDisplays = document.querySelectorAll(".num");
    let interval = 4000;

    valueDisplays.forEach((valueDisplay) => {
      let startValue = 0;
      let endValue = parseInt(valueDisplay.getAttribute("data-val"));
      let duration = Math.floor(interval / endValue);
      let counter = setInterval(function () {
        startValue += 1;
        valueDisplay.textContent = startValue;
        if (startValue === endValue) {
          clearInterval(counter);
        }
      }, duration);
    });
  }, []);

  return (
    <div className="flex justify-center mt-10">
      <div className="flex">
        <div className="flex flex-col items-center m-4">
          <i className="fas fa-utensils text-3xl"></i>
          <span className="num" data-val="500">000</span>
          <span className="text">STUDENTS</span>
        </div>
        <div className="flex flex-col items-center m-4">
          <i className="fas fa-smile-beam text-3xl"></i>
          <span className="num" data-val="540">000</span>
          <span className="text">BOOKS & JOURNALS</span>
        </div>
        <div className="flex flex-col items-center m-4">
          <i className="fas fa-list text-3xl"></i>
          <span className="num" data-val="75">000</span>
          <span className="text">LABORATORIES</span>
        </div>
        <div className="flex flex-col items-center m-4">
          <i className="fas fa-star text-3xl"></i>
          <span className="num" data-val="1000">000</span>
          <span className="text">STRONG ALUMNI</span>
        </div>
      </div>
    </div>
  );
}

export default Count;
