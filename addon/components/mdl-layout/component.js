import Ember from 'ember';

const {
  Component,
} = Ember;

const MDLLayoutComponent = Component.extend({
  classNames: ['mdl-layout', 'mdl-js-layout'],
  classNameBindings: [
    'isDrawerFixed:mdl-layout--fixed-drawer',
    'isFixed:mdl-layout--fixed-header',
  ],

  isDrawerFixed: false,
  isFixed: false,

  contentComponent: 'mdl-layout/layout-content',
  drawerComponent: 'mdl-layout/layout-drawer',
  headerComponent: 'mdl-layout/layout-header',
  spacerComponent: 'mdl-layout/layout-spacer',
  titleComponent: 'mdl-layout/layout-title',
});

export default MDLLayoutComponent;
