/*
 Copyright 2013 Blue State Digital, Inc.
 Blue State Digital Google Analytics Integration Library

 Licensed under the Apache License, Version 2.0 (the "License");
 you may not use this file except in compliance with the License.
 You may obtain a copy of the License at

 http://www.apache.org/licenses/LICENSE-2.0

 Unless required by applicable law or agreed to in writing, software
 distributed under the License is distributed on an "AS IS" BASIS,
 WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 See the License for the specific language governing permissions and
 limitations under the License.
*/
var _gaq=_gaq||[],optimizely=optimizely||[];_gaq.push(["_setSiteSpeedSampleRate",10],["_setAllowAnchor",!0],["_setAllowLinker",!0]);
(function(c){function n(a){var b=document.createElement("a");b.href=a;return b}function o(a){return a.charAt(0).toUpperCase()+a.slice(1).toLowerCase()}function l(a){return a&&n(a).pathname.replace(/(^\/?)/,"/")}function f(a){return(RegExp("(?:^|; )"+a+"=([^;]*)").exec(document.cookie)||[]).pop()}function i(a,b,j){ga_integration_config.nocookie||(j=j?"; expires="+(new Date(864E5*j+(new Date).getTime())).toGMTString():"",document.cookie=a+"="+b+j+"; path=/; domain="+ga_integration_config.cookiedomain)}
function m(a,b,j,c,g){e.event(a,b,c,g);e.social(a,b,j,c)}function p(a){var b=1,c=0,d;if(a){b=0;for(d=a.length-1;0<=d;d--)c=a.charCodeAt(d),b=(b<<6&268435455)+c+(c<<14),c=b&266338304,b=0!=c?b^c>>21:b}return b}function q(a){return a.match(/contribution/i)&&c("form#contribution").length?(a=Math.round(!c("#amt_other:checked").length?c('input[name="amount"]:checked').val():c('input[name="amount_other"]').val()),a!=a||1E9<Math.abs(a)?0:a):0}function r(a){ga_integration_config.data.action=a;var b=a.modulename;
if(b){i("_bsda_s",1,180);var j=a.formname,d=a.transaction_amt;if(a.savedPaymentInfo)b="Quick Donate Opt-In",i("_bsda_q",1,180);else if(d){i("_bsda_c",Math.round(d),180);var g=a.contribution_key,h=-1!==c.inArray(d,a.pageamounts)?Math.round(d):"other",h=a.contribution_page_id+"_"+h,s=+a.pagetype,f=+a.is_recurring?"BSD Recurring":"BSD";a.used_quick_donate&&(f+=" Quick Donate",h+="_QD",i("_bsda_q",1,180));e.ecommerce(g,d,h,j,f+(4===s?" Memberships":2===s?" Tickets":3===s?" Custom Contributions":" Contributions"));
optimizely.push(["trackEvent","bsdtracker",100*d])}e.event("Completions",b,j,Math.ceil(d||0));optimizely.push(["trackEvent","bsdtracker_"+b])}}window.ga_integration_config=window.ga_integration_config||{};var e={event:function(a){var b;b=1===arguments.length?a:Array.prototype.slice.call(arguments,0);window._gaq&&_gaq.push(["_trackEvent"].concat(b));if("function"===typeof ga)try{b[5]&&!0===b[5]&&(b[5]={nonInteraction:1}),ga.apply(this,["send","event"].concat(b))}catch(c){}},social:function(){var a=
Array.prototype.slice.call(arguments,0);window._gaq&&_gaq.push(["_trackSocial"].concat(a));if("function"===typeof ga)try{ga.apply(this,["send","social"].concat(a))}catch(b){}},custom:function(){var a=Array.prototype.slice.call(arguments,0);window._gaq&&_gaq.push(["_setCustomVar"].concat(a).concat(2));if("function"===typeof ga)try{"false"!==a[2]&&ga.apply(this,["set","dimension"+a[0],a[1]+a[2]])}catch(b){}},ecommerce:function(a,b,c,d,g){window._gaq&&_gaq.push(["_addTrans",a,"",b,"0","0","","",""],
["_addItem",a,c,d,g,b,"1"],["_trackTrans"]);if("function"===typeof ga)try{ga("require","ecommerce","ecommerce.js"),ga("ecommerce:addTransaction",{id:a,affiliation:"",revenue:b,shipping:"0",tax:"0"}),ga("ecommerce:addItem",{id:a,name:d,sku:c,category:g,price:b,quantity:"1"}),ga("ecommerce:send")}catch(h){}},queue:function(a){window._gaq&&_gaq.push(a);if("function"===typeof ga)try{ga(a)}catch(b){}}};if(!ga_integration_config.cookiedomain){var t=location.hostname.match(/\.uk$/)?-3:-2;ga_integration_config.cookiedomain=
location.hostname.split(".").slice(t).join(".")}var u=window.onerror;window.onerror=function(a,b,c){u&&u.apply(this,arguments);e.event("JavaScript Errors",a,b+"_"+c,0,!0)};var k=function(){var a={};location.href.replace(/[?&]+([^=&]+)=([^&]*)/gi,function(b,c,d){a[c]=d});return a}();k.source&&e.custom(1,"Source",k.source);k.subsource&&e.custom(5,"Subsource",k.subsource);f("msid")&&(t=ga_integration_config.msid_seed?""+(parseInt(f("msid"),16)^ga_integration_config.msid_seed):f("msid"),e.custom(2,"msid",
t));e.custom(3,"Has GUID",""+!!f("guid"));e.custom(4,"Has Spud",""+!!f("spud"));if(!c||!c.fn)throw Error("No jQuery found.");c.fn.analytics=function(a,b,j){if(!a)return this.trigger(b||"mousedown");var d=b?b+".analytics":"keydown.analytics mousedown.analytics",g=j||"one",h=function(d){if(b||d.type==="mousedown"||d.which===13)typeof a==="function"?a.apply(this):c.isArray(a)&&a[1]&&typeof a[1]!=="number"?e.event(a):(typeof a==="string"||c.isArray(a))&&optimizely.push(["trackEvent"].concat(a))};return j&&
!c.fn.live?c(document).delegate(this.selector,d,h):this[g](d,h)};c.fn.registerBSDError=function(a){this.length&&e.event("Error",a,l(document.referrer),q(a),true)};p(location.hostname)%7===(new Date).getDay()&&1===Math.ceil(100*Math.random())&&!f("__bsdzh")&&((new Image).src="//bsd-analytics.appspot.com/?"+c.param({hostname:location.hostname,src:c("script:last").attr("src"),jQ:c.fn.jquery}));ga_integration_config.util={createCookie:i,readCookie:f,getURLParam:k,hash:p,contrib_amt:q,bsdtracker_to_ga:r,
getPathname:l,social_event:m,proper:o};ga_integration_config.data={};c(document).ready(function(){function a(b){if(b.type==="mousedown"||b.which===13){$this=c(this);$this.unbind("keydown mousedown",a);b=$this.is("form")?$this:$this.closest("form");b=b.attr("id")||b.attr("name")||b.attr("action")||"(none)";e.event("Form Submits",b,location.pathname,q(b))}}c("input").filter('[type="image"],[type="submit"]').bind("mousedown",a);c("form").bind("keydown",a);c("span.signuperror").registerBSDError("Signup");
c("div.contriberrorbanner").registerBSDError("Contribution");c("#invitationpage .error").registerBSDError("Share");c("[href^='http'], [href^='//']").analytics(function(){if(this.hostname!==location.hostname){var b=/(facebook|twitter|addthis|youtube|pinterest)(\.com)/i.exec(this.href);if(b){var a=this.href.match(/facebook\.com\/sharer.php/)?decodeURIComponent(this.href.replace("http://www.facebook.com/sharer.php?u=","")):this.href;m(o(b[1]),"click",a,l(a))}else e.event("Exits",n(this.href).hostname,
this.href)}},null,"live");c('a[href$=".pdf"]').analytics(function(){e.event("PDF Clicks",c(this).text(),this.href,0,true)});c("video,audio").bind("play ended pause",function(b){e.event(o(this.nodeName),o(b.type),this.src,0,true)});c.fn._link=c.fn._link||function(b,a){var d=a||location.hostname.split(".").slice(-2).join(".");this.one("click",function(){if(~c.inArray(d,b)&&d!=this.hostname.split(".").slice(-2).join(".")){$this=c(this);ga.queue(function(){$this.attr("href",function(b,a){return _gat._getTrackerByName()._getLinkerUrl(a,
true)})})}})};window.BSDTracker?r(BSDTracker[BSDTracker.signup?"signup":BSDTracker.contribution?"contribution":""].jsonData):k.td&&c.getJSON((ga_integration_config.bsddomain?ga_integration_config.bsddomain:"//www.bluestatedigital.com")+"/page/tracking/action-decode?td="+k.td+"&callback=?",function(b){r(b)});window.bQuery&&bQuery.fn.mailcheck&&c("#email").blur(function(){var b=c(".bsd-mailcheck");if(b.length){var a=b.text();e.event("Mailcheck","Shown",a,0,true);b=function(){e.event("Mailcheck","Clicked",
a,0,true)};c.fn.live?c(".bsd-mailcheck a").live("click",b):c("#signup").delegate(".bsd-mailcheck a","click",b)}});c(window).load(function(){optimizely.variationNamesMap&&c.each(optimizely.variationNamesMap,function(b,a){e.event("Optimizely",optimizely.allExperiments[b].name,a,0,true)});if(ga_integration_config.nocookie!==false&&ga_integration_config.nospud!==false&&ga_integration_config.noloe!==false&&f("guid")&&!f("loega")&&(ga_integration_config.bsddomain||location.pathname.match(/^\/page\//)))c.getJSON((ga_integration_config.bsddomain||
"")+"/page/graph/loe/"+f("guid")+"?callback=?",function(b){var a=[],c="",g=0;ga_integration_config.data.loe=b;for(var h in b)b[h]&&typeof b[h]==="boolean"&&a.push(h);a=a.length?a.sort().join("-"):"Anonymous";if(b.donor){g=Math.ceil(b.highest_previous_contribution);c=""+g;i("_bsda_c",g,180)}b.email&&i("_bsda_s",1,180);b.qd_enrolled&&i("_bsda_q",1,180);e.event("Ladder of Engagement",a,c,g,true);i("loega",1)});(function(){if(!(ga_integration_config.nospud===true||ga_integration_config.nocookie===true)){var b=
f("__utmz")||"";if(!f("spud")&&!k.source&&!f("source")||b&&p(b).toString()!==f("__bsdzh")){var a=(ga_integration_config.bsddomain?ga_integration_config.bsddomain:"")+"/page/spud?jsonp=?",d=function(){var a,d;d=b.split(".").slice(4).join(".").split("|");var e={};c.each(d,function(a,b){var c=b.split("=");c[1]&&!c[1].match(/^\(.*\)$/)&&(e[c[0]]=decodeURIComponent(c[1]))});if(e.utmgclid){a="cpc_google";d=e.utmctr}else{var f=[];c.each(e,function(a,b){a!=="utmcmd"&&a!=="utmcsr"&&a!=="utmcct"&&f.push(b)});
e.utmcmd&&e.utmcsr&&(a=e.utmcmd+"_"+e.utmcsr);d=f.sort().join("_")}if(k.source||a)i("source",k.source||a,7);if(k.subsource||d)i("subsource",k.subsource||d,7)};i("__bsdzh",p(b));f("spud")?c.ajax({url:a,dataType:"jsonp",data:{type:"getm",field:"source,subsource"},jsonp:"jsonp",success:function(a){!a.source&&!a.subsource&&d()}}):d()}}})();if(window.FB&&FB.Event){FB.Event.subscribe("edge.create",function(a){m("Facebook","Like",a,l(a),1)});FB.Event.subscribe("edge.remove",function(a){m("Facebook","Unlike",
a,l(a),-1)});FB.Event.subscribe("comment.create",function(a){m("Facebook","Comment",a.href,l(a.href),1)});FB.Event.subscribe("comment.remove",function(a){m("Facebook","Uncomment",a.href,l(a.href),-1)})}window.twttr&&twttr.events&&twttr.ready&&twttr.ready(function(a){"click tweet retweet follow favorite".replace(/\w+/g,function(e){a.events.bind(e,function(a){var b;a&&a.target&&(a.target.src?b=n(decodeURIComponent((a.target.src.match(/[&#?](url=)([^&]*)/)||[""]).pop())):a&&a.target&&a.target.href&&
c.each(decodeURIComponent(a.target.search).replace(/\+/g," ").split(/&| |\=/g),function(a,c){if(c.match(/(^https?:\/\/)|(^www.)/)){b=n(c);return false}}));b&&m("Twitter",a.type,b.href.replace(b.hash,""),b.pathname)})})})})})})(window.jQuery||window.bQuery);