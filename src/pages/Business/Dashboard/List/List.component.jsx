import React, { Fragment } from "react";
import ElementList from "../../../../components/ElementList/ElementList.component";
import { ContainerList } from "./List.styles";
const List = ({ data, onClickAction }) => (
  <ContainerList>
    {data.map(({ businessId: id, name: title }) => (
      <Fragment key={id}>
        <ElementList
          id={id}
          title={title}
          onClickAction={onClickAction}
          withDelete={true}
          withEdit={true}
        />
      </Fragment>
    ))}
  </ContainerList>
);

export default List;
