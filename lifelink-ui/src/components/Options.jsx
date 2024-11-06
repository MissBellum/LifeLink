import React from "react";


function Options(props) {
    const helpList = props.options?.map((option) => (
        <div id={ option.id } key={ option.id } className="option__item">
            <h4>{ option.name }</h4>
            <p>{ option.description }</p>
        </div>
  ));

    return (
        <div className="option__div">
            { helpList }
        </div>
    )
}

export default Options;