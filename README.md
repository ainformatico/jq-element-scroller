jquery element scroller
==============================================
jQuery port of mooElementScroller.js a plugin to scroll any element.

Based on the original work from [Alex Hofbauer](https://github.com/aleho)

* http://mootools.net/forge/p/mooelementscroller
* http://github.com/aleho/mootools-ElementScroller/

Requirements
---------------------------------------------
* [jquery +1.8](http://jquery.com/)
* [jQuery.ScrollTo](http://flesler.blogspot.com.es/2007/10/jqueryscrollto.html)

Usage
----------------------------------------------
Require `jquery`, `jQuery.ScrollTo` and then `jq-element-scroller`. Now you can:

    $('#sidebar')elementScroller();

Or with custom settings:

    $('#sidebar')elementScroller(
    {
      resize:
      {
        enabled : true,
        offset  : 180
      },
      slow: 2
    });

Params:

* `resize`
    * `enabled`
    * `offset`
* `slow`
* `fast`
* `scrollSpeed`
* `hoverScroll`

Support
----------------------------------------------
* IE 6+
* FF 3+
* Chrome 10+
* Opera 10+

Version history
----------------------------------------------
* **1.0**
  * Basic base code

Author
----------------------------------------------
Alejandro El Informático

License
----------------------------------------------
jquery element scroller is free software: you can redistribute it and/or modify
it under the terms of the GNU General Public License as published by
the Free Software Foundation, either version 3 of the License, or
(at your option) any later version.

jquery element scroller is distributed in the hope that it will be useful,
but WITHOUT ANY WARRANTY; without even the implied warranty of
MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.See the
GNU General Public License for more details.

You should have received a copy of the GNU General Public License
along with jquery element scroller. If not, see <http://www.gnu.org/licenses/>.
