!function ($) {
  $(function(){
	
	$('.dropdown-toggle').dropdown()
	
	$('.navbar').scrollspy()
	
	$(".collapse").collapse()
	
	 
$(document).ready(function() {
  $('.prettyprint').html(function(i,h){
    return h.replace(/[<>\"\'\t\n]/g, function(m) { return {
      '<' : '&lt;',
      '>' : '&gt;',
      "'" : '&#39;',
      '"' : '&quot;',
      '\t': '  ',
      '\n': '<br/>' // needed for IE
    }[m]});
  });
    window.prettyPrint && prettyPrint();
});
    
})
}(window.jQuery)