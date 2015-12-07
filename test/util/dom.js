import jsdom from 'jsdom';

const defaultHtml = '<!doctype html><html><body><div id="content"></div></body></html>';
const jsdomConfig = {};
const doc = jsdom.jsdom(defaultHtml, jsdomConfig);
const win = doc.defaultView;

global.document = doc;
global.window = win;

function propagateToGlobal (window) {
  for (let key in window) {
    if (!window.hasOwnProperty(key)) {
      continue;
    }
    if (key in global) {
      continue;
    }

    global[key] = window[key];
  }
}

propagateToGlobal(win);
