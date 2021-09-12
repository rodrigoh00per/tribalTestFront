import React from "react";
import ElementList from "../components/Elementlist/ElementList.component";
import { SubTitleList } from "../components/Elementlist/ElementList.styles";
import { shallow, mount } from "enzyme";
import Theme from "../styles/Themes/Theme.styles";

jest.mock('react-i18next', () => ({
    useTranslation: () => ({ t: key => key })
}));

describe("----TEST OF THE ELEMENT LIST---", () => {

    it("take a snapshot of the element list component", () => {
        expect(shallow(<ElementList />)).toMatchSnapshot();
    })

    it("check if render the subtitle", () => {
        const mockSubtitle = "this a test subtitle";

        const wrapper = mount(<ElementList subtitle={mockSubtitle} />, {
            wrappingComponent: Theme
        })
        expect(wrapper.find(SubTitleList).children().text()).toEqual(mockSubtitle);
    });

    it("check if render the subtitle is undefined", () => {

        const wrapper = mount(<ElementList />, {
            wrappingComponent: Theme
        })

        expect(wrapper.find(SubTitleList)).toHaveLength(0);
    });

});

