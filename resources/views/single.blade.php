<!doctype html>
<html lang="en" ng-app="app">
<head>
  <meta charset="UTF-8">
  <title>AngularJS AuthenticationService Example</title>
  <link href="https://fonts.googleapis.com/css?family=Lato:100" rel="stylesheet" type="text/css">
  <link rel="stylesheet" href="/css/normalize.css">
  <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.5/css/bootstrap.min.css" media="screen" title="no title" charset="utf-8">
  <link rel="stylesheet" href="/css/foundation.min.css">
  <link rel="stylesheet" href="/css/style.css">
  <script src="/js/angular.js"></script>
  <script src="/js/angular-sanitize.js"></script>
  <script src="/js/underscore.js"></script>
  <script src="/js/app.js"></script>
  <script>
    angular.module("app").constant("CSRF_TOKEN", '<?php echo csrf_token(); ?>');
  </script>
</head>
<body>

  <div class="row">
    <div class="large-12">
      <center><div class="title">Phone Book prathap</div></center>
      <div class="row">
        <div class="large-6 large-offset-3">
          <div id="flash" class="alert-box alert" ng-show="flash">

          </div>
        </div>
      </div>
      <div id="view" ng-view></div>
    </div>
  </div>

</body>
</html>
