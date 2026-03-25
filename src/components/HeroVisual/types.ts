export interface SidebarItem {
  key: string;
  icon: string;
  title: string;
}

export interface CodeSnippet {
  key: string;
  value: string | number;
  isString?: boolean;
}

export interface HeroVisualProps {
  moduleTitle?: string;
  moduleSubtitle?: string;
  sidebarItems?: SidebarItem[];
  activeSidebarKey?: string;
  lessonTitle?: string;
  codeSnippets?: CodeSnippet[];
  tooltipTitle?: string;
  tooltipTag?: string;
  tooltipDescription?: string;
}
