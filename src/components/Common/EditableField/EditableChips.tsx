import React, { useState } from 'react';
import { Edit3, X } from 'lucide-react';

import * as S from './styles';

interface EditableChipsProps {
    value: string[];
    placeholder: string;
    chipVariant?: 'email' | 'tier1' | 'tier2';
    onUpdate: (value: string[]) => void;
}

const EditableChips: React.FC<EditableChipsProps> = ({
    value,
    placeholder,
    chipVariant,
    onUpdate
}) => {
    const [isEditing, setIsEditing] = useState(false);
    const [newChipValue, setNewChipValue] = useState('');

    const addChip = (chipValue: string) => {
        if (chipValue.trim() && !value.includes(chipValue.trim())) {
            onUpdate([...value, chipValue.trim()]);
        }
        setNewChipValue('');
    };

    const removeChip = (index: number) => {
        const newArray = value.filter((_, i) => i !== index);
        onUpdate(newArray);
    };

    const handleKeyDown = (e: React.KeyboardEvent) => {
        if (e.key === 'Enter' || e.key === ',') {
            e.preventDefault();
            addChip(newChipValue);
        } else if (e.key === 'Escape') {
            setIsEditing(false);
            setNewChipValue('');
        }
    };

    const handleChipRemove = (e: React.MouseEvent, index: number) => {
        e.preventDefault();
        e.stopPropagation();
        removeChip(index);
    };

    return (
        <S.EditableFieldWrapper>
            <S.ChipsContainer
                className={isEditing ? 'editing' : ''}
                onClick={() => !isEditing && setIsEditing(true)}
            >
                {value.map((item, index) => (
                    <S.Chip key={index} variant={chipVariant}>
                        {item}
                        {isEditing && (
                            <X
                                size={12}
                                className="remove-icon"
                                onMouseDown={(e) => handleChipRemove(e, index)}
                            />
                        )}
                    </S.Chip>
                ))}

                {isEditing && (
                    <S.ChipInput
                        value={newChipValue}
                        onChange={(e) => setNewChipValue(e.target.value)}
                        onKeyDown={handleKeyDown}
                        onBlur={() => {
                            if (newChipValue.trim()) {
                                addChip(newChipValue);
                            }
                            setIsEditing(false);
                        }}
                        placeholder={
                            value.length === 0 ? placeholder : 'Add new...'
                        }
                        autoFocus
                        type={chipVariant === 'email' ? 'email' : 'text'}
                    />
                )}

                {!isEditing && value.length === 0 && (
                    <S.EmptyChipsPlaceholder>
                        {placeholder}
                    </S.EmptyChipsPlaceholder>
                )}

                {!isEditing && value.length > 0 && (
                    <Edit3 className="edit-icon" size={16} />
                )}
            </S.ChipsContainer>
        </S.EditableFieldWrapper>
    );
};

export default EditableChips;
