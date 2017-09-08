import Ember from 'ember';

const {
  Component,
  computed,
  get,
} = Ember;

const MDLListItemComponent = Component.extend({
  tagName: 'li',

  classNames: ['mdl-list__item'],
  classNameBindings: ['cssLines', 'isActive:is-active'],

  isActive: false,

  lines: 1,

  cssLines: computed('lines', function() {
    const cssLines = {
      1: '',
      2: 'mdl-list__item--two-line',
      3: 'mdl-list__item--three-line',
    };

    return cssLines[get(this, 'lines')];
  }),


});

export default MDLListItemComponent;
