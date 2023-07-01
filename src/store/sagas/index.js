import charactersSaga from './charactersSaga';
import locationsSaga from './locationsSaga';

const sagas = [...charactersSaga, ...locationsSaga];

export default sagas;
