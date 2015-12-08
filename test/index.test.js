import assert from 'power-assert';
import jsdomify from 'jsdomify';

describe('index', () => {
  let target;

  before(() => {
    jsdomify.create('<!doctype html><html><body><div id="content"></div></body></html>');
    target = document.querySelector('#content');
  });
  beforeEach(() => {
    target.innerHTML = '';
  });
  after(() => {
    jsdomify.destroy();
  });

  it('Can render html', () => {
    const assertHtmlString = '<div>SubModule#render</div>';

    const beforeHtmlString = target.innerHTML;
    require('../src/js/index.js');
    const afterHtmlString = target.innerHTML;

    assert(beforeHtmlString !== afterHtmlString);
    assert(afterHtmlString === assertHtmlString);
  });
});
