import 'babel-polyfill';
import SubModule from './_submodule';

const subModule = new SubModule();
const subModuleHtml = subModule.getHtml();

document.querySelector('#content').innerHTML = subModuleHtml;
