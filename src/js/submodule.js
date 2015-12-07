export default class SubModule {
  constructor () {
    console.log('SubModule#constructor()');
  }

  getHtml () {
    return '<div>SubModule#render</div>';
  }
}
