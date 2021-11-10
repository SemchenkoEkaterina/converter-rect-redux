import React, { useEffect } from 'react';
import { useSelector, useDispatch  } from 'react-redux';
import fetchCurrency from '../../../store/currency/utils';
import './Currency.scss';

function Currency() {
 const dispatch = useDispatch();
 
  const { currency } = useSelector((state) => state.currency);

  
   //console.log(currency);
 const currentCurrency = (currency != undefined)
 ? (currency.Valute)
 : (currency);
  console.log(currentCurrency);
  /*const onUpdate = () => {

    const statusObj = {
      statuses: statusArr,
      from: (startDate.length === 0) ? ('') : (startDate.target.value),
      to: (endDate.length === 0) ? ('') : (endDate.target.value),
      sort: dateSort.order && dateSort.order.map((el) => `${el},${dateSort[el]}`),
    };
    dispatch(fetchCurrency(`?${stringify(statusObj, { skipNull: true }).replace(/%2C/g, ',')}`));
  };*/

  useEffect(() => {
    dispatch(fetchCurrency());
  }, []);

  //console.log(currentCurrency);
  return (
    <>
      <div>
        
     </div>
    </>
  );
}

export default Currency;
