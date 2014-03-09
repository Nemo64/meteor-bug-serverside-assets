Package.describe({
  summary: "test package for Assets bug to access dynamicly created assets"
});

Package.on_use(function(api) {
  api.use(["http"]);
  api.add_files(["test.txt"], ["client", "server"]);
});

Package.on_test(function (api) {
  api.use(["test", "tinytest", "http"], ["client", "server"]);
  api.add_files(["test.js"], ["client", "server"]);
});
