import React from "react";

interface props {
    data: any
}
const parseData: React.FC<props>  = ({data}) => {

    return (
        <div>
            <p>Hello World</p>
        </div>
    );

    for (let i = 0; i < data.length; i++) {
        console.log(data[i]);
    }
};

export default parseData;
