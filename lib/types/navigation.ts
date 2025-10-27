export interface NavLink {
  label: string;
  href: string;
  anchorId?: string;
  icon?: any;
  desc?: string;
  badge?: string;
}

export interface NavGroup {
  title: string;
  items: NavLink[];
}

export interface TopItem {
  label: string;
  groups?: NavGroup[];
  href?: string;
  dropdown?: boolean;
}

export interface ExtraCardProps {
  onLinkClick?: () => void;
}

export type ExtraCardType = "co-je-pscoat" | "produkty" | "o-nas";
