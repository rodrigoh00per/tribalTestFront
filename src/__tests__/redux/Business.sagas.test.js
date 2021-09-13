
import { takeLatest } from 'redux-saga/effects';
import { listenGetBusinessStart, onListenGetBusinessStart } from '../../redux/Business/Business.sagas';
import { BusinessTypes } from '../../redux/Business/Business.types';

describe('TEST REDUX SAGAS OF BUSINESS', () => {
    const genObject = listenGetBusinessStart();
    it('should wait for takeLatest listenGetBusinessStart  action and call onListenGetBusinessStart', () => {
        expect(genObject.next().value)
            .toEqual(takeLatest(BusinessTypes.GET_BUSINESS_START, onListenGetBusinessStart));
    });

    it('should be done on next iteration', () => {
        expect(genObject.next().done).toBeTruthy();
    });
});
