import Ember from 'ember';

const {
  Component,
} = Ember;

const MDLListComponent = Component.extend({
  tagName: 'ul',

  classNames: ['mdl-list'],

  contentComponent: 'mdl-list/item-content',
  itemComponent: 'mdl-list/list-item',
});

export default MDLListComponent;
