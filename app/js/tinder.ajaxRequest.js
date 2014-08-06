var TinderAjax = function() {
    return {
        getJSON : function(url) {
           var response = '';
            $.ajax({ type: "GET",   
            url: url,   
            async: false,
            success : function(text)
             {
               response = text;
              }
            });
          return response;
          }
       }
};