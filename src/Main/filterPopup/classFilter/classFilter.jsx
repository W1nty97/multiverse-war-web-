export default function ClassFilter({ valueTwo, onChange }) {
  return (
    <>
      <div className="popup-content-all">
        <select className="content-sel" onChange={onChange} value={valueTwo}>
          <option>Все</option>
          <option>Воин</option>
          <option>Нежить</option>
          <option>Маг</option>
          <option>Божество</option>
          <option>Кибер</option>
        </select>
      </div>
    </>
  );
}
