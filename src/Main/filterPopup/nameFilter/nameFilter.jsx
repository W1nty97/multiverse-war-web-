import "./nameFilter.css";

export default function NameFilter({ value, onChange }) {
  return (
    <>
      <div className="popup-content-all">
        <select className="content-sel" onChange={onChange} value={value}>
          <option>Все</option>
          <option>W1nty</option>
          <option>Барака</option>
          <option>Ермак</option>
          <option>Крок</option>
          <option>Ктулху</option>
          <option>Мистер Морж</option>
          <option>Нуб Сайбот</option>
          <option>Рейн</option>
          <option>Рептилия</option>
          <option>Саб-Зиро</option>
          <option>Сайракс</option>
          <option>Сектор</option>
          <option>Скорпион</option>
          <option>Смерть</option>
          <option>Смоук</option>
          <option>Тремор</option>
          <option>Уран</option>
          <option>Мор</option>
        </select>
      </div>
    </>
  );
}
