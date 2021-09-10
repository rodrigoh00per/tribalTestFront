import { createSelector } from "reselect";
import moment from "moment";

const selectBusiness = (state) => state.business;

const selectBusinessList = createSelector([selectBusiness], (business) => business.list);

export const selectIsFetchingBsList = createSelector([selectBusinessList], (list) => list.isFetching);

export const selectBsListData = createSelector([selectBusinessList], (list) => list.data);

const selectSpecificBusiness = (businessId) => createSelector([selectBsListData], (data) =>
    data?.[businessId] ?? {}
);

export const selectPropOfSpecificBusiness = (businessId, property) => createSelector([selectSpecificBusiness(businessId)], (business) =>
    business?.[property] ?? null
);

export const selectBsListDataFormated = createSelector([selectBsListData], (data) => Object.values(data));

export const selectBsListError = createSelector([selectBusinessList], (list) => list.error);


/* persons selectors */


const selectBusinessPersons = createSelector([selectBusiness], (business) => business.persons);

const selectPersonsOfBusiness = (businessId) => createSelector([selectBusinessPersons], (persons) => persons?.[businessId] ?? {});

export const selectPersonsBsnsData = (businessId) => createSelector([selectPersonsOfBusiness(businessId)], (selectedPerson) => selectedPerson.data ?? {});

const selectSpecificPerson = (businessId, personId) => createSelector([selectPersonsBsnsData(businessId)], (dataBusinessId) => dataBusinessId?.[personId] ? ({ ...dataBusinessId?.[personId], join_date: moment(dataBusinessId?.[personId]?.join_date, 'YYYY-MM-DD').format('DD/MM/YY') }) : {});

export const selectPersonsBsnsDataFormated = (businessId) => createSelector([selectPersonsBsnsData(businessId)], (data) =>
    Object.values(data) ?? {});


export const selectInitialValuesOfActions = (type, businessId, personId) =>
    createSelector([getTypeOfSelectorData[type](businessId, personId)], (data) => data);



const getTypeOfSelectorData = {
    business: selectSpecificBusiness,
    persons: selectSpecificPerson,
};
