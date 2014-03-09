// client side
if (Meteor.isClient) {
  HTTP.get("/packages/test/test.txt", function (err, data) {
    console.log(arguments);
    Session.set("http_result", data.content);
  });
  Template.index.client = function () {
    return Session.get("http_result");
  };
}


// server side
if (Meteor.isClient) {
  Template.index.server = function () {
    return Meteor.call("readFile");
  };
}
if (Meteor.isServer) {
  Meteor.methods({
    "readFile": function () {
      return Assets.getText("packages/test/test.txt");
    }
  });
}
