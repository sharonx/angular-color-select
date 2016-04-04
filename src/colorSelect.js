var app = angular.module('color-select', []);

app
  .directive('colorSelect', function ($window, $timeout) {
    /**
     * Attach a handler to the window resize event
     * that will resize the element to stretch down.
     */
    return {
      restrict: 'E',
      transclude: true,
      scope: {
        colorArray: '=',
        model: '='
      },
      templateUrl: 'colorSelect.html',
      link: function (scope, element, attrs) {
        
        scope.toggleDropDown = function(event) {
          var dropdown = $(event.target).parents('.select-button-group').find('.dropdown-menu');
          var isClose = dropdown.css('display') === 'none';
          if (isClose) {
            dropdown.css('display', 'block');  
          } else {
            dropdown.css('display', 'none');
          }
        };
        
        scope.setColor = function(event, color) {
           scope.model = color;
           var buttonText = $(event.target).parents('.select-button-group').find('.color-selection-text');
           var dropdown = $(event.target).parents('.dropdown-menu');
           buttonText.css('background-color', color);
           dropdown.css('display', 'none');
        }
      }
    } 
    
  });