import React, { createContext, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export const GlobalContext = createContext();

export const GlobalProvider = (props) => {
  let navigate = useNavigate();
  const [data, setData] = useState(null);
  const [count, setCount] = useState(null);
  const [fetchStatus, setFetchStatus] = useState(true);

  const handleDesc = (params) => {
    var desc = params.slice(0, 200);
    return desc + " ...";
  };
  
  function convertToRupiah(angka)
  {
    var rupiah = '';		
    var angkarev = angka.toString().split('').reverse().join('');
    for(var i = 0; i < angkarev.length; i++) if(i%3 == 0) rupiah += angkarev.substr(i,3)+'.';
    return 'Rp. '+rupiah.split('',rupiah.length-1).reverse().join('');
  }


  let state = {
    data,
    setData,
    fetchStatus,
    setFetchStatus,
    count,
    setCount,
    handleDesc,
  };

  return (
    <GlobalContext.Provider
      value={{
        state,
      }}
    >
      {props.children}
    </GlobalContext.Provider>
  );
};
