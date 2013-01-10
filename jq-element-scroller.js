/**
 * jQuery port of mooElementScroller.js a plugin to scroll any element.
 * Based on the original work from Alex Hofbauer
 * @see http://mootools.net/forge/p/mooelementscroller
 * @see http://github.com/aleho/mootools-ElementScroller/
 *
 * @author Alejandro El Informático <www.alejandroelinformatico.com>
 *
 * @version 1.0
 *
 * @license GPL
 *
 * */
(function($)
{
  $.fn.elementScroller = function(opts)
  {
    var options =
        {
          resize:
          {
            enabled : false,
            offset  : 0
          },
          slow        : 5,
          fast        : 25,
          scrollSpeed : 30,
          hoverScroll : false
        };
    $.extend(true, options, opts);
    return this.each(function()
    {
      var _this    = $(this),
          element  = null,
          content  = _this,
          scroll   = null,
          modifier = 0,
          perID    = null,
          methods  =
          {
            initialize : function()
            {
              $(window).ready(function()
              {
                methods.prepare();
              });
              if(options.resize.enabled)
              {
                $(window).resize(function()
                {
                  methods.resizeEvent();
                });
              }
            },

            prepare : function()
            {
              // add a wrapping element with the id of the element to scroll + "-mes-wrapper"
              var new_id = content.attr('id') + '-mes-wrapper';
              element = $('<div />').attr('id',  new_id);
              content.wrap(element);
              element = $('#' + new_id); //the scroll element is no longer referenced
              // add the scroll area that will contain the scroll buttons
              scroll = $('<div />').addClass('mes-scrollarea');
              content.parent().append(scroll);
              var up = $('<div />').addClass('mes-up');
              up.on(
              {
                mouseenter: function()
                {
                  modifier = -(options.slow);
                  perID    = setInterval(function()
                  {
                    methods.buttonScroll();
                  }, 1);
                },
                mousedown: function()
                {
                  modifier = -(options.fast);
                },
                mouseup: function()
                {
                  modifier = -(options.slow);
                },
                mouseleave: function()
                {
                  clearInterval(perID);
                }
              });
              var down = $('<div />').addClass('mes-down');
              down.on(
              {
                mouseenter: function()
                {
                  modifier = options.slow;
                  perID    = setInterval(function()
                  {
                    methods.buttonScroll();
                  }, 1);
                },
                mousedown: function()
                {
                  modifier = options.fast;
                },
                mouseup: function()
                {
                  modifier = options.slow;
                },
                mouseleave: function()
                {
                  clearInterval(perID);
                }
              });
              scroll.append(up, down);
              if(options.resize.enabled)
              {
                methods.resizeEvent();
              }
              var scrollSpeed = options.scrollSpeed;
              element.on('mousewheel', function(e)
              {
                e.preventDefault();
                var original_event = e.originalEvent;
                //NOTE: ported from mootools in to get the wheel direction like mootools
                e.wheel = (original_event.wheelDelta) ?
                  original_event.wheelDelta / 120 :
                  -(original_event.detail || 0) / 3;
                var _element = $(this),
                    dir = (e.wheel < 0) ? 1 : -1,
                    scroll_top = (dir * scrollSpeed);
                _element.scrollTop += scroll_top;
              });
            },

            resizeEvent: function()
            {
              var newHeight = $(window).height() - options.resize.offset;
              element.height(newHeight);
              if(element.height() >= content.height())
              {
                scroll.fadeOut();
                element.scrollTo(0, 0);
              }
              else
              {
                scroll.fadeIn();
              }
            },

            buttonScroll: function()
            {
              var scroll_top = element.scrollTop() + modifier,
                  scroll_left = element.scrollLeft();
              scroll_top < 0 && (scroll_top = 0);
              scroll_left < 0 && (scroll_left = 0);
              element.scrollTo(scroll_top, scroll_left);
            }
          };
        methods.initialize(); //run all
    });
  };
})(jQuery);
