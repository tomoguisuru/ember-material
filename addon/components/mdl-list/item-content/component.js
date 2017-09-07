import Ember from 'ember';

const {
  assert,
  Component,
  computed,
  get,
} = Ember;

const MDLListItemContentComponent = Component.extend({
  cssBase: 'mdl-list__item',

  classNameBindings: ['itemType'],

  type: 'primary-content',

  types: [
    'avatar',
    'icon',
    'primary-content',
    'secondary-action',
    'secondary-content',
    'secondary-info',
    'text-body',
  ],

  itemType: computed('type', function() {
    const base = get(this, 'cssBase');
    const type = get(this, 'type');
    const types = get(this, 'types');

    assert(`<component:mdl-list/item-content: ${type} is not a valid value for type. (${types.join(', ')})`, types.includes(type));

    return `${base}-${type}`;
  }),


});

export default MDLListItemContentComponent;
