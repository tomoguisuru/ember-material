import Ember from 'ember';

const {
  Component,
} = Ember;

const MDLLayoutHeaderComponent = Component.extend({
  tagName: 'header',

  classNames: ['mdl-layout__header'],
  classNameBindings: [
    'isWaterfall:mdl-layout__header--waterfall',
  ],

  isWaterfall: true,
});

export default MDLLayoutHeaderComponent;
