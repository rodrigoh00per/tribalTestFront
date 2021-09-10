import { BusinessTypes } from "./Business.types";
import { omit } from "lodash";


/* functions for reducers */

const actionBusinessStart = (state) => ({ ...state, list: { ...state.list, isFetching: true, error: null } })

const actionBusinessError = (state, payload) => ({ ...state, list: { ...state.list, isFetching: false, error: payload.error } });

const actionPersonStart = (state, payload) => ({
    ...state, persons: {
        ...state.persons,
        [payload.businessId]: {
            ...state.persons[payload.businessId],
            error: null, isFetching: true,
        }
    }
})

const actionPersonError = (state, payload) => (
    {
        ...state, persons: {
            ...state.persons,
            [payload.businessId]: {
                ...state.persons[payload.businessId],
                error: payload.error, isFetching: false,
            }
        }
    });


const functionsOfReducers = {

    /* REDUCERS OF BUSINESS */
    [BusinessTypes.GET_BUSINESS_START]:
        (state) => ({ ...state, list: { ...state.list, data: {}, error: null, isFetching: true } }),

    [BusinessTypes.GET_BUSINESS_COMPLETE]: (state, payload) =>
        ({ ...state, list: { ...state.list, data: payload.data, error: null, isFetching: false } }),

    [BusinessTypes.GET_BUSINESS_ERROR]: (state, payload) =>
        ({ ...state, list: { ...state.list, data: {}, error: payload.error, isFetching: false } }),

    [BusinessTypes.CREATE_BUSINESS_START]: actionBusinessStart,
    [BusinessTypes.UPDATE_BUSINESS_START]: actionBusinessStart,
    [BusinessTypes.DELETE_BUSINESS_START]: actionBusinessStart,

    [BusinessTypes.CREATE_BUSINESS_COMPLETE]:
        (state) => ({ ...state, list: { ...state.list, isFetching: false, error: null }, }),

    [BusinessTypes.DELETE_BUSINESS_COMPLETE]:
        (state, payload) => ({ ...state, list: { ...state.list, isFetching: false, error: null, data: omit(state.list.data, payload.businessId) }, }),

    [BusinessTypes.UPDATE_BUSINESS_COMPLETE]:
        (state, payload) => ({
            ...state, list: {
                ...state.list, isFetching: false, error: null,
                data: { ...state.list.data, [payload.businessId]: payload.data }
            }
        }
        ),

    [BusinessTypes.CREATE_BUSINESS_ERROR]: actionBusinessError,
    [BusinessTypes.UPDATE_BUSINESS_ERROR]: actionBusinessError,
    [BusinessTypes.DELETE_BUSINESS_ERROR]: actionBusinessError,

    /* REDUCERS OF PERSONS */
    [BusinessTypes.GET_PERSONS_START]: (state, payload) =>
    ({
        ...state, persons: {
            ...state.persons,
            [payload.businessId]: {
                data: {}, error: null, isFetching: true,
            }
        }
    }),
    [BusinessTypes.GET_PERSONS_COMPLETE]: (state, payload) =>
    ({
        ...state, persons: {
            ...state.persons,
            [payload.businessId]: {
                ...state.persons[payload.businessId],
                data: payload.data, error: null, isFetching: false,
            }
        }
    }),
    [BusinessTypes.GET_PERSONS_ERROR]:
        (state, payload) => ({
            ...state, persons: {
                ...state.persons,
                [payload.businessId]: {
                    ...state.persons[payload.businessId],
                    data: {}, error: payload.error, isFetching: false,

                }
            }
        })
    ,

    [BusinessTypes.CREATE_PERSON_START]: actionPersonStart,
    [BusinessTypes.UPDATE_PERSON_START]: actionPersonStart,
    [BusinessTypes.DELETE_PERSON_START]: actionPersonStart,

    [BusinessTypes.CREATE_PERSON_COMPLETE]: (state, payload) =>
    ({
        ...state, persons: {
            ...state.persons,
            [payload.businessId]: {
                ...state.persons[payload.businessId],
               /*  data: { ...state.persons[payload.businessId].data, [payload.personId]: { personId: payload.personId, ...payload.data } }, */
                error: null, isFetching: false,
            }
        }
    }),

    [BusinessTypes.DELETE_PERSON_COMPLETE]: (state, payload) =>
    ({
        ...state, persons: {
            ...state.persons,
            [payload.businessId]: {
                ...state.persons[payload.businessId],
                data: omit(state.persons[payload.businessId].data, payload.personId)
            },
            error: null, isFetching: false,
        }
    }),

    [BusinessTypes.UPDATE_PERSON_COMPLETE]: (state, payload) =>
    ({
        ...state, persons: {
            ...state.persons,
            [payload.businessId]: {
                ...state.persons[payload.businessId],
                data: { ...state.persons[payload.businessId].data, [payload.personId]: payload.data }
            },
            error: null, isFetching: false,
        }
    }),

    [BusinessTypes.CREATE_PERSON_ERROR]: actionPersonError,
    [BusinessTypes.UPDATE_PERSON_ERROR]: actionPersonError,
    [BusinessTypes.DELETE_PERSON_ERROR]: actionPersonError,

}


const INITAL_STATE = {
    list: {
        data: {}, error: null, isFetching: false,
    },
    persons: {
    }
};


export default (state = INITAL_STATE, action) =>
    !functionsOfReducers?.[action.type] ? state : functionsOfReducers[action.type](state, action.payload);






















