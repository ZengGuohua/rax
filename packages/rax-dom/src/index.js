import { render as originRender, unmountComponentAtNode, findDOMNode } from 'rax';

const DOM_OPTIONS = {
  deviceWidth: 750
};

export function render(element, container, callback) {
  return originRender(element, container, DOM_OPTIONS, callback);
}

export function unstable_renderSubtreeIntoContainer(parentComponent, element, container, callback) {
  // TODO
  return render(element, container, callback);
}

export { unmountComponentAtNode, findDOMNode };
