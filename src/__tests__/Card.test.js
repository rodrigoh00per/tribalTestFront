import React from "react";
import Card from "../components/Card/Card.component";
import { shallow, mount } from "enzyme";

describe("----TEST OF THE CARD---", () => {

    it("take a snapshot of the card component", () => {
        expect(shallow(<Card />)).toMatchSnapshot();
    })

    it("expect that receive a title", () => {
        const mockInfo = { title: "test title" };

        const wrapper = mount(<Card withDelete={true} withEdit={true} title={mockInfo.title} />);

        expect(wrapper.props().title).toEqual("test title");
    });

});
