import Ember from 'ember';

const {
  assert,
  Component,
  get,
} = Ember;

const MDLButtonComponent = Component.extend({
  classNames: ['mdl-button'],
  classNameBindings: [
    'isIcon:mdl-button--icon',
    'isFab:mdl-button--fab',
    'isColored:mdl-button--colored',
    'useRipple:mdl-js-button',
    'useRipple:mdl-js-ripple-effect',
  ],

  isIcon:    false,
  isFab:     false,
  isColored: false,
  useRipple: true,

  onClick: () => assert('<component:mdl-button>: A closure action `onClick` was not provided'),

  click(e) {
    e.preventDefault();
    const onClick = get(this, 'onClick');

    return onClick();
  }

});

export default MDLButtonComponent;
