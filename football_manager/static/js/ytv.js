(function(e,t){"use strict";var s="",a=a||function(a,n){var i=function(){},l={apiKey:s,element:null,user:null,channelId:null,fullscreen:!1,accent:"#fff",controls:!0,annotations:!1,autoplay:!1,chainVideos:!0,browsePlaylists:!1,playerTheme:"dark",listTheme:"dark",responsive:!1,playId:"",sortList:!1,reverseList:!1,shuffleList:!1,maxvideo:10,maxplaylist:20,wmode:"opaque",events:{videoReady:i,stateChange:i}},o={data:{},remove:function(e){delete o.data[e]},exist:function(e){return o.data.hasOwnProperty(e)&&null!==o.data[e]},get:function(e){return o.data[e]},set:function(e,t){o.remove(e),o.data[e]=t}},r={events:{addEvent:function(e,t,s){return e.addEventListener?e.addEventListener(t,s,!1):e.attachEvent?e.attachEvent("on"+t,s):void 0},removeEvent:function(e,t,s){return e.addEventListener?e.removeEventListener(t,s,!1):e.attachEvent?e.detachEvent("on"+t,s):void 0},prevent:function(e){e.preventDefault?e.preventDefault():e.returnValue=!1}},addCSS:function(e){var s=t.getElementsByTagName("head")[0],a=t.createElement("style");a.type="text/css",a.styleSheet?a.styleSheet.cssText=e:a.appendChild(t.createTextNode(e)),s.appendChild(a)},addCommas:function(e){for(var t=e.split("."),s=t[0],a=t.length>1?"."+t[1]:"",n=/(\d+)(\d{3})/;n.test(s);)s=s.replace(n,"$1,$2");return s+a},parentUntil:function(e,t){for(;e.parentNode;){if(e.getAttribute&&e.getAttribute(t))return e;e=e.parentNode}return null},ajax:{get:function(t,s){if(o.exist(t))s.call(this,JSON.parse(o.get(t)));else{var a;e.XDomainRequest&&-1!=navigator.appVersion.indexOf("MSIE 8")&&-1!=navigator.appVersion.indexOf("MSIE 9")?(a=new XDomainRequest,a.onload=function(){if(o.set(t,a.responseText),s.call(this,JSON.parse(a.responseText)),Object.prototype.hasOwnProperty.call(JSON.parse(a.responseText),"error")){o.remove(t);var e=JSON.parse(a.responseText);console.log("Youtube-TV Error: Youtube API Response: "+e.error.errors[0].reason+"\nDetails: "+e.error.errors[0].message)}}):e.XMLHttpRequest&&(a=new XMLHttpRequest),a.onreadystatechange=function(){if(4===a.readyState&&200===a.status)o.set(t,a.responseText),s.call(this,JSON.parse(a.responseText));else if(4===a.readyState){var e=JSON.parse(a.responseText);console.log("Youtube-TV Error: Youtube API Response: "+e.error.errors[0].reason+"\nDetails: "+e.error.errors[0].message)}},a.open("GET",t,!0),a.send()}}},endpoints:{base:"https://www.googleapis.com/youtube/v3/",userInfo:function(){return r.endpoints.base+"channels?"+l.cid+"&key="+s+"&part=snippet,contentDetails,statistics"},playlistInfo:function(e){return r.endpoints.base+"playlists?id="+e+"&key="+s+"&maxResults="+l.maxplaylist+"&part=snippet"},userPlaylists:function(){return r.endpoints.base+"playlists?channelId="+l.channelId+"&key="+s+"&maxResults="+l.maxplaylist+"&part=snippet"},playlistVids:function(){return r.endpoints.base+"playlistItems?playlistId="+l.pid+"&key="+s+"&maxResults="+l.maxvideo+"&part=contentDetails"},videoInfo:function(){return r.endpoints.base+"videos?id="+l.videoString+"&key="+s+"&maxResults="+l.maxvideo+"&part=snippet,contentDetails,status,statistics"}},deepExtend:function(e,t){var s;for(s in t)t[s]&&t[s].constructor&&t[s].constructor===Object?(e[s]=e[s]||{},r.deepExtend(e[s],t[s])):e[s]=t[s];return e}},d={youtube:function(){if("undefined"==typeof YT){var e=t.createElement("script");e.src="https://www.youtube.com/iframe_api";var s=t.getElementsByTagName("script")[0];s.parentNode.insertBefore(e,s)}},build:function(){l.channelId?l.cid="id="+l.channelId:l.user&&(l.cid="forUsername="+l.user),l.element.className="ytv-canvas",l.fullscreen&&(l.element.className+=" ytv-full"),r.addCSS("#"+a+" .ytv-list .ytv-active a{border-left-color: "+l.accent+";}"),l.responsive&&r.addCSS("#"+a+" .ytv-video{position: relative; padding-bottom: 39.4%; /* 16:9 of 70%*/height: 0; width: 70%;} #"+a+" .ytv-video iframe{position: absolute; top: 0; left: 0;} #"+a+" .ytv-list{width: 30%;} #"+a+" .ytv-playlist-open .ytv-arrow{top: 0px;}@media only screen and (max-width:992px) {#"+a+" .ytv-list{position: relative; display: block;width: 0; padding-bottom: 40%;left: auto; right: auto;top: auto; width: 100%;} #"+a+" .ytv-video{position: relative; padding-bottom: 56.25%; /* 16:9 */height: 0; position: relative;display: block; left: auto;right: auto; top: auto; width: 100%;}}"),"dark"==l.listTheme&&r.addCSS(" #"+a+".ytv-canvas ::-webkit-scrollbar{border-left: 1px solid #000;} #"+a+".ytv-canvas ::-webkit-scrollbar-thumb{background: rgba(255,255,255,0.2);}"),"light"==l.listTheme&&r.addCSS(" #"+a+".ytv-canvas{background: #ccc;} #"+a+".ytv-canvas ::-webkit-scrollbar{border-left: 1px solid rgba(28,28,28,0.1);} #"+a+".ytv-canvas ::-webkit-scrollbar-thumb{background: rgba(28,28,28,0.3);} #"+a+" .ytv-list .ytv-active a{background: rgba(0,0,0,0.2);} #"+a+" .ytv-list a{color: #282828; border-top: 1px solid rgba(0,0,0,0.1); border-bottom: 1px solid rgba(204,204,204,0.5);} #"+a+" .ytv-list a:hover, #"+a+" .ytv-list-header .ytv-playlists a:hover{ background: rgba(0,0,0,0.2);} #"+a+" .ytv-list a:active, #"+a+" .ytv-list-header .ytv-playlists a:active{ background: rgba(0,0,0,0.2);} #"+a+" .ytv-list .ytv-thumb-stroke{outline: 1px solid rgba(0,0,0,0.1);} #"+a+" .ytv-list .ytv-thumb{outline: 1px solid rgba(255,255,255,0.5);} #"+a+" .ytv-list-header{-webkit-box-shadow: 0 1px 2px rgba(255, 255, 255, 0.2); -moz-box-shadow: 0 1px 2px rgba(255, 255, 255, 0.2); box-shadow: 0 1px 2px rgba(255, 255, 255, 0.2);} #"+a+" .ytv-list-header a{background: rgba(0,0,0,0.2);} #"+a+" .ytv-playlists{background: #ccc;}")},userUploads:function(e){e&&e.items.length>0?(l.pid=e.items[0].contentDetails.relatedPlaylists.uploads,r.ajax.get(r.endpoints.playlistVids(),d.compileVideos)):console.log("Youtube-TV Error: API returned no matches for: "+(l.channelId?l.channelId:l.user)+"\nPlease ensure it was entered correctly and in the appropriate field shown below. \nuser: 'username' or channelId: 'UCxxxx...'")},selectedPlaylist:function(e){e&&e.items.length>0?(l.channelId||l.user||(l.cid="id="+(l.channelId=e.items[0].snippet.channelId)),l.currentPlaylist=e.items[0].snippet.title,l.pid=e.items[0].id,r.ajax.get(r.endpoints.playlistVids(),d.compileVideos)):console.log("Youtube-TV Error: API returned no matches for playlist(s): "+l.playlist)},compileVideos:function(e){if(e&&e.items.length>0){var t,s=e.items;for(l.videoString="",t=0;t<s.length;t++)l.videoString+=s[t].contentDetails.videoId,t<s.length-1&&(l.videoString+=",");r.ajax.get(r.endpoints.videoInfo(),d.compileList)}else console.log("Youtube-TV Error: Empty playlist")},playlists:function(e){if(e&&e.items.length>0){var t,s='<div class="ytv-playlists"><ul>',a=e.items;for(t=0;t<a.length;t++){var n={title:a[t].snippet.title,plid:a[t].id,thumb:a[t].snippet.thumbnails.medium.url};s+='<a href="#" data-ytv-playlist="'+n.plid+'">',s+='<div class="ytv-thumb"><div class="ytv-thumb-stroke"></div><img src="'+n.thumb+'"></div>',s+="<span>"+n.title+"</span>",s+="</a>"}s+="</ul></div>";var i=l.element.getElementsByClassName("ytv-list-header")[0],o=i.children[0];o.href="#",o.target="",o.setAttribute("data-ytv-playlist-toggle","true"),l.element.getElementsByClassName("ytv-list-header")[0].innerHTML+=s,i.className+=" ytv-has-playlists"}else console.log("Youtube-TV Error: Returned no playlists")},compileList:function(e){e&&e.items.length>0?r.ajax.get(r.endpoints.userInfo(),function(t){var s,a="",n={title:t.items[0].snippet.title,url:"//youtube.com/channel/"+t.items[0].id,thumb:t.items[0].snippet.thumbnails["default"].url,summary:t.items[0].snippet.description,subscribers:t.items[0].statistics.subscriberCount,views:t.items[0].statistics.viewCount},i=e.items,o=!0;for(l.channelId=t.items[0].id,l.currentPlaylist&&(n.title+=" &middot; "+l.currentPlaylist),l.sortList&&i.sort(function(e,t){return e.snippet.publishedAt>t.snippet.publishedAt?-1:e.snippet.publishedAt<t.snippet.publishedAt?1:0}),l.reverseList&&i.reverse(),l.shuffleList&&(i=function(){for(var e,t,s=i.length;s;e=Math.floor(Math.random()*s),t=i[--s],i[s]=i[e],i[e]=t);return i}()),a+='<div class="ytv-list-header">',a+='<a href="'+n.url+'" target="_blank">',a+='<img src="'+n.thumb+'">',a+='<span><i class="ytv-arrow down"></i>'+n.title+"</span>",a+="</a>",a+="</div>",a+='<div class="ytv-list-inner"><ul>',s=0;s<i.length;s++)if(i[s].status.embeddable){var c={title:i[s].snippet.title,slug:i[s].id,link:"https://www.youtube.com/watch?v="+i[s].id,published:i[s].snippet.publishedAt,stats:i[s].statistics,duration:i[s].contentDetails.duration,thumb:i[s].snippet.thumbnails.medium.url},v=c.duration.match(/[0-9]+[HMS]/g),u=0,y=0,m=0,g="";v.forEach(function(e){var t=e.charAt(e.length-1),s=parseInt(e.slice(0,-1));switch(t){case"H":u=s>9?""+s:"0"+s;break;case"M":y=s>9?""+s:"0"+s;break;case"S":m=s>9?""+s:"0"+s}}),u&&(g+=u+":"),g+=y?y+":":"00:",g+=m?m:"00";var h="";l.playId==c.slug?(h=' class="ytv-active"',o=c.slug):o===!0&&(o=c.slug),a+="<li"+h+'><a href="#" data-ytv="'+c.slug+'" class="ytv-clear">',a+='<div class="ytv-thumb"><div class="ytv-thumb-stroke"></div><span>'+g+'</span><img src="'+c.thumb+'"></div>',a+='<div class="ytv-content"><b>'+c.title+"</b>",c.stats&&(a+='</b><span class="ytv-views">'+r.addCommas(c.stats.viewCount)+" Views</span>"),a+="</div></a></li>"}a+="</ul></div>",l.element.innerHTML='<div class="ytv-relative"><div class="ytv-video"><div id="ytv-video-player"></div></div><div class="ytv-list">'+a+"</div></div>",0===l.element.getElementsByClassName("ytv-active").length&&(l.element.getElementsByTagName("li")[0].className="ytv-active");var f=l.element.getElementsByClassName("ytv-active")[0];f.parentNode.parentNode.scrollTop=f.offsetTop,p.logic.loadVideo(o,l.autoplay),l.playlist?r.ajax.get(r.endpoints.playlistInfo(l.playlist),d.playlists):l.browsePlaylists&&r.ajax.get(r.endpoints.userPlaylists(),d.playlists)}):console.log("Youtube-TV Error: Empty video list")}},p={logic:{playerStateChange:function(e){console.log(e)},loadVideo:function(e,s){var n=l.element.getElementsByClassName("ytv-video")[0],i=l.element.getElementsByClassName("ytv-video-playerContainer").length;n.innerHTML='<div id="ytv-video-player'+a+i+'" class="ytv-video-playerContainer"></div>',o.player=new YT.Player("ytv-video-player"+a+i,{videoId:e,events:{onReady:l.events.videoReady,onStateChange:function(e){if(0===e.target.getPlayerState()&&l.chainVideos){var t=l.element.getElementsByClassName("ytv-active")[0].nextSibling,s=t.children[0];s.click()}l.events.stateChange.call(this,e)}},playerVars:{enablejsapi:1,origin:t.domain,controls:l.controls?1:0,rel:0,showinfo:0,iv_load_policy:l.annotations?"":3,autoplay:s?1:0,theme:l.playerTheme,wmode:l.wmode}})}},endpoints:{videoClick:function(e){var t=r.parentUntil(e.target?e.target:e.srcElement,"data-ytv");if(t&&t.getAttribute("data-ytv")){r.events.prevent(e);var s,a=l.element.getElementsByClassName("ytv-active");for(s=0;s<a.length;s++)a[s].className="";t.parentNode.className="ytv-active",p.logic.loadVideo(t.getAttribute("data-ytv"),!0)}},playlistToggle:function(e){var t=r.parentUntil(e.target?e.target:e.srcElement,"data-ytv-playlist-toggle");if(t&&t.getAttribute("data-ytv-playlist-toggle")){r.events.prevent(e);var s=l.element.getElementsByClassName("ytv-list-header")[0];-1===s.className.indexOf("ytv-playlist-open")?s.className+=" ytv-playlist-open":s.className=s.className.replace(" ytv-playlist-open","")}},playlistClick:function(e){var t=r.parentUntil(e.target?e.target:e.srcElement,"data-ytv-playlist");t&&t.getAttribute("data-ytv-playlist")&&(r.events.prevent(e),l.pid=t.getAttribute("data-ytv-playlist"),t.children[1].innerHTML="Loading...",r.ajax.get(r.endpoints.playlistInfo(l.pid),function(e){var t=l.element.getElementsByClassName("ytv-list-header")[0];t.className=t.className.replace(" ytv-playlist-open",""),d.selectedPlaylist(e)}))}},bindEvents:function(){r.events.addEvent(l.element,"click",p.endpoints.videoClick),r.events.addEvent(l.element,"click",p.endpoints.playlistToggle),r.events.addEvent(l.element,"click",p.endpoints.playlistClick)}},c=function(e,a){r.deepExtend(l,a),0===l.apiKey.length&&alert("Missing APIkey in settings or as global vaiable."),s=l.apiKey,l.element="string"==typeof e?t.getElementById(e):e,l.element&&(l.user||l.channelId||l.playlist)?(d.youtube(),d.build(),p.bindEvents(),l.playlist?r.ajax.get(r.endpoints.playlistInfo(l.playlist),d.selectedPlaylist):r.ajax.get(r.endpoints.userInfo(),d.userUploads)):console.log("Youtube-TV Error: Missing either user, channelId, or playlist")};this.destroy=function(){r.events.removeEvent(l.element,"click",p.endpoints.videoClick),r.events.removeEvent(l.element,"click",p.endpoints.playlistToggle),r.events.removeEvent(l.element,"click",p.endpoints.playlistClick),l.element.className="",l.element.innerHTML=""},this.fullscreen={state:function(){return-1!==l.element.className.indexOf("ytv-full")},enter:function(){-1===l.element.className.indexOf("ytv-full")&&(l.element.className+="ytv-full")},exit:function(){-1!==l.element.className.indexOf("ytv-full")&&(l.element.className=l.element.className.replace("ytv-full",""))}},c(a,n)};"undefined"!=typeof module&&module.exports&&(module.exports=a),"undefined"==typeof ender&&(this.YTV=a),"function"==typeof define&&define.amd&&define("YTV",[],function(){return a}),"undefined"!=typeof jQuery&&jQuery.fn.extend({ytv:function(e){return this.each(function(){new a(this.id,e)})}})}).call(this,window,document);