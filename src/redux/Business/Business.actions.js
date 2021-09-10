import { BusinessTypes } from "./Business.types";

/* actions of get Business */
export const getBusinessStart = () => ({ type: BusinessTypes.GET_BUSINESS_START })

export const getBusinessComplete = (data) => ({ type: BusinessTypes.GET_BUSINESS_COMPLETE, payload: { data } })

export const getBusinessError = (error) => ({ type: BusinessTypes.GET_BUSINESS_ERROR, payload: { error } })

/* actions of create Business */
export const createBusinessStart = (name) => ({ type: BusinessTypes.CREATE_BUSINESS_START, payload: { name } });

export const createBusinessComplete = () => ({ type: BusinessTypes.CREATE_BUSINESS_COMPLETE });

export const createBusinessError = (error) => ({ type: BusinessTypes.CREATE_BUSINESS_ERROR, payload: { error } });

/* actions of delete Business */
export const deleteBusinessStart = (businessId) => ({ type: BusinessTypes.DELETE_BUSINESS_START, payload: { businessId } });

export const deleteBusinessComplete = (businessId) => ({ type: BusinessTypes.DELETE_BUSINESS_COMPLETE, payload: { businessId } });

export const deleteBusinessError = (error) => ({ type: BusinessTypes.DELETE_BUSINESS_ERROR, payload: { error } });

/* actions of update Business */
export const updateBusinessStart = (businessId, data) => ({ type: BusinessTypes.UPDATE_BUSINESS_START, payload: { businessId, data } });

export const updateBusinessComplete = (businessId, data) => ({ type: BusinessTypes.UPDATE_BUSINESS_COMPLETE, payload: { businessId, data } });

export const updateBusinessError = (error) => ({ type: BusinessTypes.UPDATE_BUSINESS_ERROR, payload: { error } });



/* PERSONS OF BUSINESS */


/* actions of get persons of business */
export const getPersonsStart = (businessId) => ({ type: BusinessTypes.GET_PERSONS_START, payload: { businessId } })

export const getPersonsComplete = (businessId, data) => ({ type: BusinessTypes.GET_PERSONS_COMPLETE, payload: { businessId, data } })

export const getPersonsError = (businessId, error) => ({ type: BusinessTypes.GET_PERSONS_ERROR, payload: { businessId, error } })


/* actions of  create person */

export const createPersonStart = (businessId, data) => ({ type: BusinessTypes.CREATE_PERSON_START, payload: { businessId, data } })

export const createPersonComplete = (businessId) => ({ type: BusinessTypes.CREATE_PERSON_COMPLETE, payload: { businessId } })

export const createPersonError = (businessId, error) => ({ type: BusinessTypes.CREATE_PERSON_ERROR, payload: { businessId, error } })


/* actions of   delete person */
export const deletePersonStart = (businessId, personId) => ({ type: BusinessTypes.DELETE_PERSON_START, payload: { businessId, personId } })

export const deletePersonComplete = (businessId, personId) => ({ type: BusinessTypes.DELETE_PERSON_COMPLETE, payload: { businessId, personId } })

export const deletePersonError = (businessId, error) => ({ type: BusinessTypes.DELETE_PERSON_ERROR, payload: { businessId, error } })

/* actions of  update person */
export const updatePersonStart = (businessId, personId, data) => ({ type: BusinessTypes.UPDATE_PERSON_START, payload: { businessId, personId, data } })

export const updatePersonComplete = (businessId, personId, data) => ({ type: BusinessTypes.UPDATE_PERSON_COMPLETE, payload: { businessId, personId, data } })

export const updatePersonError = (businessId, error) => ({ type: BusinessTypes.UPDATE_PERSON_ERROR, payload: { businessId, error } })
