import configureStore from './configureStore'
import rootSaga from '../Sagas/'
import reducers from './reducers'



export default () => {
    let { store, sagasManager, sagaMiddleware } = configureStore(reducers, rootSaga)

    if (module.hot) {
        module.hot.accept(() => {
            const newYieldedSagas = require('../Sagas').default
            sagasManager.cancel()
            sagasManager.done.then(() => {
                sagasManager = sagaMiddleware.run(newYieldedSagas)
            })
        })
    }

    return store
}
