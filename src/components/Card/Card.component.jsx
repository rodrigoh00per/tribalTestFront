import React, { useMemo } from "react";
import { DeleteIcon, EditIcon } from "../../styles/Icons.styles";
import { getMask } from "../Forms/Mask.utils";
import {
  ContainerCard,
  Email,
  IconsCard,
  Phone,
  Subtitle,
  TextsBottomCard,
  TextsTopCard,
  Title,
} from "./Card.styles";

const Card = ({
  id,
  title = "",
  subtitle = "",
  phone = "",
  email = "",
  withDelete,
  withEdit,
  onClickAction = () => {},
}) => {
  const phoneFormated = useMemo(
    () => getMask("phone")(phone),
    [phone]
  );

  return (
    <ContainerCard>
      <TextsTopCard>
        <Title>{title}</Title>
        <Subtitle>{subtitle}</Subtitle>
      </TextsTopCard>
      <IconsCard>
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
      </IconsCard>
      <TextsBottomCard>
        <Phone>{phoneFormated}</Phone>
        <Email>{email}</Email>
      </TextsBottomCard>
    </ContainerCard>
  );
};

export default React.memo(Card);
