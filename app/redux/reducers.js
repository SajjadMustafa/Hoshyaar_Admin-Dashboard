import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';

// const workflow = require('./WorkflowRedux').reducer;
// const nodes = require('./NodeRedux').reducer;
// const school = require('./SchoolRedux').reducer,

export default history => combineReducers({
    router: connectRouter(history),
    school: require('./SchoolRedux').reducer,

    // workflow,
    // nodes,
    // school,
});