(window.webpackJsonp_ember_auto_import_=window.webpackJsonp_ember_auto_import_||[]).push([[3],[,,,,,function(t,e,i){"use strict"
i.r(e)
var n=i(9),r=i.n(n),a=i(20),s=i.n(a),o=i(22),u=i.n(o),l=i(23),c=i.n(l),h=i(30),d=i.n(h),p=i(34),f=i.n(p),m=i(12),g=i.n(m),y=function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")},v=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var i=arguments[e]
for(var n in i)Object.prototype.hasOwnProperty.call(i,n)&&(t[n]=i[n])}return t},_=function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e)
t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)},b=function(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called")
return!e||"object"!=typeof e&&"function"!=typeof e?t:e},T=function(){function t(){y(this,t),this.listeners={}}return t.prototype.on=function(t,e){this.listeners[t]||(this.listeners[t]=[]),this.listeners[t].push(e)},t.prototype.off=function(t,e){if(!this.listeners[t])return!1
var i=this.listeners[t].indexOf(e)
return this.listeners[t].splice(i,1),i>-1},t.prototype.trigger=function(t){var e=this.listeners[t],i=void 0,n=void 0,r=void 0
if(e)if(2===arguments.length)for(n=e.length,i=0;i<n;++i)e[i].call(this,arguments[1])
else for(r=Array.prototype.slice.call(arguments,1),n=e.length,i=0;i<n;++i)e[i].apply(this,r)},t.prototype.dispose=function(){this.listeners={}},t.prototype.pipe=function(t){this.on("data",function(e){t.push(e)})},t}(),S=function(t){function e(){y(this,e)
var i=b(this,t.call(this))
return i.buffer="",i}return _(e,t),e.prototype.push=function(t){var e=void 0
for(this.buffer+=t,e=this.buffer.indexOf("\n");e>-1;e=this.buffer.indexOf("\n"))this.trigger("data",this.buffer.substring(0,e)),this.buffer=this.buffer.substring(e+1)},e}(T),k=function(t){for(var e=t.split(new RegExp('(?:^|,)((?:[^=]*)=(?:"[^"]*"|[^,]*))')),i={},n=e.length,r=void 0;n--;)""!==e[n]&&((r=/([^=]*)=(.*)/.exec(e[n]).slice(1))[0]=r[0].replace(/^\s+|\s+$/g,""),r[1]=r[1].replace(/^\s+|\s+$/g,""),r[1]=r[1].replace(/^['"](.*)['"]$/g,"$1"),i[r[0]]=r[1])
return i},w=function(t){function e(){y(this,e)
var i=b(this,t.call(this))
return i.customParsers=[],i}return _(e,t),e.prototype.push=function(t){var e=void 0,i=void 0
if(0!==(t=t.replace(/^[\u0000\s]+|[\u0000\s]+$/g,"")).length)if("#"===t[0]){for(var n=0;n<this.customParsers.length;n++)if(this.customParsers[n].call(this,t))return
if(0===t.indexOf("#EXT"))if(t=t.replace("\r",""),e=/^#EXTM3U/.exec(t))this.trigger("data",{type:"tag",tagType:"m3u"})
else{if(e=/^#EXTINF:?([0-9\.]*)?,?(.*)?$/.exec(t))return i={type:"tag",tagType:"inf"},e[1]&&(i.duration=parseFloat(e[1])),e[2]&&(i.title=e[2]),void this.trigger("data",i)
if(e=/^#EXT-X-TARGETDURATION:?([0-9.]*)?/.exec(t))return i={type:"tag",tagType:"targetduration"},e[1]&&(i.duration=parseInt(e[1],10)),void this.trigger("data",i)
if(e=/^#ZEN-TOTAL-DURATION:?([0-9.]*)?/.exec(t))return i={type:"tag",tagType:"totalduration"},e[1]&&(i.duration=parseInt(e[1],10)),void this.trigger("data",i)
if(e=/^#EXT-X-VERSION:?([0-9.]*)?/.exec(t))return i={type:"tag",tagType:"version"},e[1]&&(i.version=parseInt(e[1],10)),void this.trigger("data",i)
if(e=/^#EXT-X-MEDIA-SEQUENCE:?(\-?[0-9.]*)?/.exec(t))return i={type:"tag",tagType:"media-sequence"},e[1]&&(i.number=parseInt(e[1],10)),void this.trigger("data",i)
if(e=/^#EXT-X-DISCONTINUITY-SEQUENCE:?(\-?[0-9.]*)?/.exec(t))return i={type:"tag",tagType:"discontinuity-sequence"},e[1]&&(i.number=parseInt(e[1],10)),void this.trigger("data",i)
if(e=/^#EXT-X-PLAYLIST-TYPE:?(.*)?$/.exec(t))return i={type:"tag",tagType:"playlist-type"},e[1]&&(i.playlistType=e[1]),void this.trigger("data",i)
if(e=/^#EXT-X-BYTERANGE:?([0-9.]*)?@?([0-9.]*)?/.exec(t))return i={type:"tag",tagType:"byterange"},e[1]&&(i.length=parseInt(e[1],10)),e[2]&&(i.offset=parseInt(e[2],10)),void this.trigger("data",i)
if(e=/^#EXT-X-ALLOW-CACHE:?(YES|NO)?/.exec(t))return i={type:"tag",tagType:"allow-cache"},e[1]&&(i.allowed=!/NO/.test(e[1])),void this.trigger("data",i)
if(e=/^#EXT-X-MAP:?(.*)$/.exec(t)){if(i={type:"tag",tagType:"map"},e[1]){var r=k(e[1])
if(r.URI&&(i.uri=r.URI),r.BYTERANGE){var a=r.BYTERANGE.split("@"),s=a[0],o=a[1]
i.byterange={},s&&(i.byterange.length=parseInt(s,10)),o&&(i.byterange.offset=parseInt(o,10))}}this.trigger("data",i)}else if(e=/^#EXT-X-STREAM-INF:?(.*)$/.exec(t)){if(i={type:"tag",tagType:"stream-inf"},e[1]){if(i.attributes=k(e[1]),i.attributes.RESOLUTION){var u=i.attributes.RESOLUTION.split("x"),l={}
u[0]&&(l.width=parseInt(u[0],10)),u[1]&&(l.height=parseInt(u[1],10)),i.attributes.RESOLUTION=l}i.attributes.BANDWIDTH&&(i.attributes.BANDWIDTH=parseInt(i.attributes.BANDWIDTH,10)),i.attributes["PROGRAM-ID"]&&(i.attributes["PROGRAM-ID"]=parseInt(i.attributes["PROGRAM-ID"],10))}this.trigger("data",i)}else{if(e=/^#EXT-X-MEDIA:?(.*)$/.exec(t))return i={type:"tag",tagType:"media"},e[1]&&(i.attributes=k(e[1])),void this.trigger("data",i)
if(e=/^#EXT-X-ENDLIST/.exec(t))this.trigger("data",{type:"tag",tagType:"endlist"})
else if(e=/^#EXT-X-DISCONTINUITY/.exec(t))this.trigger("data",{type:"tag",tagType:"discontinuity"})
else{if(e=/^#EXT-X-PROGRAM-DATE-TIME:?(.*)$/.exec(t))return i={type:"tag",tagType:"program-date-time"},e[1]&&(i.dateTimeString=e[1],i.dateTimeObject=new Date(e[1])),void this.trigger("data",i)
if(e=/^#EXT-X-KEY:?(.*)$/.exec(t))return i={type:"tag",tagType:"key"},e[1]&&(i.attributes=k(e[1]),i.attributes.IV&&("0x"===i.attributes.IV.substring(0,2).toLowerCase()&&(i.attributes.IV=i.attributes.IV.substring(2)),i.attributes.IV=i.attributes.IV.match(/.{8}/g),i.attributes.IV[0]=parseInt(i.attributes.IV[0],16),i.attributes.IV[1]=parseInt(i.attributes.IV[1],16),i.attributes.IV[2]=parseInt(i.attributes.IV[2],16),i.attributes.IV[3]=parseInt(i.attributes.IV[3],16),i.attributes.IV=new Uint32Array(i.attributes.IV))),void this.trigger("data",i)
if(e=/^#EXT-X-START:?(.*)$/.exec(t))return i={type:"tag",tagType:"start"},e[1]&&(i.attributes=k(e[1]),i.attributes["TIME-OFFSET"]=parseFloat(i.attributes["TIME-OFFSET"]),i.attributes.PRECISE=/YES/.test(i.attributes.PRECISE)),void this.trigger("data",i)
if(e=/^#EXT-X-CUE-OUT-CONT:?(.*)?$/.exec(t))return i={type:"tag",tagType:"cue-out-cont"},e[1]?i.data=e[1]:i.data="",void this.trigger("data",i)
if(e=/^#EXT-X-CUE-OUT:?(.*)?$/.exec(t))return i={type:"tag",tagType:"cue-out"},e[1]?i.data=e[1]:i.data="",void this.trigger("data",i)
if(e=/^#EXT-X-CUE-IN:?(.*)?$/.exec(t))return i={type:"tag",tagType:"cue-in"},e[1]?i.data=e[1]:i.data="",void this.trigger("data",i)
this.trigger("data",{type:"tag",data:t.slice(4)})}}}else this.trigger("data",{type:"comment",text:t.slice(1)})}else this.trigger("data",{type:"uri",uri:t})},e.prototype.addParser=function(t){var e=this,i=t.expression,n=t.customType,r=t.dataParser,a=t.segment
"function"!=typeof r&&(r=function(t){return t}),this.customParsers.push(function(t){if(i.exec(t))return e.trigger("data",{type:"custom",data:r(t),customType:n,segment:a}),!0})},e}(T),C=function(t){function e(){y(this,e)
var i=b(this,t.call(this))
i.lineStream=new S,i.parseStream=new w,i.lineStream.pipe(i.parseStream)
var n=i,r=[],a={},s=void 0,o=void 0,u={AUDIO:{},VIDEO:{},"CLOSED-CAPTIONS":{},SUBTITLES:{}},l=0
return i.manifest={allowCache:!0,discontinuityStarts:[],segments:[]},i.parseStream.on("data",function(t){var e=void 0,i=void 0;({tag:function(){({"allow-cache":function(){this.manifest.allowCache=t.allowed,"allowed"in t||(this.trigger("info",{message:"defaulting allowCache to YES"}),this.manifest.allowCache=!0)},byterange:function(){var e={}
"length"in t&&(a.byterange=e,e.length=t.length,"offset"in t||(this.trigger("info",{message:"defaulting offset to zero"}),t.offset=0)),"offset"in t&&(a.byterange=e,e.offset=t.offset)},endlist:function(){this.manifest.endList=!0},inf:function(){"mediaSequence"in this.manifest||(this.manifest.mediaSequence=0,this.trigger("info",{message:"defaulting media sequence to zero"})),"discontinuitySequence"in this.manifest||(this.manifest.discontinuitySequence=0,this.trigger("info",{message:"defaulting discontinuity sequence to zero"})),t.duration>0&&(a.duration=t.duration),0===t.duration&&(a.duration=.01,this.trigger("info",{message:"updating zero segment duration to a small value"})),this.manifest.segments=r},key:function(){t.attributes?"NONE"!==t.attributes.METHOD?t.attributes.URI?(t.attributes.METHOD||this.trigger("warn",{message:"defaulting key method to AES-128"}),o={method:t.attributes.METHOD||"AES-128",uri:t.attributes.URI},void 0!==t.attributes.IV&&(o.iv=t.attributes.IV)):this.trigger("warn",{message:"ignoring key declaration without URI"}):o=null:this.trigger("warn",{message:"ignoring key declaration without attribute list"})},"media-sequence":function(){isFinite(t.number)?this.manifest.mediaSequence=t.number:this.trigger("warn",{message:"ignoring invalid media sequence: "+t.number})},"discontinuity-sequence":function(){isFinite(t.number)?(this.manifest.discontinuitySequence=t.number,l=t.number):this.trigger("warn",{message:"ignoring invalid discontinuity sequence: "+t.number})},"playlist-type":function(){/VOD|EVENT/.test(t.playlistType)?this.manifest.playlistType=t.playlistType:this.trigger("warn",{message:"ignoring unknown playlist type: "+t.playlist})},map:function(){s={},t.uri&&(s.uri=t.uri),t.byterange&&(s.byterange=t.byterange)},"stream-inf":function(){this.manifest.playlists=r,this.manifest.mediaGroups=this.manifest.mediaGroups||u,t.attributes?(a.attributes||(a.attributes={}),v(a.attributes,t.attributes)):this.trigger("warn",{message:"ignoring empty stream-inf attributes"})},media:function(){if(this.manifest.mediaGroups=this.manifest.mediaGroups||u,t.attributes&&t.attributes.TYPE&&t.attributes["GROUP-ID"]&&t.attributes.NAME){var n=this.manifest.mediaGroups[t.attributes.TYPE]
n[t.attributes["GROUP-ID"]]=n[t.attributes["GROUP-ID"]]||{},e=n[t.attributes["GROUP-ID"]],(i={default:/yes/i.test(t.attributes.DEFAULT)}).default?i.autoselect=!0:i.autoselect=/yes/i.test(t.attributes.AUTOSELECT),t.attributes.LANGUAGE&&(i.language=t.attributes.LANGUAGE),t.attributes.URI&&(i.uri=t.attributes.URI),t.attributes["INSTREAM-ID"]&&(i.instreamId=t.attributes["INSTREAM-ID"]),t.attributes.CHARACTERISTICS&&(i.characteristics=t.attributes.CHARACTERISTICS),t.attributes.FORCED&&(i.forced=/yes/i.test(t.attributes.FORCED)),e[t.attributes.NAME]=i}else this.trigger("warn",{message:"ignoring incomplete or missing media group"})},discontinuity:function(){l+=1,a.discontinuity=!0,this.manifest.discontinuityStarts.push(r.length)},"program-date-time":function(){void 0===this.manifest.dateTimeString&&(this.manifest.dateTimeString=t.dateTimeString,this.manifest.dateTimeObject=t.dateTimeObject),a.dateTimeString=t.dateTimeString,a.dateTimeObject=t.dateTimeObject},targetduration:function(){!isFinite(t.duration)||t.duration<0?this.trigger("warn",{message:"ignoring invalid target duration: "+t.duration}):this.manifest.targetDuration=t.duration},totalduration:function(){!isFinite(t.duration)||t.duration<0?this.trigger("warn",{message:"ignoring invalid total duration: "+t.duration}):this.manifest.totalDuration=t.duration},start:function(){t.attributes&&!isNaN(t.attributes["TIME-OFFSET"])?this.manifest.start={timeOffset:t.attributes["TIME-OFFSET"],precise:t.attributes.PRECISE}:this.trigger("warn",{message:"ignoring start declaration without appropriate attribute list"})},"cue-out":function(){a.cueOut=t.data},"cue-out-cont":function(){a.cueOutCont=t.data},"cue-in":function(){a.cueIn=t.data}}[t.tagType]||function(){}).call(n)},uri:function(){a.uri=t.uri,r.push(a),!this.manifest.targetDuration||"duration"in a||(this.trigger("warn",{message:"defaulting segment duration to the target duration"}),a.duration=this.manifest.targetDuration),o&&(a.key=o),a.timeline=l,s&&(a.map=s),a={}},comment:function(){},custom:function(){t.segment?(a.custom=a.custom||{},a.custom[t.customType]=t.data):(this.manifest.custom=this.manifest.custom||{},this.manifest.custom[t.customType]=t.data)}})[t.type].call(n)}),i}return _(e,t),e.prototype.push=function(t){this.lineStream.push(t)},e.prototype.end=function(){this.lineStream.push("\n")},e.prototype.addParser=function(t){this.parseStream.addParser(t)},e}(T),E=function(t){var e,i=t.attributes,n=t.segments,r={attributes:(e={NAME:i.id,AUDIO:"audio",SUBTITLES:"subs",RESOLUTION:{width:i.width,height:i.height},CODECS:i.codecs,BANDWIDTH:i.bandwidth},e["PROGRAM-ID"]=1,e),uri:"",endList:"static"===(i.type||"static"),timeline:i.periodIndex,resolvedUri:"",targetDuration:i.duration,segments:n,mediaSequence:n.length?n[0].number:1}
return i.contentProtection&&(r.contentProtection=i.contentProtection),r},A="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},L=function(t){return!!t&&"object"===(void 0===t?"undefined":A(t))},O=function t(){for(var e=arguments.length,i=Array(e),n=0;n<e;n++)i[n]=arguments[n]
return i.reduce(function(e,i){return Object.keys(i).forEach(function(n){Array.isArray(e[n])&&Array.isArray(i[n])?e[n]=e[n].concat(i[n]):L(e[n])&&L(i[n])?e[n]=t(e[n],i[n]):e[n]=i[n]}),e},{})},P=function(t,e){return/^[a-z]+:/i.test(e)?e:(/\/\//i.test(t)||(t=g.a.buildAbsoluteURL(r.a.location.href,t)),g.a.buildAbsoluteURL(t,e))},x=function(t){var e=t.baseUrl,i=void 0===e?"":e,n=t.source,r=void 0===n?"":n,a=t.range,s=void 0===a?"":a,o={uri:r,resolvedUri:P(i||"",r)}
if(s){var u=s.split("-"),l=parseInt(u[0],10),c=parseInt(u[1],10)
o.byterange={length:c-l,offset:l}}return o},U=function(t,e,i){var n=t.NOW,r=t.clientOffset,a=t.availabilityStartTime,s=t.timescale,o=void 0===s?1:s,u=t.start,l=void 0===u?0:u,c=t.minimumUpdatePeriod,h=(n+r)/1e3+(void 0===c?0:c)-(a+l)
return Math.ceil((h*o-e)/i)},I=function(t,e){for(var i=t.type,n=void 0===i?"static":i,r=t.minimumUpdatePeriod,a=void 0===r?0:r,s=t.media,o=void 0===s?"":s,u=t.sourceDuration,l=t.timescale,c=void 0===l?1:l,h=t.startNumber,d=void 0===h?1:h,p=t.periodIndex,f=[],m=-1,g=0;g<e.length;g++){var y=e[g],v=y.d,_=y.r||0,b=y.t||0
m<0&&(m=b),b&&b>m&&(m=b)
var T=void 0
if(_<0){var S=g+1
T=S===e.length?"dynamic"===n&&a>0&&o.indexOf("$Number$")>0?U(t,m,v):(u*c-m)/v:(e[S].t-m)/v}else T=_+1
for(var k=d+f.length+T,w=d+f.length;w<k;)f.push({number:w,duration:v/c,time:m,timeline:p}),m+=v,w++}return f},D=function(t){return t.reduce(function(t,e){return t.concat(e)},[])},R=function(t){if(!t.length)return[]
for(var e=[],i=0;i<t.length;i++)e.push(t[i])
return e},M={static:function(t){var e=t.duration,i=t.timescale,n=void 0===i?1:i,r=t.sourceDuration
return{start:0,end:Math.ceil(r/(e/n))}},dynamic:function(t){var e=t.NOW,i=t.clientOffset,n=t.availabilityStartTime,r=t.timescale,a=void 0===r?1:r,s=t.duration,o=t.start,u=void 0===o?0:o,l=t.minimumUpdatePeriod,c=void 0===l?0:l,h=t.timeShiftBufferDepth,d=void 0===h?1/0:h,p=(e+i)/1e3,f=n+u,m=p+c-f,g=Math.ceil(m*a/s),y=Math.floor((p-f-d)*a/s),v=Math.floor((p-f)*a/s)
return{start:Math.max(0,y),end:Math.min(g,v)}}},B=function(t){var e=t.type,i=void 0===e?"static":e,n=t.duration,r=t.timescale,a=void 0===r?1:r,s=t.sourceDuration,o=M[i](t),u=function(t,e){for(var i=[],n=t;n<e;n++)i.push(n)
return i}(o.start,o.end).map(function(t){return function(e,i){var n=t.duration,r=t.timescale,a=void 0===r?1:r,s=t.periodIndex,o=t.startNumber
return{number:(void 0===o?1:o)+e,duration:n/a,timeline:s,time:i*n}}}(t))
if("static"===i){var l=u.length-1
u[l].duration=s-n/a*l}return u},N=/\$([A-z]*)(?:(%0)([0-9]+)d)?\$/g,j=function(t,e){return t.replace(N,function(t){return function(e,i,n,r){if("$$"===e)return"$"
if(void 0===t[i])return e
var a=""+t[i]
return"RepresentationID"===i?a:(r=n?parseInt(r,10):1,a.length>=r?a:""+new Array(r-a.length+1).join("0")+a)}}(e))},F=function(t,e){var i={RepresentationID:t.id,Bandwidth:t.bandwidth||0},n=t.initialization,r=void 0===n?{sourceURL:"",range:""}:n,a=x({baseUrl:t.baseUrl,source:j(r.sourceURL,i),range:r.range})
return function(t,e){return t.duration||e?t.duration?B(t):I(t,e):[{number:t.startNumber||1,duration:t.sourceDuration,time:0,timeline:t.periodIndex}]}(t,e).map(function(e){i.Number=e.number,i.Time=e.time
var n=j(t.media||"",i)
return{uri:n,timeline:e.timeline,duration:e.duration,resolvedUri:P(t.baseUrl||"",n),map:a,number:e.number}})},V=function(t,e){var i=t.duration,n=t.segmentUrls,r=void 0===n?[]:n
if(!i&&!e||i&&e)throw new Error("SEGMENT_TIME_UNSPECIFIED")
var a=r.map(function(e){return function(t,e){var i=t.baseUrl,n=t.initialization,r=void 0===n?{}:n,a=x({baseUrl:i,source:r.sourceURL,range:r.range}),s=x({baseUrl:i,source:e.media,range:e.mediaRange})
return s.map=a,s}(t,e)}),s=void 0
return i&&(s=B(t)),e&&(s=I(t,e)),s.map(function(t,e){if(a[e]){var i=a[e]
return i.timeline=t.timeline,i.duration=t.duration,i.number=t.number,i}}).filter(function(t){return t})},H=function(t){var e=t.baseUrl,i=t.initialization,n=void 0===i?{}:i,r=t.sourceDuration,a=t.timescale,s=void 0===a?1:a,o=t.indexRange,u=void 0===o?"":o,l=t.duration
if(!e)throw new Error("NO_BASE_URL")
var c=x({baseUrl:e,source:n.sourceURL,range:n.range}),h=x({baseUrl:e,source:e,range:u})
if(h.map=c,l){var d=B(t)
d.length&&(h.duration=d[0].duration,h.timeline=d[0].timeline)}else r&&(h.duration=r/s,h.timeline=0)
return h.number=0,[h]},q=function(t){var e=t.attributes,i=t.segmentInfo,n=void 0,r=void 0
if(i.template?(r=F,n=O(e,i.template)):i.base?(r=H,n=O(e,i.base)):i.list&&(r=V,n=O(e,i.list)),!r)return{attributes:e}
var a=r(n,i.timeline)
if(n.duration){var s=n,o=s.duration,u=s.timescale,l=void 0===u?1:u
n.duration=o/l}else a.length?n.duration=a.reduce(function(t,e){return Math.max(t,Math.ceil(e.duration))},0):n.duration=0
return{attributes:n,segments:a}},z=function(t,e){return R(t.childNodes).filter(function(t){return t.tagName===e})},W=function(t){return t.textContent.trim()},G=function(t){var e=/P(?:(\d*)Y)?(?:(\d*)M)?(?:(\d*)D)?(?:T(?:(\d*)H)?(?:(\d*)M)?(?:([\d.]*)S)?)?/.exec(t)
if(!e)return 0
var i=e.slice(1),n=i[0],r=i[1],a=i[2],s=i[3],o=i[4],u=i[5]
return 31536e3*parseFloat(n||0)+2592e3*parseFloat(r||0)+86400*parseFloat(a||0)+3600*parseFloat(s||0)+60*parseFloat(o||0)+parseFloat(u||0)},X={mediaPresentationDuration:function(t){return G(t)},availabilityStartTime:function(t){return function(t){return/^\d+-\d+-\d+T\d+:\d+:\d+(\.\d+)?$/.test(t)&&(t+="Z"),Date.parse(t)}(t)/1e3},minimumUpdatePeriod:function(t){return G(t)},timeShiftBufferDepth:function(t){return G(t)},start:function(t){return G(t)},width:function(t){return parseInt(t,10)},height:function(t){return parseInt(t,10)},bandwidth:function(t){return parseInt(t,10)},startNumber:function(t){return parseInt(t,10)},timescale:function(t){return parseInt(t,10)},duration:function(t){var e=parseInt(t,10)
return isNaN(e)?G(t):e},d:function(t){return parseInt(t,10)},t:function(t){return parseInt(t,10)},r:function(t){return parseInt(t,10)},DEFAULT:function(t){return t}},Y=function(t){return t&&t.attributes?R(t.attributes).reduce(function(t,e){var i=X[e.name]||X.DEFAULT
return t[e.name]=i(e.value),t},{}):{}},$={"urn:uuid:1077efec-c0b2-4d02-ace3-3c1e52e2fb4b":"org.w3.clearkey","urn:uuid:edef8ba9-79d6-4ace-a3c8-27dcd51d21ed":"com.widevine.alpha","urn:uuid:9a04f079-9840-4286-ab92-e65be0885f95":"com.microsoft.playready","urn:uuid:f239e769-efa3-4850-9c16-a903c6932efb":"com.adobe.primetime"},K=function(t,e){return e.length?D(t.map(function(t){return e.map(function(e){return P(t,W(e))})})):t},J=function(t){var e=z(t,"SegmentTemplate")[0],i=z(t,"SegmentList")[0],n=i&&z(i,"SegmentURL").map(function(t){return O({tag:"SegmentURL"},Y(t))}),r=z(t,"SegmentBase")[0],a=i||e,s=a&&z(a,"SegmentTimeline")[0],o=i||r||e,u=o&&z(o,"Initialization")[0],l=e&&Y(e)
l&&u?l.initialization=u&&Y(u):l&&l.initialization&&(l.initialization={sourceURL:l.initialization})
var c={template:l,timeline:s&&z(s,"S").map(function(t){return Y(t)}),list:i&&O(Y(i),{segmentUrls:n,initialization:Y(u)}),base:r&&O(Y(r),{initialization:Y(u)})}
return Object.keys(c).forEach(function(t){c[t]||delete c[t]}),c},Q=function(t){return t.reduce(function(t,e){var i=Y(e),n=$[i.schemeIdUri]
if(n){t[n]={attributes:i}
var a=z(e,"cenc:pssh")[0]
if(a){var s=W(a),o=s&&function(t){for(var e=r.a.atob(t),i=new Uint8Array(e.length),n=0;n<e.length;n++)i[n]=e.charCodeAt(n)
return i}(s)
t[n].pssh=o}}return t},{})},Z=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},i=e.manifestUri,n=void 0===i?"":i,r=e.NOW,a=void 0===r?Date.now():r,s=e.clientOffset,o=void 0===s?0:s,u=z(t,"Period")
if(1!==u.length)throw new Error("INVALID_NUMBER_OF_PERIOD")
var l=Y(t),c=K([n],z(t,"BaseURL"))
return l.sourceDuration=l.mediaPresentationDuration||0,l.NOW=a,l.clientOffset=o,D(u.map(function(t,e){return function(i,n){var r=K(e,z(i,"BaseURL")),a=Y(i),s=O(t,a,{periodIndex:n}),o=z(i,"AdaptationSet"),u=J(i)
return D(o.map(function(t,e,i){return function(n){var r=Y(n),a=K(e,z(n,"BaseURL")),s=z(n,"Role")[0],o={role:Y(s)},u=O(t,r,o),l=Q(z(n,"ContentProtection"))
Object.keys(l).length&&(u=O(u,{contentProtection:l}))
var c=J(n),h=z(n,"Representation"),d=O(i,c)
return D(h.map(function(t,e,i){return function(n){var r=z(n,"BaseURL"),a=K(e,r),s=O(t,Y(n)),o=J(n)
return a.map(function(t){return{segmentInfo:O(i,o),attributes:O(s,{baseUrl:t})}})}}(u,a,d)))}}(s,r,u)))}}(l,c)))},tt=function(t){if(""===t)throw new Error("DASH_EMPTY_MANIFEST")
var e=(new r.a.DOMParser).parseFromString(t,"application/xml"),i=e&&"MPD"===e.documentElement.tagName?e.documentElement:null
if(!i||i&&i.getElementsByTagName("parsererror").length>0)throw new Error("DASH_INVALID_XML")
return i},et=i(10),it=i.n(et),nt=i(36),rt=i(49),at=i.n(rt),st=function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")},ot=function(){function t(t,e){for(var i=0;i<e.length;i++){var n=e[i]
n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}return function(e,i,n){return i&&t(e.prototype,i),n&&t(e,n),e}}(),ut=function(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called")
return!e||"object"!=typeof e&&"function"!=typeof e?t:e},lt=function(){var t=[[[],[],[],[],[]],[[],[],[],[],[]]],e=t[0],i=t[1],n=e[4],r=i[4],a=void 0,s=void 0,o=void 0,u=[],l=[],c=void 0,h=void 0,d=void 0,p=void 0,f=void 0
for(a=0;a<256;a++)l[(u[a]=a<<1^283*(a>>7))^a]=a
for(s=o=0;!n[s];s^=c||1,o=l[o]||1)for(d=(d=o^o<<1^o<<2^o<<3^o<<4)>>8^255&d^99,n[s]=d,r[d]=s,f=16843009*u[h=u[c=u[s]]]^65537*h^257*c^16843008*s,p=257*u[d]^16843008*d,a=0;a<4;a++)e[a][s]=p=p<<24^p>>>8,i[a][d]=f=f<<24^f>>>8
for(a=0;a<5;a++)e[a]=e[a].slice(0),i[a]=i[a].slice(0)
return t},ct=null,ht=function(){function t(e){st(this,t),ct||(ct=lt()),this._tables=[[ct[0][0].slice(),ct[0][1].slice(),ct[0][2].slice(),ct[0][3].slice(),ct[0][4].slice()],[ct[1][0].slice(),ct[1][1].slice(),ct[1][2].slice(),ct[1][3].slice(),ct[1][4].slice()]]
var i=void 0,n=void 0,r=void 0,a=void 0,s=void 0,o=this._tables[0][4],u=this._tables[1],l=e.length,c=1
if(4!==l&&6!==l&&8!==l)throw new Error("Invalid aes key size")
for(a=e.slice(0),s=[],this._key=[a,s],i=l;i<4*l+28;i++)r=a[i-1],(i%l==0||8===l&&i%l==4)&&(r=o[r>>>24]<<24^o[r>>16&255]<<16^o[r>>8&255]<<8^o[255&r],i%l==0&&(r=r<<8^r>>>24^c<<24,c=c<<1^283*(c>>7))),a[i]=a[i-l]^r
for(n=0;i;n++,i--)r=a[3&n?i:i-4],s[n]=i<=4||n<4?r:u[0][o[r>>>24]]^u[1][o[r>>16&255]]^u[2][o[r>>8&255]]^u[3][o[255&r]]}return t.prototype.decrypt=function(t,e,i,n,r,a){var s=this._key[1],o=t^s[0],u=n^s[1],l=i^s[2],c=e^s[3],h=void 0,d=void 0,p=void 0,f=s.length/4-2,m=void 0,g=4,y=this._tables[1],v=y[0],_=y[1],b=y[2],T=y[3],S=y[4]
for(m=0;m<f;m++)h=v[o>>>24]^_[u>>16&255]^b[l>>8&255]^T[255&c]^s[g],d=v[u>>>24]^_[l>>16&255]^b[c>>8&255]^T[255&o]^s[g+1],p=v[l>>>24]^_[c>>16&255]^b[o>>8&255]^T[255&u]^s[g+2],c=v[c>>>24]^_[o>>16&255]^b[u>>8&255]^T[255&l]^s[g+3],g+=4,o=h,u=d,l=p
for(m=0;m<4;m++)r[(3&-m)+a]=S[o>>>24]<<24^S[u>>16&255]<<16^S[l>>8&255]<<8^S[255&c]^s[g++],h=o,o=u,u=l,l=c,c=h},t}(),dt=function(){function t(){st(this,t),this.listeners={}}return t.prototype.on=function(t,e){this.listeners[t]||(this.listeners[t]=[]),this.listeners[t].push(e)},t.prototype.off=function(t,e){if(!this.listeners[t])return!1
var i=this.listeners[t].indexOf(e)
return this.listeners[t].splice(i,1),i>-1},t.prototype.trigger=function(t){var e=this.listeners[t]
if(e)if(2===arguments.length)for(var i=e.length,n=0;n<i;++n)e[n].call(this,arguments[1])
else for(var r=Array.prototype.slice.call(arguments,1),a=e.length,s=0;s<a;++s)e[s].apply(this,r)},t.prototype.dispose=function(){this.listeners={}},t.prototype.pipe=function(t){this.on("data",function(e){t.push(e)})},t}(),pt=function(t){function e(){st(this,e)
var i=ut(this,t.call(this,dt))
return i.jobs=[],i.delay=1,i.timeout_=null,i}return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e)
t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}(e,t),e.prototype.processJob_=function(){this.jobs.shift()(),this.jobs.length?this.timeout_=setTimeout(this.processJob_.bind(this),this.delay):this.timeout_=null},e.prototype.push=function(t){this.jobs.push(t),this.timeout_||(this.timeout_=setTimeout(this.processJob_.bind(this),this.delay))},e}(dt),ft=function(t){return t<<24|(65280&t)<<8|(16711680&t)>>8|t>>>24},mt=function(t,e,i){var n=new Int32Array(t.buffer,t.byteOffset,t.byteLength>>2),r=new ht(Array.prototype.slice.call(e)),a=new Uint8Array(t.byteLength),s=new Int32Array(a.buffer),o=void 0,u=void 0,l=void 0,c=void 0,h=void 0,d=void 0,p=void 0,f=void 0,m=void 0
for(o=i[0],u=i[1],l=i[2],c=i[3],m=0;m<n.length;m+=4)h=ft(n[m]),d=ft(n[m+1]),p=ft(n[m+2]),f=ft(n[m+3]),r.decrypt(h,d,p,f,s,m),s[m]=ft(s[m]^o),s[m+1]=ft(s[m+1]^u),s[m+2]=ft(s[m+2]^l),s[m+3]=ft(s[m+3]^c),o=h,u=d,l=p,c=f
return a},gt=function(){function t(e,i,n,r){st(this,t)
var a=t.STEP,s=new Int32Array(e.buffer),o=new Uint8Array(e.byteLength),u=0
for(this.asyncStream_=new pt,this.asyncStream_.push(this.decryptChunk_(s.subarray(u,u+a),i,n,o)),u=a;u<s.length;u+=a)n=new Uint32Array([ft(s[u-4]),ft(s[u-3]),ft(s[u-2]),ft(s[u-1])]),this.asyncStream_.push(this.decryptChunk_(s.subarray(u,u+a),i,n,o))
this.asyncStream_.push(function(){var t
r(null,(t=o).subarray(0,t.byteLength-t[t.byteLength-1]))})}return t.prototype.decryptChunk_=function(t,e,i,n){return function(){var r=mt(t,e,i)
n.set(r,t.byteOffset)}},ot(t,null,[{key:"STEP",get:function(){return 32e3}}]),t}(),yt="7.2.2",vt=void 0,_t="info",bt=[],Tt=function(t,e){var i=vt.levels[_t],n=new RegExp("^("+i+")$")
if("log"!==t&&e.unshift(t.toUpperCase()+":"),bt&&bt.push([].concat(e)),e.unshift("VIDEOJS:"),r.a.console){var a=r.a.console[t]
a||"debug"!==t||(a=r.a.console.info||r.a.console.log),a&&i&&n.test(t)&&a[Array.isArray(e)?"apply":"call"](r.a.console,e)}};(vt=function(){for(var t=arguments.length,e=Array(t),i=0;i<t;i++)e[i]=arguments[i]
Tt("log",e)}).levels={all:"debug|log|warn|error",off:"",debug:"debug|log|warn|error",info:"log|warn|error",warn:"warn|error",error:"error",DEFAULT:_t},vt.level=function(t){if("string"==typeof t){if(!vt.levels.hasOwnProperty(t))throw new Error('"'+t+'" in not a valid log level')
_t=t}return _t},vt.history=function(){return bt?[].concat(bt):[]},vt.history.clear=function(){bt&&(bt.length=0)},vt.history.disable=function(){null!==bt&&(bt.length=0,bt=null)},vt.history.enable=function(){null===bt&&(bt=[])},vt.error=function(){for(var t=arguments.length,e=Array(t),i=0;i<t;i++)e[i]=arguments[i]
return Tt("error",e)},vt.warn=function(){for(var t=arguments.length,e=Array(t),i=0;i<t;i++)e[i]=arguments[i]
return Tt("warn",e)},vt.debug=function(){for(var t=arguments.length,e=Array(t),i=0;i<t;i++)e[i]=arguments[i]
return Tt("debug",e)}
var St=vt,kt="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},wt=function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")},Ct=function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e)
t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)},Et=function(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called")
return!e||"object"!=typeof e&&"function"!=typeof e?t:e},At=function(t,e){return t.raw=e,t},Lt=Object.prototype.toString,Ot=function(t){return Ut(t)?Object.keys(t):[]}
function Pt(t,e){Ot(t).forEach(function(i){return e(t[i],i)})}function xt(t){for(var e=arguments.length,i=Array(e>1?e-1:0),n=1;n<e;n++)i[n-1]=arguments[n]
return Object.assign?Object.assign.apply(Object,[t].concat(i)):(i.forEach(function(e){e&&Pt(e,function(e,i){t[i]=e})}),t)}function Ut(t){return!!t&&"object"===(void 0===t?"undefined":kt(t))}function It(t){return Ut(t)&&"[object Object]"===Lt.call(t)&&t.constructor===Object}function Dt(t,e){if(!t||!e)return""
if("function"==typeof r.a.getComputedStyle){var i=r.a.getComputedStyle(t)
return i?i[e]:""}return""}var Rt=At(["Setting attributes in the second argument of createEl()\n                has been deprecated. Use the third argument instead.\n                createEl(type, properties, attributes). Attempting to set "," to ","."],["Setting attributes in the second argument of createEl()\n                has been deprecated. Use the third argument instead.\n                createEl(type, properties, attributes). Attempting to set "," to ","."])
function Mt(t){return"string"==typeof t&&/\S/.test(t)}function Bt(t){if(/\s/.test(t))throw new Error("class has illegal whitespace characters")}function Nt(){return s.a===r.a.document}function jt(t){return Ut(t)&&1===t.nodeType}function Ft(){try{return r.a.parent!==r.a.self}catch(t){return!0}}function Vt(t){return function(e,i){if(!Mt(e))return s.a[t](null)
Mt(i)&&(i=s.a.querySelector(i))
var n=jt(i)?i:s.a
return n[t]&&n[t](e)}}function Ht(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"div",e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},n=arguments[3],r=s.a.createElement(t)
return Object.getOwnPropertyNames(e).forEach(function(t){var i=e[t];-1!==t.indexOf("aria-")||"role"===t||"type"===t?(St.warn(u()(Rt,t,i)),r.setAttribute(t,i)):"textContent"===t?qt(r,i):r[t]=i}),Object.getOwnPropertyNames(i).forEach(function(t){r.setAttribute(t,i[t])}),n&&ue(r,n),r}function qt(t,e){return void 0===t.textContent?t.innerText=e:t.textContent=e,t}function zt(t,e){e.firstChild?e.insertBefore(t,e.firstChild):e.appendChild(t)}function Wt(t,e){return Bt(e),t.classList?t.classList.contains(e):new RegExp("(^|\\s)"+e+"($|\\s)").test(t.className)}function Gt(t,e){return t.classList?t.classList.add(e):Wt(t,e)||(t.className=(t.className+" "+e).trim()),t}function Xt(t,e){return t.classList?t.classList.remove(e):(Bt(e),t.className=t.className.split(/\s+/).filter(function(t){return t!==e}).join(" ")),t}function Yt(t,e,i){var n=Wt(t,e)
if("function"==typeof i&&(i=i(t,e)),"boolean"!=typeof i&&(i=!n),i!==n)return i?Gt(t,e):Xt(t,e),t}function $t(t,e){Object.getOwnPropertyNames(e).forEach(function(i){var n=e[i]
null==n||!1===n?t.removeAttribute(i):t.setAttribute(i,!0===n?"":n)})}function Kt(t){var e={}
if(t&&t.attributes&&t.attributes.length>0)for(var i=t.attributes,n=i.length-1;n>=0;n--){var r=i[n].name,a=i[n].value
"boolean"!=typeof t[r]&&-1===",autoplay,controls,playsinline,loop,muted,default,defaultMuted,".indexOf(","+r+",")||(a=null!==a),e[r]=a}return e}function Jt(t,e){return t.getAttribute(e)}function Qt(t,e,i){t.setAttribute(e,i)}function Zt(t,e){t.removeAttribute(e)}function te(){s.a.body.focus(),s.a.onselectstart=function(){return!1}}function ee(){s.a.onselectstart=function(){return!0}}function ie(t){if(t&&t.getBoundingClientRect&&t.parentNode){var e=t.getBoundingClientRect(),i={}
return["bottom","height","left","right","top","width"].forEach(function(t){void 0!==e[t]&&(i[t]=e[t])}),i.height||(i.height=parseFloat(Dt(t,"height"))),i.width||(i.width=parseFloat(Dt(t,"width"))),i}}function ne(t){var e=void 0
if(t.getBoundingClientRect&&t.parentNode&&(e=t.getBoundingClientRect()),!e)return{left:0,top:0}
var i=s.a.documentElement,n=s.a.body,a=i.clientLeft||n.clientLeft||0,o=r.a.pageXOffset||n.scrollLeft,u=e.left+o-a,l=i.clientTop||n.clientTop||0,c=r.a.pageYOffset||n.scrollTop,h=e.top+c-l
return{left:Math.round(u),top:Math.round(h)}}function re(t,e){var i={},n=ne(t),r=t.offsetWidth,a=t.offsetHeight,s=n.top,o=n.left,u=e.pageY,l=e.pageX
return e.changedTouches&&(l=e.changedTouches[0].pageX,u=e.changedTouches[0].pageY),i.y=Math.max(0,Math.min(1,(s-u+a)/a)),i.x=Math.max(0,Math.min(1,(l-o)/r)),i}function ae(t){return Ut(t)&&3===t.nodeType}function se(t){for(;t.firstChild;)t.removeChild(t.firstChild)
return t}function oe(t){return"function"==typeof t&&(t=t()),(Array.isArray(t)?t:[t]).map(function(t){return"function"==typeof t&&(t=t()),jt(t)||ae(t)?t:"string"==typeof t&&/\S/.test(t)?s.a.createTextNode(t):void 0}).filter(function(t){return t})}function ue(t,e){return oe(e).forEach(function(e){return t.appendChild(e)}),t}function le(t,e){return ue(se(t),e)}function ce(t){return void 0===t.button&&void 0===t.buttons||0===t.button&&void 0===t.buttons||0===t.button&&1===t.buttons}var he=Vt("querySelector"),de=Vt("querySelectorAll"),pe=Object.freeze({isReal:Nt,isEl:jt,isInFrame:Ft,createEl:Ht,textContent:qt,prependTo:zt,hasClass:Wt,addClass:Gt,removeClass:Xt,toggleClass:Yt,setAttributes:$t,getAttributes:Kt,getAttribute:Jt,setAttribute:Qt,removeAttribute:Zt,blockTextSelection:te,unblockTextSelection:ee,getBoundingClientRect:ie,findPosition:ne,getPointerPosition:re,isTextNode:ae,emptyEl:se,normalizeContent:oe,appendContent:ue,insertContent:le,isSingleLeftClick:ce,$:he,$$:de}),fe=1
function me(){return fe++}var ge={},ye="vdata"+(new Date).getTime()
function ve(t){var e=t[ye]
return e||(e=t[ye]=me()),ge[e]||(ge[e]={}),ge[e]}function _e(t){var e=t[ye]
return!!e&&!!Object.getOwnPropertyNames(ge[e]).length}function be(t){var e=t[ye]
if(e){delete ge[e]
try{delete t[ye]}catch(e){t.removeAttribute?t.removeAttribute(ye):t[ye]=null}}}function Te(t,e){var i=ve(t)
0===i.handlers[e].length&&(delete i.handlers[e],t.removeEventListener?t.removeEventListener(e,i.dispatcher,!1):t.detachEvent&&t.detachEvent("on"+e,i.dispatcher)),Object.getOwnPropertyNames(i.handlers).length<=0&&(delete i.handlers,delete i.dispatcher,delete i.disabled),0===Object.getOwnPropertyNames(i).length&&be(t)}function Se(t,e,i,n){i.forEach(function(i){t(e,i,n)})}function ke(t){function e(){return!0}function i(){return!1}if(!t||!t.isPropagationStopped){var n=t||r.a.event
for(var a in t={},n)"layerX"!==a&&"layerY"!==a&&"keyLocation"!==a&&"webkitMovementX"!==a&&"webkitMovementY"!==a&&("returnValue"===a&&n.preventDefault||(t[a]=n[a]))
if(t.target||(t.target=t.srcElement||s.a),t.relatedTarget||(t.relatedTarget=t.fromElement===t.target?t.toElement:t.fromElement),t.preventDefault=function(){n.preventDefault&&n.preventDefault(),t.returnValue=!1,n.returnValue=!1,t.defaultPrevented=!0},t.defaultPrevented=!1,t.stopPropagation=function(){n.stopPropagation&&n.stopPropagation(),t.cancelBubble=!0,n.cancelBubble=!0,t.isPropagationStopped=e},t.isPropagationStopped=i,t.stopImmediatePropagation=function(){n.stopImmediatePropagation&&n.stopImmediatePropagation(),t.isImmediatePropagationStopped=e,t.stopPropagation()},t.isImmediatePropagationStopped=i,null!==t.clientX&&void 0!==t.clientX){var o=s.a.documentElement,u=s.a.body
t.pageX=t.clientX+(o&&o.scrollLeft||u&&u.scrollLeft||0)-(o&&o.clientLeft||u&&u.clientLeft||0),t.pageY=t.clientY+(o&&o.scrollTop||u&&u.scrollTop||0)-(o&&o.clientTop||u&&u.clientTop||0)}t.which=t.charCode||t.keyCode,null!==t.button&&void 0!==t.button&&(t.button=1&t.button?0:4&t.button?1:2&t.button?2:0)}return t}var we=!1
!function(){try{var t=Object.defineProperty({},"passive",{get:function(){we=!0}})
r.a.addEventListener("test",null,t),r.a.removeEventListener("test",null,t)}catch(t){}}()
var Ce=["touchstart","touchmove"]
function Ee(t,e,i){if(Array.isArray(e))return Se(Ee,t,e,i)
var n=ve(t)
if(n.handlers||(n.handlers={}),n.handlers[e]||(n.handlers[e]=[]),i.guid||(i.guid=me()),n.handlers[e].push(i),n.dispatcher||(n.disabled=!1,n.dispatcher=function(e,i){if(!n.disabled){e=ke(e)
var r=n.handlers[e.type]
if(r)for(var a=r.slice(0),s=0,o=a.length;s<o&&!e.isImmediatePropagationStopped();s++)try{a[s].call(t,e,i)}catch(t){St.error(t)}}}),1===n.handlers[e].length)if(t.addEventListener){var r=!1
we&&Ce.indexOf(e)>-1&&(r={passive:!0}),t.addEventListener(e,n.dispatcher,r)}else t.attachEvent&&t.attachEvent("on"+e,n.dispatcher)}function Ae(t,e,i){if(_e(t)){var n=ve(t)
if(n.handlers){if(Array.isArray(e))return Se(Ae,t,e,i)
var r=function(t,e){n.handlers[e]=[],Te(t,e)}
if(void 0!==e){var a=n.handlers[e]
if(a)if(i){if(i.guid)for(var s=0;s<a.length;s++)a[s].guid===i.guid&&a.splice(s--,1)
Te(t,e)}else r(t,e)}else for(var o in n.handlers)Object.prototype.hasOwnProperty.call(n.handlers||{},o)&&r(t,o)}}}function Le(t,e,i){var n=_e(t)?ve(t):{},r=t.parentNode||t.ownerDocument
if("string"==typeof e?e={type:e,target:t}:e.target||(e.target=t),e=ke(e),n.dispatcher&&n.dispatcher.call(t,e,i),r&&!e.isPropagationStopped()&&!0===e.bubbles)Le.call(null,r,e,i)
else if(!r&&!e.defaultPrevented){var a=ve(e.target)
e.target[e.type]&&(a.disabled=!0,"function"==typeof e.target[e.type]&&e.target[e.type](),a.disabled=!1)}return!e.defaultPrevented}function Oe(t,e,i){if(Array.isArray(e))return Se(Oe,t,e,i)
var n=function n(){Ae(t,e,n),i.apply(this,arguments)}
n.guid=i.guid=i.guid||me(),Ee(t,e,n)}var Pe=Object.freeze({fixEvent:ke,on:Ee,off:Ae,trigger:Le,one:Oe}),xe=!1,Ue=void 0,Ie=function(){if(Nt()&&!1!==Ue.options.autoSetup){var t=Array.prototype.slice.call(s.a.getElementsByTagName("video")),e=Array.prototype.slice.call(s.a.getElementsByTagName("audio")),i=Array.prototype.slice.call(s.a.getElementsByTagName("video-js")),n=t.concat(e,i)
if(n&&n.length>0)for(var r=0,a=n.length;r<a;r++){var o=n[r]
if(!o||!o.getAttribute){De(1)
break}void 0===o.player&&null!==o.getAttribute("data-setup")&&Ue(o)}else xe||De(1)}}
function De(t,e){e&&(Ue=e),r.a.setTimeout(Ie,t)}Nt()&&"complete"===s.a.readyState?xe=!0:Oe(r.a,"load",function(){xe=!0})
var Re=function(t){var e=s.a.createElement("style")
return e.className=t,e},Me=function(t,e){t.styleSheet?t.styleSheet.cssText=e:t.textContent=e},Be=function(t,e,i){e.guid||(e.guid=me())
var n=function(){return e.apply(t,arguments)}
return n.guid=i?i+"_"+e.guid:e.guid,n},Ne=function(t,e){var i=Date.now()
return function(){var n=Date.now()
n-i>=e&&(t.apply(void 0,arguments),i=n)}},je=function(t,e,i){var n=arguments.length>3&&void 0!==arguments[3]?arguments[3]:r.a,a=void 0,s=function(){var r=this,s=arguments,o=function(){a=null,o=null,i||t.apply(r,s)}
!a&&i&&t.apply(r,s),n.clearTimeout(a),a=n.setTimeout(o,e)}
return s.cancel=function(){n.clearTimeout(a),a=null},s},Fe=function(){}
Fe.prototype.allowedEvents_={},Fe.prototype.on=function(t,e){var i=this.addEventListener
this.addEventListener=function(){},Ee(this,t,e),this.addEventListener=i},Fe.prototype.addEventListener=Fe.prototype.on,Fe.prototype.off=function(t,e){Ae(this,t,e)},Fe.prototype.removeEventListener=Fe.prototype.off,Fe.prototype.one=function(t,e){var i=this.addEventListener
this.addEventListener=function(){},Oe(this,t,e),this.addEventListener=i},Fe.prototype.trigger=function(t){var e=t.type||t
"string"==typeof t&&(t={type:e}),t=ke(t),this.allowedEvents_[e]&&this["on"+e]&&this["on"+e](t),Le(this,t)},Fe.prototype.dispatchEvent=Fe.prototype.trigger
var Ve=void 0
Fe.prototype.queueTrigger=function(t){var e=this
Ve||(Ve=new Map)
var i=t.type||t,n=Ve.get(this)
n||(n=new Map,Ve.set(this,n))
var a=n.get(i)
n.delete(i),r.a.clearTimeout(a)
var s=r.a.setTimeout(function(){0===n.size&&(n=null,Ve.delete(e)),e.trigger(t)},0)
n.set(i,s)}
var He=function(t){return t instanceof Fe||!!t.eventBusEl_&&["on","one","off","trigger"].every(function(e){return"function"==typeof t[e]})},qe=function(t){return"string"==typeof t&&/\S/.test(t)||Array.isArray(t)&&!!t.length},ze=function(t){if(!t.nodeName&&!He(t))throw new Error("Invalid target; must be a DOM node or evented object.")},We=function(t){if(!qe(t))throw new Error("Invalid event type; must be a non-empty string or array.")},Ge=function(t){if("function"!=typeof t)throw new Error("Invalid listener; must be a function.")},Xe=function(t,e){var i=e.length<3||e[0]===t||e[0]===t.eventBusEl_,n=void 0,r=void 0,a=void 0
return i?(n=t.eventBusEl_,e.length>=3&&e.shift(),r=e[0],a=e[1]):(n=e[0],r=e[1],a=e[2]),ze(n),We(r),Ge(a),{isTargetingSelf:i,target:n,type:r,listener:a=Be(t,a)}},Ye=function(t,e,i,n){ze(t),t.nodeName?Pe[e](t,i,n):t[e](i,n)},$e={on:function(){for(var t=this,e=arguments.length,i=Array(e),n=0;n<e;n++)i[n]=arguments[n]
var r=Xe(this,i),a=r.isTargetingSelf,s=r.target,o=r.type,u=r.listener
if(Ye(s,"on",o,u),!a){var l=function(){return t.off(s,o,u)}
l.guid=u.guid
var c=function(){return t.off("dispose",l)}
c.guid=u.guid,Ye(this,"on","dispose",l),Ye(s,"on","dispose",c)}},one:function(){for(var t=this,e=arguments.length,i=Array(e),n=0;n<e;n++)i[n]=arguments[n]
var r=Xe(this,i),a=r.isTargetingSelf,s=r.target,o=r.type,u=r.listener
if(a)Ye(s,"one",o,u)
else{var l=function e(){for(var i=arguments.length,n=Array(i),r=0;r<i;r++)n[r]=arguments[r]
t.off(s,o,e),u.apply(null,n)}
l.guid=u.guid,Ye(s,"one",o,l)}},off:function(t,e,i){if(!t||qe(t))Ae(this.eventBusEl_,t,e)
else{var n=t,r=e
ze(n),We(r),Ge(i),i=Be(this,i),this.off("dispose",i),n.nodeName?(Ae(n,r,i),Ae(n,"dispose",i)):He(n)&&(n.off(r,i),n.off("dispose",i))}},trigger:function(t,e){return Le(this.eventBusEl_,t,e)}}
function Ke(t){var e=(arguments.length>1&&void 0!==arguments[1]?arguments[1]:{}).eventBusKey
if(e){if(!t[e].nodeName)throw new Error('The eventBusKey "'+e+'" does not refer to an element.')
t.eventBusEl_=t[e]}else t.eventBusEl_=Ht("span",{className:"vjs-event-bus"})
return xt(t,$e),t.on("dispose",function(){t.off(),r.a.setTimeout(function(){t.eventBusEl_=null},0)}),t}var Je={state:{},setState:function(t){var e=this
"function"==typeof t&&(t=t())
var i=void 0
return Pt(t,function(t,n){e.state[n]!==t&&((i=i||{})[n]={from:e.state[n],to:t}),e.state[n]=t}),i&&He(this)&&this.trigger({changes:i,type:"statechanged"}),i}}
function Qe(t,e){return xt(t,Je),t.state=xt({},t.state,e),"function"==typeof t.handleStateChanged&&He(t)&&t.on("statechanged",t.handleStateChanged),t}function Ze(t){return"string"!=typeof t?t:t.charAt(0).toUpperCase()+t.slice(1)}function ti(){for(var t={},e=arguments.length,i=Array(e),n=0;n<e;n++)i[n]=arguments[n]
return i.forEach(function(e){e&&Pt(e,function(e,i){It(e)?(It(t[i])||(t[i]={}),t[i]=ti(t[i],e)):t[i]=e})}),t}var ei=function(){function t(e,i,n){if(wt(this,t),!e&&this.play?this.player_=e=this:this.player_=e,this.options_=ti({},this.options_),i=this.options_=ti(this.options_,i),this.id_=i.id||i.el&&i.el.id,!this.id_){var r=e&&e.id&&e.id()||"no_player"
this.id_=r+"_component_"+me()}this.name_=i.name||null,i.el?this.el_=i.el:!1!==i.createEl&&(this.el_=this.createEl()),!1!==i.evented&&Ke(this,{eventBusKey:this.el_?"el_":null}),Qe(this,this.constructor.defaultState),this.children_=[],this.childIndex_={},this.childNameIndex_={},!1!==i.initChildren&&this.initChildren(),this.ready(n),!1!==i.reportTouchActivity&&this.enableTouchActivity()}return t.prototype.dispose=function(){if(this.trigger({type:"dispose",bubbles:!1}),this.children_)for(var t=this.children_.length-1;t>=0;t--)this.children_[t].dispose&&this.children_[t].dispose()
this.children_=null,this.childIndex_=null,this.childNameIndex_=null,this.el_&&(this.el_.parentNode&&this.el_.parentNode.removeChild(this.el_),be(this.el_),this.el_=null),this.player_=null},t.prototype.player=function(){return this.player_},t.prototype.options=function(t){return St.warn("this.options() has been deprecated and will be moved to the constructor in 6.0"),t?(this.options_=ti(this.options_,t),this.options_):this.options_},t.prototype.el=function(){return this.el_},t.prototype.createEl=function(t,e,i){return Ht(t,e,i)},t.prototype.localize=function(t,e){var i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:t,n=this.player_.language&&this.player_.language(),r=this.player_.languages&&this.player_.languages(),a=r&&r[n],s=n&&n.split("-")[0],o=r&&r[s],u=i
return a&&a[t]?u=a[t]:o&&o[t]&&(u=o[t]),e&&(u=u.replace(/\{(\d+)\}/g,function(t,i){var n=e[i-1],r=n
return void 0===n&&(r=t),r})),u},t.prototype.contentEl=function(){return this.contentEl_||this.el_},t.prototype.id=function(){return this.id_},t.prototype.name=function(){return this.name_},t.prototype.children=function(){return this.children_},t.prototype.getChildById=function(t){return this.childIndex_[t]},t.prototype.getChild=function(t){if(t)return t=Ze(t),this.childNameIndex_[t]},t.prototype.addChild=function(e){var i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:this.children_.length,r=void 0,a=void 0
if("string"==typeof e){a=Ze(e)
var s=i.componentClass||a
i.name=a
var o=t.getComponent(s)
if(!o)throw new Error("Component "+s+" does not exist")
if("function"!=typeof o)return null
r=new o(this.player_||this,i)}else r=e
if(this.children_.splice(n,0,r),"function"==typeof r.id&&(this.childIndex_[r.id()]=r),(a=a||r.name&&Ze(r.name()))&&(this.childNameIndex_[a]=r),"function"==typeof r.el&&r.el()){var u=this.contentEl().children[n]||null
this.contentEl().insertBefore(r.el(),u)}return r},t.prototype.removeChild=function(t){if("string"==typeof t&&(t=this.getChild(t)),t&&this.children_){for(var e=!1,i=this.children_.length-1;i>=0;i--)if(this.children_[i]===t){e=!0,this.children_.splice(i,1)
break}if(e){this.childIndex_[t.id()]=null,this.childNameIndex_[t.name()]=null
var n=t.el()
n&&n.parentNode===this.contentEl()&&this.contentEl().removeChild(t.el())}}},t.prototype.initChildren=function(){var e=this,i=this.options_.children
if(i){var n=this.options_,r=void 0,a=t.getComponent("Tech");(r=Array.isArray(i)?i:Object.keys(i)).concat(Object.keys(this.options_).filter(function(t){return!r.some(function(e){return"string"==typeof e?t===e:t===e.name})})).map(function(t){var n=void 0,r=void 0
return"string"==typeof t?r=i[n=t]||e.options_[n]||{}:(n=t.name,r=t),{name:n,opts:r}}).filter(function(e){var i=t.getComponent(e.opts.componentClass||Ze(e.name))
return i&&!a.isTech(i)}).forEach(function(t){var i=t.name,r=t.opts
if(void 0!==n[i]&&(r=n[i]),!1!==r){!0===r&&(r={}),r.playerOptions=e.options_.playerOptions
var a=e.addChild(i,r)
a&&(e[i]=a)}})}},t.prototype.buildCSSClass=function(){return""},t.prototype.ready=function(t){var e=arguments.length>1&&void 0!==arguments[1]&&arguments[1]
if(t)return this.isReady_?void(e?t.call(this):this.setTimeout(t,1)):(this.readyQueue_=this.readyQueue_||[],void this.readyQueue_.push(t))},t.prototype.triggerReady=function(){this.isReady_=!0,this.setTimeout(function(){var t=this.readyQueue_
this.readyQueue_=[],t&&t.length>0&&t.forEach(function(t){t.call(this)},this),this.trigger("ready")},1)},t.prototype.$=function(t,e){return he(t,e||this.contentEl())},t.prototype.$$=function(t,e){return de(t,e||this.contentEl())},t.prototype.hasClass=function(t){return Wt(this.el_,t)},t.prototype.addClass=function(t){Gt(this.el_,t)},t.prototype.removeClass=function(t){Xt(this.el_,t)},t.prototype.toggleClass=function(t,e){Yt(this.el_,t,e)},t.prototype.show=function(){this.removeClass("vjs-hidden")},t.prototype.hide=function(){this.addClass("vjs-hidden")},t.prototype.lockShowing=function(){this.addClass("vjs-lock-showing")},t.prototype.unlockShowing=function(){this.removeClass("vjs-lock-showing")},t.prototype.getAttribute=function(t){return Jt(this.el_,t)},t.prototype.setAttribute=function(t,e){Qt(this.el_,t,e)},t.prototype.removeAttribute=function(t){Zt(this.el_,t)},t.prototype.width=function(t,e){return this.dimension("width",t,e)},t.prototype.height=function(t,e){return this.dimension("height",t,e)},t.prototype.dimensions=function(t,e){this.width(t,!0),this.height(e)},t.prototype.dimension=function(t,e,i){if(void 0!==e)return null!==e&&e==e||(e=0),-1!==(""+e).indexOf("%")||-1!==(""+e).indexOf("px")?this.el_.style[t]=e:this.el_.style[t]="auto"===e?"":e+"px",void(i||this.trigger("componentresize"))
if(!this.el_)return 0
var n=this.el_.style[t],r=n.indexOf("px")
return-1!==r?parseInt(n.slice(0,r),10):parseInt(this.el_["offset"+Ze(t)],10)},t.prototype.currentDimension=function(t){var e=0
if("width"!==t&&"height"!==t)throw new Error("currentDimension only accepts width or height value")
if("function"==typeof r.a.getComputedStyle){var i=r.a.getComputedStyle(this.el_)
e=i.getPropertyValue(t)||i[t]}if(0===(e=parseFloat(e))){var n="offset"+Ze(t)
e=this.el_[n]}return e},t.prototype.currentDimensions=function(){return{width:this.currentDimension("width"),height:this.currentDimension("height")}},t.prototype.currentWidth=function(){return this.currentDimension("width")},t.prototype.currentHeight=function(){return this.currentDimension("height")},t.prototype.focus=function(){this.el_.focus()},t.prototype.blur=function(){this.el_.blur()},t.prototype.emitTapEvents=function(){var t=0,e=null,i=void 0
this.on("touchstart",function(n){1===n.touches.length&&(e={pageX:n.touches[0].pageX,pageY:n.touches[0].pageY},t=(new Date).getTime(),i=!0)}),this.on("touchmove",function(t){if(t.touches.length>1)i=!1
else if(e){var n=t.touches[0].pageX-e.pageX,r=t.touches[0].pageY-e.pageY
Math.sqrt(n*n+r*r)>10&&(i=!1)}})
var n=function(){i=!1}
this.on("touchleave",n),this.on("touchcancel",n),this.on("touchend",function(n){e=null,!0===i&&(new Date).getTime()-t<200&&(n.preventDefault(),this.trigger("tap"))})},t.prototype.enableTouchActivity=function(){if(this.player()&&this.player().reportUserActivity){var t=Be(this.player(),this.player().reportUserActivity),e=void 0
this.on("touchstart",function(){t(),this.clearInterval(e),e=this.setInterval(t,250)})
var i=function(i){t(),this.clearInterval(e)}
this.on("touchmove",t),this.on("touchend",i),this.on("touchcancel",i)}},t.prototype.setTimeout=function(t,e){var i,n,a=this
return t=Be(this,t),i=r.a.setTimeout(function(){a.off("dispose",n),t()},e),(n=function(){return a.clearTimeout(i)}).guid="vjs-timeout-"+i,this.on("dispose",n),i},t.prototype.clearTimeout=function(t){r.a.clearTimeout(t)
var e=function(){}
return e.guid="vjs-timeout-"+t,this.off("dispose",e),t},t.prototype.setInterval=function(t,e){var i=this
t=Be(this,t)
var n=r.a.setInterval(t,e),a=function(){return i.clearInterval(n)}
return a.guid="vjs-interval-"+n,this.on("dispose",a),n},t.prototype.clearInterval=function(t){r.a.clearInterval(t)
var e=function(){}
return e.guid="vjs-interval-"+t,this.off("dispose",e),t},t.prototype.requestAnimationFrame=function(t){var e,i,n=this
return this.supportsRaf_?(t=Be(this,t),e=r.a.requestAnimationFrame(function(){n.off("dispose",i),t()}),(i=function(){return n.cancelAnimationFrame(e)}).guid="vjs-raf-"+e,this.on("dispose",i),e):this.setTimeout(t,1e3/60)},t.prototype.cancelAnimationFrame=function(t){if(this.supportsRaf_){r.a.cancelAnimationFrame(t)
var e=function(){}
return e.guid="vjs-raf-"+t,this.off("dispose",e),t}return this.clearTimeout(t)},t.registerComponent=function(e,i){if("string"!=typeof e||!e)throw new Error('Illegal component name, "'+e+'"; must be a non-empty string.')
var n=t.getComponent("Tech"),r=n&&n.isTech(i),a=t===i||t.prototype.isPrototypeOf(i.prototype)
if(r||!a){throw new Error('Illegal component, "'+e+'"; '+(r?"techs must be registered using Tech.registerTech()":"must be a Component subclass")+".")}e=Ze(e),t.components_||(t.components_={})
var s=t.getComponent("Player")
if("Player"===e&&s&&s.players){var o=s.players,u=Object.keys(o)
if(o&&u.length>0&&u.map(function(t){return o[t]}).every(Boolean))throw new Error("Can not register Player component after player has been created.")}return t.components_[e]=i,i},t.getComponent=function(e){if(e)return e=Ze(e),t.components_&&t.components_[e]?t.components_[e]:void 0},t}()
ei.prototype.supportsRaf_="function"==typeof r.a.requestAnimationFrame&&"function"==typeof r.a.cancelAnimationFrame,ei.registerComponent("Component",ei)
var ii=r.a.navigator&&r.a.navigator.userAgent||"",ni=/AppleWebKit\/([\d.]+)/i.exec(ii),ri=ni?parseFloat(ni.pop()):null,ai=/iPad/i.test(ii),si=/iPhone/i.test(ii)&&!ai,oi=/iPod/i.test(ii),ui=si||ai||oi,li=function(){var t=ii.match(/OS (\d+)_/i)
return t&&t[1]?t[1]:null}(),ci=/Android/i.test(ii),hi=function(){var t=ii.match(/Android (\d+)(?:\.(\d+))?(?:\.(\d+))*/i)
if(!t)return null
var e=t[1]&&parseFloat(t[1]),i=t[2]&&parseFloat(t[2])
return e&&i?parseFloat(t[1]+"."+t[2]):e||null}(),di=ci&&hi<5&&ri<537,pi=/Firefox/i.test(ii),fi=/Edge/i.test(ii),mi=!fi&&(/Chrome/i.test(ii)||/CriOS/i.test(ii)),gi=function(){var t=ii.match(/(Chrome|CriOS)\/(\d+)/)
return t&&t[2]?parseFloat(t[2]):null}(),yi=function(){var t=/MSIE\s(\d+)\.\d/.exec(ii),e=t&&parseFloat(t[1])
return!e&&/Trident\/7.0/i.test(ii)&&/rv:11.0/.test(ii)&&(e=11),e}(),vi=/Safari/i.test(ii)&&!mi&&!ci&&!fi,_i=(vi||ui)&&!mi,bi=Nt()&&("ontouchstart"in r.a||r.a.navigator.maxTouchPoints||r.a.DocumentTouch&&r.a.document instanceof r.a.DocumentTouch),Ti=Object.freeze({IS_IPAD:ai,IS_IPHONE:si,IS_IPOD:oi,IS_IOS:ui,IOS_VERSION:li,IS_ANDROID:ci,ANDROID_VERSION:hi,IS_NATIVE_ANDROID:di,IS_FIREFOX:pi,IS_EDGE:fi,IS_CHROME:mi,CHROME_VERSION:gi,IE_VERSION:yi,IS_SAFARI:vi,IS_ANY_SAFARI:_i,TOUCH_ENABLED:bi})
function Si(t,e,i,n){return function(t,e,i){if("number"!=typeof e||e<0||e>i)throw new Error("Failed to execute '"+t+"' on 'TimeRanges': The index provided ("+e+") is non-numeric or out of bounds (0-"+i+").")}(t,n,i.length-1),i[n][e]}function ki(t){return void 0===t||0===t.length?{length:0,start:function(){throw new Error("This TimeRanges object is empty")},end:function(){throw new Error("This TimeRanges object is empty")}}:{length:t.length,start:Si.bind(null,"start",0,t),end:Si.bind(null,"end",1,t)}}function wi(t,e){return Array.isArray(t)?ki(t):void 0===t||void 0===e?ki():ki([[t,e]])}function Ci(t,e){var i=0,n=void 0,r=void 0
if(!e)return 0
t&&t.length||(t=wi(0,0))
for(var a=0;a<t.length;a++)n=t.start(a),(r=t.end(a))>e&&(r=e),i+=r-n
return i/e}for(var Ei={},Ai=[["requestFullscreen","exitFullscreen","fullscreenElement","fullscreenEnabled","fullscreenchange","fullscreenerror"],["webkitRequestFullscreen","webkitExitFullscreen","webkitFullscreenElement","webkitFullscreenEnabled","webkitfullscreenchange","webkitfullscreenerror"],["webkitRequestFullScreen","webkitCancelFullScreen","webkitCurrentFullScreenElement","webkitCancelFullScreen","webkitfullscreenchange","webkitfullscreenerror"],["mozRequestFullScreen","mozCancelFullScreen","mozFullScreenElement","mozFullScreenEnabled","mozfullscreenchange","mozfullscreenerror"],["msRequestFullscreen","msExitFullscreen","msFullscreenElement","msFullscreenEnabled","MSFullscreenChange","MSFullscreenError"]],Li=Ai[0],Oi=void 0,Pi=0;Pi<Ai.length;Pi++)if(Ai[Pi][1]in s.a){Oi=Ai[Pi]
break}if(Oi)for(var xi=0;xi<Oi.length;xi++)Ei[Li[xi]]=Oi[xi]
function Ui(t){if(t instanceof Ui)return t
"number"==typeof t?this.code=t:"string"==typeof t?this.message=t:Ut(t)&&("number"==typeof t.code&&(this.code=t.code),xt(this,t)),this.message||(this.message=Ui.defaultMessages[this.code]||"")}Ui.prototype.code=0,Ui.prototype.message="",Ui.prototype.status=null,Ui.errorTypes=["MEDIA_ERR_CUSTOM","MEDIA_ERR_ABORTED","MEDIA_ERR_NETWORK","MEDIA_ERR_DECODE","MEDIA_ERR_SRC_NOT_SUPPORTED","MEDIA_ERR_ENCRYPTED"],Ui.defaultMessages={1:"You aborted the media playback",2:"A network error caused the media download to fail part-way.",3:"The media playback was aborted due to a corruption problem or because the media used features your browser did not support.",4:"The media could not be loaded, either because the server or network failed or because the format is not supported.",5:"The media is encrypted and we do not have the keys to decrypt it."}
for(var Ii=0;Ii<Ui.errorTypes.length;Ii++)Ui[Ui.errorTypes[Ii]]=Ii,Ui.prototype[Ui.errorTypes[Ii]]=Ii
function Di(t){return null!=t&&"function"==typeof t.then}function Ri(t){Di(t)&&t.then(null,function(t){})}var Mi=function(t){return["kind","label","language","id","inBandMetadataTrackDispatchType","mode","src"].reduce(function(e,i,n){return t[i]&&(e[i]=t[i]),e},{cues:t.cues&&Array.prototype.map.call(t.cues,function(t){return{startTime:t.startTime,endTime:t.endTime,text:t.text,id:t.id}})})},Bi="vjs-modal-dialog",Ni=function(t){function e(i,n){wt(this,e)
var r=Et(this,t.call(this,i,n))
return r.opened_=r.hasBeenOpened_=r.hasBeenFilled_=!1,r.closeable(!r.options_.uncloseable),r.content(r.options_.content),r.contentEl_=Ht("div",{className:Bi+"-content"},{role:"document"}),r.descEl_=Ht("p",{className:Bi+"-description vjs-control-text",id:r.el().getAttribute("aria-describedby")}),qt(r.descEl_,r.description()),r.el_.appendChild(r.descEl_),r.el_.appendChild(r.contentEl_),r}return Ct(e,t),e.prototype.createEl=function(){return t.prototype.createEl.call(this,"div",{className:this.buildCSSClass(),tabIndex:-1},{"aria-describedby":this.id()+"_description","aria-hidden":"true","aria-label":this.label(),role:"dialog"})},e.prototype.dispose=function(){this.contentEl_=null,this.descEl_=null,this.previouslyActiveEl_=null,t.prototype.dispose.call(this)},e.prototype.buildCSSClass=function(){return Bi+" vjs-hidden "+t.prototype.buildCSSClass.call(this)},e.prototype.handleKeyPress=function(t){27===t.which&&this.closeable()&&this.close()},e.prototype.label=function(){return this.localize(this.options_.label||"Modal Window")},e.prototype.description=function(){var t=this.options_.description||this.localize("This is a modal window.")
return this.closeable()&&(t+=" "+this.localize("This modal can be closed by pressing the Escape key or activating the close button.")),t},e.prototype.open=function(){if(!this.opened_){var t=this.player()
this.trigger("beforemodalopen"),this.opened_=!0,(this.options_.fillAlways||!this.hasBeenOpened_&&!this.hasBeenFilled_)&&this.fill(),this.wasPlaying_=!t.paused(),this.options_.pauseOnOpen&&this.wasPlaying_&&t.pause(),this.closeable()&&this.on(this.el_.ownerDocument,"keydown",Be(this,this.handleKeyPress)),this.hadControls_=t.controls(),t.controls(!1),this.show(),this.conditionalFocus_(),this.el().setAttribute("aria-hidden","false"),this.trigger("modalopen"),this.hasBeenOpened_=!0}},e.prototype.opened=function(t){return"boolean"==typeof t&&this[t?"open":"close"](),this.opened_},e.prototype.close=function(){if(this.opened_){var t=this.player()
this.trigger("beforemodalclose"),this.opened_=!1,this.wasPlaying_&&this.options_.pauseOnOpen&&t.play(),this.closeable()&&this.off(this.el_.ownerDocument,"keydown",Be(this,this.handleKeyPress)),this.hadControls_&&t.controls(!0),this.hide(),this.el().setAttribute("aria-hidden","true"),this.trigger("modalclose"),this.conditionalBlur_(),this.options_.temporary&&this.dispose()}},e.prototype.closeable=function(t){if("boolean"==typeof t){var e=this.closeable_=!!t,i=this.getChild("closeButton")
if(e&&!i){var n=this.contentEl_
this.contentEl_=this.el_,i=this.addChild("closeButton",{controlText:"Close Modal Dialog"}),this.contentEl_=n,this.on(i,"close",this.close)}!e&&i&&(this.off(i,"close",this.close),this.removeChild(i),i.dispose())}return this.closeable_},e.prototype.fill=function(){this.fillWith(this.content())},e.prototype.fillWith=function(t){var e=this.contentEl(),i=e.parentNode,n=e.nextSibling
this.trigger("beforemodalfill"),this.hasBeenFilled_=!0,i.removeChild(e),this.empty(),le(e,t),this.trigger("modalfill"),n?i.insertBefore(e,n):i.appendChild(e)
var r=this.getChild("closeButton")
r&&i.appendChild(r.el_)},e.prototype.empty=function(){this.trigger("beforemodalempty"),se(this.contentEl()),this.trigger("modalempty")},e.prototype.content=function(t){return void 0!==t&&(this.content_=t),this.content_},e.prototype.conditionalFocus_=function(){var t=s.a.activeElement,e=this.player_.el_
this.previouslyActiveEl_=null,(e.contains(t)||e===t)&&(this.previouslyActiveEl_=t,this.focus(),this.on(s.a,"keydown",this.handleKeyDown))},e.prototype.conditionalBlur_=function(){this.previouslyActiveEl_&&(this.previouslyActiveEl_.focus(),this.previouslyActiveEl_=null),this.off(s.a,"keydown",this.handleKeyDown)},e.prototype.handleKeyDown=function(t){if(9===t.which){for(var e=this.focusableEls_(),i=this.el_.querySelector(":focus"),n=void 0,r=0;r<e.length;r++)if(i===e[r]){n=r
break}s.a.activeElement===this.el_&&(n=0),t.shiftKey&&0===n?(e[e.length-1].focus(),t.preventDefault()):t.shiftKey||n!==e.length-1||(e[0].focus(),t.preventDefault())}},e.prototype.focusableEls_=function(){var t=this.el_.querySelectorAll("*")
return Array.prototype.filter.call(t,function(t){return(t instanceof r.a.HTMLAnchorElement||t instanceof r.a.HTMLAreaElement)&&t.hasAttribute("href")||(t instanceof r.a.HTMLInputElement||t instanceof r.a.HTMLSelectElement||t instanceof r.a.HTMLTextAreaElement||t instanceof r.a.HTMLButtonElement)&&!t.hasAttribute("disabled")||t instanceof r.a.HTMLIFrameElement||t instanceof r.a.HTMLObjectElement||t instanceof r.a.HTMLEmbedElement||t.hasAttribute("tabindex")&&-1!==t.getAttribute("tabindex")||t.hasAttribute("contenteditable")})},e}(ei)
Ni.prototype.options_={pauseOnOpen:!0,temporary:!0},ei.registerComponent("ModalDialog",Ni)
var ji=function(t){function e(){var i=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[]
wt(this,e)
var n=Et(this,t.call(this))
n.tracks_=[],Object.defineProperty(n,"length",{get:function(){return this.tracks_.length}})
for(var r=0;r<i.length;r++)n.addTrack(i[r])
return n}return Ct(e,t),e.prototype.addTrack=function(t){var e=this.tracks_.length
""+e in this||Object.defineProperty(this,e,{get:function(){return this.tracks_[e]}}),-1===this.tracks_.indexOf(t)&&(this.tracks_.push(t),this.trigger({track:t,type:"addtrack"}))},e.prototype.removeTrack=function(t){for(var e=void 0,i=0,n=this.length;i<n;i++)if(this[i]===t){(e=this[i]).off&&e.off(),this.tracks_.splice(i,1)
break}e&&this.trigger({track:e,type:"removetrack"})},e.prototype.getTrackById=function(t){for(var e=null,i=0,n=this.length;i<n;i++){var r=this[i]
if(r.id===t){e=r
break}}return e},e}(Fe)
for(var Fi in ji.prototype.allowedEvents_={change:"change",addtrack:"addtrack",removetrack:"removetrack"},ji.prototype.allowedEvents_)ji.prototype["on"+Fi]=null
var Vi=function(t,e){for(var i=0;i<t.length;i++)Object.keys(t[i]).length&&e.id!==t[i].id&&(t[i].enabled=!1)},Hi=function(t){function e(){var i=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[]
wt(this,e)
for(var n=i.length-1;n>=0;n--)if(i[n].enabled){Vi(i,i[n])
break}var r=Et(this,t.call(this,i))
return r.changing_=!1,r}return Ct(e,t),e.prototype.addTrack=function(e){var i=this
e.enabled&&Vi(this,e),t.prototype.addTrack.call(this,e),e.addEventListener&&e.addEventListener("enabledchange",function(){i.changing_||(i.changing_=!0,Vi(i,e),i.changing_=!1,i.trigger("change"))})},e}(ji),qi=function(t,e){for(var i=0;i<t.length;i++)Object.keys(t[i]).length&&e.id!==t[i].id&&(t[i].selected=!1)},zi=function(t){function e(){var i=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[]
wt(this,e)
for(var n=i.length-1;n>=0;n--)if(i[n].selected){qi(i,i[n])
break}var r=Et(this,t.call(this,i))
return r.changing_=!1,Object.defineProperty(r,"selectedIndex",{get:function(){for(var t=0;t<this.length;t++)if(this[t].selected)return t
return-1},set:function(){}}),r}return Ct(e,t),e.prototype.addTrack=function(e){var i=this
e.selected&&qi(this,e),t.prototype.addTrack.call(this,e),e.addEventListener&&e.addEventListener("selectedchange",function(){i.changing_||(i.changing_=!0,qi(i,e),i.changing_=!1,i.trigger("change"))})},e}(ji),Wi=function(t){function e(){return wt(this,e),Et(this,t.apply(this,arguments))}return Ct(e,t),e.prototype.addTrack=function(e){t.prototype.addTrack.call(this,e),e.addEventListener("modechange",Be(this,function(){this.queueTrigger("change")})),-1===["metadata","chapters"].indexOf(e.kind)&&e.addEventListener("modechange",Be(this,function(){this.trigger("selectedlanguagechange")}))},e}(ji),Gi=function(){function t(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[]
wt(this,t),this.trackElements_=[],Object.defineProperty(this,"length",{get:function(){return this.trackElements_.length}})
for(var i=0,n=e.length;i<n;i++)this.addTrackElement_(e[i])}return t.prototype.addTrackElement_=function(t){var e=this.trackElements_.length
""+e in this||Object.defineProperty(this,e,{get:function(){return this.trackElements_[e]}}),-1===this.trackElements_.indexOf(t)&&this.trackElements_.push(t)},t.prototype.getTrackElementByTrack_=function(t){for(var e=void 0,i=0,n=this.trackElements_.length;i<n;i++)if(t===this.trackElements_[i].track){e=this.trackElements_[i]
break}return e},t.prototype.removeTrackElement_=function(t){for(var e=0,i=this.trackElements_.length;e<i;e++)if(t===this.trackElements_[e]){this.trackElements_.splice(e,1)
break}},t}(),Xi=function(){function t(e){wt(this,t),t.prototype.setCues_.call(this,e),Object.defineProperty(this,"length",{get:function(){return this.length_}})}return t.prototype.setCues_=function(t){var e=this.length||0,i=0,n=t.length
this.cues_=t,this.length_=t.length
var r=function(t){""+t in this||Object.defineProperty(this,""+t,{get:function(){return this.cues_[t]}})}
if(e<n)for(i=e;i<n;i++)r.call(this,i)},t.prototype.getCueById=function(t){for(var e=null,i=0,n=this.length;i<n;i++){var r=this[i]
if(r.id===t){e=r
break}}return e},t}(),Yi={alternative:"alternative",captions:"captions",main:"main",sign:"sign",subtitles:"subtitles",commentary:"commentary"},$i={alternative:"alternative",descriptions:"descriptions",main:"main","main-desc":"main-desc",translation:"translation",commentary:"commentary"},Ki={subtitles:"subtitles",captions:"captions",descriptions:"descriptions",chapters:"chapters",metadata:"metadata"},Ji={disabled:"disabled",hidden:"hidden",showing:"showing"},Qi=function(t){function e(){var i=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{}
wt(this,e)
var n=Et(this,t.call(this)),r={id:i.id||"vjs_track_"+me(),kind:i.kind||"",label:i.label||"",language:i.language||""},a=function(t){Object.defineProperty(n,t,{get:function(){return r[t]},set:function(){}})}
for(var s in r)a(s)
return n}return Ct(e,t),e}(Fe),Zi=function(t){var e=["protocol","hostname","port","pathname","search","hash","host"],i=s.a.createElement("a")
i.href=t
var n=""===i.host&&"file:"!==i.protocol,a=void 0
n&&((a=s.a.createElement("div")).innerHTML='<a href="'+t+'"></a>',i=a.firstChild,a.setAttribute("style","display:none; position:absolute;"),s.a.body.appendChild(a))
for(var o={},u=0;u<e.length;u++)o[e[u]]=i[e[u]]
return"http:"===o.protocol&&(o.host=o.host.replace(/:80$/,"")),"https:"===o.protocol&&(o.host=o.host.replace(/:443$/,"")),o.protocol||(o.protocol=r.a.location.protocol),n&&s.a.body.removeChild(a),o},tn=function(t){if(!t.match(/^https?:\/\//)){var e=s.a.createElement("div")
e.innerHTML='<a href="'+t+'">x</a>',t=e.firstChild.href}return t},en=function(t){if("string"==typeof t){var e=/^(\/?)([\s\S]*?)((?:\.{1,2}|[^\/]+?)(\.([^\.\/\?]+)))(?:[\/]*|[\?].*)$/i.exec(t)
if(e)return e.pop().toLowerCase()}return""},nn=function(t){var e=r.a.location,i=Zi(t)
return(":"===i.protocol?e.protocol:i.protocol)+i.host!==e.protocol+e.host},rn=Object.freeze({parseUrl:Zi,getAbsoluteURL:tn,getFileExtension:en,isCrossOrigin:nn}),an=function(t,e){var i=new r.a.WebVTT.Parser(r.a,r.a.vttjs,r.a.WebVTT.StringDecoder()),n=[]
i.oncue=function(t){e.addCue(t)},i.onparsingerror=function(t){n.push(t)},i.onflush=function(){e.trigger({type:"loadeddata",target:e})},i.parse(t),n.length>0&&(r.a.console&&r.a.console.groupCollapsed&&r.a.console.groupCollapsed("Text Track parsing errors for "+e.src),n.forEach(function(t){return St.error(t)}),r.a.console&&r.a.console.groupEnd&&r.a.console.groupEnd()),i.flush()},sn=function(t,e){var i={uri:t},n=nn(t)
n&&(i.cors=n),c()(i,Be(this,function(t,i,n){if(t)return St.error(t,i)
if(e.loaded_=!0,"function"!=typeof r.a.WebVTT){if(e.tech_){var a=function(){return an(n,e)}
e.tech_.on("vttjsloaded",a),e.tech_.on("vttjserror",function(){St.error("vttjs failed to load, stopping trying to process "+e.src),e.tech_.off("vttjsloaded",a)})}}else an(n,e)}))},on=function(t){function e(){var i=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{}
if(wt(this,e),!i.tech)throw new Error("A tech was not provided.")
var n=ti(i,{kind:Ki[i.kind]||"subtitles",language:i.language||i.srclang||""}),r=Ji[n.mode]||"disabled",a=n.default
"metadata"!==n.kind&&"chapters"!==n.kind||(r="hidden")
var s=Et(this,t.call(this,n))
s.tech_=n.tech,s.cues_=[],s.activeCues_=[]
var o=new Xi(s.cues_),u=new Xi(s.activeCues_),l=!1,c=Be(s,function(){this.activeCues=this.activeCues,l&&(this.trigger("cuechange"),l=!1)})
return"disabled"!==r&&s.tech_.ready(function(){s.tech_.on("timeupdate",c)},!0),Object.defineProperties(s,{default:{get:function(){return a},set:function(){}},mode:{get:function(){return r},set:function(t){var e=this
Ji[t]&&("showing"===(r=t)&&this.tech_.ready(function(){e.tech_.on("timeupdate",c)},!0),this.trigger("modechange"))}},cues:{get:function(){return this.loaded_?o:null},set:function(){}},activeCues:{get:function(){if(!this.loaded_)return null
if(0===this.cues.length)return u
for(var t=this.tech_.currentTime(),e=[],i=0,n=this.cues.length;i<n;i++){var r=this.cues[i]
r.startTime<=t&&r.endTime>=t?e.push(r):r.startTime===r.endTime&&r.startTime<=t&&r.startTime+.5>=t&&e.push(r)}if(l=!1,e.length!==this.activeCues_.length)l=!0
else for(var a=0;a<e.length;a++)-1===this.activeCues_.indexOf(e[a])&&(l=!0)
return this.activeCues_=e,u.setCues_(this.activeCues_),u},set:function(){}}}),n.src?(s.src=n.src,sn(n.src,s)):s.loaded_=!0,s}return Ct(e,t),e.prototype.addCue=function(t){var e=t
if(r.a.vttjs&&!(t instanceof r.a.vttjs.VTTCue)){for(var i in e=new r.a.vttjs.VTTCue(t.startTime,t.endTime,t.text),t)i in e||(e[i]=t[i])
e.id=t.id,e.originalCue_=t}for(var n=this.tech_.textTracks(),a=0;a<n.length;a++)n[a]!==this&&n[a].removeCue(e)
this.cues_.push(e),this.cues.setCues_(this.cues_)},e.prototype.removeCue=function(t){for(var e=this.cues_.length;e--;){var i=this.cues_[e]
if(i===t||i.originalCue_&&i.originalCue_===t){this.cues_.splice(e,1),this.cues.setCues_(this.cues_)
break}}},e}(Qi)
on.prototype.allowedEvents_={cuechange:"cuechange"}
var un=function(t){function e(){var i=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{}
wt(this,e)
var n=ti(i,{kind:$i[i.kind]||""}),r=Et(this,t.call(this,n)),a=!1
return Object.defineProperty(r,"enabled",{get:function(){return a},set:function(t){"boolean"==typeof t&&t!==a&&(a=t,this.trigger("enabledchange"))}}),n.enabled&&(r.enabled=n.enabled),r.loaded_=!0,r}return Ct(e,t),e}(Qi),ln=function(t){function e(){var i=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{}
wt(this,e)
var n=ti(i,{kind:Yi[i.kind]||""}),r=Et(this,t.call(this,n)),a=!1
return Object.defineProperty(r,"selected",{get:function(){return a},set:function(t){"boolean"==typeof t&&t!==a&&(a=t,this.trigger("selectedchange"))}}),n.selected&&(r.selected=n.selected),r}return Ct(e,t),e}(Qi),cn=0,hn=2,dn=function(t){function e(){var i=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{}
wt(this,e)
var n=Et(this,t.call(this)),r=void 0,a=new on(i)
return n.kind=a.kind,n.src=a.src,n.srclang=a.language,n.label=a.label,n.default=a.default,Object.defineProperties(n,{readyState:{get:function(){return r}},track:{get:function(){return a}}}),r=cn,a.addEventListener("loadeddata",function(){r=hn,n.trigger({type:"load",target:n})}),n}return Ct(e,t),e}(Fe)
dn.prototype.allowedEvents_={load:"load"},dn.NONE=cn,dn.LOADING=1,dn.LOADED=hn,dn.ERROR=3
var pn={audio:{ListClass:Hi,TrackClass:un,capitalName:"Audio"},video:{ListClass:zi,TrackClass:ln,capitalName:"Video"},text:{ListClass:Wi,TrackClass:on,capitalName:"Text"}}
Object.keys(pn).forEach(function(t){pn[t].getterName=t+"Tracks",pn[t].privateName=t+"Tracks_"})
var fn={remoteText:{ListClass:Wi,TrackClass:on,capitalName:"RemoteText",getterName:"remoteTextTracks",privateName:"remoteTextTracks_"},remoteTextEl:{ListClass:Gi,TrackClass:dn,capitalName:"RemoteTextTrackEls",getterName:"remoteTextTrackEls",privateName:"remoteTextTrackEls_"}},mn=ti(pn,fn)
fn.names=Object.keys(fn),pn.names=Object.keys(pn),mn.names=[].concat(fn.names).concat(pn.names)
var gn=function(t){function e(){var i=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:function(){}
wt(this,e),i.reportTouchActivity=!1
var r=Et(this,t.call(this,null,i,n))
return r.hasStarted_=!1,r.on("playing",function(){this.hasStarted_=!0}),r.on("loadstart",function(){this.hasStarted_=!1}),mn.names.forEach(function(t){var e=mn[t]
i&&i[e.getterName]&&(r[e.privateName]=i[e.getterName])}),r.featuresProgressEvents||r.manualProgressOn(),r.featuresTimeupdateEvents||r.manualTimeUpdatesOn(),["Text","Audio","Video"].forEach(function(t){!1===i["native"+t+"Tracks"]&&(r["featuresNative"+t+"Tracks"]=!1)}),!1===i.nativeCaptions||!1===i.nativeTextTracks?r.featuresNativeTextTracks=!1:!0!==i.nativeCaptions&&!0!==i.nativeTextTracks||(r.featuresNativeTextTracks=!0),r.featuresNativeTextTracks||r.emulateTextTracks(),r.autoRemoteTextTracks_=new mn.text.ListClass,r.initTrackListeners(),i.nativeControlsForTouch||r.emitTapEvents(),r.constructor&&(r.name_=r.constructor.name||"Unknown Tech"),r}return Ct(e,t),e.prototype.triggerSourceset=function(t){var e=this
this.isReady_||this.one("ready",function(){return e.setTimeout(function(){return e.triggerSourceset(t)},1)}),this.trigger({src:t,type:"sourceset"})},e.prototype.manualProgressOn=function(){this.on("durationchange",this.onDurationChange),this.manualProgress=!0,this.one("ready",this.trackProgress)},e.prototype.manualProgressOff=function(){this.manualProgress=!1,this.stopTrackingProgress(),this.off("durationchange",this.onDurationChange)},e.prototype.trackProgress=function(t){this.stopTrackingProgress(),this.progressInterval=this.setInterval(Be(this,function(){var t=this.bufferedPercent()
this.bufferedPercent_!==t&&this.trigger("progress"),this.bufferedPercent_=t,1===t&&this.stopTrackingProgress()}),500)},e.prototype.onDurationChange=function(t){this.duration_=this.duration()},e.prototype.buffered=function(){return wi(0,0)},e.prototype.bufferedPercent=function(){return Ci(this.buffered(),this.duration_)},e.prototype.stopTrackingProgress=function(){this.clearInterval(this.progressInterval)},e.prototype.manualTimeUpdatesOn=function(){this.manualTimeUpdates=!0,this.on("play",this.trackCurrentTime),this.on("pause",this.stopTrackingCurrentTime)},e.prototype.manualTimeUpdatesOff=function(){this.manualTimeUpdates=!1,this.stopTrackingCurrentTime(),this.off("play",this.trackCurrentTime),this.off("pause",this.stopTrackingCurrentTime)},e.prototype.trackCurrentTime=function(){this.currentTimeInterval&&this.stopTrackingCurrentTime(),this.currentTimeInterval=this.setInterval(function(){this.trigger({type:"timeupdate",target:this,manuallyTriggered:!0})},250)},e.prototype.stopTrackingCurrentTime=function(){this.clearInterval(this.currentTimeInterval),this.trigger({type:"timeupdate",target:this,manuallyTriggered:!0})},e.prototype.dispose=function(){this.clearTracks(pn.names),this.manualProgress&&this.manualProgressOff(),this.manualTimeUpdates&&this.manualTimeUpdatesOff(),t.prototype.dispose.call(this)},e.prototype.clearTracks=function(t){var e=this;(t=[].concat(t)).forEach(function(t){for(var i=e[t+"Tracks"]()||[],n=i.length;n--;){var r=i[n]
"text"===t&&e.removeRemoteTextTrack(r),i.removeTrack(r)}})},e.prototype.cleanupAutoTextTracks=function(){for(var t=this.autoRemoteTextTracks_||[],e=t.length;e--;){var i=t[e]
this.removeRemoteTextTrack(i)}},e.prototype.reset=function(){},e.prototype.error=function(t){return void 0!==t&&(this.error_=new Ui(t),this.trigger("error")),this.error_},e.prototype.played=function(){return this.hasStarted_?wi(0,0):wi()},e.prototype.setCurrentTime=function(){this.manualTimeUpdates&&this.trigger({type:"timeupdate",target:this,manuallyTriggered:!0})},e.prototype.initTrackListeners=function(){var t=this
pn.names.forEach(function(e){var i=pn[e],n=function(){t.trigger(e+"trackchange")},r=t[i.getterName]()
r.addEventListener("removetrack",n),r.addEventListener("addtrack",n),t.on("dispose",function(){r.removeEventListener("removetrack",n),r.removeEventListener("addtrack",n)})})},e.prototype.addWebVttScript_=function(){var t=this
if(!r.a.WebVTT)if(s.a.body.contains(this.el())){if(!this.options_["vtt.js"]&&It(d.a)&&Object.keys(d.a).length>0)return void this.trigger("vttjsloaded")
var e=s.a.createElement("script")
e.src=this.options_["vtt.js"]||"https://vjs.zencdn.net/vttjs/0.14.1/vtt.min.js",e.onload=function(){t.trigger("vttjsloaded")},e.onerror=function(){t.trigger("vttjserror")},this.on("dispose",function(){e.onload=null,e.onerror=null}),r.a.WebVTT=!0,this.el().parentNode.appendChild(e)}else this.ready(this.addWebVttScript_)},e.prototype.emulateTextTracks=function(){var t=this,e=this.textTracks(),i=this.remoteTextTracks(),n=function(t){return e.addTrack(t.track)},r=function(t){return e.removeTrack(t.track)}
i.on("addtrack",n),i.on("removetrack",r),this.addWebVttScript_()
var a=function(){return t.trigger("texttrackchange")},s=function(){a()
for(var t=0;t<e.length;t++){var i=e[t]
i.removeEventListener("cuechange",a),"showing"===i.mode&&i.addEventListener("cuechange",a)}}
s(),e.addEventListener("change",s),e.addEventListener("addtrack",s),e.addEventListener("removetrack",s),this.on("dispose",function(){i.off("addtrack",n),i.off("removetrack",r),e.removeEventListener("change",s),e.removeEventListener("addtrack",s),e.removeEventListener("removetrack",s)
for(var t=0;t<e.length;t++)e[t].removeEventListener("cuechange",a)})},e.prototype.addTextTrack=function(t,e,i){if(!t)throw new Error("TextTrack kind is required but was not provided")
return function(t,e,i,n){var r=arguments.length>4&&void 0!==arguments[4]?arguments[4]:{},a=t.textTracks()
r.kind=e,i&&(r.label=i),n&&(r.language=n),r.tech=t
var s=new mn.text.TrackClass(r)
return a.addTrack(s),s}(this,t,e,i)},e.prototype.createRemoteTextTrack=function(t){var e=ti(t,{tech:this})
return new fn.remoteTextEl.TrackClass(e)},e.prototype.addRemoteTextTrack=function(){var t=this,e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},i=arguments[1],n=this.createRemoteTextTrack(e)
return!0!==i&&!1!==i&&(St.warn('Calling addRemoteTextTrack without explicitly setting the "manualCleanup" parameter to `true` is deprecated and default to `false` in future version of video.js'),i=!0),this.remoteTextTrackEls().addTrackElement_(n),this.remoteTextTracks().addTrack(n.track),!0!==i&&this.ready(function(){return t.autoRemoteTextTracks_.addTrack(n.track)}),n},e.prototype.removeRemoteTextTrack=function(t){var e=this.remoteTextTrackEls().getTrackElementByTrack_(t)
this.remoteTextTrackEls().removeTrackElement_(e),this.remoteTextTracks().removeTrack(t),this.autoRemoteTextTracks_.removeTrack(t)},e.prototype.getVideoPlaybackQuality=function(){return{}},e.prototype.setPoster=function(){},e.prototype.playsinline=function(){},e.prototype.setPlaysinline=function(){},e.prototype.overrideNativeAudioTracks=function(){},e.prototype.overrideNativeVideoTracks=function(){},e.prototype.canPlayType=function(){return""},e.canPlayType=function(){return""},e.canPlaySource=function(t,i){return e.canPlayType(t.type)},e.isTech=function(t){return t.prototype instanceof e||t instanceof e||t===e},e.registerTech=function(t,i){if(e.techs_||(e.techs_={}),!e.isTech(i))throw new Error("Tech "+t+" must be a Tech")
if(!e.canPlayType)throw new Error("Techs must have a static canPlayType method on them")
if(!e.canPlaySource)throw new Error("Techs must have a static canPlaySource method on them")
return t=Ze(t),e.techs_[t]=i,"Tech"!==t&&e.defaultTechOrder_.push(t),i},e.getTech=function(t){if(t)return t=Ze(t),e.techs_&&e.techs_[t]?e.techs_[t]:r.a&&r.a.videojs&&r.a.videojs[t]?(St.warn("The "+t+" tech was added to the videojs object when it should be registered using videojs.registerTech(name, tech)"),r.a.videojs[t]):void 0},e}(ei)
mn.names.forEach(function(t){var e=mn[t]
gn.prototype[e.getterName]=function(){return this[e.privateName]=this[e.privateName]||new e.ListClass,this[e.privateName]}}),gn.prototype.featuresVolumeControl=!0,gn.prototype.featuresMuteControl=!0,gn.prototype.featuresFullscreenResize=!1,gn.prototype.featuresPlaybackRate=!1,gn.prototype.featuresProgressEvents=!1,gn.prototype.featuresSourceset=!1,gn.prototype.featuresTimeupdateEvents=!1,gn.prototype.featuresNativeTextTracks=!1,gn.withSourceHandlers=function(t){t.registerSourceHandler=function(e,i){var n=t.sourceHandlers
n||(n=t.sourceHandlers=[]),void 0===i&&(i=n.length),n.splice(i,0,e)},t.canPlayType=function(e){for(var i=t.sourceHandlers||[],n=void 0,r=0;r<i.length;r++)if(n=i[r].canPlayType(e))return n
return""},t.selectSourceHandler=function(e,i){for(var n=t.sourceHandlers||[],r=0;r<n.length;r++)if(n[r].canHandleSource(e,i))return n[r]
return null},t.canPlaySource=function(e,i){var n=t.selectSourceHandler(e,i)
return n?n.canHandleSource(e,i):""},["seekable","seeking","duration"].forEach(function(t){var e=this[t]
"function"==typeof e&&(this[t]=function(){return this.sourceHandler_&&this.sourceHandler_[t]?this.sourceHandler_[t].apply(this.sourceHandler_,arguments):e.apply(this,arguments)})},t.prototype),t.prototype.setSource=function(e){var i=t.selectSourceHandler(e,this.options_)
i||(t.nativeSourceHandler?i=t.nativeSourceHandler:St.error("No source handler found for the current source.")),this.disposeSourceHandler(),this.off("dispose",this.disposeSourceHandler),i!==t.nativeSourceHandler&&(this.currentSource_=e),this.sourceHandler_=i.handleSource(e,this,this.options_),this.on("dispose",this.disposeSourceHandler)},t.prototype.disposeSourceHandler=function(){this.currentSource_&&(this.clearTracks(["audio","video"]),this.currentSource_=null),this.cleanupAutoTextTracks(),this.sourceHandler_&&(this.sourceHandler_.dispose&&this.sourceHandler_.dispose(),this.sourceHandler_=null)}},ei.registerComponent("Tech",gn),gn.registerTech("Tech",gn),gn.defaultTechOrder_=[]
var yn={},vn={},_n={}
function bn(t,e,i){var n=arguments.length>3&&void 0!==arguments[3]?arguments[3]:null,r="call"+Ze(i),a=t.reduce(wn(r),n),s=a===_n,o=s?null:e[i](a)
return function(t,e,i,n){for(var r=t.length-1;r>=0;r--){var a=t[r]
a[e]&&a[e](n,i)}}(t,i,o,s),o}var Tn={buffered:1,currentTime:1,duration:1,seekable:1,played:1,paused:1},Sn={setCurrentTime:1},kn={play:1,pause:1}
function wn(t){return function(e,i){return e===_n?_n:i[t]?i[t](e):e}}var Cn={opus:"video/ogg",ogv:"video/ogg",mp4:"video/mp4",mov:"video/mp4",m4v:"video/mp4",mkv:"video/x-matroska",mp3:"audio/mpeg",aac:"audio/aac",oga:"audio/ogg",m3u8:"application/x-mpegURL"},En=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",e=en(t)
return Cn[e.toLowerCase()]||""}
function An(t){var e=En(t.src)
return!t.type&&e&&(t.type=e),t}var Ln=function(t){function e(i,n,r){wt(this,e)
var a=ti({createEl:!1},n),s=Et(this,t.call(this,i,a,r))
if(n.playerOptions.sources&&0!==n.playerOptions.sources.length)i.src(n.playerOptions.sources)
else for(var o=0,u=n.playerOptions.techOrder;o<u.length;o++){var l=Ze(u[o]),c=gn.getTech(l)
if(l||(c=ei.getComponent(l)),c&&c.isSupported()){i.loadTech_(l)
break}}return s}return Ct(e,t),e}(ei)
ei.registerComponent("MediaLoader",Ln)
var On=function(t){function e(i,n){wt(this,e)
var r=Et(this,t.call(this,i,n))
return r.emitTapEvents(),r.enable(),r}return Ct(e,t),e.prototype.createEl=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"div",i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{}
i=xt({innerHTML:'<span aria-hidden="true" class="vjs-icon-placeholder"></span>',className:this.buildCSSClass(),tabIndex:0},i),"button"===e&&St.error("Creating a ClickableComponent with an HTML element of "+e+" is not supported; use a Button instead."),n=xt({role:"button"},n),this.tabIndex_=i.tabIndex
var r=t.prototype.createEl.call(this,e,i,n)
return this.createControlTextEl(r),r},e.prototype.dispose=function(){this.controlTextEl_=null,t.prototype.dispose.call(this)},e.prototype.createControlTextEl=function(t){return this.controlTextEl_=Ht("span",{className:"vjs-control-text"},{"aria-live":"polite"}),t&&t.appendChild(this.controlTextEl_),this.controlText(this.controlText_,t),this.controlTextEl_},e.prototype.controlText=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:this.el()
if(void 0===t)return this.controlText_||"Need Text"
var i=this.localize(t)
this.controlText_=t,qt(this.controlTextEl_,i),this.nonIconControl||e.setAttribute("title",i)},e.prototype.buildCSSClass=function(){return"vjs-control vjs-button "+t.prototype.buildCSSClass.call(this)},e.prototype.enable=function(){this.enabled_||(this.enabled_=!0,this.removeClass("vjs-disabled"),this.el_.setAttribute("aria-disabled","false"),void 0!==this.tabIndex_&&this.el_.setAttribute("tabIndex",this.tabIndex_),this.on(["tap","click"],this.handleClick),this.on("focus",this.handleFocus),this.on("blur",this.handleBlur))},e.prototype.disable=function(){this.enabled_=!1,this.addClass("vjs-disabled"),this.el_.setAttribute("aria-disabled","true"),void 0!==this.tabIndex_&&this.el_.removeAttribute("tabIndex"),this.off(["tap","click"],this.handleClick),this.off("focus",this.handleFocus),this.off("blur",this.handleBlur)},e.prototype.handleClick=function(t){},e.prototype.handleFocus=function(t){Ee(s.a,"keydown",Be(this,this.handleKeyPress))},e.prototype.handleKeyPress=function(e){32===e.which||13===e.which?(e.preventDefault(),this.trigger("click")):t.prototype.handleKeyPress&&t.prototype.handleKeyPress.call(this,e)},e.prototype.handleBlur=function(t){Ae(s.a,"keydown",Be(this,this.handleKeyPress))},e}(ei)
ei.registerComponent("ClickableComponent",On)
var Pn=function(t){function e(i,n){wt(this,e)
var r=Et(this,t.call(this,i,n))
return r.update(),i.on("posterchange",Be(r,r.update)),r}return Ct(e,t),e.prototype.dispose=function(){this.player().off("posterchange",this.update),t.prototype.dispose.call(this)},e.prototype.createEl=function(){return Ht("div",{className:"vjs-poster",tabIndex:-1})},e.prototype.update=function(t){var e=this.player().poster()
this.setSrc(e),e?this.show():this.hide()},e.prototype.setSrc=function(t){var e=""
t&&(e='url("'+t+'")'),this.el_.style.backgroundImage=e},e.prototype.handleClick=function(t){this.player_.controls()&&(this.player_.paused()?Ri(this.player_.play()):this.player_.pause())},e}(On)
ei.registerComponent("PosterImage",Pn)
var xn={monospace:"monospace",sansSerif:"sans-serif",serif:"serif",monospaceSansSerif:'"Andale Mono", "Lucida Console", monospace',monospaceSerif:'"Courier New", monospace',proportionalSansSerif:"sans-serif",proportionalSerif:"serif",casual:'"Comic Sans MS", Impact, fantasy',script:'"Monotype Corsiva", cursive',smallcaps:'"Andale Mono", "Lucida Console", monospace, sans-serif'}
function Un(t,e){var i=void 0
if(4===t.length)i=t[1]+t[1]+t[2]+t[2]+t[3]+t[3]
else{if(7!==t.length)throw new Error("Invalid color code provided, "+t+"; must be formatted as e.g. #f0e or #f604e2.")
i=t.slice(1)}return"rgba("+parseInt(i.slice(0,2),16)+","+parseInt(i.slice(2,4),16)+","+parseInt(i.slice(4,6),16)+","+e+")"}function In(t,e,i){try{t.style[e]=i}catch(t){return}}var Dn=function(t){function e(i,n,r){wt(this,e)
var a=Et(this,t.call(this,i,n,r))
return i.on("loadstart",Be(a,a.toggleDisplay)),i.on("texttrackchange",Be(a,a.updateDisplay)),i.on("loadstart",Be(a,a.preselectTrack)),i.ready(Be(a,function(){if(i.tech_&&i.tech_.featuresNativeTextTracks)this.hide()
else{i.on("fullscreenchange",Be(this,this.updateDisplay))
for(var t=this.options_.playerOptions.tracks||[],e=0;e<t.length;e++)this.player_.addRemoteTextTrack(t[e],!0)
this.preselectTrack()}})),a}return Ct(e,t),e.prototype.preselectTrack=function(){for(var t={captions:1,subtitles:1},e=this.player_.textTracks(),i=this.player_.cache_.selectedLanguage,n=void 0,r=void 0,a=void 0,s=0;s<e.length;s++){var o=e[s]
i&&i.enabled&&i.language===o.language?o.kind===i.kind?a=o:a||(a=o):i&&!i.enabled?(a=null,n=null,r=null):o.default&&("descriptions"!==o.kind||n?o.kind in t&&!r&&(r=o):n=o)}a?a.mode="showing":r?r.mode="showing":n&&(n.mode="showing")},e.prototype.toggleDisplay=function(){this.player_.tech_&&this.player_.tech_.featuresNativeTextTracks?this.hide():this.show()},e.prototype.createEl=function(){return t.prototype.createEl.call(this,"div",{className:"vjs-text-track-display"},{"aria-live":"off","aria-atomic":"true"})},e.prototype.clearDisplay=function(){"function"==typeof r.a.WebVTT&&r.a.WebVTT.processCues(r.a,[],this.el_)},e.prototype.updateDisplay=function(){var t=this.player_.textTracks()
this.clearDisplay()
for(var e=null,i=null,n=t.length;n--;){var r=t[n]
"showing"===r.mode&&("descriptions"===r.kind?e=r:i=r)}i?("off"!==this.getAttribute("aria-live")&&this.setAttribute("aria-live","off"),this.updateForTrack(i)):e&&("assertive"!==this.getAttribute("aria-live")&&this.setAttribute("aria-live","assertive"),this.updateForTrack(e))},e.prototype.updateForTrack=function(t){if("function"==typeof r.a.WebVTT&&t.activeCues){for(var e=[],i=0;i<t.activeCues.length;i++)e.push(t.activeCues[i])
if(r.a.WebVTT.processCues(r.a,e,this.el_),this.player_.textTrackSettings)for(var n=this.player_.textTrackSettings.getValues(),a=e.length;a--;){var s=e[a]
if(s){var o=s.displayState
if(n.color&&(o.firstChild.style.color=n.color),n.textOpacity&&In(o.firstChild,"color",Un(n.color||"#fff",n.textOpacity)),n.backgroundColor&&(o.firstChild.style.backgroundColor=n.backgroundColor),n.backgroundOpacity&&In(o.firstChild,"backgroundColor",Un(n.backgroundColor||"#000",n.backgroundOpacity)),n.windowColor&&(n.windowOpacity?In(o,"backgroundColor",Un(n.windowColor,n.windowOpacity)):o.style.backgroundColor=n.windowColor),n.edgeStyle&&("dropshadow"===n.edgeStyle?o.firstChild.style.textShadow="2px 2px 3px #222, 2px 2px 4px #222, 2px 2px 5px #222":"raised"===n.edgeStyle?o.firstChild.style.textShadow="1px 1px #222, 2px 2px #222, 3px 3px #222":"depressed"===n.edgeStyle?o.firstChild.style.textShadow="1px 1px #ccc, 0 1px #ccc, -1px -1px #222, 0 -1px #222":"uniform"===n.edgeStyle&&(o.firstChild.style.textShadow="0 0 4px #222, 0 0 4px #222, 0 0 4px #222, 0 0 4px #222")),n.fontPercent&&1!==n.fontPercent){var u=r.a.parseFloat(o.style.fontSize)
o.style.fontSize=u*n.fontPercent+"px",o.style.height="auto",o.style.top="auto",o.style.bottom="2px"}n.fontFamily&&"default"!==n.fontFamily&&("small-caps"===n.fontFamily?o.firstChild.style.fontVariant="small-caps":o.firstChild.style.fontFamily=xn[n.fontFamily])}}}},e}(ei)
ei.registerComponent("TextTrackDisplay",Dn)
var Rn=function(t){function e(){return wt(this,e),Et(this,t.apply(this,arguments))}return Ct(e,t),e.prototype.createEl=function(){var e=this.player_.isAudio(),i=this.localize(e?"Audio Player":"Video Player"),n=Ht("span",{className:"vjs-control-text",innerHTML:this.localize("{1} is loading.",[i])}),r=t.prototype.createEl.call(this,"div",{className:"vjs-loading-spinner",dir:"ltr"})
return r.appendChild(n),r},e}(ei)
ei.registerComponent("LoadingSpinner",Rn)
var Mn=function(t){function e(){return wt(this,e),Et(this,t.apply(this,arguments))}return Ct(e,t),e.prototype.createEl=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{}
e=xt({innerHTML:'<span aria-hidden="true" class="vjs-icon-placeholder"></span>',className:this.buildCSSClass()},e),i=xt({type:"button"},i)
var n=ei.prototype.createEl.call(this,"button",e,i)
return this.createControlTextEl(n),n},e.prototype.addChild=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},i=this.constructor.name
return St.warn("Adding an actionable (user controllable) child to a Button ("+i+") is not supported; use a ClickableComponent instead."),ei.prototype.addChild.call(this,t,e)},e.prototype.enable=function(){t.prototype.enable.call(this),this.el_.removeAttribute("disabled")},e.prototype.disable=function(){t.prototype.disable.call(this),this.el_.setAttribute("disabled","disabled")},e.prototype.handleKeyPress=function(e){32!==e.which&&13!==e.which&&t.prototype.handleKeyPress.call(this,e)},e}(On)
ei.registerComponent("Button",Mn)
var Bn=function(t){function e(i,n){wt(this,e)
var r=Et(this,t.call(this,i,n))
return r.mouseused_=!1,r.on("mousedown",r.handleMouseDown),r}return Ct(e,t),e.prototype.buildCSSClass=function(){return"vjs-big-play-button"},e.prototype.handleClick=function(t){var e=this.player_.play()
if(this.mouseused_&&t.clientX&&t.clientY)Ri(e)
else{var i=this.player_.getChild("controlBar"),n=i&&i.getChild("playToggle")
if(n){var r=function(){return n.focus()}
Di(e)?e.then(r,function(){}):this.setTimeout(r,1)}else this.player_.focus()}},e.prototype.handleKeyPress=function(e){this.mouseused_=!1,t.prototype.handleKeyPress.call(this,e)},e.prototype.handleMouseDown=function(t){this.mouseused_=!0},e}(Mn)
Bn.prototype.controlText_="Play Video",ei.registerComponent("BigPlayButton",Bn)
var Nn=function(t){function e(i,n){wt(this,e)
var r=Et(this,t.call(this,i,n))
return r.controlText(n&&n.controlText||r.localize("Close")),r}return Ct(e,t),e.prototype.buildCSSClass=function(){return"vjs-close-button "+t.prototype.buildCSSClass.call(this)},e.prototype.handleClick=function(t){this.trigger({type:"close",bubbles:!1})},e}(Mn)
ei.registerComponent("CloseButton",Nn)
var jn=function(t){function e(i,n){wt(this,e)
var r=Et(this,t.call(this,i,n))
return r.on(i,"play",r.handlePlay),r.on(i,"pause",r.handlePause),r.on(i,"ended",r.handleEnded),r}return Ct(e,t),e.prototype.buildCSSClass=function(){return"vjs-play-control "+t.prototype.buildCSSClass.call(this)},e.prototype.handleClick=function(t){this.player_.paused()?this.player_.play():this.player_.pause()},e.prototype.handleSeeked=function(t){this.removeClass("vjs-ended"),this.player_.paused()?this.handlePause(t):this.handlePlay(t)},e.prototype.handlePlay=function(t){this.removeClass("vjs-ended"),this.removeClass("vjs-paused"),this.addClass("vjs-playing"),this.controlText("Pause")},e.prototype.handlePause=function(t){this.removeClass("vjs-playing"),this.addClass("vjs-paused"),this.controlText("Play")},e.prototype.handleEnded=function(t){this.removeClass("vjs-playing"),this.addClass("vjs-ended"),this.controlText("Replay"),this.one(this.player_,"seeked",this.handleSeeked)},e}(Mn)
jn.prototype.controlText_="Play",ei.registerComponent("PlayToggle",jn)
var Fn=function(t,e){t=t<0?0:t
var i=Math.floor(t%60),n=Math.floor(t/60%60),r=Math.floor(t/3600),a=Math.floor(e/60%60),s=Math.floor(e/3600)
return(isNaN(t)||t===1/0)&&(r=n=i="-"),(r=r>0||s>0?r+":":"")+(n=((r||a>=10)&&n<10?"0"+n:n)+":")+(i<10?"0"+i:i)},Vn=Fn
function Hn(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:t
return Vn(t,e)}var qn=function(t){function e(i,n){wt(this,e)
var r=Et(this,t.call(this,i,n))
return r.throttledUpdateContent=Ne(Be(r,r.updateContent),25),r.on(i,"timeupdate",r.throttledUpdateContent),r}return Ct(e,t),e.prototype.createEl=function(e){var i=this.buildCSSClass(),n=t.prototype.createEl.call(this,"div",{className:i+" vjs-time-control vjs-control",innerHTML:'<span class="vjs-control-text">'+this.localize(this.labelText_)+" </span>"})
return this.contentEl_=Ht("span",{className:i+"-display"},{"aria-live":"off"}),this.updateTextNode_(),n.appendChild(this.contentEl_),n},e.prototype.dispose=function(){this.contentEl_=null,this.textNode_=null,t.prototype.dispose.call(this)},e.prototype.updateTextNode_=function(){if(this.contentEl_){for(;this.contentEl_.firstChild;)this.contentEl_.removeChild(this.contentEl_.firstChild)
this.textNode_=s.a.createTextNode(this.formattedTime_||this.formatTime_(0)),this.contentEl_.appendChild(this.textNode_)}},e.prototype.formatTime_=function(t){return Hn(t)},e.prototype.updateFormattedTime_=function(t){var e=this.formatTime_(t)
e!==this.formattedTime_&&(this.formattedTime_=e,this.requestAnimationFrame(this.updateTextNode_))},e.prototype.updateContent=function(t){},e}(ei)
qn.prototype.labelText_="Time",qn.prototype.controlText_="Time",ei.registerComponent("TimeDisplay",qn)
var zn=function(t){function e(i,n){wt(this,e)
var r=Et(this,t.call(this,i,n))
return r.on(i,"ended",r.handleEnded),r}return Ct(e,t),e.prototype.buildCSSClass=function(){return"vjs-current-time"},e.prototype.updateContent=function(t){var e=this.player_.scrubbing()?this.player_.getCache().currentTime:this.player_.currentTime()
this.updateFormattedTime_(e)},e.prototype.handleEnded=function(t){this.player_.duration()&&this.updateFormattedTime_(this.player_.duration())},e}(qn)
zn.prototype.labelText_="Current Time",zn.prototype.controlText_="Current Time",ei.registerComponent("CurrentTimeDisplay",zn)
var Wn=function(t){function e(i,n){wt(this,e)
var r=Et(this,t.call(this,i,n))
return r.on(i,"durationchange",r.updateContent),r.on(i,"loadedmetadata",r.throttledUpdateContent),r}return Ct(e,t),e.prototype.buildCSSClass=function(){return"vjs-duration"},e.prototype.updateContent=function(t){var e=this.player_.duration()
e&&this.duration_!==e&&(this.duration_=e,this.updateFormattedTime_(e))},e}(qn)
Wn.prototype.labelText_="Duration",Wn.prototype.controlText_="Duration",ei.registerComponent("DurationDisplay",Wn)
var Gn=function(t){function e(){return wt(this,e),Et(this,t.apply(this,arguments))}return Ct(e,t),e.prototype.createEl=function(){return t.prototype.createEl.call(this,"div",{className:"vjs-time-control vjs-time-divider",innerHTML:"<div><span>/</span></div>"})},e}(ei)
ei.registerComponent("TimeDivider",Gn)
var Xn=function(t){function e(i,n){wt(this,e)
var r=Et(this,t.call(this,i,n))
return r.on(i,"durationchange",r.throttledUpdateContent),r.on(i,"ended",r.handleEnded),r}return Ct(e,t),e.prototype.buildCSSClass=function(){return"vjs-remaining-time"},e.prototype.formatTime_=function(e){return"-"+t.prototype.formatTime_.call(this,e)},e.prototype.updateContent=function(t){this.player_.duration()&&(this.player_.remainingTimeDisplay?this.updateFormattedTime_(this.player_.remainingTimeDisplay()):this.updateFormattedTime_(this.player_.remainingTime()))},e.prototype.handleEnded=function(t){this.player_.duration()&&this.updateFormattedTime_(0)},e}(qn)
Xn.prototype.labelText_="Remaining Time",Xn.prototype.controlText_="Remaining Time",ei.registerComponent("RemainingTimeDisplay",Xn)
var Yn=function(t){function e(i,n){wt(this,e)
var r=Et(this,t.call(this,i,n))
return r.updateShowing(),r.on(r.player(),"durationchange",r.updateShowing),r}return Ct(e,t),e.prototype.createEl=function(){var e=t.prototype.createEl.call(this,"div",{className:"vjs-live-control vjs-control"})
return this.contentEl_=Ht("div",{className:"vjs-live-display",innerHTML:'<span class="vjs-control-text">'+this.localize("Stream Type")+" </span>"+this.localize("LIVE")},{"aria-live":"off"}),e.appendChild(this.contentEl_),e},e.prototype.dispose=function(){this.contentEl_=null,t.prototype.dispose.call(this)},e.prototype.updateShowing=function(t){this.player().duration()===1/0?this.show():this.hide()},e}(ei)
ei.registerComponent("LiveDisplay",Yn)
var $n=function(t){function e(i,n){wt(this,e)
var r=Et(this,t.call(this,i,n))
return r.bar=r.getChild(r.options_.barName),r.vertical(!!r.options_.vertical),r.enable(),r}return Ct(e,t),e.prototype.enabled=function(){return this.enabled_},e.prototype.enable=function(){this.enabled()||(this.on("mousedown",this.handleMouseDown),this.on("touchstart",this.handleMouseDown),this.on("focus",this.handleFocus),this.on("blur",this.handleBlur),this.on("click",this.handleClick),this.on(this.player_,"controlsvisible",this.update),this.playerEvent&&this.on(this.player_,this.playerEvent,this.update),this.removeClass("disabled"),this.setAttribute("tabindex",0),this.enabled_=!0)},e.prototype.disable=function(){if(this.enabled()){var t=this.bar.el_.ownerDocument
this.off("mousedown",this.handleMouseDown),this.off("touchstart",this.handleMouseDown),this.off("focus",this.handleFocus),this.off("blur",this.handleBlur),this.off("click",this.handleClick),this.off(this.player_,"controlsvisible",this.update),this.off(t,"mousemove",this.handleMouseMove),this.off(t,"mouseup",this.handleMouseUp),this.off(t,"touchmove",this.handleMouseMove),this.off(t,"touchend",this.handleMouseUp),this.removeAttribute("tabindex"),this.addClass("disabled"),this.playerEvent&&this.off(this.player_,this.playerEvent,this.update),this.enabled_=!1}},e.prototype.createEl=function(e){var i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{}
return i.className=i.className+" vjs-slider",i=xt({tabIndex:0},i),n=xt({role:"slider","aria-valuenow":0,"aria-valuemin":0,"aria-valuemax":100,tabIndex:0},n),t.prototype.createEl.call(this,e,i,n)},e.prototype.handleMouseDown=function(t){var e=this.bar.el_.ownerDocument
"mousedown"===t.type&&t.preventDefault(),"touchstart"!==t.type||mi||t.preventDefault(),te(),this.addClass("vjs-sliding"),this.trigger("slideractive"),this.on(e,"mousemove",this.handleMouseMove),this.on(e,"mouseup",this.handleMouseUp),this.on(e,"touchmove",this.handleMouseMove),this.on(e,"touchend",this.handleMouseUp),this.handleMouseMove(t)},e.prototype.handleMouseMove=function(t){},e.prototype.handleMouseUp=function(){var t=this.bar.el_.ownerDocument
ee(),this.removeClass("vjs-sliding"),this.trigger("sliderinactive"),this.off(t,"mousemove",this.handleMouseMove),this.off(t,"mouseup",this.handleMouseUp),this.off(t,"touchmove",this.handleMouseMove),this.off(t,"touchend",this.handleMouseUp),this.update()},e.prototype.update=function(){if(this.el_){var t=this.getPercent(),e=this.bar
if(e){("number"!=typeof t||t!=t||t<0||t===1/0)&&(t=0)
var i=(100*t).toFixed(2)+"%",n=e.el().style
return this.vertical()?n.height=i:n.width=i,t}}},e.prototype.calculateDistance=function(t){var e=re(this.el_,t)
return this.vertical()?e.y:e.x},e.prototype.handleFocus=function(){this.on(this.bar.el_.ownerDocument,"keydown",this.handleKeyPress)},e.prototype.handleKeyPress=function(t){37===t.which||40===t.which?(t.preventDefault(),this.stepBack()):38!==t.which&&39!==t.which||(t.preventDefault(),this.stepForward())},e.prototype.handleBlur=function(){this.off(this.bar.el_.ownerDocument,"keydown",this.handleKeyPress)},e.prototype.handleClick=function(t){t.stopImmediatePropagation(),t.preventDefault()},e.prototype.vertical=function(t){if(void 0===t)return this.vertical_||!1
this.vertical_=!!t,this.vertical_?this.addClass("vjs-slider-vertical"):this.addClass("vjs-slider-horizontal")},e}(ei)
ei.registerComponent("Slider",$n)
var Kn=function(t){function e(i,n){wt(this,e)
var r=Et(this,t.call(this,i,n))
return r.partEls_=[],r.on(i,"progress",r.update),r}return Ct(e,t),e.prototype.createEl=function(){return t.prototype.createEl.call(this,"div",{className:"vjs-load-progress",innerHTML:'<span class="vjs-control-text"><span>'+this.localize("Loaded")+"</span>: 0%</span>"})},e.prototype.dispose=function(){this.partEls_=null,t.prototype.dispose.call(this)},e.prototype.update=function(t){var e=this.player_.buffered(),i=this.player_.duration(),n=this.player_.bufferedEnd(),r=this.partEls_,a=function(t,e){var i=t/e||0
return 100*(i>=1?1:i)+"%"}
this.el_.style.width=a(n,i)
for(var s=0;s<e.length;s++){var o=e.start(s),u=e.end(s),l=r[s]
l||(l=this.el_.appendChild(Ht()),r[s]=l),l.style.left=a(o,n),l.style.width=a(u-o,n)}for(var c=r.length;c>e.length;c--)this.el_.removeChild(r[c-1])
r.length=e.length},e}(ei)
ei.registerComponent("LoadProgressBar",Kn)
var Jn=function(t){function e(){return wt(this,e),Et(this,t.apply(this,arguments))}return Ct(e,t),e.prototype.createEl=function(){return t.prototype.createEl.call(this,"div",{className:"vjs-time-tooltip"})},e.prototype.update=function(t,e,i){var n=ie(this.el_),r=ie(this.player_.el()),a=t.width*e
if(r&&n){var s=t.left-r.left+a,o=t.width-a+(r.right-t.right),u=n.width/2
s<u?u+=u-s:o<u&&(u=o),u<0?u=0:u>n.width&&(u=n.width),this.el_.style.right="-"+u+"px",qt(this.el_,i)}},e}(ei)
ei.registerComponent("TimeTooltip",Jn)
var Qn=function(t){function e(){return wt(this,e),Et(this,t.apply(this,arguments))}return Ct(e,t),e.prototype.createEl=function(){return t.prototype.createEl.call(this,"div",{className:"vjs-play-progress vjs-slider-bar",innerHTML:'<span class="vjs-control-text"><span>'+this.localize("Progress")+"</span>: 0%</span>"})},e.prototype.update=function(t,e){var i=this
this.rafId_&&this.cancelAnimationFrame(this.rafId_),this.rafId_=this.requestAnimationFrame(function(){var n=Hn(i.player_.scrubbing()?i.player_.getCache().currentTime:i.player_.currentTime(),i.player_.duration()),r=i.getChild("timeTooltip")
r&&r.update(t,e,n)})},e}(ei)
Qn.prototype.options_={children:[]},ui||ci||Qn.prototype.options_.children.push("timeTooltip"),ei.registerComponent("PlayProgressBar",Qn)
var Zn=function(t){function e(i,n){wt(this,e)
var r=Et(this,t.call(this,i,n))
return r.update=Ne(Be(r,r.update),25),r}return Ct(e,t),e.prototype.createEl=function(){return t.prototype.createEl.call(this,"div",{className:"vjs-mouse-display"})},e.prototype.update=function(t,e){var i=this
this.rafId_&&this.cancelAnimationFrame(this.rafId_),this.rafId_=this.requestAnimationFrame(function(){var n=i.player_.duration(),r=Hn(e*n,n)
i.el_.style.left=t.width*e+"px",i.getChild("timeTooltip").update(t,e,r)})},e}(ei)
Zn.prototype.options_={children:["timeTooltip"]},ei.registerComponent("MouseTimeDisplay",Zn)
var tr=function(t){function e(i,n){wt(this,e)
var r=Et(this,t.call(this,i,n))
return r.setEventHandlers_(),r}return Ct(e,t),e.prototype.setEventHandlers_=function(){var t=this
this.update=Ne(Be(this,this.update),30),this.on(this.player_,"timeupdate",this.update),this.on(this.player_,"ended",this.handleEnded),this.updateInterval=null,this.on(this.player_,["playing"],function(){t.clearInterval(t.updateInterval),t.updateInterval=t.setInterval(function(){t.requestAnimationFrame(function(){t.update()})},30)}),this.on(this.player_,["ended","pause","waiting"],function(){t.clearInterval(t.updateInterval)}),this.on(this.player_,["timeupdate","ended"],this.update)},e.prototype.createEl=function(){return t.prototype.createEl.call(this,"div",{className:"vjs-progress-holder"},{"aria-label":this.localize("Progress Bar")})},e.prototype.update_=function(t,e){var i=this.player_.duration()
this.el_.setAttribute("aria-valuenow",(100*e).toFixed(2)),this.el_.setAttribute("aria-valuetext",this.localize("progress bar timing: currentTime={1} duration={2}",[Hn(t,i),Hn(i,i)],"{1} of {2}")),this.bar.update(ie(this.el_),e)},e.prototype.update=function(e){var i=t.prototype.update.call(this)
return this.update_(this.getCurrentTime_(),i),i},e.prototype.getCurrentTime_=function(){return this.player_.scrubbing()?this.player_.getCache().currentTime:this.player_.currentTime()},e.prototype.handleEnded=function(t){this.update_(this.player_.duration(),1)},e.prototype.getPercent=function(){var t=this.getCurrentTime_()/this.player_.duration()
return t>=1?1:t||0},e.prototype.handleMouseDown=function(e){ce(e)&&(e.stopPropagation(),this.player_.scrubbing(!0),this.videoWasPlaying=!this.player_.paused(),this.player_.pause(),t.prototype.handleMouseDown.call(this,e))},e.prototype.handleMouseMove=function(t){if(ce(t)){var e=this.calculateDistance(t)*this.player_.duration()
e===this.player_.duration()&&(e-=.1),this.player_.currentTime(e)}},e.prototype.enable=function(){t.prototype.enable.call(this)
var e=this.getChild("mouseTimeDisplay")
e&&e.show()},e.prototype.disable=function(){t.prototype.disable.call(this)
var e=this.getChild("mouseTimeDisplay")
e&&e.hide()},e.prototype.handleMouseUp=function(e){t.prototype.handleMouseUp.call(this,e),e&&e.stopPropagation(),this.player_.scrubbing(!1),this.player_.trigger({type:"timeupdate",target:this,manuallyTriggered:!0}),this.videoWasPlaying&&Ri(this.player_.play())},e.prototype.stepForward=function(){this.player_.currentTime(this.player_.currentTime()+5)},e.prototype.stepBack=function(){this.player_.currentTime(this.player_.currentTime()-5)},e.prototype.handleAction=function(t){this.player_.paused()?this.player_.play():this.player_.pause()},e.prototype.handleKeyPress=function(e){32===e.which||13===e.which?(e.preventDefault(),this.handleAction(e)):t.prototype.handleKeyPress&&t.prototype.handleKeyPress.call(this,e)},e}($n)
tr.prototype.options_={children:["loadProgressBar","playProgressBar"],barName:"playProgressBar"},ui||ci||tr.prototype.options_.children.splice(1,0,"mouseTimeDisplay"),tr.prototype.playerEvent="timeupdate",ei.registerComponent("SeekBar",tr)
var er=function(t){function e(i,n){wt(this,e)
var r=Et(this,t.call(this,i,n))
return r.handleMouseMove=Ne(Be(r,r.handleMouseMove),25),r.throttledHandleMouseSeek=Ne(Be(r,r.handleMouseSeek),25),r.enable(),r}return Ct(e,t),e.prototype.createEl=function(){return t.prototype.createEl.call(this,"div",{className:"vjs-progress-control vjs-control"})},e.prototype.handleMouseMove=function(t){var e=this.getChild("seekBar")
if(e){var i=e.getChild("mouseTimeDisplay"),n=e.el(),r=ie(n),a=re(n,t).x
a>1?a=1:a<0&&(a=0),i&&i.update(r,a)}},e.prototype.handleMouseSeek=function(t){var e=this.getChild("seekBar")
e&&e.handleMouseMove(t)},e.prototype.enabled=function(){return this.enabled_},e.prototype.disable=function(){this.children().forEach(function(t){return t.disable&&t.disable()}),this.enabled()&&(this.off(["mousedown","touchstart"],this.handleMouseDown),this.off(this.el_,"mousemove",this.handleMouseMove),this.handleMouseUp(),this.addClass("disabled"),this.enabled_=!1)},e.prototype.enable=function(){this.children().forEach(function(t){return t.enable&&t.enable()}),this.enabled()||(this.on(["mousedown","touchstart"],this.handleMouseDown),this.on(this.el_,"mousemove",this.handleMouseMove),this.removeClass("disabled"),this.enabled_=!0)},e.prototype.handleMouseDown=function(t){var e=this.el_.ownerDocument,i=this.getChild("seekBar")
i&&i.handleMouseDown(t),this.on(e,"mousemove",this.throttledHandleMouseSeek),this.on(e,"touchmove",this.throttledHandleMouseSeek),this.on(e,"mouseup",this.handleMouseUp),this.on(e,"touchend",this.handleMouseUp)},e.prototype.handleMouseUp=function(t){var e=this.el_.ownerDocument,i=this.getChild("seekBar")
i&&i.handleMouseUp(t),this.off(e,"mousemove",this.throttledHandleMouseSeek),this.off(e,"touchmove",this.throttledHandleMouseSeek),this.off(e,"mouseup",this.handleMouseUp),this.off(e,"touchend",this.handleMouseUp)},e}(ei)
er.prototype.options_={children:["seekBar"]},ei.registerComponent("ProgressControl",er)
var ir=function(t){function e(i,n){wt(this,e)
var r=Et(this,t.call(this,i,n))
return r.on(i,"fullscreenchange",r.handleFullscreenChange),!1===s.a[Ei.fullscreenEnabled]&&r.disable(),r}return Ct(e,t),e.prototype.buildCSSClass=function(){return"vjs-fullscreen-control "+t.prototype.buildCSSClass.call(this)},e.prototype.handleFullscreenChange=function(t){this.player_.isFullscreen()?this.controlText("Non-Fullscreen"):this.controlText("Fullscreen")},e.prototype.handleClick=function(t){this.player_.isFullscreen()?this.player_.exitFullscreen():this.player_.requestFullscreen()},e}(Mn)
ir.prototype.controlText_="Fullscreen",ei.registerComponent("FullscreenToggle",ir)
var nr=function(t,e){e.tech_&&!e.tech_.featuresVolumeControl&&t.addClass("vjs-hidden"),t.on(e,"loadstart",function(){e.tech_.featuresVolumeControl?t.removeClass("vjs-hidden"):t.addClass("vjs-hidden")})},rr=function(t){function e(){return wt(this,e),Et(this,t.apply(this,arguments))}return Ct(e,t),e.prototype.createEl=function(){return t.prototype.createEl.call(this,"div",{className:"vjs-volume-level",innerHTML:'<span class="vjs-control-text"></span>'})},e}(ei)
ei.registerComponent("VolumeLevel",rr)
var ar=function(t){function e(i,n){wt(this,e)
var r=Et(this,t.call(this,i,n))
return r.on("slideractive",r.updateLastVolume_),r.on(i,"volumechange",r.updateARIAAttributes),i.ready(function(){return r.updateARIAAttributes()}),r}return Ct(e,t),e.prototype.createEl=function(){return t.prototype.createEl.call(this,"div",{className:"vjs-volume-bar vjs-slider-bar"},{"aria-label":this.localize("Volume Level"),"aria-live":"polite"})},e.prototype.handleMouseDown=function(e){ce(e)&&t.prototype.handleMouseDown.call(this,e)},e.prototype.handleMouseMove=function(t){ce(t)&&(this.checkMuted(),this.player_.volume(this.calculateDistance(t)))},e.prototype.checkMuted=function(){this.player_.muted()&&this.player_.muted(!1)},e.prototype.getPercent=function(){return this.player_.muted()?0:this.player_.volume()},e.prototype.stepForward=function(){this.checkMuted(),this.player_.volume(this.player_.volume()+.1)},e.prototype.stepBack=function(){this.checkMuted(),this.player_.volume(this.player_.volume()-.1)},e.prototype.updateARIAAttributes=function(t){var e=this.player_.muted()?0:this.volumeAsPercentage_()
this.el_.setAttribute("aria-valuenow",e),this.el_.setAttribute("aria-valuetext",e+"%")},e.prototype.volumeAsPercentage_=function(){return Math.round(100*this.player_.volume())},e.prototype.updateLastVolume_=function(){var t=this,e=this.player_.volume()
this.one("sliderinactive",function(){0===t.player_.volume()&&t.player_.lastVolume_(e)})},e}($n)
ar.prototype.options_={children:["volumeLevel"],barName:"volumeLevel"},ar.prototype.playerEvent="volumechange",ei.registerComponent("VolumeBar",ar)
var sr=function(t){function e(i){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{}
wt(this,e),n.vertical=n.vertical||!1,(void 0===n.volumeBar||It(n.volumeBar))&&(n.volumeBar=n.volumeBar||{},n.volumeBar.vertical=n.vertical)
var r=Et(this,t.call(this,i,n))
return nr(r,i),r.throttledHandleMouseMove=Ne(Be(r,r.handleMouseMove),25),r.on("mousedown",r.handleMouseDown),r.on("touchstart",r.handleMouseDown),r.on(r.volumeBar,["focus","slideractive"],function(){r.volumeBar.addClass("vjs-slider-active"),r.addClass("vjs-slider-active"),r.trigger("slideractive")}),r.on(r.volumeBar,["blur","sliderinactive"],function(){r.volumeBar.removeClass("vjs-slider-active"),r.removeClass("vjs-slider-active"),r.trigger("sliderinactive")}),r}return Ct(e,t),e.prototype.createEl=function(){var e="vjs-volume-horizontal"
return this.options_.vertical&&(e="vjs-volume-vertical"),t.prototype.createEl.call(this,"div",{className:"vjs-volume-control vjs-control "+e})},e.prototype.handleMouseDown=function(t){var e=this.el_.ownerDocument
this.on(e,"mousemove",this.throttledHandleMouseMove),this.on(e,"touchmove",this.throttledHandleMouseMove),this.on(e,"mouseup",this.handleMouseUp),this.on(e,"touchend",this.handleMouseUp)},e.prototype.handleMouseUp=function(t){var e=this.el_.ownerDocument
this.off(e,"mousemove",this.throttledHandleMouseMove),this.off(e,"touchmove",this.throttledHandleMouseMove),this.off(e,"mouseup",this.handleMouseUp),this.off(e,"touchend",this.handleMouseUp)},e.prototype.handleMouseMove=function(t){this.volumeBar.handleMouseMove(t)},e}(ei)
sr.prototype.options_={children:["volumeBar"]},ei.registerComponent("VolumeControl",sr)
var or=function(t,e){e.tech_&&!e.tech_.featuresMuteControl&&t.addClass("vjs-hidden"),t.on(e,"loadstart",function(){e.tech_.featuresMuteControl?t.removeClass("vjs-hidden"):t.addClass("vjs-hidden")})},ur=function(t){function e(i,n){wt(this,e)
var r=Et(this,t.call(this,i,n))
return or(r,i),r.on(i,["loadstart","volumechange"],r.update),r}return Ct(e,t),e.prototype.buildCSSClass=function(){return"vjs-mute-control "+t.prototype.buildCSSClass.call(this)},e.prototype.handleClick=function(t){var e=this.player_.volume(),i=this.player_.lastVolume_()
if(0===e){var n=i<.1?.1:i
this.player_.volume(n),this.player_.muted(!1)}else this.player_.muted(!this.player_.muted())},e.prototype.update=function(t){this.updateIcon_(),this.updateControlText_()},e.prototype.updateIcon_=function(){var t=this.player_.volume(),e=3
ui&&this.player_.muted(this.player_.tech_.el_.muted),0===t||this.player_.muted()?e=0:t<.33?e=1:t<.67&&(e=2)
for(var i=0;i<4;i++)Xt(this.el_,"vjs-vol-"+i)
Gt(this.el_,"vjs-vol-"+e)},e.prototype.updateControlText_=function(){var t=this.player_.muted()||0===this.player_.volume()?"Unmute":"Mute"
this.controlText()!==t&&this.controlText(t)},e}(Mn)
ur.prototype.controlText_="Mute",ei.registerComponent("MuteToggle",ur)
var lr=function(t){function e(i){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{}
wt(this,e),void 0!==n.inline?n.inline=n.inline:n.inline=!0,(void 0===n.volumeControl||It(n.volumeControl))&&(n.volumeControl=n.volumeControl||{},n.volumeControl.vertical=!n.inline)
var r=Et(this,t.call(this,i,n))
return r.on(i,["loadstart"],r.volumePanelState_),r.on(r.volumeControl,["slideractive"],r.sliderActive_),r.on(r.volumeControl,["sliderinactive"],r.sliderInactive_),r}return Ct(e,t),e.prototype.sliderActive_=function(){this.addClass("vjs-slider-active")},e.prototype.sliderInactive_=function(){this.removeClass("vjs-slider-active")},e.prototype.volumePanelState_=function(){this.volumeControl.hasClass("vjs-hidden")&&this.muteToggle.hasClass("vjs-hidden")&&this.addClass("vjs-hidden"),this.volumeControl.hasClass("vjs-hidden")&&!this.muteToggle.hasClass("vjs-hidden")&&this.addClass("vjs-mute-toggle-only")},e.prototype.createEl=function(){var e="vjs-volume-panel-horizontal"
return this.options_.inline||(e="vjs-volume-panel-vertical"),t.prototype.createEl.call(this,"div",{className:"vjs-volume-panel vjs-control "+e})},e}(ei)
lr.prototype.options_={children:["muteToggle","volumeControl"]},ei.registerComponent("VolumePanel",lr)
var cr=function(t){function e(i,n){wt(this,e)
var r=Et(this,t.call(this,i,n))
return n&&(r.menuButton_=n.menuButton),r.focusedChild_=-1,r.on("keydown",r.handleKeyPress),r}return Ct(e,t),e.prototype.addItem=function(t){this.addChild(t),t.on("click",Be(this,function(e){this.menuButton_&&(this.menuButton_.unpressButton(),"CaptionSettingsMenuItem"!==t.name()&&this.menuButton_.focus())}))},e.prototype.createEl=function(){var e=this.options_.contentElType||"ul"
this.contentEl_=Ht(e,{className:"vjs-menu-content"}),this.contentEl_.setAttribute("role","menu")
var i=t.prototype.createEl.call(this,"div",{append:this.contentEl_,className:"vjs-menu"})
return i.appendChild(this.contentEl_),Ee(i,"click",function(t){t.preventDefault(),t.stopImmediatePropagation()}),i},e.prototype.dispose=function(){this.contentEl_=null,t.prototype.dispose.call(this)},e.prototype.handleKeyPress=function(t){37===t.which||40===t.which?(t.preventDefault(),this.stepForward()):38!==t.which&&39!==t.which||(t.preventDefault(),this.stepBack())},e.prototype.stepForward=function(){var t=0
void 0!==this.focusedChild_&&(t=this.focusedChild_+1),this.focus(t)},e.prototype.stepBack=function(){var t=0
void 0!==this.focusedChild_&&(t=this.focusedChild_-1),this.focus(t)},e.prototype.focus=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,e=this.children().slice()
e.length&&e[0].className&&/vjs-menu-title/.test(e[0].className)&&e.shift(),e.length>0&&(t<0?t=0:t>=e.length&&(t=e.length-1),this.focusedChild_=t,e[t].el_.focus())},e}(ei)
ei.registerComponent("Menu",cr)
var hr=function(t){function e(i){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{}
wt(this,e)
var r=Et(this,t.call(this,i,n))
r.menuButton_=new Mn(i,n),r.menuButton_.controlText(r.controlText_),r.menuButton_.el_.setAttribute("aria-haspopup","true")
var a=Mn.prototype.buildCSSClass()
return r.menuButton_.el_.className=r.buildCSSClass()+" "+a,r.menuButton_.removeClass("vjs-control"),r.addChild(r.menuButton_),r.update(),r.enabled_=!0,r.on(r.menuButton_,"tap",r.handleClick),r.on(r.menuButton_,"click",r.handleClick),r.on(r.menuButton_,"focus",r.handleFocus),r.on(r.menuButton_,"blur",r.handleBlur),r.on("keydown",r.handleSubmenuKeyPress),r}return Ct(e,t),e.prototype.update=function(){var t=this.createMenu()
this.menu&&(this.menu.dispose(),this.removeChild(this.menu)),this.menu=t,this.addChild(t),this.buttonPressed_=!1,this.menuButton_.el_.setAttribute("aria-expanded","false"),this.items&&this.items.length<=this.hideThreshold_?this.hide():this.show()},e.prototype.createMenu=function(){var t=new cr(this.player_,{menuButton:this})
if(this.hideThreshold_=0,this.options_.title){var e=Ht("li",{className:"vjs-menu-title",innerHTML:Ze(this.options_.title),tabIndex:-1})
this.hideThreshold_+=1,t.children_.unshift(e),zt(e,t.contentEl())}if(this.items=this.createItems(),this.items)for(var i=0;i<this.items.length;i++)t.addItem(this.items[i])
return t},e.prototype.createItems=function(){},e.prototype.createEl=function(){return t.prototype.createEl.call(this,"div",{className:this.buildWrapperCSSClass()},{})},e.prototype.buildWrapperCSSClass=function(){var e="vjs-menu-button"
return!0===this.options_.inline?e+="-inline":e+="-popup","vjs-menu-button "+e+" "+Mn.prototype.buildCSSClass()+" "+t.prototype.buildCSSClass.call(this)},e.prototype.buildCSSClass=function(){var e="vjs-menu-button"
return!0===this.options_.inline?e+="-inline":e+="-popup","vjs-menu-button "+e+" "+t.prototype.buildCSSClass.call(this)},e.prototype.controlText=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:this.menuButton_.el()
return this.menuButton_.controlText(t,e)},e.prototype.handleClick=function(t){this.one(this.menu.contentEl(),"mouseleave",Be(this,function(t){this.unpressButton(),this.el_.blur()})),this.buttonPressed_?this.unpressButton():this.pressButton()},e.prototype.focus=function(){this.menuButton_.focus()},e.prototype.blur=function(){this.menuButton_.blur()},e.prototype.handleFocus=function(){Ee(s.a,"keydown",Be(this,this.handleKeyPress))},e.prototype.handleBlur=function(){Ae(s.a,"keydown",Be(this,this.handleKeyPress))},e.prototype.handleKeyPress=function(t){27===t.which||9===t.which?(this.buttonPressed_&&this.unpressButton(),9!==t.which&&(t.preventDefault(),this.menuButton_.el_.focus())):38!==t.which&&40!==t.which||this.buttonPressed_||(this.pressButton(),t.preventDefault())},e.prototype.handleSubmenuKeyPress=function(t){27!==t.which&&9!==t.which||(this.buttonPressed_&&this.unpressButton(),9!==t.which&&(t.preventDefault(),this.menuButton_.el_.focus()))},e.prototype.pressButton=function(){if(this.enabled_){if(this.buttonPressed_=!0,this.menu.lockShowing(),this.menuButton_.el_.setAttribute("aria-expanded","true"),ui&&Ft())return
this.menu.focus()}},e.prototype.unpressButton=function(){this.enabled_&&(this.buttonPressed_=!1,this.menu.unlockShowing(),this.menuButton_.el_.setAttribute("aria-expanded","false"))},e.prototype.disable=function(){this.unpressButton(),this.enabled_=!1,this.addClass("vjs-disabled"),this.menuButton_.disable()},e.prototype.enable=function(){this.enabled_=!0,this.removeClass("vjs-disabled"),this.menuButton_.enable()},e}(ei)
ei.registerComponent("MenuButton",hr)
var dr=function(t){function e(i,n){wt(this,e)
var r=n.tracks,a=Et(this,t.call(this,i,n))
if(a.items.length<=1&&a.hide(),!r)return Et(a)
var s=Be(a,a.update)
return r.addEventListener("removetrack",s),r.addEventListener("addtrack",s),a.player_.on("ready",s),a.player_.on("dispose",function(){r.removeEventListener("removetrack",s),r.removeEventListener("addtrack",s)}),a}return Ct(e,t),e}(hr)
ei.registerComponent("TrackButton",dr)
var pr=function(t){function e(i,n){wt(this,e)
var r=Et(this,t.call(this,i,n))
return r.selectable=n.selectable,r.isSelected_=n.selected||!1,r.multiSelectable=n.multiSelectable,r.selected(r.isSelected_),r.selectable?r.multiSelectable?r.el_.setAttribute("role","menuitemcheckbox"):r.el_.setAttribute("role","menuitemradio"):r.el_.setAttribute("role","menuitem"),r}return Ct(e,t),e.prototype.createEl=function(e,i,n){return this.nonIconControl=!0,t.prototype.createEl.call(this,"li",xt({className:"vjs-menu-item",innerHTML:'<span class="vjs-menu-item-text">'+this.localize(this.options_.label)+"</span>",tabIndex:-1},i),n)},e.prototype.handleClick=function(t){this.selected(!0)},e.prototype.selected=function(t){this.selectable&&(t?(this.addClass("vjs-selected"),this.el_.setAttribute("aria-checked","true"),this.controlText(", selected"),this.isSelected_=!0):(this.removeClass("vjs-selected"),this.el_.setAttribute("aria-checked","false"),this.controlText(""),this.isSelected_=!1))},e}(On)
ei.registerComponent("MenuItem",pr)
var fr=function(t){function e(i,n){wt(this,e)
var a=n.track,o=i.textTracks()
n.label=a.label||a.language||"Unknown",n.selected="showing"===a.mode
var u=Et(this,t.call(this,i,n))
u.track=a
var l=function(){for(var t=arguments.length,e=Array(t),i=0;i<t;i++)e[i]=arguments[i]
u.handleTracksChange.apply(u,e)},c=function(){for(var t=arguments.length,e=Array(t),i=0;i<t;i++)e[i]=arguments[i]
u.handleSelectedLanguageChange.apply(u,e)}
if(i.on(["loadstart","texttrackchange"],l),o.addEventListener("change",l),o.addEventListener("selectedlanguagechange",c),u.on("dispose",function(){i.off(["loadstart","texttrackchange"],l),o.removeEventListener("change",l),o.removeEventListener("selectedlanguagechange",c)}),void 0===o.onchange){var h=void 0
u.on(["tap","click"],function(){if("object"!==kt(r.a.Event))try{h=new r.a.Event("change")}catch(t){}h||(h=s.a.createEvent("Event")).initEvent("change",!0,!0),o.dispatchEvent(h)})}return u.handleTracksChange(),u}return Ct(e,t),e.prototype.handleClick=function(e){var i=this.track.kind,n=this.track.kinds,r=this.player_.textTracks()
if(n||(n=[i]),t.prototype.handleClick.call(this,e),r)for(var a=0;a<r.length;a++){var s=r[a]
s===this.track&&n.indexOf(s.kind)>-1?"showing"!==s.mode&&(s.mode="showing"):"disabled"!==s.mode&&(s.mode="disabled")}},e.prototype.handleTracksChange=function(t){var e="showing"===this.track.mode
e!==this.isSelected_&&this.selected(e)},e.prototype.handleSelectedLanguageChange=function(t){if("showing"===this.track.mode){var e=this.player_.cache_.selectedLanguage
if(e&&e.enabled&&e.language===this.track.language&&e.kind!==this.track.kind)return
this.player_.cache_.selectedLanguage={enabled:!0,language:this.track.language,kind:this.track.kind}}},e.prototype.dispose=function(){this.track=null,t.prototype.dispose.call(this)},e}(pr)
ei.registerComponent("TextTrackMenuItem",fr)
var mr=function(t){function e(i,n){return wt(this,e),n.track={player:i,kind:n.kind,kinds:n.kinds,default:!1,mode:"disabled"},n.kinds||(n.kinds=[n.kind]),n.label?n.track.label=n.label:n.track.label=n.kinds.join(" and ")+" off",n.selectable=!0,n.multiSelectable=!1,Et(this,t.call(this,i,n))}return Ct(e,t),e.prototype.handleTracksChange=function(t){for(var e=this.player().textTracks(),i=!0,n=0,r=e.length;n<r;n++){var a=e[n]
if(this.options_.kinds.indexOf(a.kind)>-1&&"showing"===a.mode){i=!1
break}}i!==this.isSelected_&&this.selected(i)},e.prototype.handleSelectedLanguageChange=function(t){for(var e=this.player().textTracks(),i=!0,n=0,r=e.length;n<r;n++){var a=e[n]
if(["captions","descriptions","subtitles"].indexOf(a.kind)>-1&&"showing"===a.mode){i=!1
break}}i&&(this.player_.cache_.selectedLanguage={enabled:!1})},e}(fr)
ei.registerComponent("OffTextTrackMenuItem",mr)
var gr=function(t){function e(i){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{}
return wt(this,e),n.tracks=i.textTracks(),Et(this,t.call(this,i,n))}return Ct(e,t),e.prototype.createItems=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:fr,i=void 0
this.label_&&(i=this.label_+" off"),t.push(new mr(this.player_,{kinds:this.kinds_,kind:this.kind_,label:i})),this.hideThreshold_+=1
var n=this.player_.textTracks()
Array.isArray(this.kinds_)||(this.kinds_=[this.kind_])
for(var r=0;r<n.length;r++){var a=n[r]
if(this.kinds_.indexOf(a.kind)>-1){var s=new e(this.player_,{track:a,selectable:!0,multiSelectable:!1})
s.addClass("vjs-"+a.kind+"-menu-item"),t.push(s)}}return t},e}(dr)
ei.registerComponent("TextTrackButton",gr)
var yr=function(t){function e(i,n){wt(this,e)
var r=n.track,a=n.cue,s=i.currentTime()
n.selectable=!0,n.multiSelectable=!1,n.label=a.text,n.selected=a.startTime<=s&&s<a.endTime
var o=Et(this,t.call(this,i,n))
return o.track=r,o.cue=a,r.addEventListener("cuechange",Be(o,o.update)),o}return Ct(e,t),e.prototype.handleClick=function(e){t.prototype.handleClick.call(this),this.player_.currentTime(this.cue.startTime),this.update(this.cue.startTime)},e.prototype.update=function(t){var e=this.cue,i=this.player_.currentTime()
this.selected(e.startTime<=i&&i<e.endTime)},e}(pr)
ei.registerComponent("ChaptersTrackMenuItem",yr)
var vr=function(t){function e(i,n,r){return wt(this,e),Et(this,t.call(this,i,n,r))}return Ct(e,t),e.prototype.buildCSSClass=function(){return"vjs-chapters-button "+t.prototype.buildCSSClass.call(this)},e.prototype.buildWrapperCSSClass=function(){return"vjs-chapters-button "+t.prototype.buildWrapperCSSClass.call(this)},e.prototype.update=function(e){this.track_&&(!e||"addtrack"!==e.type&&"removetrack"!==e.type)||this.setTrack(this.findChaptersTrack()),t.prototype.update.call(this)},e.prototype.setTrack=function(t){if(this.track_!==t){if(this.updateHandler_||(this.updateHandler_=this.update.bind(this)),this.track_){var e=this.player_.remoteTextTrackEls().getTrackElementByTrack_(this.track_)
e&&e.removeEventListener("load",this.updateHandler_),this.track_=null}if(this.track_=t,this.track_){this.track_.mode="hidden"
var i=this.player_.remoteTextTrackEls().getTrackElementByTrack_(this.track_)
i&&i.addEventListener("load",this.updateHandler_)}}},e.prototype.findChaptersTrack=function(){for(var t=this.player_.textTracks()||[],e=t.length-1;e>=0;e--){var i=t[e]
if(i.kind===this.kind_)return i}},e.prototype.getMenuCaption=function(){return this.track_&&this.track_.label?this.track_.label:this.localize(Ze(this.kind_))},e.prototype.createMenu=function(){return this.options_.title=this.getMenuCaption(),t.prototype.createMenu.call(this)},e.prototype.createItems=function(){var t=[]
if(!this.track_)return t
var e=this.track_.cues
if(!e)return t
for(var i=0,n=e.length;i<n;i++){var r=e[i],a=new yr(this.player_,{track:this.track_,cue:r})
t.push(a)}return t},e}(gr)
vr.prototype.kind_="chapters",vr.prototype.controlText_="Chapters",ei.registerComponent("ChaptersButton",vr)
var _r=function(t){function e(i,n,r){wt(this,e)
var a=Et(this,t.call(this,i,n,r)),s=i.textTracks(),o=Be(a,a.handleTracksChange)
return s.addEventListener("change",o),a.on("dispose",function(){s.removeEventListener("change",o)}),a}return Ct(e,t),e.prototype.handleTracksChange=function(t){for(var e=this.player().textTracks(),i=!1,n=0,r=e.length;n<r;n++){var a=e[n]
if(a.kind!==this.kind_&&"showing"===a.mode){i=!0
break}}i?this.disable():this.enable()},e.prototype.buildCSSClass=function(){return"vjs-descriptions-button "+t.prototype.buildCSSClass.call(this)},e.prototype.buildWrapperCSSClass=function(){return"vjs-descriptions-button "+t.prototype.buildWrapperCSSClass.call(this)},e}(gr)
_r.prototype.kind_="descriptions",_r.prototype.controlText_="Descriptions",ei.registerComponent("DescriptionsButton",_r)
var br=function(t){function e(i,n,r){return wt(this,e),Et(this,t.call(this,i,n,r))}return Ct(e,t),e.prototype.buildCSSClass=function(){return"vjs-subtitles-button "+t.prototype.buildCSSClass.call(this)},e.prototype.buildWrapperCSSClass=function(){return"vjs-subtitles-button "+t.prototype.buildWrapperCSSClass.call(this)},e}(gr)
br.prototype.kind_="subtitles",br.prototype.controlText_="Subtitles",ei.registerComponent("SubtitlesButton",br)
var Tr=function(t){function e(i,n){wt(this,e),n.track={player:i,kind:n.kind,label:n.kind+" settings",selectable:!1,default:!1,mode:"disabled"},n.selectable=!1,n.name="CaptionSettingsMenuItem"
var r=Et(this,t.call(this,i,n))
return r.addClass("vjs-texttrack-settings"),r.controlText(", opens "+n.kind+" settings dialog"),r}return Ct(e,t),e.prototype.handleClick=function(t){this.player().getChild("textTrackSettings").open()},e}(fr)
ei.registerComponent("CaptionSettingsMenuItem",Tr)
var Sr=function(t){function e(i,n,r){return wt(this,e),Et(this,t.call(this,i,n,r))}return Ct(e,t),e.prototype.buildCSSClass=function(){return"vjs-captions-button "+t.prototype.buildCSSClass.call(this)},e.prototype.buildWrapperCSSClass=function(){return"vjs-captions-button "+t.prototype.buildWrapperCSSClass.call(this)},e.prototype.createItems=function(){var e=[]
return this.player().tech_&&this.player().tech_.featuresNativeTextTracks||!this.player().getChild("textTrackSettings")||(e.push(new Tr(this.player_,{kind:this.kind_})),this.hideThreshold_+=1),t.prototype.createItems.call(this,e)},e}(gr)
Sr.prototype.kind_="captions",Sr.prototype.controlText_="Captions",ei.registerComponent("CaptionsButton",Sr)
var kr=function(t){function e(){return wt(this,e),Et(this,t.apply(this,arguments))}return Ct(e,t),e.prototype.createEl=function(e,i,n){var r='<span class="vjs-menu-item-text">'+this.localize(this.options_.label)
return"captions"===this.options_.track.kind&&(r+='\n        <span aria-hidden="true" class="vjs-icon-placeholder"></span>\n        <span class="vjs-control-text"> '+this.localize("Captions")+"</span>\n      "),r+="</span>",t.prototype.createEl.call(this,e,xt({innerHTML:r},i),n)},e}(fr)
ei.registerComponent("SubsCapsMenuItem",kr)
var wr=function(t){function e(i){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{}
wt(this,e)
var r=Et(this,t.call(this,i,n))
return r.label_="subtitles",["en","en-us","en-ca","fr-ca"].indexOf(r.player_.language_)>-1&&(r.label_="captions"),r.menuButton_.controlText(Ze(r.label_)),r}return Ct(e,t),e.prototype.buildCSSClass=function(){return"vjs-subs-caps-button "+t.prototype.buildCSSClass.call(this)},e.prototype.buildWrapperCSSClass=function(){return"vjs-subs-caps-button "+t.prototype.buildWrapperCSSClass.call(this)},e.prototype.createItems=function(){var e=[]
return this.player().tech_&&this.player().tech_.featuresNativeTextTracks||!this.player().getChild("textTrackSettings")||(e.push(new Tr(this.player_,{kind:this.label_})),this.hideThreshold_+=1),t.prototype.createItems.call(this,e,kr)},e}(gr)
wr.prototype.kinds_=["captions","subtitles"],wr.prototype.controlText_="Subtitles",ei.registerComponent("SubsCapsButton",wr)
var Cr=function(t){function e(i,n){wt(this,e)
var r=n.track,a=i.audioTracks()
n.label=r.label||r.language||"Unknown",n.selected=r.enabled
var s=Et(this,t.call(this,i,n))
s.track=r,s.addClass("vjs-"+r.kind+"-menu-item")
var o=function(){for(var t=arguments.length,e=Array(t),i=0;i<t;i++)e[i]=arguments[i]
s.handleTracksChange.apply(s,e)}
return a.addEventListener("change",o),s.on("dispose",function(){a.removeEventListener("change",o)}),s}return Ct(e,t),e.prototype.createEl=function(e,i,n){var r='<span class="vjs-menu-item-text">'+this.localize(this.options_.label)
return"main-desc"===this.options_.track.kind&&(r+='\n        <span aria-hidden="true" class="vjs-icon-placeholder"></span>\n        <span class="vjs-control-text"> '+this.localize("Descriptions")+"</span>\n      "),r+="</span>",t.prototype.createEl.call(this,e,xt({innerHTML:r},i),n)},e.prototype.handleClick=function(e){var i=this.player_.audioTracks()
t.prototype.handleClick.call(this,e)
for(var n=0;n<i.length;n++){var r=i[n]
r.enabled=r===this.track}},e.prototype.handleTracksChange=function(t){this.selected(this.track.enabled)},e}(pr)
ei.registerComponent("AudioTrackMenuItem",Cr)
var Er=function(t){function e(i){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{}
return wt(this,e),n.tracks=i.audioTracks(),Et(this,t.call(this,i,n))}return Ct(e,t),e.prototype.buildCSSClass=function(){return"vjs-audio-button "+t.prototype.buildCSSClass.call(this)},e.prototype.buildWrapperCSSClass=function(){return"vjs-audio-button "+t.prototype.buildWrapperCSSClass.call(this)},e.prototype.createItems=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[]
this.hideThreshold_=1
for(var e=this.player_.audioTracks(),i=0;i<e.length;i++){var n=e[i]
t.push(new Cr(this.player_,{track:n,selectable:!0,multiSelectable:!1}))}return t},e}(dr)
Er.prototype.controlText_="Audio Track",ei.registerComponent("AudioTrackButton",Er)
var Ar=function(t){function e(i,n){wt(this,e)
var r=n.rate,a=parseFloat(r,10)
n.label=r,n.selected=1===a,n.selectable=!0,n.multiSelectable=!1
var s=Et(this,t.call(this,i,n))
return s.label=r,s.rate=a,s.on(i,"ratechange",s.update),s}return Ct(e,t),e.prototype.handleClick=function(e){t.prototype.handleClick.call(this),this.player().playbackRate(this.rate)},e.prototype.update=function(t){this.selected(this.player().playbackRate()===this.rate)},e}(pr)
Ar.prototype.contentElType="button",ei.registerComponent("PlaybackRateMenuItem",Ar)
var Lr=function(t){function e(i,n){wt(this,e)
var r=Et(this,t.call(this,i,n))
return r.updateVisibility(),r.updateLabel(),r.on(i,"loadstart",r.updateVisibility),r.on(i,"ratechange",r.updateLabel),r}return Ct(e,t),e.prototype.createEl=function(){var e=t.prototype.createEl.call(this)
return this.labelEl_=Ht("div",{className:"vjs-playback-rate-value",innerHTML:"1x"}),e.appendChild(this.labelEl_),e},e.prototype.dispose=function(){this.labelEl_=null,t.prototype.dispose.call(this)},e.prototype.buildCSSClass=function(){return"vjs-playback-rate "+t.prototype.buildCSSClass.call(this)},e.prototype.buildWrapperCSSClass=function(){return"vjs-playback-rate "+t.prototype.buildWrapperCSSClass.call(this)},e.prototype.createMenu=function(){var t=new cr(this.player()),e=this.playbackRates()
if(e)for(var i=e.length-1;i>=0;i--)t.addChild(new Ar(this.player(),{rate:e[i]+"x"}))
return t},e.prototype.updateARIAAttributes=function(){this.el().setAttribute("aria-valuenow",this.player().playbackRate())},e.prototype.handleClick=function(t){for(var e=this.player().playbackRate(),i=this.playbackRates(),n=i[0],r=0;r<i.length;r++)if(i[r]>e){n=i[r]
break}this.player().playbackRate(n)},e.prototype.playbackRates=function(){return this.options_.playbackRates||this.options_.playerOptions&&this.options_.playerOptions.playbackRates},e.prototype.playbackRateSupported=function(){return this.player().tech_&&this.player().tech_.featuresPlaybackRate&&this.playbackRates()&&this.playbackRates().length>0},e.prototype.updateVisibility=function(t){this.playbackRateSupported()?this.removeClass("vjs-hidden"):this.addClass("vjs-hidden")},e.prototype.updateLabel=function(t){this.playbackRateSupported()&&(this.labelEl_.innerHTML=this.player().playbackRate()+"x")},e}(hr)
Lr.prototype.controlText_="Playback Rate",ei.registerComponent("PlaybackRateMenuButton",Lr)
var Or=function(t){function e(){return wt(this,e),Et(this,t.apply(this,arguments))}return Ct(e,t),e.prototype.buildCSSClass=function(){return"vjs-spacer "+t.prototype.buildCSSClass.call(this)},e.prototype.createEl=function(){return t.prototype.createEl.call(this,"div",{className:this.buildCSSClass()})},e}(ei)
ei.registerComponent("Spacer",Or)
var Pr=function(t){function e(){return wt(this,e),Et(this,t.apply(this,arguments))}return Ct(e,t),e.prototype.buildCSSClass=function(){return"vjs-custom-control-spacer "+t.prototype.buildCSSClass.call(this)},e.prototype.createEl=function(){var e=t.prototype.createEl.call(this,{className:this.buildCSSClass()})
return e.innerHTML=" ",e},e}(Or)
ei.registerComponent("CustomControlSpacer",Pr)
var xr=function(t){function e(){return wt(this,e),Et(this,t.apply(this,arguments))}return Ct(e,t),e.prototype.createEl=function(){return t.prototype.createEl.call(this,"div",{className:"vjs-control-bar",dir:"ltr"})},e}(ei)
xr.prototype.options_={children:["playToggle","volumePanel","currentTimeDisplay","timeDivider","durationDisplay","progressControl","liveDisplay","remainingTimeDisplay","customControlSpacer","playbackRateMenuButton","chaptersButton","descriptionsButton","subsCapsButton","audioTrackButton","fullscreenToggle"]},ei.registerComponent("ControlBar",xr)
var Ur=function(t){function e(i,n){wt(this,e)
var r=Et(this,t.call(this,i,n))
return r.on(i,"error",r.open),r}return Ct(e,t),e.prototype.buildCSSClass=function(){return"vjs-error-display "+t.prototype.buildCSSClass.call(this)},e.prototype.content=function(){var t=this.player().error()
return t?this.localize(t.message):""},e}(Ni)
Ur.prototype.options_=ti(Ni.prototype.options_,{pauseOnOpen:!1,fillAlways:!0,temporary:!1,uncloseable:!0}),ei.registerComponent("ErrorDisplay",Ur)
var Ir=["#000","Black"],Dr=["#00F","Blue"],Rr=["#0FF","Cyan"],Mr=["#0F0","Green"],Br=["#F0F","Magenta"],Nr=["#F00","Red"],jr=["#FFF","White"],Fr=["#FF0","Yellow"],Vr=["1","Opaque"],Hr=["0.5","Semi-Transparent"],qr=["0","Transparent"],zr={backgroundColor:{selector:".vjs-bg-color > select",id:"captions-background-color-%s",label:"Color",options:[Ir,jr,Nr,Mr,Dr,Fr,Br,Rr]},backgroundOpacity:{selector:".vjs-bg-opacity > select",id:"captions-background-opacity-%s",label:"Transparency",options:[Vr,Hr,qr]},color:{selector:".vjs-fg-color > select",id:"captions-foreground-color-%s",label:"Color",options:[jr,Ir,Nr,Mr,Dr,Fr,Br,Rr]},edgeStyle:{selector:".vjs-edge-style > select",id:"%s",label:"Text Edge Style",options:[["none","None"],["raised","Raised"],["depressed","Depressed"],["uniform","Uniform"],["dropshadow","Dropshadow"]]},fontFamily:{selector:".vjs-font-family > select",id:"captions-font-family-%s",label:"Font Family",options:[["proportionalSansSerif","Proportional Sans-Serif"],["monospaceSansSerif","Monospace Sans-Serif"],["proportionalSerif","Proportional Serif"],["monospaceSerif","Monospace Serif"],["casual","Casual"],["script","Script"],["small-caps","Small Caps"]]},fontPercent:{selector:".vjs-font-percent > select",id:"captions-font-size-%s",label:"Font Size",options:[["0.50","50%"],["0.75","75%"],["1.00","100%"],["1.25","125%"],["1.50","150%"],["1.75","175%"],["2.00","200%"],["3.00","300%"],["4.00","400%"]],default:2,parser:function(t){return"1.00"===t?null:Number(t)}},textOpacity:{selector:".vjs-text-opacity > select",id:"captions-foreground-opacity-%s",label:"Transparency",options:[Vr,Hr]},windowColor:{selector:".vjs-window-color > select",id:"captions-window-color-%s",label:"Color"},windowOpacity:{selector:".vjs-window-opacity > select",id:"captions-window-opacity-%s",label:"Transparency",options:[qr,Hr,Vr]}}
function Wr(t,e){if(e&&(t=e(t)),t&&"none"!==t)return t}zr.windowColor.options=zr.backgroundColor.options
var Gr=function(t){function e(i,n){wt(this,e),n.temporary=!1
var r=Et(this,t.call(this,i,n))
return r.updateDisplay=Be(r,r.updateDisplay),r.fill(),r.hasBeenOpened_=r.hasBeenFilled_=!0,r.endDialog=Ht("p",{className:"vjs-control-text",textContent:r.localize("End of dialog window.")}),r.el().appendChild(r.endDialog),r.setDefaults(),void 0===n.persistTextTrackSettings&&(r.options_.persistTextTrackSettings=r.options_.playerOptions.persistTextTrackSettings),r.on(r.$(".vjs-done-button"),"click",function(){r.saveSettings(),r.close()}),r.on(r.$(".vjs-default-button"),"click",function(){r.setDefaults(),r.updateDisplay()}),Pt(zr,function(t){r.on(r.$(t.selector),"change",r.updateDisplay)}),r.options_.persistTextTrackSettings&&r.restoreSettings(),r}return Ct(e,t),e.prototype.dispose=function(){this.endDialog=null,t.prototype.dispose.call(this)},e.prototype.createElSelect_=function(t){var e=this,i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"label",r=zr[t],a=r.id.replace("%s",this.id_),s=[i,a].join(" ").trim()
return["<"+n+' id="'+a+'" class="'+("label"===n?"vjs-label":"")+'">',this.localize(r.label),"</"+n+">",'<select aria-labelledby="'+s+'">'].concat(r.options.map(function(t){var i=a+"-"+t[1].replace(/\W+/g,"")
return['<option id="'+i+'" value="'+t[0]+'" ','aria-labelledby="'+s+" "+i+'">',e.localize(t[1]),"</option>"].join("")})).concat("</select>").join("")},e.prototype.createElFgColor_=function(){var t="captions-text-legend-"+this.id_
return['<fieldset class="vjs-fg-color vjs-track-setting">','<legend id="'+t+'">',this.localize("Text"),"</legend>",this.createElSelect_("color",t),'<span class="vjs-text-opacity vjs-opacity">',this.createElSelect_("textOpacity",t),"</span>","</fieldset>"].join("")},e.prototype.createElBgColor_=function(){var t="captions-background-"+this.id_
return['<fieldset class="vjs-bg-color vjs-track-setting">','<legend id="'+t+'">',this.localize("Background"),"</legend>",this.createElSelect_("backgroundColor",t),'<span class="vjs-bg-opacity vjs-opacity">',this.createElSelect_("backgroundOpacity",t),"</span>","</fieldset>"].join("")},e.prototype.createElWinColor_=function(){var t="captions-window-"+this.id_
return['<fieldset class="vjs-window-color vjs-track-setting">','<legend id="'+t+'">',this.localize("Window"),"</legend>",this.createElSelect_("windowColor",t),'<span class="vjs-window-opacity vjs-opacity">',this.createElSelect_("windowOpacity",t),"</span>","</fieldset>"].join("")},e.prototype.createElColors_=function(){return Ht("div",{className:"vjs-track-settings-colors",innerHTML:[this.createElFgColor_(),this.createElBgColor_(),this.createElWinColor_()].join("")})},e.prototype.createElFont_=function(){return Ht("div",{className:"vjs-track-settings-font",innerHTML:['<fieldset class="vjs-font-percent vjs-track-setting">',this.createElSelect_("fontPercent","","legend"),"</fieldset>",'<fieldset class="vjs-edge-style vjs-track-setting">',this.createElSelect_("edgeStyle","","legend"),"</fieldset>",'<fieldset class="vjs-font-family vjs-track-setting">',this.createElSelect_("fontFamily","","legend"),"</fieldset>"].join("")})},e.prototype.createElControls_=function(){var t=this.localize("restore all settings to the default values")
return Ht("div",{className:"vjs-track-settings-controls",innerHTML:['<button class="vjs-default-button" title="'+t+'">',this.localize("Reset"),'<span class="vjs-control-text"> '+t+"</span>","</button>",'<button class="vjs-done-button">'+this.localize("Done")+"</button>"].join("")})},e.prototype.content=function(){return[this.createElColors_(),this.createElFont_(),this.createElControls_()]},e.prototype.label=function(){return this.localize("Caption Settings Dialog")},e.prototype.description=function(){return this.localize("Beginning of dialog window. Escape will cancel and close the window.")},e.prototype.buildCSSClass=function(){return t.prototype.buildCSSClass.call(this)+" vjs-text-track-settings"},e.prototype.getValues=function(){var t=this
return function(t,e){var i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:0
return Ot(t).reduce(function(i,n){return e(i,t[n],n)},i)}(zr,function(e,i,n){var r=function(t,e){return Wr(t.options[t.options.selectedIndex].value,e)}(t.$(i.selector),i.parser)
return void 0!==r&&(e[n]=r),e},{})},e.prototype.setValues=function(t){var e=this
Pt(zr,function(i,n){!function(t,e,i){if(e)for(var n=0;n<t.options.length;n++)if(Wr(t.options[n].value,i)===e){t.selectedIndex=n
break}}(e.$(i.selector),t[n],i.parser)})},e.prototype.setDefaults=function(){var t=this
Pt(zr,function(e){var i=e.hasOwnProperty("default")?e.default:0
t.$(e.selector).selectedIndex=i})},e.prototype.restoreSettings=function(){var t=void 0
try{t=JSON.parse(r.a.localStorage.getItem("vjs-text-track-settings"))}catch(t){St.warn(t)}t&&this.setValues(t)},e.prototype.saveSettings=function(){if(this.options_.persistTextTrackSettings){var t=this.getValues()
try{Object.keys(t).length?r.a.localStorage.setItem("vjs-text-track-settings",JSON.stringify(t)):r.a.localStorage.removeItem("vjs-text-track-settings")}catch(t){St.warn(t)}}},e.prototype.updateDisplay=function(){var t=this.player_.getChild("textTrackDisplay")
t&&t.updateDisplay()},e.prototype.conditionalBlur_=function(){this.previouslyActiveEl_=null,this.off(s.a,"keydown",this.handleKeyDown)
var t=this.player_.controlBar,e=t&&t.subsCapsButton,i=t&&t.captionsButton
e?e.focus():i&&i.focus()},e}(Ni)
ei.registerComponent("TextTrackSettings",Gr)
var Xr=function(t){function e(i,n){wt(this,e)
var a=n.ResizeObserver||r.a.ResizeObserver
null===n.ResizeObserver&&(a=!1)
var s=ti({createEl:!a,reportTouchActivity:!1},n),o=Et(this,t.call(this,i,s))
return o.ResizeObserver=n.ResizeObserver||r.a.ResizeObserver,o.loadListener_=null,o.resizeObserver_=null,o.debouncedHandler_=je(function(){o.resizeHandler()},100,!1,i),a?(o.resizeObserver_=new o.ResizeObserver(o.debouncedHandler_),o.resizeObserver_.observe(i.el())):(o.loadListener_=function(){o.el_.contentWindow&&Ee(o.el_.contentWindow,"resize",o.debouncedHandler_),o.off("load",o.loadListener_)},o.on("load",o.loadListener_)),o}return Ct(e,t),e.prototype.createEl=function(){return t.prototype.createEl.call(this,"iframe",{className:"vjs-resize-manager"})},e.prototype.resizeHandler=function(){this.player_.trigger("playerresize")},e.prototype.dispose=function(){this.resizeObserver_&&(this.player_.el()&&this.resizeObserver_.unobserve(this.player_.el()),this.resizeObserver_.disconnect()),this.el_&&this.el_.contentWindow&&Ae(this.el_.contentWindow,"resize",this.debouncedHandler_),this.loadListener_&&this.off("load",this.loadListener_),this.debouncedHandler_&&this.debouncedHandler_.cancel(),this.ResizeObserver=null,this.resizeObserver=null,this.debouncedHandler_=null,this.loadListener_=null,t.prototype.dispose.call(this)},e}(ei)
ei.registerComponent("ResizeManager",Xr)
var Yr=function(t){var e=t.el()
if(e.hasAttribute("src"))return t.triggerSourceset(e.src),!0
var i=t.$$("source"),n=[],r=""
if(!i.length)return!1
for(var a=0;a<i.length;a++){var s=i[a].src
s&&-1===n.indexOf(s)&&n.push(s)}return!!n.length&&(1===n.length&&(r=n[0]),t.triggerSourceset(r),!0)},$r=Object.defineProperty({},"innerHTML",{get:function(){return this.cloneNode(!0).innerHTML},set:function(t){var e=s.a.createElement(this.nodeName.toLowerCase())
e.innerHTML=t
for(var i=s.a.createDocumentFragment();e.childNodes.length;)i.appendChild(e.childNodes[0])
return this.innerText="",r.a.Element.prototype.appendChild.call(this,i),this.innerHTML}}),Kr=function(t,e){for(var i={},n=0;n<t.length&&!((i=Object.getOwnPropertyDescriptor(t[n],e))&&i.set&&i.get);n++);return i.enumerable=!0,i.configurable=!0,i},Jr=function(t){var e=t.el()
if(!e.resetSourceWatch_){var i={},n=function(t){return Kr([t.el(),r.a.HTMLMediaElement.prototype,r.a.Element.prototype,$r],"innerHTML")}(t),a=function(i){return function(){for(var n=arguments.length,r=Array(n),a=0;a<n;a++)r[a]=arguments[a]
var s=i.apply(e,r)
return Yr(t),s}};["append","appendChild","insertAdjacentHTML"].forEach(function(t){e[t]&&(i[t]=e[t],e[t]=a(i[t]))}),Object.defineProperty(e,"innerHTML",ti(n,{set:a(n.set)})),e.resetSourceWatch_=function(){e.resetSourceWatch_=null,Object.keys(i).forEach(function(t){e[t]=i[t]}),Object.defineProperty(e,"innerHTML",n)},t.one("sourceset",e.resetSourceWatch_)}},Qr=Object.defineProperty({},"src",{get:function(){return this.hasAttribute("src")?tn(r.a.Element.prototype.getAttribute.call(this,"src")):""},set:function(t){return r.a.Element.prototype.setAttribute.call(this,"src",t),t}}),Zr=At(["Text Tracks are being loaded from another origin but the crossorigin attribute isn't used.\n            This may prevent text tracks from loading."],["Text Tracks are being loaded from another origin but the crossorigin attribute isn't used.\n            This may prevent text tracks from loading."]),ta=function(t){function e(i,n){wt(this,e)
var r=Et(this,t.call(this,i,n)),a=i.source,s=!1
if(a&&(r.el_.currentSrc!==a.src||i.tag&&3===i.tag.initNetworkState_)?r.setSource(a):r.handleLateInit_(r.el_),i.enableSourceset&&r.setupSourcesetHandling_(),r.el_.hasChildNodes()){for(var o=r.el_.childNodes,l=o.length,c=[];l--;){var h=o[l]
"track"===h.nodeName.toLowerCase()&&(r.featuresNativeTextTracks?(r.remoteTextTrackEls().addTrackElement_(h),r.remoteTextTracks().addTrack(h.track),r.textTracks().addTrack(h.track),s||r.el_.hasAttribute("crossorigin")||!nn(h.src)||(s=!0)):c.push(h))}for(var d=0;d<c.length;d++)r.el_.removeChild(c[d])}return r.proxyNativeTracks_(),r.featuresNativeTextTracks&&s&&St.warn(u()(Zr)),r.restoreMetadataTracksInIOSNativePlayer_(),(bi||si||di)&&!0===i.nativeControlsForTouch&&r.setControls(!0),r.proxyWebkitFullscreen_(),r.triggerReady(),r}return Ct(e,t),e.prototype.dispose=function(){this.el_&&this.el_.resetSourceset_&&this.el_.resetSourceset_(),e.disposeMediaElement(this.el_),this.options_=null,t.prototype.dispose.call(this)},e.prototype.setupSourcesetHandling_=function(){(function(t){if(t.featuresSourceset){var e=t.el()
if(!e.resetSourceset_){var i=function(t){return Kr([t.el(),r.a.HTMLMediaElement.prototype,Qr],"src")}(t),n=e.setAttribute,a=e.load
Object.defineProperty(e,"src",ti(i,{set:function(n){var r=i.set.call(e,n)
return t.triggerSourceset(e.src),r}})),e.setAttribute=function(i,r){var a=n.call(e,i,r)
return/src/i.test(i)&&t.triggerSourceset(e.src),a},e.load=function(){var i=a.call(e)
return Yr(t)||(t.triggerSourceset(""),Jr(t)),i},e.currentSrc?t.triggerSourceset(e.currentSrc):Yr(t)||Jr(t),e.resetSourceset_=function(){e.resetSourceset_=null,e.load=a,e.setAttribute=n,Object.defineProperty(e,"src",i),e.resetSourceWatch_&&e.resetSourceWatch_()}}}})(this)},e.prototype.restoreMetadataTracksInIOSNativePlayer_=function(){var t=this.textTracks(),e=void 0,i=function(){e=[]
for(var i=0;i<t.length;i++){var n=t[i]
"metadata"===n.kind&&e.push({track:n,storedMode:n.mode})}}
i(),t.addEventListener("change",i),this.on("dispose",function(){return t.removeEventListener("change",i)})
var n=function i(){for(var n=0;n<e.length;n++){var r=e[n]
"disabled"===r.track.mode&&r.track.mode!==r.storedMode&&(r.track.mode=r.storedMode)}t.removeEventListener("change",i)}
this.on("webkitbeginfullscreen",function(){t.removeEventListener("change",i),t.removeEventListener("change",n),t.addEventListener("change",n)}),this.on("webkitendfullscreen",function(){t.removeEventListener("change",i),t.addEventListener("change",i),t.removeEventListener("change",n)})},e.prototype.overrideNative_=function(t,e){var i=this
if(e===this["featuresNative"+t+"Tracks"]){var n=t.toLowerCase()
this[n+"TracksListeners_"]&&Object.keys(this[n+"TracksListeners_"]).forEach(function(t){i.el()[n+"Tracks"].removeEventListener(t,i[n+"TracksListeners_"][t])}),this["featuresNative"+t+"Tracks"]=!e,this[n+"TracksListeners_"]=null,this.proxyNativeTracksForType_(n)}},e.prototype.overrideNativeAudioTracks=function(t){this.overrideNative_("Audio",t)},e.prototype.overrideNativeVideoTracks=function(t){this.overrideNative_("Video",t)},e.prototype.proxyNativeTracksForType_=function(t){var e=this,i=pn[t],n=this.el()[i.getterName],r=this[i.getterName]()
if(this["featuresNative"+i.capitalName+"Tracks"]&&n&&n.addEventListener){var a={change:function(t){r.trigger({type:"change",target:r,currentTarget:r,srcElement:r})},addtrack:function(t){r.addTrack(t.track)},removetrack:function(t){r.removeTrack(t.track)}},s=function(){for(var t=[],e=0;e<r.length;e++){for(var i=!1,a=0;a<n.length;a++)if(n[a]===r[e]){i=!0
break}i||t.push(r[e])}for(;t.length;)r.removeTrack(t.shift())}
this[i.getterName+"Listeners_"]=a,Object.keys(a).forEach(function(t){var i=a[t]
n.addEventListener(t,i),e.on("dispose",function(e){return n.removeEventListener(t,i)})}),this.on("loadstart",s),this.on("dispose",function(t){return e.off("loadstart",s)})}},e.prototype.proxyNativeTracks_=function(){var t=this
pn.names.forEach(function(e){t.proxyNativeTracksForType_(e)})},e.prototype.createEl=function(){var t=this.options_.tag
if(!t||!this.options_.playerElIngest&&!this.movingMediaElementInDOM){if(t){var i=t.cloneNode(!0)
t.parentNode&&t.parentNode.insertBefore(i,t),e.disposeMediaElement(t),t=i}else{t=s.a.createElement("video")
var n=ti({},this.options_.tag&&Kt(this.options_.tag))
bi&&!0===this.options_.nativeControlsForTouch||delete n.controls,$t(t,xt(n,{id:this.options_.techId,class:"vjs-tech"}))}t.playerId=this.options_.playerId}void 0!==this.options_.preload&&Qt(t,"preload",this.options_.preload)
for(var r=["loop","muted","playsinline","autoplay"],a=0;a<r.length;a++){var o=r[a],u=this.options_[o]
void 0!==u&&(u?Qt(t,o,o):Zt(t,o),t[o]=u)}return t},e.prototype.handleLateInit_=function(t){if(0!==t.networkState&&3!==t.networkState){if(0===t.readyState){var e=!1,i=function(){e=!0}
this.on("loadstart",i)
var n=function(){e||this.trigger("loadstart")}
return this.on("loadedmetadata",n),void this.ready(function(){this.off("loadstart",i),this.off("loadedmetadata",n),e||this.trigger("loadstart")})}var r=["loadstart"]
r.push("loadedmetadata"),t.readyState>=2&&r.push("loadeddata"),t.readyState>=3&&r.push("canplay"),t.readyState>=4&&r.push("canplaythrough"),this.ready(function(){r.forEach(function(t){this.trigger(t)},this)})}},e.prototype.setCurrentTime=function(t){try{this.el_.currentTime=t}catch(t){St(t,"Video is not ready. (Video.js)")}},e.prototype.duration=function(){var t=this
return this.el_.duration===1/0&&ci&&mi&&0===this.el_.currentTime?(this.on("timeupdate",function e(){t.el_.currentTime>0&&(t.el_.duration===1/0&&t.trigger("durationchange"),t.off("timeupdate",e))}),NaN):this.el_.duration||NaN},e.prototype.width=function(){return this.el_.offsetWidth},e.prototype.height=function(){return this.el_.offsetHeight},e.prototype.proxyWebkitFullscreen_=function(){var t=this
if("webkitDisplayingFullscreen"in this.el_){var e=function(){this.trigger("fullscreenchange",{isFullscreen:!1})},i=function(){"webkitPresentationMode"in this.el_&&"picture-in-picture"!==this.el_.webkitPresentationMode&&(this.one("webkitendfullscreen",e),this.trigger("fullscreenchange",{isFullscreen:!0}))}
this.on("webkitbeginfullscreen",i),this.on("dispose",function(){t.off("webkitbeginfullscreen",i),t.off("webkitendfullscreen",e)})}},e.prototype.supportsFullScreen=function(){if("function"==typeof this.el_.webkitEnterFullScreen){var t=r.a.navigator&&r.a.navigator.userAgent||""
if(/Android/.test(t)||!/Chrome|Mac OS X 10.5/.test(t))return!0}return!1},e.prototype.enterFullScreen=function(){var t=this.el_
t.paused&&t.networkState<=t.HAVE_METADATA?(this.el_.play(),this.setTimeout(function(){t.pause(),t.webkitEnterFullScreen()},0)):t.webkitEnterFullScreen()},e.prototype.exitFullScreen=function(){this.el_.webkitExitFullScreen()},e.prototype.src=function(t){if(void 0===t)return this.el_.src
this.setSrc(t)},e.prototype.reset=function(){e.resetMediaElement(this.el_)},e.prototype.currentSrc=function(){return this.currentSource_?this.currentSource_.src:this.el_.currentSrc},e.prototype.setControls=function(t){this.el_.controls=!!t},e.prototype.addTextTrack=function(e,i,n){return this.featuresNativeTextTracks?this.el_.addTextTrack(e,i,n):t.prototype.addTextTrack.call(this,e,i,n)},e.prototype.createRemoteTextTrack=function(e){if(!this.featuresNativeTextTracks)return t.prototype.createRemoteTextTrack.call(this,e)
var i=s.a.createElement("track")
return e.kind&&(i.kind=e.kind),e.label&&(i.label=e.label),(e.language||e.srclang)&&(i.srclang=e.language||e.srclang),e.default&&(i.default=e.default),e.id&&(i.id=e.id),e.src&&(i.src=e.src),i},e.prototype.addRemoteTextTrack=function(e,i){var n=t.prototype.addRemoteTextTrack.call(this,e,i)
return this.featuresNativeTextTracks&&this.el().appendChild(n),n},e.prototype.removeRemoteTextTrack=function(e){if(t.prototype.removeRemoteTextTrack.call(this,e),this.featuresNativeTextTracks)for(var i=this.$$("track"),n=i.length;n--;)e!==i[n]&&e!==i[n].track||this.el().removeChild(i[n])},e.prototype.getVideoPlaybackQuality=function(){if("function"==typeof this.el().getVideoPlaybackQuality)return this.el().getVideoPlaybackQuality()
var t={}
return void 0!==this.el().webkitDroppedFrameCount&&void 0!==this.el().webkitDecodedFrameCount&&(t.droppedVideoFrames=this.el().webkitDroppedFrameCount,t.totalVideoFrames=this.el().webkitDecodedFrameCount),r.a.performance&&"function"==typeof r.a.performance.now?t.creationTime=r.a.performance.now():r.a.performance&&r.a.performance.timing&&"number"==typeof r.a.performance.timing.navigationStart&&(t.creationTime=r.a.Date.now()-r.a.performance.timing.navigationStart),t},e}(gn)
if(Nt()){ta.TEST_VID=s.a.createElement("video")
var ea=s.a.createElement("track")
ea.kind="captions",ea.srclang="en",ea.label="English",ta.TEST_VID.appendChild(ea)}ta.isSupported=function(){try{ta.TEST_VID.volume=.5}catch(t){return!1}return!(!ta.TEST_VID||!ta.TEST_VID.canPlayType)},ta.canPlayType=function(t){return ta.TEST_VID.canPlayType(t)},ta.canPlaySource=function(t,e){return ta.canPlayType(t.type)},ta.canControlVolume=function(){try{var t=ta.TEST_VID.volume
return ta.TEST_VID.volume=t/2+.1,t!==ta.TEST_VID.volume}catch(t){return!1}},ta.canMuteVolume=function(){try{var t=ta.TEST_VID.muted
return ta.TEST_VID.muted=!t,ta.TEST_VID.muted?Qt(ta.TEST_VID,"muted","muted"):Zt(ta.TEST_VID,"muted"),t!==ta.TEST_VID.muted}catch(t){return!1}},ta.canControlPlaybackRate=function(){if(ci&&mi&&gi<58)return!1
try{var t=ta.TEST_VID.playbackRate
return ta.TEST_VID.playbackRate=t/2+.1,t!==ta.TEST_VID.playbackRate}catch(t){return!1}},ta.canOverrideAttributes=function(){try{var t=function(){}
Object.defineProperty(s.a.createElement("video"),"src",{get:t,set:t}),Object.defineProperty(s.a.createElement("audio"),"src",{get:t,set:t}),Object.defineProperty(s.a.createElement("video"),"innerHTML",{get:t,set:t}),Object.defineProperty(s.a.createElement("audio"),"innerHTML",{get:t,set:t})}catch(t){return!1}return!0},ta.supportsNativeTextTracks=function(){return _i||ui&&mi},ta.supportsNativeVideoTracks=function(){return!(!ta.TEST_VID||!ta.TEST_VID.videoTracks)},ta.supportsNativeAudioTracks=function(){return!(!ta.TEST_VID||!ta.TEST_VID.audioTracks)},ta.Events=["loadstart","suspend","abort","error","emptied","stalled","loadedmetadata","loadeddata","canplay","canplaythrough","playing","waiting","seeking","seeked","ended","durationchange","timeupdate","progress","play","pause","ratechange","resize","volumechange"],ta.prototype.featuresVolumeControl=ta.canControlVolume(),ta.prototype.featuresMuteControl=ta.canMuteVolume(),ta.prototype.featuresPlaybackRate=ta.canControlPlaybackRate(),ta.prototype.featuresSourceset=ta.canOverrideAttributes(),ta.prototype.movingMediaElementInDOM=!ui,ta.prototype.featuresFullscreenResize=!0,ta.prototype.featuresProgressEvents=!0,ta.prototype.featuresTimeupdateEvents=!0,ta.prototype.featuresNativeTextTracks=ta.supportsNativeTextTracks(),ta.prototype.featuresNativeVideoTracks=ta.supportsNativeVideoTracks(),ta.prototype.featuresNativeAudioTracks=ta.supportsNativeAudioTracks()
var ia=ta.TEST_VID&&ta.TEST_VID.constructor.prototype.canPlayType,na=/^application\/(?:x-|vnd\.apple\.)mpegurl/i
ta.patchCanPlayType=function(){hi>=4&&!pi&&!mi&&(ta.TEST_VID.constructor.prototype.canPlayType=function(t){return t&&na.test(t)?"maybe":ia.call(this,t)})},ta.unpatchCanPlayType=function(){var t=ta.TEST_VID.constructor.prototype.canPlayType
return ta.TEST_VID.constructor.prototype.canPlayType=ia,t},ta.patchCanPlayType(),ta.disposeMediaElement=function(t){if(t){for(t.parentNode&&t.parentNode.removeChild(t);t.hasChildNodes();)t.removeChild(t.firstChild)
t.removeAttribute("src"),"function"==typeof t.load&&function(){try{t.load()}catch(t){}}()}},ta.resetMediaElement=function(t){if(t){for(var e=t.querySelectorAll("source"),i=e.length;i--;)t.removeChild(e[i])
t.removeAttribute("src"),"function"==typeof t.load&&function(){try{t.load()}catch(t){}}()}},["muted","defaultMuted","autoplay","controls","loop","playsinline"].forEach(function(t){ta.prototype[t]=function(){return this.el_[t]||this.el_.hasAttribute(t)}}),["muted","defaultMuted","autoplay","loop","playsinline"].forEach(function(t){ta.prototype["set"+Ze(t)]=function(e){this.el_[t]=e,e?this.el_.setAttribute(t,t):this.el_.removeAttribute(t)}}),["paused","currentTime","buffered","volume","poster","preload","error","seeking","seekable","ended","playbackRate","defaultPlaybackRate","played","networkState","readyState","videoWidth","videoHeight"].forEach(function(t){ta.prototype[t]=function(){return this.el_[t]}}),["volume","src","poster","preload","playbackRate","defaultPlaybackRate"].forEach(function(t){ta.prototype["set"+Ze(t)]=function(e){this.el_[t]=e}}),["pause","load","play"].forEach(function(t){ta.prototype[t]=function(){return this.el_[t]()}}),gn.withSourceHandlers(ta),ta.nativeSourceHandler={},ta.nativeSourceHandler.canPlayType=function(t){try{return ta.TEST_VID.canPlayType(t)}catch(t){return""}},ta.nativeSourceHandler.canHandleSource=function(t,e){if(t.type)return ta.nativeSourceHandler.canPlayType(t.type)
if(t.src){var i=en(t.src)
return ta.nativeSourceHandler.canPlayType("video/"+i)}return""},ta.nativeSourceHandler.handleSource=function(t,e,i){e.setSrc(t.src)},ta.nativeSourceHandler.dispose=function(){},ta.registerSourceHandler(ta.nativeSourceHandler),gn.registerTech("Html5",ta)
var ra=At(["\n        Using the tech directly can be dangerous. I hope you know what you're doing.\n        See https://github.com/videojs/video.js/issues/2617 for more info.\n      "],["\n        Using the tech directly can be dangerous. I hope you know what you're doing.\n        See https://github.com/videojs/video.js/issues/2617 for more info.\n      "]),aa=["progress","abort","suspend","emptied","stalled","loadedmetadata","loadeddata","timeupdate","resize","volumechange","texttrackchange"],sa={canplay:"CanPlay",canplaythrough:"CanPlayThrough",playing:"Playing",seeked:"Seeked"},oa=function(t){function e(i,n,r){if(wt(this,e),i.id=i.id||n.id||"vjs_video_"+me(),(n=xt(e.getTagSettings(i),n)).initChildren=!1,n.createEl=!1,n.evented=!1,n.reportTouchActivity=!1,!n.language)if("function"==typeof i.closest){var a=i.closest("[lang]")
a&&a.getAttribute&&(n.language=a.getAttribute("lang"))}else for(var s=i;s&&1===s.nodeType;){if(Kt(s).hasOwnProperty("lang")){n.language=s.getAttribute("lang")
break}s=s.parentNode}var o=Et(this,t.call(this,null,n,r))
if(o.isPosterFromTech_=!1,o.queuedCallbacks_=[],o.isReady_=!1,o.hasStarted_=!1,o.userActive_=!1,!o.options_||!o.options_.techOrder||!o.options_.techOrder.length)throw new Error("No techOrder specified. Did you overwrite videojs.options instead of just changing the properties you want to override?")
if(o.tag=i,o.tagAttributes=i&&Kt(i),o.language(o.options_.language),n.languages){var u={}
Object.getOwnPropertyNames(n.languages).forEach(function(t){u[t.toLowerCase()]=n.languages[t]}),o.languages_=u}else o.languages_=e.prototype.options_.languages
o.cache_={},o.poster_=n.poster||"",o.controls_=!!n.controls,o.cache_.lastVolume=1,i.controls=!1,i.removeAttribute("controls"),i.hasAttribute("autoplay")?o.options_.autoplay=!0:o.autoplay(o.options_.autoplay),o.scrubbing_=!1,o.el_=o.createEl(),o.cache_.lastPlaybackRate=o.defaultPlaybackRate(),Ke(o,{eventBusKey:"el_"})
var l=ti(o.options_)
if(n.plugins){var c=n.plugins
Object.keys(c).forEach(function(t){if("function"!=typeof this[t])throw new Error('plugin "'+t+'" does not exist')
this[t](c[t])},o)}o.options_.playerOptions=l,o.middleware_=[],o.initChildren(),o.isAudio("audio"===i.nodeName.toLowerCase()),o.controls()?o.addClass("vjs-controls-enabled"):o.addClass("vjs-controls-disabled"),o.el_.setAttribute("role","region"),o.isAudio()?o.el_.setAttribute("aria-label",o.localize("Audio Player")):o.el_.setAttribute("aria-label",o.localize("Video Player")),o.isAudio()&&o.addClass("vjs-audio"),o.flexNotSupported_()&&o.addClass("vjs-no-flex"),ui||o.addClass("vjs-workinghover"),e.players[o.id_]=o
var h=yt.split(".")[0]
return o.addClass("vjs-v"+h),o.userActive(!0),o.reportUserActivity(),o.one("play",o.listenForUserActivity_),o.on("fullscreenchange",o.handleFullscreenChange_),o.on("stageclick",o.handleStageClick_),o.changingSrc_=!1,o.playWaitingForReady_=!1,o.playOnLoadstart_=null,o}return Ct(e,t),e.prototype.dispose=function(){this.trigger("dispose"),this.off("dispose"),this.styleEl_&&this.styleEl_.parentNode&&(this.styleEl_.parentNode.removeChild(this.styleEl_),this.styleEl_=null),e.players[this.id_]=null,this.tag&&this.tag.player&&(this.tag.player=null),this.el_&&this.el_.player&&(this.el_.player=null),this.tech_&&(this.tech_.dispose(),this.isPosterFromTech_=!1,this.poster_=""),this.playerElIngest_&&(this.playerElIngest_=null),this.tag&&(this.tag=null),function(t){vn[t.id()]=null}(this),t.prototype.dispose.call(this)},e.prototype.createEl=function(){var e=this.tag,i=void 0,n=this.playerElIngest_=e.parentNode&&e.parentNode.hasAttribute&&e.parentNode.hasAttribute("data-vjs-player"),a="video-js"===this.tag.tagName.toLowerCase()
n?i=this.el_=e.parentNode:a||(i=this.el_=t.prototype.createEl.call(this,"div"))
var o=Kt(e)
if(a){for(i=this.el_=e,e=this.tag=s.a.createElement("video");i.children.length;)e.appendChild(i.firstChild)
Wt(i,"video-js")||Gt(i,"video-js"),i.appendChild(e),n=this.playerElIngest_=i,Object.keys(i).forEach(function(t){e[t]=i[t]})}if(e.setAttribute("tabindex","-1"),yi&&e.setAttribute("role","application"),e.removeAttribute("width"),e.removeAttribute("height"),Object.getOwnPropertyNames(o).forEach(function(t){a&&"class"===t||i.setAttribute(t,o[t]),a&&e.setAttribute(t,o[t])}),e.playerId=e.id,e.id+="_html5_api",e.className="vjs-tech",e.player=i.player=this,this.addClass("vjs-paused"),!0!==r.a.VIDEOJS_NO_DYNAMIC_STYLE){this.styleEl_=Re("vjs-styles-dimensions")
var u=he(".vjs-styles-defaults"),l=he("head")
l.insertBefore(this.styleEl_,u?u.nextSibling:l.firstChild)}this.width(this.options_.width),this.height(this.options_.height),this.fluid(this.options_.fluid),this.aspectRatio(this.options_.aspectRatio)
for(var c=e.getElementsByTagName("a"),h=0;h<c.length;h++){var d=c.item(h)
Gt(d,"vjs-hidden"),d.setAttribute("hidden","hidden")}return e.initNetworkState_=e.networkState,e.parentNode&&!n&&e.parentNode.insertBefore(i,e),zt(e,i),this.children_.unshift(e),this.el_.setAttribute("lang",this.language_),this.el_=i,i},e.prototype.width=function(t){return this.dimension("width",t)},e.prototype.height=function(t){return this.dimension("height",t)},e.prototype.dimension=function(t,e){var i=t+"_"
if(void 0===e)return this[i]||0
if(""===e)return this[i]=void 0,void this.updateStyleEl_()
var n=parseFloat(e)
isNaN(n)?St.error('Improper value "'+e+'" supplied for for '+t):(this[i]=n,this.updateStyleEl_())},e.prototype.fluid=function(t){if(void 0===t)return!!this.fluid_
this.fluid_=!!t,t?this.addClass("vjs-fluid"):this.removeClass("vjs-fluid"),this.updateStyleEl_()},e.prototype.aspectRatio=function(t){if(void 0===t)return this.aspectRatio_
if(!/^\d+\:\d+$/.test(t))throw new Error("Improper value supplied for aspect ratio. The format should be width:height, for example 16:9.")
this.aspectRatio_=t,this.fluid(!0),this.updateStyleEl_()},e.prototype.updateStyleEl_=function(){if(!0!==r.a.VIDEOJS_NO_DYNAMIC_STYLE){var t,e,i,n=(void 0!==this.aspectRatio_&&"auto"!==this.aspectRatio_?this.aspectRatio_:this.videoWidth()>0?this.videoWidth()+":"+this.videoHeight():"16:9").split(":"),a=n[1]/n[0]
t=void 0!==this.width_?this.width_:void 0!==this.height_?this.height_/a:this.videoWidth()||300,e=void 0!==this.height_?this.height_:t*a,i=/^[^a-zA-Z]/.test(this.id())?"dimensions-"+this.id():this.id()+"-dimensions",this.addClass(i),Me(this.styleEl_,"\n      ."+i+" {\n        width: "+t+"px;\n        height: "+e+"px;\n      }\n\n      ."+i+".vjs-fluid {\n        padding-top: "+100*a+"%;\n      }\n    ")}else{var s="number"==typeof this.width_?this.width_:this.options_.width,o="number"==typeof this.height_?this.height_:this.options_.height,u=this.tech_&&this.tech_.el()
u&&(s>=0&&(u.width=s),o>=0&&(u.height=o))}},e.prototype.loadTech_=function(t,e){var i=this
this.tech_&&this.unloadTech_()
var n=Ze(t),r=t.charAt(0).toLowerCase()+t.slice(1)
"Html5"!==n&&this.tag&&(gn.getTech("Html5").disposeMediaElement(this.tag),this.tag.player=null,this.tag=null),this.techName_=n,this.isReady_=!1
var a={source:e,autoplay:"string"!=typeof this.autoplay()&&this.autoplay(),nativeControlsForTouch:this.options_.nativeControlsForTouch,playerId:this.id(),techId:this.id()+"_"+n+"_api",playsinline:this.options_.playsinline,preload:this.options_.preload,loop:this.options_.loop,muted:this.options_.muted,poster:this.poster(),language:this.language(),playerElIngest:this.playerElIngest_||!1,"vtt.js":this.options_["vtt.js"],canOverridePoster:!!this.options_.techCanOverridePoster,enableSourceset:this.options_.enableSourceset}
mn.names.forEach(function(t){var e=mn[t]
a[e.getterName]=i[e.privateName]}),xt(a,this.options_[n]),xt(a,this.options_[r]),xt(a,this.options_[t.toLowerCase()]),this.tag&&(a.tag=this.tag),e&&e.src===this.cache_.src&&this.cache_.currentTime>0&&(a.startTime=this.cache_.currentTime)
var s=gn.getTech(t)
if(!s)throw new Error("No Tech named '"+n+"' exists! '"+n+"' should be registered using videojs.registerTech()'")
this.tech_=new s(a),this.tech_.ready(Be(this,this.handleTechReady_),!0),function(t,e){t.forEach(function(t){var i=e.addRemoteTextTrack(t).track
!t.src&&t.cues&&t.cues.forEach(function(t){return i.addCue(t)})}),e.textTracks()}(this.textTracksJson_||[],this.tech_),aa.forEach(function(t){i.on(i.tech_,t,i["handleTech"+Ze(t)+"_"])}),Object.keys(sa).forEach(function(t){i.on(i.tech_,t,function(e){0===i.tech_.playbackRate()&&i.tech_.seeking()?i.queuedCallbacks_.push({callback:i["handleTech"+sa[t]+"_"].bind(i),event:e}):i["handleTech"+sa[t]+"_"](e)})}),this.on(this.tech_,"loadstart",this.handleTechLoadStart_),this.on(this.tech_,"sourceset",this.handleTechSourceset_),this.on(this.tech_,"waiting",this.handleTechWaiting_),this.on(this.tech_,"ended",this.handleTechEnded_),this.on(this.tech_,"seeking",this.handleTechSeeking_),this.on(this.tech_,"play",this.handleTechPlay_),this.on(this.tech_,"firstplay",this.handleTechFirstPlay_),this.on(this.tech_,"pause",this.handleTechPause_),this.on(this.tech_,"durationchange",this.handleTechDurationChange_),this.on(this.tech_,"fullscreenchange",this.handleTechFullscreenChange_),this.on(this.tech_,"error",this.handleTechError_),this.on(this.tech_,"loadedmetadata",this.updateStyleEl_),this.on(this.tech_,"posterchange",this.handleTechPosterChange_),this.on(this.tech_,"textdata",this.handleTechTextData_),this.on(this.tech_,"ratechange",this.handleTechRateChange_),this.usingNativeControls(this.techGet_("controls")),this.controls()&&!this.usingNativeControls()&&this.addTechControlsListeners_(),this.tech_.el().parentNode===this.el()||"Html5"===n&&this.tag||zt(this.tech_.el(),this.el()),this.tag&&(this.tag.player=null,this.tag=null)},e.prototype.unloadTech_=function(){var t=this
mn.names.forEach(function(e){var i=mn[e]
t[i.privateName]=t[i.getterName]()}),this.textTracksJson_=function(t){var e=t.$$("track"),i=Array.prototype.map.call(e,function(t){return t.track})
return Array.prototype.map.call(e,function(t){var e=Mi(t.track)
return t.src&&(e.src=t.src),e}).concat(Array.prototype.filter.call(t.textTracks(),function(t){return-1===i.indexOf(t)}).map(Mi))}(this.tech_),this.isReady_=!1,this.tech_.dispose(),this.tech_=!1,this.isPosterFromTech_&&(this.poster_="",this.trigger("posterchange")),this.isPosterFromTech_=!1},e.prototype.tech=function(t){return void 0===t&&St.warn(u()(ra)),this.tech_},e.prototype.addTechControlsListeners_=function(){this.removeTechControlsListeners_(),this.on(this.tech_,"mousedown",this.handleTechClick_),this.on(this.tech_,"dblclick",this.handleTechDoubleClick_),this.on(this.tech_,"touchstart",this.handleTechTouchStart_),this.on(this.tech_,"touchmove",this.handleTechTouchMove_),this.on(this.tech_,"touchend",this.handleTechTouchEnd_),this.on(this.tech_,"tap",this.handleTechTap_)},e.prototype.removeTechControlsListeners_=function(){this.off(this.tech_,"tap",this.handleTechTap_),this.off(this.tech_,"touchstart",this.handleTechTouchStart_),this.off(this.tech_,"touchmove",this.handleTechTouchMove_),this.off(this.tech_,"touchend",this.handleTechTouchEnd_),this.off(this.tech_,"mousedown",this.handleTechClick_),this.off(this.tech_,"dblclick",this.handleTechDoubleClick_)},e.prototype.handleTechReady_=function(){this.triggerReady(),this.cache_.volume&&this.techCall_("setVolume",this.cache_.volume),this.handleTechPosterChange_(),this.handleTechDurationChange_()},e.prototype.handleTechLoadStart_=function(){this.removeClass("vjs-ended"),this.removeClass("vjs-seeking"),this.error(null),this.paused()?(this.hasStarted(!1),this.trigger("loadstart")):(this.trigger("loadstart"),this.trigger("firstplay")),this.manualAutoplay_(this.autoplay())},e.prototype.manualAutoplay_=function(t){var e=this
if(this.tech_&&"string"==typeof t){var i=function(){var t=e.muted()
e.muted(!0)
var i=e.play()
if(i&&i.then&&i.catch)return i.catch(function(i){e.muted(t)})},n=void 0
if("any"===t?(n=this.play())&&n.then&&n.catch&&n.catch(function(){return i()}):n="muted"===t?i():this.play(),n&&n.then&&n.catch)return n.then(function(){e.trigger({type:"autoplay-success",autoplay:t})}).catch(function(i){e.trigger({type:"autoplay-failure",autoplay:t})})}},e.prototype.updateSourceCaches_=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",e=t,i=""
if("string"!=typeof e&&(e=t.src,i=t.type),!/^blob:/.test(e)){this.cache_.source=this.cache_.source||{},this.cache_.sources=this.cache_.sources||[],e&&!i&&(i=function(t,e){if(!e)return""
if(t.cache_.source.src===e&&t.cache_.source.type)return t.cache_.source.type
var i=t.cache_.sources.filter(function(t){return t.src===e})
if(i.length)return i[0].type
for(var n=t.$$("source"),r=0;r<n.length;r++){var a=n[r]
if(a.type&&a.src&&a.src===e)return a.type}return En(e)}(this,e)),this.cache_.source=ti({},t,{src:e,type:i})
for(var n=this.cache_.sources.filter(function(t){return t.src&&t.src===e}),r=[],a=this.$$("source"),s=[],o=0;o<a.length;o++){var u=Kt(a[o])
r.push(u),u.src&&u.src===e&&s.push(u.src)}s.length&&!n.length?this.cache_.sources=r:n.length||(this.cache_.sources=[this.cache_.source]),this.cache_.src=e}},e.prototype.handleTechSourceset_=function(t){var e=this
this.changingSrc_||(this.updateSourceCaches_(t.src),t.src)||this.tech_.one(["sourceset","loadstart"],function t(i){"sourceset"!==i.type&&e.updateSourceCaches_(e.techGet_("currentSrc")),e.tech_.off(["sourceset","loadstart"],t)}),this.trigger({src:t.src,type:"sourceset"})},e.prototype.hasStarted=function(t){if(void 0===t)return this.hasStarted_
t!==this.hasStarted_&&(this.hasStarted_=t,this.hasStarted_?(this.addClass("vjs-has-started"),this.trigger("firstplay")):this.removeClass("vjs-has-started"))},e.prototype.handleTechPlay_=function(){this.removeClass("vjs-ended"),this.removeClass("vjs-paused"),this.addClass("vjs-playing"),this.hasStarted(!0),this.trigger("play")},e.prototype.handleTechRateChange_=function(){this.tech_.playbackRate()>0&&0===this.cache_.lastPlaybackRate&&(this.queuedCallbacks_.forEach(function(t){return t.callback(t.event)}),this.queuedCallbacks_=[]),this.cache_.lastPlaybackRate=this.tech_.playbackRate(),this.trigger("ratechange")},e.prototype.handleTechWaiting_=function(){var t=this
this.addClass("vjs-waiting"),this.trigger("waiting"),this.one("timeupdate",function(){return t.removeClass("vjs-waiting")})},e.prototype.handleTechCanPlay_=function(){this.removeClass("vjs-waiting"),this.trigger("canplay")},e.prototype.handleTechCanPlayThrough_=function(){this.removeClass("vjs-waiting"),this.trigger("canplaythrough")},e.prototype.handleTechPlaying_=function(){this.removeClass("vjs-waiting"),this.trigger("playing")},e.prototype.handleTechSeeking_=function(){this.addClass("vjs-seeking"),this.trigger("seeking")},e.prototype.handleTechSeeked_=function(){this.removeClass("vjs-seeking"),this.trigger("seeked")},e.prototype.handleTechFirstPlay_=function(){this.options_.starttime&&(St.warn("Passing the `starttime` option to the player will be deprecated in 6.0"),this.currentTime(this.options_.starttime)),this.addClass("vjs-has-started"),this.trigger("firstplay")},e.prototype.handleTechPause_=function(){this.removeClass("vjs-playing"),this.addClass("vjs-paused"),this.trigger("pause")},e.prototype.handleTechEnded_=function(){this.addClass("vjs-ended"),this.options_.loop?(this.currentTime(0),this.play()):this.paused()||this.pause(),this.trigger("ended")},e.prototype.handleTechDurationChange_=function(){this.duration(this.techGet_("duration"))},e.prototype.handleTechClick_=function(t){ce(t)&&this.controls_&&(this.paused()?Ri(this.play()):this.pause())},e.prototype.handleTechDoubleClick_=function(t){this.controls_&&(Array.prototype.some.call(this.$$(".vjs-control-bar, .vjs-modal-dialog"),function(e){return e.contains(t.target)})||(this.isFullscreen()?this.exitFullscreen():this.requestFullscreen()))},e.prototype.handleTechTap_=function(){this.userActive(!this.userActive())},e.prototype.handleTechTouchStart_=function(){this.userWasActive=this.userActive()},e.prototype.handleTechTouchMove_=function(){this.userWasActive&&this.reportUserActivity()},e.prototype.handleTechTouchEnd_=function(t){t.preventDefault()},e.prototype.handleFullscreenChange_=function(){this.isFullscreen()?this.addClass("vjs-fullscreen"):this.removeClass("vjs-fullscreen")},e.prototype.handleStageClick_=function(){this.reportUserActivity()},e.prototype.handleTechFullscreenChange_=function(t,e){e&&this.isFullscreen(e.isFullscreen),this.trigger("fullscreenchange")},e.prototype.handleTechError_=function(){var t=this.tech_.error()
this.error(t)},e.prototype.handleTechTextData_=function(){var t=null
arguments.length>1&&(t=arguments[1]),this.trigger("textdata",t)},e.prototype.getCache=function(){return this.cache_},e.prototype.techCall_=function(t,e){this.ready(function(){if(t in Sn)return function(t,e,i,n){return e[i](t.reduce(wn(i),n))}(this.middleware_,this.tech_,t,e)
if(t in kn)return bn(this.middleware_,this.tech_,t,e)
try{this.tech_&&this.tech_[t](e)}catch(t){throw St(t),t}},!0)},e.prototype.techGet_=function(t){if(this.tech_&&this.tech_.isReady_){if(t in Tn)return function(t,e,i){return t.reduceRight(wn(i),e[i]())}(this.middleware_,this.tech_,t)
if(t in kn)return bn(this.middleware_,this.tech_,t)
try{return this.tech_[t]()}catch(e){if(void 0===this.tech_[t])throw St("Video.js: "+t+" method not defined for "+this.techName_+" playback technology.",e),e
if("TypeError"===e.name)throw St("Video.js: "+t+" unavailable on "+this.techName_+" playback technology element.",e),this.tech_.isReady_=!1,e
throw St(e),e}}},e.prototype.play=function(){var t=this,e=this.options_.Promise||r.a.Promise
return e?new e(function(e){t.play_(e)}):this.play_()},e.prototype.play_=function(){var t=this,e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Ri
if(this.playOnLoadstart_&&this.off("loadstart",this.playOnLoadstart_),this.isReady_){if(!this.changingSrc_&&(this.src()||this.currentSrc()))return void e(this.techGet_("play"))
this.playOnLoadstart_=function(){t.playOnLoadstart_=null,e(t.play())},this.one("loadstart",this.playOnLoadstart_)}else{if(this.playWaitingForReady_)return
this.playWaitingForReady_=!0,this.ready(function(){t.playWaitingForReady_=!1,e(t.play())})}},e.prototype.pause=function(){this.techCall_("pause")},e.prototype.paused=function(){return!1!==this.techGet_("paused")},e.prototype.played=function(){return this.techGet_("played")||wi(0,0)},e.prototype.scrubbing=function(t){if(void 0===t)return this.scrubbing_
this.scrubbing_=!!t,t?this.addClass("vjs-scrubbing"):this.removeClass("vjs-scrubbing")},e.prototype.currentTime=function(t){return void 0!==t?(t<0&&(t=0),void this.techCall_("setCurrentTime",t)):(this.cache_.currentTime=this.techGet_("currentTime")||0,this.cache_.currentTime)},e.prototype.duration=function(t){if(void 0===t)return void 0!==this.cache_.duration?this.cache_.duration:NaN;(t=parseFloat(t))<0&&(t=1/0),t!==this.cache_.duration&&(this.cache_.duration=t,t===1/0?this.addClass("vjs-live"):this.removeClass("vjs-live"),this.trigger("durationchange"))},e.prototype.remainingTime=function(){return this.duration()-this.currentTime()},e.prototype.remainingTimeDisplay=function(){return Math.floor(this.duration())-Math.floor(this.currentTime())},e.prototype.buffered=function(){var t=this.techGet_("buffered")
return t&&t.length||(t=wi(0,0)),t},e.prototype.bufferedPercent=function(){return Ci(this.buffered(),this.duration())},e.prototype.bufferedEnd=function(){var t=this.buffered(),e=this.duration(),i=t.end(t.length-1)
return i>e&&(i=e),i},e.prototype.volume=function(t){var e=void 0
return void 0!==t?(e=Math.max(0,Math.min(1,parseFloat(t))),this.cache_.volume=e,this.techCall_("setVolume",e),void(e>0&&this.lastVolume_(e))):(e=parseFloat(this.techGet_("volume")),isNaN(e)?1:e)},e.prototype.muted=function(t){if(void 0===t)return this.techGet_("muted")||!1
this.techCall_("setMuted",t)},e.prototype.defaultMuted=function(t){return void 0!==t?this.techCall_("setDefaultMuted",t):this.techGet_("defaultMuted")||!1},e.prototype.lastVolume_=function(t){if(void 0===t||0===t)return this.cache_.lastVolume
this.cache_.lastVolume=t},e.prototype.supportsFullScreen=function(){return this.techGet_("supportsFullScreen")||!1},e.prototype.isFullscreen=function(t){if(void 0===t)return!!this.isFullscreen_
this.isFullscreen_=!!t},e.prototype.requestFullscreen=function(){var t=Ei
this.isFullscreen(!0),t.requestFullscreen?(Ee(s.a,t.fullscreenchange,Be(this,function e(i){this.isFullscreen(s.a[t.fullscreenElement]),!1===this.isFullscreen()&&Ae(s.a,t.fullscreenchange,e),this.trigger("fullscreenchange")})),this.el_[t.requestFullscreen]()):this.tech_.supportsFullScreen()?this.techCall_("enterFullScreen"):(this.enterFullWindow(),this.trigger("fullscreenchange"))},e.prototype.exitFullscreen=function(){var t=Ei
this.isFullscreen(!1),t.requestFullscreen?s.a[t.exitFullscreen]():this.tech_.supportsFullScreen()?this.techCall_("exitFullScreen"):(this.exitFullWindow(),this.trigger("fullscreenchange"))},e.prototype.enterFullWindow=function(){this.isFullWindow=!0,this.docOrigOverflow=s.a.documentElement.style.overflow,Ee(s.a,"keydown",Be(this,this.fullWindowOnEscKey)),s.a.documentElement.style.overflow="hidden",Gt(s.a.body,"vjs-full-window"),this.trigger("enterFullWindow")},e.prototype.fullWindowOnEscKey=function(t){27===t.keyCode&&(!0===this.isFullscreen()?this.exitFullscreen():this.exitFullWindow())},e.prototype.exitFullWindow=function(){this.isFullWindow=!1,Ae(s.a,"keydown",this.fullWindowOnEscKey),s.a.documentElement.style.overflow=this.docOrigOverflow,Xt(s.a.body,"vjs-full-window"),this.trigger("exitFullWindow")},e.prototype.canPlayType=function(t){for(var e=void 0,i=0,n=this.options_.techOrder;i<n.length;i++){var r=n[i],a=gn.getTech(r)
if(a||(a=ei.getComponent(r)),a){if(a.isSupported()&&(e=a.canPlayType(t)))return e}else St.error('The "'+r+'" tech is undefined. Skipped browser support check for that tech.')}return""},e.prototype.selectSource=function(t){var e=this,i=this.options_.techOrder.map(function(t){return[t,gn.getTech(t)]}).filter(function(t){var e=t[0],i=t[1]
return i?i.isSupported():(St.error('The "'+e+'" tech is undefined. Skipped browser support check for that tech.'),!1)}),n=function(t,e,i){var n=void 0
return t.some(function(t){return e.some(function(e){if(n=i(t,e))return!0})}),n},r=function(t,i){var n=t[0]
if(t[1].canPlaySource(i,e.options_[n.toLowerCase()]))return{source:i,tech:n}}
return(this.options_.sourceOrder?n(t,i,function(t){return function(e,i){return t(i,e)}}(r)):n(i,t,r))||!1},e.prototype.src=function(t){var e=this
if(void 0===t)return this.cache_.src||""
var i=function t(e){if(Array.isArray(e)){var i=[]
e.forEach(function(e){e=t(e),Array.isArray(e)?i=i.concat(e):Ut(e)&&i.push(e)}),e=i}else e="string"==typeof e&&e.trim()?[An({src:e})]:Ut(e)&&"string"==typeof e.src&&e.src&&e.src.trim()?[An(e)]:[]
return e}(t)
i.length?(this.changingSrc_=!0,this.cache_.sources=i,this.updateSourceCaches_(i[0]),function(t,e,i){t.setTimeout(function(){return function t(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[],n=arguments[2],r=arguments[3],a=arguments.length>4&&void 0!==arguments[4]?arguments[4]:[],s=arguments.length>5&&void 0!==arguments[5]&&arguments[5],o=i[0],u=i.slice(1)
if("string"==typeof o)t(e,yn[o],n,r,a,s)
else if(o){var l=function(t,e){var i=vn[t.id()],n=null
if(null==i)return n=e(t),vn[t.id()]=[[e,n]],n
for(var r=0;r<i.length;r++){var a=i[r],s=a[0],o=a[1]
s===e&&(n=o)}return null===n&&(n=e(t),i.push([e,n])),n}(r,o)
if(!l.setSource)return a.push(l),t(e,u,n,r,a,s)
l.setSource(xt({},e),function(i,o){if(i)return t(e,u,n,r,a,s)
a.push(l),t(o,e.type===o.type?u:yn[o.type],n,r,a,s)})}else u.length?t(e,u,n,r,a,s):s?n(e,a):t(e,yn["*"],n,r,a,!0)}(e,yn[e.type],i,t)},1)}(this,i[0],function(t,n){if(e.middleware_=n,e.cache_.sources=i,e.updateSourceCaches_(t),e.src_(t))return i.length>1?e.src(i.slice(1)):(e.changingSrc_=!1,e.setTimeout(function(){this.error({code:4,message:this.localize(this.options_.notSupportedMessage)})},0),void e.triggerReady())
!function(t,e){t.forEach(function(t){return t.setTech&&t.setTech(e)})}(n,e.tech_)})):this.setTimeout(function(){this.error({code:4,message:this.localize(this.options_.notSupportedMessage)})},0)},e.prototype.src_=function(t){var e=this,i=this.selectSource([t])
return!i||(function(t,e){return Ze(t)===Ze(e)}(i.tech,this.techName_)?(this.ready(function(){this.tech_.constructor.prototype.hasOwnProperty("setSource")?this.techCall_("setSource",t):this.techCall_("src",t.src),this.changingSrc_=!1},!0),!1):(this.changingSrc_=!0,this.loadTech_(i.tech,i.source),this.tech_.ready(function(){e.changingSrc_=!1}),!1))},e.prototype.load=function(){this.techCall_("load")},e.prototype.reset=function(){this.tech_&&this.tech_.clearTracks("text"),this.loadTech_(this.options_.techOrder[0],null),this.techCall_("reset")},e.prototype.currentSources=function(){var t=this.currentSource(),e=[]
return 0!==Object.keys(t).length&&e.push(t),this.cache_.sources||e},e.prototype.currentSource=function(){return this.cache_.source||{}},e.prototype.currentSrc=function(){return this.currentSource()&&this.currentSource().src||""},e.prototype.currentType=function(){return this.currentSource()&&this.currentSource().type||""},e.prototype.preload=function(t){return void 0!==t?(this.techCall_("setPreload",t),void(this.options_.preload=t)):this.techGet_("preload")},e.prototype.autoplay=function(t){if(void 0===t)return this.options_.autoplay||!1
var e=void 0
"string"==typeof t&&/(any|play|muted)/.test(t)?(this.options_.autoplay=t,this.manualAutoplay_(t),e=!1):this.options_.autoplay=!!t,e=e||this.options_.autoplay,this.tech_&&this.techCall_("setAutoplay",e)},e.prototype.playsinline=function(t){return void 0!==t?(this.techCall_("setPlaysinline",t),this.options_.playsinline=t,this):this.techGet_("playsinline")},e.prototype.loop=function(t){return void 0!==t?(this.techCall_("setLoop",t),void(this.options_.loop=t)):this.techGet_("loop")},e.prototype.poster=function(t){if(void 0===t)return this.poster_
t||(t=""),t!==this.poster_&&(this.poster_=t,this.techCall_("setPoster",t),this.isPosterFromTech_=!1,this.trigger("posterchange"))},e.prototype.handleTechPosterChange_=function(){if((!this.poster_||this.options_.techCanOverridePoster)&&this.tech_&&this.tech_.poster){var t=this.tech_.poster()||""
t!==this.poster_&&(this.poster_=t,this.isPosterFromTech_=!0,this.trigger("posterchange"))}},e.prototype.controls=function(t){if(void 0===t)return!!this.controls_
t=!!t,this.controls_!==t&&(this.controls_=t,this.usingNativeControls()&&this.techCall_("setControls",t),this.controls_?(this.removeClass("vjs-controls-disabled"),this.addClass("vjs-controls-enabled"),this.trigger("controlsenabled"),this.usingNativeControls()||this.addTechControlsListeners_()):(this.removeClass("vjs-controls-enabled"),this.addClass("vjs-controls-disabled"),this.trigger("controlsdisabled"),this.usingNativeControls()||this.removeTechControlsListeners_()))},e.prototype.usingNativeControls=function(t){if(void 0===t)return!!this.usingNativeControls_
t=!!t,this.usingNativeControls_!==t&&(this.usingNativeControls_=t,this.usingNativeControls_?(this.addClass("vjs-using-native-controls"),this.trigger("usingnativecontrols")):(this.removeClass("vjs-using-native-controls"),this.trigger("usingcustomcontrols")))},e.prototype.error=function(t){return void 0===t?this.error_||null:null===t?(this.error_=t,this.removeClass("vjs-error"),void(this.errorDisplay&&this.errorDisplay.close())):(this.error_=new Ui(t),this.addClass("vjs-error"),St.error("(CODE:"+this.error_.code+" "+Ui.errorTypes[this.error_.code]+")",this.error_.message,this.error_),void this.trigger("error"))},e.prototype.reportUserActivity=function(t){this.userActivity_=!0},e.prototype.userActive=function(t){if(void 0===t)return this.userActive_
if((t=!!t)!==this.userActive_){if(this.userActive_=t,this.userActive_)return this.userActivity_=!0,this.removeClass("vjs-user-inactive"),this.addClass("vjs-user-active"),void this.trigger("useractive")
this.tech_&&this.tech_.one("mousemove",function(t){t.stopPropagation(),t.preventDefault()}),this.userActivity_=!1,this.removeClass("vjs-user-active"),this.addClass("vjs-user-inactive"),this.trigger("userinactive")}},e.prototype.listenForUserActivity_=function(){var t=void 0,e=void 0,i=void 0,n=Be(this,this.reportUserActivity)
this.on("mousedown",function(){n(),this.clearInterval(t),t=this.setInterval(n,250)}),this.on("mousemove",function(t){t.screenX===e&&t.screenY===i||(e=t.screenX,i=t.screenY,n())}),this.on("mouseup",function(e){n(),this.clearInterval(t)}),this.on("keydown",n),this.on("keyup",n)
var r=void 0
this.setInterval(function(){if(this.userActivity_){this.userActivity_=!1,this.userActive(!0),this.clearTimeout(r)
var t=this.options_.inactivityTimeout
t<=0||(r=this.setTimeout(function(){this.userActivity_||this.userActive(!1)},t))}},250)},e.prototype.playbackRate=function(t){if(void 0===t)return this.tech_&&this.tech_.featuresPlaybackRate?this.cache_.lastPlaybackRate||this.techGet_("playbackRate"):1
this.techCall_("setPlaybackRate",t)},e.prototype.defaultPlaybackRate=function(t){return void 0!==t?this.techCall_("setDefaultPlaybackRate",t):this.tech_&&this.tech_.featuresPlaybackRate?this.techGet_("defaultPlaybackRate"):1},e.prototype.isAudio=function(t){if(void 0===t)return!!this.isAudio_
this.isAudio_=!!t},e.prototype.addTextTrack=function(t,e,i){if(this.tech_)return this.tech_.addTextTrack(t,e,i)},e.prototype.addRemoteTextTrack=function(t,e){if(this.tech_)return this.tech_.addRemoteTextTrack(t,e)},e.prototype.removeRemoteTextTrack=function(){var t=(arguments.length>0&&void 0!==arguments[0]?arguments[0]:{}).track,e=void 0===t?arguments[0]:t
if(this.tech_)return this.tech_.removeRemoteTextTrack(e)},e.prototype.getVideoPlaybackQuality=function(){return this.techGet_("getVideoPlaybackQuality")},e.prototype.videoWidth=function(){return this.tech_&&this.tech_.videoWidth&&this.tech_.videoWidth()||0},e.prototype.videoHeight=function(){return this.tech_&&this.tech_.videoHeight&&this.tech_.videoHeight()||0},e.prototype.language=function(t){if(void 0===t)return this.language_
this.language_=String(t).toLowerCase()},e.prototype.languages=function(){return ti(e.prototype.options_.languages,this.languages_)},e.prototype.toJSON=function(){var t=ti(this.options_),e=t.tracks
t.tracks=[]
for(var i=0;i<e.length;i++){var n=e[i];(n=ti(n)).player=void 0,t.tracks[i]=n}return t},e.prototype.createModal=function(t,e){var i=this;(e=e||{}).content=t||""
var n=new Ni(this,e)
return this.addChild(n),n.on("dispose",function(){i.removeChild(n)}),n.open(),n},e.getTagSettings=function(t){var e={sources:[],tracks:[]},i=Kt(t),n=i["data-setup"]
if(Wt(t,"vjs-fluid")&&(i.fluid=!0),null!==n){var r=f()(n||"{}"),a=r[0],s=r[1]
a&&St.error(a),xt(i,s)}if(xt(e,i),t.hasChildNodes())for(var o=t.childNodes,u=0,l=o.length;u<l;u++){var c=o[u],h=c.nodeName.toLowerCase()
"source"===h?e.sources.push(Kt(c)):"track"===h&&e.tracks.push(Kt(c))}return e},e.prototype.flexNotSupported_=function(){var t=s.a.createElement("i")
return!("flexBasis"in t.style||"webkitFlexBasis"in t.style||"mozFlexBasis"in t.style||"msFlexBasis"in t.style||"msFlexOrder"in t.style)},e}(ei)
mn.names.forEach(function(t){var e=mn[t]
oa.prototype[e.getterName]=function(){return this.tech_?this.tech_[e.getterName]():(this[e.privateName]=this[e.privateName]||new e.ListClass,this[e.privateName])}}),oa.players={}
var ua=r.a.navigator
oa.prototype.options_={techOrder:gn.defaultTechOrder_,html5:{},flash:{},inactivityTimeout:2e3,playbackRates:[],children:["mediaLoader","posterImage","textTrackDisplay","loadingSpinner","bigPlayButton","controlBar","errorDisplay","textTrackSettings","resizeManager"],language:ua&&(ua.languages&&ua.languages[0]||ua.userLanguage||ua.language)||"en",languages:{},notSupportedMessage:"No compatible source was found for this media."},["ended","seeking","seekable","networkState","readyState"].forEach(function(t){oa.prototype[t]=function(){return this.techGet_(t)}}),aa.forEach(function(t){oa.prototype["handleTech"+Ze(t)+"_"]=function(){return this.trigger(t)}}),ei.registerComponent("Player",oa)
var la={},ca=function(t){return la.hasOwnProperty(t)},ha=function(t){return ca(t)?la[t]:void 0},da=function(t,e){t.activePlugins_=t.activePlugins_||{},t.activePlugins_[e]=!0},pa=function(t,e,i){var n=(i?"before":"")+"pluginsetup"
t.trigger(n,e),t.trigger(n+":"+e.name,e)},fa=function(t,e){return e.prototype.name=t,function(){pa(this,{name:t,plugin:e,instance:null},!0)
for(var i=arguments.length,n=Array(i),r=0;r<i;r++)n[r]=arguments[r]
var a=new(Function.prototype.bind.apply(e,[null].concat([this].concat(n))))
return this[t]=function(){return a},pa(this,a.getEventHash()),a}},ma=function(){function t(e){if(wt(this,t),this.constructor===t)throw new Error("Plugin must be sub-classed; not directly instantiated.")
this.player=e,Ke(this),delete this.trigger,Qe(this,this.constructor.defaultState),da(e,this.name),this.dispose=Be(this,this.dispose),e.on("dispose",this.dispose)}return t.prototype.version=function(){return this.constructor.VERSION},t.prototype.getEventHash=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{}
return t.name=this.name,t.plugin=this.constructor,t.instance=this,t},t.prototype.trigger=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{}
return Le(this.eventBusEl_,t,this.getEventHash(e))},t.prototype.handleStateChanged=function(t){},t.prototype.dispose=function(){var t=this.name,e=this.player
this.trigger("dispose"),this.off(),e.off("dispose",this.dispose),e.activePlugins_[t]=!1,this.player=this.state=null,e[t]=fa(t,la[t])},t.isBasic=function(e){var i="string"==typeof e?ha(e):e
return"function"==typeof i&&!t.prototype.isPrototypeOf(i.prototype)},t.registerPlugin=function(e,i){if("string"!=typeof e)throw new Error('Illegal plugin name, "'+e+'", must be a string, was '+(void 0===e?"undefined":kt(e))+".")
if(ca(e))St.warn('A plugin named "'+e+'" already exists. You may want to avoid re-registering plugins!')
else if(oa.prototype.hasOwnProperty(e))throw new Error('Illegal plugin name, "'+e+'", cannot share a name with an existing player method!')
if("function"!=typeof i)throw new Error('Illegal plugin for "'+e+'", must be a function, was '+(void 0===i?"undefined":kt(i))+".")
return la[e]=i,"plugin"!==e&&(t.isBasic(i)?oa.prototype[e]=function(t,e){var i=function(){pa(this,{name:t,plugin:e,instance:null},!0)
var i=e.apply(this,arguments)
return da(this,t),pa(this,{name:t,plugin:e,instance:i}),i}
return Object.keys(e).forEach(function(t){i[t]=e[t]}),i}(e,i):oa.prototype[e]=fa(e,i)),i},t.deregisterPlugin=function(t){if("plugin"===t)throw new Error("Cannot de-register base plugin.")
ca(t)&&(delete la[t],delete oa.prototype[t])},t.getPlugins=function(){var t=void 0
return(arguments.length>0&&void 0!==arguments[0]?arguments[0]:Object.keys(la)).forEach(function(e){var i=ha(e)
i&&((t=t||{})[e]=i)}),t},t.getPluginVersion=function(t){var e=ha(t)
return e&&e.VERSION||""},t}()
ma.getPlugin=ha,ma.BASE_PLUGIN_NAME="plugin",ma.registerPlugin("plugin",ma),oa.prototype.usingPlugin=function(t){return!!this.activePlugins_&&!0===this.activePlugins_[t]},oa.prototype.hasPlugin=function(t){return!!ca(t)}
var ga=function(t){return 0===t.indexOf("#")?t.slice(1):t}
function ya(t,e,i){var n=ya.getPlayer(t)
if(n)return e&&St.warn('Player "'+t+'" is already initialised. Options will not be applied.'),i&&n.ready(i),n
var r="string"==typeof t?he("#"+ga(t)):t
if(!jt(r))throw new TypeError("The element or ID supplied is not valid. (videojs)")
s.a.body.contains(r)||St.warn("The element supplied is not included in the DOM"),e=e||{},ya.hooks("beforesetup").forEach(function(t){var i=t(r,ti(e))
Ut(i)&&!Array.isArray(i)?e=ti(e,i):St.error("please return an object in beforesetup hooks")})
var a=ei.getComponent("Player")
return n=new a(r,e,i),ya.hooks("setup").forEach(function(t){return t(n)}),n}if(ya.hooks_={},ya.hooks=function(t,e){return ya.hooks_[t]=ya.hooks_[t]||[],e&&(ya.hooks_[t]=ya.hooks_[t].concat(e)),ya.hooks_[t]},ya.hook=function(t,e){ya.hooks(t,e)},ya.hookOnce=function(t,e){ya.hooks(t,[].concat(e).map(function(e){return function i(){return ya.removeHook(t,i),e.apply(void 0,arguments)}}))},ya.removeHook=function(t,e){var i=ya.hooks(t).indexOf(e)
return!(i<=-1||(ya.hooks_[t]=ya.hooks_[t].slice(),ya.hooks_[t].splice(i,1),0))},!0!==r.a.VIDEOJS_NO_DYNAMIC_STYLE&&Nt()){var va=he(".vjs-styles-defaults")
if(!va){va=Re("vjs-styles-defaults")
var _a=he("head")
_a&&_a.insertBefore(va,_a.firstChild),Me(va,"\n      .video-js {\n        width: 300px;\n        height: 150px;\n      }\n\n      .vjs-fluid {\n        padding-top: 56.25%\n      }\n    ")}}De(1,ya),ya.VERSION=yt,ya.options=oa.prototype.options_,ya.getPlayers=function(){return oa.players},ya.getPlayer=function(t){var e=oa.players,i=void 0
if("string"==typeof t){var n=ga(t),r=e[n]
if(r)return r
i=he("#"+n)}else i=t
if(jt(i)){var a=i,s=a.player,o=a.playerId
if(s||e[o])return s||e[o]}},ya.getAllPlayers=function(){return Object.keys(oa.players).map(function(t){return oa.players[t]}).filter(Boolean)},ya.players=oa.players,ya.getComponent=ei.getComponent,ya.registerComponent=function(t,e){gn.isTech(e)&&St.warn("The "+t+" tech was registered as a component. It should instead be registered using videojs.registerTech(name, tech)"),ei.registerComponent.call(ei,t,e)},ya.getTech=gn.getTech,ya.registerTech=gn.registerTech,ya.use=function(t,e){yn[t]=yn[t]||[],yn[t].push(e)},Object.defineProperty(ya,"middleware",{value:{},writeable:!1,enumerable:!0}),Object.defineProperty(ya.middleware,"TERMINATOR",{value:_n,writeable:!1,enumerable:!0}),ya.browser=Ti,ya.TOUCH_ENABLED=bi,ya.extend=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},i=function(){t.apply(this,arguments)},n={}
for(var r in"object"===(void 0===e?"undefined":kt(e))?(e.constructor!==Object.prototype.constructor&&(i=e.constructor),n=e):"function"==typeof e&&(i=e),function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+(void 0===e?"undefined":kt(e)))
t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(t.super_=e)}(i,t),n)n.hasOwnProperty(r)&&(i.prototype[r]=n[r])
return i},ya.mergeOptions=ti,ya.bind=Be,ya.registerPlugin=ma.registerPlugin,ya.deregisterPlugin=ma.deregisterPlugin,ya.plugin=function(t,e){return St.warn("videojs.plugin() is deprecated; use videojs.registerPlugin() instead"),ma.registerPlugin(t,e)},ya.getPlugins=ma.getPlugins,ya.getPlugin=ma.getPlugin,ya.getPluginVersion=ma.getPluginVersion,ya.addLanguage=function(t,e){var i
return t=(""+t).toLowerCase(),ya.options.languages=ti(ya.options.languages,((i={})[t]=e,i)),ya.options.languages[t]},ya.log=St,ya.createTimeRange=ya.createTimeRanges=wi,ya.formatTime=Hn,ya.setFormatTime=function(t){Vn=t},ya.resetFormatTime=function(){Vn=Fn},ya.parseUrl=Zi,ya.isCrossOrigin=nn,ya.EventTarget=Fe,ya.on=Ee,ya.one=Oe,ya.off=Ae,ya.trigger=Le,ya.xhr=c.a,ya.TextTrack=on,ya.AudioTrack=un,ya.VideoTrack=ln,["isEl","isTextNode","createEl","hasClass","addClass","removeClass","toggleClass","setAttributes","getAttributes","emptyEl","appendContent","insertContent"].forEach(function(t){ya[t]=function(){return St.warn("videojs."+t+"() is deprecated; use videojs.dom."+t+"() instead"),pe[t].apply(null,arguments)}}),ya.computedStyle=Dt,ya.dom=pe,ya.url=rn
var ba=function(t,e){return/^[a-z]+:/i.test(e)?e:(/\/\//i.test(t)||(t=g.a.buildAbsoluteURL(r.a.location.href,t)),g.a.buildAbsoluteURL(t,e))},Ta=function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")},Sa=function(){function t(t,e){for(var i=0;i<e.length;i++){var n=e[i]
n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}return function(e,i,n){return i&&t(e.prototype,i),n&&t(e,n),e}}(),ka=function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+(void 0===e?"undefined":kt(e)))
t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)},wa=function(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called")
return!e||"object"!==(void 0===e?"undefined":kt(e))&&"function"!=typeof e?t:e},Ca=function(t,e){if(Array.isArray(t))return t
if(Symbol.iterator in Object(t))return function(t,e){var i=[],n=!0,r=!1,a=void 0
try{for(var s,o=t[Symbol.iterator]();!(n=(s=o.next()).done)&&(i.push(s.value),!e||i.length!==e);n=!0);}catch(t){r=!0,a=t}finally{try{!n&&o.return&&o.return()}finally{if(r)throw a}}return i}(t,e)
throw new TypeError("Invalid attempt to destructure non-iterable instance")},Ea=ya.mergeOptions,Aa=ya.EventTarget,La=ya.log,Oa=function(t,e){["AUDIO","SUBTITLES"].forEach(function(i){for(var n in t.mediaGroups[i])for(var r in t.mediaGroups[i][n]){var a=t.mediaGroups[i][n][r]
e(a,i,n,r)}})},Pa=function(t,e){var i=Ea(t,{}),n=i.playlists[e.uri]
if(!n)return null
if(n.segments&&e.segments&&n.segments.length===e.segments.length&&n.mediaSequence===e.mediaSequence)return null
var r=Ea(n,e)
n.segments&&(r.segments=function(t,e,i){var n=e.slice()
i=i||0
for(var r=Math.min(t.length,e.length+i),a=i;a<r;a++)n[a-i]=Ea(t[a],n[a-i])
return n}(n.segments,e.segments,e.mediaSequence-n.mediaSequence)),r.segments.forEach(function(t){!function(t,e){t.resolvedUri||(t.resolvedUri=ba(e,t.uri)),t.key&&!t.key.resolvedUri&&(t.key.resolvedUri=ba(e,t.key.uri)),t.map&&!t.map.resolvedUri&&(t.map.resolvedUri=ba(e,t.map.uri))}(t,r.resolvedUri)})
for(var a=0;a<i.playlists.length;a++)i.playlists[a].uri===e.uri&&(i.playlists[a]=r)
return i.playlists[e.uri]=r,i},xa=function(t){for(var e=t.playlists.length;e--;){var i=t.playlists[e]
t.playlists[i.uri]=i,i.resolvedUri=ba(t.uri,i.uri),i.id=e,i.attributes||(i.attributes={},La.warn("Invalid playlist STREAM-INF detected. Missing BANDWIDTH attribute."))}},Ua=function(t){Oa(t,function(e){e.uri&&(e.resolvedUri=ba(t.uri,e.uri))})},Ia=function(t,e){var i=t.segments[t.segments.length-1]
return e&&i&&i.duration?1e3*i.duration:500*(t.targetDuration||10)},Da=function(t){function e(t,i,n){Ta(this,e)
var r=wa(this,(e.__proto__||Object.getPrototypeOf(e)).call(this))
if(r.srcUrl=t,r.hls_=i,r.withCredentials=n,!r.srcUrl)throw new Error("A non-empty playlist URL is required")
return r.state="HAVE_NOTHING",r.on("mediaupdatetimeout",function(){"HAVE_METADATA"===r.state&&(r.state="HAVE_CURRENT_METADATA",r.request=r.hls_.xhr({uri:ba(r.master.uri,r.media().uri),withCredentials:r.withCredentials},function(t,e){if(r.request)return t?r.playlistRequestError(r.request,r.media().uri,"HAVE_METADATA"):void r.haveMetadata(r.request,r.media().uri)}))}),r}return ka(e,Aa),Sa(e,[{key:"playlistRequestError",value:function(t,e,i){this.request=null,i&&(this.state=i),this.error={playlist:this.master.playlists[e],status:t.status,message:"HLS playlist request error at URL: "+e,responseText:t.responseText,code:t.status>=500?4:2},this.trigger("error")}},{key:"haveMetadata",value:function(t,e){var i=this
this.request=null,this.state="HAVE_METADATA"
var n=new C
n.push(t.responseText),n.end(),n.manifest.uri=e,n.manifest.attributes=n.manifest.attributes||{}
var a=Pa(this.master,n.manifest)
this.targetDuration=n.manifest.targetDuration,a?(this.master=a,this.media_=this.master.playlists[n.manifest.uri]):this.trigger("playlistunchanged"),this.media().endList||(r.a.clearTimeout(this.mediaUpdateTimeout),this.mediaUpdateTimeout=r.a.setTimeout(function(){i.trigger("mediaupdatetimeout")},Ia(this.media(),!!a))),this.trigger("loadedplaylist")}},{key:"dispose",value:function(){this.stopRequest(),r.a.clearTimeout(this.mediaUpdateTimeout)}},{key:"stopRequest",value:function(){if(this.request){var t=this.request
this.request=null,t.onreadystatechange=null,t.abort()}}},{key:"media",value:function(t){var e=this
if(!t)return this.media_
if("HAVE_NOTHING"===this.state)throw new Error("Cannot switch media playlist from "+this.state)
var i=this.state
if("string"==typeof t){if(!this.master.playlists[t])throw new Error("Unknown playlist URI: "+t)
t=this.master.playlists[t]}var n=!this.media_||t.uri!==this.media_.uri
if(this.master.playlists[t.uri].endList)return this.request&&(this.request.onreadystatechange=null,this.request.abort(),this.request=null),this.state="HAVE_METADATA",this.media_=t,void(n&&(this.trigger("mediachanging"),this.trigger("mediachange")))
if(n){if(this.state="SWITCHING_MEDIA",this.request){if(ba(this.master.uri,t.uri)===this.request.url)return
this.request.onreadystatechange=null,this.request.abort(),this.request=null}this.media_&&this.trigger("mediachanging"),this.request=this.hls_.xhr({uri:ba(this.master.uri,t.uri),withCredentials:this.withCredentials},function(n,r){if(e.request){if(n)return e.playlistRequestError(e.request,t.uri,i)
e.haveMetadata(r,t.uri),"HAVE_MASTER"===i?e.trigger("loadedmetadata"):e.trigger("mediachange")}})}}},{key:"pause",value:function(){this.stopRequest(),r.a.clearTimeout(this.mediaUpdateTimeout),"HAVE_NOTHING"===this.state&&(this.started=!1),"SWITCHING_MEDIA"===this.state?this.media_?this.state="HAVE_METADATA":this.state="HAVE_MASTER":"HAVE_CURRENT_METADATA"===this.state&&(this.state="HAVE_METADATA")}},{key:"load",value:function(t){var e=this
r.a.clearTimeout(this.mediaUpdateTimeout)
var i=this.media()
if(t){var n=i?i.targetDuration/2*1e3:5e3
this.mediaUpdateTimeout=r.a.setTimeout(function(){return e.load()},n)}else this.started?i&&!i.endList?this.trigger("mediaupdatetimeout"):this.trigger("loadedplaylist"):this.start()}},{key:"start",value:function(){var t=this
this.started=!0,this.request=this.hls_.xhr({uri:this.srcUrl,withCredentials:this.withCredentials},function(e,i){if(t.request){if(t.request=null,e)return t.error={status:i.status,message:"HLS playlist request error at URL: "+t.srcUrl,responseText:i.responseText,code:2},"HAVE_NOTHING"===t.state&&(t.started=!1),t.trigger("error")
var n=new C
return n.push(i.responseText),n.end(),t.state="HAVE_MASTER",n.manifest.uri=t.srcUrl,n.manifest.playlists?(t.master=n.manifest,xa(t.master),Ua(t.master),t.trigger("loadedplaylist"),void(t.request||t.media(n.manifest.playlists[0]))):(t.master={mediaGroups:{AUDIO:{},VIDEO:{},"CLOSED-CAPTIONS":{},SUBTITLES:{}},uri:r.a.location.href,playlists:[{uri:t.srcUrl,id:0}]},t.master.playlists[t.srcUrl]=t.master.playlists[0],t.master.playlists[0].resolvedUri=t.srcUrl,t.master.playlists[0].attributes=t.master.playlists[0].attributes||{},t.haveMetadata(i,t.srcUrl),t.trigger("loadedmetadata"))}})}}]),e}(),Ra=ya.createTimeRange,Ma=function(t,e,i){var n,r
return void 0===e&&(e=t.mediaSequence+t.segments.length),e<t.mediaSequence?0:(n=function(t,e){var i=0,n=e-t.mediaSequence,r=t.segments[n]
if(r){if(void 0!==r.start)return{result:r.start,precise:!0}
if(void 0!==r.end)return{result:r.end-r.duration,precise:!0}}for(;n--;){if(void 0!==(r=t.segments[n]).end)return{result:i+r.end,precise:!0}
if(i+=r.duration,void 0!==r.start)return{result:i+r.start,precise:!0}}return{result:i,precise:!1}}(t,e)).precise?n.result:(r=function(t,e){for(var i=0,n=void 0,r=e-t.mediaSequence;r<t.segments.length;r++){if(void 0!==(n=t.segments[r]).start)return{result:n.start-i,precise:!0}
if(i+=n.duration,void 0!==n.end)return{result:n.end-i,precise:!0}}return{result:-1,precise:!1}}(t,e)).precise?r.result:n.result+i},Ba=function(t,e,i){if(!t)return 0
if("number"!=typeof i&&(i=0),void 0===e){if(t.totalDuration)return t.totalDuration
if(!t.endList)return r.a.Infinity}return Ma(t,e,i)},Na=function(t,e,i){var n=0
if(e>i){var r=[i,e]
e=r[0],i=r[1]}if(e<0){for(var a=e;a<Math.min(0,i);a++)n+=t.targetDuration
e=0}for(var s=e;s<i;s++)n+=t.segments[s].duration
return n},ja=function(t){if(!t.segments.length)return 0
for(var e=t.segments.length-1,i=t.segments[e].duration||t.targetDuration,n=i+2*t.targetDuration;e--&&!((i+=t.segments[e].duration)>=n););return Math.max(0,e)},Fa=function(t,e,i){if(!t||!t.segments)return null
if(t.endList)return Ba(t)
if(null===e)return null
e=e||0
var n=i?ja(t):t.segments.length
return Ma(t,t.mediaSequence+n,e)},Va=function(t){return t-Math.floor(t)==0},Ha=function(t,e){if(Va(e))return e+.1*t
for(var i=e.toString().split(".")[1].length,n=1;n<=i;n++){var r=Math.pow(10,n),a=e*r
if(Va(a)||n===i)return(a+t)/r}},qa=Ha.bind(null,1),za=Ha.bind(null,-1),Wa=function(t){return t.excludeUntil&&t.excludeUntil>Date.now()},Ga=function(t){return t.excludeUntil&&t.excludeUntil===1/0},Xa=function(t){var e=Wa(t)
return!t.disabled&&!e},Ya=function(t,e){return e.attributes&&e.attributes[t]},$a=function(t,e){if(1===t.playlists.length)return!0
var i=e.attributes.BANDWIDTH||Number.MAX_VALUE
return 0===t.playlists.filter(function(t){return!!Xa(t)&&(t.attributes.BANDWIDTH||0)<i}).length},Ka={duration:Ba,seekable:function(t,e){var i=e||0,n=Fa(t,e,!0)
return null===n?Ra():Ra(i,n)},safeLiveIndex:ja,getMediaInfoForTime:function(t,e,i,n){var r=void 0,a=void 0,s=t.segments.length,o=e-n
if(o<0){if(i>0)for(r=i-1;r>=0;r--)if(a=t.segments[r],(o+=za(a.duration))>0)return{mediaIndex:r,startTime:n-Na(t,i,r)}
return{mediaIndex:0,startTime:e}}if(i<0){for(r=i;r<0;r++)if((o-=t.targetDuration)<0)return{mediaIndex:0,startTime:e}
i=0}for(r=i;r<s;r++)if(a=t.segments[r],(o-=qa(a.duration))<0)return{mediaIndex:r,startTime:n+Na(t,i,r)}
return{mediaIndex:s-1,startTime:e}},isEnabled:Xa,isDisabled:function(t){return t.disabled},isBlacklisted:Wa,isIncompatible:Ga,playlistEnd:Fa,isAes:function(t){for(var e=0;e<t.segments.length;e++)if(t.segments[e].key)return!0
return!1},isFmp4:function(t){for(var e=0;e<t.segments.length;e++)if(t.segments[e].map)return!0
return!1},hasAttribute:Ya,estimateSegmentRequestTime:function(t,e,i){var n=arguments.length>3&&void 0!==arguments[3]?arguments[3]:0
return Ya("BANDWIDTH",i)?(t*i.attributes.BANDWIDTH-8*n)/e:NaN},isLowestEnabledRendition:$a},Ja=ya.xhr,Qa=ya.mergeOptions,Za=function(){return function t(e,i){e=Qa({timeout:45e3},e)
var n=t.beforeRequest||ya.Hls.xhr.beforeRequest
if(n&&"function"==typeof n){var r=n(e)
r&&(e=r)}var a=Ja(e,function(t,e){var n=a.response
!t&&n&&(a.responseTime=Date.now(),a.roundTripTime=a.responseTime-a.requestTime,a.bytesReceived=n.byteLength||n.length,a.bandwidth||(a.bandwidth=Math.floor(a.bytesReceived/a.roundTripTime*8*1e3))),e.headers&&(a.responseHeaders=e.headers),t&&"ETIMEDOUT"===t.code&&(a.timedout=!0),t||a.aborted||200===e.statusCode||206===e.statusCode||0===e.statusCode||(t=new Error("XHR Failed with a response of: "+(a&&(n||a.responseText)))),i(t,a)}),s=a.abort
return a.abort=function(){return a.aborted=!0,s.apply(a,arguments)},a.uri=e.uri,a.requestTime=Date.now(),a}},ts=function(t,e){return t.start(e)+"-"+t.end(e)},es=function(t,e){var i=t.toString(16)
return"00".substring(0,2-i.length)+i+(e%2?" ":"")},is=function(t){return t>=32&&t<126?String.fromCharCode(t):"."},ns=function(t){var e={}
return Object.keys(t).forEach(function(i){var n=t[i]
ArrayBuffer.isView(n)?e[i]={bytes:n.buffer,byteOffset:n.byteOffset,byteLength:n.byteLength}:e[i]=n}),e},rs=function(t){var e=t.byterange||{length:1/0,offset:0}
return[e.length,e.offset,t.resolvedUri].join(",")},as=function(t){for(var e=Array.prototype.slice.call(t),i="",n=0;n<e.length/16;n++)i+=e.slice(16*n,16*n+16).map(es).join("")+" "+e.slice(16*n,16*n+16).map(is).join("")+"\n"
return i},ss=Object.freeze({createTransferableMessage:ns,initSegmentId:rs,hexDump:as,tagDump:function(t){var e=t.bytes
return as(e)},textRanges:function(t){var e="",i=void 0
for(i=0;i<t.length;i++)e+=ts(t,i)+" "
return e}}),os=function(t,e){var i=[],n=void 0
if(t&&t.length)for(n=0;n<t.length;n++)e(t.start(n),t.end(n))&&i.push([t.start(n),t.end(n)])
return ya.createTimeRanges(i)},us=function(t,e){return os(t,function(t,i){return t-1/30<=e&&i+1/30>=e})},ls=function(t,e){return os(t,function(t){return t-1/30>=e})},cs=function(t){var e=[]
if(!t||!t.length)return""
for(var i=0;i<t.length;i++)e.push(t.start(i)+" => "+t.end(i))
return e.join(", ")},hs=function(t){for(var e=[],i=0;i<t.length;i++)e.push({start:t.start(i),end:t.end(i)})
return e},ds=function(t,e,i){var n=void 0,r=void 0
if(i&&i.cues)for(n=i.cues.length;n--;)(r=i.cues[n]).startTime<=e&&r.endTime>=t&&i.removeCue(r)},ps=function(t){return isNaN(t)||Math.abs(t)===1/0?Number.MAX_VALUE:t},fs="undefined"!=typeof window?window:{},ms="undefined"==typeof Symbol?"__target":Symbol(),gs="application/javascript",ys=fs.BlobBuilder||fs.WebKitBlobBuilder||fs.MozBlobBuilder||fs.MSBlobBuilder,vs=fs.URL||fs.webkitURL||vs&&vs.msURL,_s=fs.Worker
function bs(t,e){return function(i){var n=this
if(!e)return new _s(t)
if(_s&&!i){var r=ws(e.toString().replace(/^function.+?{/,"").slice(0,-1))
return this[ms]=new _s(r),function(t,e){if(t&&e){var i=t.terminate
t.objURL=e,t.terminate=function(){t.objURL&&vs.revokeObjectURL(t.objURL),i.call(t)}}}(this[ms],r),this[ms]}var a={postMessage:function(t){n.onmessage&&setTimeout(function(){n.onmessage({data:t,target:a})})}}
e.call(a),this.postMessage=function(t){setTimeout(function(){a.onmessage({data:t,target:n})})},this.isThisThread=!0}}if(_s){var Ts,Ss=ws("self.onmessage = function () {}"),ks=new Uint8Array(1)
try{(Ts=new _s(Ss)).postMessage(ks,[ks.buffer])}catch(t){_s=null}finally{vs.revokeObjectURL(Ss),Ts&&Ts.terminate()}}function ws(t){try{return vs.createObjectURL(new Blob([t],{type:gs}))}catch(i){var e=new ys
return e.append(t),vs.createObjectURL(e.getBlob(type))}}var Cs=new bs("./transmuxer-worker.worker.js",function(t,e){var i=this
!function(){var t,e,n,r,a,s,o,u,l,c,h,d,p,f,m,g,y,v,_,b,T,S,k,w,C,E,A,L,O,P,x,U,I,D,R,M,B=Math.pow(2,32)-1
!function(){var t
if(k={avc1:[],avcC:[],btrt:[],dinf:[],dref:[],esds:[],ftyp:[],hdlr:[],mdat:[],mdhd:[],mdia:[],mfhd:[],minf:[],moof:[],moov:[],mp4a:[],mvex:[],mvhd:[],sdtp:[],smhd:[],stbl:[],stco:[],stsc:[],stsd:[],stsz:[],stts:[],styp:[],tfdt:[],tfhd:[],traf:[],trak:[],trun:[],trex:[],tkhd:[],vmhd:[]},"undefined"!=typeof Uint8Array){for(t in k)k.hasOwnProperty(t)&&(k[t]=[t.charCodeAt(0),t.charCodeAt(1),t.charCodeAt(2),t.charCodeAt(3)])
w=new Uint8Array(["i".charCodeAt(0),"s".charCodeAt(0),"o".charCodeAt(0),"m".charCodeAt(0)]),E=new Uint8Array(["a".charCodeAt(0),"v".charCodeAt(0),"c".charCodeAt(0),"1".charCodeAt(0)]),C=new Uint8Array([0,0,0,1]),A=new Uint8Array([0,0,0,0,0,0,0,0,118,105,100,101,0,0,0,0,0,0,0,0,0,0,0,0,86,105,100,101,111,72,97,110,100,108,101,114,0]),L=new Uint8Array([0,0,0,0,0,0,0,0,115,111,117,110,0,0,0,0,0,0,0,0,0,0,0,0,83,111,117,110,100,72,97,110,100,108,101,114,0]),O={video:A,audio:L},U=new Uint8Array([0,0,0,0,0,0,0,1,0,0,0,12,117,114,108,32,0,0,0,1]),x=new Uint8Array([0,0,0,0,0,0,0,0]),I=new Uint8Array([0,0,0,0,0,0,0,0]),D=I,R=new Uint8Array([0,0,0,0,0,0,0,0,0,0,0,0]),M=I,P=new Uint8Array([0,0,0,1,0,0,0,0,0,0,0,0])}}(),t=function(t){var e,i,n=[],r=0
for(e=1;e<arguments.length;e++)n.push(arguments[e])
for(e=n.length;e--;)r+=n[e].byteLength
for(i=new Uint8Array(r+8),new DataView(i.buffer,i.byteOffset,i.byteLength).setUint32(0,i.byteLength),i.set(t,4),e=0,r=8;e<n.length;e++)i.set(n[e],r),r+=n[e].byteLength
return i},e=function(){return t(k.dinf,t(k.dref,U))},n=function(e){return t(k.esds,new Uint8Array([0,0,0,0,3,25,0,0,0,4,17,64,21,0,6,0,0,0,218,192,0,0,218,192,5,2,e.audioobjecttype<<3|e.samplingfrequencyindex>>>1,e.samplingfrequencyindex<<7|e.channelcount<<3,6,1,2]))},r=function(){return t(k.ftyp,w,C,w,E)},g=function(e){return t(k.hdlr,O[e])},a=function(e){return t(k.mdat,e)},m=function(e){var i=new Uint8Array([0,0,0,0,0,0,0,2,0,0,0,3,0,1,95,144,e.duration>>>24&255,e.duration>>>16&255,e.duration>>>8&255,255&e.duration,85,196,0,0])
return e.samplerate&&(i[12]=e.samplerate>>>24&255,i[13]=e.samplerate>>>16&255,i[14]=e.samplerate>>>8&255,i[15]=255&e.samplerate),t(k.mdhd,i)},f=function(e){return t(k.mdia,m(e),g(e.type),o(e))},s=function(e){return t(k.mfhd,new Uint8Array([0,0,0,0,(4278190080&e)>>24,(16711680&e)>>16,(65280&e)>>8,255&e]))},o=function(i){return t(k.minf,"video"===i.type?t(k.vmhd,P):t(k.smhd,x),e(),v(i))},u=function(e,i){for(var n=[],r=i.length;r--;)n[r]=b(i[r])
return t.apply(null,[k.moof,s(e)].concat(n))},l=function(e){for(var i=e.length,n=[];i--;)n[i]=d(e[i])
return t.apply(null,[k.moov,h(4294967295)].concat(n).concat(c(e)))},c=function(e){for(var i=e.length,n=[];i--;)n[i]=T(e[i])
return t.apply(null,[k.mvex].concat(n))},h=function(e){var i=new Uint8Array([0,0,0,0,0,0,0,1,0,0,0,2,0,1,95,144,(4278190080&e)>>24,(16711680&e)>>16,(65280&e)>>8,255&e,0,1,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,64,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,255,255,255,255])
return t(k.mvhd,i)},y=function(e){var i,n,r=e.samples||[],a=new Uint8Array(4+r.length)
for(n=0;n<r.length;n++)i=r[n].flags,a[n+4]=i.dependsOn<<4|i.isDependedOn<<2|i.hasRedundancy
return t(k.sdtp,a)},v=function(e){return t(k.stbl,_(e),t(k.stts,M),t(k.stsc,D),t(k.stsz,R),t(k.stco,I))},function(){var e,i
_=function(n){return t(k.stsd,new Uint8Array([0,0,0,0,0,0,0,1]),"video"===n.type?e(n):i(n))},e=function(e){var i,n=e.sps||[],r=e.pps||[],a=[],s=[]
for(i=0;i<n.length;i++)a.push((65280&n[i].byteLength)>>>8),a.push(255&n[i].byteLength),a=a.concat(Array.prototype.slice.call(n[i]))
for(i=0;i<r.length;i++)s.push((65280&r[i].byteLength)>>>8),s.push(255&r[i].byteLength),s=s.concat(Array.prototype.slice.call(r[i]))
return t(k.avc1,new Uint8Array([0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,(65280&e.width)>>8,255&e.width,(65280&e.height)>>8,255&e.height,0,72,0,0,0,72,0,0,0,0,0,0,0,1,19,118,105,100,101,111,106,115,45,99,111,110,116,114,105,98,45,104,108,115,0,0,0,0,0,0,0,0,0,0,0,0,0,24,17,17]),t(k.avcC,new Uint8Array([1,e.profileIdc,e.profileCompatibility,e.levelIdc,255].concat([n.length]).concat(a).concat([r.length]).concat(s))),t(k.btrt,new Uint8Array([0,28,156,128,0,45,198,192,0,45,198,192])))},i=function(e){return t(k.mp4a,new Uint8Array([0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,(65280&e.channelcount)>>8,255&e.channelcount,(65280&e.samplesize)>>8,255&e.samplesize,0,0,0,0,(65280&e.samplerate)>>8,255&e.samplerate,0,0]),n(e))}}(),p=function(e){var i=new Uint8Array([0,0,0,7,0,0,0,0,0,0,0,0,(4278190080&e.id)>>24,(16711680&e.id)>>16,(65280&e.id)>>8,255&e.id,0,0,0,0,(4278190080&e.duration)>>24,(16711680&e.duration)>>16,(65280&e.duration)>>8,255&e.duration,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,64,0,0,0,(65280&e.width)>>8,255&e.width,0,0,(65280&e.height)>>8,255&e.height,0,0])
return t(k.tkhd,i)},b=function(e){var i,n,r,a,s,o
return i=t(k.tfhd,new Uint8Array([0,0,0,58,(4278190080&e.id)>>24,(16711680&e.id)>>16,(65280&e.id)>>8,255&e.id,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0])),s=Math.floor(e.baseMediaDecodeTime/(B+1)),o=Math.floor(e.baseMediaDecodeTime%(B+1)),n=t(k.tfdt,new Uint8Array([1,0,0,0,s>>>24&255,s>>>16&255,s>>>8&255,255&s,o>>>24&255,o>>>16&255,o>>>8&255,255&o])),"audio"===e.type?(r=S(e,92),t(k.traf,i,n,r)):(a=y(e),r=S(e,a.length+92),t(k.traf,i,n,r,a))},d=function(e){return e.duration=e.duration||4294967295,t(k.trak,p(e),f(e))},T=function(e){var i=new Uint8Array([0,0,0,0,(4278190080&e.id)>>24,(16711680&e.id)>>16,(65280&e.id)>>8,255&e.id,0,0,0,1,0,0,0,0,0,0,0,0,0,1,0,1])
return"video"!==e.type&&(i[i.length-1]=0),t(k.trex,i)},function(){var e,i,n
n=function(t,e){var i=0,n=0,r=0,a=0
return t.length&&(void 0!==t[0].duration&&(i=1),void 0!==t[0].size&&(n=2),void 0!==t[0].flags&&(r=4),void 0!==t[0].compositionTimeOffset&&(a=8)),[0,0,i|n|r|a,1,(4278190080&t.length)>>>24,(16711680&t.length)>>>16,(65280&t.length)>>>8,255&t.length,(4278190080&e)>>>24,(16711680&e)>>>16,(65280&e)>>>8,255&e]},i=function(e,i){var r,a,s,o
for(i+=20+16*(a=e.samples||[]).length,r=n(a,i),o=0;o<a.length;o++)s=a[o],r=r.concat([(4278190080&s.duration)>>>24,(16711680&s.duration)>>>16,(65280&s.duration)>>>8,255&s.duration,(4278190080&s.size)>>>24,(16711680&s.size)>>>16,(65280&s.size)>>>8,255&s.size,s.flags.isLeading<<2|s.flags.dependsOn,s.flags.isDependedOn<<6|s.flags.hasRedundancy<<4|s.flags.paddingValue<<1|s.flags.isNonSyncSample,61440&s.flags.degradationPriority,15&s.flags.degradationPriority,(4278190080&s.compositionTimeOffset)>>>24,(16711680&s.compositionTimeOffset)>>>16,(65280&s.compositionTimeOffset)>>>8,255&s.compositionTimeOffset])
return t(k.trun,new Uint8Array(r))},e=function(e,i){var r,a,s,o
for(i+=20+8*(a=e.samples||[]).length,r=n(a,i),o=0;o<a.length;o++)s=a[o],r=r.concat([(4278190080&s.duration)>>>24,(16711680&s.duration)>>>16,(65280&s.duration)>>>8,255&s.duration,(4278190080&s.size)>>>24,(16711680&s.size)>>>16,(65280&s.size)>>>8,255&s.size])
return t(k.trun,new Uint8Array(r))},S=function(t,n){return"audio"===t.type?e(t,n):i(t,n)}}()
var N,j,F={ftyp:r,mdat:a,moof:u,moov:l,initSegment:function(t){var e,i=r(),n=l(t)
return(e=new Uint8Array(i.byteLength+n.byteLength)).set(i),e.set(n,i.byteLength),e}},V=function(t){return t>>>0},H={findBox:N=function(t,e){var i,n,r,a,s,o=[]
if(!e.length)return null
for(i=0;i<t.byteLength;)n=V(t[i]<<24|t[i+1]<<16|t[i+2]<<8|t[i+3]),r=j(t.subarray(i+4,i+8)),a=n>1?i+n:t.byteLength,r===e[0]&&(1===e.length?o.push(t.subarray(i+8,a)):(s=N(t.subarray(i+8,a),e.slice(1))).length&&(o=o.concat(s))),i=a
return o},parseType:j=function(t){var e=""
return e+=String.fromCharCode(t[0]),e+=String.fromCharCode(t[1]),(e+=String.fromCharCode(t[2]))+String.fromCharCode(t[3])},timescale:function(t){return N(t,["moov","trak"]).reduce(function(t,e){var i,n,r,a,s
return(i=N(e,["tkhd"])[0])?(n=i[0],a=V(i[r=0===n?12:20]<<24|i[r+1]<<16|i[r+2]<<8|i[r+3]),(s=N(e,["mdia","mdhd"])[0])?(r=0===(n=s[0])?12:20,t[a]=V(s[r]<<24|s[r+1]<<16|s[r+2]<<8|s[r+3]),t):null):null},{})},startTime:function(t,e){var i,n,r
return i=N(e,["moof","traf"]),n=[].concat.apply([],i.map(function(e){return N(e,["tfhd"]).map(function(i){var n,r
return n=V(i[4]<<24|i[5]<<16|i[6]<<8|i[7]),r=t[n]||9e4,(N(e,["tfdt"]).map(function(t){var e,i
return e=t[0],i=V(t[4]<<24|t[5]<<16|t[6]<<8|t[7]),1===e&&(i*=Math.pow(2,32),i+=V(t[8]<<24|t[9]<<16|t[10]<<8|t[11])),i})[0]||1/0)/r})})),r=Math.min.apply(null,n),isFinite(r)?r:0},videoTrackIds:function(t){var e=[]
return N(t,["moov","trak"]).forEach(function(t){var i=N(t,["mdia","hdlr"]),n=N(t,["tkhd"])
i.forEach(function(t,i){var r,a,s=j(t.subarray(8,12)),o=n[i]
"vide"===s&&(a=0===(r=new DataView(o.buffer,o.byteOffset,o.byteLength)).getUint8(0)?r.getUint32(12):r.getUint32(20),e.push(a))})}),e}},q=function(){this.init=function(){var t={}
this.on=function(e,i){t[e]||(t[e]=[]),t[e]=t[e].concat(i)},this.off=function(e,i){var n
return!!t[e]&&(n=t[e].indexOf(i),t[e]=t[e].slice(),t[e].splice(n,1),n>-1)},this.trigger=function(e){var i,n,r,a
if(i=t[e])if(2===arguments.length)for(r=i.length,n=0;n<r;++n)i[n].call(this,arguments[1])
else{for(a=[],n=arguments.length,n=1;n<arguments.length;++n)a.push(arguments[n])
for(r=i.length,n=0;n<r;++n)i[n].apply(this,a)}},this.dispose=function(){t={}}}}
q.prototype.pipe=function(t){return this.on("data",function(e){t.push(e)}),this.on("done",function(e){t.flush(e)}),t},q.prototype.push=function(t){this.trigger("data",t)},q.prototype.flush=function(t){this.trigger("done",t)}
var z=q,W=function(t,e){var i={size:0,flags:{isLeading:0,dependsOn:1,isDependedOn:0,hasRedundancy:0,degradationPriority:0,isNonSyncSample:1}}
return i.dataOffset=e,i.compositionTimeOffset=t.pts-t.dts,i.duration=t.duration,i.size=4*t.length,i.size+=t.byteLength,t.keyFrame&&(i.flags.dependsOn=2,i.flags.isNonSyncSample=0),i},G=function(t){delete t.minSegmentDts,delete t.maxSegmentDts,delete t.minSegmentPts,delete t.maxSegmentPts},X=function(t,e){var i,n=t.minSegmentDts
return e||(n-=t.timelineStartInfo.dts),i=t.timelineStartInfo.baseMediaDecodeTime,i+=n,i=Math.max(0,i),"audio"===t.type&&(i*=t.samplerate/9e4,i=Math.floor(i)),i},Y=function(t,e){"number"==typeof e.pts&&(void 0===t.timelineStartInfo.pts&&(t.timelineStartInfo.pts=e.pts),void 0===t.minSegmentPts?t.minSegmentPts=e.pts:t.minSegmentPts=Math.min(t.minSegmentPts,e.pts),void 0===t.maxSegmentPts?t.maxSegmentPts=e.pts:t.maxSegmentPts=Math.max(t.maxSegmentPts,e.pts)),"number"==typeof e.dts&&(void 0===t.timelineStartInfo.dts&&(t.timelineStartInfo.dts=e.dts),void 0===t.minSegmentDts?t.minSegmentDts=e.dts:t.minSegmentDts=Math.min(t.minSegmentDts,e.dts),void 0===t.maxSegmentDts?t.maxSegmentDts=e.dts:t.maxSegmentDts=Math.max(t.maxSegmentDts,e.dts))},$=function t(){t.prototype.init.call(this),this.captionPackets_=[],this.ccStreams_=[new tt(0,0),new tt(0,1),new tt(1,0),new tt(1,1)],this.reset(),this.ccStreams_.forEach(function(t){t.on("data",this.trigger.bind(this,"data")),t.on("done",this.trigger.bind(this,"done"))},this)};($.prototype=new z).push=function(t){var e,i,n
if("sei_rbsp"===t.nalUnitType&&4===(e=function(t){for(var e=0,i={payloadType:-1,payloadSize:0},n=0,r=0;e<t.byteLength&&128!==t[e];){for(;255===t[e];)n+=255,e++
for(n+=t[e++];255===t[e];)r+=255,e++
if(r+=t[e++],!i.payload&&4===n){i.payloadType=n,i.payloadSize=r,i.payload=t.subarray(e,e+r)
break}e+=r,n=0,r=0}return i}(t.escapedRBSP)).payloadType&&(i=function(t){return 181!==t.payload[0]?null:49!=(t.payload[1]<<8|t.payload[2])?null:"GA94"!==String.fromCharCode(t.payload[3],t.payload[4],t.payload[5],t.payload[6])?null:3!==t.payload[7]?null:t.payload.subarray(8,t.payload.length-1)}(e)))if(t.dts<this.latestDts_)this.ignoreNextEqualDts_=!0
else{if(t.dts===this.latestDts_&&this.ignoreNextEqualDts_)return this.numSameDts_--,void(this.numSameDts_||(this.ignoreNextEqualDts_=!1))
n=function(t,e){var i,n,r,a,s=[]
if(!(64&e[0]))return s
for(n=31&e[0],i=0;i<n;i++)a={type:3&e[2+(r=3*i)],pts:t},4&e[r+2]&&(a.ccData=e[r+3]<<8|e[r+4],s.push(a))
return s}(t.pts,i),this.captionPackets_=this.captionPackets_.concat(n),this.latestDts_!==t.dts&&(this.numSameDts_=0),this.numSameDts_++,this.latestDts_=t.dts}},$.prototype.flush=function(){this.captionPackets_.length?(this.captionPackets_.forEach(function(t,e){t.presortIndex=e}),this.captionPackets_.sort(function(t,e){return t.pts===e.pts?t.presortIndex-e.presortIndex:t.pts-e.pts}),this.captionPackets_.forEach(function(t){t.type<2&&this.dispatchCea608Packet(t)},this),this.captionPackets_.length=0,this.ccStreams_.forEach(function(t){t.flush()},this)):this.ccStreams_.forEach(function(t){t.flush()},this)},$.prototype.reset=function(){this.latestDts_=null,this.ignoreNextEqualDts_=!1,this.numSameDts_=0,this.activeCea608Channel_=[null,null],this.ccStreams_.forEach(function(t){t.reset()})},$.prototype.dispatchCea608Packet=function(t){this.setsChannel1Active(t)?this.activeCea608Channel_[t.type]=0:this.setsChannel2Active(t)&&(this.activeCea608Channel_[t.type]=1),null!==this.activeCea608Channel_[t.type]&&this.ccStreams_[(t.type<<1)+this.activeCea608Channel_[t.type]].push(t)},$.prototype.setsChannel1Active=function(t){return 4096==(30720&t.ccData)},$.prototype.setsChannel2Active=function(t){return 6144==(30720&t.ccData)}
var K={42:225,92:233,94:237,95:243,96:250,123:231,124:247,125:209,126:241,127:9608,304:174,305:176,306:189,307:191,308:8482,309:162,310:163,311:9834,312:224,313:160,314:232,315:226,316:234,317:238,318:244,319:251,544:193,545:201,546:211,547:218,548:220,549:252,550:8216,551:161,552:42,553:39,554:8212,555:169,556:8480,557:8226,558:8220,559:8221,560:192,561:194,562:199,563:200,564:202,565:203,566:235,567:206,568:207,569:239,570:212,571:217,572:249,573:219,574:171,575:187,800:195,801:227,802:205,803:204,804:236,805:210,806:242,807:213,808:245,809:123,810:125,811:92,812:94,813:95,814:124,815:126,816:196,817:228,818:214,819:246,820:223,821:165,822:164,823:9474,824:197,825:229,826:216,827:248,828:9484,829:9488,830:9492,831:9496},J=function(t){return null===t?"":(t=K[t]||t,String.fromCharCode(t))},Q=[4352,4384,4608,4640,5376,5408,5632,5664,5888,5920,4096,4864,4896,5120,5152],Z=function(){for(var t=[],e=15;e--;)t.push("")
return t},tt=function t(e,i){t.prototype.init.call(this),this.field_=e||0,this.dataChannel_=i||0,this.name_="CC"+(1+(this.field_<<1|this.dataChannel_)),this.setConstants(),this.reset(),this.push=function(t){var e,i,n,r,a
if((e=32639&t.ccData)!==this.lastControlCode_){if(4096==(61440&e)?this.lastControlCode_=e:e!==this.PADDING_&&(this.lastControlCode_=null),n=e>>>8,r=255&e,e!==this.PADDING_)if(e===this.RESUME_CAPTION_LOADING_)this.mode_="popOn"
else if(e===this.END_OF_CAPTION_)this.mode_="popOn",this.clearFormatting(t.pts),this.flushDisplayed(t.pts),i=this.displayed_,this.displayed_=this.nonDisplayed_,this.nonDisplayed_=i,this.startPts_=t.pts
else if(e===this.ROLL_UP_2_ROWS_)this.rollUpRows_=2,this.setRollUp(t.pts)
else if(e===this.ROLL_UP_3_ROWS_)this.rollUpRows_=3,this.setRollUp(t.pts)
else if(e===this.ROLL_UP_4_ROWS_)this.rollUpRows_=4,this.setRollUp(t.pts)
else if(e===this.CARRIAGE_RETURN_)this.clearFormatting(t.pts),this.flushDisplayed(t.pts),this.shiftRowsUp_(),this.startPts_=t.pts
else if(e===this.BACKSPACE_)"popOn"===this.mode_?this.nonDisplayed_[this.row_]=this.nonDisplayed_[this.row_].slice(0,-1):this.displayed_[this.row_]=this.displayed_[this.row_].slice(0,-1)
else if(e===this.ERASE_DISPLAYED_MEMORY_)this.flushDisplayed(t.pts),this.displayed_=Z()
else if(e===this.ERASE_NON_DISPLAYED_MEMORY_)this.nonDisplayed_=Z()
else if(e===this.RESUME_DIRECT_CAPTIONING_)"paintOn"!==this.mode_&&(this.flushDisplayed(t.pts),this.displayed_=Z()),this.mode_="paintOn",this.startPts_=t.pts
else if(this.isSpecialCharacter(n,r))a=J((n=(3&n)<<8)|r),this[this.mode_](t.pts,a),this.column_++
else if(this.isExtCharacter(n,r))"popOn"===this.mode_?this.nonDisplayed_[this.row_]=this.nonDisplayed_[this.row_].slice(0,-1):this.displayed_[this.row_]=this.displayed_[this.row_].slice(0,-1),a=J((n=(3&n)<<8)|r),this[this.mode_](t.pts,a),this.column_++
else if(this.isMidRowCode(n,r))this.clearFormatting(t.pts),this[this.mode_](t.pts," "),this.column_++,14==(14&r)&&this.addFormatting(t.pts,["i"]),1==(1&r)&&this.addFormatting(t.pts,["u"])
else if(this.isOffsetControlCode(n,r))this.column_+=3&r
else if(this.isPAC(n,r)){var s=Q.indexOf(7968&e)
"rollUp"===this.mode_&&this.setRollUp(t.pts,s),s!==this.row_&&(this.clearFormatting(t.pts),this.row_=s),1&r&&-1===this.formatting_.indexOf("u")&&this.addFormatting(t.pts,["u"]),16==(16&e)&&(this.column_=4*((14&e)>>1)),this.isColorPAC(r)&&14==(14&r)&&this.addFormatting(t.pts,["i"])}else this.isNormalChar(n)&&(0===r&&(r=null),a=J(n),a+=J(r),this[this.mode_](t.pts,a),this.column_+=a.length)}else this.lastControlCode_=null}}
tt.prototype=new z,tt.prototype.flushDisplayed=function(t){var e=this.displayed_.map(function(t){return t.trim()}).join("\n").replace(/^\n+|\n+$/g,"")
e.length&&this.trigger("data",{startPts:this.startPts_,endPts:t,text:e,stream:this.name_})},tt.prototype.reset=function(){this.mode_="popOn",this.topRow_=0,this.startPts_=0,this.displayed_=Z(),this.nonDisplayed_=Z(),this.lastControlCode_=null,this.column_=0,this.row_=14,this.rollUpRows_=2,this.formatting_=[]},tt.prototype.setConstants=function(){0===this.dataChannel_?(this.BASE_=16,this.EXT_=17,this.CONTROL_=(20|this.field_)<<8,this.OFFSET_=23):1===this.dataChannel_&&(this.BASE_=24,this.EXT_=25,this.CONTROL_=(28|this.field_)<<8,this.OFFSET_=31),this.PADDING_=0,this.RESUME_CAPTION_LOADING_=32|this.CONTROL_,this.END_OF_CAPTION_=47|this.CONTROL_,this.ROLL_UP_2_ROWS_=37|this.CONTROL_,this.ROLL_UP_3_ROWS_=38|this.CONTROL_,this.ROLL_UP_4_ROWS_=39|this.CONTROL_,this.CARRIAGE_RETURN_=45|this.CONTROL_,this.RESUME_DIRECT_CAPTIONING_=41|this.CONTROL_,this.BACKSPACE_=33|this.CONTROL_,this.ERASE_DISPLAYED_MEMORY_=44|this.CONTROL_,this.ERASE_NON_DISPLAYED_MEMORY_=46|this.CONTROL_},tt.prototype.isSpecialCharacter=function(t,e){return t===this.EXT_&&e>=48&&e<=63},tt.prototype.isExtCharacter=function(t,e){return(t===this.EXT_+1||t===this.EXT_+2)&&e>=32&&e<=63},tt.prototype.isMidRowCode=function(t,e){return t===this.EXT_&&e>=32&&e<=47},tt.prototype.isOffsetControlCode=function(t,e){return t===this.OFFSET_&&e>=33&&e<=35},tt.prototype.isPAC=function(t,e){return t>=this.BASE_&&t<this.BASE_+8&&e>=64&&e<=127},tt.prototype.isColorPAC=function(t){return t>=64&&t<=79||t>=96&&t<=127},tt.prototype.isNormalChar=function(t){return t>=32&&t<=127},tt.prototype.setRollUp=function(t,e){if("rollUp"!==this.mode_&&(this.row_=14,this.mode_="rollUp",this.flushDisplayed(t),this.nonDisplayed_=Z(),this.displayed_=Z()),void 0!==e&&e!==this.row_)for(var i=0;i<this.rollUpRows_;i++)this.displayed_[e-i]=this.displayed_[this.row_-i],this.displayed_[this.row_-i]=""
void 0===e&&(e=this.row_),this.topRow_=e-this.rollUpRows_+1},tt.prototype.addFormatting=function(t,e){this.formatting_=this.formatting_.concat(e)
var i=e.reduce(function(t,e){return t+"<"+e+">"},"")
this[this.mode_](t,i)},tt.prototype.clearFormatting=function(t){if(this.formatting_.length){var e=this.formatting_.reverse().reduce(function(t,e){return t+"</"+e+">"},"")
this.formatting_=[],this[this.mode_](t,e)}},tt.prototype.popOn=function(t,e){var i=this.nonDisplayed_[this.row_]
i+=e,this.nonDisplayed_[this.row_]=i},tt.prototype.rollUp=function(t,e){var i=this.displayed_[this.row_]
i+=e,this.displayed_[this.row_]=i},tt.prototype.shiftRowsUp_=function(){var t
for(t=0;t<this.topRow_;t++)this.displayed_[t]=""
for(t=this.row_+1;t<15;t++)this.displayed_[t]=""
for(t=this.topRow_;t<this.row_;t++)this.displayed_[t]=this.displayed_[t+1]
this.displayed_[this.row_]=""},tt.prototype.paintOn=function(t,e){var i=this.displayed_[this.row_]
i+=e,this.displayed_[this.row_]=i}
var et={CaptionStream:$,Cea608Stream:tt},it={H264_STREAM_TYPE:27,ADTS_STREAM_TYPE:15,METADATA_STREAM_TYPE:21},nt=function(t,e){var i=1
for(t>e&&(i=-1);Math.abs(e-t)>4294967296;)t+=8589934592*i
return t},rt=function t(e){var i,n
t.prototype.init.call(this),this.type_=e,this.push=function(t){t.type===this.type_&&(void 0===n&&(n=t.dts),t.dts=nt(t.dts,n),t.pts=nt(t.pts,n),i=t.dts,this.trigger("data",t))},this.flush=function(){n=i,this.trigger("done")},this.discontinuity=function(){n=void 0,i=void 0}}
rt.prototype=new z
var at,st=rt,ot=function(t,e,i){var n,r=""
for(n=e;n<i;n++)r+="%"+("00"+t[n].toString(16)).slice(-2)
return r},ut=function(t,e,i){return decodeURIComponent(ot(t,e,i))},lt=function(t,e,i){return unescape(ot(t,e,i))},ct=function(t){return t[0]<<21|t[1]<<14|t[2]<<7|t[3]},ht={TXXX:function(t){var e
if(3===t.data[0]){for(e=1;e<t.data.length;e++)if(0===t.data[e]){t.description=ut(t.data,1,e),t.value=ut(t.data,e+1,t.data.length).replace(/\0*$/,"")
break}t.data=t.value}},WXXX:function(t){var e
if(3===t.data[0])for(e=1;e<t.data.length;e++)if(0===t.data[e]){t.description=ut(t.data,1,e),t.url=ut(t.data,e+1,t.data.length)
break}},PRIV:function(t){var e
for(e=0;e<t.data.length;e++)if(0===t.data[e]){t.owner=lt(t.data,0,e)
break}t.privateData=t.data.subarray(e+1),t.data=t.privateData}};(at=function(t){var e,i={debug:!(!t||!t.debug),descriptor:t&&t.descriptor},n=0,r=[],a=0
if(at.prototype.init.call(this),this.dispatchType=it.METADATA_STREAM_TYPE.toString(16),i.descriptor)for(e=0;e<i.descriptor.length;e++)this.dispatchType+=("00"+i.descriptor[e].toString(16)).slice(-2)
this.push=function(t){var e,s,o,u,l
if("timed-metadata"===t.type)if(t.dataAlignmentIndicator&&(a=0,r.length=0),0===r.length&&(t.data.length<10||t.data[0]!=="I".charCodeAt(0)||t.data[1]!=="D".charCodeAt(0)||t.data[2]!=="3".charCodeAt(0)))i.debug&&console.log("Skipping unrecognized metadata packet")
else if(r.push(t),a+=t.data.byteLength,1===r.length&&(n=ct(t.data.subarray(6,10)),n+=10),!(a<n)){for(e={data:new Uint8Array(n),frames:[],pts:r[0].pts,dts:r[0].dts},l=0;l<n;)e.data.set(r[0].data.subarray(0,n-l),l),l+=r[0].data.byteLength,a-=r[0].data.byteLength,r.shift()
s=10,64&e.data[5]&&(s+=4,s+=ct(e.data.subarray(10,14)),n-=ct(e.data.subarray(16,20)))
do{if((o=ct(e.data.subarray(s+4,s+8)))<1)return console.log("Malformed ID3 frame encountered. Skipping metadata parsing.")
if((u={id:String.fromCharCode(e.data[s],e.data[s+1],e.data[s+2],e.data[s+3]),data:e.data.subarray(s+10,s+o+10)}).key=u.id,ht[u.id]&&(ht[u.id](u),"com.apple.streaming.transportStreamTimestamp"===u.owner)){var c=u.data,h=(1&c[3])<<30|c[4]<<22|c[5]<<14|c[6]<<6|c[7]>>>2
h*=4,h+=3&c[7],u.timeStamp=h,void 0===e.pts&&void 0===e.dts&&(e.pts=u.timeStamp,e.dts=u.timeStamp),this.trigger("timestamp",u)}e.frames.push(u),s+=10,s+=o}while(s<n)
this.trigger("data",e)}}}).prototype=new z
var dt,pt,ft,mt=at,gt=st;(dt=function(){var t=new Uint8Array(188),e=0
dt.prototype.init.call(this),this.push=function(i){var n,r=0,a=188
for(e?((n=new Uint8Array(i.byteLength+e)).set(t.subarray(0,e)),n.set(i,e),e=0):n=i;a<n.byteLength;)71!==n[r]||71!==n[a]?(r++,a++):(this.trigger("data",n.subarray(r,a)),r+=188,a+=188)
r<n.byteLength&&(t.set(n.subarray(r),0),e=n.byteLength-r)},this.flush=function(){188===e&&71===t[0]&&(this.trigger("data",t),e=0),this.trigger("done")}}).prototype=new z,(pt=function(){var t,e,i,n
pt.prototype.init.call(this),n=this,this.packetsWaitingForPmt=[],this.programMapTable=void 0,t=function(t,n){var r=0
n.payloadUnitStartIndicator&&(r+=t[r]+1),"pat"===n.type?e(t.subarray(r),n):i(t.subarray(r),n)},e=function(t,e){e.section_number=t[7],e.last_section_number=t[8],n.pmtPid=(31&t[10])<<8|t[11],e.pmtPid=n.pmtPid},i=function(t,e){var i,r
if(1&t[5]){for(n.programMapTable={video:null,audio:null,"timed-metadata":{}},i=3+((15&t[1])<<8|t[2])-4,r=12+((15&t[10])<<8|t[11]);r<i;){var a=t[r],s=(31&t[r+1])<<8|t[r+2]
a===it.H264_STREAM_TYPE&&null===n.programMapTable.video?n.programMapTable.video=s:a===it.ADTS_STREAM_TYPE&&null===n.programMapTable.audio?n.programMapTable.audio=s:a===it.METADATA_STREAM_TYPE&&(n.programMapTable["timed-metadata"][s]=a),r+=5+((15&t[r+3])<<8|t[r+4])}e.programMapTable=n.programMapTable}},this.push=function(e){var i={},n=4
if(i.payloadUnitStartIndicator=!!(64&e[1]),i.pid=31&e[1],i.pid<<=8,i.pid|=e[2],(48&e[3])>>>4>1&&(n+=e[n]+1),0===i.pid)i.type="pat",t(e.subarray(n),i),this.trigger("data",i)
else if(i.pid===this.pmtPid)for(i.type="pmt",t(e.subarray(n),i),this.trigger("data",i);this.packetsWaitingForPmt.length;)this.processPes_.apply(this,this.packetsWaitingForPmt.shift())
else void 0===this.programMapTable?this.packetsWaitingForPmt.push([e,n,i]):this.processPes_(e,n,i)},this.processPes_=function(t,e,i){i.pid===this.programMapTable.video?i.streamType=it.H264_STREAM_TYPE:i.pid===this.programMapTable.audio?i.streamType=it.ADTS_STREAM_TYPE:i.streamType=this.programMapTable["timed-metadata"][i.pid],i.type="pes",i.data=t.subarray(e),this.trigger("data",i)}}).prototype=new z,pt.STREAM_TYPES={h264:27,adts:15},(ft=function(){var t=this,e={data:[],size:0},i={data:[],size:0},n={data:[],size:0},r=function(e,i,n){var r,a,s=new Uint8Array(e.size),o={type:i},u=0,l=0
if(e.data.length&&!(e.size<9)){for(o.trackId=e.data[0].pid,u=0;u<e.data.length;u++)a=e.data[u],s.set(a.data,l),l+=a.data.byteLength
!function(t,e){var i
e.packetLength=6+(t[4]<<8|t[5]),e.dataAlignmentIndicator=0!=(4&t[6]),192&(i=t[7])&&(e.pts=(14&t[9])<<27|(255&t[10])<<20|(254&t[11])<<12|(255&t[12])<<5|(254&t[13])>>>3,e.pts*=4,e.pts+=(6&t[13])>>>1,e.dts=e.pts,64&i&&(e.dts=(14&t[14])<<27|(255&t[15])<<20|(254&t[16])<<12|(255&t[17])<<5|(254&t[18])>>>3,e.dts*=4,e.dts+=(6&t[18])>>>1)),e.data=t.subarray(9+t[8])}(s,o),r="video"===i||o.packetLength<=e.size,(n||r)&&(e.size=0,e.data.length=0),r&&t.trigger("data",o)}}
ft.prototype.init.call(this),this.push=function(a){({pat:function(){},pes:function(){var t,s
switch(a.streamType){case it.H264_STREAM_TYPE:case it.H264_STREAM_TYPE:t=e,s="video"
break
case it.ADTS_STREAM_TYPE:t=i,s="audio"
break
case it.METADATA_STREAM_TYPE:t=n,s="timed-metadata"
break
default:return}a.payloadUnitStartIndicator&&r(t,s,!0),t.data.push(a),t.size+=a.data.byteLength},pmt:function(){var e={type:"metadata",tracks:[]},i=a.programMapTable
null!==i.video&&e.tracks.push({timelineStartInfo:{baseMediaDecodeTime:0},id:+i.video,codec:"avc",type:"video"}),null!==i.audio&&e.tracks.push({timelineStartInfo:{baseMediaDecodeTime:0},id:+i.audio,codec:"adts",type:"audio"}),t.trigger("data",e)}})[a.type]()},this.flush=function(){r(e,"video"),r(i,"audio"),r(n,"timed-metadata"),this.trigger("done")}}).prototype=new z
var yt={PAT_PID:0,MP2T_PACKET_LENGTH:188,TransportPacketStream:dt,TransportParseStream:pt,ElementaryStream:ft,TimestampRolloverStream:gt,CaptionStream:et.CaptionStream,Cea608Stream:et.Cea608Stream,MetadataStream:mt}
for(var vt in it)it.hasOwnProperty(vt)&&(yt[vt]=it[vt])
var _t,bt=yt,Tt=[96e3,88200,64e3,48e3,44100,32e3,24e3,22050,16e3,12e3,11025,8e3,7350];(_t=function(){var t
_t.prototype.init.call(this),this.push=function(e){var i,n,r,a,s,o,u=0,l=0
if("audio"===e.type)for(t?(a=t,(t=new Uint8Array(a.byteLength+e.data.byteLength)).set(a),t.set(e.data,a.byteLength)):t=e.data;u+5<t.length;)if(255===t[u]&&240==(246&t[u+1])){if(n=2*(1&~t[u+1]),i=(3&t[u+3])<<11|t[u+4]<<3|(224&t[u+5])>>5,o=9e4*(s=1024*(1+(3&t[u+6])))/Tt[(60&t[u+2])>>>2],r=u+i,t.byteLength<r)return
if(this.trigger("data",{pts:e.pts+l*o,dts:e.dts+l*o,sampleCount:s,audioobjecttype:1+(t[u+2]>>>6&3),channelcount:(1&t[u+2])<<2|(192&t[u+3])>>>6,samplerate:Tt[(60&t[u+2])>>>2],samplingfrequencyindex:(60&t[u+2])>>>2,samplesize:16,data:t.subarray(u+7+n,r)}),t.byteLength===r)return void(t=void 0)
l++,t=t.subarray(r)}else u++},this.flush=function(){this.trigger("done")}}).prototype=new z
var St,wt,Ct,Et=_t,At=function(t){var e=t.byteLength,i=0,n=0
this.length=function(){return 8*e},this.bitsAvailable=function(){return 8*e+n},this.loadWord=function(){var r=t.byteLength-e,a=new Uint8Array(4),s=Math.min(4,e)
if(0===s)throw new Error("no bytes available")
a.set(t.subarray(r,r+s)),i=new DataView(a.buffer).getUint32(0),n=8*s,e-=s},this.skipBits=function(t){var r
n>t?(i<<=t,n-=t):(t-=n,t-=8*(r=Math.floor(t/8)),e-=r,this.loadWord(),i<<=t,n-=t)},this.readBits=function(t){var r=Math.min(n,t),a=i>>>32-r
return(n-=r)>0?i<<=r:e>0&&this.loadWord(),(r=t-r)>0?a<<r|this.readBits(r):a},this.skipLeadingZeros=function(){var t
for(t=0;t<n;++t)if(0!=(i&2147483648>>>t))return i<<=t,n-=t,t
return this.loadWord(),t+this.skipLeadingZeros()},this.skipUnsignedExpGolomb=function(){this.skipBits(1+this.skipLeadingZeros())},this.skipExpGolomb=function(){this.skipBits(1+this.skipLeadingZeros())},this.readUnsignedExpGolomb=function(){var t=this.skipLeadingZeros()
return this.readBits(t+1)-1},this.readExpGolomb=function(){var t=this.readUnsignedExpGolomb()
return 1&t?1+t>>>1:-1*(t>>>1)},this.readBoolean=function(){return 1===this.readBits(1)},this.readUnsignedByte=function(){return this.readBits(8)},this.loadWord()};(wt=function(){var t,e,i=0
wt.prototype.init.call(this),this.push=function(n){var r
for(e?((r=new Uint8Array(e.byteLength+n.data.byteLength)).set(e),r.set(n.data,e.byteLength),e=r):e=n.data;i<e.byteLength-3;i++)if(1===e[i+2]){t=i+5
break}for(;t<e.byteLength;)switch(e[t]){case 0:if(0!==e[t-1]){t+=2
break}if(0!==e[t-2]){t++
break}i+3!==t-2&&this.trigger("data",e.subarray(i+3,t-2))
do{t++}while(1!==e[t]&&t<e.length)
i=t-2,t+=3
break
case 1:if(0!==e[t-1]||0!==e[t-2]){t+=3
break}this.trigger("data",e.subarray(i+3,t-2)),i=t-2,t+=3
break
default:t+=3}e=e.subarray(i),t-=i,i=0},this.flush=function(){e&&e.byteLength>3&&this.trigger("data",e.subarray(i+3)),e=null,i=0,this.trigger("done")}}).prototype=new z,Ct={100:!0,110:!0,122:!0,244:!0,44:!0,83:!0,86:!0,118:!0,128:!0,138:!0,139:!0,134:!0},(St=function(){var t,e,i,n,r,a,s,o=new wt
St.prototype.init.call(this),t=this,this.push=function(t){"video"===t.type&&(e=t.trackId,i=t.pts,n=t.dts,o.push(t))},o.on("data",function(s){var o={trackId:e,pts:i,dts:n,data:s}
switch(31&s[0]){case 5:o.nalUnitType="slice_layer_without_partitioning_rbsp_idr"
break
case 6:o.nalUnitType="sei_rbsp",o.escapedRBSP=r(s.subarray(1))
break
case 7:o.nalUnitType="seq_parameter_set_rbsp",o.escapedRBSP=r(s.subarray(1)),o.config=a(o.escapedRBSP)
break
case 8:o.nalUnitType="pic_parameter_set_rbsp"
break
case 9:o.nalUnitType="access_unit_delimiter_rbsp"}t.trigger("data",o)}),o.on("done",function(){t.trigger("done")}),this.flush=function(){o.flush()},s=function(t,e){var i,n=8,r=8
for(i=0;i<t;i++)0!==r&&(r=(n+e.readExpGolomb()+256)%256),n=0===r?n:r},r=function(t){for(var e,i,n=t.byteLength,r=[],a=1;a<n-2;)0===t[a]&&0===t[a+1]&&3===t[a+2]?(r.push(a+2),a+=2):a++
if(0===r.length)return t
e=n-r.length,i=new Uint8Array(e)
var s=0
for(a=0;a<e;s++,a++)s===r[0]&&(s++,r.shift()),i[a]=t[s]
return i},a=function(t){var e,i,n,r,a,o,u,l,c,h,d,p,f,m=0,g=0,y=0,v=0,_=1
if(i=(e=new At(t)).readUnsignedByte(),r=e.readUnsignedByte(),n=e.readUnsignedByte(),e.skipUnsignedExpGolomb(),Ct[i]&&(3===(a=e.readUnsignedExpGolomb())&&e.skipBits(1),e.skipUnsignedExpGolomb(),e.skipUnsignedExpGolomb(),e.skipBits(1),e.readBoolean()))for(d=3!==a?8:12,f=0;f<d;f++)e.readBoolean()&&s(f<6?16:64,e)
if(e.skipUnsignedExpGolomb(),0===(o=e.readUnsignedExpGolomb()))e.readUnsignedExpGolomb()
else if(1===o)for(e.skipBits(1),e.skipExpGolomb(),e.skipExpGolomb(),u=e.readUnsignedExpGolomb(),f=0;f<u;f++)e.skipExpGolomb()
if(e.skipUnsignedExpGolomb(),e.skipBits(1),l=e.readUnsignedExpGolomb(),c=e.readUnsignedExpGolomb(),0===(h=e.readBits(1))&&e.skipBits(1),e.skipBits(1),e.readBoolean()&&(m=e.readUnsignedExpGolomb(),g=e.readUnsignedExpGolomb(),y=e.readUnsignedExpGolomb(),v=e.readUnsignedExpGolomb()),e.readBoolean()&&e.readBoolean()){switch(e.readUnsignedByte()){case 1:p=[1,1]
break
case 2:p=[12,11]
break
case 3:p=[10,11]
break
case 4:p=[16,11]
break
case 5:p=[40,33]
break
case 6:p=[24,11]
break
case 7:p=[20,11]
break
case 8:p=[32,11]
break
case 9:p=[80,33]
break
case 10:p=[18,11]
break
case 11:p=[15,11]
break
case 12:p=[64,33]
break
case 13:p=[160,99]
break
case 14:p=[4,3]
break
case 15:p=[3,2]
break
case 16:p=[2,1]
break
case 255:p=[e.readUnsignedByte()<<8|e.readUnsignedByte(),e.readUnsignedByte()<<8|e.readUnsignedByte()]}p&&(_=p[0]/p[1])}return{profileIdc:i,levelIdc:n,profileCompatibility:r,width:Math.ceil((16*(l+1)-2*m-2*g)*_),height:(2-h)*(c+1)*16-2*y-2*v}}}).prototype=new z
var Lt,Ot={H264Stream:St,NalByteStream:wt};(Lt=function(){var t=new Uint8Array,e=0
Lt.prototype.init.call(this),this.setTimestamp=function(t){e=t},this.parseId3TagSize=function(t,e){var i=t[e+6]<<21|t[e+7]<<14|t[e+8]<<7|t[e+9]
return(16&t[e+5])>>4?i+20:i+10},this.parseAdtsSize=function(t,e){var i=(224&t[e+5])>>5,n=t[e+4]<<3
return 6144&t[e+3]|n|i},this.push=function(i){var n,r,a,s,o=0,u=0
for(t.length?(s=t.length,(t=new Uint8Array(i.byteLength+s)).set(t.subarray(0,s)),t.set(i,s)):t=i;t.length-u>=3;)if(t[u]!=="I".charCodeAt(0)||t[u+1]!=="D".charCodeAt(0)||t[u+2]!=="3".charCodeAt(0))if(!0&t[u]&&240==(240&t[u+1])){if(t.length-u<7)break
if((o=this.parseAdtsSize(t,u))>t.length)break
a={type:"audio",data:t.subarray(u,u+o),pts:e,dts:e},this.trigger("data",a),u+=o}else u++
else{if(t.length-u<10)break
if((o=this.parseId3TagSize(t,u))>t.length)break
r={type:"timed-metadata",data:t.subarray(u,u+o)},this.trigger("data",r),u+=o}n=t.length-u,t=n>0?t.subarray(u):new Uint8Array}}).prototype=new z
var Pt,xt,Ut,It,Dt,Rt,Mt,Bt,Nt,jt,Ft,Vt=Lt,Ht=[33,16,5,32,164,27],qt=[33,65,108,84,1,2,4,8,168,2,4,8,17,191,252],zt=function(t){for(var e=[];t--;)e.push(0)
return e},Wt=function(t){return Object.keys(t).reduce(function(e,i){return e[i]=new Uint8Array(t[i].reduce(function(t,e){return t.concat(e)},[])),e},{})}({96000:[Ht,[227,64],zt(154),[56]],88200:[Ht,[231],zt(170),[56]],64000:[Ht,[248,192],zt(240),[56]],48000:[Ht,[255,192],zt(268),[55,148,128],zt(54),[112]],44100:[Ht,[255,192],zt(268),[55,163,128],zt(84),[112]],32000:[Ht,[255,192],zt(268),[55,234],zt(226),[112]],24000:[Ht,[255,192],zt(268),[55,255,128],zt(268),[111,112],zt(126),[224]],16000:[Ht,[255,192],zt(268),[55,255,128],zt(268),[111,255],zt(269),[223,108],zt(195),[1,192]],12000:[qt,zt(268),[3,127,248],zt(268),[6,255,240],zt(268),[13,255,224],zt(268),[27,253,128],zt(259),[56]],11025:[qt,zt(268),[3,127,248],zt(268),[6,255,240],zt(268),[13,255,224],zt(268),[27,255,192],zt(268),[55,175,128],zt(108),[112]],8000:[qt,zt(268),[3,121,16],zt(47),[7]]}),Gt=(Pt=function(t){return 9e4*t},xt=function(t,e){return t*e},Ut=function(t){return t/9e4},It=function(t,e){return t/e},function(t,e){return Pt(It(t,e))}),Xt=Ot.H264Stream,Yt=["audioobjecttype","channelcount","samplerate","samplingfrequencyindex","samplesize"],$t=["width","height","profileIdc","levelIdc","profileCompatibility"]
Nt=function(t){return t[0]==="I".charCodeAt(0)&&t[1]==="D".charCodeAt(0)&&t[2]==="3".charCodeAt(0)},jt=function(t,e){var i
if(t.length!==e.length)return!1
for(i=0;i<t.length;i++)if(t[i]!==e[i])return!1
return!0},Ft=function(t){var e,i=0
for(e=0;e<t.length;e++)i+=t[e].data.byteLength
return i},(Rt=function(t,e){var i=[],n=0,r=0,a=0,s=1/0
e=e||{},Rt.prototype.init.call(this),this.push=function(e){Y(t,e),t&&Yt.forEach(function(i){t[i]=e[i]}),i.push(e)},this.setEarliestDts=function(e){r=e-t.timelineStartInfo.baseMediaDecodeTime},this.setVideoBaseMediaDecodeTime=function(t){s=t},this.setAudioAppendStart=function(t){a=t},this.flush=function(){var r,a,s,o
0!==i.length?(r=this.trimAdtsFramesByEarliestDts_(i),t.baseMediaDecodeTime=X(t,e.keepOriginalTimestamps),this.prefixWithSilence_(t,r),t.samples=this.generateSampleTable_(r),s=F.mdat(this.concatenateFrameData_(r)),i=[],a=F.moof(n,[t]),o=new Uint8Array(a.byteLength+s.byteLength),n++,o.set(a),o.set(s,a.byteLength),G(t),this.trigger("data",{track:t,boxes:o}),this.trigger("done","AudioSegmentStream")):this.trigger("done","AudioSegmentStream")},this.prefixWithSilence_=function(t,e){var i,n,r,o,u=0,l=0,c=0
if(e.length&&(i=Gt(t.baseMediaDecodeTime,t.samplerate),n=Math.ceil(9e4/(t.samplerate/1024)),a&&s&&(u=i-Math.max(a,s),c=(l=Math.floor(u/n))*n),!(l<1||c>45e3))){for((r=Wt[t.samplerate])||(r=e[0].data),o=0;o<l;o++)e.splice(o,0,{data:r})
t.baseMediaDecodeTime-=Math.floor(function(t,e){return xt(Ut(t),e)}(c,t.samplerate))}},this.trimAdtsFramesByEarliestDts_=function(e){return t.minSegmentDts>=r?e:(t.minSegmentDts=1/0,e.filter(function(e){return e.dts>=r&&(t.minSegmentDts=Math.min(t.minSegmentDts,e.dts),t.minSegmentPts=t.minSegmentDts,!0)}))},this.generateSampleTable_=function(t){var e,i,n=[]
for(e=0;e<t.length;e++)i=t[e],n.push({size:i.data.byteLength,duration:1024})
return n},this.concatenateFrameData_=function(t){var e,i,n=0,r=new Uint8Array(Ft(t))
for(e=0;e<t.length;e++)i=t[e],r.set(i.data,n),n+=i.data.byteLength
return r}}).prototype=new z,(Dt=function(t,e){var i,n,r=0,a=[],s=[]
e=e||{},Dt.prototype.init.call(this),delete t.minPTS,this.gopCache_=[],this.push=function(e){Y(t,e),"seq_parameter_set_rbsp"!==e.nalUnitType||i||(i=e.config,t.sps=[e.data],$t.forEach(function(e){t[e]=i[e]},this)),"pic_parameter_set_rbsp"!==e.nalUnitType||n||(n=e.data,t.pps=[e.data]),a.push(e)},this.flush=function(){for(var i,n,o,u,l;a.length&&"access_unit_delimiter_rbsp"!==a[0].nalUnitType;)a.shift()
if(0===a.length)return this.resetStream_(),void this.trigger("done","VideoSegmentStream")
if((n=function(t){var e,i,n=[],r=[]
for(n.byteLength=0,n.nalCount=0,n.duration=0,n.pts=t[0].pts,n.dts=t[0].dts,r.byteLength=0,r.nalCount=0,r.duration=0,r.pts=t[0].pts,r.dts=t[0].dts,e=0;e<t.length;e++)(i=t[e]).keyFrame?(n.length&&(r.push(n),r.byteLength+=n.byteLength,r.nalCount+=n.nalCount,r.duration+=n.duration),(n=[i]).nalCount=i.length,n.byteLength=i.byteLength,n.pts=i.pts,n.dts=i.dts,n.duration=i.duration):(n.duration+=i.duration,n.nalCount+=i.length,n.byteLength+=i.byteLength,n.push(i))
return r.length&&n.duration<=0&&(n.duration=r[r.length-1].duration),r.byteLength+=n.byteLength,r.nalCount+=n.nalCount,r.duration+=n.duration,r.push(n),r}(function(t){var e,i,n=[],r=[]
for(n.byteLength=0,e=0;e<t.length;e++)"access_unit_delimiter_rbsp"===(i=t[e]).nalUnitType?(n.length&&(n.duration=i.dts-n.dts,r.push(n)),(n=[i]).byteLength=i.data.byteLength,n.pts=i.pts,n.dts=i.dts):("slice_layer_without_partitioning_rbsp_idr"===i.nalUnitType&&(n.keyFrame=!0),n.duration=i.dts-n.dts,n.byteLength+=i.data.byteLength,n.push(i))
return r.length&&(!n.duration||n.duration<=0)&&(n.duration=r[r.length-1].duration),r.push(n),r}(a)))[0][0].keyFrame||((i=this.getGopForFusion_(a[0],t))?(n.unshift(i),n.byteLength+=i.byteLength,n.nalCount+=i.nalCount,n.pts=i.pts,n.dts=i.dts,n.duration+=i.duration):n=function(t){var e
return!t[0][0].keyFrame&&t.length>1&&(e=t.shift(),t.byteLength-=e.byteLength,t.nalCount-=e.nalCount,t[0][0].dts=e.dts,t[0][0].pts=e.pts,t[0][0].duration+=e.duration),t}(n)),s.length){var c
if(!(c=e.alignGopsAtEnd?this.alignGopsAtEnd_(n):this.alignGopsAtStart_(n)))return this.gopCache_.unshift({gop:n.pop(),pps:t.pps,sps:t.sps}),this.gopCache_.length=Math.min(6,this.gopCache_.length),a=[],this.resetStream_(),void this.trigger("done","VideoSegmentStream")
G(t),n=c}Y(t,n),t.samples=function(t,e){var i,n,r,a,s,o=e||0,u=[]
for(i=0;i<t.length;i++)for(a=t[i],n=0;n<a.length;n++)s=a[n],o+=(r=W(s,o)).size,u.push(r)
return u}(n),u=F.mdat(function(t){var e,i,n,r,a,s,o=0,u=t.byteLength,l=t.nalCount,c=new Uint8Array(u+4*l),h=new DataView(c.buffer)
for(e=0;e<t.length;e++)for(r=t[e],i=0;i<r.length;i++)for(a=r[i],n=0;n<a.length;n++)s=a[n],h.setUint32(o,s.data.byteLength),o+=4,c.set(s.data,o),o+=s.data.byteLength
return c}(n)),t.baseMediaDecodeTime=X(t,e.keepOriginalTimestamps),this.trigger("processedGopsInfo",n.map(function(t){return{pts:t.pts,dts:t.dts,byteLength:t.byteLength}})),this.gopCache_.unshift({gop:n.pop(),pps:t.pps,sps:t.sps}),this.gopCache_.length=Math.min(6,this.gopCache_.length),a=[],this.trigger("baseMediaDecodeTime",t.baseMediaDecodeTime),this.trigger("timelineStartInfo",t.timelineStartInfo),o=F.moof(r,[t]),l=new Uint8Array(o.byteLength+u.byteLength),r++,l.set(o),l.set(u,o.byteLength),this.trigger("data",{track:t,boxes:l}),this.resetStream_(),this.trigger("done","VideoSegmentStream")},this.resetStream_=function(){G(t),i=void 0,n=void 0},this.getGopForFusion_=function(e){var i,n,r,a,s,o=1/0
for(s=0;s<this.gopCache_.length;s++)r=(a=this.gopCache_[s]).gop,t.pps&&jt(t.pps[0],a.pps[0])&&t.sps&&jt(t.sps[0],a.sps[0])&&(r.dts<t.timelineStartInfo.dts||(i=e.dts-r.dts-r.duration)>=-1e4&&i<=45e3&&(!n||o>i)&&(n=a,o=i))
return n?n.gop:null},this.alignGopsAtStart_=function(t){var e,i,n,r,a,o,u,l
for(a=t.byteLength,o=t.nalCount,u=t.duration,e=i=0;e<s.length&&i<t.length&&(n=s[e],r=t[i],n.pts!==r.pts);)r.pts>n.pts?e++:(i++,a-=r.byteLength,o-=r.nalCount,u-=r.duration)
return 0===i?t:i===t.length?null:((l=t.slice(i)).byteLength=a,l.duration=u,l.nalCount=o,l.pts=l[0].pts,l.dts=l[0].dts,l)},this.alignGopsAtEnd_=function(t){var e,i,n,r,a,o,u
for(e=s.length-1,i=t.length-1,a=null,o=!1;e>=0&&i>=0;){if(n=s[e],r=t[i],n.pts===r.pts){o=!0
break}n.pts>r.pts?e--:(e===s.length-1&&(a=i),i--)}if(!o&&null===a)return null
if(0===(u=o?i:a))return t
var l=t.slice(u),c=l.reduce(function(t,e){return t.byteLength+=e.byteLength,t.duration+=e.duration,t.nalCount+=e.nalCount,t},{byteLength:0,duration:0,nalCount:0})
return l.byteLength=c.byteLength,l.duration=c.duration,l.nalCount=c.nalCount,l.pts=l[0].pts,l.dts=l[0].dts,l},this.alignGopsWith=function(t){s=t}}).prototype=new z,(Bt=function(t,e){this.numberOfTracks=0,this.metadataStream=e,void 0!==t.remux?this.remuxTracks=!!t.remux:this.remuxTracks=!0,this.pendingTracks=[],this.videoTrack=null,this.pendingBoxes=[],this.pendingCaptions=[],this.pendingMetadata=[],this.pendingBytes=0,this.emittedTracks=0,Bt.prototype.init.call(this),this.push=function(t){return t.text?this.pendingCaptions.push(t):t.frames?this.pendingMetadata.push(t):(this.pendingTracks.push(t.track),this.pendingBoxes.push(t.boxes),this.pendingBytes+=t.boxes.byteLength,"video"===t.track.type&&(this.videoTrack=t.track),void("audio"===t.track.type&&(this.audioTrack=t.track)))}}).prototype=new z,Bt.prototype.flush=function(t){var e,i,n,r,a=0,s={captions:[],captionStreams:{},metadata:[],info:{}},o=0
if(this.pendingTracks.length<this.numberOfTracks){if("VideoSegmentStream"!==t&&"AudioSegmentStream"!==t)return
if(this.remuxTracks)return
if(0===this.pendingTracks.length)return this.emittedTracks++,void(this.emittedTracks>=this.numberOfTracks&&(this.trigger("done"),this.emittedTracks=0))}for(this.videoTrack?(o=this.videoTrack.timelineStartInfo.pts,$t.forEach(function(t){s.info[t]=this.videoTrack[t]},this)):this.audioTrack&&(o=this.audioTrack.timelineStartInfo.pts,Yt.forEach(function(t){s.info[t]=this.audioTrack[t]},this)),1===this.pendingTracks.length?s.type=this.pendingTracks[0].type:s.type="combined",this.emittedTracks+=this.pendingTracks.length,n=F.initSegment(this.pendingTracks),s.initSegment=new Uint8Array(n.byteLength),s.initSegment.set(n),s.data=new Uint8Array(this.pendingBytes),r=0;r<this.pendingBoxes.length;r++)s.data.set(this.pendingBoxes[r],a),a+=this.pendingBoxes[r].byteLength
for(r=0;r<this.pendingCaptions.length;r++)(e=this.pendingCaptions[r]).startTime=e.startPts-o,e.startTime/=9e4,e.endTime=e.endPts-o,e.endTime/=9e4,s.captionStreams[e.stream]=!0,s.captions.push(e)
for(r=0;r<this.pendingMetadata.length;r++)(i=this.pendingMetadata[r]).cueTime=i.pts-o,i.cueTime/=9e4,s.metadata.push(i)
s.metadata.dispatchType=this.metadataStream.dispatchType,this.pendingTracks.length=0,this.videoTrack=null,this.pendingBoxes.length=0,this.pendingCaptions.length=0,this.pendingBytes=0,this.pendingMetadata.length=0,this.trigger("data",s),this.emittedTracks>=this.numberOfTracks&&(this.trigger("done"),this.emittedTracks=0)},(Mt=function(t){var e,i,n=this,r=!0
Mt.prototype.init.call(this),t=t||{},this.baseMediaDecodeTime=t.baseMediaDecodeTime||0,this.transmuxPipeline_={},this.setupAacPipeline=function(){var e={}
this.transmuxPipeline_=e,e.type="aac",e.metadataStream=new bt.MetadataStream,e.aacStream=new Vt,e.audioTimestampRolloverStream=new bt.TimestampRolloverStream("audio"),e.timedMetadataTimestampRolloverStream=new bt.TimestampRolloverStream("timed-metadata"),e.adtsStream=new Et,e.coalesceStream=new Bt(t,e.metadataStream),e.headOfPipeline=e.aacStream,e.aacStream.pipe(e.audioTimestampRolloverStream).pipe(e.adtsStream),e.aacStream.pipe(e.timedMetadataTimestampRolloverStream).pipe(e.metadataStream).pipe(e.coalesceStream),e.metadataStream.on("timestamp",function(t){e.aacStream.setTimestamp(t.timeStamp)}),e.aacStream.on("data",function(r){"timed-metadata"!==r.type||e.audioSegmentStream||(i=i||{timelineStartInfo:{baseMediaDecodeTime:n.baseMediaDecodeTime},codec:"adts",type:"audio"},e.coalesceStream.numberOfTracks++,e.audioSegmentStream=new Rt(i,t),e.adtsStream.pipe(e.audioSegmentStream).pipe(e.coalesceStream))}),e.coalesceStream.on("data",this.trigger.bind(this,"data")),e.coalesceStream.on("done",this.trigger.bind(this,"done"))},this.setupTsPipeline=function(){var r={}
this.transmuxPipeline_=r,r.type="ts",r.metadataStream=new bt.MetadataStream,r.packetStream=new bt.TransportPacketStream,r.parseStream=new bt.TransportParseStream,r.elementaryStream=new bt.ElementaryStream,r.videoTimestampRolloverStream=new bt.TimestampRolloverStream("video"),r.audioTimestampRolloverStream=new bt.TimestampRolloverStream("audio"),r.timedMetadataTimestampRolloverStream=new bt.TimestampRolloverStream("timed-metadata"),r.adtsStream=new Et,r.h264Stream=new Xt,r.captionStream=new bt.CaptionStream,r.coalesceStream=new Bt(t,r.metadataStream),r.headOfPipeline=r.packetStream,r.packetStream.pipe(r.parseStream).pipe(r.elementaryStream),r.elementaryStream.pipe(r.videoTimestampRolloverStream).pipe(r.h264Stream),r.elementaryStream.pipe(r.audioTimestampRolloverStream).pipe(r.adtsStream),r.elementaryStream.pipe(r.timedMetadataTimestampRolloverStream).pipe(r.metadataStream).pipe(r.coalesceStream),r.h264Stream.pipe(r.captionStream).pipe(r.coalesceStream),r.elementaryStream.on("data",function(a){var s
if("metadata"===a.type){for(s=a.tracks.length;s--;)e||"video"!==a.tracks[s].type?i||"audio"!==a.tracks[s].type||((i=a.tracks[s]).timelineStartInfo.baseMediaDecodeTime=n.baseMediaDecodeTime):(e=a.tracks[s]).timelineStartInfo.baseMediaDecodeTime=n.baseMediaDecodeTime
e&&!r.videoSegmentStream&&(r.coalesceStream.numberOfTracks++,r.videoSegmentStream=new Dt(e,t),r.videoSegmentStream.on("timelineStartInfo",function(t){i&&(i.timelineStartInfo=t,r.audioSegmentStream.setEarliestDts(t.dts))}),r.videoSegmentStream.on("processedGopsInfo",n.trigger.bind(n,"gopInfo")),r.videoSegmentStream.on("baseMediaDecodeTime",function(t){i&&r.audioSegmentStream.setVideoBaseMediaDecodeTime(t)}),r.h264Stream.pipe(r.videoSegmentStream).pipe(r.coalesceStream)),i&&!r.audioSegmentStream&&(r.coalesceStream.numberOfTracks++,r.audioSegmentStream=new Rt(i,t),r.adtsStream.pipe(r.audioSegmentStream).pipe(r.coalesceStream))}}),r.coalesceStream.on("data",this.trigger.bind(this,"data")),r.coalesceStream.on("done",this.trigger.bind(this,"done"))},this.setBaseMediaDecodeTime=function(t){var n=this.transmuxPipeline_
this.baseMediaDecodeTime=t,i&&(i.timelineStartInfo.dts=void 0,i.timelineStartInfo.pts=void 0,G(i),i.timelineStartInfo.baseMediaDecodeTime=t,n.audioTimestampRolloverStream&&n.audioTimestampRolloverStream.discontinuity()),e&&(n.videoSegmentStream&&(n.videoSegmentStream.gopCache_=[],n.videoTimestampRolloverStream.discontinuity()),e.timelineStartInfo.dts=void 0,e.timelineStartInfo.pts=void 0,G(e),n.captionStream.reset(),e.timelineStartInfo.baseMediaDecodeTime=t),n.timedMetadataTimestampRolloverStream&&n.timedMetadataTimestampRolloverStream.discontinuity()},this.setAudioAppendStart=function(t){i&&this.transmuxPipeline_.audioSegmentStream.setAudioAppendStart(t)},this.alignGopsWith=function(t){e&&this.transmuxPipeline_.videoSegmentStream&&this.transmuxPipeline_.videoSegmentStream.alignGopsWith(t)},this.push=function(t){if(r){var e=Nt(t)
e&&"aac"!==this.transmuxPipeline_.type?this.setupAacPipeline():e||"ts"===this.transmuxPipeline_.type||this.setupTsPipeline(),r=!1}this.transmuxPipeline_.headOfPipeline.push(t)},this.flush=function(){r=!0,this.transmuxPipeline_.headOfPipeline.flush()},this.resetCaptions=function(){this.transmuxPipeline_.captionStream&&this.transmuxPipeline_.captionStream.reset()}}).prototype=new z
var Kt,Jt,Qt={Transmuxer:Mt,VideoSegmentStream:Dt,AudioSegmentStream:Rt,AUDIO_PROPERTIES:Yt,VIDEO_PROPERTIES:$t},Zt=H.parseType,te=function(t){return new Date(1e3*t-20828448e5)},ee=function(t){return{isLeading:(12&t[0])>>>2,dependsOn:3&t[0],isDependedOn:(192&t[1])>>>6,hasRedundancy:(48&t[1])>>>4,paddingValue:(14&t[1])>>>1,isNonSyncSample:1&t[1],degradationPriority:t[2]<<8|t[3]}},ie={avc1:function(t){var e=new DataView(t.buffer,t.byteOffset,t.byteLength)
return{dataReferenceIndex:e.getUint16(6),width:e.getUint16(24),height:e.getUint16(26),horizresolution:e.getUint16(28)+e.getUint16(30)/16,vertresolution:e.getUint16(32)+e.getUint16(34)/16,frameCount:e.getUint16(40),depth:e.getUint16(74),config:Kt(t.subarray(78,t.byteLength))}},avcC:function(t){var e,i,n,r,a=new DataView(t.buffer,t.byteOffset,t.byteLength),s={configurationVersion:t[0],avcProfileIndication:t[1],profileCompatibility:t[2],avcLevelIndication:t[3],lengthSizeMinusOne:3&t[4],sps:[],pps:[]},o=31&t[5]
for(n=6,r=0;r<o;r++)i=a.getUint16(n),n+=2,s.sps.push(new Uint8Array(t.subarray(n,n+i))),n+=i
for(e=t[n],n++,r=0;r<e;r++)i=a.getUint16(n),n+=2,s.pps.push(new Uint8Array(t.subarray(n,n+i))),n+=i
return s},btrt:function(t){var e=new DataView(t.buffer,t.byteOffset,t.byteLength)
return{bufferSizeDB:e.getUint32(0),maxBitrate:e.getUint32(4),avgBitrate:e.getUint32(8)}},esds:function(t){return{version:t[0],flags:new Uint8Array(t.subarray(1,4)),esId:t[6]<<8|t[7],streamPriority:31&t[8],decoderConfig:{objectProfileIndication:t[11],streamType:t[12]>>>2&63,bufferSize:t[13]<<16|t[14]<<8|t[15],maxBitrate:t[16]<<24|t[17]<<16|t[18]<<8|t[19],avgBitrate:t[20]<<24|t[21]<<16|t[22]<<8|t[23],decoderConfigDescriptor:{tag:t[24],length:t[25],audioObjectType:t[26]>>>3&31,samplingFrequencyIndex:(7&t[26])<<1|t[27]>>>7&1,channelConfiguration:t[27]>>>3&15}}}},ftyp:function(t){for(var e=new DataView(t.buffer,t.byteOffset,t.byteLength),i={majorBrand:Zt(t.subarray(0,4)),minorVersion:e.getUint32(4),compatibleBrands:[]},n=8;n<t.byteLength;)i.compatibleBrands.push(Zt(t.subarray(n,n+4))),n+=4
return i},dinf:function(t){return{boxes:Kt(t)}},dref:function(t){return{version:t[0],flags:new Uint8Array(t.subarray(1,4)),dataReferences:Kt(t.subarray(8))}},hdlr:function(t){var e={version:new DataView(t.buffer,t.byteOffset,t.byteLength).getUint8(0),flags:new Uint8Array(t.subarray(1,4)),handlerType:Zt(t.subarray(8,12)),name:""},i=8
for(i=24;i<t.byteLength;i++){if(0===t[i]){i++
break}e.name+=String.fromCharCode(t[i])}return e.name=decodeURIComponent(escape(e.name)),e},mdat:function(t){return{byteLength:t.byteLength,nals:function(t){var e,i,n=new DataView(t.buffer,t.byteOffset,t.byteLength),r=[]
for(e=0;e+4<t.length;e+=i)if(i=n.getUint32(e),e+=4,i<=0)r.push("<span style='color:red;'>MALFORMED DATA</span>")
else switch(31&t[e]){case 1:r.push("slice_layer_without_partitioning_rbsp")
break
case 5:r.push("slice_layer_without_partitioning_rbsp_idr")
break
case 6:r.push("sei_rbsp")
break
case 7:r.push("seq_parameter_set_rbsp")
break
case 8:r.push("pic_parameter_set_rbsp")
break
case 9:r.push("access_unit_delimiter_rbsp")
break
default:r.push("UNKNOWN NAL - "+t[e]&31)}return r}(t)}},mdhd:function(t){var e,i=new DataView(t.buffer,t.byteOffset,t.byteLength),n=4,r={version:i.getUint8(0),flags:new Uint8Array(t.subarray(1,4)),language:""}
return 1===r.version?(n+=4,r.creationTime=te(i.getUint32(n)),n+=8,r.modificationTime=te(i.getUint32(n)),n+=4,r.timescale=i.getUint32(n),n+=8,r.duration=i.getUint32(n)):(r.creationTime=te(i.getUint32(n)),n+=4,r.modificationTime=te(i.getUint32(n)),n+=4,r.timescale=i.getUint32(n),n+=4,r.duration=i.getUint32(n)),n+=4,e=i.getUint16(n),r.language+=String.fromCharCode(96+(e>>10)),r.language+=String.fromCharCode(96+((992&e)>>5)),r.language+=String.fromCharCode(96+(31&e)),r},mdia:function(t){return{boxes:Kt(t)}},mfhd:function(t){return{version:t[0],flags:new Uint8Array(t.subarray(1,4)),sequenceNumber:t[4]<<24|t[5]<<16|t[6]<<8|t[7]}},minf:function(t){return{boxes:Kt(t)}},mp4a:function(t){var e=new DataView(t.buffer,t.byteOffset,t.byteLength),i={dataReferenceIndex:e.getUint16(6),channelcount:e.getUint16(16),samplesize:e.getUint16(18),samplerate:e.getUint16(24)+e.getUint16(26)/65536}
return t.byteLength>28&&(i.streamDescriptor=Kt(t.subarray(28))[0]),i},moof:function(t){return{boxes:Kt(t)}},moov:function(t){return{boxes:Kt(t)}},mvex:function(t){return{boxes:Kt(t)}},mvhd:function(t){var e=new DataView(t.buffer,t.byteOffset,t.byteLength),i=4,n={version:e.getUint8(0),flags:new Uint8Array(t.subarray(1,4))}
return 1===n.version?(i+=4,n.creationTime=te(e.getUint32(i)),i+=8,n.modificationTime=te(e.getUint32(i)),i+=4,n.timescale=e.getUint32(i),i+=8,n.duration=e.getUint32(i)):(n.creationTime=te(e.getUint32(i)),i+=4,n.modificationTime=te(e.getUint32(i)),i+=4,n.timescale=e.getUint32(i),i+=4,n.duration=e.getUint32(i)),i+=4,n.rate=e.getUint16(i)+e.getUint16(i+2)/16,i+=4,n.volume=e.getUint8(i)+e.getUint8(i+1)/8,i+=2,i+=2,i+=8,n.matrix=new Uint32Array(t.subarray(i,i+36)),i+=36,i+=24,n.nextTrackId=e.getUint32(i),n},pdin:function(t){var e=new DataView(t.buffer,t.byteOffset,t.byteLength)
return{version:e.getUint8(0),flags:new Uint8Array(t.subarray(1,4)),rate:e.getUint32(4),initialDelay:e.getUint32(8)}},sdtp:function(t){var e,i={version:t[0],flags:new Uint8Array(t.subarray(1,4)),samples:[]}
for(e=4;e<t.byteLength;e++)i.samples.push({dependsOn:(48&t[e])>>4,isDependedOn:(12&t[e])>>2,hasRedundancy:3&t[e]})
return i},sidx:function(t){var e,i=new DataView(t.buffer,t.byteOffset,t.byteLength),n={version:t[0],flags:new Uint8Array(t.subarray(1,4)),references:[],referenceId:i.getUint32(4),timescale:i.getUint32(8),earliestPresentationTime:i.getUint32(12),firstOffset:i.getUint32(16)},r=i.getUint16(22)
for(e=24;r;e+=12,r--)n.references.push({referenceType:(128&t[e])>>>7,referencedSize:2147483647&i.getUint32(e),subsegmentDuration:i.getUint32(e+4),startsWithSap:!!(128&t[e+8]),sapType:(112&t[e+8])>>>4,sapDeltaTime:268435455&i.getUint32(e+8)})
return n},smhd:function(t){return{version:t[0],flags:new Uint8Array(t.subarray(1,4)),balance:t[4]+t[5]/256}},stbl:function(t){return{boxes:Kt(t)}},stco:function(t){var e,i=new DataView(t.buffer,t.byteOffset,t.byteLength),n={version:t[0],flags:new Uint8Array(t.subarray(1,4)),chunkOffsets:[]},r=i.getUint32(4)
for(e=8;r;e+=4,r--)n.chunkOffsets.push(i.getUint32(e))
return n},stsc:function(t){var e,i=new DataView(t.buffer,t.byteOffset,t.byteLength),n=i.getUint32(4),r={version:t[0],flags:new Uint8Array(t.subarray(1,4)),sampleToChunks:[]}
for(e=8;n;e+=12,n--)r.sampleToChunks.push({firstChunk:i.getUint32(e),samplesPerChunk:i.getUint32(e+4),sampleDescriptionIndex:i.getUint32(e+8)})
return r},stsd:function(t){return{version:t[0],flags:new Uint8Array(t.subarray(1,4)),sampleDescriptions:Kt(t.subarray(8))}},stsz:function(t){var e,i=new DataView(t.buffer,t.byteOffset,t.byteLength),n={version:t[0],flags:new Uint8Array(t.subarray(1,4)),sampleSize:i.getUint32(4),entries:[]}
for(e=12;e<t.byteLength;e+=4)n.entries.push(i.getUint32(e))
return n},stts:function(t){var e,i=new DataView(t.buffer,t.byteOffset,t.byteLength),n={version:t[0],flags:new Uint8Array(t.subarray(1,4)),timeToSamples:[]},r=i.getUint32(4)
for(e=8;r;e+=8,r--)n.timeToSamples.push({sampleCount:i.getUint32(e),sampleDelta:i.getUint32(e+4)})
return n},styp:function(t){return ie.ftyp(t)},tfdt:function(t){var e={version:t[0],flags:new Uint8Array(t.subarray(1,4)),baseMediaDecodeTime:t[4]<<24|t[5]<<16|t[6]<<8|t[7]}
return 1===e.version&&(e.baseMediaDecodeTime*=Math.pow(2,32),e.baseMediaDecodeTime+=t[8]<<24|t[9]<<16|t[10]<<8|t[11]),e},tfhd:function(t){var e,i=new DataView(t.buffer,t.byteOffset,t.byteLength),n={version:t[0],flags:new Uint8Array(t.subarray(1,4)),trackId:i.getUint32(4)},r=1&n.flags[2],a=2&n.flags[2],s=8&n.flags[2],o=16&n.flags[2],u=32&n.flags[2],l=65536&n.flags[0],c=131072&n.flags[0]
return e=8,r&&(e+=4,n.baseDataOffset=i.getUint32(12),e+=4),a&&(n.sampleDescriptionIndex=i.getUint32(e),e+=4),s&&(n.defaultSampleDuration=i.getUint32(e),e+=4),o&&(n.defaultSampleSize=i.getUint32(e),e+=4),u&&(n.defaultSampleFlags=i.getUint32(e)),l&&(n.durationIsEmpty=!0),!r&&c&&(n.baseDataOffsetIsMoof=!0),n},tkhd:function(t){var e=new DataView(t.buffer,t.byteOffset,t.byteLength),i=4,n={version:e.getUint8(0),flags:new Uint8Array(t.subarray(1,4))}
return 1===n.version?(i+=4,n.creationTime=te(e.getUint32(i)),i+=8,n.modificationTime=te(e.getUint32(i)),i+=4,n.trackId=e.getUint32(i),i+=4,i+=8,n.duration=e.getUint32(i)):(n.creationTime=te(e.getUint32(i)),i+=4,n.modificationTime=te(e.getUint32(i)),i+=4,n.trackId=e.getUint32(i),i+=4,i+=4,n.duration=e.getUint32(i)),i+=4,i+=8,n.layer=e.getUint16(i),i+=2,n.alternateGroup=e.getUint16(i),i+=2,n.volume=e.getUint8(i)+e.getUint8(i+1)/8,i+=2,i+=2,n.matrix=new Uint32Array(t.subarray(i,i+36)),i+=36,n.width=e.getUint16(i)+e.getUint16(i+2)/16,i+=4,n.height=e.getUint16(i)+e.getUint16(i+2)/16,n},traf:function(t){return{boxes:Kt(t)}},trak:function(t){return{boxes:Kt(t)}},trex:function(t){var e=new DataView(t.buffer,t.byteOffset,t.byteLength)
return{version:t[0],flags:new Uint8Array(t.subarray(1,4)),trackId:e.getUint32(4),defaultSampleDescriptionIndex:e.getUint32(8),defaultSampleDuration:e.getUint32(12),defaultSampleSize:e.getUint32(16),sampleDependsOn:3&t[20],sampleIsDependedOn:(192&t[21])>>6,sampleHasRedundancy:(48&t[21])>>4,samplePaddingValue:(14&t[21])>>1,sampleIsDifferenceSample:!!(1&t[21]),sampleDegradationPriority:e.getUint16(22)}},trun:function(t){var e,i={version:t[0],flags:new Uint8Array(t.subarray(1,4)),samples:[]},n=new DataView(t.buffer,t.byteOffset,t.byteLength),r=1&i.flags[2],a=4&i.flags[2],s=1&i.flags[1],o=2&i.flags[1],u=4&i.flags[1],l=8&i.flags[1],c=n.getUint32(4),h=8
for(r&&(i.dataOffset=n.getInt32(h),h+=4),a&&c&&(e={flags:ee(t.subarray(h,h+4))},h+=4,s&&(e.duration=n.getUint32(h),h+=4),o&&(e.size=n.getUint32(h),h+=4),l&&(e.compositionTimeOffset=n.getUint32(h),h+=4),i.samples.push(e),c--);c--;)e={},s&&(e.duration=n.getUint32(h),h+=4),o&&(e.size=n.getUint32(h),h+=4),u&&(e.flags=ee(t.subarray(h,h+4)),h+=4),l&&(e.compositionTimeOffset=n.getUint32(h),h+=4),i.samples.push(e)
return i},"url ":function(t){return{version:t[0],flags:new Uint8Array(t.subarray(1,4))}},vmhd:function(t){var e=new DataView(t.buffer,t.byteOffset,t.byteLength)
return{version:t[0],flags:new Uint8Array(t.subarray(1,4)),graphicsmode:e.getUint16(4),opcolor:new Uint16Array([e.getUint16(6),e.getUint16(8),e.getUint16(10)])}}},ne={inspect:Kt=function(t){for(var e,i,n,r,a,s=0,o=[],u=new ArrayBuffer(t.length),l=new Uint8Array(u),c=0;c<t.length;++c)l[c]=t[c]
for(e=new DataView(u);s<t.byteLength;)i=e.getUint32(s),n=Zt(t.subarray(s+4,s+8)),r=i>1?s+i:t.byteLength,(a=(ie[n]||function(t){return{data:t}})(t.subarray(s+8,r))).size=i,a.type=n,o.push(a),s=r
return o},textify:Jt=function(t,e){var i
return e=e||0,i=new Array(2*e+1).join(" "),t.map(function(t,n){return i+t.type+"\n"+Object.keys(t).filter(function(t){return"type"!==t&&"boxes"!==t}).map(function(e){var n=i+"  "+e+": ",r=t[e]
if(r instanceof Uint8Array||r instanceof Uint32Array){var a=Array.prototype.slice.call(new Uint8Array(r.buffer,r.byteOffset,r.byteLength)).map(function(t){return" "+("00"+t.toString(16)).slice(-2)}).join("").match(/.{1,24}/g)
return a?1===a.length?n+"<"+a.join("").slice(1)+">":n+"<\n"+a.map(function(t){return i+"  "+t}).join("\n")+"\n"+i+"  >":n+"<>"}return n+JSON.stringify(r,null,2).split("\n").map(function(t,e){return 0===e?t:i+"  "+t}).join("\n")}).join("\n")+(t.boxes?"\n"+Jt(t.boxes,e+1):"")}).join("\n")},parseTfdt:ie.tfdt,parseHdlr:ie.hdlr,parseTfhd:ie.tfhd,parseTrun:ie.trun},re=function(t){for(var e,i,n=t.byteLength,r=[],a=1;a<n-2;)0===t[a]&&0===t[a+1]&&3===t[a+2]?(r.push(a+2),a+=2):a++
if(0===r.length)return t
e=n-r.length,i=new Uint8Array(e)
var s=0
for(a=0;a<e;s++,a++)s===r[0]&&(s++,r.shift()),i[a]=t[s]
return i},ae=et.CaptionStream,se=function(t,e){for(var i=t,n=0;n<e.length;n++){var r=e[n]
if(i<r.size)return r
i-=r.size}return null},oe={generator:F,probe:H,Transmuxer:Qt.Transmuxer,AudioSegmentStream:Qt.AudioSegmentStream,VideoSegmentStream:Qt.VideoSegmentStream,CaptionParser:function(){var t,e,i,n,r,a=!1
this.isInitialized=function(){return a},this.init=function(){t=new ae,a=!0,t.on("data",function(t){t.startTime=t.startPts/n,t.endTime=t.endPts/n,r.captions.push(t),r.captionStreams[t.stream]=!0})},this.isNewInit=function(t,e){return!(t&&0===t.length||e&&"object"===(void 0===e?"undefined":kt(e))&&0===Object.keys(e).length||i===t[0]&&n===e[i])},this.parse=function(t,a,s){var o
if(!this.isInitialized())return null
if(!a||!s)return null
if(this.isNewInit(a,s))i=a[0],n=s[i]
else if(!i||!n)return e.push(t),null
for(;e.length>0;){var u=e.shift()
this.parse(u,a,s)}return null!==(o=function(t,e,i){return e?{seiNals:function(t,e){var i=H.findBox(t,["moof","traf"]),n={},r=[]
return H.findBox(t,["mdat"]).forEach(function(t,e){var n=i[e]
r.push({mdat:t,traf:n})}),r.forEach(function(t){var i,r=t.mdat,a=t.traf,s=H.findBox(a,["tfhd"]),o=ne.parseTfhd(s[0]),u=o.trackId,l=H.findBox(a,["tfdt"]),c=l.length>0?ne.parseTfdt(l[0]).baseMediaDecodeTime:0,h=H.findBox(a,["trun"])
e===u&&h.length>0&&(i=function(t,e,i){var n,r,a,s,o=new DataView(t.buffer,t.byteOffset,t.byteLength),u=[]
for(r=0;r+4<t.length;r+=a)if(a=o.getUint32(r),r+=4,!(a<=0))switch(31&t[r]){case 6:var l=t.subarray(r+1,r+1+a),c=se(r,e)
n={nalUnitType:"sei_rbsp",size:a,data:l,escapedRBSP:re(l),trackId:i},c?(n.pts=c.pts,n.dts=c.dts,s=c):(n.pts=s.pts,n.dts=s.dts),u.push(n)}return u}(r,function(t,e,i){var n=c,r=i.defaultSampleDuration||0,a=i.defaultSampleSize||0,s=i.trackId,o=[]
return t.forEach(function(t){var e=ne.parseTrun(t).samples
e.forEach(function(t){void 0===t.duration&&(t.duration=r),void 0===t.size&&(t.size=a),t.trackId=s,t.dts=n,void 0===t.compositionTimeOffset&&(t.compositionTimeOffset=0),t.pts=n+t.compositionTimeOffset,n+=t.duration}),o=o.concat(e)}),o}(h,0,o),u),n[u]||(n[u]=[]),n[u]=n[u].concat(i))}),n}(t,e)[e],timescale:i}:null}(t,i,n))&&o.seiNals?(this.pushNals(o.seiNals),this.flushStream(),r):null},this.pushNals=function(e){if(!this.isInitialized()||!e||0===e.length)return null
e.forEach(function(e){t.push(e)})},this.flushStream=function(){if(!this.isInitialized())return null
t.flush()},this.clearParsedCaptions=function(){r.captions=[],r.captionStreams={}},this.resetCaptionStream=function(){if(!this.isInitialized())return null
t.reset()},this.clearAllCaptions=function(){this.clearParsedCaptions(),this.resetCaptionStream()},this.reset=function(){e=[],i=null,n=null,r?this.clearParsedCaptions():r={captions:[],captionStreams:{}},this.resetCaptionStream()},this.reset()}},ue=function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")},le=function(){function t(t,e){for(var i=0;i<e.length;i++){var n=e[i]
n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}return function(e,i,n){return i&&t(e.prototype,i),n&&t(e,n),e}}(),ce=function(){function t(e,i){ue(this,t),this.options=i||{},this.self=e,this.init()}return le(t,[{key:"init",value:function(){var t,e
this.transmuxer&&this.transmuxer.dispose(),this.transmuxer=new oe.Transmuxer(this.options),t=this.self,(e=this.transmuxer).on("data",function(e){var i=e.initSegment
e.initSegment={data:i.buffer,byteOffset:i.byteOffset,byteLength:i.byteLength}
var n=e.data
e.data=n.buffer,t.postMessage({action:"data",segment:e,byteOffset:n.byteOffset,byteLength:n.byteLength},[e.data])}),e.captionStream&&e.captionStream.on("data",function(e){t.postMessage({action:"caption",data:e})}),e.on("done",function(e){t.postMessage({action:"done"})}),e.on("gopInfo",function(e){t.postMessage({action:"gopInfo",gopInfo:e})})}},{key:"push",value:function(t){var e=new Uint8Array(t.data,t.byteOffset,t.byteLength)
this.transmuxer.push(e)}},{key:"reset",value:function(){this.init()}},{key:"setTimestampOffset",value:function(t){var e=t.timestampOffset||0
this.transmuxer.setBaseMediaDecodeTime(Math.round(9e4*e))}},{key:"setAudioAppendStart",value:function(t){this.transmuxer.setAudioAppendStart(Math.ceil(9e4*t.appendStart))}},{key:"flush",value:function(t){this.transmuxer.flush()}},{key:"resetCaptions",value:function(){this.transmuxer.resetCaptions()}},{key:"alignGopsWith",value:function(t){this.transmuxer.alignGopsWith(t.gopsToAlignWith.slice())}}]),t}()
new function(t){t.onmessage=function(e){"init"===e.data.action&&e.data.options?this.messageHandlers=new ce(t,e.data.options):(this.messageHandlers||(this.messageHandlers=new ce(t)),e.data&&e.data.action&&"init"!==e.data.action&&this.messageHandlers[e.data.action]&&this.messageHandlers[e.data.action](e.data))}}(i)}()}),Es={videoCodec:"avc1",videoObjectTypeIndicator:".4d400d",audioProfile:"2"},As=function(t){return t.map(function(t){return t.replace(/avc1\.(\d+)\.(\d+)/i,function(t,e,i){return"avc1."+("00"+Number(e).toString(16)).slice(-2)+"00"+("00"+Number(i).toString(16)).slice(-2)})})},Ls=function(){var t,e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",i={codecCount:0}
return i.codecCount=e.split(",").length,i.codecCount=i.codecCount||2,(t=/(^|\s|,)+(avc[13])([^ ,]*)/i.exec(e))&&(i.videoCodec=t[2],i.videoObjectTypeIndicator=t[3]),i.audioProfile=/(^|\s|,)+mp4a.[0-9A-Fa-f]+\.([0-9A-Fa-f]+)/i.exec(e),i.audioProfile=i.audioProfile&&i.audioProfile[2],i},Os=function(t,e,i){return t+"/"+e+'; codecs="'+i.filter(function(t){return!!t}).join(", ")+'"'},Ps=function(t){return/mp4a\.\d+.\d+/i.test(t)},xs=function(t){return/avc1\.[\da-f]+/i.test(t)},Us=function(t,e,i){var n=null,r=null,a=0,s=[],o=[]
if(!t&&!e)return ya.createTimeRange()
if(!t)return e.buffered
if(!e)return t.buffered
if(i)return t.buffered
if(0===t.buffered.length&&0===e.buffered.length)return ya.createTimeRange()
for(var u=t.buffered,l=e.buffered,c=u.length;c--;)s.push({time:u.start(c),type:"start"}),s.push({time:u.end(c),type:"end"})
for(c=l.length;c--;)s.push({time:l.start(c),type:"start"}),s.push({time:l.end(c),type:"end"})
for(s.sort(function(t,e){return t.time-e.time}),c=0;c<s.length;c++)"start"===s[c].type?2==++a&&(n=s[c].time):"end"===s[c].type&&1==--a&&(r=s[c].time),null!==n&&null!==r&&(o.push([n,r]),n=null,r=null)
return ya.createTimeRanges(o)},Is=function(t){function e(t,i){Ta(this,e)
var n=wa(this,(e.__proto__||Object.getPrototypeOf(e)).call(this,ya.EventTarget))
n.timestampOffset_=0,n.pendingBuffers_=[],n.bufferUpdating_=!1,n.mediaSource_=t,n.codecs_=i,n.audioCodec_=null,n.videoCodec_=null,n.audioDisabled_=!1,n.appendAudioInitSegment_=!0,n.gopBuffer_=[],n.timeMapping_=0,n.safeAppend_=ya.browser.IE_VERSION>=11
var r={remux:!1,alignGopsAtEnd:n.safeAppend_}
return n.codecs_.forEach(function(t){Ps(t)?n.audioCodec_=t:xs(t)&&(n.videoCodec_=t)}),n.transmuxer_=new Cs,n.transmuxer_.postMessage({action:"init",options:r}),n.transmuxer_.onmessage=function(t){return"data"===t.data.action?n.data_(t):"done"===t.data.action?n.done_(t):"gopInfo"===t.data.action?n.appendGopInfo_(t):void 0},Object.defineProperty(n,"timestampOffset",{get:function(){return this.timestampOffset_},set:function(t){"number"==typeof t&&t>=0&&(this.timestampOffset_=t,this.appendAudioInitSegment_=!0,this.gopBuffer_.length=0,this.timeMapping_=0,this.transmuxer_.postMessage({action:"setTimestampOffset",timestampOffset:t}))}}),Object.defineProperty(n,"appendWindowStart",{get:function(){return(this.videoBuffer_||this.audioBuffer_).appendWindowStart},set:function(t){this.videoBuffer_&&(this.videoBuffer_.appendWindowStart=t),this.audioBuffer_&&(this.audioBuffer_.appendWindowStart=t)}}),Object.defineProperty(n,"updating",{get:function(){return!!(this.bufferUpdating_||!this.audioDisabled_&&this.audioBuffer_&&this.audioBuffer_.updating||this.videoBuffer_&&this.videoBuffer_.updating)}}),Object.defineProperty(n,"buffered",{get:function(){return Us(this.videoBuffer_,this.audioBuffer_,this.audioDisabled_)}}),n}return ka(e,t),Sa(e,[{key:"data_",value:function(t){var e=t.data.segment
e.data=new Uint8Array(e.data,t.data.byteOffset,t.data.byteLength),e.initSegment=new Uint8Array(e.initSegment.data,e.initSegment.byteOffset,e.initSegment.byteLength),function(t,e,i){var n=e.player_
if(i.captions&&i.captions.length)for(var r in t.inbandTextTracks_||(t.inbandTextTracks_={}),i.captionStreams)if(!t.inbandTextTracks_[r]){n.tech_.trigger({type:"usage",name:"hls-608"})
var a=n.textTracks().getTrackById(r)
t.inbandTextTracks_[r]=a||n.addRemoteTextTrack({kind:"captions",id:r,label:r},!1).track}i.metadata&&i.metadata.length&&!t.metadataTrack_&&(t.metadataTrack_=n.addRemoteTextTrack({kind:"metadata",label:"Timed Metadata"},!1).track,t.metadataTrack_.inBandMetadataTrackDispatchType=i.metadata.dispatchType)}(this,this.mediaSource_,e),this.pendingBuffers_.push(e)}},{key:"done_",value:function(t){"closed"!==this.mediaSource_.readyState?this.processPendingSegments_():this.pendingBuffers_.length=0}},{key:"createRealSourceBuffers_",value:function(){var t=this,e=["audio","video"]
e.forEach(function(i){if(t[i+"Codec_"]&&!t[i+"Buffer_"]){var n=null
if(t.mediaSource_[i+"Buffer_"])(n=t.mediaSource_[i+"Buffer_"]).updating=!1
else{var r=i+'/mp4;codecs="'+t[i+"Codec_"]+'"'
n=function(t,e){var i=t.addSourceBuffer(e),n=Object.create(null)
n.updating=!1,n.realBuffer_=i
var r=function(t){"function"==typeof i[t]?n[t]=function(){return i[t].apply(i,arguments)}:void 0===n[t]&&Object.defineProperty(n,t,{get:function(){return i[t]},set:function(e){return i[t]=e}})}
for(var a in i)r(a)
return n}(t.mediaSource_.nativeMediaSource_,r),t.mediaSource_[i+"Buffer_"]=n}t[i+"Buffer_"]=n,["update","updatestart","updateend"].forEach(function(r){n.addEventListener(r,function(){if("audio"!==i||!t.audioDisabled_)return"updateend"===r&&(t[i+"Buffer_"].updating=!1),e.every(function(e){return!("audio"!==e||!t.audioDisabled_)||i===e||!t[e+"Buffer_"]||!t[e+"Buffer_"].updating})?t.trigger(r):void 0})})}})}},{key:"appendBuffer",value:function(t){if(this.bufferUpdating_=!0,this.audioBuffer_&&this.audioBuffer_.buffered.length){var e=this.audioBuffer_.buffered
this.transmuxer_.postMessage({action:"setAudioAppendStart",appendStart:e.end(e.length-1)})}this.videoBuffer_&&this.transmuxer_.postMessage({action:"alignGopsWith",gopsToAlignWith:function(t,e,i){if(null==e||!t.length)return[]
var n=Math.ceil(9e4*(e-i+3)),r=void 0
for(r=0;r<t.length&&!(t[r].pts>n);r++);return t.slice(r)}(this.gopBuffer_,this.mediaSource_.player_?this.mediaSource_.player_.currentTime():null,this.timeMapping_)}),this.transmuxer_.postMessage({action:"push",data:t.buffer,byteOffset:t.byteOffset,byteLength:t.byteLength},[t.buffer]),this.transmuxer_.postMessage({action:"flush"})}},{key:"appendGopInfo_",value:function(t){this.gopBuffer_=function(t,e,i){if(!e.length)return t
if(i)return e.slice()
for(var n=e[0].pts,r=0;r<t.length&&!(t[r].pts>=n);r++);return t.slice(0,r).concat(e)}(this.gopBuffer_,t.data.gopInfo,this.safeAppend_)}},{key:"remove",value:function(t,e){if(this.videoBuffer_&&(this.videoBuffer_.updating=!0,this.videoBuffer_.remove(t,e),this.gopBuffer_=function(t,e,i,n){for(var r=Math.ceil(9e4*(e-n)),a=Math.ceil(9e4*(i-n)),s=t.slice(),o=t.length;o--&&!(t[o].pts<=a););if(-1===o)return s
for(var u=o+1;u--&&!(t[u].pts<=r););return u=Math.max(u,0),s.splice(u,o-u+1),s}(this.gopBuffer_,t,e,this.timeMapping_)),!this.audioDisabled_&&this.audioBuffer_&&(this.audioBuffer_.updating=!0,this.audioBuffer_.remove(t,e)),ds(t,e,this.metadataTrack_),this.inbandTextTracks_)for(var i in this.inbandTextTracks_)ds(t,e,this.inbandTextTracks_[i])}},{key:"processPendingSegments_",value:function(){var t={video:{segments:[],bytes:0},audio:{segments:[],bytes:0},captions:[],metadata:[]}
t=this.pendingBuffers_.reduce(function(t,e){var i=e.type,n=e.data,r=e.initSegment
return t[i].segments.push(n),t[i].bytes+=n.byteLength,t[i].initSegment=r,e.captions&&(t.captions=t.captions.concat(e.captions)),e.info&&(t[i].info=e.info),e.metadata&&(t.metadata=t.metadata.concat(e.metadata)),t},t),this.videoBuffer_||this.audioBuffer_||(0===t.video.bytes&&(this.videoCodec_=null),0===t.audio.bytes&&(this.audioCodec_=null),this.createRealSourceBuffers_()),t.audio.info&&this.mediaSource_.trigger({type:"audioinfo",info:t.audio.info}),t.video.info&&this.mediaSource_.trigger({type:"videoinfo",info:t.video.info}),this.appendAudioInitSegment_&&(!this.audioDisabled_&&this.audioBuffer_&&(t.audio.segments.unshift(t.audio.initSegment),t.audio.bytes+=t.audio.initSegment.byteLength),this.appendAudioInitSegment_=!1)
var e=!1
this.videoBuffer_&&t.video.bytes?(t.video.segments.unshift(t.video.initSegment),t.video.bytes+=t.video.initSegment.byteLength,this.concatAndAppendSegments_(t.video,this.videoBuffer_),function(t,e,i){var n=r.a.WebKitDataCue||r.a.VTTCue
if(e&&e.forEach(function(t){var e=t.stream
this.inbandTextTracks_[e].addCue(new n(t.startTime+this.timestampOffset,t.endTime+this.timestampOffset,t.text))},t),i){var a=ps(t.mediaSource_.duration)
if(i.forEach(function(t){var e=t.cueTime+this.timestampOffset
t.frames.forEach(function(t){var i=new n(e,e,t.value||t.url||t.data||"")
i.frame=t,i.value=t,function(t){Object.defineProperties(t.frame,{id:{get:function(){return ya.log.warn("cue.frame.id is deprecated. Use cue.value.key instead."),t.value.key}},value:{get:function(){return ya.log.warn("cue.frame.value is deprecated. Use cue.value.data instead."),t.value.data}},privateData:{get:function(){return ya.log.warn("cue.frame.privateData is deprecated. Use cue.value.data instead."),t.value.data}}})}(i),this.metadataTrack_.addCue(i)},this)},t),t.metadataTrack_&&t.metadataTrack_.cues&&t.metadataTrack_.cues.length){for(var s=t.metadataTrack_.cues,o=[],u=0;u<s.length;u++)s[u]&&o.push(s[u])
var l=o.reduce(function(t,e){var i=t[e.startTime]||[]
return i.push(e),t[e.startTime]=i,t},{}),c=Object.keys(l).sort(function(t,e){return Number(t)-Number(e)})
c.forEach(function(t,e){var i=l[t],n=Number(c[e+1])||a
i.forEach(function(t){t.endTime=n})})}}}(this,t.captions,t.metadata)):!this.videoBuffer_||!this.audioDisabled_&&this.audioBuffer_||(e=!0),!this.audioDisabled_&&this.audioBuffer_&&this.concatAndAppendSegments_(t.audio,this.audioBuffer_),this.pendingBuffers_.length=0,e&&this.trigger("updateend"),this.bufferUpdating_=!1}},{key:"concatAndAppendSegments_",value:function(t,e){var i=0,n=void 0
if(t.bytes){n=new Uint8Array(t.bytes),t.segments.forEach(function(t){n.set(t,i),i+=t.byteLength})
try{e.updating=!0,e.appendBuffer(n)}catch(t){this.mediaSource_.player_&&this.mediaSource_.player_.error({code:-3,type:"APPEND_BUFFER_ERR",message:t.message,originalError:t})}}}},{key:"abort",value:function(){this.videoBuffer_&&this.videoBuffer_.abort(),!this.audioDisabled_&&this.audioBuffer_&&this.audioBuffer_.abort(),this.transmuxer_&&this.transmuxer_.postMessage({action:"reset"}),this.pendingBuffers_.length=0,this.bufferUpdating_=!1}}]),e}(ya.EventTarget),Ds=function(t){function e(){Ta(this,e)
var t=wa(this,(e.__proto__||Object.getPrototypeOf(e)).call(this)),i=void 0
for(i in t.nativeMediaSource_=new r.a.MediaSource,t.nativeMediaSource_)i in e.prototype||"function"!=typeof t.nativeMediaSource_[i]||(t[i]=t.nativeMediaSource_[i].bind(t.nativeMediaSource_))
return t.duration_=NaN,Object.defineProperty(t,"duration",{get:function(){return this.duration_===1/0?this.duration_:this.nativeMediaSource_.duration},set:function(t){this.duration_=t,t===1/0||(this.nativeMediaSource_.duration=t)}}),Object.defineProperty(t,"seekable",{get:function(){return this.duration_===1/0?ya.createTimeRanges([[0,this.nativeMediaSource_.duration]]):this.nativeMediaSource_.seekable}}),Object.defineProperty(t,"readyState",{get:function(){return this.nativeMediaSource_.readyState}}),Object.defineProperty(t,"activeSourceBuffers",{get:function(){return this.activeSourceBuffers_}}),t.sourceBuffers=[],t.activeSourceBuffers_=[],t.updateActiveSourceBuffers_=function(){if(t.activeSourceBuffers_.length=0,1===t.sourceBuffers.length){var e=t.sourceBuffers[0]
return e.appendAudioInitSegment_=!0,e.audioDisabled_=!e.audioCodec_,void t.activeSourceBuffers_.push(e)}for(var i=!1,n=!0,r=0;r<t.player_.audioTracks().length;r++){var a=t.player_.audioTracks()[r]
if(a.enabled&&"main"!==a.kind){i=!0,n=!1
break}}t.sourceBuffers.forEach(function(e,r){if(e.appendAudioInitSegment_=!0,e.videoCodec_&&e.audioCodec_)e.audioDisabled_=i
else if(e.videoCodec_&&!e.audioCodec_)e.audioDisabled_=!0,n=!1
else if(!e.videoCodec_&&e.audioCodec_&&(e.audioDisabled_=r?n:!n,e.audioDisabled_))return
t.activeSourceBuffers_.push(e)})},t.onPlayerMediachange_=function(){t.sourceBuffers.forEach(function(t){t.appendAudioInitSegment_=!0})},t.onHlsReset_=function(){t.sourceBuffers.forEach(function(t){t.transmuxer_&&t.transmuxer_.postMessage({action:"resetCaptions"})})},t.onHlsSegmentTimeMapping_=function(e){t.sourceBuffers.forEach(function(t){return t.timeMapping_=e.mapping})},["sourceopen","sourceclose","sourceended"].forEach(function(t){this.nativeMediaSource_.addEventListener(t,this.trigger.bind(this))},t),t.on("sourceopen",function(e){var i=s.a.querySelector('[src="'+t.url_+'"]')
i&&(t.player_=ya(i.parentNode),t.player_.tech_.on("hls-reset",t.onHlsReset_),t.player_.tech_.on("hls-segment-time-mapping",t.onHlsSegmentTimeMapping_),t.player_.audioTracks&&t.player_.audioTracks()&&(t.player_.audioTracks().on("change",t.updateActiveSourceBuffers_),t.player_.audioTracks().on("addtrack",t.updateActiveSourceBuffers_),t.player_.audioTracks().on("removetrack",t.updateActiveSourceBuffers_)),t.player_.on("mediachange",t.onPlayerMediachange_))}),t.on("sourceended",function(e){for(var i=ps(t.duration),n=0;n<t.sourceBuffers.length;n++){var r=t.sourceBuffers[n],a=r.metadataTrack_&&r.metadataTrack_.cues
a&&a.length&&(a[a.length-1].endTime=i)}}),t.on("sourceclose",function(t){this.sourceBuffers.forEach(function(t){t.transmuxer_&&t.transmuxer_.terminate()}),this.sourceBuffers.length=0,this.player_&&(this.player_.audioTracks&&this.player_.audioTracks()&&(this.player_.audioTracks().off("change",this.updateActiveSourceBuffers_),this.player_.audioTracks().off("addtrack",this.updateActiveSourceBuffers_),this.player_.audioTracks().off("removetrack",this.updateActiveSourceBuffers_)),this.player_.el_&&(this.player_.off("mediachange",this.onPlayerMediachange_),this.player_.tech_.off("hls-reset",this.onHlsReset_),this.player_.tech_.off("hls-segment-time-mapping",this.onHlsSegmentTimeMapping_)))}),t}return ka(e,t),Sa(e,[{key:"addSeekableRange_",value:function(t,e){var i=void 0
if(this.duration!==1/0)throw(i=new Error("MediaSource.addSeekableRange() can only be invoked when the duration is Infinity")).name="InvalidStateError",i.code=11,i;(e>this.nativeMediaSource_.duration||isNaN(this.nativeMediaSource_.duration))&&(this.nativeMediaSource_.duration=e)}},{key:"addSourceBuffer",value:function(t){var e=void 0,i=function(t){var e={type:"",parameters:{}},i=t.trim().split(";")
return e.type=i.shift().trim(),i.forEach(function(t){var i=t.trim().split("=")
if(i.length>1){var n=i[0].replace(/"/g,"").trim(),r=i[1].replace(/"/g,"").trim()
e.parameters[n]=r}}),e}(t)
if(/^(video|audio)\/mp2t$/i.test(i.type)){var n=[]
i.parameters&&i.parameters.codecs&&(n=i.parameters.codecs.split(","),n=(n=As(n)).filter(function(t){return Ps(t)||xs(t)})),0===n.length&&(n=["avc1.4d400d","mp4a.40.2"]),e=new Is(this,n),0!==this.sourceBuffers.length&&(this.sourceBuffers[0].createRealSourceBuffers_(),e.createRealSourceBuffers_(),this.sourceBuffers[0].audioDisabled_=!0)}else e=this.nativeMediaSource_.addSourceBuffer(t)
return this.sourceBuffers.push(e),e}}]),e}(ya.EventTarget),Rs=0
ya.mediaSources={}
var Ms=function(t,e){var i=ya.mediaSources[t]
if(!i)throw new Error("Media Source not found (Video.js)")
i.trigger({type:"sourceopen",swfId:e})},Bs=function(){return!!r.a.MediaSource&&!!r.a.MediaSource.isTypeSupported&&r.a.MediaSource.isTypeSupported('video/mp4;codecs="avc1.4d400d,mp4a.40.2"')},Ns=function(){if(this.MediaSource={open:Ms,supportsNativeMediaSources:Bs},Bs())return new Ds
throw new Error("Cannot use create a virtual MediaSource for this video")}
Ns.open=Ms,Ns.supportsNativeMediaSources=Bs
var js={createObjectURL:function(t){var e=void 0
return t instanceof Ds?(e=r.a.URL.createObjectURL(t.nativeMediaSource_),t.url_=e,e):t instanceof Ds?(e="blob:vjs-media-source/"+Rs,Rs++,ya.mediaSources[e]=t,e):(e=r.a.URL.createObjectURL(t),t.url_=e,e)}}
ya.MediaSource=Ns,ya.URL=js
var Fs=ya.EventTarget,Vs=ya.mergeOptions,Hs=function(t,e){for(var i=Vs(t,{duration:e.duration,minimumUpdatePeriod:e.minimumUpdatePeriod}),n=0;n<e.playlists.length;n++){var r=Pa(i,e.playlists[n])
r&&(i=r)}return Oa(e,function(t,e,n,r){if(t.playlists&&t.playlists.length){var a=t.playlists[0].uri,s=Pa(i,t.playlists[0])
s&&((i=s).mediaGroups[e][n][r].playlists[0]=i.playlists[a])}}),i},qs=function(t){function e(t,i,n,a){Ta(this,e)
var s=wa(this,(e.__proto__||Object.getPrototypeOf(e)).call(this))
if(s.hls_=i,s.withCredentials=n,!t)throw new Error("A non-empty playlist URL or playlist is required")
return s.on("minimumUpdatePeriod",function(){s.refreshXml_()}),s.on("mediaupdatetimeout",function(){s.refreshMedia_()}),"string"==typeof t?(s.srcUrl=t,s.state="HAVE_NOTHING",wa(s)):(s.masterPlaylistLoader_=a,s.state="HAVE_METADATA",s.started=!0,s.media(t),r.a.setTimeout(function(){s.trigger("loadedmetadata")},0),s)}return ka(e,Fs),Sa(e,[{key:"dispose",value:function(){this.stopRequest(),r.a.clearTimeout(this.mediaUpdateTimeout)}},{key:"stopRequest",value:function(){if(this.request){var t=this.request
this.request=null,t.onreadystatechange=null,t.abort()}}},{key:"media",value:function(t){if(!t)return this.media_
if("HAVE_NOTHING"===this.state)throw new Error("Cannot switch media playlist from "+this.state)
var e=this.state
if("string"==typeof t){if(!this.master.playlists[t])throw new Error("Unknown playlist URI: "+t)
t=this.master.playlists[t]}var i=!this.media_||t.uri!==this.media_.uri
this.state="HAVE_METADATA",i&&(this.media_&&this.trigger("mediachanging"),this.media_=t,this.refreshMedia_(),"HAVE_MASTER"!==e&&this.trigger("mediachange"))}},{key:"pause",value:function(){this.stopRequest(),"HAVE_NOTHING"===this.state&&(this.started=!1)}},{key:"load",value:function(){this.started?this.trigger("loadedplaylist"):this.start()}},{key:"parseMasterXml",value:function(){var t=function(t,e){return function(t){var e
if(!t.length)return{}
var i=t[0].attributes,n=i.sourceDuration,r=i.minimumUpdatePeriod,a=void 0===r?0:r,s=t.filter(function(t){var e=t.attributes
return"video/mp4"===e.mimeType||"video"===e.contentType}).map(E),o=t.filter(function(t){var e=t.attributes
return"audio/mp4"===e.mimeType||"audio"===e.contentType}),u=t.filter(function(t){var e=t.attributes
return"text/vtt"===e.mimeType||"text"===e.contentType}),l={allowCache:!0,discontinuityStarts:[],segments:[],endList:!0,mediaGroups:(e={AUDIO:{},VIDEO:{}},e["CLOSED-CAPTIONS"]={},e.SUBTITLES={},e),uri:"",duration:n,playlists:s,minimumUpdatePeriod:1e3*a}
return o.length&&(l.mediaGroups.AUDIO.audio=o.reduce(function(t,e){var i=e.attributes.role&&e.attributes.role.value||"main",n=e.attributes.lang||"",r="main"
return n&&(r=e.attributes.lang+" ("+i+")"),t[r]&&t[r].playlists[0].attributes.BANDWIDTH>e.attributes.bandwidth?t:(t[r]={language:n,autoselect:!0,default:"main"===i,playlists:[function(t){var e,i=t.attributes,n=t.segments,r={attributes:(e={NAME:i.id,BANDWIDTH:i.bandwidth,CODECS:i.codecs},e["PROGRAM-ID"]=1,e),uri:"",endList:"static"===(i.type||"static"),timeline:i.periodIndex,resolvedUri:"",targetDuration:i.duration,segments:n,mediaSequence:n.length?n[0].number:1}
return i.contentProtection&&(r.contentProtection=i.contentProtection),r}(e)],uri:""},t)},{})),u.length&&(l.mediaGroups.SUBTITLES.subs=u.reduce(function(t,e){var i=e.attributes.lang||"text"
return t[i]?t:(t[i]={language:i,default:!1,autoselect:!1,playlists:[function(t){var e,i=t.attributes,n=t.segments
return void 0===n&&(n=[{uri:i.baseUrl,timeline:i.periodIndex,resolvedUri:i.baseUrl||"",duration:i.sourceDuration,number:0}],i.duration=i.sourceDuration),{attributes:(e={NAME:i.id,BANDWIDTH:i.bandwidth},e["PROGRAM-ID"]=1,e),uri:"",endList:"static"===(i.type||"static"),timeline:i.periodIndex,resolvedUri:i.baseUrl||"",targetDuration:i.duration,segments:n,mediaSequence:n.length?n[0].number:1}}(e)],uri:""},t)},{})),l}(function(t){return t.map(q)}(Z(tt(t),e)))}(this.masterXml_,{manifestUri:this.srcUrl,clientOffset:this.clientOffset_})
t.uri=this.srcUrl
for(var e=0;e<t.playlists.length;e++){var i="placeholder-uri-"+e
t.playlists[e].uri=i,t.playlists[i]=t.playlists[e]}return Oa(t,function(e,i,n,r){if(e.playlists&&e.playlists.length){var a="placeholder-uri-"+i+"-"+n+"-"+r
e.playlists[0].uri=a,t.playlists[a]=e.playlists[0]}}),xa(t),Ua(t),t}},{key:"start",value:function(){var t=this
this.started=!0,this.request=this.hls_.xhr({uri:this.srcUrl,withCredentials:this.withCredentials},function(e,i){if(t.request){if(t.request=null,e)return t.error={status:i.status,message:"DASH playlist request error at URL: "+t.srcUrl,responseText:i.responseText,code:2},"HAVE_NOTHING"===t.state&&(t.started=!1),t.trigger("error")
t.masterXml_=i.responseText,i.responseHeaders&&i.responseHeaders.date?t.masterLoaded_=Date.parse(i.responseHeaders.date):t.masterLoaded_=Date.now(),t.syncClientServerClock_(t.onClientServerClockSync_.bind(t))}})}},{key:"syncClientServerClock_",value:function(t){var e=this,i=function(t){return function(t){var e=z(t,"UTCTiming")[0]
if(!e)return null
var i=Y(e)
switch(i.schemeIdUri){case"urn:mpeg:dash:utc:http-head:2014":case"urn:mpeg:dash:utc:http-head:2012":i.method="HEAD"
break
case"urn:mpeg:dash:utc:http-xsdate:2014":case"urn:mpeg:dash:utc:http-iso:2014":case"urn:mpeg:dash:utc:http-xsdate:2012":case"urn:mpeg:dash:utc:http-iso:2012":i.method="GET"
break
case"urn:mpeg:dash:utc:direct:2014":case"urn:mpeg:dash:utc:direct:2012":i.method="DIRECT",i.value=Date.parse(i.value)
break
case"urn:mpeg:dash:utc:http-ntp:2014":case"urn:mpeg:dash:utc:ntp:2014":case"urn:mpeg:dash:utc:sntp:2014":default:throw new Error("UNSUPPORTED_UTC_TIMING_SCHEME")}return i}(tt(t))}(this.masterXml_)
return null===i?(this.clientOffset_=this.masterLoaded_-Date.now(),t()):"DIRECT"===i.method?(this.clientOffset_=i.value-Date.now(),t()):void(this.request=this.hls_.xhr({uri:ba(this.srcUrl,i.value),method:i.method,withCredentials:this.withCredentials},function(n,r){if(e.request){if(n)return e.clientOffset_=e.masterLoaded_-Date.now(),t()
var a
a="HEAD"===i.method?r.responseHeaders&&r.responseHeaders.date?Date.parse(r.responseHeaders.date):e.masterLoaded_:Date.parse(r.responseText),e.clientOffset_=a-Date.now(),t()}}))}},{key:"onClientServerClockSync_",value:function(){var t=this
this.master=this.parseMasterXml(),this.state="HAVE_MASTER",this.trigger("loadedplaylist"),this.media_||this.media(this.master.playlists[0]),r.a.setTimeout(function(){t.trigger("loadedmetadata")},0),this.master.minimumUpdatePeriod&&r.a.setTimeout(function(){t.trigger("minimumUpdatePeriod")},this.master.minimumUpdatePeriod)}},{key:"refreshXml_",value:function(){var t=this
this.request=this.hls_.xhr({uri:this.srcUrl,withCredentials:this.withCredentials},function(e,i){if(t.request){if(t.request=null,e)return t.error={status:i.status,message:"DASH playlist request error at URL: "+t.srcUrl,responseText:i.responseText,code:2},"HAVE_NOTHING"===t.state&&(t.started=!1),t.trigger("error")
t.masterXml_=i.responseText
var n=t.parseMasterXml()
t.master=Hs(t.master,n),r.a.setTimeout(function(){t.trigger("minimumUpdatePeriod")},t.master.minimumUpdatePeriod)}})}},{key:"refreshMedia_",value:function(){var t=this,e=void 0,i=void 0
this.masterPlaylistLoader_?(e=this.masterPlaylistLoader_.master,i=this.masterPlaylistLoader_.parseMasterXml()):(e=this.master,i=this.parseMasterXml())
var n=Hs(e,i)
n?(this.masterPlaylistLoader_?this.masterPlaylistLoader_.master=n:this.master=n,this.media_=n.playlists[this.media_.uri]):this.trigger("playlistunchanged"),this.media().endList||(this.mediaUpdateTimeout=r.a.setTimeout(function(){t.trigger("mediaupdatetimeout")},Ia(this.media(),!!n))),this.trigger("loadedplaylist")}}]),e}(),zs=function(t){return ya.log.debug?ya.log.debug.bind(ya,"VHS:",t+" >"):function(){}}
function Ws(){}var Gs=function(){function t(e,i,n,r){Ta(this,t),this.callbacks_=[],this.pendingCallback_=null,this.timestampOffset_=0,this.mediaSource=e,this.processedAppend_=!1,this.type_=n,this.mimeType_=i,this.logger_=zs("SourceUpdater["+n+"]["+i+"]"),"closed"===e.readyState?e.addEventListener("sourceopen",this.createSourceBuffer_.bind(this,i,r)):this.createSourceBuffer_(i,r)}return Sa(t,[{key:"createSourceBuffer_",value:function(t,e){var i=this
this.sourceBuffer_=this.mediaSource.addSourceBuffer(t),this.logger_("created SourceBuffer"),e&&(e.trigger("sourcebufferadded"),this.mediaSource.sourceBuffers.length<2)?e.on("sourcebufferadded",function(){i.start_()}):this.start_()}},{key:"start_",value:function(){var t=this
this.started_=!0,this.onUpdateendCallback_=function(){var e=t.pendingCallback_
t.pendingCallback_=null,t.logger_("buffered ["+cs(t.buffered())+"]"),e&&e(),t.runCallback_()},this.sourceBuffer_.addEventListener("updateend",this.onUpdateendCallback_),this.runCallback_()}},{key:"abort",value:function(t){var e=this
this.processedAppend_&&this.queueCallback_(function(){e.sourceBuffer_.abort()},t)}},{key:"appendBuffer",value:function(t,e){var i=this
this.processedAppend_=!0,this.queueCallback_(function(){i.sourceBuffer_.appendBuffer(t)},e)}},{key:"buffered",value:function(){return this.sourceBuffer_?this.sourceBuffer_.buffered:ya.createTimeRanges()}},{key:"remove",value:function(t,e){var i=this,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:Ws
this.processedAppend_&&this.queueCallback_(function(){i.logger_("remove ["+t+" => "+e+"]"),i.sourceBuffer_.remove(t,e)},n)}},{key:"updating",value:function(){return!this.sourceBuffer_||this.sourceBuffer_.updating||this.pendingCallback_}},{key:"timestampOffset",value:function(t){var e=this
return void 0!==t&&(this.queueCallback_(function(){e.sourceBuffer_.timestampOffset=t}),this.timestampOffset_=t),this.timestampOffset_}},{key:"queueCallback_",value:function(t,e){this.callbacks_.push([t.bind(this),e]),this.runCallback_()}},{key:"runCallback_",value:function(){var t=void 0
!this.updating()&&this.callbacks_.length&&this.started_&&(t=this.callbacks_.shift(),this.pendingCallback_=t[1],t[0]())}},{key:"dispose",value:function(){this.sourceBuffer_.removeEventListener("updateend",this.onUpdateendCallback_),this.sourceBuffer_&&"open"===this.mediaSource.readyState&&this.sourceBuffer_.abort()}}]),t}(),Xs={GOAL_BUFFER_LENGTH:30,MAX_GOAL_BUFFER_LENGTH:60,GOAL_BUFFER_LENGTH_RATE:1,BANDWIDTH_VARIANCE:1.2,BUFFER_LOW_WATER_LINE:0,MAX_BUFFER_LOW_WATER_LINE:30,BUFFER_LOW_WATER_LINE_RATE:1},Ys=function(t){var e={}
return t.byterange&&(e.Range=function(t){var e
return e=t.offset+t.length-1,"bytes="+t.offset+"-"+e}(t.byterange)),e},$s=function(t){t.forEach(function(t){t.abort()})},Ks=function(t,e){return e.timedout?{status:e.status,message:"HLS request timed-out at URL: "+e.uri,code:-101,xhr:e}:e.aborted?{status:e.status,message:"HLS request aborted at URL: "+e.uri,code:-102,xhr:e}:t?{status:e.status,message:"HLS request errored at URL: "+e.uri,code:2,xhr:e}:null},Js=function(t,e,i,n,r,a,s){var o=[],u=function(t,e,i){var n=[],r=0
return function(a,s){if(a&&($s(t),n.push(a)),(r+=1)===t.length){if(s.endOfAllRequests=Date.now(),n.length>0){var o=n.reduce(function(t,e){return e.code>t.code?e:t})
return i(o,s)}return s.encryptedBytes?function(t,e,i){t.addEventListener("message",function n(r){if(r.data.source===e.requestId){t.removeEventListener("message",n)
var a=r.data.decrypted
return e.bytes=new Uint8Array(a.bytes,a.byteOffset,a.byteLength),i(null,e)}}),t.postMessage(ns({source:e.requestId,encrypted:e.encryptedBytes,key:e.key.bytes,iv:e.key.iv}),[e.encryptedBytes.buffer,e.key.bytes.buffer])}(e,s,i):i(null,s)}}}(o,i,s)
if(r.key){var l=t(ya.mergeOptions(e,{uri:r.key.resolvedUri,responseType:"arraybuffer"}),function(t,e){return function(i,n){var r=n.response,a=Ks(i,n)
if(a)return e(a,t)
if(16!==r.byteLength)return e({status:n.status,message:"Invalid HLS key at URL: "+n.uri,code:2,xhr:n},t)
var s=new DataView(r)
return t.key.bytes=new Uint32Array([s.getUint32(0),s.getUint32(4),s.getUint32(8),s.getUint32(12)]),e(null,t)}}(r,u))
o.push(l)}if(r.map&&!r.map.bytes){var c=t(ya.mergeOptions(e,{uri:r.map.resolvedUri,responseType:"arraybuffer",headers:Ys(r.map)}),function(t,e,i){return function(n,r){var a=r.response,s=Ks(n,r)
return s?i(s,t):0===a.byteLength?i({status:r.status,message:"Empty HLS segment content at URL: "+r.uri,code:2,xhr:r},t):(t.map.bytes=new Uint8Array(r.response),e.isInitialized()||e.init(),t.map.timescales=it.a.timescale(t.map.bytes),t.map.videoTrackIds=it.a.videoTrackIds(t.map.bytes),i(null,t))}}(r,n,u))
o.push(c)}var h=t(ya.mergeOptions(e,{uri:r.resolvedUri,responseType:"arraybuffer",headers:Ys(r)}),function(t,e,i){return function(n,r){var a=r.response,s=Ks(n,r),o=void 0
return s?i(s,t):0===a.byteLength?i({status:r.status,message:"Empty HLS segment content at URL: "+r.uri,code:2,xhr:r},t):(t.stats=function(t){return{bandwidth:t.bandwidth,bytesReceived:t.bytesReceived||0,roundTripTime:t.roundTripTime||0}}(r),t.key?t.encryptedBytes=new Uint8Array(r.response):t.bytes=new Uint8Array(r.response),t.map&&t.map.bytes&&(e.isInitialized()||e.init(),(o=e.parse(t.bytes,t.map.videoTrackIds,t.map.timescales))&&o.captions&&(t.captionStreams=o.captionStreams,t.fmp4Captions=o.captions)),i(null,t))}}(r,n,u))
return h.addEventListener("progress",function(t,e){return function(i){return t.stats=ya.mergeOptions(t.stats,function(t){var e=t.target,i={bandwidth:1/0,bytesReceived:0,roundTripTime:Date.now()-e.requestTime||0}
return i.bytesReceived=t.loaded,i.bandwidth=Math.floor(i.bytesReceived/i.roundTripTime*8*1e3),i}(i)),!t.stats.firstBytesReceivedAt&&t.stats.bytesReceived&&(t.stats.firstBytesReceivedAt=Date.now()),e(i,t)}}(r,a)),o.push(h),function(){return $s(o)}},Qs=function(t,e){var i
return t&&(i=r.a.getComputedStyle(t))?i[e]:""},Zs=function(t,e){var i=t.slice()
t.sort(function(t,n){var r=e(t,n)
return 0===r?i.indexOf(t)-i.indexOf(n):r})},to=function(t,e){var i=void 0,n=void 0
return t.attributes.BANDWIDTH&&(i=t.attributes.BANDWIDTH),i=i||r.a.Number.MAX_VALUE,e.attributes.BANDWIDTH&&(n=e.attributes.BANDWIDTH),i-(n||r.a.Number.MAX_VALUE)},eo=function(t,e,i){if(!t||!e)return!1
var n=i===t.segments.length
return t.endList&&"open"===e.readyState&&n},io=function(t){return"number"==typeof t&&isFinite(t)},no=function(t){function e(t){Ta(this,e)
var i=wa(this,(e.__proto__||Object.getPrototypeOf(e)).call(this))
if(!t)throw new TypeError("Initialization settings are required")
if("function"!=typeof t.currentTime)throw new TypeError("No currentTime getter specified")
if(!t.mediaSource)throw new TypeError("No MediaSource specified")
return i.bandwidth=t.bandwidth,i.throughput={rate:0,count:0},i.roundTrip=NaN,i.resetStats_(),i.mediaIndex=null,i.hasPlayed_=t.hasPlayed,i.currentTime_=t.currentTime,i.seekable_=t.seekable,i.seeking_=t.seeking,i.duration_=t.duration,i.mediaSource_=t.mediaSource,i.hls_=t.hls,i.loaderType_=t.loaderType,i.startingMedia_=void 0,i.segmentMetadataTrack_=t.segmentMetadataTrack,i.goalBufferLength_=t.goalBufferLength,i.sourceType_=t.sourceType,i.inbandTextTracks_=t.inbandTextTracks,i.state_="INIT",i.checkBufferTimeout_=null,i.error_=void 0,i.currentTimeline_=-1,i.pendingSegment_=null,i.mimeType_=null,i.sourceUpdater_=null,i.xhrOptions_=null,i.activeInitSegmentId_=null,i.initSegments_={},i.captionParser_=new nt.CaptionParser,i.decrypter_=t.decrypter,i.syncController_=t.syncController,i.syncPoint_={segmentIndex:0,time:0},i.syncController_.on("syncinfoupdate",function(){return i.trigger("syncinfoupdate")}),i.mediaSource_.addEventListener("sourceopen",function(){return i.ended_=!1}),i.fetchAtBuffer_=!1,i.logger_=zs("SegmentLoader["+i.loaderType_+"]"),Object.defineProperty(i,"state",{get:function(){return this.state_},set:function(t){t!==this.state_&&(this.logger_(this.state_+" -> "+t),this.state_=t)}}),i}return ka(e,t),Sa(e,[{key:"resetStats_",value:function(){this.mediaBytesTransferred=0,this.mediaRequests=0,this.mediaRequestsAborted=0,this.mediaRequestsTimedout=0,this.mediaRequestsErrored=0,this.mediaTransferDuration=0,this.mediaSecondsLoaded=0}},{key:"dispose",value:function(){this.state="DISPOSED",this.pause(),this.abort_(),this.sourceUpdater_&&this.sourceUpdater_.dispose(),this.resetStats_(),this.captionParser_.reset()}},{key:"abort",value:function(){"WAITING"===this.state?(this.abort_(),this.state="READY",this.paused()||this.monitorBuffer_()):this.pendingSegment_&&(this.pendingSegment_=null)}},{key:"abort_",value:function(){this.pendingSegment_&&this.pendingSegment_.abortRequests(),this.pendingSegment_=null}},{key:"error",value:function(t){return void 0!==t&&(this.error_=t),this.pendingSegment_=null,this.error_}},{key:"endOfStream",value:function(){this.ended_=!0,this.pause(),this.trigger("ended")}},{key:"buffered_",value:function(){return this.sourceUpdater_?this.sourceUpdater_.buffered():ya.createTimeRanges()}},{key:"initSegment",value:function(t){var e=arguments.length>1&&void 0!==arguments[1]&&arguments[1]
if(!t)return null
var i=rs(t),n=this.initSegments_[i]
return e&&!n&&t.bytes&&(this.initSegments_[i]=n={resolvedUri:t.resolvedUri,byterange:t.byterange,bytes:t.bytes,timescales:t.timescales,videoTrackIds:t.videoTrackIds}),n||t}},{key:"couldBeginLoading_",value:function(){return this.playlist_&&(this.sourceUpdater_||this.mimeType_&&"INIT"===this.state)&&!this.paused()}},{key:"load",value:function(){if(this.monitorBuffer_(),this.playlist_){if(this.syncController_.setDateTimeMapping(this.playlist_),"INIT"===this.state&&this.couldBeginLoading_())return this.init_()
!this.couldBeginLoading_()||"READY"!==this.state&&"INIT"!==this.state||(this.state="READY")}}},{key:"init_",value:function(){return this.state="READY",this.sourceUpdater_=new Gs(this.mediaSource_,this.mimeType_,this.loaderType_,this.sourceBufferEmitter_),this.resetEverything(),this.monitorBuffer_()}},{key:"playlist",value:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{}
if(t){var i=this.playlist_,n=this.pendingSegment_
this.playlist_=t,this.xhrOptions_=e,this.hasPlayed_()||(t.syncInfo={mediaSequence:t.mediaSequence,time:0})
var r=i?i.id:null
if(this.logger_("playlist update ["+r+" => "+t.id+"]"),this.trigger("syncinfoupdate"),"INIT"===this.state&&this.couldBeginLoading_())return this.init_()
if(i&&i.uri===t.uri){var a=t.mediaSequence-i.mediaSequence
this.logger_("live window shift ["+a+"]"),null!==this.mediaIndex&&(this.mediaIndex-=a),n&&(n.mediaIndex-=a,n.mediaIndex>=0&&(n.segment=t.segments[n.mediaIndex])),this.syncController_.saveExpiredSegmentInfo(i,t)}else null!==this.mediaIndex&&this.resyncLoader()}}},{key:"pause",value:function(){this.checkBufferTimeout_&&(r.a.clearTimeout(this.checkBufferTimeout_),this.checkBufferTimeout_=null)}},{key:"paused",value:function(){return null===this.checkBufferTimeout_}},{key:"mimeType",value:function(t,e){this.mimeType_||(this.mimeType_=t,this.sourceBufferEmitter_=e,"INIT"===this.state&&this.couldBeginLoading_()&&this.init_())}},{key:"resetEverything",value:function(t){this.ended_=!1,this.resetLoader(),this.remove(0,this.duration_(),t),this.captionParser_.clearAllCaptions(),this.trigger("reseteverything")}},{key:"resetLoader",value:function(){this.fetchAtBuffer_=!1,this.resyncLoader()}},{key:"resyncLoader",value:function(){this.mediaIndex=null,this.syncPoint_=null,this.abort()}},{key:"remove",value:function(t,e,i){if(this.sourceUpdater_&&this.sourceUpdater_.remove(t,e,i),ds(t,e,this.segmentMetadataTrack_),this.inbandTextTracks_)for(var n in this.inbandTextTracks_)ds(t,e,this.inbandTextTracks_[n])}},{key:"monitorBuffer_",value:function(){this.checkBufferTimeout_&&r.a.clearTimeout(this.checkBufferTimeout_),this.checkBufferTimeout_=r.a.setTimeout(this.monitorBufferTick_.bind(this),1)}},{key:"monitorBufferTick_",value:function(){"READY"===this.state&&this.fillBuffer_(),this.checkBufferTimeout_&&r.a.clearTimeout(this.checkBufferTimeout_),this.checkBufferTimeout_=r.a.setTimeout(this.monitorBufferTick_.bind(this),500)}},{key:"fillBuffer_",value:function(){if(!this.sourceUpdater_.updating()){this.syncPoint_||(this.syncPoint_=this.syncController_.getSyncPoint(this.playlist_,this.duration_(),this.currentTimeline_,this.currentTime_()))
var t=this.checkBuffer_(this.buffered_(),this.playlist_,this.mediaIndex,this.hasPlayed_(),this.currentTime_(),this.syncPoint_)
t&&(eo(this.playlist_,this.mediaSource_,t.mediaIndex)?this.endOfStream():(t.mediaIndex!==this.playlist_.segments.length-1||"ended"!==this.mediaSource_.readyState||this.seeking_())&&((t.timeline!==this.currentTimeline_||null!==t.startOfSegment&&t.startOfSegment<this.sourceUpdater_.timestampOffset())&&(this.syncController_.reset(),t.timestampOffset=t.startOfSegment,this.captionParser_.clearAllCaptions()),this.loadSegment_(t)))}}},{key:"checkBuffer_",value:function(t,e,i,n,r,a){var s=0,o=void 0
t.length&&(s=t.end(t.length-1))
var u=Math.max(0,s-r)
if(!e.segments.length)return null
if(u>=this.goalBufferLength_())return null
if(!n&&u>=1)return null
if(null===a)return i=this.getSyncSegmentCandidate_(e),this.generateSegmentInfo_(e,i,null,!0)
if(null!==i){var l=e.segments[i]
return o=l&&l.end?l.end:s,this.generateSegmentInfo_(e,i+1,o,!1)}if(this.fetchAtBuffer_){var c=Ka.getMediaInfoForTime(e,s,a.segmentIndex,a.time)
i=c.mediaIndex,o=c.startTime}else{var h=Ka.getMediaInfoForTime(e,r,a.segmentIndex,a.time)
i=h.mediaIndex,o=h.startTime}return this.generateSegmentInfo_(e,i,o,!1)}},{key:"getSyncSegmentCandidate_",value:function(t){var e=this
if(-1===this.currentTimeline_)return 0
var i=t.segments.map(function(t,e){return{timeline:t.timeline,segmentIndex:e}}).filter(function(t){return t.timeline===e.currentTimeline_})
return i.length?i[Math.min(i.length-1,1)].segmentIndex:Math.max(t.segments.length-1,0)}},{key:"generateSegmentInfo_",value:function(t,e,i,n){if(e<0||e>=t.segments.length)return null
var r=t.segments[e]
return{requestId:"segment-loader-"+Math.random(),uri:r.resolvedUri,mediaIndex:e,isSyncRequest:n,startOfSegment:i,playlist:t,bytes:null,encryptedBytes:null,timestampOffset:null,timeline:r.timeline,duration:r.duration,segment:r}}},{key:"abortRequestEarly_",value:function(t){if(this.hls_.tech_.paused()||!this.xhrOptions_.timeout||!this.playlist_.attributes.BANDWIDTH)return!1
if(Date.now()-(t.firstBytesReceivedAt||Date.now())<1e3)return!1
var e=this.currentTime_(),i=t.bandwidth,n=this.pendingSegment_.duration,r=Ka.estimateSegmentRequestTime(n,i,this.playlist_,t.bytesReceived),a=function(t,e){var i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:1
return((t.length?t.end(t.length-1):0)-e)/i}(this.buffered_(),e,this.hls_.tech_.playbackRate())-1
if(r<=a)return!1
var s=function(t){var e=t.currentTime,i=t.bandwidth,n=t.duration,r=t.segmentDuration,a=t.timeUntilRebuffer,s=t.currentTimeline,o=t.syncController,u=t.master.playlists.filter(function(t){return!Ka.isIncompatible(t)}),l=u.filter(Ka.isEnabled)
l.length||(l=u.filter(function(t){return!Ka.isDisabled(t)}))
var c=l.filter(Ka.hasAttribute.bind(null,"BANDWIDTH")).map(function(t){var u=o.getSyncPoint(t,n,s,e)?1:2
return{playlist:t,rebufferingImpact:Ka.estimateSegmentRequestTime(r,i,t)*u-a}}),h=c.filter(function(t){return t.rebufferingImpact<=0})
return Zs(h,function(t,e){return to(e.playlist,t.playlist)}),h.length?h[0]:(Zs(c,function(t,e){return t.rebufferingImpact-e.rebufferingImpact}),c[0]||null)}({master:this.hls_.playlists.master,currentTime:e,bandwidth:i,duration:this.duration_(),segmentDuration:n,timeUntilRebuffer:a,currentTimeline:this.currentTimeline_,syncController:this.syncController_})
if(s){var o=r-a-s.rebufferingImpact,u=.5
return a<=1/30&&(u=1),!(!s.playlist||s.playlist.uri===this.playlist_.uri||o<u)&&(this.bandwidth=s.playlist.attributes.BANDWIDTH*Xs.BANDWIDTH_VARIANCE+1,this.abort(),this.trigger("earlyabort"),!0)}}},{key:"handleProgress_",value:function(t,e){this.pendingSegment_&&e.requestId===this.pendingSegment_.requestId&&!this.abortRequestEarly_(e.stats)&&this.trigger("progress")}},{key:"loadSegment_",value:function(t){this.state="WAITING",this.pendingSegment_=t,this.trimBackBuffer_(t),t.abortRequests=Js(this.hls_.xhr,this.xhrOptions_,this.decrypter_,this.captionParser_,this.createSimplifiedSegmentObj_(t),this.handleProgress_.bind(this),this.segmentRequestFinished_.bind(this))}},{key:"trimBackBuffer_",value:function(t){var e=function(t,e,i){var n
return n=t.length&&t.start(0)>0&&t.start(0)<e?t.start(0):e-30,Math.min(n,e-i)}(this.seekable_(),this.currentTime_(),this.playlist_.targetDuration||10)
e>0&&this.remove(0,e)}},{key:"createSimplifiedSegmentObj_",value:function(t){var e=t.segment,i={resolvedUri:e.resolvedUri,byterange:e.byterange,requestId:t.requestId}
if(e.key){var n=e.key.iv||new Uint32Array([0,0,0,t.mediaIndex+t.playlist.mediaSequence])
i.key={resolvedUri:e.key.resolvedUri,iv:n}}return e.map&&(i.map=this.initSegment(e.map)),i}},{key:"segmentRequestFinished_",value:function(t,e){if(this.mediaRequests+=1,e.stats&&(this.mediaBytesTransferred+=e.stats.bytesReceived,this.mediaTransferDuration+=e.stats.roundTripTime),this.pendingSegment_){if(e.requestId===this.pendingSegment_.requestId){if(t)return this.pendingSegment_=null,this.state="READY",-102===t.code?void(this.mediaRequestsAborted+=1):(this.pause(),-101===t.code?(this.mediaRequestsTimedout+=1,this.bandwidth=1,this.roundTrip=NaN,void this.trigger("bandwidthupdate")):(this.mediaRequestsErrored+=1,this.error(t),void this.trigger("error")))
this.bandwidth=e.stats.bandwidth,this.roundTrip=e.stats.roundTripTime,e.map&&(e.map=this.initSegment(e.map,!0)),this.processSegmentResponse_(e)}}else this.mediaRequestsAborted+=1}},{key:"processSegmentResponse_",value:function(t){var e=this.pendingSegment_
e.bytes=t.bytes,t.map&&(e.segment.map.bytes=t.map.bytes),e.endOfAllRequests=t.endOfAllRequests,t.fmp4Captions&&(function(t,e,i){for(var n in i)if(!t[n]){e.trigger({type:"usage",name:"hls-608"})
var r=e.textTracks().getTrackById(n)
t[n]=r||e.addRemoteTextTrack({kind:"captions",id:n,label:n},!1).track}}(this.inbandTextTracks_,this.hls_.tech_,t.captionStreams),function(t){var e=t.inbandTextTracks,i=t.captionArray,n=t.timestampOffset
if(i){var r=window.WebKitDataCue||window.VTTCue
i.forEach(function(t){var i=t.stream,a=t.startTime,s=t.endTime
e[i]&&(a+=n,s+=n,e[i].addCue(new r(a,s,t.text)))})}}({inbandTextTracks:this.inbandTextTracks_,captionArray:t.fmp4Captions,timestampOffset:0}),this.captionParser_.clearParsedCaptions()),this.handleSegment_()}},{key:"handleSegment_",value:function(){var t=this
if(this.pendingSegment_){var e=this.pendingSegment_,i=e.segment,n=this.syncController_.probeSegmentInfo(e)
void 0===this.startingMedia_&&n&&(n.containsAudio||n.containsVideo)&&(this.startingMedia_={containsAudio:n.containsAudio,containsVideo:n.containsVideo})
var r=function(t,e,i){return"main"===t&&e&&i?i.containsAudio||i.containsVideo?e.containsVideo&&!i.containsVideo?"Only audio found in segment when we expected video. We can't switch to audio only from a stream that had video. To get rid of this message, please add codec information to the manifest.":!e.containsVideo&&i.containsVideo?"Video found in segment when we expected only audio. We can't switch to a stream with video from an audio only stream. To get rid of this message, please add codec information to the manifest.":null:"Neither audio nor video found in segment.":null}(this.loaderType_,this.startingMedia_,n)
if(r)return this.error({message:r,blacklistDuration:1/0}),void this.trigger("error")
if(e.isSyncRequest)return this.trigger("syncinfoupdate"),this.pendingSegment_=null,void(this.state="READY")
null!==e.timestampOffset&&e.timestampOffset!==this.sourceUpdater_.timestampOffset()&&(this.sourceUpdater_.timestampOffset(e.timestampOffset),this.trigger("timestampoffset"))
var a=this.syncController_.mappingForTimeline(e.timeline)
if(null!==a&&this.trigger({type:"segmenttimemapping",mapping:a}),this.state="APPENDING",i.map){var s=rs(i.map)
if(!this.activeInitSegmentId_||this.activeInitSegmentId_!==s){var o=this.initSegment(i.map)
this.sourceUpdater_.appendBuffer(o.bytes,function(){t.activeInitSegmentId_=s})}}e.byteLength=e.bytes.byteLength,"number"==typeof i.start&&"number"==typeof i.end?this.mediaSecondsLoaded+=i.end-i.start:this.mediaSecondsLoaded+=i.duration,this.logger_(function(t){var e=t.segment,i=e.start,n=e.end,r=t.playlist,a=r.mediaSequence,s=r.id,o=r.segments,u=void 0===o?[]:o,l=t.mediaIndex,c=t.timeline
return["appending ["+l+"] of ["+a+", "+(a+u.length)+"] from playlist ["+s+"]","["+i+" => "+n+"] in timeline ["+c+"]"].join(" ")}(e)),this.sourceUpdater_.appendBuffer(e.bytes,this.handleUpdateEnd_.bind(this))}else this.state="READY"}},{key:"handleUpdateEnd_",value:function(){if(!this.pendingSegment_)return this.state="READY",void(this.paused()||this.monitorBuffer_())
var t=this.pendingSegment_,e=t.segment,i=null!==this.mediaIndex
this.pendingSegment_=null,this.recordThroughput_(t),this.addSegmentMetadataCue_(t),this.state="READY",this.mediaIndex=t.mediaIndex,this.fetchAtBuffer_=!0,this.currentTimeline_=t.timeline,this.trigger("syncinfoupdate"),e.end&&this.currentTime_()-e.end>3*t.playlist.targetDuration?this.resetEverything():(i&&this.trigger("bandwidthupdate"),this.trigger("progress"),eo(t.playlist,this.mediaSource_,t.mediaIndex+1)&&this.endOfStream(),this.paused()||this.monitorBuffer_())}},{key:"recordThroughput_",value:function(t){var e=this.throughput.rate,i=Date.now()-t.endOfAllRequests+1,n=Math.floor(t.byteLength/i*8*1e3)
this.throughput.rate+=(n-e)/++this.throughput.count}},{key:"addSegmentMetadataCue_",value:function(t){if(this.segmentMetadataTrack_){var e=t.segment,i=e.start,n=e.end
if(io(i)&&io(n)){ds(i,n,this.segmentMetadataTrack_)
var a=r.a.WebKitDataCue||r.a.VTTCue,s={bandwidth:t.playlist.attributes.BANDWIDTH,resolution:t.playlist.attributes.RESOLUTION,codecs:t.playlist.attributes.CODECS,byteLength:t.byteLength,uri:t.uri,timeline:t.timeline,playlist:t.playlist.uri,start:i,end:n},o=new a(i,n,JSON.stringify(s))
o.value=s,this.segmentMetadataTrack_.addCue(o)}}}}]),e}(ya.EventTarget),ro=function(t){return decodeURIComponent(escape(String.fromCharCode.apply(null,t)))},ao=new Uint8Array("\n\n".split("").map(function(t){return t.charCodeAt(0)})),so=function(t){function e(t){var i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{}
Ta(this,e)
var n=wa(this,(e.__proto__||Object.getPrototypeOf(e)).call(this,t,i))
return n.mediaSource_=null,n.subtitlesTrack_=null,n}return ka(e,no),Sa(e,[{key:"buffered_",value:function(){if(!this.subtitlesTrack_||!this.subtitlesTrack_.cues.length)return ya.createTimeRanges()
var t=this.subtitlesTrack_.cues,e=t[0].startTime,i=t[t.length-1].startTime
return ya.createTimeRanges([[e,i]])}},{key:"initSegment",value:function(t){var e=arguments.length>1&&void 0!==arguments[1]&&arguments[1]
if(!t)return null
var i=rs(t),n=this.initSegments_[i]
if(e&&!n&&t.bytes){var r=ao.byteLength+t.bytes.byteLength,a=new Uint8Array(r)
a.set(t.bytes),a.set(ao,t.bytes.byteLength),this.initSegments_[i]=n={resolvedUri:t.resolvedUri,byterange:t.byterange,bytes:a}}return n||t}},{key:"couldBeginLoading_",value:function(){return this.playlist_&&this.subtitlesTrack_&&!this.paused()}},{key:"init_",value:function(){return this.state="READY",this.resetEverything(),this.monitorBuffer_()}},{key:"track",value:function(t){return void 0===t?this.subtitlesTrack_:(this.subtitlesTrack_=t,"INIT"===this.state&&this.couldBeginLoading_()&&this.init_(),this.subtitlesTrack_)}},{key:"remove",value:function(t,e){ds(t,e,this.subtitlesTrack_)}},{key:"fillBuffer_",value:function(){var t=this
this.syncPoint_||(this.syncPoint_=this.syncController_.getSyncPoint(this.playlist_,this.duration_(),this.currentTimeline_,this.currentTime_()))
var e=this.checkBuffer_(this.buffered_(),this.playlist_,this.mediaIndex,this.hasPlayed_(),this.currentTime_(),this.syncPoint_)
if(e=this.skipEmptySegments_(e)){if(null===this.syncController_.timestampOffsetForTimeline(e.timeline))return this.syncController_.one("timestampoffset",function(){t.state="READY",t.paused()||t.monitorBuffer_()}),void(this.state="WAITING_ON_TIMELINE")
this.loadSegment_(e)}}},{key:"skipEmptySegments_",value:function(t){for(;t&&t.segment.empty;)t=this.generateSegmentInfo_(t.playlist,t.mediaIndex+1,t.startOfSegment+t.duration,t.isSyncRequest)
return t}},{key:"handleSegment_",value:function(){var t=this
if(this.pendingSegment_&&this.subtitlesTrack_){this.state="APPENDING"
var e=this.pendingSegment_,i=e.segment
if("function"!=typeof r.a.WebVTT&&this.subtitlesTrack_&&this.subtitlesTrack_.tech_){var n=function(){t.handleSegment_()}
return this.state="WAITING_ON_VTTJS",this.subtitlesTrack_.tech_.one("vttjsloaded",n),void this.subtitlesTrack_.tech_.one("vttjserror",function(){t.subtitlesTrack_.tech_.off("vttjsloaded",n),t.error({message:"Error loading vtt.js"}),t.state="READY",t.pause(),t.trigger("error")})}i.requested=!0
try{this.parseVTTCues_(e)}catch(t){return this.error({message:t.message}),this.state="READY",this.pause(),this.trigger("error")}if(this.updateTimeMapping_(e,this.syncController_.timelines[e.timeline],this.playlist_),e.isSyncRequest)return this.trigger("syncinfoupdate"),this.pendingSegment_=null,void(this.state="READY")
e.byteLength=e.bytes.byteLength,this.mediaSecondsLoaded+=i.duration,e.cues.length&&this.remove(e.cues[0].endTime,e.cues[e.cues.length-1].endTime),e.cues.forEach(function(e){t.subtitlesTrack_.addCue(e)}),this.handleUpdateEnd_()}else this.state="READY"}},{key:"parseVTTCues_",value:function(t){var e=void 0,i=!1
"function"==typeof r.a.TextDecoder?e=new r.a.TextDecoder("utf8"):(e=r.a.WebVTT.StringDecoder(),i=!0)
var n=new r.a.WebVTT.Parser(r.a,r.a.vttjs,e)
if(t.cues=[],t.timestampmap={MPEGTS:0,LOCAL:0},n.oncue=t.cues.push.bind(t.cues),n.ontimestampmap=function(e){return t.timestampmap=e},n.onparsingerror=function(t){ya.log.warn("Error encountered when parsing cues: "+t.message)},t.segment.map){var a=t.segment.map.bytes
i&&(a=ro(a)),n.parse(a)}var s=t.bytes
i&&(s=ro(s)),n.parse(s),n.flush()}},{key:"updateTimeMapping_",value:function(t,e,i){var n=t.segment
if(e)if(t.cues.length){var r=t.timestampmap,a=r.MPEGTS/9e4-r.LOCAL+e.mapping
if(t.cues.forEach(function(t){t.startTime+=a,t.endTime+=a}),!i.syncInfo){var s=t.cues[0].startTime,o=t.cues[t.cues.length-1].startTime
i.syncInfo={mediaSequence:i.mediaSequence+t.mediaIndex,time:Math.min(s,o-n.duration)}}}else n.empty=!0}}]),e}(),oo=function(t,e){for(var i=t.cues,n=0;n<i.length;n++){var r=i[n]
if(e>=r.adStartTime&&e<=r.adEndTime)return r}return null},uo=at.a.inspect,lo=[{name:"VOD",run:function(t,e,i,n,r){return i!==1/0?{time:0,segmentIndex:0}:null}},{name:"ProgramDateTime",run:function(t,e,i,n,r){if(!t.datetimeToDisplayTime)return null
var a=e.segments||[],s=null,o=null
r=r||0
for(var u=0;u<a.length;u++){var l=a[u]
if(l.dateTimeObject){var c=l.dateTimeObject.getTime()/1e3+t.datetimeToDisplayTime,h=Math.abs(r-c)
if(null!==o&&o<h)break
o=h,s={time:c,segmentIndex:u}}}return s}},{name:"Segment",run:function(t,e,i,n,r){var a=e.segments||[],s=null,o=null
r=r||0
for(var u=0;u<a.length;u++){var l=a[u]
if(l.timeline===n&&void 0!==l.start){var c=Math.abs(r-l.start)
if(null!==o&&o<c)break;(!s||null===o||o>=c)&&(o=c,s={time:l.start,segmentIndex:u})}}return s}},{name:"Discontinuity",run:function(t,e,i,n,r){var a=null
if(r=r||0,e.discontinuityStarts&&e.discontinuityStarts.length)for(var s=null,o=0;o<e.discontinuityStarts.length;o++){var u=e.discontinuityStarts[o],l=e.discontinuitySequence+o+1,c=t.discontinuities[l]
if(c){var h=Math.abs(r-c.time)
if(null!==s&&s<h)break;(!a||null===s||s>=h)&&(s=h,a={time:c.time,segmentIndex:u})}}return a}},{name:"Playlist",run:function(t,e,i,n,r){return e.syncInfo?{time:e.syncInfo.time,segmentIndex:e.syncInfo.mediaSequence-e.mediaSequence}:null}}],co=function(t){function e(){Ta(this,e)
var t=wa(this,(e.__proto__||Object.getPrototypeOf(e)).call(this))
return t.inspectCache_=void 0,t.timelines=[],t.discontinuities=[],t.datetimeToDisplayTime=null,t.logger_=zs("SyncController"),t}return ka(e,t),Sa(e,[{key:"getSyncPoint",value:function(t,e,i,n){var r=this.runStrategies_(t,e,i,n)
return r.length?this.selectSyncPoint_(r,{key:"time",value:n}):null}},{key:"getExpiredTime",value:function(t,e){if(!t||!t.segments)return null
var i=this.runStrategies_(t,e,t.discontinuitySequence,0)
if(!i.length)return null
var n=this.selectSyncPoint_(i,{key:"segmentIndex",value:0})
return n.segmentIndex>0&&(n.time*=-1),Math.abs(n.time+Na(t,n.segmentIndex,0))}},{key:"runStrategies_",value:function(t,e,i,n){for(var r=[],a=0;a<lo.length;a++){var s=lo[a],o=s.run(this,t,e,i,n)
o&&(o.strategy=s.name,r.push({strategy:s.name,syncPoint:o}))}return r}},{key:"selectSyncPoint_",value:function(t,e){for(var i=t[0].syncPoint,n=Math.abs(t[0].syncPoint[e.key]-e.value),r=t[0].strategy,a=1;a<t.length;a++){var s=Math.abs(t[a].syncPoint[e.key]-e.value)
s<n&&(n=s,i=t[a].syncPoint,r=t[a].strategy)}return this.logger_("syncPoint for ["+e.key+": "+e.value+"] chosen with strategy ["+r+"]: [time:"+i.time+", segmentIndex:"+i.segmentIndex+"]"),i}},{key:"saveExpiredSegmentInfo",value:function(t,e){for(var i=e.mediaSequence-t.mediaSequence-1;i>=0;i--){var n=t.segments[i]
if(n&&void 0!==n.start){e.syncInfo={mediaSequence:t.mediaSequence+i,time:n.start},this.logger_("playlist refresh sync: [time:"+e.syncInfo.time+", mediaSequence: "+e.syncInfo.mediaSequence+"]"),this.trigger("syncinfoupdate")
break}}}},{key:"setDateTimeMapping",value:function(t){if(!this.datetimeToDisplayTime&&t.segments&&t.segments.length&&t.segments[0].dateTimeObject){var e=t.segments[0].dateTimeObject.getTime()/1e3
this.datetimeToDisplayTime=-e}}},{key:"reset",value:function(){this.inspectCache_=void 0}},{key:"probeSegmentInfo",value:function(t){var e,i=t.segment,n=t.playlist
return(e=i.map?this.probeMp4Segment_(t):this.probeTsSegment_(t))&&this.calculateSegmentTimeMapping_(t,e)&&(this.saveDiscontinuitySyncInfo_(t),n.syncInfo||(n.syncInfo={mediaSequence:n.mediaSequence+t.mediaIndex,time:i.start})),e}},{key:"probeMp4Segment_",value:function(t){var e=t.segment,i=it.a.timescale(e.map.bytes),n=it.a.startTime(i,t.bytes)
return null!==t.timestampOffset&&(t.timestampOffset-=n),{start:n,end:n+e.duration}}},{key:"probeTsSegment_",value:function(t){var e=uo(t.bytes,this.inspectCache_),i=void 0,n=void 0
return e?(e.video&&2===e.video.length?(this.inspectCache_=e.video[1].dts,i=e.video[0].dtsTime,n=e.video[1].dtsTime):e.audio&&2===e.audio.length&&(this.inspectCache_=e.audio[1].dts,i=e.audio[0].dtsTime,n=e.audio[1].dtsTime),{start:i,end:n,containsVideo:e.video&&2===e.video.length,containsAudio:e.audio&&2===e.audio.length}):null}},{key:"timestampOffsetForTimeline",value:function(t){return void 0===this.timelines[t]?null:this.timelines[t].time}},{key:"mappingForTimeline",value:function(t){return void 0===this.timelines[t]?null:this.timelines[t].mapping}},{key:"calculateSegmentTimeMapping_",value:function(t,e){var i=t.segment,n=this.timelines[t.timeline]
if(null!==t.timestampOffset)n={time:t.startOfSegment,mapping:t.startOfSegment-e.start},this.timelines[t.timeline]=n,this.trigger("timestampoffset"),this.logger_("time mapping for timeline "+t.timeline+": [time: "+n.time+"] [mapping: "+n.mapping+"]"),i.start=t.startOfSegment,i.end=e.end+n.mapping
else{if(!n)return!1
i.start=e.start+n.mapping,i.end=e.end+n.mapping}return!0}},{key:"saveDiscontinuitySyncInfo_",value:function(t){var e=t.playlist,i=t.segment
if(i.discontinuity)this.discontinuities[i.timeline]={time:i.start,accuracy:0}
else if(e.discontinuityStarts&&e.discontinuityStarts.length)for(var n=0;n<e.discontinuityStarts.length;n++){var r=e.discontinuityStarts[n],a=e.discontinuitySequence+n+1,s=r-t.mediaIndex,o=Math.abs(s)
if(!this.discontinuities[a]||this.discontinuities[a].accuracy>o){var u
u=s<0?i.start-Na(e,t.mediaIndex,r):i.end+Na(e,t.mediaIndex+1,r),this.discontinuities[a]={time:u,accuracy:o}}}}}]),e}(ya.EventTarget),ho=new bs("./decrypter-worker.worker.js",function(t,e){var i=this
!function(){var t=function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")},e=function(){function t(t,e){for(var i=0;i<e.length;i++){var n=e[i]
n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}return function(e,i,n){return i&&t(e.prototype,i),n&&t(e,n),e}}(),n=function(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called")
return!e||"object"!==(void 0===e?"undefined":kt(e))&&"function"!=typeof e?t:e},r=function(){var t=[[[],[],[],[],[]],[[],[],[],[],[]]],e=t[0],i=t[1],n=e[4],r=i[4],a=void 0,s=void 0,o=void 0,u=[],l=[],c=void 0,h=void 0,d=void 0,p=void 0,f=void 0
for(a=0;a<256;a++)l[(u[a]=a<<1^283*(a>>7))^a]=a
for(s=o=0;!n[s];s^=c||1,o=l[o]||1)for(d=(d=o^o<<1^o<<2^o<<3^o<<4)>>8^255&d^99,n[s]=d,r[d]=s,f=16843009*u[h=u[c=u[s]]]^65537*h^257*c^16843008*s,p=257*u[d]^16843008*d,a=0;a<4;a++)e[a][s]=p=p<<24^p>>>8,i[a][d]=f=f<<24^f>>>8
for(a=0;a<5;a++)e[a]=e[a].slice(0),i[a]=i[a].slice(0)
return t},a=null,s=function(){function e(i){t(this,e),a||(a=r()),this._tables=[[a[0][0].slice(),a[0][1].slice(),a[0][2].slice(),a[0][3].slice(),a[0][4].slice()],[a[1][0].slice(),a[1][1].slice(),a[1][2].slice(),a[1][3].slice(),a[1][4].slice()]]
var n=void 0,s=void 0,o=void 0,u=void 0,l=void 0,c=this._tables[0][4],h=this._tables[1],d=i.length,p=1
if(4!==d&&6!==d&&8!==d)throw new Error("Invalid aes key size")
for(u=i.slice(0),l=[],this._key=[u,l],n=d;n<4*d+28;n++)o=u[n-1],(n%d==0||8===d&&n%d==4)&&(o=c[o>>>24]<<24^c[o>>16&255]<<16^c[o>>8&255]<<8^c[255&o],n%d==0&&(o=o<<8^o>>>24^p<<24,p=p<<1^283*(p>>7))),u[n]=u[n-d]^o
for(s=0;n;s++,n--)o=u[3&s?n:n-4],l[s]=n<=4||s<4?o:h[0][c[o>>>24]]^h[1][c[o>>16&255]]^h[2][c[o>>8&255]]^h[3][c[255&o]]}return e.prototype.decrypt=function(t,e,i,n,r,a){var s=this._key[1],o=t^s[0],u=n^s[1],l=i^s[2],c=e^s[3],h=void 0,d=void 0,p=void 0,f=s.length/4-2,m=void 0,g=4,y=this._tables[1],v=y[0],_=y[1],b=y[2],T=y[3],S=y[4]
for(m=0;m<f;m++)h=v[o>>>24]^_[u>>16&255]^b[l>>8&255]^T[255&c]^s[g],d=v[u>>>24]^_[l>>16&255]^b[c>>8&255]^T[255&o]^s[g+1],p=v[l>>>24]^_[c>>16&255]^b[o>>8&255]^T[255&u]^s[g+2],c=v[c>>>24]^_[o>>16&255]^b[u>>8&255]^T[255&l]^s[g+3],g+=4,o=h,u=d,l=p
for(m=0;m<4;m++)r[(3&-m)+a]=S[o>>>24]<<24^S[u>>16&255]<<16^S[l>>8&255]<<8^S[255&c]^s[g++],h=o,o=u,u=l,l=c,c=h},e}(),o=function(){function e(){t(this,e),this.listeners={}}return e.prototype.on=function(t,e){this.listeners[t]||(this.listeners[t]=[]),this.listeners[t].push(e)},e.prototype.off=function(t,e){if(!this.listeners[t])return!1
var i=this.listeners[t].indexOf(e)
return this.listeners[t].splice(i,1),i>-1},e.prototype.trigger=function(t){var e=this.listeners[t]
if(e)if(2===arguments.length)for(var i=e.length,n=0;n<i;++n)e[n].call(this,arguments[1])
else for(var r=Array.prototype.slice.call(arguments,1),a=e.length,s=0;s<a;++s)e[s].apply(this,r)},e.prototype.dispose=function(){this.listeners={}},e.prototype.pipe=function(t){this.on("data",function(e){t.push(e)})},e}(),u=function(e){function i(){t(this,i)
var r=n(this,e.call(this,o))
return r.jobs=[],r.delay=1,r.timeout_=null,r}return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+(void 0===e?"undefined":kt(e)))
t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}(i,e),i.prototype.processJob_=function(){this.jobs.shift()(),this.jobs.length?this.timeout_=setTimeout(this.processJob_.bind(this),this.delay):this.timeout_=null},i.prototype.push=function(t){this.jobs.push(t),this.timeout_||(this.timeout_=setTimeout(this.processJob_.bind(this),this.delay))},i}(o),l=function(t){return t<<24|(65280&t)<<8|(16711680&t)>>8|t>>>24},c=function(){function i(e,n,r,a){t(this,i)
var s=i.STEP,o=new Int32Array(e.buffer),c=new Uint8Array(e.byteLength),h=0
for(this.asyncStream_=new u,this.asyncStream_.push(this.decryptChunk_(o.subarray(h,h+s),n,r,c)),h=s;h<o.length;h+=s)r=new Uint32Array([l(o[h-4]),l(o[h-3]),l(o[h-2]),l(o[h-1])]),this.asyncStream_.push(this.decryptChunk_(o.subarray(h,h+s),n,r,c))
this.asyncStream_.push(function(){var t
a(null,(t=c).subarray(0,t.byteLength-t[t.byteLength-1]))})}return i.prototype.decryptChunk_=function(t,e,i,n){return function(){var r=function(t,e,i){var n=new Int32Array(t.buffer,t.byteOffset,t.byteLength>>2),r=new s(Array.prototype.slice.call(e)),a=new Uint8Array(t.byteLength),o=new Int32Array(a.buffer),u=void 0,c=void 0,h=void 0,d=void 0,p=void 0,f=void 0,m=void 0,g=void 0,y=void 0
for(u=i[0],c=i[1],h=i[2],d=i[3],y=0;y<n.length;y+=4)p=l(n[y]),f=l(n[y+1]),m=l(n[y+2]),g=l(n[y+3]),r.decrypt(p,f,m,g,o,y),o[y]=l(o[y]^u),o[y+1]=l(o[y+1]^c),o[y+2]=l(o[y+2]^h),o[y+3]=l(o[y+3]^d),u=p,c=f,h=m,d=g
return a}(t,e,i)
n.set(r,t.byteOffset)}},e(i,null,[{key:"STEP",get:function(){return 32e3}}]),i}()
new function(t){t.onmessage=function(e){var i=e.data,n=new Uint8Array(i.encrypted.bytes,i.encrypted.byteOffset,i.encrypted.byteLength),r=new Uint32Array(i.key.bytes,i.key.byteOffset,i.key.byteLength/4),a=new Uint32Array(i.iv.bytes,i.iv.byteOffset,i.iv.byteLength/4)
new c(n,r,a,function(e,n){t.postMessage(function(t){var e={}
return Object.keys(t).forEach(function(i){var n=t[i]
ArrayBuffer.isView(n)?e[i]={bytes:n.buffer,byteOffset:n.byteOffset,byteLength:n.byteLength}:e[i]=n}),e}({source:i.source,decrypted:n}),[n.buffer])})}}(i)}()}),po=function(t){var e=t.default?"main":"alternative"
return t.characteristics&&t.characteristics.indexOf("public.accessibility.describes-video")>=0&&(e="main-desc"),e},fo=function(t,e){t.abort(),t.pause(),e&&e.activePlaylistLoader&&(e.activePlaylistLoader.pause(),e.activePlaylistLoader=null)},mo=function(t,e){e.activePlaylistLoader=t,t.load()},go={AUDIO:function(t,e){return function(){var i=e.segmentLoaders[t],n=e.mediaTypes[t],r=e.blacklistCurrentPlaylist
fo(i,n)
var a=n.activeTrack(),s=n.activeGroup(),o=(s.filter(function(t){return t.default})[0]||s[0]).id,u=n.tracks[o]
if(a!==u){for(var l in ya.log.warn("Problem encountered loading the alternate audio track.Switching back to default."),n.tracks)n.tracks[l].enabled=n.tracks[l]===u
n.onTrackChanged()}else r({message:"Problem encountered loading the default audio track."})}},SUBTITLES:function(t,e){return function(){var i=e.segmentLoaders[t],n=e.mediaTypes[t]
ya.log.warn("Problem encountered loading the subtitle track.Disabling subtitle track."),fo(i,n)
var r=n.activeTrack()
r&&(r.mode="disabled"),n.onTrackChanged()}}},yo={AUDIO:function(t,e,i){if(e){var n=i.tech,r=i.requestOptions,a=i.segmentLoaders[t]
e.on("loadedmetadata",function(){var t=e.media()
a.playlist(t,r),(!n.paused()||t.endList&&"none"!==n.preload())&&a.load()}),e.on("loadedplaylist",function(){a.playlist(e.media(),r),n.paused()||a.load()}),e.on("error",go[t](t,i))}},SUBTITLES:function(t,e,i){var n=i.tech,r=i.requestOptions,a=i.segmentLoaders[t],s=i.mediaTypes[t]
e.on("loadedmetadata",function(){var t=e.media()
a.playlist(t,r),a.track(s.activeTrack()),(!n.paused()||t.endList&&"none"!==n.preload())&&a.load()}),e.on("loadedplaylist",function(){a.playlist(e.media(),r),n.paused()||a.load()}),e.on("error",go[t](t,i))}},vo=function(t,e){return function(i){return i.attributes[t]===e}},_o=function(t){return function(e){return e.resolvedUri===t}},bo={AUDIO:function(t,e){var i=e.hls,n=e.sourceType,r=e.segmentLoaders[t],a=e.requestOptions.withCredentials,s=e.master,o=s.mediaGroups,u=s.playlists,l=e.mediaTypes[t],c=l.groups,h=l.tracks,d=e.masterPlaylistLoader
for(var p in o[t]&&0!==Object.keys(o[t]).length||(o[t]={main:{default:{default:!0}}}),o[t]){c[p]||(c[p]=[])
var f=u.filter(vo(t,p))
for(var m in o[t][p]){var g=o[t][p][m]
f.filter(_o(g.resolvedUri)).length&&delete g.resolvedUri
var y
if(y=g.resolvedUri?new Da(g.resolvedUri,i,a):g.playlists&&"dash"===n?new qs(g.playlists[0],i,a,d):null,g=ya.mergeOptions({id:m,playlistLoader:y},g),yo[t](t,g.playlistLoader,e),c[p].push(g),void 0===h[m]){var v=new ya.AudioTrack({id:m,kind:po(g),enabled:!1,language:g.language,default:g.default,label:m})
h[m]=v}}}r.on("error",go[t](t,e))},SUBTITLES:function(t,e){var i=e.tech,n=e.hls,r=e.sourceType,a=e.segmentLoaders[t],s=e.requestOptions.withCredentials,o=e.master.mediaGroups,u=e.mediaTypes[t],l=u.groups,c=u.tracks,h=e.masterPlaylistLoader
for(var d in o[t])for(var p in l[d]||(l[d]=[]),o[t][d])if(!o[t][d][p].forced){var f=o[t][d][p],m=void 0
if("hls"===r?m=new Da(f.resolvedUri,n,s):"dash"===r&&(m=new qs(f.playlists[0],n,s,h)),f=ya.mergeOptions({id:p,playlistLoader:m},f),yo[t](t,f.playlistLoader,e),l[d].push(f),void 0===c[p]){var g=i.addRemoteTextTrack({id:p,kind:"subtitles",enabled:!1,language:f.language,label:p},!1).track
c[p]=g}}a.on("error",go[t](t,e))},"CLOSED-CAPTIONS":function(t,e){var i=e.tech,n=e.master.mediaGroups,r=e.mediaTypes[t],a=r.groups,s=r.tracks
for(var o in n[t])for(var u in a[o]||(a[o]=[]),n[t][o]){var l=n[t][o][u]
if(l.instreamId.match(/CC\d/)&&(a[o].push(ya.mergeOptions({id:u},l)),void 0===s[u])){var c=i.addRemoteTextTrack({id:l.instreamId,kind:"captions",enabled:!1,language:l.language,label:u},!1).track
s[u]=c}}}},To={AUDIO:function(t,e){return function(){var i=e.mediaTypes[t].tracks
for(var n in i)if(i[n].enabled)return i[n]
return null}},SUBTITLES:function(t,e){return function(){var i=e.mediaTypes[t].tracks
for(var n in i)if("showing"===i[n].mode)return i[n]
return null}}},So=function(){var t={}
return["AUDIO","SUBTITLES","CLOSED-CAPTIONS"].forEach(function(e){t[e]={groups:{},tracks:{},activePlaylistLoader:null,activeGroup:Ws,activeTrack:Ws,onGroupChanged:Ws,onTrackChanged:Ws}}),t},ko=void 0,wo=["mediaRequests","mediaRequestsAborted","mediaRequestsTimedout","mediaRequestsErrored","mediaTransferDuration","mediaBytesTransferred"],Co=function(t){return this.audioSegmentLoader_[t]+this.mainSegmentLoader_[t]},Eo=function(t){function e(t){Ta(this,e)
var i=wa(this,(e.__proto__||Object.getPrototypeOf(e)).call(this)),n=t.url,r=t.withCredentials,a=t.tech,s=t.bandwidth,o=t.externHls,u=t.useCueTags,l=t.blacklistDuration,c=t.enableLowInitialPlaylist,h=t.sourceType,d=t.seekTo
if(!n)throw new Error("A non-empty playlist URL is required")
ko=o,i.withCredentials=r,i.tech_=a,i.hls_=a.hls,i.seekTo_=d,i.sourceType_=h,i.useCueTags_=u,i.blacklistDuration=l,i.enableLowInitialPlaylist=c,i.useCueTags_&&(i.cueTagsTrack_=i.tech_.addTextTrack("metadata","ad-cues"),i.cueTagsTrack_.inBandMetadataTrackDispatchType=""),i.requestOptions_={withCredentials:i.withCredentials,timeout:null},i.mediaTypes_=So(),i.mediaSource=new ya.MediaSource,i.mediaSource.addEventListener("sourceopen",i.handleSourceOpen_.bind(i)),i.seekable_=ya.createTimeRanges(),i.hasPlayed_=function(){return!1},i.syncController_=new co(t),i.segmentMetadataTrack_=a.addRemoteTextTrack({kind:"metadata",label:"segment-metadata"},!1).track,i.decrypter_=new ho,i.inbandTextTracks_={}
var p={hls:i.hls_,mediaSource:i.mediaSource,currentTime:i.tech_.currentTime.bind(i.tech_),seekable:function(){return i.seekable()},seeking:function(){return i.tech_.seeking()},duration:function(){return i.mediaSource.duration},hasPlayed:function(){return i.hasPlayed_()},goalBufferLength:function(){return i.goalBufferLength()},bandwidth:s,syncController:i.syncController_,decrypter:i.decrypter_,sourceType:i.sourceType_,inbandTextTracks:i.inbandTextTracks_}
return i.masterPlaylistLoader_="dash"===i.sourceType_?new qs(n,i.hls_,i.withCredentials):new Da(n,i.hls_,i.withCredentials),i.setupMasterPlaylistLoaderListeners_(),i.mainSegmentLoader_=new no(ya.mergeOptions(p,{segmentMetadataTrack:i.segmentMetadataTrack_,loaderType:"main"}),t),i.audioSegmentLoader_=new no(ya.mergeOptions(p,{loaderType:"audio"}),t),i.subtitleSegmentLoader_=new so(ya.mergeOptions(p,{loaderType:"vtt"}),t),i.setupSegmentLoaderListeners_(),wo.forEach(function(t){i[t+"_"]=Co.bind(i,t)}),i.logger_=zs("MPC"),i.masterPlaylistLoader_.load(),i}return ka(e,t),Sa(e,[{key:"setupMasterPlaylistLoaderListeners_",value:function(){var t=this
this.masterPlaylistLoader_.on("loadedmetadata",function(){var e=t.masterPlaylistLoader_.media(),i=1.5*t.masterPlaylistLoader_.targetDuration*1e3
$a(t.masterPlaylistLoader_.master,t.masterPlaylistLoader_.media())?t.requestOptions_.timeout=0:t.requestOptions_.timeout=i,e.endList&&"none"!==t.tech_.preload()&&(t.mainSegmentLoader_.playlist(e,t.requestOptions_),t.mainSegmentLoader_.load()),function(t){["AUDIO","SUBTITLES","CLOSED-CAPTIONS"].forEach(function(e){bo[e](e,t)})
var e=t.mediaTypes,i=t.masterPlaylistLoader,n=t.tech,r=t.hls;["AUDIO","SUBTITLES"].forEach(function(i){e[i].activeGroup=function(t,e){return function(i){var n=e.masterPlaylistLoader,r=e.mediaTypes[t].groups,a=n.media()
if(!a)return null
var s=null
return a.attributes[t]&&(s=r[a.attributes[t]]),s=s||r.main,void 0===i?s:null===i?null:s.filter(function(t){return t.id===i.id})[0]||null}}(i,t),e[i].activeTrack=To[i](i,t),e[i].onGroupChanged=function(t,e){return function(){var i=e.segmentLoaders,n=i[t],r=i.main,a=e.mediaTypes[t],s=a.activeTrack(),o=a.activeGroup(s),u=a.activePlaylistLoader
fo(n,a),o&&(o.playlistLoader?(n.resyncLoader(),mo(o.playlistLoader,a)):u&&r.resetEverything())}}(i,t),e[i].onTrackChanged=function(t,e){return function(){var i=e.segmentLoaders,n=i[t],r=i.main,a=e.mediaTypes[t],s=a.activeTrack(),o=a.activeGroup(s),u=a.activePlaylistLoader
fo(n,a),o&&(o.playlistLoader?u!==o.playlistLoader?(n.track&&n.track(s),n.resetEverything(),mo(o.playlistLoader,a)):mo(o.playlistLoader,a):r.resetEverything())}}(i,t)})
var a=e.AUDIO.activeGroup(),s=(a.filter(function(t){return t.default})[0]||a[0]).id
e.AUDIO.tracks[s].enabled=!0,e.AUDIO.onTrackChanged(),i.on("mediachange",function(){["AUDIO","SUBTITLES"].forEach(function(t){return e[t].onGroupChanged()})})
var o=function(){e.AUDIO.onTrackChanged(),n.trigger({type:"usage",name:"hls-audio-change"})}
for(var u in n.audioTracks().addEventListener("change",o),n.remoteTextTracks().addEventListener("change",e.SUBTITLES.onTrackChanged),r.on("dispose",function(){n.audioTracks().removeEventListener("change",o),n.remoteTextTracks().removeEventListener("change",e.SUBTITLES.onTrackChanged)}),n.clearTracks("audio"),e.AUDIO.tracks)n.audioTracks().addTrack(e.AUDIO.tracks[u])}({sourceType:t.sourceType_,segmentLoaders:{AUDIO:t.audioSegmentLoader_,SUBTITLES:t.subtitleSegmentLoader_,main:t.mainSegmentLoader_},tech:t.tech_,requestOptions:t.requestOptions_,masterPlaylistLoader:t.masterPlaylistLoader_,hls:t.hls_,master:t.master(),mediaTypes:t.mediaTypes_,blacklistCurrentPlaylist:t.blacklistCurrentPlaylist.bind(t)}),t.triggerPresenceUsage_(t.master(),e)
try{t.setupSourceBuffers_()}catch(e){return ya.log.warn("Failed to create SourceBuffers",e),t.mediaSource.endOfStream("decode")}t.setupFirstPlay(),t.trigger("selectedinitialmedia")}),this.masterPlaylistLoader_.on("loadedplaylist",function(){var e=t.masterPlaylistLoader_.media()
if(!e){t.excludeUnsupportedVariants_()
var i=void 0
return t.enableLowInitialPlaylist&&(i=t.selectInitialPlaylist()),i||(i=t.selectPlaylist()),t.initialMedia_=i,void t.masterPlaylistLoader_.media(t.initialMedia_)}if(t.useCueTags_&&t.updateAdCues_(e),t.mainSegmentLoader_.playlist(e,t.requestOptions_),t.updateDuration(),t.tech_.paused()||(t.mainSegmentLoader_.load(),t.audioSegmentLoader_&&t.audioSegmentLoader_.load()),!e.endList){var n=function(){var e=t.seekable()
0!==e.length&&t.mediaSource.addSeekableRange_(e.start(0),e.end(0))}
t.duration()!==1/0?t.tech_.one("durationchange",function e(){t.duration()===1/0?n():t.tech_.one("durationchange",e)}):n()}}),this.masterPlaylistLoader_.on("error",function(){t.blacklistCurrentPlaylist(t.masterPlaylistLoader_.error)}),this.masterPlaylistLoader_.on("mediachanging",function(){t.mainSegmentLoader_.abort(),t.mainSegmentLoader_.pause()}),this.masterPlaylistLoader_.on("mediachange",function(){var e=t.masterPlaylistLoader_.media(),i=1.5*t.masterPlaylistLoader_.targetDuration*1e3
$a(t.masterPlaylistLoader_.master,t.masterPlaylistLoader_.media())?t.requestOptions_.timeout=0:t.requestOptions_.timeout=i,t.mainSegmentLoader_.playlist(e,t.requestOptions_),t.mainSegmentLoader_.load(),t.tech_.trigger({type:"mediachange",bubbles:!0})}),this.masterPlaylistLoader_.on("playlistunchanged",function(){var e=t.masterPlaylistLoader_.media()
t.stuckAtPlaylistEnd_(e)&&(t.blacklistCurrentPlaylist({message:"Playlist no longer updating."}),t.tech_.trigger("playliststuck"))}),this.masterPlaylistLoader_.on("renditiondisabled",function(){t.tech_.trigger({type:"usage",name:"hls-rendition-disabled"})}),this.masterPlaylistLoader_.on("renditionenabled",function(){t.tech_.trigger({type:"usage",name:"hls-rendition-enabled"})})}},{key:"triggerPresenceUsage_",value:function(t,e){var i=t.mediaGroups||{},n=!0,r=Object.keys(i.AUDIO)
for(var a in i.AUDIO)for(var s in i.AUDIO[a])i.AUDIO[a][s].uri||(n=!1)
n&&this.tech_.trigger({type:"usage",name:"hls-demuxed"}),Object.keys(i.SUBTITLES).length&&this.tech_.trigger({type:"usage",name:"hls-webvtt"}),ko.Playlist.isAes(e)&&this.tech_.trigger({type:"usage",name:"hls-aes"}),ko.Playlist.isFmp4(e)&&this.tech_.trigger({type:"usage",name:"hls-fmp4"}),r.length&&Object.keys(i.AUDIO[r[0]]).length>1&&this.tech_.trigger({type:"usage",name:"hls-alternate-audio"}),this.useCueTags_&&this.tech_.trigger({type:"usage",name:"hls-playlist-cue-tags"})}},{key:"setupSegmentLoaderListeners_",value:function(){var t=this
this.mainSegmentLoader_.on("bandwidthupdate",function(){var e=t.selectPlaylist(),i=t.masterPlaylistLoader_.media(),n=t.tech_.buffered(),r=n.length?n.end(n.length-1)-t.tech_.currentTime():0,a=t.bufferLowWaterLine();(!i.endList||t.duration()<Xs.MAX_BUFFER_LOW_WATER_LINE||e.attributes.BANDWIDTH<i.attributes.BANDWIDTH||r>=a)&&t.masterPlaylistLoader_.media(e),t.tech_.trigger("bandwidthupdate")}),this.mainSegmentLoader_.on("progress",function(){t.trigger("progress")}),this.mainSegmentLoader_.on("error",function(){t.blacklistCurrentPlaylist(t.mainSegmentLoader_.error())}),this.mainSegmentLoader_.on("syncinfoupdate",function(){t.onSyncInfoUpdate_()}),this.mainSegmentLoader_.on("timestampoffset",function(){t.tech_.trigger({type:"usage",name:"hls-timestamp-offset"})}),this.audioSegmentLoader_.on("syncinfoupdate",function(){t.onSyncInfoUpdate_()}),this.mainSegmentLoader_.on("ended",function(){t.onEndOfStream()}),this.mainSegmentLoader_.on("earlyabort",function(){t.blacklistCurrentPlaylist({message:"Aborted early because there isn't enough bandwidth to complete the request without rebuffering."},120)}),this.mainSegmentLoader_.on("reseteverything",function(){t.tech_.trigger("hls-reset")}),this.mainSegmentLoader_.on("segmenttimemapping",function(e){t.tech_.trigger({type:"hls-segment-time-mapping",mapping:e.mapping})}),this.audioSegmentLoader_.on("ended",function(){t.onEndOfStream()})}},{key:"mediaSecondsLoaded_",value:function(){return Math.max(this.audioSegmentLoader_.mediaSecondsLoaded+this.mainSegmentLoader_.mediaSecondsLoaded)}},{key:"load",value:function(){this.mainSegmentLoader_.load(),this.mediaTypes_.AUDIO.activePlaylistLoader&&this.audioSegmentLoader_.load(),this.mediaTypes_.SUBTITLES.activePlaylistLoader&&this.subtitleSegmentLoader_.load()}},{key:"smoothQualityChange_",value:function(){var t=this.selectPlaylist()
t!==this.masterPlaylistLoader_.media()&&(this.masterPlaylistLoader_.media(t),this.mainSegmentLoader_.resetLoader())}},{key:"fastQualityChange_",value:function(){var t=this,e=this.selectPlaylist()
e!==this.masterPlaylistLoader_.media()&&(this.masterPlaylistLoader_.media(e),this.mainSegmentLoader_.resetEverything(function(){t.tech_.setCurrentTime(t.tech_.currentTime())}))}},{key:"play",value:function(){if(!this.setupFirstPlay()){this.tech_.ended()&&this.seekTo_(0),this.hasPlayed_()&&this.load()
var t=this.tech_.seekable()
return this.tech_.duration()===1/0&&this.tech_.currentTime()<t.start(0)?this.seekTo_(t.end(t.length-1)):void 0}}},{key:"setupFirstPlay",value:function(){var t=this,e=this.masterPlaylistLoader_.media()
if(!e||this.tech_.paused()||this.hasPlayed_())return!1
if(!e.endList){var i=this.seekable()
if(!i.length)return!1
if(ya.browser.IE_VERSION&&0===this.tech_.readyState())return this.tech_.one("loadedmetadata",function(){t.trigger("firstplay"),t.seekTo_(i.end(0)),t.hasPlayed_=function(){return!0}}),!1
this.trigger("firstplay"),this.seekTo_(i.end(0))}return this.hasPlayed_=function(){return!0},this.load(),!0}},{key:"handleSourceOpen_",value:function(){try{this.setupSourceBuffers_()}catch(t){return ya.log.warn("Failed to create Source Buffers",t),this.mediaSource.endOfStream("decode")}if(this.tech_.autoplay()){var t=this.tech_.play()
void 0!==t&&"function"==typeof t.then&&t.then(null,function(t){})}this.trigger("sourceopen")}},{key:"onEndOfStream",value:function(){var t=this.mainSegmentLoader_.ended_
this.mediaTypes_.AUDIO.activePlaylistLoader&&(t=!this.mainSegmentLoader_.startingMedia_||this.mainSegmentLoader_.startingMedia_.containsVideo?t&&this.audioSegmentLoader_.ended_:this.audioSegmentLoader_.ended_),t&&this.mediaSource.endOfStream()}},{key:"stuckAtPlaylistEnd_",value:function(t){if(!this.seekable().length)return!1
var e=this.syncController_.getExpiredTime(t,this.mediaSource.duration)
if(null===e)return!1
var i=ko.Playlist.playlistEnd(t,e),n=this.tech_.currentTime(),r=this.tech_.buffered()
if(!r.length)return i-n<=.1
var a=r.end(r.length-1)
return a-n<=.1&&i-a<=.1}},{key:"blacklistCurrentPlaylist",value:function(){var t,e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},i=arguments[1],n=void 0
if(n=e.playlist||this.masterPlaylistLoader_.media(),i=i||e.blacklistDuration||this.blacklistDuration,!n){this.error=e
try{return this.mediaSource.endOfStream("network")}catch(t){return this.trigger("error")}}var r=1===this.masterPlaylistLoader_.master.playlists.filter(Xa).length
return r?(ya.log.warn("Problem encountered with the current HLS playlist. Trying again since it is the final playlist."),this.tech_.trigger("retryplaylist"),this.masterPlaylistLoader_.load(r)):(n.excludeUntil=Date.now()+1e3*i,this.tech_.trigger("blacklistplaylist"),this.tech_.trigger({type:"usage",name:"hls-rendition-blacklisted"}),t=this.selectPlaylist(),ya.log.warn("Problem encountered with the current HLS playlist."+(e.message?" "+e.message:"")+" Switching to another playlist."),this.masterPlaylistLoader_.media(t))}},{key:"pauseLoading",value:function(){this.mainSegmentLoader_.pause(),this.mediaTypes_.AUDIO.activePlaylistLoader&&this.audioSegmentLoader_.pause(),this.mediaTypes_.SUBTITLES.activePlaylistLoader&&this.subtitleSegmentLoader_.pause()}},{key:"setCurrentTime",value:function(t){var e=us(this.tech_.buffered(),t)
return this.masterPlaylistLoader_&&this.masterPlaylistLoader_.media()&&this.masterPlaylistLoader_.media().segments?e&&e.length?t:(this.mainSegmentLoader_.resetEverything(),this.mainSegmentLoader_.abort(),this.mediaTypes_.AUDIO.activePlaylistLoader&&(this.audioSegmentLoader_.resetEverything(),this.audioSegmentLoader_.abort()),this.mediaTypes_.SUBTITLES.activePlaylistLoader&&(this.subtitleSegmentLoader_.resetEverything(),this.subtitleSegmentLoader_.abort()),void this.load()):0}},{key:"duration",value:function(){return this.masterPlaylistLoader_?this.mediaSource?this.mediaSource.duration:ko.Playlist.duration(this.masterPlaylistLoader_.media()):0}},{key:"seekable",value:function(){return this.seekable_}},{key:"onSyncInfoUpdate_",value:function(){var t=void 0,e=void 0
if(this.masterPlaylistLoader_){var i=this.masterPlaylistLoader_.media()
if(i){var n=this.syncController_.getExpiredTime(i,this.mediaSource.duration)
if(null!==n&&0!==(t=ko.Playlist.seekable(i,n)).length){if(this.mediaTypes_.AUDIO.activePlaylistLoader){if(i=this.mediaTypes_.AUDIO.activePlaylistLoader.media(),null===(n=this.syncController_.getExpiredTime(i,this.mediaSource.duration)))return
if(0===(e=ko.Playlist.seekable(i,n)).length)return}e?e.start(0)>t.end(0)||t.start(0)>e.end(0)?this.seekable_=t:this.seekable_=ya.createTimeRanges([[e.start(0)>t.start(0)?e.start(0):t.start(0),e.end(0)<t.end(0)?e.end(0):t.end(0)]]):this.seekable_=t,this.logger_("seekable updated ["+cs(this.seekable_)+"]"),this.tech_.trigger("seekablechanged")}}}}},{key:"updateDuration",value:function(){var t=this,e=this.mediaSource.duration,i=ko.Playlist.duration(this.masterPlaylistLoader_.media()),n=this.tech_.buffered(),r=function e(){t.mediaSource.duration=i,t.tech_.trigger("durationchange"),t.mediaSource.removeEventListener("sourceopen",e)}
n.length>0&&(i=Math.max(i,n.end(n.length-1))),e!==i&&("open"!==this.mediaSource.readyState?this.mediaSource.addEventListener("sourceopen",r):r())}},{key:"dispose",value:function(){var t=this
this.decrypter_.terminate(),this.masterPlaylistLoader_.dispose(),this.mainSegmentLoader_.dispose(),["AUDIO","SUBTITLES"].forEach(function(e){var i=t.mediaTypes_[e].groups
for(var n in i)i[n].forEach(function(t){t.playlistLoader&&t.playlistLoader.dispose()})}),this.audioSegmentLoader_.dispose(),this.subtitleSegmentLoader_.dispose()}},{key:"master",value:function(){return this.masterPlaylistLoader_.master}},{key:"media",value:function(){return this.masterPlaylistLoader_.media()||this.initialMedia_}},{key:"setupSourceBuffers_",value:function(){var t,e=this.masterPlaylistLoader_.media()
if(e&&"open"===this.mediaSource.readyState){if((t=function(t,e){var i=function(t){return t.segments&&t.segments.length&&t.segments[0].map?"mp4":"mp2t"}(e),n=function(t){var e=t.attributes||{}
return e.CODECS?Ls(e.CODECS):Es}(e),r=e.attributes||{},a=!0,s=!1
if(!e)return[]
if(t.mediaGroups.AUDIO&&r.AUDIO){var o=t.mediaGroups.AUDIO[r.AUDIO]
if(o)for(var u in s=!0,a=!1,o)if(!o[u].uri&&!o[u].playlists){a=!0
break}}s&&!n.audioProfile&&(a||(n.audioProfile=function(t,e){if(!t.mediaGroups.AUDIO||!e)return null
var i=t.mediaGroups.AUDIO[e]
if(!i)return null
for(var n in i){var r=i[n]
if(r.default&&r.playlists)return Ls(r.playlists[0].attributes.CODECS).audioProfile}return null}(t,r.AUDIO)),n.audioProfile||(ya.log.warn("Multiple audio tracks present but no audio codec string is specified. Attempting to use the default audio codec (mp4a.40.2)"),n.audioProfile=Es.audioProfile))
var l={}
n.videoCodec&&(l.video=""+n.videoCodec+n.videoObjectTypeIndicator),n.audioProfile&&(l.audio="mp4a.40."+n.audioProfile)
var c=Os("audio",i,[l.audio]),h=Os("video",i,[l.video]),d=Os("video",i,[l.video,l.audio])
return s?!a&&l.video?[h,c]:a||l.video?[d,c]:[c,c]:l.video?[d]:[c]}(this.masterPlaylistLoader_.master,e)).length<1)return this.error="No compatible SourceBuffer configuration for the variant stream:"+e.resolvedUri,this.mediaSource.endOfStream("decode")
this.configureLoaderMimeTypes_(t),this.excludeIncompatibleVariants_(e)}}},{key:"configureLoaderMimeTypes_",value:function(t){var e=t.length>1&&-1===t[0].indexOf(",")&&t[0]!==t[1]?new ya.EventTarget:null
this.mainSegmentLoader_.mimeType(t[0],e),t[1]&&this.audioSegmentLoader_.mimeType(t[1],e)}},{key:"excludeUnsupportedVariants_",value:function(){this.master().playlists.forEach(function(t){t.attributes.CODECS&&r.a.MediaSource&&r.a.MediaSource.isTypeSupported&&!r.a.MediaSource.isTypeSupported('video/mp4; codecs="'+function(t){return t.replace(/avc1\.(\d+)\.(\d+)/i,function(t){return As([t])[0]})}(t.attributes.CODECS)+'"')&&(t.excludeUntil=1/0)})}},{key:"excludeIncompatibleVariants_",value:function(t){var e=2,i=null,n=void 0
t.attributes.CODECS&&(n=Ls(t.attributes.CODECS),i=n.videoCodec,e=n.codecCount),this.master().playlists.forEach(function(t){var n={codecCount:2,videoCodec:null}
t.attributes.CODECS&&(n=Ls(t.attributes.CODECS)),n.codecCount!==e&&(t.excludeUntil=1/0),n.videoCodec!==i&&(t.excludeUntil=1/0)})}},{key:"updateAdCues_",value:function(t){var e=0,i=this.seekable()
i.length&&(e=i.start(0)),function(t,e){var i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:0
if(t.segments)for(var n=i,a=void 0,s=0;s<t.segments.length;s++){var o=t.segments[s]
if(a||(a=oo(e,n+o.duration/2)),a){if("cueIn"in o){a.endTime=n,a.adEndTime=n,n+=o.duration,a=null
continue}if(n<a.endTime){n+=o.duration
continue}a.endTime+=o.duration}else if("cueOut"in o&&((a=new r.a.VTTCue(n,n+o.duration,o.cueOut)).adStartTime=n,a.adEndTime=n+parseFloat(o.cueOut),e.addCue(a)),"cueOutCont"in o){var u,l,c=o.cueOutCont.split("/").map(parseFloat),h=Ca(c,2)
u=h[0],l=h[1],(a=new r.a.VTTCue(n,n+o.duration,"")).adStartTime=n-u,a.adEndTime=a.adStartTime+l,e.addCue(a)}n+=o.duration}}(t,this.cueTagsTrack_,e)}},{key:"goalBufferLength",value:function(){var t=this.tech_.currentTime(),e=Xs.GOAL_BUFFER_LENGTH,i=Xs.GOAL_BUFFER_LENGTH_RATE,n=Math.max(e,Xs.MAX_GOAL_BUFFER_LENGTH)
return Math.min(e+t*i,n)}},{key:"bufferLowWaterLine",value:function(){var t=this.tech_.currentTime(),e=Xs.BUFFER_LOW_WATER_LINE,i=Xs.BUFFER_LOW_WATER_LINE_RATE,n=Math.max(e,Xs.MAX_BUFFER_LOW_WATER_LINE)
return Math.min(e+t*i,n)}}]),e}(ya.EventTarget),Ao=function t(e,i,n){Ta(this,t)
var r=e.masterPlaylistController_.fastQualityChange_.bind(e.masterPlaylistController_)
if(i.attributes.RESOLUTION){var a=i.attributes.RESOLUTION
this.width=a.width,this.height=a.height}this.bandwidth=i.attributes.BANDWIDTH,this.id=n,this.enabled=function(t,e,i){return function(n){var r=t.master.playlists[e],a=Ga(r),s=Xa(r)
return void 0===n?s:(n?delete r.disabled:r.disabled=!0,n===s||a||(i(),n?t.trigger("renditionenabled"):t.trigger("renditiondisabled")),n)}}(e.playlists,i.uri,r)},Lo=["seeking","seeked","pause","playing","error"],Oo=function(){function t(e){var i=this
Ta(this,t),this.tech_=e.tech,this.seekable=e.seekable,this.seekTo=e.seekTo,this.consecutiveUpdates=0,this.lastRecordedTime=null,this.timer_=null,this.checkCurrentTimeTimeout_=null,this.logger_=zs("PlaybackWatcher"),this.logger_("initialize")
var n=function(){return i.monitorCurrentTime_()},a=function(){return i.techWaiting_()},s=function(){return i.cancelTimer_()},o=function(){return i.fixesBadSeeks_()}
this.tech_.on("seekablechanged",o),this.tech_.on("waiting",a),this.tech_.on(Lo,s),this.tech_.on("canplay",n),this.dispose=function(){i.logger_("dispose"),i.tech_.off("seekablechanged",o),i.tech_.off("waiting",a),i.tech_.off(Lo,s),i.tech_.off("canplay",n),i.checkCurrentTimeTimeout_&&r.a.clearTimeout(i.checkCurrentTimeTimeout_),i.cancelTimer_()}}return Sa(t,[{key:"monitorCurrentTime_",value:function(){this.checkCurrentTime_(),this.checkCurrentTimeTimeout_&&r.a.clearTimeout(this.checkCurrentTimeTimeout_),this.checkCurrentTimeTimeout_=r.a.setTimeout(this.monitorCurrentTime_.bind(this),250)}},{key:"checkCurrentTime_",value:function(){if(this.tech_.seeking()&&this.fixesBadSeeks_())return this.consecutiveUpdates=0,void(this.lastRecordedTime=this.tech_.currentTime())
if(!this.tech_.paused()&&!this.tech_.seeking()){var t=this.tech_.currentTime(),e=this.tech_.buffered()
if(this.lastRecordedTime===t&&(!e.length||t+.1>=e.end(e.length-1)))return this.techWaiting_()
this.consecutiveUpdates>=5&&t===this.lastRecordedTime?(this.consecutiveUpdates++,this.waiting_()):t===this.lastRecordedTime?this.consecutiveUpdates++:(this.consecutiveUpdates=0,this.lastRecordedTime=t)}}},{key:"cancelTimer_",value:function(){this.consecutiveUpdates=0,this.timer_&&(this.logger_("cancelTimer_"),clearTimeout(this.timer_)),this.timer_=null}},{key:"fixesBadSeeks_",value:function(){var t=this.tech_.seeking(),e=this.seekable(),i=this.tech_.currentTime(),n=void 0
return t&&this.afterSeekableWindow_(e,i)&&(n=e.end(e.length-1)),t&&this.beforeSeekableWindow_(e,i)&&(n=e.start(0)+.1),void 0!==n&&(this.logger_("Trying to seek outside of seekable at time "+i+" with seekable range "+cs(e)+". Seeking to "+n+"."),this.seekTo(n),!0)}},{key:"waiting_",value:function(){if(!this.techWaiting_()){var t=this.tech_.currentTime(),e=this.tech_.buffered(),i=us(e,t)
return i.length&&t+3<=i.end(0)?(this.cancelTimer_(),this.seekTo(t),this.logger_("Stopped at "+t+" while inside a buffered region ["+i.start(0)+" -> "+i.end(0)+"]. Attempting to resume playback by seeking to the current time."),void this.tech_.trigger({type:"usage",name:"hls-unknown-waiting"})):void 0}}},{key:"techWaiting_",value:function(){var t=this.seekable(),e=this.tech_.currentTime()
if(this.tech_.seeking()&&this.fixesBadSeeks_())return!0
if(this.tech_.seeking()||null!==this.timer_)return!0
if(this.beforeSeekableWindow_(t,e)){var i=t.end(t.length-1)
return this.logger_("Fell out of live window at time "+e+". Seeking to live point (seekable end) "+i),this.cancelTimer_(),this.seekTo(i),this.tech_.trigger({type:"usage",name:"hls-live-resync"}),!0}var n=this.tech_.buffered(),r=ls(n,e)
if(this.videoUnderflow_(r,n,e))return this.cancelTimer_(),this.seekTo(e),this.tech_.trigger({type:"usage",name:"hls-video-underflow"}),!0
if(r.length>0){var a=r.start(0)-e
return this.logger_("Stopped at "+e+", setting timer for "+a+", seeking to "+r.start(0)),this.timer_=setTimeout(this.skipTheGap_.bind(this),1e3*a,e),!0}return!1}},{key:"afterSeekableWindow_",value:function(t,e){return!!t.length&&e>t.end(t.length-1)+.1}},{key:"beforeSeekableWindow_",value:function(t,e){return!!(t.length&&t.start(0)>0&&e<t.start(0)-.1)}},{key:"videoUnderflow_",value:function(t,e,i){if(0===t.length){var n=this.gapFromVideoUnderflow_(e,i)
if(n)return this.logger_("Encountered a gap in video from "+n.start+" to "+n.end+". Seeking to current time "+i),!0}return!1}},{key:"skipTheGap_",value:function(t){var e=this.tech_.buffered(),i=this.tech_.currentTime(),n=ls(e,i)
this.cancelTimer_(),0!==n.length&&i===t&&(this.logger_("skipTheGap_:","currentTime:",i,"scheduled currentTime:",t,"nextRange start:",n.start(0)),this.seekTo(n.start(0)+1/30),this.tech_.trigger({type:"usage",name:"hls-gap-skip"}))}},{key:"gapFromVideoUnderflow_",value:function(t,e){for(var i=function(t){if(t.length<2)return ya.createTimeRanges()
for(var e=[],i=1;i<t.length;i++){var n=t.end(i-1),r=t.start(i)
e.push([n,r])}return ya.createTimeRanges(e)}(t),n=0;n<i.length;n++){var r=i.start(n),a=i.end(n)
if(e-r<4&&e-r>2)return{start:r,end:a}}return null}}]),t}(),Po={errorInterval:30,getSource:function(t){return t(this.tech({IWillNotUseThisInPlugins:!0}).currentSource_)}},xo=function(t){!function t(e,i){var n=0,r=0,a=ya.mergeOptions(Po,i)
e.ready(function(){e.trigger({type:"usage",name:"hls-error-reload-initialized"})})
var s=function(){r&&e.currentTime(r)},o=function(t){null!=t&&(r=e.duration()!==1/0&&e.currentTime()||0,e.one("loadedmetadata",s),e.src(t),e.trigger({type:"usage",name:"hls-error-reload"}),e.play())},u=function(){if(Date.now()-n<1e3*a.errorInterval)e.trigger({type:"usage",name:"hls-error-reload-canceled"})
else{if(a.getSource&&"function"==typeof a.getSource)return n=Date.now(),a.getSource.call(e,o)
ya.log.error("ERROR: reloadSourceOnError - The option getSource must be a function!")}},l=function t(){e.off("loadedmetadata",s),e.off("error",u),e.off("dispose",t)}
e.on("error",u),e.on("dispose",l),e.reloadSourceOnError=function(i){l(),t(e,i)}}(this,t)}
ya.use("*",function(t){return{setSource:function(t,e){e(null,t)},setCurrentTime:function(e){return t.vhs&&t.currentSource().src===t.vhs.source_.src&&t.vhs.setCurrentTime(e),e}}})
var Uo={PlaylistLoader:Da,Playlist:Ka,Decrypter:gt,AsyncStream:pt,decrypt:mt,utils:ss,STANDARD_PLAYLIST_SELECTOR:function(){return function(t,e,i,n){var a=t.playlists.map(function(t){var e,i
return e=t.attributes.RESOLUTION&&t.attributes.RESOLUTION.width,i=t.attributes.RESOLUTION&&t.attributes.RESOLUTION.height,{bandwidth:t.attributes.BANDWIDTH||r.a.Number.MAX_VALUE,width:e,height:i,playlist:t}})
Zs(a,function(t,e){return t.bandwidth-e.bandwidth})
var s=(a=a.filter(function(t){return!Ka.isIncompatible(t.playlist)})).filter(function(t){return Ka.isEnabled(t.playlist)})
s.length||(s=a.filter(function(t){return!Ka.isDisabled(t.playlist)}))
var o=s.filter(function(t){return t.bandwidth*Xs.BANDWIDTH_VARIANCE<e}),u=o[o.length-1],l=o.filter(function(t){return t.bandwidth===u.bandwidth})[0],c=o.filter(function(t){return t.width&&t.height})
Zs(c,function(t,e){return t.width-e.width})
var h=c.filter(function(t){return t.width===i&&t.height===n})
u=h[h.length-1]
var d=h.filter(function(t){return t.bandwidth===u.bandwidth})[0],p=void 0,f=void 0,m=void 0
d||(f=(p=c.filter(function(t){return t.width>i||t.height>n})).filter(function(t){return t.width===p[0].width&&t.height===p[0].height}),u=f[f.length-1],m=f.filter(function(t){return t.bandwidth===u.bandwidth})[0])
var g=m||d||l||s[0]||a[0]
return g?g.playlist:null}(this.playlists.master,this.systemBandwidth,parseInt(Qs(this.tech_.el(),"width"),10),parseInt(Qs(this.tech_.el(),"height"),10))},INITIAL_PLAYLIST_SELECTOR:function(){var t=this.playlists.master.playlists.filter(Ka.isEnabled)
return Zs(t,function(t,e){return to(t,e)}),t.filter(function(t){return Ls(t.attributes.CODECS).videoCodec})[0]||null},comparePlaylistBandwidth:to,comparePlaylistResolution:function(t,e){var i=void 0,n=void 0
return t.attributes.RESOLUTION&&t.attributes.RESOLUTION.width&&(i=t.attributes.RESOLUTION.width),i=i||r.a.Number.MAX_VALUE,e.attributes.RESOLUTION&&e.attributes.RESOLUTION.width&&(n=e.attributes.RESOLUTION.width),i===(n=n||r.a.Number.MAX_VALUE)&&t.attributes.BANDWIDTH&&e.attributes.BANDWIDTH?t.attributes.BANDWIDTH-e.attributes.BANDWIDTH:i-n},xhr:Za()};["GOAL_BUFFER_LENGTH","MAX_GOAL_BUFFER_LENGTH","GOAL_BUFFER_LENGTH_RATE","BUFFER_LOW_WATER_LINE","MAX_BUFFER_LOW_WATER_LINE","BUFFER_LOW_WATER_LINE_RATE","BANDWIDTH_VARIANCE"].forEach(function(t){Object.defineProperty(Uo,t,{get:function(){return ya.log.warn("using Hls."+t+" is UNSAFE be sure you know what you are doing"),Xs[t]},set:function(e){ya.log.warn("using Hls."+t+" is UNSAFE be sure you know what you are doing"),"number"!=typeof e||e<0?ya.log.warn("value of Hls."+t+" must be greater than or equal to 0"):Xs[t]=e}})})
var Io=function(t){return/^(audio|video|application)\/(x-|vnd\.apple\.)?mpegurl/i.test(t)?"hls":/^application\/dash\+xml/i.test(t)?"dash":null},Do=function(t,e){for(var i=e.media(),n=-1,r=0;r<t.length;r++)if(t[r].id===i.uri){n=r
break}t.selectedIndex_=n,t.trigger({selectedIndex:n,type:"change"})}
Uo.canPlaySource=function(){return ya.log.warn("HLS is no longer a tech. Please remove it from your player's techOrder.")}
Uo.supportsNativeHls=function(){var t=s.a.createElement("video")
return!!ya.getTech("Html5").isSupported()&&["application/vnd.apple.mpegurl","audio/mpegurl","audio/x-mpegurl","application/x-mpegurl","video/x-mpegurl","video/mpegurl","application/mpegurl"].some(function(e){return/maybe|probably/i.test(t.canPlayType(e))})}(),Uo.supportsNativeDash=!!ya.getTech("Html5").isSupported()&&/maybe|probably/i.test(s.a.createElement("video").canPlayType("application/dash+xml")),Uo.supportsTypeNatively=function(t){return"hls"===t?Uo.supportsNativeHls:"dash"===t&&Uo.supportsNativeDash},Uo.isSupported=function(){return ya.log.warn("HLS is no longer a tech. Please remove it from your player's techOrder.")}
var Ro=ya.getComponent("Component"),Mo=function(t){function e(t,i,n){Ta(this,e)
var r=wa(this,(e.__proto__||Object.getPrototypeOf(e)).call(this,i,n.hls))
if(i.options_&&i.options_.playerId){var a=ya(i.options_.playerId)
a.hasOwnProperty("hls")||Object.defineProperty(a,"hls",{get:function(){return ya.log.warn("player.hls is deprecated. Use player.tech().hls instead."),i.trigger({type:"usage",name:"hls-player-access"}),r}}),a.vhs=r,a.dash=r}if(r.tech_=i,r.source_=t,r.stats={},r.setOptions_(),r.options_.overrideNative&&i.overrideNativeAudioTracks&&i.overrideNativeVideoTracks)i.overrideNativeAudioTracks(!0),i.overrideNativeVideoTracks(!0)
else if(r.options_.overrideNative&&(i.featuresNativeVideoTracks||i.featuresNativeAudioTracks))throw new Error("Overriding native HLS requires emulated tracks. See https://git.io/vMpjB")
return r.on(s.a,["fullscreenchange","webkitfullscreenchange","mozfullscreenchange","MSFullscreenChange"],function(t){var e=s.a.fullscreenElement||s.a.webkitFullscreenElement||s.a.mozFullScreenElement||s.a.msFullscreenElement
e&&e.contains(r.tech_.el())&&r.masterPlaylistController_.smoothQualityChange_()}),r.on(r.tech_,"error",function(){this.masterPlaylistController_&&this.masterPlaylistController_.pauseLoading()}),r.on(r.tech_,"play",r.play),r}return ka(e,Ro),Sa(e,[{key:"setOptions_",value:function(){var t=this
this.options_.withCredentials=this.options_.withCredentials||!1,"number"!=typeof this.options_.blacklistDuration&&(this.options_.blacklistDuration=300),"number"!=typeof this.options_.bandwidth&&(this.options_.bandwidth=4194304),this.options_.enableLowInitialPlaylist=this.options_.enableLowInitialPlaylist&&4194304===this.options_.bandwidth,["withCredentials","bandwidth"].forEach(function(e){void 0!==t.source_[e]&&(t.options_[e]=t.source_[e])}),this.bandwidth=this.options_.bandwidth}},{key:"src",value:function(t,e){var i=this
t&&(this.setOptions_(),this.options_.url=this.source_.src,this.options_.tech=this.tech_,this.options_.externHls=Uo,this.options_.sourceType=Io(e),this.options_.seekTo=function(t){i.tech_.setCurrentTime(t),i.setCurrentTime(t)},this.masterPlaylistController_=new Eo(this.options_),this.playbackWatcher_=new Oo(ya.mergeOptions(this.options_,{seekable:function(){return i.seekable()}})),this.masterPlaylistController_.on("error",function(){ya.players[i.tech_.options_.playerId].error(i.masterPlaylistController_.error)}),this.masterPlaylistController_.selectPlaylist=this.selectPlaylist?this.selectPlaylist.bind(this):Uo.STANDARD_PLAYLIST_SELECTOR.bind(this),this.masterPlaylistController_.selectInitialPlaylist=Uo.INITIAL_PLAYLIST_SELECTOR.bind(this),this.playlists=this.masterPlaylistController_.masterPlaylistLoader_,this.mediaSource=this.masterPlaylistController_.mediaSource,Object.defineProperties(this,{selectPlaylist:{get:function(){return this.masterPlaylistController_.selectPlaylist},set:function(t){this.masterPlaylistController_.selectPlaylist=t.bind(this)}},throughput:{get:function(){return this.masterPlaylistController_.mainSegmentLoader_.throughput.rate},set:function(t){this.masterPlaylistController_.mainSegmentLoader_.throughput.rate=t,this.masterPlaylistController_.mainSegmentLoader_.throughput.count=1}},bandwidth:{get:function(){return this.masterPlaylistController_.mainSegmentLoader_.bandwidth},set:function(t){this.masterPlaylistController_.mainSegmentLoader_.bandwidth=t,this.masterPlaylistController_.mainSegmentLoader_.throughput={rate:0,count:0}}},systemBandwidth:{get:function(){var t,e=1/(this.bandwidth||1)
return t=this.throughput>0?1/this.throughput:0,Math.floor(1/(e+t))},set:function(){ya.log.error('The "systemBandwidth" property is read-only')}}}),Object.defineProperties(this.stats,{bandwidth:{get:function(){return i.bandwidth||0},enumerable:!0},mediaRequests:{get:function(){return i.masterPlaylistController_.mediaRequests_()||0},enumerable:!0},mediaRequestsAborted:{get:function(){return i.masterPlaylistController_.mediaRequestsAborted_()||0},enumerable:!0},mediaRequestsTimedout:{get:function(){return i.masterPlaylistController_.mediaRequestsTimedout_()||0},enumerable:!0},mediaRequestsErrored:{get:function(){return i.masterPlaylistController_.mediaRequestsErrored_()||0},enumerable:!0},mediaTransferDuration:{get:function(){return i.masterPlaylistController_.mediaTransferDuration_()||0},enumerable:!0},mediaBytesTransferred:{get:function(){return i.masterPlaylistController_.mediaBytesTransferred_()||0},enumerable:!0},mediaSecondsLoaded:{get:function(){return i.masterPlaylistController_.mediaSecondsLoaded_()||0},enumerable:!0},buffered:{get:function(){return hs(i.tech_.buffered())},enumerable:!0},currentTime:{get:function(){return i.tech_.currentTime()},enumerable:!0},currentSource:{get:function(){return i.tech_.currentSource_},enumerable:!0},currentTech:{get:function(){return i.tech_.name_},enumerable:!0},duration:{get:function(){return i.tech_.duration()},enumerable:!0},master:{get:function(){return i.playlists.master},enumerable:!0},playerDimensions:{get:function(){return i.tech_.currentDimensions()},enumerable:!0},seekable:{get:function(){return hs(i.tech_.seekable())},enumerable:!0},timestamp:{get:function(){return Date.now()},enumerable:!0},videoPlaybackQuality:{get:function(){return i.tech_.getVideoPlaybackQuality()},enumerable:!0}}),this.tech_.one("canplay",this.masterPlaylistController_.setupFirstPlay.bind(this.masterPlaylistController_)),this.masterPlaylistController_.on("selectedinitialmedia",function(){var t,e
e=(t=i).playlists,t.representations=function(){return e.master.playlists.filter(function(t){return!Ga(t)}).map(function(e,i){return new Ao(t,e,e.uri)})},function(t){if("dash"===t.options_.sourceType){var e=ya.players[t.tech_.options_.playerId]
if(e.eme){var i=function(t,e,i){if(!t)return t
var n={}
for(var r in t)n[r]={audioContentType:'audio/mp4; codecs="'+i.attributes.CODECS+'"',videoContentType:'video/mp4; codecs="'+e.attributes.CODECS+'"'},e.contentProtection&&e.contentProtection[r]&&e.contentProtection[r].pssh&&(n[r].pssh=e.contentProtection[r].pssh),"string"==typeof t[r]&&(n[r].url=t[r])
return ya.mergeOptions(t,n)}(t.source_.keySystems,t.playlists.media(),t.masterPlaylistController_.mediaTypes_.AUDIO.activePlaylistLoader.media())
i&&(e.currentSource().keySystems=i)}}}(i)}),this.on(this.masterPlaylistController_,"progress",function(){this.tech_.trigger("progress")}),this.tech_.ready(function(){return i.setupQualityLevels_()}),this.tech_.el()&&this.tech_.src(ya.URL.createObjectURL(this.masterPlaylistController_.mediaSource)))}},{key:"setupQualityLevels_",value:function(){var t=this,e=ya.players[this.tech_.options_.playerId]
e&&e.qualityLevels&&(this.qualityLevels_=e.qualityLevels(),this.masterPlaylistController_.on("selectedinitialmedia",function(){!function(t,e){e.representations().forEach(function(e){t.addQualityLevel(e)}),Do(t,e.playlists)}(t.qualityLevels_,t)}),this.playlists.on("mediachange",function(){Do(t.qualityLevels_,t.playlists)}))}},{key:"play",value:function(){this.masterPlaylistController_.play()}},{key:"setCurrentTime",value:function(t){this.masterPlaylistController_.setCurrentTime(t)}},{key:"duration",value:function(){return this.masterPlaylistController_.duration()}},{key:"seekable",value:function(){return this.masterPlaylistController_.seekable()}},{key:"dispose",value:function(){this.playbackWatcher_&&this.playbackWatcher_.dispose(),this.masterPlaylistController_&&this.masterPlaylistController_.dispose(),this.qualityLevels_&&this.qualityLevels_.dispose(),function t(e,i,n){null===e&&(e=Function.prototype)
var r=Object.getOwnPropertyDescriptor(e,i)
if(void 0===r){var a=Object.getPrototypeOf(e)
return null===a?void 0:t(a,i,n)}if("value"in r)return r.value
var s=r.get
return void 0!==s?s.call(n):void 0}(e.prototype.__proto__||Object.getPrototypeOf(e.prototype),"dispose",this).call(this)}}]),e}(),Bo={name:"videojs-http-streaming",VERSION:"1.2.4",canHandleSource:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},i=ya.mergeOptions(ya.options,e)
return Bo.canPlayType(t.type,i)},handleSource:function(t,e){var i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},n=ya.mergeOptions(ya.options,i)
return e.hls=new Mo(t,e,n),e.hls.xhr=Za(),e.hls.src(t.src,t.type),e.hls},canPlayType:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},i=ya.mergeOptions(ya.options,e).hls.overrideNative,n=Io(t)
return!n||Uo.supportsTypeNatively(n)&&!i?"":"maybe"}}
void 0!==ya.MediaSource&&void 0!==ya.URL||(ya.MediaSource=Ns,ya.URL=js),Ns.supportsNativeMediaSources()&&ya.getTech("Html5").registerSourceHandler(Bo,0),ya.HlsHandler=Mo,ya.HlsSourceHandler=Bo,ya.Hls=Uo,ya.use||ya.registerComponent("Hls",Uo),ya.options.hls=ya.options.hls||{},ya.registerPlugin?ya.registerPlugin("reloadSourceOnError",xo):ya.plugin("reloadSourceOnError",xo),e.default=ya},function(t,e,i){"use strict"
var n=function(){this.init=function(){var t={}
this.on=function(e,i){t[e]||(t[e]=[]),t[e]=t[e].concat(i)},this.off=function(e,i){var n
return!!t[e]&&(n=t[e].indexOf(i),t[e]=t[e].slice(),t[e].splice(n,1),n>-1)},this.trigger=function(e){var i,n,r,a
if(i=t[e])if(2===arguments.length)for(r=i.length,n=0;n<r;++n)i[n].call(this,arguments[1])
else{for(a=[],n=arguments.length,n=1;n<arguments.length;++n)a.push(arguments[n])
for(r=i.length,n=0;n<r;++n)i[n].apply(this,a)}},this.dispose=function(){t={}}}}
n.prototype.pipe=function(t){return this.on("data",function(e){t.push(e)}),this.on("done",function(e){t.flush(e)}),t},n.prototype.push=function(t){this.trigger("data",t)},n.prototype.flush=function(t){this.trigger("done",t)},t.exports=n},function(t,e){var i
i=function(){return this}()
try{i=i||Function("return this")()||(0,eval)("this")}catch(t){"object"==typeof window&&(i=window)}t.exports=i},function(t,e,i){"use strict"
t.exports={H264_STREAM_TYPE:27,ADTS_STREAM_TYPE:15,METADATA_STREAM_TYPE:21}},function(t,e,i){(function(e){var i
i="undefined"!=typeof window?window:void 0!==e?e:"undefined"!=typeof self?self:{},t.exports=i}).call(this,i(7))},function(t,e,i){"use strict"
var n,r,a,s,o,u=i(35).toUnsigned
n=function(t,e){var i,a,s,o,l,c=[]
if(!e.length)return null
for(i=0;i<t.byteLength;)a=u(t[i]<<24|t[i+1]<<16|t[i+2]<<8|t[i+3]),s=r(t.subarray(i+4,i+8)),o=a>1?i+a:t.byteLength,s===e[0]&&(1===e.length?c.push(t.subarray(i+8,o)):(l=n(t.subarray(i+8,o),e.slice(1))).length&&(c=c.concat(l))),i=o
return c},r=function(t){var e=""
return e+=String.fromCharCode(t[0]),e+=String.fromCharCode(t[1]),(e+=String.fromCharCode(t[2]))+String.fromCharCode(t[3])},a=function(t){return n(t,["moov","trak"]).reduce(function(t,e){var i,r,a,s,o
return(i=n(e,["tkhd"])[0])?(r=i[0],s=u(i[a=0===r?12:20]<<24|i[a+1]<<16|i[a+2]<<8|i[a+3]),(o=n(e,["mdia","mdhd"])[0])?(a=0===(r=o[0])?12:20,t[s]=u(o[a]<<24|o[a+1]<<16|o[a+2]<<8|o[a+3]),t):null):null},{})},s=function(t,e){var i,r,a
return i=n(e,["moof","traf"]),r=[].concat.apply([],i.map(function(e){return n(e,["tfhd"]).map(function(i){var r,a
return r=u(i[4]<<24|i[5]<<16|i[6]<<8|i[7]),a=t[r]||9e4,(n(e,["tfdt"]).map(function(t){var e,i
return e=t[0],i=u(t[4]<<24|t[5]<<16|t[6]<<8|t[7]),1===e&&(i*=Math.pow(2,32),i+=u(t[8]<<24|t[9]<<16|t[10]<<8|t[11])),i})[0]||1/0)/a})})),a=Math.min.apply(null,r),isFinite(a)?a:0},o=function(t){var e=[]
return n(t,["moov","trak"]).forEach(function(t){var i=n(t,["mdia","hdlr"]),a=n(t,["tkhd"])
i.forEach(function(t,i){var n,s,o=r(t.subarray(8,12)),u=a[i]
"vide"===o&&(s=0===(n=new DataView(u.buffer,u.byteOffset,u.byteLength)).getUint8(0)?n.getUint32(12):n.getUint32(20),e.push(s))})}),e},t.exports={findBox:n,parseType:r,timescale:a,startTime:s,videoTrackIds:o}},function(t,e,i){"use strict"
var n,r,a,s,o,u,l,c=i(6),h=i(13),d=i(37),p=i(38),f=i(39),m=i(41),g=i(42).H264Stream,y=i(44),v=i(45),_=i(46),b=["audioobjecttype","channelcount","samplerate","samplingfrequencyindex","samplesize"],T=["width","height","profileIdc","levelIdc","profileCompatibility"]
o=function(t){return t[0]==="I".charCodeAt(0)&&t[1]==="D".charCodeAt(0)&&t[2]==="3".charCodeAt(0)},u=function(t,e){var i
if(t.length!==e.length)return!1
for(i=0;i<t.length;i++)if(t[i]!==e[i])return!1
return!0},l=function(t){var e,i=0
for(e=0;e<t.length;e++)i+=t[e].data.byteLength
return i},(r=function(t,e){var i=[],n=0,a=0,s=0,o=1/0
e=e||{},r.prototype.init.call(this),this.push=function(e){p.collectDtsInfo(t,e),t&&b.forEach(function(i){t[i]=e[i]}),i.push(e)},this.setEarliestDts=function(e){a=e-t.timelineStartInfo.baseMediaDecodeTime},this.setVideoBaseMediaDecodeTime=function(t){o=t},this.setAudioAppendStart=function(t){s=t},this.flush=function(){var r,a,s,o
0!==i.length?(r=this.trimAdtsFramesByEarliestDts_(i),t.baseMediaDecodeTime=p.calculateTrackBaseMediaDecodeTime(t,e.keepOriginalTimestamps),this.prefixWithSilence_(t,r),t.samples=this.generateSampleTable_(r),s=h.mdat(this.concatenateFrameData_(r)),i=[],a=h.moof(n,[t]),o=new Uint8Array(a.byteLength+s.byteLength),n++,o.set(a),o.set(s,a.byteLength),p.clearDtsInfo(t),this.trigger("data",{track:t,boxes:o}),this.trigger("done","AudioSegmentStream")):this.trigger("done","AudioSegmentStream")},this.prefixWithSilence_=function(t,e){var i,n,r,a,u=0,l=0,c=0
if(e.length&&(i=_.audioTsToVideoTs(t.baseMediaDecodeTime,t.samplerate),n=Math.ceil(9e4/(t.samplerate/1024)),s&&o&&(u=i-Math.max(s,o),c=(l=Math.floor(u/n))*n),!(l<1||c>45e3))){for((r=v[t.samplerate])||(r=e[0].data),a=0;a<l;a++)e.splice(a,0,{data:r})
t.baseMediaDecodeTime-=Math.floor(_.videoTsToAudioTs(c,t.samplerate))}},this.trimAdtsFramesByEarliestDts_=function(e){return t.minSegmentDts>=a?e:(t.minSegmentDts=1/0,e.filter(function(e){return e.dts>=a&&(t.minSegmentDts=Math.min(t.minSegmentDts,e.dts),t.minSegmentPts=t.minSegmentDts,!0)}))},this.generateSampleTable_=function(t){var e,i,n=[]
for(e=0;e<t.length;e++)i=t[e],n.push({size:i.data.byteLength,duration:1024})
return n},this.concatenateFrameData_=function(t){var e,i,n=0,r=new Uint8Array(l(t))
for(e=0;e<t.length;e++)i=t[e],r.set(i.data,n),n+=i.data.byteLength
return r}}).prototype=new c,(n=function(t,e){var i,r,a=0,s=[],o=[]
e=e||{},n.prototype.init.call(this),delete t.minPTS,this.gopCache_=[],this.push=function(e){p.collectDtsInfo(t,e),"seq_parameter_set_rbsp"!==e.nalUnitType||i||(i=e.config,t.sps=[e.data],T.forEach(function(e){t[e]=i[e]},this)),"pic_parameter_set_rbsp"!==e.nalUnitType||r||(r=e.data,t.pps=[e.data]),s.push(e)},this.flush=function(){for(var i,n,r,u,l,c;s.length&&"access_unit_delimiter_rbsp"!==s[0].nalUnitType;)s.shift()
if(0===s.length)return this.resetStream_(),void this.trigger("done","VideoSegmentStream")
if(i=d.groupNalsIntoFrames(s),(r=d.groupFramesIntoGops(i))[0][0].keyFrame||((n=this.getGopForFusion_(s[0],t))?(r.unshift(n),r.byteLength+=n.byteLength,r.nalCount+=n.nalCount,r.pts=n.pts,r.dts=n.dts,r.duration+=n.duration):r=d.extendFirstKeyFrame(r)),o.length){var f
if(!(f=e.alignGopsAtEnd?this.alignGopsAtEnd_(r):this.alignGopsAtStart_(r)))return this.gopCache_.unshift({gop:r.pop(),pps:t.pps,sps:t.sps}),this.gopCache_.length=Math.min(6,this.gopCache_.length),s=[],this.resetStream_(),void this.trigger("done","VideoSegmentStream")
p.clearDtsInfo(t),r=f}p.collectDtsInfo(t,r),t.samples=d.generateSampleTable(r),l=h.mdat(d.concatenateNalData(r)),t.baseMediaDecodeTime=p.calculateTrackBaseMediaDecodeTime(t,e.keepOriginalTimestamps),this.trigger("processedGopsInfo",r.map(function(t){return{pts:t.pts,dts:t.dts,byteLength:t.byteLength}})),this.gopCache_.unshift({gop:r.pop(),pps:t.pps,sps:t.sps}),this.gopCache_.length=Math.min(6,this.gopCache_.length),s=[],this.trigger("baseMediaDecodeTime",t.baseMediaDecodeTime),this.trigger("timelineStartInfo",t.timelineStartInfo),u=h.moof(a,[t]),c=new Uint8Array(u.byteLength+l.byteLength),a++,c.set(u),c.set(l,u.byteLength),this.trigger("data",{track:t,boxes:c}),this.resetStream_(),this.trigger("done","VideoSegmentStream")},this.resetStream_=function(){p.clearDtsInfo(t),i=void 0,r=void 0},this.getGopForFusion_=function(e){var i,n,r,a,s,o=1/0
for(s=0;s<this.gopCache_.length;s++)r=(a=this.gopCache_[s]).gop,t.pps&&u(t.pps[0],a.pps[0])&&t.sps&&u(t.sps[0],a.sps[0])&&(r.dts<t.timelineStartInfo.dts||(i=e.dts-r.dts-r.duration)>=-1e4&&i<=45e3&&(!n||o>i)&&(n=a,o=i))
return n?n.gop:null},this.alignGopsAtStart_=function(t){var e,i,n,r,a,s,u,l
for(a=t.byteLength,s=t.nalCount,u=t.duration,e=i=0;e<o.length&&i<t.length&&(n=o[e],r=t[i],n.pts!==r.pts);)r.pts>n.pts?e++:(i++,a-=r.byteLength,s-=r.nalCount,u-=r.duration)
return 0===i?t:i===t.length?null:((l=t.slice(i)).byteLength=a,l.duration=u,l.nalCount=s,l.pts=l[0].pts,l.dts=l[0].dts,l)},this.alignGopsAtEnd_=function(t){var e,i,n,r,a,s,u
for(e=o.length-1,i=t.length-1,a=null,s=!1;e>=0&&i>=0;){if(n=o[e],r=t[i],n.pts===r.pts){s=!0
break}n.pts>r.pts?e--:(e===o.length-1&&(a=i),i--)}if(!s&&null===a)return null
if(0===(u=s?i:a))return t
var l=t.slice(u),c=l.reduce(function(t,e){return t.byteLength+=e.byteLength,t.duration+=e.duration,t.nalCount+=e.nalCount,t},{byteLength:0,duration:0,nalCount:0})
return l.byteLength=c.byteLength,l.duration=c.duration,l.nalCount=c.nalCount,l.pts=l[0].pts,l.dts=l[0].dts,l},this.alignGopsWith=function(t){o=t}}).prototype=new c,(s=function(t,e){this.numberOfTracks=0,this.metadataStream=e,void 0!==t.remux?this.remuxTracks=!!t.remux:this.remuxTracks=!0,this.pendingTracks=[],this.videoTrack=null,this.pendingBoxes=[],this.pendingCaptions=[],this.pendingMetadata=[],this.pendingBytes=0,this.emittedTracks=0,s.prototype.init.call(this),this.push=function(t){return t.text?this.pendingCaptions.push(t):t.frames?this.pendingMetadata.push(t):(this.pendingTracks.push(t.track),this.pendingBoxes.push(t.boxes),this.pendingBytes+=t.boxes.byteLength,"video"===t.track.type&&(this.videoTrack=t.track),void("audio"===t.track.type&&(this.audioTrack=t.track)))}}).prototype=new c,s.prototype.flush=function(t){var e,i,n,r,a=0,s={captions:[],captionStreams:{},metadata:[],info:{}},o=0
if(this.pendingTracks.length<this.numberOfTracks){if("VideoSegmentStream"!==t&&"AudioSegmentStream"!==t)return
if(this.remuxTracks)return
if(0===this.pendingTracks.length)return this.emittedTracks++,void(this.emittedTracks>=this.numberOfTracks&&(this.trigger("done"),this.emittedTracks=0))}for(this.videoTrack?(o=this.videoTrack.timelineStartInfo.pts,T.forEach(function(t){s.info[t]=this.videoTrack[t]},this)):this.audioTrack&&(o=this.audioTrack.timelineStartInfo.pts,b.forEach(function(t){s.info[t]=this.audioTrack[t]},this)),1===this.pendingTracks.length?s.type=this.pendingTracks[0].type:s.type="combined",this.emittedTracks+=this.pendingTracks.length,n=h.initSegment(this.pendingTracks),s.initSegment=new Uint8Array(n.byteLength),s.initSegment.set(n),s.data=new Uint8Array(this.pendingBytes),r=0;r<this.pendingBoxes.length;r++)s.data.set(this.pendingBoxes[r],a),a+=this.pendingBoxes[r].byteLength
for(r=0;r<this.pendingCaptions.length;r++)(e=this.pendingCaptions[r]).startTime=e.startPts-o,e.startTime/=9e4,e.endTime=e.endPts-o,e.endTime/=9e4,s.captionStreams[e.stream]=!0,s.captions.push(e)
for(r=0;r<this.pendingMetadata.length;r++)(i=this.pendingMetadata[r]).cueTime=i.pts-o,i.cueTime/=9e4,s.metadata.push(i)
s.metadata.dispatchType=this.metadataStream.dispatchType,this.pendingTracks.length=0,this.videoTrack=null,this.pendingBoxes.length=0,this.pendingCaptions.length=0,this.pendingBytes=0,this.pendingMetadata.length=0,this.trigger("data",s),this.emittedTracks>=this.numberOfTracks&&(this.trigger("done"),this.emittedTracks=0)},(a=function(t){var e,i,u=this,l=!0
a.prototype.init.call(this),t=t||{},this.baseMediaDecodeTime=t.baseMediaDecodeTime||0,this.transmuxPipeline_={},this.setupAacPipeline=function(){var e={}
this.transmuxPipeline_=e,e.type="aac",e.metadataStream=new f.MetadataStream,e.aacStream=new y,e.audioTimestampRolloverStream=new f.TimestampRolloverStream("audio"),e.timedMetadataTimestampRolloverStream=new f.TimestampRolloverStream("timed-metadata"),e.adtsStream=new m,e.coalesceStream=new s(t,e.metadataStream),e.headOfPipeline=e.aacStream,e.aacStream.pipe(e.audioTimestampRolloverStream).pipe(e.adtsStream),e.aacStream.pipe(e.timedMetadataTimestampRolloverStream).pipe(e.metadataStream).pipe(e.coalesceStream),e.metadataStream.on("timestamp",function(t){e.aacStream.setTimestamp(t.timeStamp)}),e.aacStream.on("data",function(n){"timed-metadata"!==n.type||e.audioSegmentStream||(i=i||{timelineStartInfo:{baseMediaDecodeTime:u.baseMediaDecodeTime},codec:"adts",type:"audio"},e.coalesceStream.numberOfTracks++,e.audioSegmentStream=new r(i,t),e.adtsStream.pipe(e.audioSegmentStream).pipe(e.coalesceStream))}),e.coalesceStream.on("data",this.trigger.bind(this,"data")),e.coalesceStream.on("done",this.trigger.bind(this,"done"))},this.setupTsPipeline=function(){var a={}
this.transmuxPipeline_=a,a.type="ts",a.metadataStream=new f.MetadataStream,a.packetStream=new f.TransportPacketStream,a.parseStream=new f.TransportParseStream,a.elementaryStream=new f.ElementaryStream,a.videoTimestampRolloverStream=new f.TimestampRolloverStream("video"),a.audioTimestampRolloverStream=new f.TimestampRolloverStream("audio"),a.timedMetadataTimestampRolloverStream=new f.TimestampRolloverStream("timed-metadata"),a.adtsStream=new m,a.h264Stream=new g,a.captionStream=new f.CaptionStream,a.coalesceStream=new s(t,a.metadataStream),a.headOfPipeline=a.packetStream,a.packetStream.pipe(a.parseStream).pipe(a.elementaryStream),a.elementaryStream.pipe(a.videoTimestampRolloverStream).pipe(a.h264Stream),a.elementaryStream.pipe(a.audioTimestampRolloverStream).pipe(a.adtsStream),a.elementaryStream.pipe(a.timedMetadataTimestampRolloverStream).pipe(a.metadataStream).pipe(a.coalesceStream),a.h264Stream.pipe(a.captionStream).pipe(a.coalesceStream),a.elementaryStream.on("data",function(s){var o
if("metadata"===s.type){for(o=s.tracks.length;o--;)e||"video"!==s.tracks[o].type?i||"audio"!==s.tracks[o].type||((i=s.tracks[o]).timelineStartInfo.baseMediaDecodeTime=u.baseMediaDecodeTime):(e=s.tracks[o]).timelineStartInfo.baseMediaDecodeTime=u.baseMediaDecodeTime
e&&!a.videoSegmentStream&&(a.coalesceStream.numberOfTracks++,a.videoSegmentStream=new n(e,t),a.videoSegmentStream.on("timelineStartInfo",function(t){i&&(i.timelineStartInfo=t,a.audioSegmentStream.setEarliestDts(t.dts))}),a.videoSegmentStream.on("processedGopsInfo",u.trigger.bind(u,"gopInfo")),a.videoSegmentStream.on("baseMediaDecodeTime",function(t){i&&a.audioSegmentStream.setVideoBaseMediaDecodeTime(t)}),a.h264Stream.pipe(a.videoSegmentStream).pipe(a.coalesceStream)),i&&!a.audioSegmentStream&&(a.coalesceStream.numberOfTracks++,a.audioSegmentStream=new r(i,t),a.adtsStream.pipe(a.audioSegmentStream).pipe(a.coalesceStream))}}),a.coalesceStream.on("data",this.trigger.bind(this,"data")),a.coalesceStream.on("done",this.trigger.bind(this,"done"))},this.setBaseMediaDecodeTime=function(t){var n=this.transmuxPipeline_
this.baseMediaDecodeTime=t,i&&(i.timelineStartInfo.dts=void 0,i.timelineStartInfo.pts=void 0,p.clearDtsInfo(i),i.timelineStartInfo.baseMediaDecodeTime=t,n.audioTimestampRolloverStream&&n.audioTimestampRolloverStream.discontinuity()),e&&(n.videoSegmentStream&&(n.videoSegmentStream.gopCache_=[],n.videoTimestampRolloverStream.discontinuity()),e.timelineStartInfo.dts=void 0,e.timelineStartInfo.pts=void 0,p.clearDtsInfo(e),n.captionStream.reset(),e.timelineStartInfo.baseMediaDecodeTime=t),n.timedMetadataTimestampRolloverStream&&n.timedMetadataTimestampRolloverStream.discontinuity()},this.setAudioAppendStart=function(t){i&&this.transmuxPipeline_.audioSegmentStream.setAudioAppendStart(t)},this.alignGopsWith=function(t){e&&this.transmuxPipeline_.videoSegmentStream&&this.transmuxPipeline_.videoSegmentStream.alignGopsWith(t)},this.push=function(t){if(l){var e=o(t)
e&&"aac"!==this.transmuxPipeline_.type?this.setupAacPipeline():e||"ts"===this.transmuxPipeline_.type||this.setupTsPipeline(),l=!1}this.transmuxPipeline_.headOfPipeline.push(t)},this.flush=function(){l=!0,this.transmuxPipeline_.headOfPipeline.flush()},this.resetCaptions=function(){this.transmuxPipeline_.captionStream&&this.transmuxPipeline_.captionStream.reset()}}).prototype=new c,t.exports={Transmuxer:a,VideoSegmentStream:n,AudioSegmentStream:r,AUDIO_PROPERTIES:b,VIDEO_PROPERTIES:T}},function(t,e,i){!function(e){var i=/^((?:[a-zA-Z0-9+\-.]+:)?)(\/\/[^\/?#]*)?((?:[^\/\?#]*\/)*.*?)??(;.*?)?(\?.*?)?(#.*?)?$/,n=/^([^\/?#]*)(.*)$/,r=/(?:\/|^)\.(?=\/)/g,a=/(?:\/|^)\.\.\/(?!\.\.\/).*?(?=\/)/g,s={buildAbsoluteURL:function(t,e,i){if(i=i||{},t=t.trim(),!(e=e.trim())){if(!i.alwaysNormalize)return t
var r=s.parseURL(t)
if(!r)throw new Error("Error trying to parse base URL.")
return r.path=s.normalizePath(r.path),s.buildURLFromParts(r)}var a=s.parseURL(e)
if(!a)throw new Error("Error trying to parse relative URL.")
if(a.scheme)return i.alwaysNormalize?(a.path=s.normalizePath(a.path),s.buildURLFromParts(a)):e
var o=s.parseURL(t)
if(!o)throw new Error("Error trying to parse base URL.")
if(!o.netLoc&&o.path&&"/"!==o.path[0]){var u=n.exec(o.path)
o.netLoc=u[1],o.path=u[2]}o.netLoc&&!o.path&&(o.path="/")
var l={scheme:o.scheme,netLoc:a.netLoc,path:null,params:a.params,query:a.query,fragment:a.fragment}
if(!a.netLoc&&(l.netLoc=o.netLoc,"/"!==a.path[0]))if(a.path){var c=o.path,h=c.substring(0,c.lastIndexOf("/")+1)+a.path
l.path=s.normalizePath(h)}else l.path=o.path,a.params||(l.params=o.params,a.query||(l.query=o.query))
return null===l.path&&(l.path=i.alwaysNormalize?s.normalizePath(a.path):a.path),s.buildURLFromParts(l)},parseURL:function(t){var e=i.exec(t)
return e?{scheme:e[1]||"",netLoc:e[2]||"",path:e[3]||"",params:e[4]||"",query:e[5]||"",fragment:e[6]||""}:null},normalizePath:function(t){for(t=t.split("").reverse().join("").replace(r,"");t.length!==(t=t.replace(a,"")).length;);return t.split("").reverse().join("")},buildURLFromParts:function(t){return t.scheme+t.netLoc+t.path+t.params+t.query+t.fragment}}
t.exports=s}()},function(t,e,i){"use strict"
var n,r,a,s,o,u,l,c,h,d,p,f,m,g,y,v,_,b,T,S,k,w,C,E,A,L,O,P,x,U,I,D,R,M,B,N,j=Math.pow(2,32)-1
!function(){var t
if(C={avc1:[],avcC:[],btrt:[],dinf:[],dref:[],esds:[],ftyp:[],hdlr:[],mdat:[],mdhd:[],mdia:[],mfhd:[],minf:[],moof:[],moov:[],mp4a:[],mvex:[],mvhd:[],sdtp:[],smhd:[],stbl:[],stco:[],stsc:[],stsd:[],stsz:[],stts:[],styp:[],tfdt:[],tfhd:[],traf:[],trak:[],trun:[],trex:[],tkhd:[],vmhd:[]},"undefined"!=typeof Uint8Array){for(t in C)C.hasOwnProperty(t)&&(C[t]=[t.charCodeAt(0),t.charCodeAt(1),t.charCodeAt(2),t.charCodeAt(3)])
E=new Uint8Array(["i".charCodeAt(0),"s".charCodeAt(0),"o".charCodeAt(0),"m".charCodeAt(0)]),L=new Uint8Array(["a".charCodeAt(0),"v".charCodeAt(0),"c".charCodeAt(0),"1".charCodeAt(0)]),A=new Uint8Array([0,0,0,1]),O=new Uint8Array([0,0,0,0,0,0,0,0,118,105,100,101,0,0,0,0,0,0,0,0,0,0,0,0,86,105,100,101,111,72,97,110,100,108,101,114,0]),P=new Uint8Array([0,0,0,0,0,0,0,0,115,111,117,110,0,0,0,0,0,0,0,0,0,0,0,0,83,111,117,110,100,72,97,110,100,108,101,114,0]),x={video:O,audio:P},D=new Uint8Array([0,0,0,0,0,0,0,1,0,0,0,12,117,114,108,32,0,0,0,1]),I=new Uint8Array([0,0,0,0,0,0,0,0]),R=new Uint8Array([0,0,0,0,0,0,0,0]),M=R,B=new Uint8Array([0,0,0,0,0,0,0,0,0,0,0,0]),N=R,U=new Uint8Array([0,0,0,1,0,0,0,0,0,0,0,0])}}(),n=function(t){var e,i,n=[],r=0
for(e=1;e<arguments.length;e++)n.push(arguments[e])
for(e=n.length;e--;)r+=n[e].byteLength
for(i=new Uint8Array(r+8),new DataView(i.buffer,i.byteOffset,i.byteLength).setUint32(0,i.byteLength),i.set(t,4),e=0,r=8;e<n.length;e++)i.set(n[e],r),r+=n[e].byteLength
return i},r=function(){return n(C.dinf,n(C.dref,D))},a=function(t){return n(C.esds,new Uint8Array([0,0,0,0,3,25,0,0,0,4,17,64,21,0,6,0,0,0,218,192,0,0,218,192,5,2,t.audioobjecttype<<3|t.samplingfrequencyindex>>>1,t.samplingfrequencyindex<<7|t.channelcount<<3,6,1,2]))},s=function(){return n(C.ftyp,E,A,E,L)},v=function(t){return n(C.hdlr,x[t])},o=function(t){return n(C.mdat,t)},y=function(t){var e=new Uint8Array([0,0,0,0,0,0,0,2,0,0,0,3,0,1,95,144,t.duration>>>24&255,t.duration>>>16&255,t.duration>>>8&255,255&t.duration,85,196,0,0])
return t.samplerate&&(e[12]=t.samplerate>>>24&255,e[13]=t.samplerate>>>16&255,e[14]=t.samplerate>>>8&255,e[15]=255&t.samplerate),n(C.mdhd,e)},g=function(t){return n(C.mdia,y(t),v(t.type),l(t))},u=function(t){return n(C.mfhd,new Uint8Array([0,0,0,0,(4278190080&t)>>24,(16711680&t)>>16,(65280&t)>>8,255&t]))},l=function(t){return n(C.minf,"video"===t.type?n(C.vmhd,U):n(C.smhd,I),r(),b(t))},c=function(t,e){for(var i=[],r=e.length;r--;)i[r]=S(e[r])
return n.apply(null,[C.moof,u(t)].concat(i))},h=function(t){for(var e=t.length,i=[];e--;)i[e]=f(t[e])
return n.apply(null,[C.moov,p(4294967295)].concat(i).concat(d(t)))},d=function(t){for(var e=t.length,i=[];e--;)i[e]=k(t[e])
return n.apply(null,[C.mvex].concat(i))},p=function(t){var e=new Uint8Array([0,0,0,0,0,0,0,1,0,0,0,2,0,1,95,144,(4278190080&t)>>24,(16711680&t)>>16,(65280&t)>>8,255&t,0,1,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,64,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,255,255,255,255])
return n(C.mvhd,e)},_=function(t){var e,i,r=t.samples||[],a=new Uint8Array(4+r.length)
for(i=0;i<r.length;i++)e=r[i].flags,a[i+4]=e.dependsOn<<4|e.isDependedOn<<2|e.hasRedundancy
return n(C.sdtp,a)},b=function(t){return n(C.stbl,T(t),n(C.stts,N),n(C.stsc,M),n(C.stsz,B),n(C.stco,R))},function(){var t,e
T=function(i){return n(C.stsd,new Uint8Array([0,0,0,0,0,0,0,1]),"video"===i.type?t(i):e(i))},t=function(t){var e,i=t.sps||[],r=t.pps||[],a=[],s=[]
for(e=0;e<i.length;e++)a.push((65280&i[e].byteLength)>>>8),a.push(255&i[e].byteLength),a=a.concat(Array.prototype.slice.call(i[e]))
for(e=0;e<r.length;e++)s.push((65280&r[e].byteLength)>>>8),s.push(255&r[e].byteLength),s=s.concat(Array.prototype.slice.call(r[e]))
return n(C.avc1,new Uint8Array([0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,(65280&t.width)>>8,255&t.width,(65280&t.height)>>8,255&t.height,0,72,0,0,0,72,0,0,0,0,0,0,0,1,19,118,105,100,101,111,106,115,45,99,111,110,116,114,105,98,45,104,108,115,0,0,0,0,0,0,0,0,0,0,0,0,0,24,17,17]),n(C.avcC,new Uint8Array([1,t.profileIdc,t.profileCompatibility,t.levelIdc,255].concat([i.length]).concat(a).concat([r.length]).concat(s))),n(C.btrt,new Uint8Array([0,28,156,128,0,45,198,192,0,45,198,192])))},e=function(t){return n(C.mp4a,new Uint8Array([0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,(65280&t.channelcount)>>8,255&t.channelcount,(65280&t.samplesize)>>8,255&t.samplesize,0,0,0,0,(65280&t.samplerate)>>8,255&t.samplerate,0,0]),a(t))}}(),m=function(t){var e=new Uint8Array([0,0,0,7,0,0,0,0,0,0,0,0,(4278190080&t.id)>>24,(16711680&t.id)>>16,(65280&t.id)>>8,255&t.id,0,0,0,0,(4278190080&t.duration)>>24,(16711680&t.duration)>>16,(65280&t.duration)>>8,255&t.duration,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,64,0,0,0,(65280&t.width)>>8,255&t.width,0,0,(65280&t.height)>>8,255&t.height,0,0])
return n(C.tkhd,e)},S=function(t){var e,i,r,a,s,o
return e=n(C.tfhd,new Uint8Array([0,0,0,58,(4278190080&t.id)>>24,(16711680&t.id)>>16,(65280&t.id)>>8,255&t.id,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0])),s=Math.floor(t.baseMediaDecodeTime/(j+1)),o=Math.floor(t.baseMediaDecodeTime%(j+1)),i=n(C.tfdt,new Uint8Array([1,0,0,0,s>>>24&255,s>>>16&255,s>>>8&255,255&s,o>>>24&255,o>>>16&255,o>>>8&255,255&o])),"audio"===t.type?(r=w(t,92),n(C.traf,e,i,r)):(a=_(t),r=w(t,a.length+92),n(C.traf,e,i,r,a))},f=function(t){return t.duration=t.duration||4294967295,n(C.trak,m(t),g(t))},k=function(t){var e=new Uint8Array([0,0,0,0,(4278190080&t.id)>>24,(16711680&t.id)>>16,(65280&t.id)>>8,255&t.id,0,0,0,1,0,0,0,0,0,0,0,0,0,1,0,1])
return"video"!==t.type&&(e[e.length-1]=0),n(C.trex,e)},function(){var t,e,i
i=function(t,e){var i=0,n=0,r=0,a=0
return t.length&&(void 0!==t[0].duration&&(i=1),void 0!==t[0].size&&(n=2),void 0!==t[0].flags&&(r=4),void 0!==t[0].compositionTimeOffset&&(a=8)),[0,0,i|n|r|a,1,(4278190080&t.length)>>>24,(16711680&t.length)>>>16,(65280&t.length)>>>8,255&t.length,(4278190080&e)>>>24,(16711680&e)>>>16,(65280&e)>>>8,255&e]},e=function(t,e){var r,a,s,o
for(e+=20+16*(a=t.samples||[]).length,r=i(a,e),o=0;o<a.length;o++)s=a[o],r=r.concat([(4278190080&s.duration)>>>24,(16711680&s.duration)>>>16,(65280&s.duration)>>>8,255&s.duration,(4278190080&s.size)>>>24,(16711680&s.size)>>>16,(65280&s.size)>>>8,255&s.size,s.flags.isLeading<<2|s.flags.dependsOn,s.flags.isDependedOn<<6|s.flags.hasRedundancy<<4|s.flags.paddingValue<<1|s.flags.isNonSyncSample,61440&s.flags.degradationPriority,15&s.flags.degradationPriority,(4278190080&s.compositionTimeOffset)>>>24,(16711680&s.compositionTimeOffset)>>>16,(65280&s.compositionTimeOffset)>>>8,255&s.compositionTimeOffset])
return n(C.trun,new Uint8Array(r))},t=function(t,e){var r,a,s,o
for(e+=20+8*(a=t.samples||[]).length,r=i(a,e),o=0;o<a.length;o++)s=a[o],r=r.concat([(4278190080&s.duration)>>>24,(16711680&s.duration)>>>16,(65280&s.duration)>>>8,255&s.duration,(4278190080&s.size)>>>24,(16711680&s.size)>>>16,(65280&s.size)>>>8,255&s.size])
return n(C.trun,new Uint8Array(r))},w=function(i,n){return"audio"===i.type?t(i,n):e(i,n)}}(),t.exports={ftyp:s,mdat:o,moof:c,moov:h,initSegment:function(t){var e,i=s(),n=h(t)
return(e=new Uint8Array(i.byteLength+n.byteLength)).set(i),e.set(n,i.byteLength),e}}},function(t,e,i){"use strict"
var n=i(6),r=i(15),a=function(){a.prototype.init.call(this),this.captionPackets_=[],this.ccStreams_=[new c(0,0),new c(0,1),new c(1,0),new c(1,1)],this.reset(),this.ccStreams_.forEach(function(t){t.on("data",this.trigger.bind(this,"data")),t.on("done",this.trigger.bind(this,"done"))},this)}
a.prototype=new n,a.prototype.push=function(t){var e,i,n
if("sei_rbsp"===t.nalUnitType&&(e=r.parseSei(t.escapedRBSP)).payloadType===r.USER_DATA_REGISTERED_ITU_T_T35&&(i=r.parseUserData(e)))if(t.dts<this.latestDts_)this.ignoreNextEqualDts_=!0
else{if(t.dts===this.latestDts_&&this.ignoreNextEqualDts_)return this.numSameDts_--,void(this.numSameDts_||(this.ignoreNextEqualDts_=!1))
n=r.parseCaptionPackets(t.pts,i),this.captionPackets_=this.captionPackets_.concat(n),this.latestDts_!==t.dts&&(this.numSameDts_=0),this.numSameDts_++,this.latestDts_=t.dts}},a.prototype.flush=function(){this.captionPackets_.length?(this.captionPackets_.forEach(function(t,e){t.presortIndex=e}),this.captionPackets_.sort(function(t,e){return t.pts===e.pts?t.presortIndex-e.presortIndex:t.pts-e.pts}),this.captionPackets_.forEach(function(t){t.type<2&&this.dispatchCea608Packet(t)},this),this.captionPackets_.length=0,this.ccStreams_.forEach(function(t){t.flush()},this)):this.ccStreams_.forEach(function(t){t.flush()},this)},a.prototype.reset=function(){this.latestDts_=null,this.ignoreNextEqualDts_=!1,this.numSameDts_=0,this.activeCea608Channel_=[null,null],this.ccStreams_.forEach(function(t){t.reset()})},a.prototype.dispatchCea608Packet=function(t){this.setsChannel1Active(t)?this.activeCea608Channel_[t.type]=0:this.setsChannel2Active(t)&&(this.activeCea608Channel_[t.type]=1),null!==this.activeCea608Channel_[t.type]&&this.ccStreams_[(t.type<<1)+this.activeCea608Channel_[t.type]].push(t)},a.prototype.setsChannel1Active=function(t){return 4096==(30720&t.ccData)},a.prototype.setsChannel2Active=function(t){return 6144==(30720&t.ccData)}
var s={42:225,92:233,94:237,95:243,96:250,123:231,124:247,125:209,126:241,127:9608,304:174,305:176,306:189,307:191,308:8482,309:162,310:163,311:9834,312:224,313:160,314:232,315:226,316:234,317:238,318:244,319:251,544:193,545:201,546:211,547:218,548:220,549:252,550:8216,551:161,552:42,553:39,554:8212,555:169,556:8480,557:8226,558:8220,559:8221,560:192,561:194,562:199,563:200,564:202,565:203,566:235,567:206,568:207,569:239,570:212,571:217,572:249,573:219,574:171,575:187,800:195,801:227,802:205,803:204,804:236,805:210,806:242,807:213,808:245,809:123,810:125,811:92,812:94,813:95,814:124,815:126,816:196,817:228,818:214,819:246,820:223,821:165,822:164,823:9474,824:197,825:229,826:216,827:248,828:9484,829:9488,830:9492,831:9496},o=function(t){return null===t?"":(t=s[t]||t,String.fromCharCode(t))},u=[4352,4384,4608,4640,5376,5408,5632,5664,5888,5920,4096,4864,4896,5120,5152],l=function(){for(var t=[],e=15;e--;)t.push("")
return t},c=function(t,e){c.prototype.init.call(this),this.field_=t||0,this.dataChannel_=e||0,this.name_="CC"+(1+(this.field_<<1|this.dataChannel_)),this.setConstants(),this.reset(),this.push=function(t){var e,i,n,r,a
if((e=32639&t.ccData)!==this.lastControlCode_){if(4096==(61440&e)?this.lastControlCode_=e:e!==this.PADDING_&&(this.lastControlCode_=null),n=e>>>8,r=255&e,e!==this.PADDING_)if(e===this.RESUME_CAPTION_LOADING_)this.mode_="popOn"
else if(e===this.END_OF_CAPTION_)this.mode_="popOn",this.clearFormatting(t.pts),this.flushDisplayed(t.pts),i=this.displayed_,this.displayed_=this.nonDisplayed_,this.nonDisplayed_=i,this.startPts_=t.pts
else if(e===this.ROLL_UP_2_ROWS_)this.rollUpRows_=2,this.setRollUp(t.pts)
else if(e===this.ROLL_UP_3_ROWS_)this.rollUpRows_=3,this.setRollUp(t.pts)
else if(e===this.ROLL_UP_4_ROWS_)this.rollUpRows_=4,this.setRollUp(t.pts)
else if(e===this.CARRIAGE_RETURN_)this.clearFormatting(t.pts),this.flushDisplayed(t.pts),this.shiftRowsUp_(),this.startPts_=t.pts
else if(e===this.BACKSPACE_)"popOn"===this.mode_?this.nonDisplayed_[this.row_]=this.nonDisplayed_[this.row_].slice(0,-1):this.displayed_[this.row_]=this.displayed_[this.row_].slice(0,-1)
else if(e===this.ERASE_DISPLAYED_MEMORY_)this.flushDisplayed(t.pts),this.displayed_=l()
else if(e===this.ERASE_NON_DISPLAYED_MEMORY_)this.nonDisplayed_=l()
else if(e===this.RESUME_DIRECT_CAPTIONING_)"paintOn"!==this.mode_&&(this.flushDisplayed(t.pts),this.displayed_=l()),this.mode_="paintOn",this.startPts_=t.pts
else if(this.isSpecialCharacter(n,r))a=o((n=(3&n)<<8)|r),this[this.mode_](t.pts,a),this.column_++
else if(this.isExtCharacter(n,r))"popOn"===this.mode_?this.nonDisplayed_[this.row_]=this.nonDisplayed_[this.row_].slice(0,-1):this.displayed_[this.row_]=this.displayed_[this.row_].slice(0,-1),a=o((n=(3&n)<<8)|r),this[this.mode_](t.pts,a),this.column_++
else if(this.isMidRowCode(n,r))this.clearFormatting(t.pts),this[this.mode_](t.pts," "),this.column_++,14==(14&r)&&this.addFormatting(t.pts,["i"]),1==(1&r)&&this.addFormatting(t.pts,["u"])
else if(this.isOffsetControlCode(n,r))this.column_+=3&r
else if(this.isPAC(n,r)){var s=u.indexOf(7968&e)
"rollUp"===this.mode_&&this.setRollUp(t.pts,s),s!==this.row_&&(this.clearFormatting(t.pts),this.row_=s),1&r&&-1===this.formatting_.indexOf("u")&&this.addFormatting(t.pts,["u"]),16==(16&e)&&(this.column_=4*((14&e)>>1)),this.isColorPAC(r)&&14==(14&r)&&this.addFormatting(t.pts,["i"])}else this.isNormalChar(n)&&(0===r&&(r=null),a=o(n),a+=o(r),this[this.mode_](t.pts,a),this.column_+=a.length)}else this.lastControlCode_=null}}
c.prototype=new n,c.prototype.flushDisplayed=function(t){var e=this.displayed_.map(function(t){return t.trim()}).join("\n").replace(/^\n+|\n+$/g,"")
e.length&&this.trigger("data",{startPts:this.startPts_,endPts:t,text:e,stream:this.name_})},c.prototype.reset=function(){this.mode_="popOn",this.topRow_=0,this.startPts_=0,this.displayed_=l(),this.nonDisplayed_=l(),this.lastControlCode_=null,this.column_=0,this.row_=14,this.rollUpRows_=2,this.formatting_=[]},c.prototype.setConstants=function(){0===this.dataChannel_?(this.BASE_=16,this.EXT_=17,this.CONTROL_=(20|this.field_)<<8,this.OFFSET_=23):1===this.dataChannel_&&(this.BASE_=24,this.EXT_=25,this.CONTROL_=(28|this.field_)<<8,this.OFFSET_=31),this.PADDING_=0,this.RESUME_CAPTION_LOADING_=32|this.CONTROL_,this.END_OF_CAPTION_=47|this.CONTROL_,this.ROLL_UP_2_ROWS_=37|this.CONTROL_,this.ROLL_UP_3_ROWS_=38|this.CONTROL_,this.ROLL_UP_4_ROWS_=39|this.CONTROL_,this.CARRIAGE_RETURN_=45|this.CONTROL_,this.RESUME_DIRECT_CAPTIONING_=41|this.CONTROL_,this.BACKSPACE_=33|this.CONTROL_,this.ERASE_DISPLAYED_MEMORY_=44|this.CONTROL_,this.ERASE_NON_DISPLAYED_MEMORY_=46|this.CONTROL_},c.prototype.isSpecialCharacter=function(t,e){return t===this.EXT_&&e>=48&&e<=63},c.prototype.isExtCharacter=function(t,e){return(t===this.EXT_+1||t===this.EXT_+2)&&e>=32&&e<=63},c.prototype.isMidRowCode=function(t,e){return t===this.EXT_&&e>=32&&e<=47},c.prototype.isOffsetControlCode=function(t,e){return t===this.OFFSET_&&e>=33&&e<=35},c.prototype.isPAC=function(t,e){return t>=this.BASE_&&t<this.BASE_+8&&e>=64&&e<=127},c.prototype.isColorPAC=function(t){return t>=64&&t<=79||t>=96&&t<=127},c.prototype.isNormalChar=function(t){return t>=32&&t<=127},c.prototype.setRollUp=function(t,e){if("rollUp"!==this.mode_&&(this.row_=14,this.mode_="rollUp",this.flushDisplayed(t),this.nonDisplayed_=l(),this.displayed_=l()),void 0!==e&&e!==this.row_)for(var i=0;i<this.rollUpRows_;i++)this.displayed_[e-i]=this.displayed_[this.row_-i],this.displayed_[this.row_-i]=""
void 0===e&&(e=this.row_),this.topRow_=e-this.rollUpRows_+1},c.prototype.addFormatting=function(t,e){this.formatting_=this.formatting_.concat(e)
var i=e.reduce(function(t,e){return t+"<"+e+">"},"")
this[this.mode_](t,i)},c.prototype.clearFormatting=function(t){if(this.formatting_.length){var e=this.formatting_.reverse().reduce(function(t,e){return t+"</"+e+">"},"")
this.formatting_=[],this[this.mode_](t,e)}},c.prototype.popOn=function(t,e){var i=this.nonDisplayed_[this.row_]
i+=e,this.nonDisplayed_[this.row_]=i},c.prototype.rollUp=function(t,e){var i=this.displayed_[this.row_]
i+=e,this.displayed_[this.row_]=i},c.prototype.shiftRowsUp_=function(){var t
for(t=0;t<this.topRow_;t++)this.displayed_[t]=""
for(t=this.row_+1;t<15;t++)this.displayed_[t]=""
for(t=this.topRow_;t<this.row_;t++)this.displayed_[t]=this.displayed_[t+1]
this.displayed_[this.row_]=""},c.prototype.paintOn=function(t,e){var i=this.displayed_[this.row_]
i+=e,this.displayed_[this.row_]=i},t.exports={CaptionStream:a,Cea608Stream:c}},function(t,e,i){"use strict"
t.exports={parseSei:function(t){for(var e=0,i={payloadType:-1,payloadSize:0},n=0,r=0;e<t.byteLength&&128!==t[e];){for(;255===t[e];)n+=255,e++
for(n+=t[e++];255===t[e];)r+=255,e++
if(r+=t[e++],!i.payload&&4===n){i.payloadType=n,i.payloadSize=r,i.payload=t.subarray(e,e+r)
break}e+=r,n=0,r=0}return i},parseUserData:function(t){return 181!==t.payload[0]?null:49!=(t.payload[1]<<8|t.payload[2])?null:"GA94"!==String.fromCharCode(t.payload[3],t.payload[4],t.payload[5],t.payload[6])?null:3!==t.payload[7]?null:t.payload.subarray(8,t.payload.length-1)},parseCaptionPackets:function(t,e){var i,n,r,a,s=[]
if(!(64&e[0]))return s
for(n=31&e[0],i=0;i<n;i++)a={type:3&e[2+(r=3*i)],pts:t},4&e[r+2]&&(a.ccData=e[r+3]<<8|e[r+4],s.push(a))
return s},discardEmulationPreventionBytes:function(t){for(var e,i,n=t.byteLength,r=[],a=1;a<n-2;)0===t[a]&&0===t[a+1]&&3===t[a+2]?(r.push(a+2),a+=2):a++
if(0===r.length)return t
e=n-r.length,i=new Uint8Array(e)
var s=0
for(a=0;a<e;s++,a++)s===r[0]&&(s++,r.shift()),i[a]=t[s]
return i},USER_DATA_REGISTERED_ITU_T_T35:4}},function(t,e,i){"use strict"
var n=i(6),r=function(t,e){var i=1
for(t>e&&(i=-1);Math.abs(e-t)>4294967296;)t+=8589934592*i
return t},a=function(t){var e,i
a.prototype.init.call(this),this.type_=t,this.push=function(t){t.type===this.type_&&(void 0===i&&(i=t.dts),t.dts=r(t.dts,i),t.pts=r(t.pts,i),e=t.dts,this.trigger("data",t))},this.flush=function(){i=e,this.trigger("done")},this.discontinuity=function(){i=void 0,e=void 0}}
a.prototype=new n,t.exports={TimestampRolloverStream:a,handleRollover:r}},,,,function(t,e,i){(function(e){var n,r=void 0!==e?e:"undefined"!=typeof window?window:{},a=i(21)
"undefined"!=typeof document?n=document:(n=r["__GLOBAL_DOCUMENT_CACHE@4"])||(n=r["__GLOBAL_DOCUMENT_CACHE@4"]=a),t.exports=n}).call(this,i(7))},,function(t,e){function i(t){return t.replace(/\n\r?\s*/g,"")}t.exports=function(t){for(var e="",n=0;n<arguments.length;n++)e+=i(t[n])+(arguments[n+1]||"")
return e}},function(t,e,i){"use strict"
var n=i(9),r=i(24),a=i(25),s=i(29)
function o(t,e,i){var n=t
return r(e)?(i=e,"string"==typeof t&&(n={uri:t})):n=s(e,{uri:t}),n.callback=i,n}function u(t,e,i){return l(e=o(t,e,i))}function l(t){if(void 0===t.callback)throw new Error("callback argument missing")
var e=!1,i=function(i,n,r){e||(e=!0,t.callback(i,n,r))}
function n(t){return clearTimeout(c),t instanceof Error||(t=new Error(""+(t||"Unknown XMLHttpRequest Error"))),t.statusCode=0,i(t,y)}function r(){if(!o){var e
clearTimeout(c),e=t.useXDR&&void 0===l.status?200:1223===l.status?204:l.status
var n=y,r=null
return 0!==e?(n={body:function(){var t=void 0
if(t=l.response?l.response:l.responseText||function(t){if("document"===t.responseType)return t.responseXML
var e=t.responseXML&&"parsererror"===t.responseXML.documentElement.nodeName
return""!==t.responseType||e?null:t.responseXML}(l),g)try{t=JSON.parse(t)}catch(t){}return t}(),statusCode:e,method:d,headers:{},url:h,rawRequest:l},l.getAllResponseHeaders&&(n.headers=a(l.getAllResponseHeaders()))):r=new Error("Internal XMLHttpRequest Error"),i(r,n,n.body)}}var s,o,l=t.xhr||null
l||(l=t.cors||t.useXDR?new u.XDomainRequest:new u.XMLHttpRequest)
var c,h=l.url=t.uri||t.url,d=l.method=t.method||"GET",p=t.body||t.data,f=l.headers=t.headers||{},m=!!t.sync,g=!1,y={body:void 0,headers:{},statusCode:0,method:d,url:h,rawRequest:l}
if("json"in t&&!1!==t.json&&(g=!0,f.accept||f.Accept||(f.Accept="application/json"),"GET"!==d&&"HEAD"!==d&&(f["content-type"]||f["Content-Type"]||(f["Content-Type"]="application/json"),p=JSON.stringify(!0===t.json?p:t.json))),l.onreadystatechange=function(){4===l.readyState&&setTimeout(r,0)},l.onload=r,l.onerror=n,l.onprogress=function(){},l.onabort=function(){o=!0},l.ontimeout=n,l.open(d,h,!m,t.username,t.password),m||(l.withCredentials=!!t.withCredentials),!m&&t.timeout>0&&(c=setTimeout(function(){if(!o){o=!0,l.abort("timeout")
var t=new Error("XMLHttpRequest timeout")
t.code="ETIMEDOUT",n(t)}},t.timeout)),l.setRequestHeader)for(s in f)f.hasOwnProperty(s)&&l.setRequestHeader(s,f[s])
else if(t.headers&&!function(t){for(var e in t)if(t.hasOwnProperty(e))return!1
return!0}(t.headers))throw new Error("Headers cannot be set on an XDomainRequest object")
return"responseType"in t&&(l.responseType=t.responseType),"beforeSend"in t&&"function"==typeof t.beforeSend&&t.beforeSend(l),l.send(p||null),l}t.exports=u,u.XMLHttpRequest=n.XMLHttpRequest||function(){},u.XDomainRequest="withCredentials"in new u.XMLHttpRequest?u.XMLHttpRequest:n.XDomainRequest,function(t,e){for(var i=0;i<t.length;i++)e(t[i])}(["get","put","post","patch","head","delete"],function(t){u["delete"===t?"del":t]=function(e,i,n){return(i=o(e,i,n)).method=t.toUpperCase(),l(i)}})},function(t,e){t.exports=function(t){var e=i.call(t)
return"[object Function]"===e||"function"==typeof t&&"[object RegExp]"!==e||"undefined"!=typeof window&&(t===window.setTimeout||t===window.alert||t===window.confirm||t===window.prompt)}
var i=Object.prototype.toString},function(t,e,i){var n=i(26),r=i(27)
t.exports=function(t){if(!t)return{}
var e={}
return r(n(t).split("\n"),function(t){var i=t.indexOf(":"),r=n(t.slice(0,i)).toLowerCase(),a=n(t.slice(i+1))
void 0===e[r]?e[r]=a:function(t){return"[object Array]"===Object.prototype.toString.call(t)}(e[r])?e[r].push(a):e[r]=[e[r],a]}),e}},function(t,e){(e=t.exports=function(t){return t.replace(/^\s*|\s*$/g,"")}).left=function(t){return t.replace(/^\s*/,"")},e.right=function(t){return t.replace(/\s*$/,"")}},function(t,e,i){"use strict"
var n=i(28),r=Object.prototype.toString,a=Object.prototype.hasOwnProperty
t.exports=function(t,e,i){if(!n(e))throw new TypeError("iterator must be a function")
var s
arguments.length>=3&&(s=i),"[object Array]"===r.call(t)?function(t,e,i){for(var n=0,r=t.length;n<r;n++)a.call(t,n)&&(null==i?e(t[n],n,t):e.call(i,t[n],n,t))}(t,e,s):"string"==typeof t?function(t,e,i){for(var n=0,r=t.length;n<r;n++)null==i?e(t.charAt(n),n,t):e.call(i,t.charAt(n),n,t)}(t,e,s):function(t,e,i){for(var n in t)a.call(t,n)&&(null==i?e(t[n],n,t):e.call(i,t[n],n,t))}(t,e,s)}},function(t,e,i){"use strict"
var n=Function.prototype.toString,r=/^\s*class\b/,a=function(t){try{var e=n.call(t)
return r.test(e)}catch(t){return!1}},s=Object.prototype.toString,o="function"==typeof Symbol&&"symbol"==typeof Symbol.toStringTag
t.exports=function(t){if(!t)return!1
if("function"!=typeof t&&"object"!=typeof t)return!1
if("function"==typeof t&&!t.prototype)return!0
if(o)return function(t){try{return!a(t)&&(n.call(t),!0)}catch(t){return!1}}(t)
if(a(t))return!1
var e=s.call(t)
return"[object Function]"===e||"[object GeneratorFunction]"===e}},function(t,e){t.exports=function(){for(var t={},e=0;e<arguments.length;e++){var n=arguments[e]
for(var r in n)i.call(n,r)&&(t[r]=n[r])}return t}
var i=Object.prototype.hasOwnProperty},function(t,e,i){var n=i(9),r=t.exports={WebVTT:i(31),VTTCue:i(32),VTTRegion:i(33)}
n.vttjs=r,n.WebVTT=r.WebVTT
var a=r.VTTCue,s=r.VTTRegion,o=n.VTTCue,u=n.VTTRegion
r.shim=function(){n.VTTCue=a,n.VTTRegion=s},r.restore=function(){n.VTTCue=o,n.VTTRegion=u},n.VTTCue||r.shim()},function(t,e){var i=Object.create||function(){function t(){}return function(e){if(1!==arguments.length)throw new Error("Object.create shim only accepts one parameter.")
return t.prototype=e,new t}}()
function n(t,e){this.name="ParsingError",this.code=t.code,this.message=e||t.message}function r(t){function e(t,e,i,n){return 3600*(0|t)+60*(0|e)+(0|i)+(0|n)/1e3}var i=t.match(/^(\d+):(\d{2})(:\d{2})?\.(\d{3})/)
return i?i[3]?e(i[1],i[2],i[3].replace(":",""),i[4]):i[1]>59?e(i[1],i[2],0,i[4]):e(0,i[1],i[2],i[4]):null}function a(){this.values=i(null)}function s(t,e,i,n){var r=n?t.split(n):[t]
for(var a in r)if("string"==typeof r[a]){var s=r[a].split(i)
2===s.length&&e(s[0],s[1])}}function o(t,e,i){var o=t
function u(){var e=r(t)
if(null===e)throw new n(n.Errors.BadTimeStamp,"Malformed timestamp: "+o)
return t=t.replace(/^[^\sa-zA-Z-]+/,""),e}function l(){t=t.replace(/^\s+/,"")}if(l(),e.startTime=u(),l(),"--\x3e"!==t.substr(0,3))throw new n(n.Errors.BadTimeStamp,"Malformed time stamp (time stamps must be separated by '--\x3e'): "+o)
t=t.substr(3),l(),e.endTime=u(),l(),function(t,e){var n=new a
s(t,function(t,e){switch(t){case"region":for(var r=i.length-1;r>=0;r--)if(i[r].id===e){n.set(t,i[r].region)
break}break
case"vertical":n.alt(t,e,["rl","lr"])
break
case"line":var a=e.split(","),s=a[0]
n.integer(t,s),n.percent(t,s)&&n.set("snapToLines",!1),n.alt(t,s,["auto"]),2===a.length&&n.alt("lineAlign",a[1],["start","middle","end"])
break
case"position":a=e.split(","),n.percent(t,a[0]),2===a.length&&n.alt("positionAlign",a[1],["start","middle","end"])
break
case"size":n.percent(t,e)
break
case"align":n.alt(t,e,["start","middle","end","left","right"])}},/:/,/\s/),e.region=n.get("region",null),e.vertical=n.get("vertical",""),e.line=n.get("line","auto"),e.lineAlign=n.get("lineAlign","start"),e.snapToLines=n.get("snapToLines",!0),e.size=n.get("size",100),e.align=n.get("align","middle"),e.position=n.get("position",{start:0,left:0,middle:50,end:100,right:100},e.align),e.positionAlign=n.get("positionAlign",{start:"start",left:"start",middle:"middle",end:"end",right:"end"},e.align)}(t,e)}n.prototype=i(Error.prototype),n.prototype.constructor=n,n.Errors={BadSignature:{code:0,message:"Malformed WebVTT signature."},BadTimeStamp:{code:1,message:"Malformed time stamp."}},a.prototype={set:function(t,e){this.get(t)||""===e||(this.values[t]=e)},get:function(t,e,i){return i?this.has(t)?this.values[t]:e[i]:this.has(t)?this.values[t]:e},has:function(t){return t in this.values},alt:function(t,e,i){for(var n=0;n<i.length;++n)if(e===i[n]){this.set(t,e)
break}},integer:function(t,e){/^-?\d+$/.test(e)&&this.set(t,parseInt(e,10))},percent:function(t,e){return!!(e.match(/^([\d]{1,3})(\.[\d]*)?%$/)&&(e=parseFloat(e))>=0&&e<=100)&&(this.set(t,e),!0)}}
var u={"&amp;":"&","&lt;":"<","&gt;":">","&lrm;":"‎","&rlm;":"‏","&nbsp;":" "},l={c:"span",i:"i",b:"b",u:"u",ruby:"ruby",rt:"rt",v:"span",lang:"span"},c={v:"title",lang:"lang"},h={rt:"ruby"}
function d(t,e){function i(){if(!e)return null
var t=e.match(/^([^<]*)(<[^>]*>?)?/)
return function(t){return e=e.substr(t.length),t}(t[1]?t[1]:t[2])}function n(t){return u[t]}function a(t){for(;v=t.match(/&(amp|lt|gt|lrm|rlm|nbsp);/);)t=t.replace(v[0],n)
return t}function s(t,e){return!h[e.localName]||h[e.localName]===t.localName}function o(e,i){var n=l[e]
if(!n)return null
var r=t.document.createElement(n)
r.localName=n
var a=c[e]
return a&&i&&(r[a]=i.trim()),r}for(var d,p=t.document.createElement("div"),f=p,m=[];null!==(d=i());)if("<"!==d[0])f.appendChild(t.document.createTextNode(a(d)))
else{if("/"===d[1]){m.length&&m[m.length-1]===d.substr(2).replace(">","")&&(m.pop(),f=f.parentNode)
continue}var g,y=r(d.substr(1,d.length-2))
if(y){g=t.document.createProcessingInstruction("timestamp",y),f.appendChild(g)
continue}var v=d.match(/^<([^.\s\/0-9>]+)(\.[^\s\\>]+)?([^>\\]+)?(\\?)>?$/)
if(!v)continue
if(!(g=o(v[1],v[3])))continue
if(!s(f,g))continue
v[2]&&(g.className=v[2].substr(1).replace("."," ")),m.push(v[1]),f.appendChild(g),f=g}return p}var p=[[1470,1470],[1472,1472],[1475,1475],[1478,1478],[1488,1514],[1520,1524],[1544,1544],[1547,1547],[1549,1549],[1563,1563],[1566,1610],[1645,1647],[1649,1749],[1765,1766],[1774,1775],[1786,1805],[1807,1808],[1810,1839],[1869,1957],[1969,1969],[1984,2026],[2036,2037],[2042,2042],[2048,2069],[2074,2074],[2084,2084],[2088,2088],[2096,2110],[2112,2136],[2142,2142],[2208,2208],[2210,2220],[8207,8207],[64285,64285],[64287,64296],[64298,64310],[64312,64316],[64318,64318],[64320,64321],[64323,64324],[64326,64449],[64467,64829],[64848,64911],[64914,64967],[65008,65020],[65136,65140],[65142,65276],[67584,67589],[67592,67592],[67594,67637],[67639,67640],[67644,67644],[67647,67669],[67671,67679],[67840,67867],[67872,67897],[67903,67903],[67968,68023],[68030,68031],[68096,68096],[68112,68115],[68117,68119],[68121,68147],[68160,68167],[68176,68184],[68192,68223],[68352,68405],[68416,68437],[68440,68466],[68472,68479],[68608,68680],[126464,126467],[126469,126495],[126497,126498],[126500,126500],[126503,126503],[126505,126514],[126516,126519],[126521,126521],[126523,126523],[126530,126530],[126535,126535],[126537,126537],[126539,126539],[126541,126543],[126545,126546],[126548,126548],[126551,126551],[126553,126553],[126555,126555],[126557,126557],[126559,126559],[126561,126562],[126564,126564],[126567,126570],[126572,126578],[126580,126583],[126585,126588],[126590,126590],[126592,126601],[126603,126619],[126625,126627],[126629,126633],[126635,126651],[1114109,1114109]]
function f(t){for(var e=0;e<p.length;e++){var i=p[e]
if(t>=i[0]&&t<=i[1])return!0}return!1}function m(){}function g(t,e,i){m.call(this),this.cue=e,this.cueDiv=d(t,e.text)
var n={color:"rgba(255, 255, 255, 1)",backgroundColor:"rgba(0, 0, 0, 0.8)",position:"relative",left:0,right:0,top:0,bottom:0,display:"inline",writingMode:""===e.vertical?"horizontal-tb":"lr"===e.vertical?"vertical-lr":"vertical-rl",unicodeBidi:"plaintext"}
this.applyStyles(n,this.cueDiv),this.div=t.document.createElement("div"),n={direction:function(t){var e=[],i=""
if(!t||!t.childNodes)return"ltr"
function n(t,e){for(var i=e.childNodes.length-1;i>=0;i--)t.push(e.childNodes[i])}function r(t){if(!t||!t.length)return null
var e=t.pop(),i=e.textContent||e.innerText
if(i){var a=i.match(/^.*(\n|\r)/)
return a?(t.length=0,a[0]):i}return"ruby"===e.tagName?r(t):e.childNodes?(n(t,e),r(t)):void 0}for(n(e,t);i=r(e);)for(var a=0;a<i.length;a++)if(f(i.charCodeAt(a)))return"rtl"
return"ltr"}(this.cueDiv),writingMode:""===e.vertical?"horizontal-tb":"lr"===e.vertical?"vertical-lr":"vertical-rl",unicodeBidi:"plaintext",textAlign:"middle"===e.align?"center":e.align,font:i.font,whiteSpace:"pre-line",position:"absolute"},this.applyStyles(n),this.div.appendChild(this.cueDiv)
var r=0
switch(e.positionAlign){case"start":r=e.position
break
case"middle":r=e.position-e.size/2
break
case"end":r=e.position-e.size}""===e.vertical?this.applyStyles({left:this.formatStyle(r,"%"),width:this.formatStyle(e.size,"%")}):this.applyStyles({top:this.formatStyle(r,"%"),height:this.formatStyle(e.size,"%")}),this.move=function(t){this.applyStyles({top:this.formatStyle(t.top,"px"),bottom:this.formatStyle(t.bottom,"px"),left:this.formatStyle(t.left,"px"),right:this.formatStyle(t.right,"px"),height:this.formatStyle(t.height,"px"),width:this.formatStyle(t.width,"px")})}}function y(t){var e,i,n,r
if(t.div){i=t.div.offsetHeight,n=t.div.offsetWidth,r=t.div.offsetTop
var a=(a=t.div.childNodes)&&(a=a[0])&&a.getClientRects&&a.getClientRects()
t=t.div.getBoundingClientRect(),e=a?Math.max(a[0]&&a[0].height||0,t.height/a.length):0}this.left=t.left,this.right=t.right,this.top=t.top||r,this.height=t.height||i,this.bottom=t.bottom||r+(t.height||i),this.width=t.width||n,this.lineHeight=void 0!==e?e:t.lineHeight}function v(t,e,i,n){var r=new y(e),a=e.cue,s=function(t){if("number"==typeof t.line&&(t.snapToLines||t.line>=0&&t.line<=100))return t.line
if(!t.track||!t.track.textTrackList||!t.track.textTrackList.mediaElement)return-1
for(var e=t.track,i=e.textTrackList,n=0,r=0;r<i.length&&i[r]!==e;r++)"showing"===i[r].mode&&n++
return-1*++n}(a),o=[]
if(a.snapToLines){var u
switch(a.vertical){case"":o=["+y","-y"],u="height"
break
case"rl":o=["+x","-x"],u="width"
break
case"lr":o=["-x","+x"],u="width"}var l=r.lineHeight,c=l*Math.round(s),h=i[u]+l,d=o[0]
Math.abs(c)>h&&(c=c<0?-1:1,c*=Math.ceil(h/l)*l),s<0&&(c+=""===a.vertical?i.height:i.width,o=o.reverse()),r.move(d,c)}else{var p=r.lineHeight/i.height*100
switch(a.lineAlign){case"middle":s-=p/2
break
case"end":s-=p}switch(a.vertical){case"":e.applyStyles({top:e.formatStyle(s,"%")})
break
case"rl":e.applyStyles({left:e.formatStyle(s,"%")})
break
case"lr":e.applyStyles({right:e.formatStyle(s,"%")})}o=["+y","-x","+x","-y"],r=new y(e)}var f=function(t,e){for(var r,a=new y(t),s=1,o=0;o<e.length;o++){for(;t.overlapsOppositeAxis(i,e[o])||t.within(i)&&t.overlapsAny(n);)t.move(e[o])
if(t.within(i))return t
var u=t.intersectPercentage(i)
s>u&&(r=new y(t),s=u),t=new y(a)}return r||a}(r,o)
e.move(f.toCSSCompatValues(i))}function _(){}m.prototype.applyStyles=function(t,e){for(var i in e=e||this.div,t)t.hasOwnProperty(i)&&(e.style[i]=t[i])},m.prototype.formatStyle=function(t,e){return 0===t?0:t+e},g.prototype=i(m.prototype),g.prototype.constructor=g,y.prototype.move=function(t,e){switch(e=void 0!==e?e:this.lineHeight,t){case"+x":this.left+=e,this.right+=e
break
case"-x":this.left-=e,this.right-=e
break
case"+y":this.top+=e,this.bottom+=e
break
case"-y":this.top-=e,this.bottom-=e}},y.prototype.overlaps=function(t){return this.left<t.right&&this.right>t.left&&this.top<t.bottom&&this.bottom>t.top},y.prototype.overlapsAny=function(t){for(var e=0;e<t.length;e++)if(this.overlaps(t[e]))return!0
return!1},y.prototype.within=function(t){return this.top>=t.top&&this.bottom<=t.bottom&&this.left>=t.left&&this.right<=t.right},y.prototype.overlapsOppositeAxis=function(t,e){switch(e){case"+x":return this.left<t.left
case"-x":return this.right>t.right
case"+y":return this.top<t.top
case"-y":return this.bottom>t.bottom}},y.prototype.intersectPercentage=function(t){return Math.max(0,Math.min(this.right,t.right)-Math.max(this.left,t.left))*Math.max(0,Math.min(this.bottom,t.bottom)-Math.max(this.top,t.top))/(this.height*this.width)},y.prototype.toCSSCompatValues=function(t){return{top:this.top-t.top,bottom:t.bottom-this.bottom,left:this.left-t.left,right:t.right-this.right,height:this.height,width:this.width}},y.getSimpleBoxPosition=function(t){var e=t.div?t.div.offsetHeight:t.tagName?t.offsetHeight:0,i=t.div?t.div.offsetWidth:t.tagName?t.offsetWidth:0,n=t.div?t.div.offsetTop:t.tagName?t.offsetTop:0
return{left:(t=t.div?t.div.getBoundingClientRect():t.tagName?t.getBoundingClientRect():t).left,right:t.right,top:t.top||n,height:t.height||e,bottom:t.bottom||n+(t.height||e),width:t.width||i}},_.StringDecoder=function(){return{decode:function(t){if(!t)return""
if("string"!=typeof t)throw new Error("Error - expected string data.")
return decodeURIComponent(encodeURIComponent(t))}}},_.convertCueToDOMTree=function(t,e){return t&&e?d(t,e):null},_.processCues=function(t,e,i){if(!t||!e||!i)return null
for(;i.firstChild;)i.removeChild(i.firstChild)
var n=t.document.createElement("div")
if(n.style.position="absolute",n.style.left="0",n.style.right="0",n.style.top="0",n.style.bottom="0",n.style.margin="1.5%",i.appendChild(n),function(t){for(var e=0;e<t.length;e++)if(t[e].hasBeenReset||!t[e].displayState)return!0
return!1}(e)){var r=[],a=y.getSimpleBoxPosition(n),s={font:Math.round(.05*a.height*100)/100+"px sans-serif"}
!function(){for(var i,o,u=0;u<e.length;u++)o=e[u],i=new g(t,o,s),n.appendChild(i.div),v(0,i,a,r),o.displayState=i.div,r.push(y.getSimpleBoxPosition(i))}()}else for(var o=0;o<e.length;o++)n.appendChild(e[o].displayState)},_.Parser=function(t,e,i){i||(i=e,e={}),e||(e={}),this.window=t,this.vttjs=e,this.state="INITIAL",this.buffer="",this.decoder=i||new TextDecoder("utf8"),this.regionList=[]},_.Parser.prototype={reportOrThrowError:function(t){if(!(t instanceof n))throw t
this.onparsingerror&&this.onparsingerror(t)},parse:function(t){var e=this
function i(){for(var t=e.buffer,i=0;i<t.length&&"\r"!==t[i]&&"\n"!==t[i];)++i
var n=t.substr(0,i)
return"\r"===t[i]&&++i,"\n"===t[i]&&++i,e.buffer=t.substr(i),n}function u(t){t.match(/X-TIMESTAMP-MAP/)?s(t,function(t,i){switch(t){case"X-TIMESTAMP-MAP":!function(t){var i=new a
s(t,function(t,e){switch(t){case"MPEGT":i.integer(t+"S",e)
break
case"LOCA":i.set(t+"L",r(e))}},/[^\d]:/,/,/),e.ontimestampmap&&e.ontimestampmap({MPEGTS:i.get("MPEGTS"),LOCAL:i.get("LOCAL")})}(i)}},/=/):s(t,function(t,i){switch(t){case"Region":!function(t){var i=new a
if(s(t,function(t,e){switch(t){case"id":i.set(t,e)
break
case"width":i.percent(t,e)
break
case"lines":i.integer(t,e)
break
case"regionanchor":case"viewportanchor":var n=e.split(",")
if(2!==n.length)break
var r=new a
if(r.percent("x",n[0]),r.percent("y",n[1]),!r.has("x")||!r.has("y"))break
i.set(t+"X",r.get("x")),i.set(t+"Y",r.get("y"))
break
case"scroll":i.alt(t,e,["up"])}},/=/,/\s/),i.has("id")){var n=new(e.vttjs.VTTRegion||e.window.VTTRegion)
n.width=i.get("width",100),n.lines=i.get("lines",3),n.regionAnchorX=i.get("regionanchorX",0),n.regionAnchorY=i.get("regionanchorY",100),n.viewportAnchorX=i.get("viewportanchorX",0),n.viewportAnchorY=i.get("viewportanchorY",100),n.scroll=i.get("scroll",""),e.onregion&&e.onregion(n),e.regionList.push({id:i.get("id"),region:n})}}(i)}},/:/)}t&&(e.buffer+=e.decoder.decode(t,{stream:!0}))
try{var l
if("INITIAL"===e.state){if(!/\r\n|\n/.test(e.buffer))return this
var c=(l=i()).match(/^WEBVTT([ \t].*)?$/)
if(!c||!c[0])throw new n(n.Errors.BadSignature)
e.state="HEADER"}for(var h=!1;e.buffer;){if(!/\r\n|\n/.test(e.buffer))return this
switch(h?h=!1:l=i(),e.state){case"HEADER":/:/.test(l)?u(l):l||(e.state="ID")
continue
case"NOTE":l||(e.state="ID")
continue
case"ID":if(/^NOTE($|[ \t])/.test(l)){e.state="NOTE"
break}if(!l)continue
if(e.cue=new(e.vttjs.VTTCue||e.window.VTTCue)(0,0,""),e.state="CUE",-1===l.indexOf("--\x3e")){e.cue.id=l
continue}case"CUE":try{o(l,e.cue,e.regionList)}catch(t){e.reportOrThrowError(t),e.cue=null,e.state="BADCUE"
continue}e.state="CUETEXT"
continue
case"CUETEXT":var d=-1!==l.indexOf("--\x3e")
if(!l||d&&(h=!0)){e.oncue&&e.oncue(e.cue),e.cue=null,e.state="ID"
continue}e.cue.text&&(e.cue.text+="\n"),e.cue.text+=l
continue
case"BADCUE":l||(e.state="ID")
continue}}}catch(t){e.reportOrThrowError(t),"CUETEXT"===e.state&&e.cue&&e.oncue&&e.oncue(e.cue),e.cue=null,e.state="INITIAL"===e.state?"BADWEBVTT":"BADCUE"}return this},flush:function(){try{if(this.buffer+=this.decoder.decode(),(this.cue||"HEADER"===this.state)&&(this.buffer+="\n\n",this.parse()),"INITIAL"===this.state)throw new n(n.Errors.BadSignature)}catch(t){this.reportOrThrowError(t)}return this.onflush&&this.onflush(),this}},t.exports=_},function(t,e){var i="auto",n={"":1,lr:1,rl:1},r={start:1,middle:1,end:1,left:1,right:1}
function a(t){return"string"==typeof t&&!!r[t.toLowerCase()]&&t.toLowerCase()}function s(t,e,r){this.hasBeenReset=!1
var s="",o=!1,u=t,l=e,c=r,h=null,d="",p=!0,f="auto",m="start",g=50,y="middle",v=50,_="middle"
Object.defineProperties(this,{id:{enumerable:!0,get:function(){return s},set:function(t){s=""+t}},pauseOnExit:{enumerable:!0,get:function(){return o},set:function(t){o=!!t}},startTime:{enumerable:!0,get:function(){return u},set:function(t){if("number"!=typeof t)throw new TypeError("Start time must be set to a number.")
u=t,this.hasBeenReset=!0}},endTime:{enumerable:!0,get:function(){return l},set:function(t){if("number"!=typeof t)throw new TypeError("End time must be set to a number.")
l=t,this.hasBeenReset=!0}},text:{enumerable:!0,get:function(){return c},set:function(t){c=""+t,this.hasBeenReset=!0}},region:{enumerable:!0,get:function(){return h},set:function(t){h=t,this.hasBeenReset=!0}},vertical:{enumerable:!0,get:function(){return d},set:function(t){var e=function(t){return"string"==typeof t&&!!n[t.toLowerCase()]&&t.toLowerCase()}(t)
if(!1===e)throw new SyntaxError("An invalid or illegal string was specified.")
d=e,this.hasBeenReset=!0}},snapToLines:{enumerable:!0,get:function(){return p},set:function(t){p=!!t,this.hasBeenReset=!0}},line:{enumerable:!0,get:function(){return f},set:function(t){if("number"!=typeof t&&t!==i)throw new SyntaxError("An invalid number or illegal string was specified.")
f=t,this.hasBeenReset=!0}},lineAlign:{enumerable:!0,get:function(){return m},set:function(t){var e=a(t)
if(!e)throw new SyntaxError("An invalid or illegal string was specified.")
m=e,this.hasBeenReset=!0}},position:{enumerable:!0,get:function(){return g},set:function(t){if(t<0||t>100)throw new Error("Position must be between 0 and 100.")
g=t,this.hasBeenReset=!0}},positionAlign:{enumerable:!0,get:function(){return y},set:function(t){var e=a(t)
if(!e)throw new SyntaxError("An invalid or illegal string was specified.")
y=e,this.hasBeenReset=!0}},size:{enumerable:!0,get:function(){return v},set:function(t){if(t<0||t>100)throw new Error("Size must be between 0 and 100.")
v=t,this.hasBeenReset=!0}},align:{enumerable:!0,get:function(){return _},set:function(t){var e=a(t)
if(!e)throw new SyntaxError("An invalid or illegal string was specified.")
_=e,this.hasBeenReset=!0}}}),this.displayState=void 0}s.prototype.getCueAsHTML=function(){return WebVTT.convertCueToDOMTree(window,this.text)},t.exports=s},function(t,e){var i={"":!0,up:!0}
function n(t){return"number"==typeof t&&t>=0&&t<=100}t.exports=function(){var t=100,e=3,r=0,a=100,s=0,o=100,u=""
Object.defineProperties(this,{width:{enumerable:!0,get:function(){return t},set:function(e){if(!n(e))throw new Error("Width must be between 0 and 100.")
t=e}},lines:{enumerable:!0,get:function(){return e},set:function(t){if("number"!=typeof t)throw new TypeError("Lines must be set to a number.")
e=t}},regionAnchorY:{enumerable:!0,get:function(){return a},set:function(t){if(!n(t))throw new Error("RegionAnchorX must be between 0 and 100.")
a=t}},regionAnchorX:{enumerable:!0,get:function(){return r},set:function(t){if(!n(t))throw new Error("RegionAnchorY must be between 0 and 100.")
r=t}},viewportAnchorY:{enumerable:!0,get:function(){return o},set:function(t){if(!n(t))throw new Error("ViewportAnchorY must be between 0 and 100.")
o=t}},viewportAnchorX:{enumerable:!0,get:function(){return s},set:function(t){if(!n(t))throw new Error("ViewportAnchorX must be between 0 and 100.")
s=t}},scroll:{enumerable:!0,get:function(){return u},set:function(t){var e=function(t){return"string"==typeof t&&!!i[t.toLowerCase()]&&t.toLowerCase()}(t)
if(!1===e)throw new SyntaxError("An invalid or illegal string was specified.")
u=e}}})}},function(t,e){t.exports=function(t,e){var i,n=null
try{i=JSON.parse(t,e)}catch(t){n=t}return[n,i]}},function(t,e){t.exports={toUnsigned:function(t){return t>>>0}}},function(t,e,i){t.exports={generator:i(13),probe:i(10),Transmuxer:i(11).Transmuxer,AudioSegmentStream:i(11).AudioSegmentStream,VideoSegmentStream:i(11).VideoSegmentStream,CaptionParser:i(47)}},function(t,e){var i=function(t,e){var i={size:0,flags:{isLeading:0,dependsOn:1,isDependedOn:0,hasRedundancy:0,degradationPriority:0,isNonSyncSample:1}}
return i.dataOffset=e,i.compositionTimeOffset=t.pts-t.dts,i.duration=t.duration,i.size=4*t.length,i.size+=t.byteLength,t.keyFrame&&(i.flags.dependsOn=2,i.flags.isNonSyncSample=0),i}
t.exports={groupNalsIntoFrames:function(t){var e,i,n=[],r=[]
for(n.byteLength=0,e=0;e<t.length;e++)"access_unit_delimiter_rbsp"===(i=t[e]).nalUnitType?(n.length&&(n.duration=i.dts-n.dts,r.push(n)),(n=[i]).byteLength=i.data.byteLength,n.pts=i.pts,n.dts=i.dts):("slice_layer_without_partitioning_rbsp_idr"===i.nalUnitType&&(n.keyFrame=!0),n.duration=i.dts-n.dts,n.byteLength+=i.data.byteLength,n.push(i))
return r.length&&(!n.duration||n.duration<=0)&&(n.duration=r[r.length-1].duration),r.push(n),r},groupFramesIntoGops:function(t){var e,i,n=[],r=[]
for(n.byteLength=0,n.nalCount=0,n.duration=0,n.pts=t[0].pts,n.dts=t[0].dts,r.byteLength=0,r.nalCount=0,r.duration=0,r.pts=t[0].pts,r.dts=t[0].dts,e=0;e<t.length;e++)(i=t[e]).keyFrame?(n.length&&(r.push(n),r.byteLength+=n.byteLength,r.nalCount+=n.nalCount,r.duration+=n.duration),(n=[i]).nalCount=i.length,n.byteLength=i.byteLength,n.pts=i.pts,n.dts=i.dts,n.duration=i.duration):(n.duration+=i.duration,n.nalCount+=i.length,n.byteLength+=i.byteLength,n.push(i))
return r.length&&n.duration<=0&&(n.duration=r[r.length-1].duration),r.byteLength+=n.byteLength,r.nalCount+=n.nalCount,r.duration+=n.duration,r.push(n),r},extendFirstKeyFrame:function(t){var e
return!t[0][0].keyFrame&&t.length>1&&(e=t.shift(),t.byteLength-=e.byteLength,t.nalCount-=e.nalCount,t[0][0].dts=e.dts,t[0][0].pts=e.pts,t[0][0].duration+=e.duration),t},generateSampleTable:function(t,e){var n,r,a,s,o,u=e||0,l=[]
for(n=0;n<t.length;n++)for(s=t[n],r=0;r<s.length;r++)o=s[r],u+=(a=i(o,u)).size,l.push(a)
return l},concatenateNalData:function(t){var e,i,n,r,a,s,o=0,u=t.byteLength,l=t.nalCount,c=new Uint8Array(u+4*l),h=new DataView(c.buffer)
for(e=0;e<t.length;e++)for(r=t[e],i=0;i<r.length;i++)for(a=r[i],n=0;n<a.length;n++)s=a[n],h.setUint32(o,s.data.byteLength),o+=4,c.set(s.data,o),o+=s.data.byteLength
return c}}},function(t,e){t.exports={clearDtsInfo:function(t){delete t.minSegmentDts,delete t.maxSegmentDts,delete t.minSegmentPts,delete t.maxSegmentPts},calculateTrackBaseMediaDecodeTime:function(t,e){var i,n=t.minSegmentDts
return e||(n-=t.timelineStartInfo.dts),i=t.timelineStartInfo.baseMediaDecodeTime,i+=n,i=Math.max(0,i),"audio"===t.type&&(i*=t.samplerate/9e4,i=Math.floor(i)),i},collectDtsInfo:function(t,e){"number"==typeof e.pts&&(void 0===t.timelineStartInfo.pts&&(t.timelineStartInfo.pts=e.pts),void 0===t.minSegmentPts?t.minSegmentPts=e.pts:t.minSegmentPts=Math.min(t.minSegmentPts,e.pts),void 0===t.maxSegmentPts?t.maxSegmentPts=e.pts:t.maxSegmentPts=Math.max(t.maxSegmentPts,e.pts)),"number"==typeof e.dts&&(void 0===t.timelineStartInfo.dts&&(t.timelineStartInfo.dts=e.dts),void 0===t.minSegmentDts?t.minSegmentDts=e.dts:t.minSegmentDts=Math.min(t.minSegmentDts,e.dts),void 0===t.maxSegmentDts?t.maxSegmentDts=e.dts:t.maxSegmentDts=Math.max(t.maxSegmentDts,e.dts))}}},function(t,e,i){"use strict"
var n,r,a,s=i(6),o=i(14),u=i(8),l=i(16).TimestampRolloverStream,c=i(8);(n=function(){var t=new Uint8Array(188),e=0
n.prototype.init.call(this),this.push=function(i){var n,r=0,a=188
for(e?((n=new Uint8Array(i.byteLength+e)).set(t.subarray(0,e)),n.set(i,e),e=0):n=i;a<n.byteLength;)71!==n[r]||71!==n[a]?(r++,a++):(this.trigger("data",n.subarray(r,a)),r+=188,a+=188)
r<n.byteLength&&(t.set(n.subarray(r),0),e=n.byteLength-r)},this.flush=function(){188===e&&71===t[0]&&(this.trigger("data",t),e=0),this.trigger("done")}}).prototype=new s,(r=function(){var t,e,i,n
r.prototype.init.call(this),n=this,this.packetsWaitingForPmt=[],this.programMapTable=void 0,t=function(t,n){var r=0
n.payloadUnitStartIndicator&&(r+=t[r]+1),"pat"===n.type?e(t.subarray(r),n):i(t.subarray(r),n)},e=function(t,e){e.section_number=t[7],e.last_section_number=t[8],n.pmtPid=(31&t[10])<<8|t[11],e.pmtPid=n.pmtPid},i=function(t,e){var i,r
if(1&t[5]){for(n.programMapTable={video:null,audio:null,"timed-metadata":{}},i=3+((15&t[1])<<8|t[2])-4,r=12+((15&t[10])<<8|t[11]);r<i;){var a=t[r],s=(31&t[r+1])<<8|t[r+2]
a===u.H264_STREAM_TYPE&&null===n.programMapTable.video?n.programMapTable.video=s:a===u.ADTS_STREAM_TYPE&&null===n.programMapTable.audio?n.programMapTable.audio=s:a===u.METADATA_STREAM_TYPE&&(n.programMapTable["timed-metadata"][s]=a),r+=5+((15&t[r+3])<<8|t[r+4])}e.programMapTable=n.programMapTable}},this.push=function(e){var i={},n=4
if(i.payloadUnitStartIndicator=!!(64&e[1]),i.pid=31&e[1],i.pid<<=8,i.pid|=e[2],(48&e[3])>>>4>1&&(n+=e[n]+1),0===i.pid)i.type="pat",t(e.subarray(n),i),this.trigger("data",i)
else if(i.pid===this.pmtPid)for(i.type="pmt",t(e.subarray(n),i),this.trigger("data",i);this.packetsWaitingForPmt.length;)this.processPes_.apply(this,this.packetsWaitingForPmt.shift())
else void 0===this.programMapTable?this.packetsWaitingForPmt.push([e,n,i]):this.processPes_(e,n,i)},this.processPes_=function(t,e,i){i.pid===this.programMapTable.video?i.streamType=u.H264_STREAM_TYPE:i.pid===this.programMapTable.audio?i.streamType=u.ADTS_STREAM_TYPE:i.streamType=this.programMapTable["timed-metadata"][i.pid],i.type="pes",i.data=t.subarray(e),this.trigger("data",i)}}).prototype=new s,r.STREAM_TYPES={h264:27,adts:15},(a=function(){var t=this,e={data:[],size:0},i={data:[],size:0},n={data:[],size:0},r=function(e,i,n){var r,a,s=new Uint8Array(e.size),o={type:i},u=0,l=0
if(e.data.length&&!(e.size<9)){for(o.trackId=e.data[0].pid,u=0;u<e.data.length;u++)a=e.data[u],s.set(a.data,l),l+=a.data.byteLength
!function(t,e){var i
e.packetLength=6+(t[4]<<8|t[5]),e.dataAlignmentIndicator=0!=(4&t[6]),192&(i=t[7])&&(e.pts=(14&t[9])<<27|(255&t[10])<<20|(254&t[11])<<12|(255&t[12])<<5|(254&t[13])>>>3,e.pts*=4,e.pts+=(6&t[13])>>>1,e.dts=e.pts,64&i&&(e.dts=(14&t[14])<<27|(255&t[15])<<20|(254&t[16])<<12|(255&t[17])<<5|(254&t[18])>>>3,e.dts*=4,e.dts+=(6&t[18])>>>1)),e.data=t.subarray(9+t[8])}(s,o),r="video"===i||o.packetLength<=e.size,(n||r)&&(e.size=0,e.data.length=0),r&&t.trigger("data",o)}}
a.prototype.init.call(this),this.push=function(a){({pat:function(){},pes:function(){var t,s
switch(a.streamType){case u.H264_STREAM_TYPE:case c.H264_STREAM_TYPE:t=e,s="video"
break
case u.ADTS_STREAM_TYPE:t=i,s="audio"
break
case u.METADATA_STREAM_TYPE:t=n,s="timed-metadata"
break
default:return}a.payloadUnitStartIndicator&&r(t,s,!0),t.data.push(a),t.size+=a.data.byteLength},pmt:function(){var e={type:"metadata",tracks:[]},i=a.programMapTable
null!==i.video&&e.tracks.push({timelineStartInfo:{baseMediaDecodeTime:0},id:+i.video,codec:"avc",type:"video"}),null!==i.audio&&e.tracks.push({timelineStartInfo:{baseMediaDecodeTime:0},id:+i.audio,codec:"adts",type:"audio"}),t.trigger("data",e)}})[a.type]()},this.flush=function(){r(e,"video"),r(i,"audio"),r(n,"timed-metadata"),this.trigger("done")}}).prototype=new s
var h={PAT_PID:0,MP2T_PACKET_LENGTH:188,TransportPacketStream:n,TransportParseStream:r,ElementaryStream:a,TimestampRolloverStream:l,CaptionStream:o.CaptionStream,Cea608Stream:o.Cea608Stream,MetadataStream:i(40)}
for(var d in u)u.hasOwnProperty(d)&&(h[d]=u[d])
t.exports=h},function(t,e,i){"use strict"
var n,r=i(6),a=i(8),s=function(t,e,i){var n,r=""
for(n=e;n<i;n++)r+="%"+("00"+t[n].toString(16)).slice(-2)
return r},o=function(t,e,i){return decodeURIComponent(s(t,e,i))},u=function(t,e,i){return unescape(s(t,e,i))},l=function(t){return t[0]<<21|t[1]<<14|t[2]<<7|t[3]},c={TXXX:function(t){var e
if(3===t.data[0]){for(e=1;e<t.data.length;e++)if(0===t.data[e]){t.description=o(t.data,1,e),t.value=o(t.data,e+1,t.data.length).replace(/\0*$/,"")
break}t.data=t.value}},WXXX:function(t){var e
if(3===t.data[0])for(e=1;e<t.data.length;e++)if(0===t.data[e]){t.description=o(t.data,1,e),t.url=o(t.data,e+1,t.data.length)
break}},PRIV:function(t){var e
for(e=0;e<t.data.length;e++)if(0===t.data[e]){t.owner=u(t.data,0,e)
break}t.privateData=t.data.subarray(e+1),t.data=t.privateData}};(n=function(t){var e,i={debug:!(!t||!t.debug),descriptor:t&&t.descriptor},r=0,s=[],o=0
if(n.prototype.init.call(this),this.dispatchType=a.METADATA_STREAM_TYPE.toString(16),i.descriptor)for(e=0;e<i.descriptor.length;e++)this.dispatchType+=("00"+i.descriptor[e].toString(16)).slice(-2)
this.push=function(t){var e,n,a,u,h
if("timed-metadata"===t.type)if(t.dataAlignmentIndicator&&(o=0,s.length=0),0===s.length&&(t.data.length<10||t.data[0]!=="I".charCodeAt(0)||t.data[1]!=="D".charCodeAt(0)||t.data[2]!=="3".charCodeAt(0)))i.debug&&console.log("Skipping unrecognized metadata packet")
else if(s.push(t),o+=t.data.byteLength,1===s.length&&(r=l(t.data.subarray(6,10)),r+=10),!(o<r)){for(e={data:new Uint8Array(r),frames:[],pts:s[0].pts,dts:s[0].dts},h=0;h<r;)e.data.set(s[0].data.subarray(0,r-h),h),h+=s[0].data.byteLength,o-=s[0].data.byteLength,s.shift()
n=10,64&e.data[5]&&(n+=4,n+=l(e.data.subarray(10,14)),r-=l(e.data.subarray(16,20)))
do{if((a=l(e.data.subarray(n+4,n+8)))<1)return console.log("Malformed ID3 frame encountered. Skipping metadata parsing.")
if((u={id:String.fromCharCode(e.data[n],e.data[n+1],e.data[n+2],e.data[n+3]),data:e.data.subarray(n+10,n+a+10)}).key=u.id,c[u.id]&&(c[u.id](u),"com.apple.streaming.transportStreamTimestamp"===u.owner)){var d=u.data,p=(1&d[3])<<30|d[4]<<22|d[5]<<14|d[6]<<6|d[7]>>>2
p*=4,p+=3&d[7],u.timeStamp=p,void 0===e.pts&&void 0===e.dts&&(e.pts=u.timeStamp,e.dts=u.timeStamp),this.trigger("timestamp",u)}e.frames.push(u),n+=10,n+=a}while(n<r)
this.trigger("data",e)}}}).prototype=new r,t.exports=n},function(t,e,i){"use strict"
var n,r=i(6),a=[96e3,88200,64e3,48e3,44100,32e3,24e3,22050,16e3,12e3,11025,8e3,7350];(n=function(){var t
n.prototype.init.call(this),this.push=function(e){var i,n,r,s,o,u,l=0,c=0
if("audio"===e.type)for(t?(s=t,(t=new Uint8Array(s.byteLength+e.data.byteLength)).set(s),t.set(e.data,s.byteLength)):t=e.data;l+5<t.length;)if(255===t[l]&&240==(246&t[l+1])){if(n=2*(1&~t[l+1]),i=(3&t[l+3])<<11|t[l+4]<<3|(224&t[l+5])>>5,u=9e4*(o=1024*(1+(3&t[l+6])))/a[(60&t[l+2])>>>2],r=l+i,t.byteLength<r)return
if(this.trigger("data",{pts:e.pts+c*u,dts:e.dts+c*u,sampleCount:o,audioobjecttype:1+(t[l+2]>>>6&3),channelcount:(1&t[l+2])<<2|(192&t[l+3])>>>6,samplerate:a[(60&t[l+2])>>>2],samplingfrequencyindex:(60&t[l+2])>>>2,samplesize:16,data:t.subarray(l+7+n,r)}),t.byteLength===r)return void(t=void 0)
c++,t=t.subarray(r)}else l++},this.flush=function(){this.trigger("done")}}).prototype=new r,t.exports=n},function(t,e,i){"use strict"
var n,r,a,s=i(6),o=i(43);(r=function(){var t,e,i=0
r.prototype.init.call(this),this.push=function(n){var r
for(e?((r=new Uint8Array(e.byteLength+n.data.byteLength)).set(e),r.set(n.data,e.byteLength),e=r):e=n.data;i<e.byteLength-3;i++)if(1===e[i+2]){t=i+5
break}for(;t<e.byteLength;)switch(e[t]){case 0:if(0!==e[t-1]){t+=2
break}if(0!==e[t-2]){t++
break}i+3!==t-2&&this.trigger("data",e.subarray(i+3,t-2))
do{t++}while(1!==e[t]&&t<e.length)
i=t-2,t+=3
break
case 1:if(0!==e[t-1]||0!==e[t-2]){t+=3
break}this.trigger("data",e.subarray(i+3,t-2)),i=t-2,t+=3
break
default:t+=3}e=e.subarray(i),t-=i,i=0},this.flush=function(){e&&e.byteLength>3&&this.trigger("data",e.subarray(i+3)),e=null,i=0,this.trigger("done")}}).prototype=new s,a={100:!0,110:!0,122:!0,244:!0,44:!0,83:!0,86:!0,118:!0,128:!0,138:!0,139:!0,134:!0},(n=function(){var t,e,i,s,u,l,c,h=new r
n.prototype.init.call(this),t=this,this.push=function(t){"video"===t.type&&(e=t.trackId,i=t.pts,s=t.dts,h.push(t))},h.on("data",function(n){var r={trackId:e,pts:i,dts:s,data:n}
switch(31&n[0]){case 5:r.nalUnitType="slice_layer_without_partitioning_rbsp_idr"
break
case 6:r.nalUnitType="sei_rbsp",r.escapedRBSP=u(n.subarray(1))
break
case 7:r.nalUnitType="seq_parameter_set_rbsp",r.escapedRBSP=u(n.subarray(1)),r.config=l(r.escapedRBSP)
break
case 8:r.nalUnitType="pic_parameter_set_rbsp"
break
case 9:r.nalUnitType="access_unit_delimiter_rbsp"}t.trigger("data",r)}),h.on("done",function(){t.trigger("done")}),this.flush=function(){h.flush()},c=function(t,e){var i,n=8,r=8
for(i=0;i<t;i++)0!==r&&(r=(n+e.readExpGolomb()+256)%256),n=0===r?n:r},u=function(t){for(var e,i,n=t.byteLength,r=[],a=1;a<n-2;)0===t[a]&&0===t[a+1]&&3===t[a+2]?(r.push(a+2),a+=2):a++
if(0===r.length)return t
e=n-r.length,i=new Uint8Array(e)
var s=0
for(a=0;a<e;s++,a++)s===r[0]&&(s++,r.shift()),i[a]=t[s]
return i},l=function(t){var e,i,n,r,s,u,l,h,d,p,f,m,g,y=0,v=0,_=0,b=0,T=1
if(i=(e=new o(t)).readUnsignedByte(),r=e.readUnsignedByte(),n=e.readUnsignedByte(),e.skipUnsignedExpGolomb(),a[i]&&(3===(s=e.readUnsignedExpGolomb())&&e.skipBits(1),e.skipUnsignedExpGolomb(),e.skipUnsignedExpGolomb(),e.skipBits(1),e.readBoolean()))for(f=3!==s?8:12,g=0;g<f;g++)e.readBoolean()&&c(g<6?16:64,e)
if(e.skipUnsignedExpGolomb(),0===(u=e.readUnsignedExpGolomb()))e.readUnsignedExpGolomb()
else if(1===u)for(e.skipBits(1),e.skipExpGolomb(),e.skipExpGolomb(),l=e.readUnsignedExpGolomb(),g=0;g<l;g++)e.skipExpGolomb()
if(e.skipUnsignedExpGolomb(),e.skipBits(1),h=e.readUnsignedExpGolomb(),d=e.readUnsignedExpGolomb(),0===(p=e.readBits(1))&&e.skipBits(1),e.skipBits(1),e.readBoolean()&&(y=e.readUnsignedExpGolomb(),v=e.readUnsignedExpGolomb(),_=e.readUnsignedExpGolomb(),b=e.readUnsignedExpGolomb()),e.readBoolean()&&e.readBoolean()){switch(e.readUnsignedByte()){case 1:m=[1,1]
break
case 2:m=[12,11]
break
case 3:m=[10,11]
break
case 4:m=[16,11]
break
case 5:m=[40,33]
break
case 6:m=[24,11]
break
case 7:m=[20,11]
break
case 8:m=[32,11]
break
case 9:m=[80,33]
break
case 10:m=[18,11]
break
case 11:m=[15,11]
break
case 12:m=[64,33]
break
case 13:m=[160,99]
break
case 14:m=[4,3]
break
case 15:m=[3,2]
break
case 16:m=[2,1]
break
case 255:m=[e.readUnsignedByte()<<8|e.readUnsignedByte(),e.readUnsignedByte()<<8|e.readUnsignedByte()]}m&&(T=m[0]/m[1])}return{profileIdc:i,levelIdc:n,profileCompatibility:r,width:Math.ceil((16*(h+1)-2*y-2*v)*T),height:(2-p)*(d+1)*16-2*_-2*b}}}).prototype=new s,t.exports={H264Stream:n,NalByteStream:r}},function(t,e,i){"use strict"
var n
n=function(t){var e=t.byteLength,i=0,n=0
this.length=function(){return 8*e},this.bitsAvailable=function(){return 8*e+n},this.loadWord=function(){var r=t.byteLength-e,a=new Uint8Array(4),s=Math.min(4,e)
if(0===s)throw new Error("no bytes available")
a.set(t.subarray(r,r+s)),i=new DataView(a.buffer).getUint32(0),n=8*s,e-=s},this.skipBits=function(t){var r
n>t?(i<<=t,n-=t):(t-=n,t-=8*(r=Math.floor(t/8)),e-=r,this.loadWord(),i<<=t,n-=t)},this.readBits=function(t){var r=Math.min(n,t),a=i>>>32-r
return(n-=r)>0?i<<=r:e>0&&this.loadWord(),(r=t-r)>0?a<<r|this.readBits(r):a},this.skipLeadingZeros=function(){var t
for(t=0;t<n;++t)if(0!=(i&2147483648>>>t))return i<<=t,n-=t,t
return this.loadWord(),t+this.skipLeadingZeros()},this.skipUnsignedExpGolomb=function(){this.skipBits(1+this.skipLeadingZeros())},this.skipExpGolomb=function(){this.skipBits(1+this.skipLeadingZeros())},this.readUnsignedExpGolomb=function(){var t=this.skipLeadingZeros()
return this.readBits(t+1)-1},this.readExpGolomb=function(){var t=this.readUnsignedExpGolomb()
return 1&t?1+t>>>1:-1*(t>>>1)},this.readBoolean=function(){return 1===this.readBits(1)},this.readUnsignedByte=function(){return this.readBits(8)},this.loadWord()},t.exports=n},function(t,e,i){"use strict"
var n,r=i(6);(n=function(){var t=new Uint8Array,e=0
n.prototype.init.call(this),this.setTimestamp=function(t){e=t},this.parseId3TagSize=function(t,e){var i=t[e+6]<<21|t[e+7]<<14|t[e+8]<<7|t[e+9]
return(16&t[e+5])>>4?i+20:i+10},this.parseAdtsSize=function(t,e){var i=(224&t[e+5])>>5,n=t[e+4]<<3
return 6144&t[e+3]|n|i},this.push=function(i){var n,r,a,s,o=0,u=0
for(t.length?(s=t.length,(t=new Uint8Array(i.byteLength+s)).set(t.subarray(0,s)),t.set(i,s)):t=i;t.length-u>=3;)if(t[u]!=="I".charCodeAt(0)||t[u+1]!=="D".charCodeAt(0)||t[u+2]!=="3".charCodeAt(0))if(!0&t[u]&&240==(240&t[u+1])){if(t.length-u<7)break
if((o=this.parseAdtsSize(t,u))>t.length)break
a={type:"audio",data:t.subarray(u,u+o),pts:e,dts:e},this.trigger("data",a),u+=o}else u++
else{if(t.length-u<10)break
if((o=this.parseId3TagSize(t,u))>t.length)break
r={type:"timed-metadata",data:t.subarray(u,u+o)},this.trigger("data",r),u+=o}n=t.length-u,t=n>0?t.subarray(u):new Uint8Array}}).prototype=new r,t.exports=n},function(t,e){var i=[33,16,5,32,164,27],n=[33,65,108,84,1,2,4,8,168,2,4,8,17,191,252],r=function(t){for(var e=[];t--;)e.push(0)
return e},a={96000:[i,[227,64],r(154),[56]],88200:[i,[231],r(170),[56]],64000:[i,[248,192],r(240),[56]],48000:[i,[255,192],r(268),[55,148,128],r(54),[112]],44100:[i,[255,192],r(268),[55,163,128],r(84),[112]],32000:[i,[255,192],r(268),[55,234],r(226),[112]],24000:[i,[255,192],r(268),[55,255,128],r(268),[111,112],r(126),[224]],16000:[i,[255,192],r(268),[55,255,128],r(268),[111,255],r(269),[223,108],r(195),[1,192]],12000:[n,r(268),[3,127,248],r(268),[6,255,240],r(268),[13,255,224],r(268),[27,253,128],r(259),[56]],11025:[n,r(268),[3,127,248],r(268),[6,255,240],r(268),[13,255,224],r(268),[27,255,192],r(268),[55,175,128],r(108),[112]],8000:[n,r(268),[3,121,16],r(47),[7]]}
t.exports=function(t){return Object.keys(t).reduce(function(e,i){return e[i]=new Uint8Array(t[i].reduce(function(t,e){return t.concat(e)},[])),e},{})}(a)},function(t,e){var i,n,r,a,s,o
i=function(t){return 9e4*t},n=function(t,e){return t*e},r=function(t){return t/9e4},a=function(t,e){return t/e},s=function(t,e){return i(a(t,e))},o=function(t,e){return n(r(t),e)},t.exports={secondsToVideoTs:i,secondsToAudioTs:n,videoTsToSeconds:r,audioTsToSeconds:a,audioTsToVideoTs:s,videoTsToAudioTs:o}},function(t,e,i){"use strict"
var n=i(15).discardEmulationPreventionBytes,r=i(14).CaptionStream,a=i(10),s=i(48),o=function(t,e){for(var i=t,n=0;n<e.length;n++){var r=e[n]
if(i<r.size)return r
i-=r.size}return null},u=function(t,e){var i=a.findBox(t,["moof","traf"]),r={},u=[]
return a.findBox(t,["mdat"]).forEach(function(t,e){var n=i[e]
u.push({mdat:t,traf:n})}),u.forEach(function(t){var i,u=t.mdat,l=t.traf,c=a.findBox(l,["tfhd"]),h=s.parseTfhd(c[0]),d=h.trackId,p=a.findBox(l,["tfdt"]),f=p.length>0?s.parseTfdt(p[0]).baseMediaDecodeTime:0,m=a.findBox(l,["trun"])
e===d&&m.length>0&&(i=function(t,e,i){var r,a,s,u,l=new DataView(t.buffer,t.byteOffset,t.byteLength),c=[]
for(a=0;a+4<t.length;a+=s)if(s=l.getUint32(a),a+=4,!(s<=0))switch(31&t[a]){case 6:var h=t.subarray(a+1,a+1+s),d=o(a,e)
r={nalUnitType:"sei_rbsp",size:s,data:h,escapedRBSP:n(h),trackId:i},d?(r.pts=d.pts,r.dts=d.dts,u=d):(r.pts=u.pts,r.dts=u.dts),c.push(r)}return c}(u,function(t,e,i){var n=f,r=i.defaultSampleDuration||0,a=i.defaultSampleSize||0,o=i.trackId,u=[]
return t.forEach(function(t){var e=s.parseTrun(t).samples
e.forEach(function(t){void 0===t.duration&&(t.duration=r),void 0===t.size&&(t.size=a),t.trackId=o,t.dts=n,void 0===t.compositionTimeOffset&&(t.compositionTimeOffset=0),t.pts=n+t.compositionTimeOffset,n+=t.duration}),u=u.concat(e)}),u}(m,0,h),d),r[d]||(r[d]=[]),r[d]=r[d].concat(i))}),r}
t.exports=function(){var t,e,i,n,a,s=!1
this.isInitialized=function(){return s},this.init=function(){t=new r,s=!0,t.on("data",function(t){t.startTime=t.startPts/n,t.endTime=t.endPts/n,a.captions.push(t),a.captionStreams[t.stream]=!0})},this.isNewInit=function(t,e){return!(t&&0===t.length||e&&"object"==typeof e&&0===Object.keys(e).length||i===t[0]&&n===e[i])},this.parse=function(t,r,s){var o
if(!this.isInitialized())return null
if(!r||!s)return null
if(this.isNewInit(r,s))i=r[0],n=s[i]
else if(!i||!n)return e.push(t),null
for(;e.length>0;){var l=e.shift()
this.parse(l,r,s)}return null!==(o=function(t,e,i){return e?{seiNals:u(t,e)[e],timescale:i}:null}(t,i,n))&&o.seiNals?(this.pushNals(o.seiNals),this.flushStream(),a):null},this.pushNals=function(e){if(!this.isInitialized()||!e||0===e.length)return null
e.forEach(function(e){t.push(e)})},this.flushStream=function(){if(!this.isInitialized())return null
t.flush()},this.clearParsedCaptions=function(){a.captions=[],a.captionStreams={}},this.resetCaptionStream=function(){if(!this.isInitialized())return null
t.reset()},this.clearAllCaptions=function(){this.clearParsedCaptions(),this.resetCaptionStream()},this.reset=function(){e=[],i=null,n=null,a?this.clearParsedCaptions():a={captions:[],captionStreams:{}},this.resetCaptionStream()},this.reset()}},function(t,e,i){"use strict"
var n,r,a=i(10).parseType,s=function(t){return new Date(1e3*t-20828448e5)},o=function(t){return{isLeading:(12&t[0])>>>2,dependsOn:3&t[0],isDependedOn:(192&t[1])>>>6,hasRedundancy:(48&t[1])>>>4,paddingValue:(14&t[1])>>>1,isNonSyncSample:1&t[1],degradationPriority:t[2]<<8|t[3]}},u={avc1:function(t){var e=new DataView(t.buffer,t.byteOffset,t.byteLength)
return{dataReferenceIndex:e.getUint16(6),width:e.getUint16(24),height:e.getUint16(26),horizresolution:e.getUint16(28)+e.getUint16(30)/16,vertresolution:e.getUint16(32)+e.getUint16(34)/16,frameCount:e.getUint16(40),depth:e.getUint16(74),config:n(t.subarray(78,t.byteLength))}},avcC:function(t){var e,i,n,r,a=new DataView(t.buffer,t.byteOffset,t.byteLength),s={configurationVersion:t[0],avcProfileIndication:t[1],profileCompatibility:t[2],avcLevelIndication:t[3],lengthSizeMinusOne:3&t[4],sps:[],pps:[]},o=31&t[5]
for(n=6,r=0;r<o;r++)i=a.getUint16(n),n+=2,s.sps.push(new Uint8Array(t.subarray(n,n+i))),n+=i
for(e=t[n],n++,r=0;r<e;r++)i=a.getUint16(n),n+=2,s.pps.push(new Uint8Array(t.subarray(n,n+i))),n+=i
return s},btrt:function(t){var e=new DataView(t.buffer,t.byteOffset,t.byteLength)
return{bufferSizeDB:e.getUint32(0),maxBitrate:e.getUint32(4),avgBitrate:e.getUint32(8)}},esds:function(t){return{version:t[0],flags:new Uint8Array(t.subarray(1,4)),esId:t[6]<<8|t[7],streamPriority:31&t[8],decoderConfig:{objectProfileIndication:t[11],streamType:t[12]>>>2&63,bufferSize:t[13]<<16|t[14]<<8|t[15],maxBitrate:t[16]<<24|t[17]<<16|t[18]<<8|t[19],avgBitrate:t[20]<<24|t[21]<<16|t[22]<<8|t[23],decoderConfigDescriptor:{tag:t[24],length:t[25],audioObjectType:t[26]>>>3&31,samplingFrequencyIndex:(7&t[26])<<1|t[27]>>>7&1,channelConfiguration:t[27]>>>3&15}}}},ftyp:function(t){for(var e=new DataView(t.buffer,t.byteOffset,t.byteLength),i={majorBrand:a(t.subarray(0,4)),minorVersion:e.getUint32(4),compatibleBrands:[]},n=8;n<t.byteLength;)i.compatibleBrands.push(a(t.subarray(n,n+4))),n+=4
return i},dinf:function(t){return{boxes:n(t)}},dref:function(t){return{version:t[0],flags:new Uint8Array(t.subarray(1,4)),dataReferences:n(t.subarray(8))}},hdlr:function(t){var e={version:new DataView(t.buffer,t.byteOffset,t.byteLength).getUint8(0),flags:new Uint8Array(t.subarray(1,4)),handlerType:a(t.subarray(8,12)),name:""},i=8
for(i=24;i<t.byteLength;i++){if(0===t[i]){i++
break}e.name+=String.fromCharCode(t[i])}return e.name=decodeURIComponent(escape(e.name)),e},mdat:function(t){return{byteLength:t.byteLength,nals:function(t){var e,i,n=new DataView(t.buffer,t.byteOffset,t.byteLength),r=[]
for(e=0;e+4<t.length;e+=i)if(i=n.getUint32(e),e+=4,i<=0)r.push("<span style='color:red;'>MALFORMED DATA</span>")
else switch(31&t[e]){case 1:r.push("slice_layer_without_partitioning_rbsp")
break
case 5:r.push("slice_layer_without_partitioning_rbsp_idr")
break
case 6:r.push("sei_rbsp")
break
case 7:r.push("seq_parameter_set_rbsp")
break
case 8:r.push("pic_parameter_set_rbsp")
break
case 9:r.push("access_unit_delimiter_rbsp")
break
default:r.push("UNKNOWN NAL - "+t[e]&31)}return r}(t)}},mdhd:function(t){var e,i=new DataView(t.buffer,t.byteOffset,t.byteLength),n=4,r={version:i.getUint8(0),flags:new Uint8Array(t.subarray(1,4)),language:""}
return 1===r.version?(n+=4,r.creationTime=s(i.getUint32(n)),n+=8,r.modificationTime=s(i.getUint32(n)),n+=4,r.timescale=i.getUint32(n),n+=8,r.duration=i.getUint32(n)):(r.creationTime=s(i.getUint32(n)),n+=4,r.modificationTime=s(i.getUint32(n)),n+=4,r.timescale=i.getUint32(n),n+=4,r.duration=i.getUint32(n)),n+=4,e=i.getUint16(n),r.language+=String.fromCharCode(96+(e>>10)),r.language+=String.fromCharCode(96+((992&e)>>5)),r.language+=String.fromCharCode(96+(31&e)),r},mdia:function(t){return{boxes:n(t)}},mfhd:function(t){return{version:t[0],flags:new Uint8Array(t.subarray(1,4)),sequenceNumber:t[4]<<24|t[5]<<16|t[6]<<8|t[7]}},minf:function(t){return{boxes:n(t)}},mp4a:function(t){var e=new DataView(t.buffer,t.byteOffset,t.byteLength),i={dataReferenceIndex:e.getUint16(6),channelcount:e.getUint16(16),samplesize:e.getUint16(18),samplerate:e.getUint16(24)+e.getUint16(26)/65536}
return t.byteLength>28&&(i.streamDescriptor=n(t.subarray(28))[0]),i},moof:function(t){return{boxes:n(t)}},moov:function(t){return{boxes:n(t)}},mvex:function(t){return{boxes:n(t)}},mvhd:function(t){var e=new DataView(t.buffer,t.byteOffset,t.byteLength),i=4,n={version:e.getUint8(0),flags:new Uint8Array(t.subarray(1,4))}
return 1===n.version?(i+=4,n.creationTime=s(e.getUint32(i)),i+=8,n.modificationTime=s(e.getUint32(i)),i+=4,n.timescale=e.getUint32(i),i+=8,n.duration=e.getUint32(i)):(n.creationTime=s(e.getUint32(i)),i+=4,n.modificationTime=s(e.getUint32(i)),i+=4,n.timescale=e.getUint32(i),i+=4,n.duration=e.getUint32(i)),i+=4,n.rate=e.getUint16(i)+e.getUint16(i+2)/16,i+=4,n.volume=e.getUint8(i)+e.getUint8(i+1)/8,i+=2,i+=2,i+=8,n.matrix=new Uint32Array(t.subarray(i,i+36)),i+=36,i+=24,n.nextTrackId=e.getUint32(i),n},pdin:function(t){var e=new DataView(t.buffer,t.byteOffset,t.byteLength)
return{version:e.getUint8(0),flags:new Uint8Array(t.subarray(1,4)),rate:e.getUint32(4),initialDelay:e.getUint32(8)}},sdtp:function(t){var e,i={version:t[0],flags:new Uint8Array(t.subarray(1,4)),samples:[]}
for(e=4;e<t.byteLength;e++)i.samples.push({dependsOn:(48&t[e])>>4,isDependedOn:(12&t[e])>>2,hasRedundancy:3&t[e]})
return i},sidx:function(t){var e,i=new DataView(t.buffer,t.byteOffset,t.byteLength),n={version:t[0],flags:new Uint8Array(t.subarray(1,4)),references:[],referenceId:i.getUint32(4),timescale:i.getUint32(8),earliestPresentationTime:i.getUint32(12),firstOffset:i.getUint32(16)},r=i.getUint16(22)
for(e=24;r;e+=12,r--)n.references.push({referenceType:(128&t[e])>>>7,referencedSize:2147483647&i.getUint32(e),subsegmentDuration:i.getUint32(e+4),startsWithSap:!!(128&t[e+8]),sapType:(112&t[e+8])>>>4,sapDeltaTime:268435455&i.getUint32(e+8)})
return n},smhd:function(t){return{version:t[0],flags:new Uint8Array(t.subarray(1,4)),balance:t[4]+t[5]/256}},stbl:function(t){return{boxes:n(t)}},stco:function(t){var e,i=new DataView(t.buffer,t.byteOffset,t.byteLength),n={version:t[0],flags:new Uint8Array(t.subarray(1,4)),chunkOffsets:[]},r=i.getUint32(4)
for(e=8;r;e+=4,r--)n.chunkOffsets.push(i.getUint32(e))
return n},stsc:function(t){var e,i=new DataView(t.buffer,t.byteOffset,t.byteLength),n=i.getUint32(4),r={version:t[0],flags:new Uint8Array(t.subarray(1,4)),sampleToChunks:[]}
for(e=8;n;e+=12,n--)r.sampleToChunks.push({firstChunk:i.getUint32(e),samplesPerChunk:i.getUint32(e+4),sampleDescriptionIndex:i.getUint32(e+8)})
return r},stsd:function(t){return{version:t[0],flags:new Uint8Array(t.subarray(1,4)),sampleDescriptions:n(t.subarray(8))}},stsz:function(t){var e,i=new DataView(t.buffer,t.byteOffset,t.byteLength),n={version:t[0],flags:new Uint8Array(t.subarray(1,4)),sampleSize:i.getUint32(4),entries:[]}
for(e=12;e<t.byteLength;e+=4)n.entries.push(i.getUint32(e))
return n},stts:function(t){var e,i=new DataView(t.buffer,t.byteOffset,t.byteLength),n={version:t[0],flags:new Uint8Array(t.subarray(1,4)),timeToSamples:[]},r=i.getUint32(4)
for(e=8;r;e+=8,r--)n.timeToSamples.push({sampleCount:i.getUint32(e),sampleDelta:i.getUint32(e+4)})
return n},styp:function(t){return u.ftyp(t)},tfdt:function(t){var e={version:t[0],flags:new Uint8Array(t.subarray(1,4)),baseMediaDecodeTime:t[4]<<24|t[5]<<16|t[6]<<8|t[7]}
return 1===e.version&&(e.baseMediaDecodeTime*=Math.pow(2,32),e.baseMediaDecodeTime+=t[8]<<24|t[9]<<16|t[10]<<8|t[11]),e},tfhd:function(t){var e,i=new DataView(t.buffer,t.byteOffset,t.byteLength),n={version:t[0],flags:new Uint8Array(t.subarray(1,4)),trackId:i.getUint32(4)},r=1&n.flags[2],a=2&n.flags[2],s=8&n.flags[2],o=16&n.flags[2],u=32&n.flags[2],l=65536&n.flags[0],c=131072&n.flags[0]
return e=8,r&&(e+=4,n.baseDataOffset=i.getUint32(12),e+=4),a&&(n.sampleDescriptionIndex=i.getUint32(e),e+=4),s&&(n.defaultSampleDuration=i.getUint32(e),e+=4),o&&(n.defaultSampleSize=i.getUint32(e),e+=4),u&&(n.defaultSampleFlags=i.getUint32(e)),l&&(n.durationIsEmpty=!0),!r&&c&&(n.baseDataOffsetIsMoof=!0),n},tkhd:function(t){var e=new DataView(t.buffer,t.byteOffset,t.byteLength),i=4,n={version:e.getUint8(0),flags:new Uint8Array(t.subarray(1,4))}
return 1===n.version?(i+=4,n.creationTime=s(e.getUint32(i)),i+=8,n.modificationTime=s(e.getUint32(i)),i+=4,n.trackId=e.getUint32(i),i+=4,i+=8,n.duration=e.getUint32(i)):(n.creationTime=s(e.getUint32(i)),i+=4,n.modificationTime=s(e.getUint32(i)),i+=4,n.trackId=e.getUint32(i),i+=4,i+=4,n.duration=e.getUint32(i)),i+=4,i+=8,n.layer=e.getUint16(i),i+=2,n.alternateGroup=e.getUint16(i),i+=2,n.volume=e.getUint8(i)+e.getUint8(i+1)/8,i+=2,i+=2,n.matrix=new Uint32Array(t.subarray(i,i+36)),i+=36,n.width=e.getUint16(i)+e.getUint16(i+2)/16,i+=4,n.height=e.getUint16(i)+e.getUint16(i+2)/16,n},traf:function(t){return{boxes:n(t)}},trak:function(t){return{boxes:n(t)}},trex:function(t){var e=new DataView(t.buffer,t.byteOffset,t.byteLength)
return{version:t[0],flags:new Uint8Array(t.subarray(1,4)),trackId:e.getUint32(4),defaultSampleDescriptionIndex:e.getUint32(8),defaultSampleDuration:e.getUint32(12),defaultSampleSize:e.getUint32(16),sampleDependsOn:3&t[20],sampleIsDependedOn:(192&t[21])>>6,sampleHasRedundancy:(48&t[21])>>4,samplePaddingValue:(14&t[21])>>1,sampleIsDifferenceSample:!!(1&t[21]),sampleDegradationPriority:e.getUint16(22)}},trun:function(t){var e,i={version:t[0],flags:new Uint8Array(t.subarray(1,4)),samples:[]},n=new DataView(t.buffer,t.byteOffset,t.byteLength),r=1&i.flags[2],a=4&i.flags[2],s=1&i.flags[1],u=2&i.flags[1],l=4&i.flags[1],c=8&i.flags[1],h=n.getUint32(4),d=8
for(r&&(i.dataOffset=n.getInt32(d),d+=4),a&&h&&(e={flags:o(t.subarray(d,d+4))},d+=4,s&&(e.duration=n.getUint32(d),d+=4),u&&(e.size=n.getUint32(d),d+=4),c&&(e.compositionTimeOffset=n.getUint32(d),d+=4),i.samples.push(e),h--);h--;)e={},s&&(e.duration=n.getUint32(d),d+=4),u&&(e.size=n.getUint32(d),d+=4),l&&(e.flags=o(t.subarray(d,d+4)),d+=4),c&&(e.compositionTimeOffset=n.getUint32(d),d+=4),i.samples.push(e)
return i},"url ":function(t){return{version:t[0],flags:new Uint8Array(t.subarray(1,4))}},vmhd:function(t){var e=new DataView(t.buffer,t.byteOffset,t.byteLength)
return{version:t[0],flags:new Uint8Array(t.subarray(1,4)),graphicsmode:e.getUint16(4),opcolor:new Uint16Array([e.getUint16(6),e.getUint16(8),e.getUint16(10)])}}}
n=function(t){for(var e,i,n,r,s,o=0,l=[],c=new ArrayBuffer(t.length),h=new Uint8Array(c),d=0;d<t.length;++d)h[d]=t[d]
for(e=new DataView(c);o<t.byteLength;)i=e.getUint32(o),n=a(t.subarray(o+4,o+8)),r=i>1?o+i:t.byteLength,(s=(u[n]||function(t){return{data:t}})(t.subarray(o+8,r))).size=i,s.type=n,l.push(s),o=r
return l},r=function(t,e){var i
return e=e||0,i=new Array(2*e+1).join(" "),t.map(function(t,n){return i+t.type+"\n"+Object.keys(t).filter(function(t){return"type"!==t&&"boxes"!==t}).map(function(e){var n=i+"  "+e+": ",r=t[e]
if(r instanceof Uint8Array||r instanceof Uint32Array){var a=Array.prototype.slice.call(new Uint8Array(r.buffer,r.byteOffset,r.byteLength)).map(function(t){return" "+("00"+t.toString(16)).slice(-2)}).join("").match(/.{1,24}/g)
return a?1===a.length?n+"<"+a.join("").slice(1)+">":n+"<\n"+a.map(function(t){return i+"  "+t}).join("\n")+"\n"+i+"  >":n+"<>"}return n+JSON.stringify(r,null,2).split("\n").map(function(t,e){return 0===e?t:i+"  "+t}).join("\n")}).join("\n")+(t.boxes?"\n"+r(t.boxes,e+1):"")}).join("\n")},t.exports={inspect:n,textify:r,parseTfdt:u.tfdt,parseHdlr:u.hdlr,parseTfhd:u.tfhd,parseTrun:u.trun}},function(t,e,i){"use strict"
var n=i(8),r=i(16).handleRollover,a={}
a.ts=i(50),a.aac=i(51)
var s=function(t,e,i){for(var n,r,s,o,u=0,l=188,c=!1;l<t.byteLength;)if(71!==t[u]||71!==t[l])u++,l++
else{switch(n=t.subarray(u,l),a.ts.parseType(n,e.pid)){case"pes":r=a.ts.parsePesType(n,e.table),s=a.ts.parsePayloadUnitStartIndicator(n),"audio"===r&&s&&(o=a.ts.parsePesTime(n))&&(o.type="audio",i.audio.push(o),c=!0)}if(c)break
u+=188,l+=188}for(u=(l=t.byteLength)-188,c=!1;u>=0;)if(71!==t[u]||71!==t[l])u--,l--
else{switch(n=t.subarray(u,l),a.ts.parseType(n,e.pid)){case"pes":r=a.ts.parsePesType(n,e.table),s=a.ts.parsePayloadUnitStartIndicator(n),"audio"===r&&s&&(o=a.ts.parsePesTime(n))&&(o.type="audio",i.audio.push(o),c=!0)}if(c)break
u-=188,l-=188}},o=function(t,e,i){for(var n,r,s,o,u,l,c,h=0,d=188,p=!1,f={data:[],size:0};d<t.byteLength;)if(71!==t[h]||71!==t[d])h++,d++
else{switch(n=t.subarray(h,d),a.ts.parseType(n,e.pid)){case"pes":if(r=a.ts.parsePesType(n,e.table),s=a.ts.parsePayloadUnitStartIndicator(n),"video"===r&&(s&&!p&&(o=a.ts.parsePesTime(n))&&(o.type="video",i.video.push(o),p=!0),!i.firstKeyFrame)){if(s&&0!==f.size){for(u=new Uint8Array(f.size),l=0;f.data.length;)c=f.data.shift(),u.set(c,l),l+=c.byteLength
a.ts.videoPacketContainsKeyFrame(u)&&(i.firstKeyFrame=a.ts.parsePesTime(u),i.firstKeyFrame.type="video"),f.size=0}f.data.push(n),f.size+=n.byteLength}}if(p&&i.firstKeyFrame)break
h+=188,d+=188}for(h=(d=t.byteLength)-188,p=!1;h>=0;)if(71!==t[h]||71!==t[d])h--,d--
else{switch(n=t.subarray(h,d),a.ts.parseType(n,e.pid)){case"pes":r=a.ts.parsePesType(n,e.table),s=a.ts.parsePayloadUnitStartIndicator(n),"video"===r&&s&&(o=a.ts.parsePesTime(n))&&(o.type="video",i.video.push(o),p=!0)}if(p)break
h-=188,d-=188}}
t.exports={inspect:function(t,e){var i
return(i=function(t){return t[0]==="I".charCodeAt(0)&&t[1]==="D".charCodeAt(0)&&t[2]==="3".charCodeAt(0)}(t)?function(t){for(var e,i=!1,n=0,r=null,s=null,o=0,u=0;t.length-u>=3;){switch(a.aac.parseType(t,u)){case"timed-metadata":if(t.length-u<10){i=!0
break}if((o=a.aac.parseId3TagSize(t,u))>t.length){i=!0
break}null===s&&(e=t.subarray(u,u+o),s=a.aac.parseAacTimestamp(e)),u+=o
break
case"audio":if(t.length-u<7){i=!0
break}if((o=a.aac.parseAdtsSize(t,u))>t.length){i=!0
break}null===r&&(e=t.subarray(u,u+o),r=a.aac.parseSampleRate(e)),n++,u+=o
break
default:u++}if(i)return null}if(null===r||null===s)return null
var l=9e4/r
return{audio:[{type:"audio",dts:s,pts:s},{type:"audio",dts:s+1024*n*l,pts:s+1024*n*l}]}}(t):function(t){var e={pid:null,table:null},i={}
for(var r in function(t,e){for(var i,n=0,r=188;r<t.byteLength;)if(71!==t[n]||71!==t[r])n++,r++
else{switch(i=t.subarray(n,r),a.ts.parseType(i,e.pid)){case"pat":e.pid||(e.pid=a.ts.parsePat(i))
break
case"pmt":e.table||(e.table=a.ts.parsePmt(i))}if(e.pid&&e.table)return
n+=188,r+=188}}(t,e),e.table)if(e.table.hasOwnProperty(r))switch(e.table[r]){case n.H264_STREAM_TYPE:i.video=[],o(t,e,i),0===i.video.length&&delete i.video
break
case n.ADTS_STREAM_TYPE:i.audio=[],s(t,e,i),0===i.audio.length&&delete i.audio}return i}(t))&&(i.audio||i.video)?(function(t,e){if(t.audio&&t.audio.length){var i=e
void 0===i&&(i=t.audio[0].dts),t.audio.forEach(function(t){t.dts=r(t.dts,i),t.pts=r(t.pts,i),t.dtsTime=t.dts/9e4,t.ptsTime=t.pts/9e4})}if(t.video&&t.video.length){var n=e
if(void 0===n&&(n=t.video[0].dts),t.video.forEach(function(t){t.dts=r(t.dts,n),t.pts=r(t.pts,n),t.dtsTime=t.dts/9e4,t.ptsTime=t.pts/9e4}),t.firstKeyFrame){var a=t.firstKeyFrame
a.dts=r(a.dts,n),a.pts=r(a.pts,n),a.dtsTime=a.dts/9e4,a.ptsTime=a.dts/9e4}}}(i,e),i):null}}},function(t,e,i){"use strict"
var n=i(8),r=function(t){var e=31&t[1]
return(e<<=8)|t[2]},a=function(t){return!!(64&t[1])},s=function(t){var e=0
return(48&t[3])>>>4>1&&(e+=t[4]+1),e},o=function(t){switch(t){case 5:return"slice_layer_without_partitioning_rbsp_idr"
case 6:return"sei_rbsp"
case 7:return"seq_parameter_set_rbsp"
case 8:return"pic_parameter_set_rbsp"
case 9:return"access_unit_delimiter_rbsp"
default:return null}}
t.exports={parseType:function(t,e){var i=r(t)
return 0===i?"pat":i===e?"pmt":e?"pes":null},parsePat:function(t){var e=a(t),i=4+s(t)
return e&&(i+=t[i]+1),(31&t[i+10])<<8|t[i+11]},parsePmt:function(t){var e={},i=a(t),n=4+s(t)
if(i&&(n+=t[n]+1),1&t[n+5]){var r
r=3+((15&t[n+1])<<8|t[n+2])-4
for(var o=12+((15&t[n+10])<<8|t[n+11]);o<r;){var u=n+o
e[(31&t[u+1])<<8|t[u+2]]=t[u],o+=5+((15&t[u+3])<<8|t[u+4])}return e}},parsePayloadUnitStartIndicator:a,parsePesType:function(t,e){switch(e[r(t)]){case n.H264_STREAM_TYPE:return"video"
case n.ADTS_STREAM_TYPE:return"audio"
case n.METADATA_STREAM_TYPE:return"timed-metadata"
default:return null}},parsePesTime:function(t){if(!a(t))return null
var e=4+s(t)
if(e>=t.byteLength)return null
var i,n=null
return 192&(i=t[e+7])&&((n={}).pts=(14&t[e+9])<<27|(255&t[e+10])<<20|(254&t[e+11])<<12|(255&t[e+12])<<5|(254&t[e+13])>>>3,n.pts*=4,n.pts+=(6&t[e+13])>>>1,n.dts=n.pts,64&i&&(n.dts=(14&t[e+14])<<27|(255&t[e+15])<<20|(254&t[e+16])<<12|(255&t[e+17])<<5|(254&t[e+18])>>>3,n.dts*=4,n.dts+=(6&t[e+18])>>>1)),n},videoPacketContainsKeyFrame:function(t){for(var e=4+s(t),i=t.subarray(e),n=0,r=0,a=!1;r<i.byteLength-3;r++)if(1===i[r+2]){n=r+5
break}for(;n<i.byteLength;)switch(i[n]){case 0:if(0!==i[n-1]){n+=2
break}if(0!==i[n-2]){n++
break}r+3!==n-2&&"slice_layer_without_partitioning_rbsp_idr"===o(31&i[r+3])&&(a=!0)
do{n++}while(1!==i[n]&&n<i.length)
r=n-2,n+=3
break
case 1:if(0!==i[n-1]||0!==i[n-2]){n+=3
break}"slice_layer_without_partitioning_rbsp_idr"===o(31&i[r+3])&&(a=!0),r=n-2,n+=3
break
default:n+=3}return i=i.subarray(r),n-=r,r=0,i&&i.byteLength>3&&"slice_layer_without_partitioning_rbsp_idr"===o(31&i[r+3])&&(a=!0),a}}},function(t,e,i){"use strict"
var n=[96e3,88200,64e3,48e3,44100,32e3,24e3,22050,16e3,12e3,11025,8e3,7350],r=function(t){return t[0]<<21|t[1]<<14|t[2]<<7|t[3]},a=function(t,e,i){return unescape(function(t,e,i){var n,r=""
for(n=e;n<i;n++)r+="%"+("00"+t[n].toString(16)).slice(-2)
return r}(t,e,i))}
t.exports={parseId3TagSize:function(t,e){var i=t[e+6]<<21|t[e+7]<<14|t[e+8]<<7|t[e+9]
return(16&t[e+5])>>4?i+20:i+10},parseAdtsSize:function(t,e){var i=(224&t[e+5])>>5,n=t[e+4]<<3
return 6144&t[e+3]|n|i},parseType:function(t,e){return t[e]==="I".charCodeAt(0)&&t[e+1]==="D".charCodeAt(0)&&t[e+2]==="3".charCodeAt(0)?"timed-metadata":!0&t[e]&&240==(240&t[e+1])?"audio":null},parseSampleRate:function(t){for(var e=0;e+5<t.length;){if(255===t[e]&&240==(246&t[e+1]))return n[(60&t[e+2])>>>2]
e++}return null},parseAacTimestamp:function(t){var e,i,n
e=10,64&t[5]&&(e+=4,e+=r(t.subarray(10,14)))
do{if((i=r(t.subarray(e+4,e+8)))<1)return null
if("PRIV"===String.fromCharCode(t[e],t[e+1],t[e+2],t[e+3])){n=t.subarray(e+10,e+i+10)
for(var s=0;s<n.byteLength;s++)if(0===n[s]){if("com.apple.streaming.transportStreamTimestamp"===a(n,0,s)){var o=n.subarray(s+1),u=(1&o[3])<<30|o[4]<<22|o[5]<<14|o[6]<<6|o[7]>>>2
return(u*=4)+(3&o[7])}break}}e+=10,e+=i}while(e<t.byteLength)
return null}}}]])
