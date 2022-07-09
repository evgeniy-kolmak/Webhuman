import './FormSuccess.css'
import { Context } from '../../Context';
import { useContext } from 'react';
export default function FormSuccess({ stateForm, name }) {
  const ctx = useContext(Context);

  return (
    <div className={stateForm ? "success-form" : "hidden"}>
      <div className="success-wrapper">
        <h3 className="success-title">Отлично! Ваша заявка успешно отправлена.</h3>
        <div className="promocode-wrapper">
          <div className="success-subtitle"><span className="name">{name.current?.value}</span>, Ваш промокод на скидку при первом заказе:</div>
          <div className="promocode">{ctx.createPromocode()}</div>
        </div>
      </div>
    </div>
  );

}