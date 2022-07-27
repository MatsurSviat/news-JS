import Loader from './loader';

class AppLoader extends Loader {
    constructor() {
        super('https://newsapi.org/v2/', {
            apiKey: 'abe942dc55e84d10abfc2a4fb0cb9b1e',
        });
    }
}

export default AppLoader;
