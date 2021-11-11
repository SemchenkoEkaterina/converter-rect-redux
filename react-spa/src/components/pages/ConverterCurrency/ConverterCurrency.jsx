import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import fetchCurrency from '../../../store/currency/utils';
import Input from '../../controls/Input/Input';
import './ConverterCurrency.scss';

function Currency() {

  const dispatch = useDispatch();

  const [converter, setConverter] = useState('');
  const [converterDirty, setConverterDirty] = useState(false);
  const [converterError, setConverterError] = useState('Поле не может быть пустым');

  const converterRegex = /^(([0-9])+( )+(rub|usd|eur)+( in )+(rub|usd|eur))$/;

  const blurHendler = (e) => {
    switch (e.target.name) {
      case 'converterText':
        setConverterDirty(true)
        break
    }
  }
  const converterHendler = (e) => {
    setConverter(e.target.value);
    if (!converterRegex.test(String(e.target.value).toLowerCase())) {
      setConverterError('Некоректное поле ввода')
    } else {
      setConverterError('')
    }
  }

  const { currency } = useSelector((state) => state.currency);
  const currentCurrency = (currency != undefined)
    ? (currency.Valute)
    : (currency);
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

  const [converterValue, setConverterValue] = useState('');
  const [converterEnter, setConverterEnter] = useState(false);

  const handleKeyDown = (event) => {

    if (event.key === 'Enter') {
      setConverterEnter(true);
      switch (event.target.name) {
        case 'converterText':
          setConverterDirty(true)
          break
      }
      setConverter(event.target.value);
      if (!converterRegex.test(String(event.target.value).toLowerCase())) {
        setConverterError('Некоректное поле ввода')
        setConverterValue('');
      } else {
        setConverterError('')
        const [amount, curFrom, to, curTo] = event.target.value.split(' ');
        setConverterValue(String(Number(amount) * converterCurrency[curFrom][curTo]));
      }
    }
  }

  useEffect(() => {
    dispatch(fetchCurrency());
  }, []);

  return (
    <>
      <div>
        <form>
          <div className="currency">
            <ul className="currency__menu">
              <li>
                <Link className="currency__links link" to='/currency'>Сurrency rate</Link>
              </li>
            </ul>
          </div>
          <div className="converter-container">
          <Input
            className="converter-form__item converter-form__item__input"
            type="text"
            label='Converter: '
            value={converter}
            placeholder='100 rub in usd'
            displayAsterisk
            name="converterText"
            onChange={(e) => converterHendler(e)}
            onBlur={(e) => blurHendler(e)}
            onKeyPress={(e) => handleKeyDown(e)}
          />

          {(converterDirty && converterError) && <span className="converter-form__item__errors">{converterError}</span>}
          {(converterEnter) && <Input
            className="converter-form__item converter-form__item__input"
            type="text"
            label='Converter to: '
            value={converterValue}
            name="converterValue"
          />}
          </div>
        </form>
      </div>
    </>
  );
}

export default Currency;
