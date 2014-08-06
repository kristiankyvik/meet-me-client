var TinderAjax = (function() {
    return {
        getJSON : function(url) {
        	$.get(url, function(data) {
        		return JSON.parse(data);
        	});
        }
    };
}());