jQuery(document).ready(function(jQuery) {            
         
            var topMenu = jQuery("#nav-collapse"),
                offset = 40,
                topMenuHeight = topMenu.outerHeight()+offset,
                // All list items
                menuItems =  topMenu.find('a[href*="#"]'),
                // Anchors corresponding to menu items
                scrollItems = menuItems.map(function(){
                  var href = jQuery(this).attr("href"),
                  id = href.substring(href.indexOf('#')),
                  item = jQuery(id);
                  //console.log(item)
                  if (item.length) { return item; }
                });

            // so we can get a fancy scroll animation
            menuItems.click(function(e){
              var href = jQuery(this).attr("href"),
                id = href.substring(href.indexOf('#'));
                  offsetTop = href === "#" ? 0 : jQuery(id).offset().top-topMenuHeight+1;
              jQuery('html, body').stop().animate({ 
                  scrollTop: offsetTop
              }, 300);
              e.preventDefault();
            });

            // Bind to scroll
            jQuery(window).scroll(function(){
               // Get container scroll position
               var fromTop = jQuery(this).scrollTop()+topMenuHeight;

               // Get id of current scroll item
               var cur = scrollItems.map(function(){
                 if (jQuery(this).offset().top < fromTop)
                   return this;
               });

               // Get the id of the current element
               cur = cur[cur.length-1];
               var id = cur && cur.length ? cur[0].id : "";               

               menuItems.parent().removeClass("active");
               if(id){
                    menuItems.parent().end().filter("[href*='#"+id+"']").parent().addClass("active");
               }

            })
        })
function smallHomeBanner() {
        if ($('.small-home #banner').length > 0) {
            $('.small-home #banner').css('height', $(window).height());
        }
    }

    smallHomeBanner();

$('.image-large').magnificPopup({
        gallery: {
            enabled: true
        },
        type: 'image'
    });

    $('.play-video, .open-map').magnificPopup({
        type: 'iframe'
    });

    $.extend(true, $.magnificPopup.defaults, {
        iframe: {
            patterns: {
                youtube: {
                    index: 'youtube.com/',
                    id: 'v=',
                    src: 'http://www.youtube.com/embed/%id%?autoplay=1'
                }
            }
        }
    });

$(function() {

 $(".countdown-time")
  .countdown("2020/02/03", function(event) {
     $(".days").text(
       event.strftime('%D')
     );
    $(".hours").text(
      event.strftime('%H')
    );
 $(".minutes").text(
      event.strftime('%M')
    );
  $(".seconds").text(
      event.strftime('%S')
    );


  });
});
$(function() {
  $("#banner-slider").owlCarousel({
    items: 1,
    merge: true,
    loop: true,
    margin: 10,
    video: true,
    lazyLoad: true,
    center: true,
    nav:true,
     navText:['<div class="banner-slider"><div class="owl-controls"><div class="owl-buttons"><div class="owl-prev"><i class="fa fa-angle-left"></i></div></div></div></div>', 
    '<div class="banner-slider"><div class="owl-controls"><div class="owl-buttons"><div class="owl-next"><i class="fa fa-angle-right"></i></div></div></div></div>'],
    autoplay: true,
   autoplayHoverPause:true,
    responsive: {
      0: {
        items: 1
      },
      600: {
        items: 1
      },
      1000: {
        items: 1
      }
    }
  });
});



$(function() {
  $("#speech-slider").owlCarousel({
    // items: 1,
    singleItem:true,
    merge: true,
    loop: true,
    margin: 10,
    video: true,
    lazyLoad: true,
    center: true,
    nav:true,
    navText:['<div class="speech-slider"><div class="owl-controls"><div class="owl-buttons"><div class="owl-prev"><i class="fa fa-angle-left"></i></div></div></div></div>', 
    '<div class="speech-slider"><div class="owl-controls"><div class="owl-buttons"><div class="owl-next"><i class="fa fa-angle-right"></i></div></div></div></div>'],
   autoplay: true,
   autoplayHoverPause:true,
    responsive: {
      0: {
        items: 1
      },
      600: {
        items: 1
      },
      1000: {
        items: 1
      }
    }
  });
});

$(function() {
  $("#gallery-slider").owlCarousel({
    items: 1,
    merge: true,
    loop: true,
    video: true,
    lazyLoad: true,
    center: true,
    dots:false,
    autoplay:true,
    autoplayHoverPause:true,
    autoplayTimeout: 3000,
    responsive: {
      0: {
        items: 1
      },
      600: {
        items: 2
      },
      1000: {
        items: 4
      }
    }
  });
});

const player = new Plyr('#player', {});
const controls = `<iframe id="youtube-2547" frameborder="0" allowfullscreen="1" allow="accelerometer; 
      autoplay; encrypted-media; gyroscope; picture-in-picture" 
      title="Player for 850 meters (HD English version)" width="640" height="360" 
      src="https://www.youtube.com/embed/5cY5PHE4x_g?autoplay=0&amp;controls=0&amp;rel=0&amp;showinfo=0&amp;
      iv_load_policy=3&amp;cc_load_policy=0&amp;cc_lang_pref=en&amp;
      wmode=transparent&amp;modestbranding=1&amp;disablekb=1&amp;
      origin=http%3A%2F%2Fcodepassenger.com&amp;enablejsapi=1&amp;widgetid=1" 
      tabindex="-1">
</iframe>`;
// Expose player so it can be used from the console
window.player = player;
