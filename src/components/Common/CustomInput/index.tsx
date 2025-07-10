import React, { useMemo } from 'react';
import { Globe } from 'lucide-react';

import * as S from './styles';

type CustomInputProps = React.InputHTMLAttributes<HTMLInputElement>;

const getIconFromType = (type: string) => {
    switch (type) {
        case 'url':
            return <Globe size={20} />;
        default:
            return null;
    }
};

const CustomInput: React.FC<CustomInputProps> = (props) => {
    const Icon = useMemo(() => getIconFromType(props.type || ''), [props.type]);

    return (
        <S.InputWrapper>
            {Icon}
            <S.Input {...props} />
        </S.InputWrapper>
    );
};

export default CustomInput;
