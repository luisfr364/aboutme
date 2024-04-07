import ContactList from "../../components/ContactList/ContactList";
import styles from "./ContactSection.module.css";

const list = [
  {
    iconPath: "https://www.svgrepo.com/show/521725/linkedin.svg",
    iconAlt: "Linkedin logo",
    link: "https://www.linkedin.com/in/luis-fernando-092610221/",
    linkText: "Linkedin",
  },
  {
    iconPath: "https://www.svgrepo.com/show/494241/github-rounded-border.svg",
    iconAlt: "Github logo",
    link: "https://github.com/luisfr364",
    linkText: "Github",
  },
  {
    iconPath: "https://www.svgrepo.com/show/501544/email.svg",
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
