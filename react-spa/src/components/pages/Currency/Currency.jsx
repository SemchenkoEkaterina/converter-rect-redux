import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import fetchCurrency from '../../../store/currency/utils';
import './Currency.scss';

function Currency() {

  const dispatch = useDispatch();
  
  const { currency } = useSelector((state) => state.currency);
  const currentCurrency = (currency != undefined)
    ? (currency.Valute)
    : (currency);

    let language = navigator ? (navigator.language ||
      navigator.systemLanguage ||
      navigator.userLanguage) : "ru";
      language = language.substr(0, 2).toLowerCase();

    const converterCurrency = (currentCurrency != undefined)
    ? {
      usd: {
        rub: currentCurrency.USD.Value,
        eur: currentCurrency.USD.Value/currentCurrency.EUR.Value
      },
      rub: {
        usd: 1 / currentCurrency.USD.Value,
        eur: 1 / currentCurrency.EUR.Value
      },
      eur: {
        rub: currentCurrency.EUR.Value,
        usd: currentCurrency.EUR.Value/currentCurrency.USD.Value
      }
    }
    : {};

    console.log(converterCurrency);

  useEffect(() => {
    dispatch(fetchCurrency());
  }, []);

  return (
    <>
      <div>
        <form>
        <div className="converter-currency">
            <ul className="converter-currency__menu">
              <li>
                <Link className="currency__links link" to='/'>Сonverter currency</Link>
              </li>
            </ul>
          </div>
          {(language==='ru' && currentCurrency != undefined) && <div class="courses">
								<div class="course-item card card-body">
									<div class="course-item-title">Курс USD</div>
									<div class="course-item-value" data-value="USD">{+converterCurrency.usd.rub.toFixed(2)}</div>
								</div>
								<div class="course-item card card-body">
									<div class="course-item-title">Курс EUR</div>
									<div class="course-item-value" data-value="EUR">{+converterCurrency.eur.rub.toFixed(2)}</div>
								</div>
							</div>}
              {(language==='en' && currentCurrency != undefined) && <div class="courses">
								<div class="course-item card card-body">
									<div class="course-item-title">Курс RUB</div>
									<div class="course-item-value" data-value="USD">{+converterCurrency.rub.usd.toFixed(2)}</div>
								</div>
								<div class="course-item card card-body">
									<div class="course-item-title">Курс EUR</div>
									<div class="course-item-value" data-value="EUR">{+converterCurrency.eur.usd.toFixed(2)}</div>
								</div>
							</div>}
        </form>
      </div>
    </>
  );
}

export default Currency;
