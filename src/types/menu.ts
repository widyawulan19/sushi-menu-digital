export interface MenuItem {
    title: string;
    desc: string;
    price: string;
    pick: string[];
}

export interface MenuCategory {
    category: string;
    catDesc: string;
    items: MenuItem[];
}