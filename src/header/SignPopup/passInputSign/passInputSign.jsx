import "../../inputs.css";

export default function PassInput({ passValueOne, setPassValueOne }) {
  // Функция для обработки изменения значения в поле ввода пароля
  function handlePassValueOne(e) {
    setPassValueOne(e.target.value);
  }
  
  return (
    <>
      <div className="box__pass-content">
        <div className="pass__content-txt">Пароль:</div>
        <div className="pass__content-input">
          <input
            type="password"
            placeholder="Ваш пароль"
            className="content-input"
            value={passValueOne}
            onInput={handlePassValueOne}
          />
        </div>
      </div>
    </>
  );
}
