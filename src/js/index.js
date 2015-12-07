import SubModule from './submodule';

const subModule = new SubModule();
const subModuleHtml = subModule.getHtml();

document.querySelector('#content').innerHTML = subModuleHtml;
