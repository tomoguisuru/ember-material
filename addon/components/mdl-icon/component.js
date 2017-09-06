import Ember from 'ember';

const {
  Component,
  assert,
  get,
} = Ember;

const MDLIconComponent = Component.extend({
  tagName: 'i',

  classNames: ['material-icons'],

  type: null,

  init() {
    this._super(...arguments);

    assert('<component:mdl-icon>: `type` is required', get(this, 'type'));
  }

});

export default MDLIconComponent;
