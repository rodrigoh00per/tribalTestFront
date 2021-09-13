import { BusinessTypes } from "./Business.types";
import { all, takeLatest, call, put } from "redux-saga/effects";
import { createBusinessComplete, createBusinessError, createPersonComplete, createPersonError, deleteBusinessComplete, deleteBusinessError, deletePersonComplete, deletePersonError, getBusinessComplete, getBusinessError, getBusinessStart, getPersonsComplete, getPersonsError, getPersonsStart, updateBusinessComplete, updateBusinessError, updatePersonComplete, updatePersonError } from "./Business.actions";
import { callApi } from "../../utils/api/api";

 export function* onListenGetBusinessStart() {
    try {
        const response = yield call(callApi, "business", "get", undefined, undefined);

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

        yield call(callApi, "business", "post", undefined, { name });

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
        const response = yield call(callApi, "business", "put", { businessId }, dataToSend);

        const { name } = response.data;

        yield put(updateBusinessComplete(businessId, { businessId, name }));
    }
    catch (error) {
        yield put(updateBusinessError(error));
    }

}

function* onDeleteBusinessStart({ payload: { businessId } }) {

    try {
        yield call(callApi, "business", "delete", { businessId }, undefined);

        yield put(deleteBusinessComplete(businessId));
    }
    catch (error) {
        yield put(deleteBusinessError(error));
    }

}

function* onListenGetPersonsStart({ payload: { businessId } }) {

    try {
        const response = yield call(callApi, "persons", "get", { businessId }, undefined);

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
        yield call(callApi, "persons", "post", { businessId }, data);

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
        yield call(callApi, "persons", "delete", { businessId, personId }, undefined);

        yield put(deletePersonComplete(businessId, personId));
    }
    catch (error) {
        yield put(deletePersonError(businessId, error));
    }

}
function* onUpdatePersonStart({ payload: { businessId, personId, data } }) {

    try {
        const response = yield call(callApi, "persons", "put", { businessId, personId }, data);

        yield put(updatePersonComplete(businessId, personId, response.data));

    }
    catch (error) {
        yield put(updatePersonError(businessId, error));
    }

}

export function* listenGetBusinessStart() {
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
