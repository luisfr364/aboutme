import ContactList from "../../components/ContactList/ContactList";
import styles from "./ContactSection.module.css";

const list = [
  {
    iconPath: "./linkedin-logo.svg",
    iconAlt: "Linkedin logo",
    link: "https://www.linkedin.com/in/luis-fernando-092610221/",
    linkText: "Linkedin",
  },
  {
    iconPath: "./github-rounded-border-svgrepo-com.svg",
    iconAlt: "Github logo",
    link: "https://github.com/luisfr364",
    linkText: "Github",
  },
  {
    iconPath: "./email-icon.svg",
    iconAlt: "Email logo",
    link: "mailto:luisfr364@gmail.com",
    linkText: "Email",
  },
];

function ContactSection() {
  return (
    <section
      className={`${styles.contactSection} pattern-checks-sm`}
      id='contact'
    >
      <ContactList contactList={list} contactListTitle='Contato' />
    </section>
  );
}

export default ContactSection;
