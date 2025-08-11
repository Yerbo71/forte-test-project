import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Sidebar, SidebarContent, SidebarGroup, SidebarGroupContent, SidebarGroupLabel, SidebarMenu, SidebarMenuButton, SidebarMenuItem, SidebarRail } from '@/components/ui/sidebar';
import { useLocation } from 'react-router-dom';
const data = {
    navMain: [
        {
            title: 'Getting Started',
            url: '/',
            items: [
                {
                    title: 'Contacts',
                    url: '/'
                },
                {
                    title: 'Create a Contact',
                    url: '/contact-form'
                }
            ]
        }
    ]
};
export function AppSidebar({ ...props }) {
    const location = useLocation();
    return (_jsxs(Sidebar, { ...props, children: [_jsx(SidebarContent, { children: data.navMain.map((item) => (_jsxs(SidebarGroup, { children: [_jsx(SidebarGroupLabel, { children: item.title }), _jsx(SidebarGroupContent, { children: _jsx(SidebarMenu, { children: item.items.map((item) => (_jsx(SidebarMenuItem, { children: _jsx(SidebarMenuButton, { asChild: true, isActive: location.pathname === item.url, children: _jsx("a", { href: item.url, children: item.title }) }) }, item.title))) }) })] }, item.title))) }), _jsx(SidebarRail, {})] }));
}
