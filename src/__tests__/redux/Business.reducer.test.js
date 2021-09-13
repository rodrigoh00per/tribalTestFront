import BusinessReducer, { INITIAL_STATE } from "../../redux/Business/Business.reducer";
import { BusinessTypes } from "../../redux/Business/Business.types";

describe("----TEST OF BUSINESS REDUCER---", () => {

    it("should return the initial state", () => {
        expect(BusinessReducer(undefined, {})).toEqual(INITIAL_STATE);
    })

    it("get business data complete ", () => {

        const dataFakeBusiness = {
            [13]: { businessId: 13, name: "dominos" },
            [22]: { businessId: 22, name: "starbucks" }
        };

        const mockAction = { type: BusinessTypes.GET_BUSINESS_COMPLETE, payload: { data: dataFakeBusiness } };

        expect(BusinessReducer(INITIAL_STATE, mockAction)).toEqual({
            ...INITIAL_STATE, list: {
                data: dataFakeBusiness, error: null, isFetching: false,
            },
        });

    })

    it("get persons  of  business ", () => {
        const fakeBusinessId = 13;
        const dataFakePersons = {

            "948f7596-b79f-4554-9c2a-61b902f6b8eb": {
                personId: "948f7596-b79f-4554-9c2a-61b902f6b8eb",
                name: "a",
                role: "b",
                email: "c@tu.com",
                phone: "3242343242",
                join_date: "2018-10-12"
            }
        }

        const mockAction = { type: BusinessTypes.GET_PERSONS_COMPLETE, payload: { data: dataFakePersons, businessId: fakeBusinessId } };

        expect(BusinessReducer(INITIAL_STATE, mockAction)).toEqual({
            ...INITIAL_STATE, persons: {
                [fakeBusinessId]: { data: dataFakePersons, error: null, isFetching: false, }
            },
        });

    })

});
