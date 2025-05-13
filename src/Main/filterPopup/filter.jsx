import "./filter.css";
import { useContext, useEffect, useState } from "react";
import NameFilter from "./nameFilter/nameFilter";
import RareFilter from "./rareFilter/rareFilter";
import ClassFilter from "./classFilter/classFilter";
import { Context } from "../../index.js";

const rareIds = {
  Обычная: "cammon",
  Редкая: "rare",
  Эпическая: "epic",
  Легендарная: "legend",
  Мифическая: "mythic"
};

function switchValue(list, value) {
  return list.includes(value)
    ? list.filter((f) => f !== value)
    : [...list, value];
}

export default function FilterPopup({
  display,
  filter,
  onChange
}) {
  const { rareness } = useContext(Context);

  const [state, setState] = useState(filter);

  useEffect(() => onChange(state));

  return (
    <>
      <div className="main__popup-filter" style={{ display: display }}>
        <div className="popup__text-title">Фильтр</div>
        <div className="popup__box-content">
          <div className="popup__content" id="one">
            <div className="popup__content-title">Имя</div>
            <NameFilter 
              onChange={e => setState({...state, name: e.target.value})}
              value={state.name} />
          </div>
          <div className="popup__content" id="two">
            <div className="popup__content-title">Класс</div>
            <ClassFilter 
              onChange={e => setState({...state, kind: e.target.value})}
              value={filter.kind} />
          </div>
          <div className="popup__content" id="btn">
            
          </div>
          <div className="popup__content" id="three">
            <div className="popup__content-title">Редкость</div>
            <div className="popup-content-all">
              {Object.entries(rareness).map(
                ([name, _]) => 
                  <RareFilter
                    key={name}
                    id={rareIds[name]}
                    textContent={name}
                    isActive={state.rare.includes(name)}
                    onClick={e => setState({...state, rare: switchValue(state.rare, name)
                    })}
                  />
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
