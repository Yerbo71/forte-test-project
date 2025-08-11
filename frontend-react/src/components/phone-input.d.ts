import * as React from 'react';
import * as RPNInput from 'react-phone-number-input';
type PhoneInputProps = Omit<React.ComponentProps<'input'>, 'onChange' | 'value' | 'ref'> & Omit<RPNInput.Props<typeof RPNInput.default>, 'onChange'> & {
    onChange?: (value: RPNInput.Value) => void;
};
declare const PhoneInput: React.ForwardRefExoticComponent<PhoneInputProps>;
export { PhoneInput };
