interface items {
  name: string;
  iconPath: string;
}

interface DropDownListProps {
  title: string;
  itemsArray: items[];
}

export type { items, DropDownListProps };
