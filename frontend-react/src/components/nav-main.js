import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { IconCirclePlusFilled, IconMail } from "@tabler/icons-react";
import { Button } from "@/components/ui/button";
import { SidebarGroup, SidebarGroupContent, SidebarMenu, SidebarMenuButton, SidebarMenuItem, } from "@/components/ui/sidebar";
export function NavMain({ items, }) {
    return (_jsx(SidebarGroup, { children: _jsxs(SidebarGroupContent, { className: "flex flex-col gap-2", children: [_jsx(SidebarMenu, { children: _jsxs(SidebarMenuItem, { className: "flex items-center gap-2", children: [_jsxs(SidebarMenuButton, { tooltip: "Quick Create", className: "bg-primary text-primary-foreground hover:bg-primary/90 hover:text-primary-foreground active:bg-primary/90 active:text-primary-foreground min-w-8 duration-200 ease-linear", children: [_jsx(IconCirclePlusFilled, {}), _jsx("span", { children: "Quick Create" })] }), _jsxs(Button, { size: "icon", className: "size-8 group-data-[collapsible=icon]:opacity-0", variant: "outline", children: [_jsx(IconMail, {}), _jsx("span", { className: "sr-only", children: "Inbox" })] })] }) }), _jsx(SidebarMenu, { children: items.map((item) => (_jsx(SidebarMenuItem, { children: _jsxs(SidebarMenuButton, { tooltip: item.title, children: [item.icon && _jsx(item.icon, {}), _jsx("span", { children: item.title })] }) }, item.title))) })] }) }));
}
