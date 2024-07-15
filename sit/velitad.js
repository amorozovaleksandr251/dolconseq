Object.defineProperty(Product.prototype, 'scale', {
  value: function(multiplier) {
    this.product *= multiplier;
  },
  enumerable: true
});
