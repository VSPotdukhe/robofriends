import React from "react";

const Scroll = (props) => {
    return (
        <div style={{ overflowY: 'scroll', border: '5px solid black', height: '800px' }}>
            {props.children}
        </div>
    );
    //console.log(props);
    //return props.children;
};

export default Scroll;