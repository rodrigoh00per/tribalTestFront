import styled, { css } from "styled-components";
import { GridAlt } from "@styled-icons/boxicons-regular/GridAlt";
import { BuildingBank } from "@styled-icons/fluentui-system-filled/BuildingBank";
import { CreditCard } from "@styled-icons/boxicons-regular/CreditCard";
import { Dollar } from "@styled-icons/boxicons-regular/Dollar";
import { Notifications } from "@styled-icons/ionicons-outline/Notifications";
import { User } from "@styled-icons/boxicons-regular/User";
import { ChevronDown } from "@styled-icons/boxicons-regular/ChevronDown";
import { Menu } from "@styled-icons/boxicons-regular/Menu";
import { Pencil } from "@styled-icons/boxicons-regular/Pencil";
import { Trash } from "@styled-icons/boxicons-regular/Trash";
import { ArrowBack } from "@styled-icons/boxicons-regular/ArrowBack";
import { Language } from "@styled-icons/material/Language";

const stylesOfIconNav = css`
    fill: #6B6E74;
    min-width: 28px;
    width: 28px;
    min-height: 28px;
    height: 28px; 
    cursor:pointer;
`;
export const OverViewIcon = styled(GridAlt)`
    ${stylesOfIconNav}
`;

export const BankIcon = styled(BuildingBank)`
${stylesOfIconNav}
`;

export const CreditCardIcon = styled(CreditCard)`
${stylesOfIconNav}
`;

export const DollarIcon = styled(Dollar)`
${stylesOfIconNav}
`;

export const NotificationIcon = styled(Notifications)`
${stylesOfIconNav}
`;

export const UserIcon = styled(User)`
${stylesOfIconNav}
`;
export const ArrowDownIcon = styled(ChevronDown)`
${stylesOfIconNav}
`;

export const MenuIcon = styled(Menu)`
${stylesOfIconNav}
`;

export const EditIcon = styled(Pencil)`
${stylesOfIconNav}

`;

export const DeleteIcon = styled(Trash)`
${stylesOfIconNav}
`;

export const BackIcon = styled(ArrowBack)`
${stylesOfIconNav}
`;

export const LanguageIcon = styled(Language)`
${stylesOfIconNav}
`;