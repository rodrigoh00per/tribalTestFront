import React from "react";
import Wrapper from "../../components/Wrapper/Wrapper.component";
import { shallow, mount } from "enzyme";
import Theme from "../../styles/Themes/Theme.styles";


jest.mock('react-i18next', () => ({
    useTranslation: () => ({ t: key => key })
}));


describe("----TEST OF THE WRAPPER---", () => {

    it("take a snapshot of the wrapper component", () => {
        expect(shallow(<Wrapper />)).toMatchSnapshot();
    })

    it("check children", () => {
        const mockChildren = <div>test children</div>;
        const wrapper = mount(<Wrapper children={mockChildren} />, {
            wrappingComponent: Theme
        })
        expect(wrapper.props().children).toEqual(mockChildren);
    });

});

