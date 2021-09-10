import React from "react";
import {
  ContainerActions,
  ContainerElementList,
  SubTitleList,
  TitleList,
} from "./ElementList.styles";
import { EditIcon, DeleteIcon } from "../../styles/Icons.styles";

const ElementList = ({
  title,
  subtitle,
  id,
  withDelete,
  withEdit,
  onClickAction = () => {},
}) => (
  <ContainerElementList onClick={() => onClickAction("selection", id)}>
    <TitleList subtitle={subtitle}>{title}</TitleList>
    {subtitle ? <SubTitleList>{subtitle}</SubTitleList> : null}
    <ContainerActions>
      {withEdit ? (
        <EditIcon
          onClick={(e) => {
            e.stopPropagation();
            onClickAction("edit", id, title);
          }}
        />
      ) : null}
      {withDelete ? (
        <DeleteIcon
          onClick={(e) => {
            e.stopPropagation();
            onClickAction("delete", id, title);
          }}
        />
      ) : null}
    </ContainerActions>
  </ContainerElementList>
);

export default React.memo(ElementList);
