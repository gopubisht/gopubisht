/*-----------------------------------------------
Theme Name: Daily Times
Designer : Gopu Bisht
Created: Mar, 2014
Theme URI: http://devbhoomiuttarakhand.com
Author: Gopu Bisht
Author URI: http://gopubisht.blogspot.com
----------------------------------------------- */
(function($){$.fn.equalHeights=function(minHeight,maxHeight){tallest=(minHeight)?minHeight:0;this.each(function(){if($(this).height()>tallest){tallest=$(this).height();}});if((maxHeight)&&tallest>maxHeight)tallest=maxHeight;return this.each(function(){$(this).height(tallest).css("overflow","auto");});}})(jQuery);
