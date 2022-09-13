import React from 'react';

const Country = (props) => {
    const {name,region,population,flag}=props.country;
    const handlerCountryAdd = props.handlerCountryAdd;
    console.log(props.country);
    const flagStyle ={height :'50px'};
    const countryStyle ={border:'1px solid red',margin:'15px',padding:'15px'}
    return (
        <div style={countryStyle}>
            <h3>This is {name}.</h3>
            <img style={flagStyle} src={flag} alt="" />
            <p>Population : {population}</p>
             <p><small>Region Name : {region}</small></p>
             <button onClick={()=>handlerCountryAdd(props.country)} >Add Country</button>
          
        </div>
    );
};

export default Country;