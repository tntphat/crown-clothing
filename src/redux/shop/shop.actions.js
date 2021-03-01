import ShopActionTypes from './shop.types';
import { firestore, collectionsSnapshotToMap} from '../../firebase/firebase.utils';

export const fetchCollectionsStart = () => ({
  type: ShopActionTypes.FETCH_COLLECTIONS_START,
});

export const fetchCollectionsSuccess = collectionsMap => ({
  type: ShopActionTypes.FETCH_COLLECTIONS_SUCCESS,
  payload: collectionsMap
});

export const fetchCollectionFailure = errorMessage => ({
  type: ShopActionTypes.FETCH_COLLECTIONS_FAILURE,
  payload: errorMessage
})

export const fetchCollectionsStartAsync = () => {
  console.log('DTKLLLLLLLLLLLLLL');
  return dispatch => {
    const collectionRef = firestore.collection('collections');
    dispatch(fetchCollectionsStart());
    collectionRef.get()
    .then( snapshot => {
        const collectionsMap = collectionsSnapshotToMap(snapshot);
        dispatch(fetchCollectionsSuccess(collectionsMap))
    })
    .catch( error => dispatch(fetchCollectionFailure(error.message)))
  }
}