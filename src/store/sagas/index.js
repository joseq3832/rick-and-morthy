import charactersSaga from './charactersSaga';
import locationsSaga from './locationsSaga';
import episodesSaga from './episodesSaga';

const sagas = [...charactersSaga, ...locationsSaga, ...episodesSaga];

export default sagas;
