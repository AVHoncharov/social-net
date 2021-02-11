import React from 'react';
import preloader from "../../../assets/images/loading-imdicator.gif";
import style from './Preloader.module.css' 

let Preloader = (props) => {
  return (
    <div>
      <img src={preloader}  className={style.preloader}/>
    </div>
  );
};

export default Preloader;
