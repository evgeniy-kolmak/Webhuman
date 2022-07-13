import './FormSuccess.css'

const createPromocode = () => {
  const firsNumber = new Date().getDay();
  const alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
  let result = 'W' + firsNumber;
  for (let i = 0; i < 6; i++) {
    const index = Math.round(Math.random() * 50);
    if (index > alphabet.length - 1) {
      result += index;
    } else {
      result += alphabet[index].toUpperCase();
    }
  }
  return result
}

export default function FormSuccess({ stateForm, name }) {
  return (
    <div className={stateForm ? "success-form" : "hidden"}>
      <div className="success-wrapper">
        <h3 className="success-title">Отлично! Ваша заявка успешно отправлена.</h3>
        <div className="promocode-wrapper">
          <div className="success-subtitle"><span className="name">{name.current?.value}</span>, Ваш промокод на скидку при первом заказе:</div>
          <div className="promocode">{stateForm ? createPromocode() : null}</div>
        </div>
      </div>
    </div>
  );

}

