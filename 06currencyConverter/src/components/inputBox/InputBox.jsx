import { useId } from 'react';
import PropTypes from 'prop-types';

function InputBox({
  label,
  amount,
  onAmountChange,
  onCurrencyChange,
  currencyOptions = [],
  selectedCurrency = 'usd',
  isAmountDisabled = false,
  isCurrencyDisabled = false,
  className = "",
}) {
  const amountInputId = useId();

  return (
    <div className={`bg-white p-3 rounded-lg text-sm flex ${className}`}>
      <div className="w-1/2">
        <label className="text-black/40 mb-2 inline-block" htmlFor={amountInputId}>
          {label}
        </label>
        <input
          id={amountInputId}
          className="outline-none w-full bg-transparent py-1.5"
          type="number"
          placeholder="Amount"
          disabled={isAmountDisabled}
          value={amount}
          onChange={(e) => onAmountChange?.(Number(e.target.value))}
        />
      </div>
      <div className="w-1/2 flex flex-wrap justify-end text-right">
        <label className="text-black/40 mb-2 w-full" htmlFor={`${amountInputId}-currency`}>
          Currency Type
        </label>
        <select
          id={`${amountInputId}-currency`}
          className="rounded-lg px-1 py-1 bg-gray-100 cursor-pointer outline-none"
          value={selectedCurrency}
          onChange={(e) => onCurrencyChange?.(e.target.value)}
          disabled={isCurrencyDisabled}
        >
          {currencyOptions.map((currency) => (
            <option key={currency} value={currency}>
              {currency}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
}

InputBox.propTypes = {
  label: PropTypes.string.isRequired,
  amount: PropTypes.number.isRequired,
  onAmountChange: PropTypes.func,
  onCurrencyChange: PropTypes.func,
  currencyOptions: PropTypes.arrayOf(PropTypes.string),
  selectedCurrency: PropTypes.string,
  isAmountDisabled: PropTypes.bool,
  isCurrencyDisabled: PropTypes.bool,
  className: PropTypes.string,
};

export default InputBox;
