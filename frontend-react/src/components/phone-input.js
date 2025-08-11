import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import * as React from 'react';
import { CheckIcon, ChevronsUpDown } from 'lucide-react';
import * as RPNInput from 'react-phone-number-input';
import flags from 'react-phone-number-input/flags';
import { Button } from '@/components/ui/button';
import { Command, CommandEmpty, CommandGroup, CommandInput, CommandItem, CommandList } from '@/components/ui/command';
import { Input } from '@/components/ui/input';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { ScrollArea } from '@/components/ui/scroll-area';
import { cn } from '@/lib/utils';
const PhoneInput = React.forwardRef(({ className, onChange, value, ...props }, ref) => {
    return (_jsx(RPNInput.default, { ref: ref, className: cn('flex', className), flagComponent: FlagComponent, countrySelectComponent: CountrySelect, inputComponent: InputComponent, smartCaret: false, value: value || undefined, 
        /**
         * Handles the onChange event.
         *
         * react-phone-number-input might trigger the onChange event as undefined
         * when a valid phone number is not entered. To prevent this,
         * the value is coerced to an empty string.
         *
         * @param {E164Number | undefined} value - The entered value
         */
        onChange: (value) => onChange?.(value || ''), ...props }));
});
PhoneInput.displayName = 'PhoneInput';
const InputComponent = React.forwardRef(({ className, ...props }, ref) => (_jsx(Input, { className: cn('rounded-e-lg rounded-s-none', className), ...props, ref: ref })));
InputComponent.displayName = 'InputComponent';
const CountrySelect = ({ disabled, value: selectedCountry, options: countryList, onChange }) => {
    const scrollAreaRef = React.useRef(null);
    const [searchValue, setSearchValue] = React.useState('');
    const [isOpen, setIsOpen] = React.useState(false);
    return (_jsxs(Popover, { open: isOpen, modal: true, onOpenChange: (open) => {
            setIsOpen(open);
            open && setSearchValue('');
        }, children: [_jsx(PopoverTrigger, { asChild: true, children: _jsxs(Button, { type: "button", variant: "outline", className: "flex gap-1 rounded-e-none rounded-s-lg border-r-0 px-3 focus:z-10", disabled: disabled, children: [_jsx(FlagComponent, { country: selectedCountry, countryName: selectedCountry }), _jsx(ChevronsUpDown, { className: cn('-mr-2 size-4 opacity-50', disabled ? 'hidden' : 'opacity-100') })] }) }), _jsx(PopoverContent, { className: "w-[300px] p-0", children: _jsxs(Command, { children: [_jsx(CommandInput, { value: searchValue, onValueChange: (value) => {
                                setSearchValue(value);
                                setTimeout(() => {
                                    if (scrollAreaRef.current) {
                                        const viewportElement = scrollAreaRef.current.querySelector('[data-radix-scroll-area-viewport]');
                                        if (viewportElement) {
                                            viewportElement.scrollTop = 0;
                                        }
                                    }
                                }, 0);
                            }, placeholder: "Search country..." }), _jsx(CommandList, { children: _jsxs(ScrollArea, { ref: scrollAreaRef, className: "h-72", children: [_jsx(CommandEmpty, { children: "No country found." }), _jsx(CommandGroup, { children: countryList.map(({ value, label }) => value ? (_jsx(CountrySelectOption, { country: value, countryName: label, selectedCountry: selectedCountry, onChange: onChange, onSelectComplete: () => setIsOpen(false) }, value)) : null) })] }) })] }) })] }));
};
const CountrySelectOption = ({ country, countryName, selectedCountry, onChange, onSelectComplete }) => {
    const handleSelect = () => {
        onChange(country);
        onSelectComplete();
    };
    return (_jsxs(CommandItem, { className: "gap-2", onSelect: handleSelect, children: [_jsx(FlagComponent, { country: country, countryName: countryName }), _jsx("span", { className: "flex-1 text-sm", children: countryName }), _jsx("span", { className: "text-sm text-foreground/50", children: `+${RPNInput.getCountryCallingCode(country)}` }), _jsx(CheckIcon, { className: `ml-auto size-4 ${country === selectedCountry ? 'opacity-100' : 'opacity-0'}` })] }));
};
const FlagComponent = ({ country, countryName }) => {
    const Flag = flags[country];
    return (_jsx("span", { className: "flex h-4 w-6 overflow-hidden rounded-sm bg-foreground/20 [&_svg:not([class*='size-'])]:size-full", children: Flag && _jsx(Flag, { title: countryName }) }));
};
export { PhoneInput };
