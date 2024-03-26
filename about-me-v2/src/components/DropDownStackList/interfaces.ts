interface items {
  name: string;
  iconPath: string;
  nameToPass?: string;
  listItemFunc?: (nameToPass: string) => void;
}

interface DropDownListProps {
  title: string;
  itemsArray: items[];
}

export type { items, DropDownListProps };
