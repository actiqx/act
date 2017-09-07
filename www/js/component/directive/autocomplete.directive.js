(function () {
  'use strict';

  angular
    .module('app.directive')
    .directive('autoComplete', autoComplete);


  autoComplete.$inject = ['$q'];
  function autoComplete($q) {

    var directive = {
      restrict: 'E',
      scope: {
        model: '=',
        label: '@',
        func: '&',
        iconPrefix: '@',
        property: '@',
        onModelChanged: '&',
        onSelect: '&',
        validadeObject: '@',
        limit: '@'
      },
      link: link,
      templateUrl: 'js/component/directive/autocomplete.template.html'
    }
    return directive;

    function link(scope, element, attrs) {

      scope.func = scope.func()
      scope.onModelChanged = scope.onModelChanged()
      scope.onSelect = scope.onSelect()

      scope.closed = false
      // in progress
      scope.limit = scope.limit || 10

      scope.iconPrefixDefined = iconPrefixDefined
      scope.modelChanged = modelChanged
      scope.match = match
      scope.select = select
      scope.buildItemDescription = buildItemDescription

      function modelChanged(model) {
        scope.closed = false
        callIfDefined(scope.onModelChanged, model)

        $q.when(scope.func(model))
          .then(function (response) {
            scope.items = response
          })

      }

      function iconPrefixDefined() {
        return angular.isDefined(scope.iconPrefix)
      }

      function match(item, model) {
        if (!angular.isObject(model)) {
          return (item.toUpperCase()).indexOf(model.toUpperCase()) != -1
        }
      }

      function select(item, model) {
        scope.model = item
        scope.closed = true
        callIfDefined(scope.onSelect, item, model)
      }

      function callIfDefined(func, argumentOne, argumentTwo) {
        if (func) {
          func(argumentOne, argumentTwo)
        }
      }

      // in progress
      function buildItemDescription(item, model, isHighlightText) {
        if (isHighlightText) {
          var rg = new RegExp(item, "g")
          return model.replace(rg, '')
        }
        var rg = new RegExp(model, "g")
        return item.replace(rg, '')
      }

      function validadeObject(model) {
        if (!angular.isObject(model) && scope.autoCompleteForm.$dirty) {
          return setValidity('invalidObject', false)
        }
      }

      function setValidity(key, isValid) {
        ngForm.$setValidity(key, isValid)
      }

      // in progress
      element.bind('blur', function () {
        if (scope.validadeObject != false || scope.validadeObject != 'false') {
          validadeObject()
        }
      })
    }


  }

}());
