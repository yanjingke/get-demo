import {bindAction, profile} from '../../util';
import {buildTree, emptyTree} from '../util';
import {TreeComponent} from './tree';

var tree: TreeComponent;

function destroyDom() {
  tree.data = emptyTree;
}

function createDom() {
  tree.data = buildTree();
}

function noop() {}

function init() {
  const rootEl = document.querySelector('tree');
  rootEl.textContent = '';
  tree = new TreeComponent(rootEl);

  bindAction('#destroyDom', destroyDom);
  bindAction('#createDom', createDom);

  bindAction('#updateDomProfile', profile(createDom, noop, 'update'));
  bindAction('#createDomProfile', profile(createDom, destroyDom, 'create'));
}

init();
