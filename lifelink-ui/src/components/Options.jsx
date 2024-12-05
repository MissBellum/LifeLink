import React from "react";

function Options(props) {
  const helpList = props.options?.map((option) => (
    <div
      id={option.id}
      key={option.id}
      className="options__item bg-white rounded-lg shadow-lg p-3 transform hover:scale-105 transition-transform duration-300 ease-out hover:shadow-2xl mb-2">
      <h4 className="text-lg font-semibold text-gray-800 mb-2">{option.name}</h4>
      <p className="options__text font-sans text-gray-600 text-sm">{option.description}</p>
    </div>
  ));

  return (
    <div className="options__div grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 gap-4 p-2 mb-10">
      { helpList }
    </div>
  );
}

export default Options;
