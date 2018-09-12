const PubSub = require('../helpers/pub_sub.js');

const DetailView = function (container) {
  this.container = container;
};

DetailView.prototype.bindEvents = function () {
  PubSub.subscribe('Countries:selected-country', (event) => {
    this.render(event.detail);
  });
};

DetailView.prototype.render = function (country) {
  document.body.style.backgroundImage = `url(${country.flag})`
};

module.exports = DetailView;
