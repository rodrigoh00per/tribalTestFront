import axios from "axios";

const getEndpoints = {
    business: {
        get: () => `${process.env.REACT_APP_TRIBAL_TEST_SERVICE}/business`,
        post: () => `${process.env.REACT_APP_TRIBAL_TEST_SERVICE}/business`,
        put: ({ businessId }) => `${process.env.REACT_APP_TRIBAL_TEST_SERVICE}/business/${businessId}`,
        delete: ({ businessId }) => `${process.env.REACT_APP_TRIBAL_TEST_SERVICE}/business/${businessId}`,
    },
    persons: {
        get: ({ businessId }) => `${process.env.REACT_APP_TRIBAL_TEST_SERVICE}/business/${businessId}/persons`,
        post: ({ businessId }) => `${process.env.REACT_APP_TRIBAL_TEST_SERVICE}/business/${businessId}/persons`,
        put: ({ businessId, personId }) => `${process.env.REACT_APP_TRIBAL_TEST_SERVICE}/business/${businessId}/persons/${personId}`,
        delete: ({ businessId, personId }) => `${process.env.REACT_APP_TRIBAL_TEST_SERVICE}/business/${businessId}/persons/${personId}`,
    }
}

export const callApi = (type, action, queryParams, data) => {
    return new Promise(async (resolve, reject) => {

        try {
            const response = await axios({
                url: getEndpoints[type][action](queryParams),
                method: type,
                data, headers: {
                    "x-api-key": process.env.REACT_APP_TRIBAL_TEST_API_KEY,
                    "Content-Type": "application/json",
                }
            })
            return resolve(response);
        }

        catch (e) {
            return reject(e);
        }

    })
}