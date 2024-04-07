interface items {
  name: string;
  iconPath: string;
  nameToPass?: string;
  code?: string;
  language?: string;
  setLanguage?: (language: string) => void;
  setCode?: (code: string) => void;
}

interface itemsArray {
  name: string;
  iconPath: string;
  nameToPass?: string;
  code?: string;
  language?: string;
}

interface DropDownListProps {
  title: string;
  itemsArray: items[];
  setLanguage: (language: string) => void;
  setCode: (code: string) => void;
}

export type { items, itemsArray, DropDownListProps };
