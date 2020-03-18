export interface MenuItem {
  to: string;
  label: string;
  icon: string;
}

export interface Menu {
  showMenu: boolean;
  menuItems?: MenuItem[];
}

export interface SubMenu {
  showSubMenu: boolean;
}

export interface DisplayState {
  menu: Menu;
  subMenu: SubMenu;
}
