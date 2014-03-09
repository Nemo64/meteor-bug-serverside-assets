if (Meteor.isServer) {
  Tinytest.add("access yaml.yml though Assets", function (test) {
    var data = Assets.getText("packages/test/test.txt");
    test.equals(data, "file content");
  });
}

if (Meteor.isClient) {
  Tinytest.add("access yaml.yml though HTTP", function (test) {
    HTTP.get("packages/test/test.txt", function (error) {
      test.equals(error, null);
    });
  });
}
