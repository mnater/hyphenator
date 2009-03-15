﻿;var Hyphenator=function(){var v="da, bn, de, en, es, fi, fr, gu, hi, it, ka, ml, nl, or, pa, pl, ru, sv, ta, te";var b=function(){var P,Q=0,O=v.split(", "),R={};while(!!(P=O[Q++])){R[P]=true;}return R;}();var y={da:"Denne websides sprog kunne ikke bestemmes. Angiv venligst sprog:",de:"Die Sprache dieser Webseite konnte nicht automatisch bestimmt werden. Bitte Sprache angeben:",en:"The language of this website could not be determined automatically. Please indicate main language:",es:"El idioma del sitio no pudo determinarse autom%E1ticamente. Por favor, indique el idioma principal:",fr:"La langue de ce site n%u2019a pas pu %EAtre d%E9termin%E9e automatiquement. Veuillez indiquer une langue, s.v.p.%A0:",nl:"De taal van deze website kan niet automatisch worden bepaald. Geef de hoofdtaal op:",sv:"Spr%E5ket p%E5 den h%E4r webbplatsen kunde inte avg%F6ras automatiskt. V%E4nligen ange:",ml:"ഈ വെ%u0D2C%u0D4D%u200Cസൈറ്റിന്റെ ഭാഷ കണ്ടുപിടിയ്ക്കാ%u0D28%u0D4D%u200D കഴിഞ്ഞില്ല. ഭാഷ ഏതാണെന്നു തിരഞ്ഞെടുക്കുക:",it:"Lingua del sito sconosciuta. Indicare una lingua, per favore:",ru:"Язык этого сайта не может быть определен автоматически. Пожалуйста укажите язык:",fi:"Sivun kielt%E4 ei tunnistettu automaattisesti. M%E4%E4rit%E4 sivun p%E4%E4kieli:"};var k=function(){var Q=document.getElementsByTagName("script"),P=0,R,S,O;while(!!(O=Q[P++])){if(!O.src){continue;}S=O.src;R=S.indexOf("Hyphenator.js");if(R!==-1){return S.substring(0,R);}}return"http://hyphenator.googlecode.com/svn/branches/Version2/";}();var e=function(){var O=false;if(k.indexOf(window.location.hostname)!==-1){O=true;}return O;}();var E=false;var w={script:true,code:true,pre:true,img:true,br:true,samp:true,kbd:true,"var":true,abbr:true,acronym:true,sub:true,sup:true,button:true,option:true,label:true,textarea:true};var q=true;var x=true;var c=false;var l="hyphenate";var H="donthyphenate";var K=6;var t=function(){var S=null,R=false;var Q=document.getElementsByTagName("script");for(var P=0,O=Q.length;P<O;P++){if(!!Q[P].getAttribute("src")){S=Q[P].getAttribute("src");}if(!S){continue;}else{if(S.indexOf("Hyphenator.js?bm=true")!==-1){R=true;}}}return R;}();var A=null;var f=[];var n={};var a={};var N=0;var h="(\\w*://)((\\w*:)?(\\w*)@)?([\\w\\.]*)?(:\\d*)?(/[\\w#!:\\.?\\+=&%@!\\-]*)*";var g="[\\w-\\.]+@[\\w\\.]+";var C=new RegExp(h,"i");var F=new RegExp(g,"i");var G=function(){var O=navigator.userAgent.toLowerCase();if(O.indexOf("msie 6")===-1&&O.indexOf("msie 8")===-1){G=String.fromCharCode(8203);}else{G="";}return G;}();var I=function(){};var p=function(O){alert("Hyphenator.js says:\n\nAn Error ocurred:\n"+O.message);};var M=function(){var Q,R=[],P,O;if(document.getElementsByClassName){R=document.getElementsByClassName(l);}else{Q=document.getElementsByTagName("*");O=Q.length;for(P=0;P<O;P++){if(Q[P].className.indexOf(l)!==-1&&Q[P].className.indexOf(H)===-1){R.push(Q[P]);}}}return R;};var d="hidden";var r=String.fromCharCode(173);var s=G;function o(O,R){var U=O.document,S="DOMContentLoaded",Q=O.navigator.userAgent.toLowerCase(),P=parseFloat(Q.match(/.+(?:rv|it|ml|ra|ie)[\/: ]([\d.]+)/)[1]);function T(W){if(!E){E=true;R((W.type&&W.type===S)?W:{type:S,target:U,eventPhase:0,currentTarget:U,timeStamp:new Date().getTime(),eventType:W.type||W});}}if(/webkit\//.test(Q)&&P<525.13){(function(){if(/complete|loaded/.test(U.readyState)){T("khtml-poll");}else{setTimeout(arguments.callee,10);}})();}else{if(/msie/.test(Q)&&!O.opera){U.attachEvent("onreadystatechange",function(W){if(U.readyState==="complete"){U.detachEvent("on"+W.type,arguments.callee);T(W);}});if(O==top){(function(){try{U.documentElement.doScroll("left");}catch(W){setTimeout(arguments.callee,10);return;}T("msie-poll");})();}}else{if(U.addEventListener&&(/opera\//.test(Q)&&P>9)||(/gecko\//.test(Q)&&P>=1.8)||(/khtml\//.test(Q)&&P>=4)||(/webkit\//.test(Q)&&P>=525.13)){U.addEventListener(S,function(W){U.removeEventListener(S,arguments.callee,false);T(W);},false);}else{var V=O.onload;O.onload=function(W){T(W||O.event);if(typeof V==="function"){V(W||O.event);}};}}}}function z(P,Q){if(!!P.getAttribute("lang")){return P.getAttribute("lang").substring(0,2);}try{if(!!P.getAttribute("xml:lang")){return P.getAttribute("xml:lang").substring(0,2);}}catch(O){}if(P.tagName!="HTML"){return z(P.parentNode,true);}if(Q){return A;}return null;}function u(){var R=document.getElementsByTagName("html")[0];A=z(R);if(!A){var O=document.getElementsByTagName("meta");for(var Q=0;Q<O.length;Q++){if(!!O[Q].getAttribute("http-equiv")&&(O[Q].getAttribute("http-equiv")==="content-language")){A=O[Q].getAttribute("content").substring(0,2);}if(!!O[Q].getAttribute("name")&&(O[Q].getAttribute("name")==="DC.language")){A=O[Q].getAttribute("content").substring(0,2);}if(!!O[Q].getAttribute("name")&&(O[Q].getAttribute("name")==="language")){A=O[Q].getAttribute("content").substring(0,2);}}}if(!A){var U="";var P=navigator.language?navigator.language:navigator.userLanguage;P=P.substring(0,2);if(y.hasOwnProperty(P)){U=y[P];}else{U=y.en;}U+=" (ISO 639-1)\n\n"+v;var T=window.prompt(unescape(U),P);if(b[T]){A=T;}else{var S=new Error('The language "'+T+'" is not yet supported.');throw S;}}}function B(){var O,Q,P=0;var R=function(U,T){var V,W,S=0;if(T){U.style.visibility=d;}if(U.lang){V=U.lang;}else{V=z(U,true);U.lang=V;}if(b[V]){if(!Hyphenator.languages.hasOwnProperty(V)){a[V]=true;}}else{p(new Error("Language "+V+" is not yet supported."));}f.push(U);while(!!(W=U.childNodes[S++])){if(W.nodeType===1&&!w[W.nodeName.toLowerCase()]&&W.className.indexOf(H)===-1&&!(W in O)){R(W,false);}}};if(Hyphenator.isBookmarklet()){O=document.getElementsByTagName("body")[0];R(O,false);}else{O=M();while(!!(Q=O[P++])){R(Q,true);}}if(!Hyphenator.languages.hasOwnProperty(A)){a[A]=true;}else{if(!Hyphenator.languages[A].prepared){a[A]=true;}}if(f.length>0){f[f.length-1].isLast=true;}}function i(U){var R,T,S,O,Q,P={};S=Hyphenator.languages[U].patterns;for(R in S){if(S.hasOwnProperty(R)){R=parseInt(R,10);T=0;while(!!(O=S[R].substr(T,R))){Q=O.replace(/\d/g,"");P[Q]=O;T+=R;}}}Hyphenator.languages[U].patterns=P;Hyphenator.languages[U].patternsConverted=true;}function D(O){var Q=O.split(", ");var T={};for(var S=0,P=Q.length;S<P;S++){var R=Q[S].replace(/-/g,"");if(!T.hasOwnProperty(R)){T[R]=Q[S];}}return T;}function j(T){if(b[T]&&!Hyphenator.languages[T]){var P=k+"patterns/"+T+".js";}else{return;}if(e&&!t){var S=null;if(typeof XMLHttpRequest!="undefined"){S=new XMLHttpRequest();}if(!S){try{S=new ActiveXObject("Msxml2.XMLHTTP");}catch(R){S=null;}}if(S){S.open("HEAD",P,false);S.setRequestHeader("Cache-Control","no-cache");S.send(null);if(S.status==404){p(new Error("Could not load\n"+P));delete a[T];return;}}}if(document.createElement){var Q=document.getElementsByTagName("head").item(0);var O=document.createElement("script");O.src=P;O.type="text/javascript";Q.appendChild(O);}}function L(P){var O=Hyphenator.languages[P];if(!O.prepared){if(q){O.cache={};}if(O.hasOwnProperty("exceptions")){Hyphenator.addExceptions(P,O.exceptions);delete O.exceptions;}if(n.hasOwnProperty("global")){if(n.hasOwnProperty(P)){n[P]+=", "+n.global;}else{n[P]=n.global;}}if(n.hasOwnProperty(P)){O.exceptions=D(n[P]);delete n[P];}else{O.exceptions={};}i(P);O.prepared=true;}}function J(R){var Q,P=true;if(!x){for(Q in Hyphenator.languages){if(Hyphenator.languages.hasOwnProperty(Q)){L(Q);}}N=2;R();return;}N=1;for(Q in a){if(a.hasOwnProperty(Q)){j(Q);P=false;}}if(P){N=2;R();return;}var O=window.setInterval(function(){var S=false;for(var T in a){if(a.hasOwnProperty(T)){if(!Hyphenator.languages[T]){S=false;break;}else{S=true;delete a[T];L(T);}}}if(S){window.clearInterval(O);N=2;R();}},100);}var m=function(S){var T;if(!!(T=document.getElementById("HyphenatorToggleBox"))){if(S){T.firstChild.data="Hy-phe-na-ti-on";}else{T.firstChild.data="Hyphenation";}}else{var R,O,Q,P;R=document.getElementsByTagName("body")[0];T=document.createElement("div");O=document.createAttribute("id");O.nodeValue="HyphenatorToggleBox";P=document.createAttribute("class");P.nodeValue=H;Q=document.createTextNode("Hy-phe-na-ti-on");T.appendChild(Q);T.setAttributeNode(O);T.setAttributeNode(P);T.onclick=Hyphenator.toggleHyphenation;T.style.position="absolute";T.style.top="0px";T.style.right="0px";T.style.margin="0";T.style.backgroundColor="#AAAAAA";T.style.color="#FFFFFF";T.style.font="6pt Arial";T.style.letterSpacing="0.2em";T.style.padding="3px";T.style.cursor="pointer";T.style.WebkitBorderBottomLeftRadius="4px";T.style.MozBorderRadiusBottomleft="4px";R.appendChild(T);}};return{version:"2.0.0",languages:{},config:function(Q){var O=function(R,S){if(typeof Q[R]===S){return true;}else{p(new Error("Config onError: "+R+" must be of type "+S));return false;}};var P;for(P in Q){if(Q.hasOwnProperty(P)){switch(P){case"classname":if(O("classname","string")){l=Q.classname;}break;case"donthyphenateclassname":if(O("donthyphenateclassname","string")){H=Q.donthyphenateclassname;}break;case"minwordlength":if(O("minwordlength","number")){K=Q.minwordlength;}break;case"hyphenchar":if(O("hyphenchar","string")){if(Q.hyphenchar==="&shy;"){Q.hyphenchar=String.fromCharCode(173);}r=Q.hyphenchar;}break;case"urlhyphenchar":if(Q.hasOwnProperty("urlhyphenchar")){if(O("urlhyphenchar","string")){s=Q.urlhyphenchar;}}break;case"togglebox":if(O("togglebox","function")){m=Q.togglebox;}break;case"displaytogglebox":if(O("displaytogglebox","boolean")){c=Q.displaytogglebox;}break;case"remoteloading":if(O("remoteloading","boolean")){x=Q.remoteloading;}break;case"enablecache":if(O("enablecache","boolean")){q=Q.enablecache;}break;case"onhyphenationdonecallback":if(O("onhyphenationdonecallback","function")){I=Q.onhyphenationdonecallback;}break;case"onerrorhandler":if(O("onerrorhandler","function")){p=Q.onerrorhandler;}break;case"intermediatestate":if(O("intermediatestate","string")){d=Q.intermediatestate;}break;case"selectorfunction":if(O("selectorfunction","function")){M=Q.selectorfunction;}break;default:p(new Error("Hyphenator.config: property "+P+" not known."));}}}},run:function(){var O=function(){try{u();B();J(Hyphenator.hyphenateDocument);if(c){m(true);}}catch(P){p(P);}};if(!E){o(window,O);}if(Hyphenator.isBookmarklet()||E){O();}},addExceptions:function(P,O){if(P===""){P="global";}if(n.hasOwnProperty[P]){n[P]+=", "+O;}else{n[P]=O;}},isBookmarklet:function(){return t;},hyphenateDocument:function(){function Q(T,R,S){return function(){var U=T[R];return U.call(T,S);};}var O=0,P;while(!!(P=f[O++])){window.setTimeout(Q(Hyphenator,"hyphenateElement",P),0);}},removeHyphenationFromDocument:function(){var O=0,P;while(!!(P=f[O++])){Hyphenator.removeHyphenationFromElement(P);}N=4;},hyphenateElement:function(R,T){if(!T){T=R.lang;}if(Hyphenator.languages.hasOwnProperty(T)){var O="[\\w"+Hyphenator.languages[T].specialChars+"@"+String.fromCharCode(173)+"-]{"+K+",}";var S=function(V){if(C.test(V)||F.test(V)){return Hyphenator.hyphenateURL(V);}else{return Hyphenator.hyphenateWord(T,V);}};var Q=new RegExp("("+h+")|("+g+")|("+O+")","gi");var U,P=0;while(!!(U=R.childNodes[P++])){if(U.nodeType===3&&U.data.length>=K){U.data=U.data.replace(Q,S);}}}R.style.visibility="visible";if(R.isLast){N=3;I();}},removeHyphenationFromElement:function(Q){var P,O=0,R;switch(r){case"|":P="\\|";break;case"+":P="\\+";break;case"*":P="\\*";break;default:P=r;}while(!!(R=Q.childNodes[O++])){if(R.nodeType===3){R.data=R.data.replace(new RegExp(P,"g"),"");R.data=R.data.replace(new RegExp(G,"g"),"");}else{if(R.nodeType===1){Hyphenator.removeHyphenationFromElement(R);}}}},hyphenateWord:function(ak,ai){var T=Hyphenator.languages[ak];if(ai===""){return"";}if(ai.indexOf(r)!==-1){return ai;}if(T.exceptions.hasOwnProperty(ai)){return T.exceptions[ai].replace(/-/g,r);}if(q&&T.cache.hasOwnProperty(ai)){return T.cache[ai];}if(ai.indexOf("-")!==-1){var ae=ai.split("-");for(var ah=0,ag=ae.length;ah<ag;ah++){ae[ah]=Hyphenator.hyphenateWord(ak,ae[ah]);}return ae.join("-"+G);}var W="_"+ai+"_";var Q=W.length;var aa=W.split("");W=W.toLowerCase();var X=[];var ac,O,R,ab,Y=false,Z,aj,V,S;var af={"0":true,"1":true,"2":true,"3":true,"4":true,"5":true,"6":true,"7":true,"8":true,"9":true};var ad=Q-T.shortestPattern;for(ac=0;ac<=ad;ac++){O=Math.min((Q-ac),T.longestPattern);for(R=T.shortestPattern;R<=O;R++){if(T.patterns.hasOwnProperty(ab=W.substr(ac,R))){Y=T.patterns[ab];}else{continue;}V=1;Z=Y.length;for(ah=0;ah<Z;ah++){aj=Y.charAt(ah);if(af[aj]){if(ah===0){S=ac-1;if(!X[S]||X[S]<aj){X[S]=aj;}}else{S=ac+ah-V;if(!X[S]||X[S]<aj){X[S]=aj;}}V++;}}}}var P=0;for(ah=T.leftmin;ah<=(ai.length-T.rightmin);ah++){if(!!(X[ah]&1)){aa.splice(ah+P+1,0,r);P++;}}var U=aa.slice(1,-1).join("");if(q){T.cache[ai]=U;}return U;},hyphenateURL:function(O){return O.replace(/([:\/\.\?#&_,;!@]+)/gi,"$&"+s);},toggleHyphenation:function(){switch(N){case 3:Hyphenator.removeHyphenationFromDocument();m(false);break;case 4:Hyphenator.hyphenateDocument();m(true);break;}}};}();if(Hyphenator.isBookmarklet()){Hyphenator.config({displaytogglebox:true});Hyphenator.run();}