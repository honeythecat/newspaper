newspaper.controller('ReportersCtrl', function ReportersCtrl($scope, $stateParams, BeatsFactory, UtilitiesFactory) {
  $scope.beat = UtilitiesFactory.findById(BeatsFactory.beats, $stateParams.beatId)
  $scope.addReporter = function() {
    $scope.beat.reporters.push({
      name: $scope.reporterName,
      start: $scope.reporterStartDate,
      end: $scope.reporterEndDate,
      birthday: $scope.reporterBirthday });
    $scope.reporterName= null;
  }
});
