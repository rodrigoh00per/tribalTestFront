import React, { Fragment } from "react";
import Card from "../../../../components/Card/Card.component";
import ElementList from "../../../../components/ElementList/ElementList.component";
import { ContainerList } from "./List.styles";
const List = ({ data, onClickAction, showCards = false }) => (
  <ContainerList showCards={showCards}>
    {data.map(
      ({ personId: id, name: title, role: subtitle, email, phone }, i) => (
        <Fragment key={`${id}_${i}`}>
          {showCards ? (
            <Card
              id={id}
              title={title}
              subtitle={subtitle}
              email={email}
              phone={phone}
              onClickAction={onClickAction}
              withDelete={true}
              withEdit={true}
            />
          ) : (
            <ElementList
              id={id}
              title={title}
              subtitle={subtitle}
              onClickAction={onClickAction}
              withDelete={true}
              withEdit={true}
            />
          )}
        </Fragment>
      )
    )}
  </ContainerList>
);

export default List;
