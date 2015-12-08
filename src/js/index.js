import 'babel-polyfill';
import SubModule from './SubModule';

const subModule = new SubModule();
const subModuleHtml = subModule.getHtml();

document.querySelector('#content').innerHTML = subModuleHtml;
