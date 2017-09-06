import Ember from 'ember';

const {
  Component,
} = Ember;

const MDLLayoutComponent = Component.extend({
  classNames: ['mdl-layout', 'mdl-js-layout'],
  classNameBindings: [
    'isFixed:mdl-layout--fixed-header',
  ],

  isFixed: false,

  contentComponent: 'mdl-layout/layout-content',
  headerComponent: 'mdl-layout/layout-header',
  spacerComponent: 'mdl-layout/layout-spacer',
  titleComponent: 'mdl-layout/layout-title',
});

export default MDLLayoutComponent;
