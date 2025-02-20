export interface MenuItem {
    foodName: string;
    price: number;
}

export interface MenuCategory {
    category?: string;
    description?: string;
    items: MenuItem[];
}

export type Menu = MenuCategory[];