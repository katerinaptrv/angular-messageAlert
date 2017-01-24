angular.module('messageAlert', []).directive('messageAlert', function(){
	    return {
	      restrict: 'EA',
	      template: 
	             '<div ng-class="classe" class="alert-dismissible" ng-style="style" id="divAlert">'+
	             	'<button type="button" class="close" data-dismiss="alert" aria-hidden="true" ng-click="show = false">×</button>'+
			        '<h4><i class="icon fa fa-ban"></i><span ng-bind="title"></span></h4>' +
			        '<span ng-bind="message"></span>'+
	             '</div>'
	      ,
	      scope: {
	    	classe: '=messageAlertClasse',
	        title: '=messageAlertTitle',
	        message: '=messageAlertMessage',
	        show: '=messageAlertShow',
	      },
	      link: function(scope){
	    	  scope.style = {display: "none"};
	    	  
	    	  scope.$watch('show', function(value) {
	    	        if(value)
	    	        	scope.style = {};
	    	        else
	    	        	scope.style = {display: "none"};
	    	   });
	      },
	    };
	 });
