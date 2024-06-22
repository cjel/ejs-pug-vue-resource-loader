module.exports = function (content) {
  this.cacheable();
  var callback = this.async();
  let resourcePath =
    '!!ejs-loader-compiled!pug-plain-loader!vue-loader!'
    + this.resourcePath
    + '?vue&type=template&id=foobar'
  try {
    this.importModule(
      resourcePath,
      {},
      function(err, result) {
        if (err) {
          return callback(err);
        }
        callback(null, result());
      }
    );
  } catch (error) {
    callback(err);
  }
  return;
};
