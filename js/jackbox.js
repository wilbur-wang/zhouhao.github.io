/**
 * @package WordPress
 * @subpackage Increase
 * @since Increase 1.0
 * 
 * JackBox - jQuery Lightbox Plugin
 * Changed by CMSMasters
 * 
 */

/* --------------------------------------------- */
/* Author: http://codecanyon.net/user/CodingJack */
/* --------------------------------------------- */


function jackboxFrameReady(){$.fn.jackBox("frameReady")}(function(e){function vr(){qt=e(window);Zt=e("body");En=e("body, html");_t=e("<div />").addClass("jackbox-modal");en=e("<div />").addClass("jackbox-holder");wt=e("<div />").addClass("jackbox-wrapper");tt=e("<div />").addClass("jackbox-preloader");G=e("<span />").addClass("jackbox-panel jackbox-panel-left");$=e("<span />").addClass("jackbox-panel jackbox-panel-right");var t=jt.createDocumentFragment();t.appendChild(wt[0]);t.appendChild(tt[0]);_t[0].appendChild(t);t=jt.createDocumentFragment();t.appendChild(G[0]);t.appendChild($[0]);t.appendChild(en[0]);wt[0].appendChild(t);et=e("<div />").addClass("jackbox-container");if(!$t){K=e("<span />").addClass("jackbox-pre-inside").appendTo(tt)}n*=2;Q=0;t=jt.createDocumentFragment();if(!!g){U=e(g).hide();t.appendChild(U[0])}t.appendChild(et[0]);if(!!y){w=e(y).hide();t.appendChild(w[0])}en[0].appendChild(t);k=-(zn+r);rt=[];Ht=[];Vt=[];zt=[];tn.each(mr);if(An){e.address.internalChange(wr);e.address.externalChange(br)}Un=true;if(Gt){An?setTimeout(Gt,250):Gt();Gt=null}tn=Ht=g=y=rt=null}function mr(){var t=e(this).attr("data-group").split(" ").join("").toLowerCase();if(!$t){if(zt.indexOf(t)===-1)gr(t)}else{var n=zt.length,r=false;while(n--){if(zt[n]===t){r=true;break}}if(!r)gr(t)}}function gr(t){zt[zt.length]=t;Ht=[];e(".jackbox[data-group="+t+"]").each(yr);Vt[Vt.length]=Ht;Yn++}function yr(t){if(!isNaN(t)){Pt=e(this).data({id:t,cat:Yn});Ht[t]=Pt}else{Pt=t}Ft=Pt.attr("href")||Pt.attr("data-href");if(!Ft)return;var n,r;if(Ft.charAt(0)!=="#"){n=Ft.toLowerCase().split(".").pop()}else{n="inline"}r=mi(Ft,n);if(r){Pt.data("type",r);if(!Pt.attr("data-thumbnail")){if(r==="vimeo"){fi(Pt,Ft)}else if(r==="youtube"){Pt.attr("data-thumbnail","http://img.youtube.com/vi/"+Ft.split("http://www.youtube.com/watch?v=")[1]+"/1.jpg")}}}else if(vi(n)){Pt.data("type","image")}else{switch(n){case"mp3":Pt.data("type","audio");break;case"swf":Pt.data("type","swf");break;case"inline":Pt.data("type","inline");break;default:Pt.data("type","iframe")}}Pt.on("click.jackbox",xr);yn=Pt.attr("data-description");if(!yn)return;if(rt){var i=rt.indexOf(yn);if(i===-1){yn=e(yn);if(!yn.length)return;rt[rt.length]=yn}else{yn=rt[i]}}else{yn=e(yn);if(!yn.length)return}Pt.data("description",yn)}function br(e){if(er){er=false;var t=jt.URL,n=t.split("?url=");if(n.length===2){window.location=n[0]+"#/"+n[1];return}}clearTimeout(sn);Er(e.value);if(Gn!==-1){if(Zn){Zn=false;wr()}else{sn=setTimeout(wr,750)}}else if(bn){ni()}}function wr(e){if(typeof e==="object"){clearTimeout(sn);Er(e.value)}if(Gn!==-1){Ar()}else if(bn){ni()}}function Er(e){if(Nn&&!Tn&&!jn)Yt[Qn].removeClass("jb-thumb-active");if(e!=="/"){var t=e.split("/");if(t.length===3){Qn=parseInt(t[2],10)-1;if(isNaN(Qn))Qn=0;Xt=t[1]}else{if(isNaN(t[1])){Qn=0;Xt=t[1]}else{Qn=parseInt(t[1],10)-1;Xt="/"}}}else{Xt="/";Qn=0}if(Xt!=="/"){var n=Yn;while(n--){if(zt[n]===Xt){Gn=n;Rt=Vt[Gn].length;xt=Rt!==1;break}}}else{Gn=-1}jn=false}function Sr(){clearTimeout(b);b=setTimeout(pr,100)}function xr(t){t.stopPropagation();t.preventDefault();var n=e(this).data();Tr(n.cat,n.id,true)}function Tr(t,n,r){clearTimeout(sn);if(!r)Br();if(An){e.address.value(zt[t]+"/"+(n+1))}else{if(Nn&&!Tn&&!jn)Yt[Qn].removeClass("jb-thumb-active");Qn=n;Gn=t;Rt=Vt[Gn].length;xt=Rt!==1;Ar()}}function Nr(e){if(e){e.stopPropagation();if(xn)return false}if(!bn)return;if(Nn&&!Tn)Yt[Qn].removeClass("jb-thumb-active");Qn<Vt[Gn].length-1?Qn++:Qn=0;jn=true;Tr(Gn,Qn)}function Cr(e){if(e){e.stopPropagation();if(xn)return false}if(!bn)return;if(Nn&&!Tn)Yt[Qn].removeClass("jb-thumb-active");Qn>0?Qn--:Qn=Vt[Gn].length-1;jn=true;Tr(Gn,Qn)}function kr(){var e=[_t[0],wt[0],en[0],et[0]],t=4;while(t--){e[t].addEventListener("touchstart",oi,false);e[t].addEventListener("touchmove",oi,false);e[t].addEventListener("touchend",oi,false)}}function Lr(){var e=[_t[0],wt[0],en[0],et[0]],t=4;while(t--){e[t].removeEventListener("touchstart",oi,false);e[t].removeEventListener("touchmove",oi,false);e[t].removeEventListener("touchend",oi,false)}}function Ar(){Ln=Vt[Gn];Pt=Ln[Qn];if(!Pt)return;if(Lt)kr();Ft=Pt.attr("href")||Pt.attr("data-href");if(bn){xn=true;Zr();Dr()}else{bn=true;if(!Lt){En.stop();Q=qt.scrollTop()}else{jt.addEventListener("touchmove",oi,false)}_t.appendTo(Zt).one("click.jackbox",ei);vn=_t.parents().each(Or);if(!wn){wn=true;_=parseInt(en.css("padding-left"),10)+parseInt(en.css("padding-right"),10);M=parseInt(en.css("padding-top"),10)+parseInt(en.css("padding-bottom"),10);H=parseInt(G.css("width"),10)+14;At=M+n;N=zn+(r<<1);Tt=parseInt(tt.css("margin-top"),10);Pn=Tt-(N>>1);S=parseInt(en.css("padding-left"),10);x=parseInt(en.css("padding-top"),10);J=e(".jackbox-fullscreen");if(!J.length)J=null;E=!Lt&&mn!=="safari"&&("webkitRequestFullScreen"in _t[0]||"mozFullScreenEnabled"in jt)}ft=!$n&&Sn&&xt?0:k;ln=qt.width();cn=qt.height();en.css({width:ln,height:cn,marginLeft:-(ln>>1)-S,marginTop:-(cn>>1)-x});Jacked.fadeIn(_t[0],{callback:_r});Qt=setTimeout(Dr,250);wt.on("click.jackbox",yi)}}function Or(){e(this).addClass("jackbox-overflow")}function Mr(){e(this).removeClass("jackbox-overflow")}function _r(){qt[0].scrollTo(0,0)}function Dr(){if(!B&&K){K.addClass("jackbox-pre-ready");B=true}if(Nn){Yt[Qn].addClass("jb-thumb-active");Tn?Tn=false:cr(false,true)}var t=Pt.attr("data-autoplay")?Pt.attr("data-autoplay"):qn,n=Pt.data("description")||null,r=Pt.attr("title")||"",i;Ct=Pt.attr("data-scaleUp")==="true";ht=n?n.html():false;dn=Pt.data("type");if(r){st=r;Y=escape(st)}else{Y=false;if(typeof Dt!=="undefined"){if(Dt.data("links"))Dt.data("links").off(".jackbox");Dt.empty()}}if(Lt)ot=dn==="image"||dn==="inline";if(dn!=="image")Gr();if(ln>568){tt.css("margin-top",ft===0?Pn:Tt)}else{tt.css("margin-top",Tt)}wt.show();tt.addClass("jackbox-spin-preloader");switch(dn){case"image":fn=true;un=e("<img />").addClass("jackbox-content").one("load.jackbox",rr).prependTo(et);if(Lt){un[0].addEventListener("touchstart",oi,false);un[0].addEventListener("touchmove",oi,false);un[0].addEventListener("touchend",oi,false)}un.attr("src",Ft);break;case"youtube":nr(m.split("{url}").join(Ft.split("watch?v=")[1]).split("{autoplay}").join(t==="true"?1:0));break;case"vimeo":nr(v.split("{url}").join(Ft.substring(Ft.lastIndexOf("/"))).split("{autoplay}").join(t));break;case"local":var s=Pr(),o=Pt.attr("data-flashHasPriority")?Pt.attr("data-flashHasPriority"):Wn.toString();i=o==="false"&&E&&mn!=="firefox";if(Pt.attr("data-poster")){s+=Pt.attr("data-poster")}else{s="false"}nr(h+"?video="+Ft+"&autoplay="+t+"&flashing="+o+"&width="+nn+"&height="+an+"&poster="+s,true);break;case"audio":Pr();nr(p+"?audio="+Ft+"&title="+(Pt.attr("data-audiotitle")?Pt.attr("data-audiotitle"):Y)+"&autoplay="+t);break;case"swf":Pr();nr(l+"?swf="+Ft+"&width="+(It.toString()+"&height="+Wt.toString()));break;case"inline":var u=e(Ft);un=e("<div />").addClass("jackbox-content jackbox-html").html(u.length?u.html():"").prependTo(et);un.css("width",It);Pt.attr("data-height",un.outerHeight(true));Gr();rr();break;default:nr(Ft,false,true)}if(!E)return;!i?J.show():J.hide()}function Pr(){if(Ft.search("http")!==-1)return;var e=jt.URL.split("#")[0];if(e[e.length-1]!=="/"){e=e.substring(0,e.lastIndexOf("/")+1)}Ft=e+Ft;return e}function Hr(){if(Nn){var e=Yt.length;while(e--)Yt[e].on("click.jackbox",Xr)}G.on("click.jackbox",Cr);$.on("click.jackbox",Nr);if(Lt&&ot)un.cjSwipe("touchSwipe",si)}function Br(){if(Nn){var e=Yt.length;while(e--)Yt[e].off("click.jackbox")}G.off(".jackbox");$.off(".jackbox");if(Lt&&ot)un.cjSwipe("unbindSwipe")}function jr(){P.css("visibility","hidden")}function Fr(){var t=jt.createDocumentFragment(),n=zn>>1;_n=e("<div />").addClass("jackbox-thumb-holder").css("height",zn).appendTo(_t);I=e("<div />").addClass("jackbox-thumb-panel").css("height",zn);R=e("<div />").addClass("jackbox-thumb-right");Z=e("<div />").addClass("jackbox-thumb-left");t.appendChild(I[0]);t.appendChild(R[0]);t.appendChild(Z[0]);I[0].cjThumbs=true;_n[0].appendChild(t);F=e("<div />").addClass("jackbox-thumb-strip").appendTo(I);Z.css("top",n);R.css("top",n)}function Ir(){var t=Vt[Gn],n=[],r=Rt,i,s,o,u,a,f,l,h,p;In=true;while(r--){o=t[r];if(o.attr("data-thumbnail")){n[r]=false;continue}a=o.children("img");if(a.length){o.attr("data-thumbnail",a.attr("src"));n[r]=a}else if(o.data("type")==="image"){o.attr("data-thumbnail",o.attr("href")||o.attr("data-href"));n[r]=false}else{o.attr("data-thumbnail",c);n[r]=false}}Yt=[];if(!_n)Fr();u=jt.createDocumentFragment();for(r=0;r<Rt;r++){s=Yt[r]=e("<div />").data("id",r).addClass("jackbox-thumb").css({width:Rn,height:zn,left:gn*r}).on("click.jackbox",Xr);if(vt){i=Ln[r].attr("data-thumbTooltip")||Ln[r].attr("title");if(i)s.data("theTitle",i).on("mouseenter.jackbox",ar).on("mouseleave.jackbox",Rr)}u.appendChild(s[0]);f=e("<img />").addClass("jb-thumb").one("load.jackbox",Wr).appendTo(s);s.data("theThumb",f);if(n[r]){l=n[r].attr("width")||n[r].width();h=n[r].attr("height")||n[r].height()}else{l=Rn;h=zn}if(l>Rn&&h>zn){p=l<h?h/l:l/h;l=Rn*p;h=zn*p;if(l!==(l|0))l=l+1|0;if(h!==(h|0))h=h+1|0}f.attr({width:l,height:h,src:t[r].attr("data-thumbnail")})}F[0].appendChild(u);D=Yt.length;q=gn*r;Nn=true;bt=0;_n.on("click.jackbox",yi).show();lr();if(!lt)return;if(!$n){X.hide();V.show();_n.css("bottom",0)}else{V.hide();X.show();_n.css("bottom",ft)}lt.on("click.jackbox",fr)}function qr(){I.data("offLeft",I.offset().left)}function Rr(){at.css({opacity:0,visibility:"hidden"})}function Ur(e){if(typeof e==="object")e.stopPropagation();if(bt<Rt-nt){bt++;hr(false,true)}}function zr(e){if(typeof e==="object")e.stopPropagation();if(bt>0){bt--;hr(false,true)}}function Wr(t){t.stopPropagation();var n=e(this).parent();n.addClass("jb-thumb-fadein");if(!Lt)n.addClass("jb-thumb-hover");if(n.data("id")===Qn)n.addClass("jb-thumb-active")}function Xr(t){t.stopPropagation();if(xn)return false;var n=e(this),r=n.data("id");if(r===Qn)return;if(Nn)Yt[Qn].removeClass("jb-thumb-active");Qn=r;Tn=true;Tr(Gn,Qn)}function Vr(){Dn=true;if(E)J.on("click.jackbox",$r);if(ct)ct.one("click.jackbox",ei);if(Bt)Bt.on("click.jackbox",ur);if(!xt)return;if(St)St.on("click.jackbox",Nr);if(Nt)Nt.on("click.jackbox",Cr);if(vt&&I)I.on("mouseenter.jackbox",qr)}function $r(){if(!L){qt.off(".jackbox");L=true;if(jt.mozFullScreenEnabled){jt.addEventListener("mozfullscreenchange",Jr,false);_t[0].mozRequestFullScreen()}else if(_t[0].webkitRequestFullScreen){jt.addEventListener("webkitfullscreenchange",Jr,false);_t[0].webkitRequestFullScreen()}}else{Qr()}}function Jr(){if(jt.webkitIsFullScreen||jt.mozFullScreen){pr()}else{Qr(true)}}function Kr(e){jt.removeEventListener(e.type,Kr,false);pr();qt.on("resize.jackbox",Sr)}function Qr(e){L=false;if(jt.mozFullScreenEnabled){jt.removeEventListener("mozfullscreenchange",Jr,false);if(e){pr();qt.on("resize.jackbox",Sr)}else{jt.addEventListener("mozfullscreenchange",Kr,false);jt.mozCancelFullScreen()}}else if(_t[0].webkitRequestFullScreen){jt.removeEventListener("webkitfullscreenchange",Jr,false);if(e){pr();qt.on("resize.jackbox",Sr)}else{jt.addEventListener("webkitfullscreenchange",Kr,false);jt.webkitCancelFullScreen()}}}function Gr(){fn=false;nn=Pt.attr("data-width")?parseInt(Pt.attr("data-width"),10):Jn;an=Pt.attr("data-height")?parseInt(Pt.attr("data-height"),10):Kn;Ct=Pt.attr("data-scaleUp")==="true";Yr()}function Yr(){hn=nn+_+H+n;pn=an+At;pr("true")}function Zr(){clearTimeout(Qt);Jacked.stopTween(en[0]);qt.off(".jackbox");if(un){Jacked.stopTween(un[0]);un.remove();un=null}if(Mn){Mn.remove();Mn=null}if(U){Jacked.stopTween(U[0],true);U.hide()}if(w){Jacked.stopTween(w[0],true);w.hide()}if(!Bt)return;Bt.removeClass("jb-info-inactive");Jacked.stopTween(z[0]);z.empty().hide()}function ei(t){t.stopPropagation();An?e.address.value(""):ni()}function ti(){Jacked.stopTween(_n[0]);_n.off(".jackbox").hide();var e;while(Yt.length){e=Yt[0];Jacked.stopTween(e[0]);e.remove();Yt.shift()}Z.off(".jackbox").hide();R.off(".jackbox").hide();if(Lt)I.cjSwipe("unbindSwipe");Jacked.stopTween(F[0]);F.empty().css("margin-left",0);if(lt){lt.off(".jackbox");if(lt){X.hide();V.show()}}Nn=Yt=null}function ni(){clearTimeout(sn);Zr();_t.unbind(".jackbox");if(xt){if(Nt)Nt.off(".jackbox");if(St)St.off(".jackbox");if(vt&&I)I.off(".jackbox");Jacked.stopTween($[0],true);Jacked.stopTween(G[0],true);var e={opacity:0,visibility:"hidden"};$.off(".jackbox").css(e);G.off(".jackbox").css(e)}else{if(pt)pt.show();if(lt)lt.show()}wt.hide().off(".jackbox");tt.removeClass("jackbox-spin-preloader");if(typeof Dt!=="undefined"){if(Dt.data("links"))Dt.data("links").off(".jackbox");Dt.empty()}if(E)J.off(".jackbox");if(ct)ct.unbind(".jackbox");if(Bt)Bt.off(".jackbox");if(Nn)ti();vn.each(Mr);Jacked.fadeOut(_t[0],{duration:1e3,callback:ii});en.css({marginLeft:Hn,marginTop:Cn});if(!Lt){setTimeout(ri,10)}else{Lr();jt.removeEventListener("touchmove",oi,false)}if(P)P.css("visibility","hidden");if(K)K.removeClass("jackbox-pre-ready");Pt=bn=L=Tn=kn=Dn=jn=In=ut=B=null}function ri(){if(Q!==0)En.animate({scrollTop:Q},{duration:300,queue:false})}function ii(){_t.detach()}function si(e){!e?Nr():Cr()}function oi(e){e.preventDefault()}function ui(){dt=true;Mt=e(".jb-total");Bt=e(".jackbox-info");gt=e(".jb-divider");Et=e(".jb-current");ct=e(".jackbox-close");Ot=e(".jackbox-title-text");Dt=e(".jackbox-title-txt");pt=e(".jackbox-controls");Nt=e(".jackbox-arrow-left");On=e(".jackbox-social");St=e(".jackbox-arrow-right");lt=e(".jackbox-button-thumbs");X=e(".jackbox-show-thumbs");V=e(".jackbox-hide-thumbs");if(!Dt.length)Dt=null;if(!Ot.length)Ot=null;if(!Nt.length)Nt=null;if(!gt.length)gt=null;if(!St.length)St=null;if(!pt.length)pt=null;if(!ct.length)ct=null;if(!On.length)On=null;if(!Et.length||!Mt.length)Et=null;if(E){e(".jackbox-ns").hide();if(!J.length)J=E=null}else if(J){J.hide()}if(Sn){if(lt.length&&X.length&&V.length){X.hide()}else{lt=X=V=null}}else{lt.hide();lt=X=V=null}if(Bt.length){P=e("<div />").addClass("jackbox-info-text").appendTo(et).css("visibility","hidden");z=e("<div />").addClass("jackbox-description-text").appendTo(P)}else{Bt=null}if(!vt)return;at=e("<span />").addClass("jackbox-thumb-tip").css("bottom",zn);T=e("<span />").addClass("jackbox-thumb-tip-text").text("render me").appendTo(at);at.appendTo(_t);O=(parseInt(at.css("padding-left"),10)<<1)-(r<<1)}function ai(t,n){if(bn||n.toLowerCase()!=="success"||!t)return;var r=t.length,i=document.URL;i=i.substring(0,i.lastIndexOf("/"));while(r--){e("<img />").attr("src",u+"/"+t[r].split("../").join(""))}}function fi(t,n){e.getJSON("http://vimeo.com/api/v2/video/"+n.split("http://vimeo.com/")[1]+".json?callback=?",{format:"json"},function(e){t.attr("data-thumbnail",e[0].thumbnail_small)})}function li(){var t=e(this),n=t.next("img"),r,i=n.attr("src");if(!n.length)return;r=e("<img />").attr({width:n.attr("width"),height:n.attr("height")}).data("parent",t).one("load.jackbox",ci).insertAfter(n);n.remove();r.attr("src",i)}function ci(){var t=e(this),n=t.data("parent"),r=parseInt(n.css("width"),10)||n.width(),i=parseInt(n.css("height"),10)||n.height(),s=e("<canvas />").addClass("jackbox-canvas-blur").attr({width:r,height:i}).insertBefore(n),o=Date.now(),u=o+1,a=o+2;t.attr("id",u);s.attr("id",a);StackBlurImage(u,a,29)}function hi(){var t=e(this);t.parent().data({tip:t,tipWidth:t.width()-27,tipHeight:t.height()+17}).on("mouseenter.jackbox",pi).on("mouseleave.jackbox",di)}function pi(){var t=e(this),n=t.offset(),r=t.data();r.tipX=n.left,r.tipY=n.top,r.tip.css({opacity:1,visibility:"visible"});t.on("mousemove.jackbox",dr)}function di(){var t=e(this).off("mousemove.jackbox");if(!$t){t.data("tip").css({opacity:0,visibility:"hidden"})}else{t.data("tip").css("opacity",0)}}function vi(e){return e==="jpg"||e==="png"||e==="jpeg"||e==="gif"}function mi(e,t){if(e.search("youtube.com")!==-1){return"youtube"}else if(e.search("vimeo.com")!==-1){return"vimeo"}else if(t==="mp4"){return"local"}else{return false}}function gi(e){e.stopImmediatePropagation()}function yi(t){if(!e(t.target).is("a")){t.stopPropagation();t.preventDefault()}}var t={useThumbs:true,deepLinking:true,autoPlayVideo:false,flashVideoFirst:false,defaultVideoWidth:960,defaultVideoHeight:540,thumbnailWidth:75,thumbnailHeight:50,useThumbTooltips:true,preloadGraphics:true,showInfoByDefault:false,thumbsStartHidden:false,fullscreenScalesContent:true,defaultShareImage:"jackbox/img/default_share.jpg"},n=10,r=2,i=160,s=200,o=21,u="jackbox",a="../img/graphics/",f=u+"/php/graphics.php",l="jackbox/modules/jackbox_swf.html",c="jackbox/img/thumbs/default.jpg",h="jackbox/modules/jackbox_video.html",p="jackbox/modules/jackbox_audio.html",d="jackbox/modules/jackbox_social.php",v="http://player.vimeo.com/video{url}?title=0&byline=0&portrait=0&autoplay={autoplay}&color=FFFFFF&wmode=transparent",m="http://www.youtube.com/embed/{url}?autoplay={autoplay}&autohide=1&hd=1&iv_load_policy=3&showinfo=0&showsearch=0&wmode=transparent",g='<div class="jackbox-top clearfix">'+'<div class="jackbox-social"></div>'+'<div class="jackbox-top-icons">'+'<span class="jackbox-fullscreen"><span class="jackbox-button jackbox-fs"></span><span class="jackbox-button jackbox-ns"></span></span>'+'<span class="jackbox-button jackbox-button-margin jackbox-close"></span>'+"</div>"+"<div />",y='<div class="jackbox-bottom clearfix">'+'<div class="jackbox-controls">'+'<span class="jackbox-button jackbox-arrow-left"></span>'+'<span class="jackbox-button jackbox-arrow-right"></span>'+"</div>"+'<div class="jackbox-title-text">'+'<span class="jb-current"></span><span class="jb-divider">/</span><span class="jb-total"></span>'+'<span class="jackbox-title-txt"></span>'+"</div>"+'<div class="jackbox-bottom-icons">'+'<span class="jackbox-button jackbox-info"></span>'+'<span class="jackbox-button-margin jackbox-button-thumbs"><span class="jackbox-button jackbox-hide-thumbs"></span><span class="jackbox-button jackbox-show-thumbs"></span></span>'+"</div>"+"</div>",b,w,E,S,x,T,N,C,k,L,A,O,M,_,D,P,H,B,j,F,I,q,R,U,z,W,X,V,$,J,K,Q,G,Y,Z,et,tt,nt,rt,it,st,ot,ut,at,ft,lt,ct,ht,pt,dt,vt,mt,gt,yt,bt,wt,Et,St,xt,Tt,Nt,Ct,kt,Lt,At,Ot,Mt,_t,Dt,Pt,Ht,Bt,jt,Ft,It,qt,Rt,Ut,zt,Wt,Xt,Vt,$t,Jt,Kt,Qt,Gt,Yt,Zt,en,tn,nn,rn,sn,on,un,an,fn,ln,cn,hn,pn,dn,vn,mn,gn,yn,bn,wn,En,Sn,xn,Tn,Nn,Cn,kn,Ln,An,On,Mn,_n,Dn,Pn,Hn,Bn,jn,Fn,In,qn,Rn,Un,zn,Wn,Xn,Vn,$n,Jn,Kn,Qn=1,Gn=-1,Yn=0,Zn=true,er=true,tr={init:function(n,i){if(!Bn){if(typeof Jacked==="undefined")return;if(i)e.extend(t,i);Sn=t.useThumbs;An=t.deepLinking;vt=t.useThumbTooltips;qn=t.autoPlayVideo;Rn=t.thumbnailWidth;on=t.fullscreenScalesContent;zn=t.thumbnailHeight;Wn=t.flashVideoFirst;Vn=t.showInfoByDefault;$n=t.thumbsStartHidden;Xn=t.defaultShareImage;Jn=t.defaultVideoWidth;Kn=t.defaultVideoHeight;jt=document;Bn=true;gn=Rn+r;rn=jt.URL.search("file:///")!==-1;Jacked.setEngines({ios:true,safari:true,opera:true,firefox:true});if(t.preloadGraphics&&!rn){e.getJSON(f+"?path="+a,ai)}tn=n;t=null;$t=Jacked.getIE();Lt=Jacked.getMobile();mn=Jacked.getBrowser();Ut=mn==="ie";if(typeof e.address!=="undefined"&&An){if(!Ut){e.address.init(vr)}else{vr();e.address.update()}}else{An=false;vr()}if(typeof StackBlurImage!=="undefined"&&!rn&&!$t){e(".jackbox-hover-blur").each(li)}e(".jackbox-tooltip").each(hi)}},frameReady:function(){if(bn)rr()},newItem:function(e,t){var n=zt.length,r=-1,i,s,o,u;if(t&&typeof t==="object"){var a,f,l;for(a in t){if(a!=="trigger"){f="data-"+a;l=t[a];e.attr(f,l);if(a==="group")o=l}}}else{t=null}if(!o)o=e.attr("data-group");if(!o)return;u=o.split(" ").join("").toLowerCase();while(n--){if(zt[n]===u){r=n;break}}if(r>-1){s=Vt[r];if(s.indexOf(e)!==-1){e.trigger("click");i=true}if(i)return;n=s.length;s[n]=e}else{r=zt.length;n=Vt.length;zt[r]=u;Yn++;Vt[n]=[e];n=0}yr(e);e.data({id:n,cat:r});if(t&&t.trigger)e.trigger("click")}},nr=function(){var t={type:"text/html",frameborder:0,mozallowfullscreen:"mozallowfullscreen",webkitallowfullscreen:"webkitallowfullscreen",allowfullscreen:"allowfullscreen"};return function(n,r,i){t.width=It;t.height=Wt;t.scrolling=!i?"no":"auto";un=e("<iframe />").attr(t).addClass("jackbox-content").prependTo(et);if(!r)un.one("load.jackbox",rr);un.attr("src",n)}}(),rr=function(){var e={};return function(t){if(t)t.stopPropagation();if(fn){nn=this.width||un.width();an=this.height||un.height();Yr()}e.width=It;e.height=Wt;un.css(e);ir(true);if(A)A();qt.on("resize.jackbox",Sr)}}(),ir=function(){var e={},t={},n={};return function(r){var i;if(r){if(It<260)Jt+=260-It;i=Math.max(It,260);if(i===ut&&Wt===it){sr();return}e.callback=sr;e.duration=ut?Math.abs(i-ut)>50||Math.abs(Wt-it)>50?600:300:600}else{i=It;n.width=i;e.duration=300;delete e.callback;if(U)Jacked.tween(U[0],n,e);if(w)Jacked.tween(w[0],n,e);n.height=Wt;Jacked.stopTween(un[0],true);Jacked.tween(un[0],n,e)}t.marginLeft=-((Jt>>1)+.5|0);t.marginTop=-((Kt>>1)+.5|0);t.height=Wt;t.width=i;if(!ut)t.opacity=1;Jacked.tween(en[0],t,e);ut=i;it=Wt}}(),sr=function(){var e={},t={opacity:1,visibility:"visible"};return function(){or();tt.removeClass("jackbox-spin-preloader");var n=Math.max(It,260);e.duration=600;if(fn&&!$t){Jacked.fadeIn(un[0],e)}else{un.show();if(dn==="audio"||dn==="local"){un[0].contentWindow.cjInit()}}e.duration=300;if(!$t){if(U){U.css("width",n);Jacked.fadeIn(U[0],e)}if(w){w.css("width",n);Jacked.fadeIn(w[0],e)}}else{if(U)U.css("width",n).show();if(w)w.css("width",n).show()}if(Bt&&ht){Bt.show();z.html(ht).show();W=-z.outerHeight();P.css("height",-W<Wt?-W:Wt);if(!Vn){yt=false;z.css("margin-top",W)}else{yt=true;Bt.addClass("jb-info-inactive");z.css("margin-top",0)}}else if(Bt){Bt.hide();z.hide()}xn=false;if(!Dn&&xt){G.css(t);$.css(t)}if(!In&&Sn&&xt)Ir();if(!Dn)Vr();if(Lt){un[0].removeEventListener("touchstart",oi,false);un[0].removeEventListener("touchmove",oi,false);un[0].removeEventListener("touchend",oi,false);Lr()}if(xt)Hr()}}(),or=function(){var t={type:"text/html",frameborder:0,mozallowfullscreen:"mozallowfullscreen",webkitallowfullscreen:"webkitallowfullscreen",allowfullscreen:"allowfullscreen",scrolling:"no"};return function(){if(!dt)ui();if(!xt){if(pt)pt.hide();if(lt)lt.hide()}if(Ot){if(Y==="false")Y=false;var n=Dt&&Y,r=n?" - ":"";if(Et&&xt){Et.text(Qn+1).show();Mt.html(Rt+r).show();if(gt)gt.show()}else{if(Mt)Mt.hide();if(Et)Et.hide();if(gt)gt.hide()}if(n){Dt.html(st);var i=Dt.children("a");if(i.length){i.on("click.jackbox",gi);Dt.data("links",i)}}}if(!On||rn)return;var u,a,f=jt.URL.split("#")[0],l=f.length-1;if(f.search("/")!==-1){if(f.charAt(l)!=="/"){An?a=f+"#/"+Xt+"/"+(Qn+1):a=f;f=f.substring(0,f.lastIndexOf("/"))}else{f=f.substring(0,l);An?a=f+"/#/"+Xt+"/"+(Qn+1):a=f}}if(fn){u=Pt.attr("href")||Pt.attr("data-href")}else{var c=Pt.children("img");u=c.length?c.attr("src"):Xn}if(u.search("http")===-1)u=u.charAt(0)!=="/"?f+"/"+u:f+u;if(An){t.width=s;t.height=o;t.src=d+"?url="+encodeURIComponent(a)+"&poster="+u+"&title="+(Y?escape(Y.replace(/(<([^>]+)>)/ig,"")):escape(jt.title));Mn=e("<iframe />").attr(t).appendTo(On)}else{Mn=false}}}(),ur=function(){var e={},t={duration:300};return function(n){if(n)n.stopPropagation();if(!yt){Bt.addClass("jb-info-inactive");P.css("visibility","visible");e.marginTop=0;delete t.callback}else{e.marginTop=W;t.callback=jr;Bt.removeClass("jb-info-inactive")}Jacked.tween(z[0],e,t);yt=!yt}}(),ar=function(){var t={opacity:1,visibility:"visible"};return function(){if(Lt){clearTimeout(kt);kt=setTimeout(Rr,2e3)}var n=e(this),r,i,s,o;T.text(n.data("theTitle"));r=parseInt(T.css("width"),10);o=I.data("offLeft");i=n.offset().left;s=o+I.width()-r-O;t.width=r;t.left=i<o?o:i>s?s:i;at.css(t)}}(),fr=function(){var e={},t={duration:300};return function(n){n.stopPropagation();if(ft===0){ft=k;if(lt){V.hide();X.show()}}else{ft=0;if(lt){X.hide();V.show()}}e.bottom=ft;Jacked.tween(_n[0],e,t);if(ln<569)return;pr("true");ir()}}(),lr=function(){var e={};return function(t){var n=ln-i;if(q<n){nt=D;Fn=false}else{nt=n/gn|0;Fn=true}C=gn*nt-r;j=nt-1;e.marginLeft=-(C>>1)-r;e.width=C;I.css(e);F.css("width",q);cr(t)}}(),cr=function(){var e={},t={duration:300};return function(n,r){if(n){bt=Qn;if(Qn!==0&&Qn+nt>Rt)bt=Rt-nt;Jacked.stopTween(F[0]);F.css("left",bt*-gn)}else{if(Qn===0){bt=0}else if(Qn>bt+j){while(Qn>bt+j)bt++}if(r){e.left=bt*-gn;Jacked.tween(F[0],e,t)}else{Jacked.stopTween(F[0]);F.css("left",bt*-gn)}}hr(n,false)}}(),hr=function(){var e={},t={duration:300};return function(n,r){Z.off(".jackbox");R.off(".jackbox");if(!Fn){Z.hide();R.hide()}else{if(Lt)I.cjSwipe("unbindSwipe");if(bt<Rt-nt){R.on("click.jackbox",Ur).show();if(Lt)I.cjSwipe("touchSwipeLeft",Ur,true)}else{R.hide()}if(bt>0){Z.on("click.jackbox",zr).show();if(Lt)I.cjSwipe("touchSwipeRight",zr,true)}else{Z.hide()}if(r){e.left=bt*-gn;Jacked.tween(F[0],e,t)}else if(n||!kn){var i=I.offset().left;Z.css("left",i);R.css("left",i+C);kn=true}}}}(),pr=function(){var e={opacity:1},t={};return function(r){ln=qt.width();cn=Math.max(qt.height(),226);var i=ln>568&&ft===0?N:0;if(dn!=="audio"&&dn!=="inline"){mt=!L?Ct:Ct||on}else{mt=false}if(hn<ln&&pn+i<cn&&!mt){It=nn;Wt=an}else{It=ln/hn;Wt=cn/pn;var s=It>Wt?Wt:It;It=nn*s;Wt=an*s;if(ln>cn){if(Wt+At+i>cn){Wt=cn-M-n-i;It=nn*(Wt/an)}}else{if(It>Wt){if(It+hn>ln){It=ln-n;Wt=an*(It/nn)}}else{if(Wt+At+i>cn){Wt=cn-M-n-i;It=nn*(Wt/an)}}}if(It!==(It|0))It=It+1|0;if(Wt!==(Wt|0))Wt=Wt+1|0}Jt=It+_;Kt=Wt+M+i;if(r==="true")return;Jacked.stopTween(en[0],false,true);if(un)Jacked.stopTween(un[0],true,true);if(It<260)Jt+=260-It;var o=Math.max(260,It);e.width=o;e.height=Wt;t.marginLeft=-(Jt*.5+.5|0);t.marginTop=-(Kt*.5+.5|0);t.width=o;t.height=Wt;en.css(t);un.css(e);if(w){Jacked.stopTween(w[0]);w.css("width",o)}if(U){Jacked.stopTween(U[0]);U.css("width",o)}if(Bt&&ht){W=-z.outerHeight();P.css("height",-W<Wt?-W:Wt);if(!yt){Jacked.stopTween(z[0],false,true);z.css("margin-top",W)}}if(Nn)lr(true)}}(),dr=function(){var t={};return function(n){var r=e(this).data();t.left=n.pageX-r.tipX-r.tipWidth;t.top=n.pageY-r.tipY-r.tipHeight;r.tip.css(t)}}();e.fn.jackBox=function(e,t){if(tr.hasOwnProperty(e)){tr[e](this,t)}};e.jackBox={available:function(e){if(!e)return;if(Un){An?setTimeout(e,250):e()}else{Gt=e}},itemLoaded:function(e){A=e}}})(jQuery);
