import { useState } from "react";
import { items, DropDownListProps } from "./interfaces.ts";
import styles from "./DropDownList.module.css";

function DropDownList(props: DropDownListProps): JSX.Element {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={styles.DropDownList}>
      <div
        className={styles.DropDownList__text}
        onClick={() => setIsOpen((isOpen) => (isOpen ? false : true))}
      >
        <img
          className={styles.DropDownList__icon}
          src={
            isOpen
              ? "https://svgfind.com/show/10739621.svg"
              : "https://svgfind.com/show/10739617.svg"
          }
          alt=''
        />
        <h3 className={styles.DropDownList__title}>{props.title}</h3>
      </div>
      <ul className={isOpen ? styles.DropDownList__list : styles.hidden}>
        {props.itemsArray.map((item) => (
          <ListItem {...item} key={item.name} />
        ))}
      </ul>
    </div>
  );
}

function ListItem(props: items): JSX.Element {
  return (
    <li
      className={styles.listItem}
      onClick={() => props.listItemFunc?.(props.nameToPass || props.name)}
    >
      <img
        className={styles.listItem__icon}
        src={props.iconPath}
        alt={props.name}
      />
      <h4 className={styles.listItem__title}>{props.name}</h4>
    </li>
  );
}

export default DropDownList;

//
