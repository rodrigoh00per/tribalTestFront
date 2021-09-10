import { BusinessTypes } from "./Business.types";
import { all, takeLatest, call, put } from "redux-saga/effects";
import { createBusinessComplete, createBusinessError, createPersonComplete, createPersonError, deleteBusinessComplete, deleteBusinessError, deletePersonComplete, deletePersonError, getBusinessComplete, getBusinessError, getBusinessStart, getPersonsComplete, getPersonsError, getPersonsStart, updateBusinessComplete, updateBusinessError, updatePersonComplete, updatePersonError } from "./Business.actions";


import axios from "axios";

function* onListenGetBusinessStart() {
    try {

        const response = yield axios.get(`${process.env.REACT_APP_TRIBAL_TEST_SERVICE}/business`, {
            headers: {
                "x-api-key": process.env.REACT_APP_TRIBAL_TEST_API_KEY,
                "Content-Type": "application/json",
            }
        });

        // its more easy manage certain modification if you use an object than array
        const data = yield all(
            response.data.businesses.reduce((obj, { businessId, name }) => ({ ...obj, [businessId]: { businessId, name } }), {}))

        yield put(getBusinessComplete(data))
    }
    catch (error) {
        yield put(getBusinessError(error));
    }
}

function* onCreateBusinessStart({ payload: { name } }) {
    try {

        yield axios.post(`${process.env.REACT_APP_TRIBAL_TEST_SERVICE}/business`, { name }, {
            headers: {
                "x-api-key": process.env.REACT_APP_TRIBAL_TEST_API_KEY,
                "Content-Type": "application/json",
            }
        });
        yield put(createBusinessComplete());
    }
    catch (error) {
        yield put(createBusinessError(error));
    }
}
function* onListenCreateBusinessComplete() {
    /* why?  because the endpoint of create business return an empty object */
    yield put(getBusinessStart());
}

function* onUpdateBusinessStart({ payload: { businessId, data: dataToSend } }) {

    try {
        const response = yield axios.put(`${process.env.REACT_APP_TRIBAL_TEST_SERVICE}/business/${businessId}`, dataToSend, {
            headers: {
                "x-api-key": process.env.REACT_APP_TRIBAL_TEST_API_KEY,
                "Content-Type": "application/json",
            }
        });
        const { name } = response.data;

        yield put(updateBusinessComplete(businessId, { businessId, name }));
    }
    catch (error) {
        yield put(updateBusinessError(error));
    }

}

function* onDeleteBusinessStart({ payload: { businessId } }) {

    try {
        yield axios.delete(`${process.env.REACT_APP_TRIBAL_TEST_SERVICE}/business/${businessId}`, {
            headers: {
                "x-api-key": process.env.REACT_APP_TRIBAL_TEST_API_KEY,
                "Content-Type": "application/json",
            }
        });

        yield put(deleteBusinessComplete(businessId));
    }
    catch (error) {
        yield put(deleteBusinessError(error));
    }

}

function* onListenGetPersonsStart({ payload: { businessId } }) {

    try {

        const response = yield axios.get(`${process.env.REACT_APP_TRIBAL_TEST_SERVICE}/business/${businessId}/persons`, {
            headers: {
                "x-api-key": process.env.REACT_APP_TRIBAL_TEST_API_KEY,
                "Content-Type": "application/json",
            }
        });

        const data = yield all(
            response.data.persons.reduce((obj, { personId, ...restInfo }) => ({ ...obj, [personId]: { personId, ...restInfo } }), {}));

        yield put(getPersonsComplete(businessId, data));

    }
    catch (error) {
        yield put(getPersonsError(businessId, error));
    }

}


function* onCreatePersonStart({ payload: { businessId, data } }) {
    try {

        yield axios.post(`${process.env.REACT_APP_TRIBAL_TEST_SERVICE}/business/${businessId}/persons`, data, {
            headers: {
                "x-api-key": process.env.REACT_APP_TRIBAL_TEST_API_KEY,
                "Content-Type": "application/json",
            }
        });

        yield put(createPersonComplete(businessId));
    }
    catch (error) {
        yield put(createPersonError(businessId, error));
    }

}
function* onListenCreatePersonComplete({ payload: { businessId } }) {

    yield put(getPersonsStart(businessId))
}

function* onDeletePersonStart({ payload: { businessId, personId } }) {

    try {
        yield axios.delete(`${process.env.REACT_APP_TRIBAL_TEST_SERVICE}/business/${businessId}/persons/${personId}`, {
            headers: {
                "x-api-key": process.env.REACT_APP_TRIBAL_TEST_API_KEY,
                "Content-Type": "application/json",
            }
        });

        yield put(deletePersonComplete(businessId, personId));
    }
    catch (error) {
        yield put(deletePersonError(businessId, error));
    }

}
function* onUpdatePersonStart({ payload: { businessId, personId, data } }) {

    try {
        const response = yield axios.put(`${process.env.REACT_APP_TRIBAL_TEST_SERVICE}/business/${businessId}/persons/${personId}`, data, {
            headers: {
                "x-api-key": process.env.REACT_APP_TRIBAL_TEST_API_KEY,
                "Content-Type": "application/json",
            }
        });
       
        yield put(updatePersonComplete(businessId, personId, response.data ));
    
    }
    catch (error) {
        yield put(updatePersonError(businessId, error));
    }

}

function* listenGetBusinessStart() {
    yield takeLatest(
        BusinessTypes.GET_BUSINESS_START,
        onListenGetBusinessStart
    );
}
function* createBusinessStart() {
    yield takeLatest(
        BusinessTypes.CREATE_BUSINESS_START,
        onCreateBusinessStart
    );
}
function* listenCreateBusinessComplete() {
    yield takeLatest(
        BusinessTypes.CREATE_BUSINESS_COMPLETE,
        onListenCreateBusinessComplete
    );
}

function* updateBusinessStart() {
    yield takeLatest(
        BusinessTypes.UPDATE_BUSINESS_START,
        onUpdateBusinessStart
    );
}

function* deleteBusinessStart() {
    yield takeLatest(
        BusinessTypes.DELETE_BUSINESS_START,
        onDeleteBusinessStart
    );
}


/* sagas of persons */

function* listenGetPersonsStart() {
    yield takeLatest(
        BusinessTypes.GET_PERSONS_START,
        onListenGetPersonsStart
    );
}

function* createPersonStart() {
    yield takeLatest(
        BusinessTypes.CREATE_PERSON_START,
        onCreatePersonStart
    );
}
function* listenCreatePersonComplete() {
    yield takeLatest(
        BusinessTypes.CREATE_PERSON_COMPLETE,
        onListenCreatePersonComplete
    );
}


function* deletePersonStart() {
    yield takeLatest(
        BusinessTypes.DELETE_PERSON_START,
        onDeletePersonStart
    );
}


function* updatePersonStart() {
    yield takeLatest(
        BusinessTypes.UPDATE_PERSON_START,
        onUpdatePersonStart
    );
}


export default function* BusinessSagas() {
    yield all([
        call(listenGetBusinessStart),
        call(createBusinessStart),
        call(listenCreateBusinessComplete),
        call(deleteBusinessStart),
        call(updateBusinessStart),

        call(listenGetPersonsStart),
        call(createPersonStart),
        call(listenCreatePersonComplete),
        call(deletePersonStart),
        call(updatePersonStart)

    ]);
}
