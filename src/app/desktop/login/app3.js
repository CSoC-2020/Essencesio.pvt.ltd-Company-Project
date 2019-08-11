// Google  Login
function onLoadFunction() {
    gapi.client.setApiKey('AIzaSyC9i3uEh3oCZr6oD1LfySJ3Kvla7SYDWIs');
    gapi.client.load('plus','v1', function() {});
}