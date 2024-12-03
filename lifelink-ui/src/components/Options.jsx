import React from "react";

function Options(props) {
  
  return (
      <div className="bg-white rounded-lg shadow-lg p-3 transform hover:scale-105 hover:cursor-pointer transition-transform duration-300 ease-out hover:shadow-2xl mb-2">
        <h4 className="text-lg font-semibold text-gray-800 mb-2">{props.name}</h4>
        <p className="font-sans text-gray-600 text-sm">{props.description}</p>
      </div>
  );
}

export default Options;
