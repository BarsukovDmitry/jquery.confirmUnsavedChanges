/*
    jquery.confirmUnsavedChanges
	http://github.com/BarsukovDmitry/jquery.confirmUnsavedChanges/
	
	Author: Barsukov Dmitry
	Date: 6/2/2014
*/

(function ($) {

	var unsaved = false;

    $.fn.extend({
    	confirmUnsavedChanges: function (message) {

            //EVENTS

            $(this).find('input,select,textarea').change(function() {
                unsaved = true;
            });

            $(window).on('beforeunload', function () {
                if (unsaved) {
                	return message;
                }
            });

        }
    });

}(window.jQuery));