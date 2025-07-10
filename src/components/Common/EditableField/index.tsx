import React, { useState } from 'react';
import { Edit3 } from 'lucide-react';

import CustomInput from '../CustomInput';

import * as S from './styles';
import * as SS from '../styles';

interface IEditableFieldProps {
    value: string;
    onChange: (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => void;
    placeholder?: string;
    multiline?: boolean;
}
const EditableField: React.FC<IEditableFieldProps> = ({
    value,
    onChange,
    placeholder = 'Enter text here...',
    multiline = false
}) => {
    const [isEditing, setIsEditing] = useState(false);

    return (
        <S.EditableFieldWrapper>
            {isEditing ? (
                multiline ? (
                    <SS.TextArea
                        value={value}
                        onChange={onChange}
                        placeholder={placeholder}
                        onBlur={() => setIsEditing(false)}
                        onKeyDown={(e) =>
                            e.key === 'Enter' &&
                            e.ctrlKey &&
                            setIsEditing(false)
                        }
                        rows={3}
                        autoFocus
                    />
                ) : (
                    <CustomInput
                        type="text"
                        value={value}
                        onChange={onChange}
                        placeholder={placeholder}
                        onBlur={() => setIsEditing(false)}
                        onKeyDown={(e) => {
                            if (e.key === 'Enter') {
                                setIsEditing(false);
                            }
                        }}
                        autoFocus
                    />
                )
            ) : (
                <S.EditableFieldContent
                    onClick={() => setIsEditing(true)}
                    isEmpty={!value}
                >
                    <span>{value || placeholder}</span>
                    <Edit3 className="edit-icon" size={16} />
                </S.EditableFieldContent>
            )}
        </S.EditableFieldWrapper>
    );
};

export default EditableField;
