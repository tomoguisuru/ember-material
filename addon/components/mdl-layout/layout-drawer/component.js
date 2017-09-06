import Ember from 'ember';

const {
  Component,
} = Ember;

const MDLLayoutDrawerComponent = Component.extend({
  classNames: ['mdl-layout__drawer'],
  classNameBindings: ['isFixed:mdl-layout--fixed-drawer'],

  isFixed: false,
});

export default MDLLayoutDrawerComponent;
