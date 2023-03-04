export type NavBarProps = {
  navMenu: string[];
  tabIndex: number;
  setTabIndex: React.Dispatch<React.SetStateAction<number>>;
  isHighlight: boolean;
};
