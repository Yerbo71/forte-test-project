import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { SidebarTrigger } from "@/components/ui/sidebar";
export function SiteHeader() {
    return (_jsx("header", { className: "flex h-(--header-height) shrink-0 items-center gap-2 border-b transition-[width,height] ease-linear group-has-data-[collapsible=icon]/sidebar-wrapper:h-(--header-height)", children: _jsxs("div", { className: "flex w-full items-center gap-1 px-4 lg:gap-2 lg:px-6", children: [_jsx(SidebarTrigger, { className: "-ml-1" }), _jsx(Separator, { orientation: "vertical", className: "mx-2 data-[orientation=vertical]:h-4" }), _jsx("h1", { className: "text-base font-medium", children: "Documents" }), _jsx("div", { className: "ml-auto flex items-center gap-2", children: _jsx(Button, { variant: "ghost", asChild: true, size: "sm", className: "hidden sm:flex", children: _jsx("a", { href: "https://github.com/shadcn-ui/ui/tree/main/apps/v4/app/(examples)/dashboard", rel: "noopener noreferrer", target: "_blank", className: "dark:text-foreground", children: "GitHub" }) }) })] }) }));
}
