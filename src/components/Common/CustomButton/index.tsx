import React, { useMemo } from 'react';
import { CheckCircle } from 'lucide-react';

import * as S from './styles';

type IconType = 'check';

type CustomButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
    isLoading?: boolean;
    loadingText?: string;
    variant?: 'primary' | 'secondary' | 'success' | 'danger';
    icon?: IconType;
};

const getIcon = (icon?: IconType) => {
    switch (icon) {
        case 'check':
            return <CheckCircle size={20} />;
        default:
            return null;
    }
};

const CustomButton: React.FC<CustomButtonProps> = ({
    icon,
    isLoading,
    loadingText,
    children,
    disabled,
    ...rest
}) => {
    const Icon = useMemo(() => getIcon(icon), [icon]);

    return (
        <S.Button disabled={disabled || isLoading} {...rest}>
            {isLoading ? (
                <>
                    <S.LoadingSpinner />
                    {loadingText || 'Loading...'}
                </>
            ) : (
                <>
                    {Icon}
                    {children}
                </>
            )}
        </S.Button>
    );
};

export default CustomButton;
