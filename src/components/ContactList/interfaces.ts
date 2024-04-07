interface contactListProps {
  contactListTitle: string;
  contactList: contactListItemProps[];
}

interface contactListItemProps {
  iconPath: string;
  iconAlt: string;
  link: string;
  linkText: string;
}

export type { contactListItemProps, contactListProps };
