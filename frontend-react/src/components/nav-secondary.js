"use client";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { SidebarGroup, SidebarGroupContent, SidebarMenu, SidebarMenuButton, SidebarMenuItem, } from "@/components/ui/sidebar";
export function NavSecondary({ items, ...props }) {
    return (_jsx(SidebarGroup, { ...props, children: _jsx(SidebarGroupContent, { children: _jsx(SidebarMenu, { children: items.map((item) => (_jsx(SidebarMenuItem, { children: _jsx(SidebarMenuButton, { asChild: true, children: _jsxs("a", { href: item.url, children: [_jsx(item.icon, {}), _jsx("span", { children: item.title })] }) }) }, item.title))) }) }) }));
}
