import Ember from 'ember';

const {
  Component,
} = Ember;

const MDLCardComponent = Component.extend({
  classNames: ['mdl-card'],

  actionsComponent: 'mdl-card/card-actions',
  menuComponent: 'mdl-card/card-menu',
  supportingTextComponent: 'mdl-card/card-supporting-text',
  titleComponent: 'mdl-card/card-title',
});

export default MDLCardComponent;
