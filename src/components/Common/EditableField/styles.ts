import { styled } from 'styled-components';

export const EditableFieldWrapper = styled.div`
    position: relative;

    &:hover .edit-icon {
        opacity: 1;
    }
`;

export const EditableFieldContent = styled.div<{ isEmpty?: boolean }>`
    cursor: pointer;
    padding: 8px;
    border-radius: 6px;
    transition: all 0.2s ease;
    display: flex;
    align-items: center;
    gap: 8px;
    color: ${(props) =>
        props.isEmpty
            ? props.theme.colors.textLowEmphasis
            : props.theme.colors.black};

    &:hover {
        background-color: ${({ theme }) => theme.colors.lightBlueBackground};
    }

    .edit-icon {
        opacity: 0;
        transition: opacity 0.2s ease;
        color: ${({ theme }) => theme.colors.textLowEmphasis};
    }
`;

// Chips Components
export const ChipsContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 8px;
    min-height: 32px;
    padding: 8px;
    border-radius: 6px;
    transition: all 0.2s ease;
    cursor: pointer;
    position: relative;

    &:hover {
        background-color: ${({ theme }) => theme.colors.lightBlueBackground};
    }

    &.editing {
        background-color: transparent;
        cursor: default;
    }

    .edit-icon {
        position: absolute;
        top: 8px;
        right: 8px;
        opacity: 0;
        transition: opacity 0.2s ease;
        color: ${({ theme }) => theme.colors.textLowEmphasis};
    }

    &:hover .edit-icon {
        opacity: 1;
    }
`;

export const Chip = styled.span<{ variant?: 'email' | 'tier1' | 'tier2' }>`
    display: inline-flex;
    align-items: center;
    gap: 6px;
    padding: 6px 12px;
    border-radius: 16px;
    font-size: 14px;
    font-weight: 500;
    transition: all 0.2s ease;
    user-select: none;

    ${(props) => {
        switch (props.variant) {
            case 'email':
                return `
          background-color: ${props.theme.colors.lightGray};
          color: ${props.theme.colors.textHighEmphasis};
          border: 1px solid ${props.theme.colors.gray};
          &:hover {
            background-color: ${props.theme.colors.grayHover};
          }
        `;
            case 'tier1':
                return `
          background-color: ${props.theme.colors.chips.lightBlue};
          color: ${props.theme.colors.chips.darkBlue};
          border: 1px solid ${props.theme.colors.chips.blue};
          &:hover {
            background-color: ${props.theme.colors.chips.blue};
          }
        `;
            case 'tier2':
                return `
          background-color: ${props.theme.colors.chips.lightGreen};
          color: ${props.theme.colors.chips.darkGreen};
          border: 1px solid ${props.theme.colors.chips.green};
          &:hover {
            background-color: ${props.theme.colors.chips.green};
          }
        `;
            default:
                return `
          background-color: ${props.theme.colors.lightGray};
          color: ${props.theme.colors.textHighEmphasis};
          border: 1px solid ${props.theme.colors.gray};
          &:hover {
            background-color: ${props.theme.colors.gray};
          }
        `;
        }
    }}

    .remove-icon {
        opacity: 0;
        transition: opacity 0.2s ease;
        cursor: pointer;
        border-radius: 50%;
        padding: 1px;
        margin-left: 2px;

        &:hover {
            background-color: rgba(0, 0, 0, 0.1);
        }
    }

    &:hover .remove-icon {
        opacity: 1;
    }
`;

export const ChipInput = styled.input`
    border: none;
    outline: none;
    background: transparent;
    font-size: 14px;
    min-width: 120px;
    padding: 6px 8px;
    border-radius: 16px;

    &::placeholder {
        color: ${({ theme }) => theme.colors.textLowEmphasis};
    }

    &:focus {
        background-color: ${({ theme }) => theme.colors.chips.focusBackground};
    }
`;

export const EmptyChipsPlaceholder = styled.div`
    color: ${({ theme }) => theme.colors.textLowEmphasis};
    font-style: italic;
    padding: 6px 0;
    font-size: 14px;
`;
