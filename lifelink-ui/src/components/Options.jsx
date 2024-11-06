import React from "react";


function Options(props) {
    const helpList = props.options?.map((option) => (
        <div id={ option.id } key={ option.id } className="options__item">
            <h4>{ option.name }</h4> 
            <p className="options__text">{ option.description }</p>
        </div>
  ));

    return (
        <div className="options__div">
            { helpList }
        </div>
    )
}

export default Options;