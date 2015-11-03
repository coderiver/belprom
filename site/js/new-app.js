   jQuery(document).ready(function(){
		jQuery("div.mna").next().show();
		jQuery("div.mnsuba").parent().show();
		jQuery("div.mnsuba").parent().prev().addClass("mna").removeClass("mn");
		jQuery("div.menu_content:last").next().remove();
	 });
	 
 jQuery(document).ready(function() {
  jQuery("a.thickbox").fancybox({
   openEffect : 'none',
   closeEffect : 'none'
  });
 });
 
 jQuery(document).ready(function() {

	jQuery(".video").click(function() {
		jQuery.fancybox({
			'padding'		: 0,
			'autoScale'		: false,
			'transitionIn'	: 'none',
			'transitionOut'	: 'none',
			'title'			: this.title,
			'width'			: 640,
			'height'		: 385,
			'href'			: this.href.replace(new RegExp("watch\\?v=", "i"), 'v/'),
			'type'			: 'swf',
			'swf'			: {
			'wmode'				: 'transparent',
			'allowfullscreen'	: 'true'
			}
		});

		return false;
	});
});


jQuery( document ).ready(function() {
    $(document).on('click', function(){
      $('.bread-menu li > ul').removeClass('is-active');
    });
    
    jQuery(".top-menu > li").hover(

      function() {
        $(this).addClass("selected");

      }, function() {
        jQuery(this).removeClass("selected");
      }

    );

   $('.bread-menu > li ul a').on('click', function(e) {
      e.stopPropagation();
   });

  $('.bread-menu > li').on('click', function() {

      if ($(window).width() < 900) {
        $(this).find('ul').toggleClass('is-active');
      }
      return false;
    });
  

	jQuery(".bread-menu > li").hover(

      function() {
        if ($(window).width() > 900) {
        $(this).addClass("selected");
        }
      }, function() {
        if ($(window).width() > 900) {
        jQuery(this).removeClass("selected");
        }
      }

    );

    jQuery(".top-menu > li > ul > li").hover(

      function() {
        $(this).addClass("selected");
      }, function() {
        $(this).removeClass("selected");
      }

    );
	jQuery(".bread-menu > li > ul > li").hover(

      function() {
        if ($(window).width() > 900) {
          $(this).addClass("selected");
        }
      }, function() {
        if ($(window).width() > 900) {
          jQuery(this).removeClass("selected");
        }
      }

    );
    jQuery(".top-menu > li").has("ul").addClass("top-menu__with_sub");
	jQuery(".bread-menu > li").has("ul").addClass("top-menu__with_sub");
    jQuery('<i class="fa fa-chevron-down"></i><i class="fa fa-chevron-up"></i>').appendTo(".top-menu__with_sub > a");
    jQuery('<i class="fa fa-chevron-down"></i><i class="fa fa-chevron-up"></i>').appendTo(".bread-menu__with_sub > a");
    jQuery('.form_open_link').each(function() {
       var that = this;
       $(this).fancybox({
          beforeLoad: function() {
              var model = $(that).attr('model');
              $("#order_block textarea.textbody").val('Я хочу заказать цилиндр '+model);
           }
        });
    });
	    
	jQuery("#order_link").fancybox();
	
	jQuery("#test").fancybox();
	

	
    jQuery("#order_block .button").click(function(){
        var form = $("#order_block form");
		var field = new Array("username", "phone");
		var error=0;
		// обрабатываем отправку формы    
            
            $("form").find(":input").each(function() {// проверяем каждое поле в форме
                for(var i=0;i<field.length;i++){ // если поле присутствует в списке обязательных
                    if($(this).attr("name")==field[i]){ //проверяем поле формы на пустоту
                        
                        if(!$(this).val()){// если в поле пустое
                            $(this).css('border', 'red 1px solid');// устанавливаем рамку красного цвета
                            error=1;// определяем индекс ошибки       
                                                        
                        }
                        else{
                            $(this).css('border', 'gray 1px solid');
								error=0;// устанавливаем рамку обычного цвета
                        }
                        
                    }               
                }
           })
           
            if(error==0){ $.post('/contacts/?',form.serializeArray(),function(data){
				alert("Ваше сообщение отправлено.");
       });
			$.fancybox.close();
     
            }
        
		return false;
    });

});
jQuery(document).ready(function(){
  jQuery("#back-top").hide();
  $(function () {
    $(window).scroll(function () {
      if ($(this).scrollTop() > 100) {
        $('#back-top').fadeIn();
      } else {
        $('#back-top').fadeOut();
      }
    });

    $('#back-top a').click(function () {
      $('body,html').animate({
        scrollTop: 0
      }, 1000);
      return false;
    });
  });
});

jQuery(document).ready(function(){
 jQuery('.spoiler_links').click(function(){
  $(this).parent().children('div.spoiler_body').toggle('normal');
  return false;
 });
});


jQuery(document).ready(function(){
jQuery('.spoiler_button').click(function(){
    jQuery(this).next().toggle();
    jQuery(this).next().siblings('.spoiler').hide();
});
});



jQuery(document).ready(function() {
    jQuery("div.feedback").load( "http://www.belpromimpex.by/system/modules/user/form.html",{},function() {
        jQuery(".feedback-tabs").tabs({
            collapsible: true,
            active: false
        });

        jQuery("div.feedback").each(function (index) {
            var id = 'form_block' + index;
            jQuery(this).attr('id', id);

            jQuery('#' + id + ' form').each(function (i) {
                var form_id = id + '_form' + i;
                jQuery(this).attr('id', form_id);
            });
        });
    });

    jQuery(document).on('click', '.feedback-form-button', function (event) {
        event.preventDefault();
        var form_id = jQuery(this).closest('form').attr('id');

        var error = false;
        jQuery("#"+form_id).find('input[type="text"]').each(function () {
            var value = jQuery(this).val();
            if (value.length < 2)
                error = true;
        });
        if (error) {
            alert('Заполните все поля.');
        } else {
            var classArray = jQuery("#"+form_id).closest('div.feedback').prop('class').split(' ');
            var class_name = '';
            for (var i = 0; i < classArray.length; i++) {
                if (classArray[i] != 'feedback')
                    class_name = classArray[i];
            }

            jQuery("#"+form_id).ajaxSubmit({
		beforeSubmit: function(arr, $form, options){
			for(i in arr){
				if(arr[i].name=="email"){
					if(arr[i].value.indexOf('@') <0){
						console.log(arr[i].value);
						console.log(arr[i].value.indexOf('@'));
						alert('Поле EMail должно содержать @');
						return false;
					}
				}
			}
		},
                data: {page_link: window.location.href, class_name: class_name},
                url: 'http://www.belpromimpex.by/system/modules/user/feedback.php',
                success: function (responseText, statusText, xhr) {
                    jQuery(".feedback-tabs").tabs("option", "active", false);
                    alert("Ваше сообщение отправлено.");
                }
            });
        }

    });

    jQuery(document).on('keyup', '.feedback-form input', function (event) {
        var form = jQuery(this).closest('form');
        var post_data = form.serializeArray();
        post_data.push({name: 'save_type', value: 'true'});
        post_data.push({name: 'page_link', value:window.location.href});
        jQuery.ajax({
            type: "POST",
            url: 'http://www.belpromimpex.by/system/modules/user/feedback.php',
            data : post_data
        });
    });
    /*
    jQuery(document).on('click', '.c_lnk', function (event) {
        $('#slide_hub').animate({right: '-710px'},430);
        return false;
    });
    
    jQuery(document).on('click', '.o_lnk', function (event) {
        $('#slide_hub').animate({right: '-0px'},430);
        return false;
    });*/
    jQuery(document).on("click","a.open-slider",function(){
    	var el = jQuery(this);
    	el.hide();
    	jQuery(".sale-content").addClass("active");
    	jQuery("#slide_sale").animate({right: '-0px'},500,function(){
    		
    	});
    	return false;
    });
    jQuery(document).on("click",".slider-close",function(){
        
    	jQuery("#slide_sale").animate({right: '-860px'},500,function(){
	    	jQuery("a.open-slider").show();
	    	jQuery(".sale-content").removeClass("active");
    	});
    	return false;
    });
});

jQuery(document).ready(function(e) {
	if(jQuery("#lightSlider").length){
    jQuery("#lightSlider").lightSlider({
	    item: 1,
        gallery:true,
        vertical:true,
        verticalHeight:295,
        vThumbWidth:74,
        thumbItem:7,
        thumbMargin:10,
      	slideMargin:0,
      	controls: true
    });
	}
});