import assert from 'power-assert';
import domUtil from './util/dom';

describe('index', () => {
  const target = document.querySelector('#content');

  beforeEach(() => {
    target.innerHTML = '';
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
