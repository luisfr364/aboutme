import { contactListItemProps, contactListProps } from "./interfaces.ts";
import styles from "./ContactList.module.css";
import { useRef } from "react";

function ContactList(props: contactListProps): JSX.Element {
  return (
    <div className={styles.contactList}>
      <h2 className={styles.contactList__title}>{props.contactListTitle}</h2>
      <ul className={styles.contactList__list}>
        {props.contactList.map((el) => (
          <ContactListItem
            iconPath={el.iconPath}
            iconAlt={el.iconAlt}
            link={el.link}
            linkText={el.linkText}
            key={el.linkText}
          />
        ))}
      </ul>
    </div>
  );
}

function ContactListItem(props: contactListItemProps): JSX.Element {
  function handleClick() {
    window.location.href = props.link;
  }

  return (
    <li className={styles.list__item} onClick={handleClick}>
      <img
        className={styles.item__image}
        src={props.iconPath}
        alt={props.iconAlt}
      />
      <h4 className={styles.item__link}>{props.linkText}</h4>
    </li>
  );
}

export default ContactList;
