import * as React from "react";
import { type Icon } from "@tabler/icons-react";
import { SidebarGroup } from "@/components/ui/sidebar";
export declare function NavSecondary({ items, ...props }: {
    items: {
        title: string;
        url: string;
        icon: Icon;
    }[];
} & React.ComponentPropsWithoutRef<typeof SidebarGroup>): import("react/jsx-runtime").JSX.Element;
