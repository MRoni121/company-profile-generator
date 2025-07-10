import React, { useState } from 'react';

import CustomInput from '../../Common/CustomInput';
import CustomButton from '../../Common/CustomButton';

import { ServiceLine } from '../../../interfaces';

import * as S from './styles';
import * as SS from '../../Common/styles';

interface IServiceLineCard extends ServiceLine {
    onChange(serviceLine: ServiceLine): void;
    onDelete(): void;
}

const ServiceLineCard: React.FC<IServiceLineCard> = ({
    onChange,
    onDelete,
    ...serviceLine
}) => {
    const [fieldBeingEdited, setFieldBeingEdited] = useState<
        '' | 'name' | 'description'
    >('');

    return (
        <S.Container>
            <S.ServiceLineHeader>
                <div>
                    {fieldBeingEdited === 'name' ? (
                        <CustomInput
                            type="text"
                            value={serviceLine.name}
                            onChange={(e) =>
                                onChange({
                                    ...serviceLine,
                                    name: e.target.value
                                })
                            }
                            onBlur={() => setFieldBeingEdited('')}
                            onKeyDown={(e) => {
                                if (e.key === 'Enter') {
                                    setFieldBeingEdited('');
                                }
                            }}
                            autoFocus
                        />
                    ) : (
                        <h4 onClick={() => setFieldBeingEdited('name')}>
                            {serviceLine.name}
                        </h4>
                    )}
                </div>
                <CustomButton variant="danger" icon="x" onClick={onDelete} />
            </S.ServiceLineHeader>
            <div>
                {fieldBeingEdited === 'description' ? (
                    <SS.TextArea
                        value={serviceLine.description}
                        onChange={(e) =>
                            onChange({
                                ...serviceLine,
                                description: e.target.value
                            })
                        }
                        onBlur={() => setFieldBeingEdited('')}
                        rows={2}
                        autoFocus
                    />
                ) : (
                    <S.ServiceLineDescription
                        onClick={() => setFieldBeingEdited('description')}
                    >
                        {serviceLine.description}
                    </S.ServiceLineDescription>
                )}
            </div>
        </S.Container>
    );
};

export default ServiceLineCard;
