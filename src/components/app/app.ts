import { RootObjectArticle, RootObjectSource } from '../../types/index';
import AppController from '../controller/controller';
import { AppView } from '../view/appView';

class App {
    controller: AppController;
    view: AppView;
    constructor() {
        this.controller = new AppController();
        this.view = new AppView();
    }

    start() {
        (document.querySelector('.sources') as HTMLElement).addEventListener('click', (e) =>
            this.controller.getNews<Readonly<RootObjectArticle>>(e, (data) => this.view.drawNews(data!))
        );
        this.controller.getSources<Readonly<RootObjectSource>>((data) => this.view.drawSources(data!));
    }
}

export default App;
