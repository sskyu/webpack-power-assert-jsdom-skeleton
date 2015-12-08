import assert from 'power-assert';
import SubModule from '../src/js/SubModule';

describe('SubModule', () => {
  let subModule;

  it('Can create instance', () => {
    subModule = new SubModule();
    assert(subModule instanceof SubModule === true);
  });

  it('Can get html string', () => {
    const assertHtml = '<div>SubModule#render</div>';
    const result = subModule.getHtml();
    assert(result === assertHtml);
  });
});
