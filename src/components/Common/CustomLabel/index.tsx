import React from 'react';

// import { Container } from './styles';
import * as S from './styles';
const CustomLabel: React.FC<React.LabelHTMLAttributes<HTMLLabelElement>> = ({
    children,
    ...rest
}) => {
    return <S.Label {...rest}>{children}</S.Label>;
};

export default CustomLabel;
