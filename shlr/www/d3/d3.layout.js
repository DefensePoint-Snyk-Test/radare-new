(function(){function e(e){var t=e.source,r=e.target,i=n(t,r),s=[t];while(t!==i)t=t.parent,s.push(t);var o=s.length;while(r!==i)s.splice(o,0,r),r=r.parent;return s}function t(e){var t=[],n=e.parent;while(n!=null)t.push(e),e=n,n=n.parent;return t.push(e),t}function n(e,n){if(e===n)return e;var r=t(e),i=t(n),s=r.pop(),o=i.pop(),u=null;while(s===o)u=s,s=r.pop(),o=i.pop();return u}function s(e){e.fixed|=2}function o(e){e!==i&&(e.fixed&=1)}function u(){a(),i.fixed&=1,r=i=null}function a(){i.px=d3.event.x,i.py=d3.event.y,r.resume()}function f(e,t,n){var r=0,i=0;e.charge=0;if(!e.leaf){var s=e.nodes,o=s.length,u=-1,a;while(++u<o){a=s[u];if(a==null)continue;f(a,t,n),e.charge+=a.charge,r+=a.charge*a.cx,i+=a.charge*a.cy}}if(e.point){e.leaf||(e.point.x+=Math.random()-.5,e.point.y+=Math.random()-.5);var l=t*n[e.point.index];e.charge+=e.pointCharge=l,r+=l*e.point.x,i+=l*e.point.y}e.cx=r/e.charge,e.cy=i/e.charge}function l(e){return 20}function c(e){return 1}function p(e){return e.x}function v(e){return e.y}function m(e,t,n){e.y0=t,e.y=n}function b(e){var t=1,n=0,r=e[0][1],i,s=e.length;for(;t<s;++t)(i=e[t][1])>r&&(n=t,r=i);return n}function w(e){return e.reduce(E,0)}function E(e,t){return e+t[1]}function S(e,t){return x(e,Math.ceil(Math.log(t.length)/Math.LN2+1))}function x(e,t){var n=-1,r=+e[0],i=(e[1]-r)/t,s=[];while(++n<=t)s[n]=i*n+r;return s}function T(e){return[d3.min(e),d3.max(e)]}function N(e,t){return e.sort=d3.rebind(e,t.sort),e.children=d3.rebind(e,t.children),e.links=A,e.value=d3.rebind(e,t.value),e.nodes=function(t){return O=!0,(e.nodes=e)(t)},e}function C(e){return e.children}function k(e){return e.value}function L(e,t){return t.value-e.value}function A(e){return d3.merge(e.map(function(e){return(e.children||[]).map(function(t){return{source:e,target:t}})}))}function M(e,t){return e.value-t.value}function _(e,t){var n=e._pack_next;e._pack_next=t,t._pack_prev=e,t._pack_next=n,n._pack_prev=t}function D(e,t){e._pack_next=t,t._pack_prev=e}function P(e,t){var n=t.x-e.x,r=t.y-e.y,i=e.r+t.r;return i*i-n*n-r*r>.001}function H(e){function c(e){t=Math.min(e.x-e.r,t),n=Math.max(e.x+e.r,n),r=Math.min(e.y-e.r,r),i=Math.max(e.y+e.r,i)}var t=Infinity,n=-Infinity,r=Infinity,i=-Infinity,s=e.length,o,u,a,f,l;e.forEach(B),o=e[0],o.x=-o.r,o.y=0,c(o);if(s>1){u=e[1],u.x=u.r,u.y=0,c(u);if(s>2){a=e[2],q(o,u,a),c(a),_(o,a),o._pack_prev=a,_(a,u),u=o._pack_next;for(var h=3;h<s;h++){q(o,u,a=e[h]);var p=0,d=1,v=1;for(f=u._pack_next;f!==u;f=f._pack_next,d++)if(P(f,a)){p=1;break}if(p==1)for(l=o._pack_prev;l!==f._pack_prev;l=l._pack_prev,v++)if(P(l,a)){v<d&&(p=-1,f=l);break}p==0?(_(o,a),u=a,c(a)):p>0?(D(o,f),u=f,h--):(D(f,u),o=f,h--)}}}var m=(t+n)/2,g=(r+i)/2,y=0;for(var h=0;h<s;h++){var b=e[h];b.x-=m,b.y-=g,y=Math.max(y,b.r+Math.sqrt(b.x*b.x+b.y*b.y))}return e.forEach(j),y}function B(e){e._pack_next=e._pack_prev=e}function j(e){delete e._pack_next,delete e._pack_prev}function F(e){var t=e.children;t&&t.length?(t.forEach(F),e.r=H(t)):e.r=Math.sqrt(e.value)}function I(e,t,n,r){var i=e.children;e.x=t+=r*e.x,e.y=n+=r*e.y,e.r*=r;if(i){var s=-1,o=i.length;while(++s<o)I(i[s],t,n,r)}}function q(e,t,n){var r=e.r+n.r,i=t.x-e.x,s=t.y-e.y;if(r&&(i||s)){var o=t.r+n.r,u=Math.sqrt(i*i+s*s),a=Math.max(-1,Math.min(1,(r*r+u*u-o*o)/(2*r*u))),f=Math.acos(a),l=a*(r/=u),c=Math.sin(f)*r;n.x=e.x+l*i+c*s,n.y=e.y+l*s-c*i}else n.x=e.x+r,n.y=e.y}function R(e){return 1+d3.max(e,function(e){return e.y})}function U(e){return e.reduce(function(e,t){return e+t.x},0)/e.length}function z(e){var t=e.children;return t&&t.length?z(t[0]):e}function W(e){var t=e.children,n;return t&&(n=t.length)?W(t[n-1]):e}function X(e,t){return e.parent==t.parent?1:2}function V(e){var t=e.children;return t&&t.length?t[0]:e._tree.thread}function $(e){var t=e.children,n;return t&&(n=t.length)?t[n-1]:e._tree.thread}function J(e,t){var n=e.children;if(n&&(i=n.length)){var r,i,s=-1;while(++s<i)t(r=J(n[s],t),e)>0&&(e=r)}return e}function K(e,t){return e.x-t.x}function Q(e,t){return t.x-e.x}function G(e,t){return e.depth-t.depth}function Y(e,t){function n(e,r){var i=e.children;if(i&&(a=i.length)){var s,o=null,u=-1,a;while(++u<a)s=i[u],n(s,o),o=s}t(e,r)}n(e,null)}function Z(e){var t=0,n=0,r=e.children,i=r.length,s;while(--i>=0)s=r[i]._tree,s.prelim+=t,s.mod+=t,t+=s.shift+(n+=s.change)}function et(e,t,n){e=e._tree,t=t._tree;var r=n/(t.number-e.number);e.change+=r,t.change-=r,t.shift+=n,t.prelim+=n,t.mod+=n}function tt(e,t,n){return e._tree.ancestor.parent==t.parent?e._tree.ancestor:n}function nt(e){return{x:e.x,y:e.y,dx:e.dx,dy:e.dy}}function rt(e,t){var n=e.x+t[3],r=e.y+t[0],i=e.dx-t[1]-t[3],s=e.dy-t[0]-t[2];return i<0&&(n+=i/2,i=0),s<0&&(r+=s/2,s=0),{x:n,y:r,dx:i,dy:s}}d3.layout={},d3.layout.bundle=function(){return function(t){var n=[],r=-1,i=t.length;while(++r<i)n.push(e(t[r]));return n}},d3.layout.chord=function(){function f(){var e={},f=[],c=d3.range(i),h=[],p,d,v,m,g;t=[],n=[],p=0,m=-1;while(++m<i){d=0,g=-1;while(++g<i)d+=r[m][g];f.push(d),h.push(d3.range(i)),p+=d}o&&c.sort(function(e,t){return o(f[e],f[t])}),u&&h.forEach(function(e,t){e.sort(function(e,n){return u(r[t][e],r[t][n])})}),p=(2*Math.PI-s*i)/p,d=0,m=-1;while(++m<i){v=d,g=-1;while(++g<i){var y=c[m],b=h[y][g],w=r[y][b],E=d,S=d+=w*p;e[y+"-"+b]={index:y,subindex:b,startAngle:E,endAngle:S,value:w}}n.push({index:y,startAngle:v,endAngle:d,value:(d-v)/p}),d+=s}m=-1;while(++m<i){g=m-1;while(++g<i){var x=e[m+"-"+g],T=e[g+"-"+m];(x.value||T.value)&&t.push(x.value<T.value?{source:T,target:x}:{source:x,target:T})}}a&&l()}function l(){t.sort(function(e,t){return a((e.source.value+e.target.value)/2,(t.source.value+t.target.value)/2)})}var e={},t,n,r,i,s=0,o,u,a;return e.matrix=function(s){return arguments.length?(i=(r=s)&&r.length,t=n=null,e):r},e.padding=function(r){return arguments.length?(s=r,t=n=null,e):s},e.sortGroups=function(r){return arguments.length?(o=r,t=n=null,e):o},e.sortSubgroups=function(n){return arguments.length?(u=n,t=null,e):u},e.sortChords=function(n){return arguments.length?(a=n,t&&l(),e):a},e.chords=function(){return t||f(),t},e.groups=function(){return n||f(),n},e},d3.layout.force=function(){function C(e){return function(t,n,r,i,s){if(t.point!==e){var o=t.cx-e.x,u=t.cy-e.y,a=1/Math.sqrt(o*o+u*u);if((i-n)*a<b){var f=t.charge*a*a;return e.px-=o*f,e.py-=u*f,!0}if(t.point&&isFinite(a)){var f=t.pointCharge*a*a;e.px-=o*f,e.py-=u*f}}return!t.charge}}function k(){var e=E.length,r=S.length,i,s,o,u,a,l,c,h,v;for(s=0;s<r;++s){o=S[s],u=o.source,a=o.target,h=a.x-u.x,v=a.y-u.y;if(l=h*h+v*v)l=p*T[s]*((l=Math.sqrt(l))-x[s])/l,h*=l,v*=l,a.x-=h*(c=u.weight/(a.weight+u.weight)),a.y-=v*c,u.x+=h*(c=1-c),u.y+=v*c}if(c=p*y){h=n[0]/2,v=n[1]/2,s=-1;if(c)while(++s<e)o=E[s],o.x+=(h-o.x)*c,o.y+=(v-o.y)*c}if(g){f(i=d3.geom.quadtree(E),p,N),s=-1;while(++s<e)(o=E[s]).fixed||i.visit(C(o))}s=-1;while(++s<e)o=E[s],o.fixed?(o.x=o.px,o.y=o.py):(o.x-=(o.px-(o.px=o.x))*d,o.y-=(o.py-(o.py=o.y))*d);return t.tick({type:"tick",alpha:p}),(p*=.99)<.005}function L(t){s(i=t),r=e}var e={},t=d3.dispatch("tick"),n=[1,1],h,p,d=.9,v=l,m=c,g=-30,y=.1,b=.8,w,E=[],S=[],x,T,N;return e.on=function(n,r){return t.on(n,r),e},e.nodes=function(t){return arguments.length?(E=t,e):E},e.links=function(t){return arguments.length?(S=t,e):S},e.size=function(t){return arguments.length?(n=t,e):n},e.linkDistance=function(t){return arguments.length?(v=d3.functor(t),e):v},e.distance=e.linkDistance,e.linkStrength=function(t){return arguments.length?(m=d3.functor(t),e):m},e.friction=function(t){return arguments.length?(d=t,e):d},e.charge=function(t){return arguments.length?(g=typeof t=="function"?t:+t,e):g},e.gravity=function(t){return arguments.length?(y=t,e):y},e.theta=function(t){return arguments.length?(b=t,e):b},e.start=function(){function l(e,n){var r=c(t),i=-1,s=r.length,o;while(++i<s)if(!isNaN(o=r[i][e]))return o;return Math.random()*n}function c(){if(!a){a=[];for(r=0;r<i;++r)a[r]=[];for(r=0;r<s;++r){var e=S[r];a[e.source.index].push(e.target),a[e.target.index].push(e.source)}}return a[t]}var t,r,i=E.length,s=S.length,o=n[0],u=n[1],a,f;for(t=0;t<i;++t)(f=E[t]).index=t,f.weight=0;x=[],T=[];for(t=0;t<s;++t)f=S[t],typeof f.source=="number"&&(f.source=E[f.source]),typeof f.target=="number"&&(f.target=E[f.target]),x[t]=v.call(this,f,t),T[t]=m.call(this,f,t),++f.source.weight,++f.target.weight;for(t=0;t<i;++t)f=E[t],isNaN(f.x)&&(f.x=l("x",o)),isNaN(f.y)&&(f.y=l("y",u)),isNaN(f.px)&&(f.px=f.x),isNaN(f.py)&&(f.py=f.y);N=[];if(typeof g=="function")for(t=0;t<i;++t)N[t]=+g.call(this,E[t],t);else for(t=0;t<i;++t)N[t]=g;return e.resume()},e.resume=function(){return p=.1,d3.timer(k),e},e.stop=function(){return p=0,e},e.drag=function(){h||(h=d3.behavior.drag().origin(Object).on("dragstart",L).on("drag",a).on("dragend",u)),this.on("mouseover.force",s).on("mouseout.force",o).call(h)},e};var r,i;d3.layout.partition=function(){function n(e,t,r,i){var s=e.children;e.x=t,e.y=e.depth*i,e.dx=r,e.dy=i;if(s&&(u=s.length)){var o=-1,u,a,f;r=e.value?r/e.value:0;while(++o<u)n(a=s[o],t,f=a.value*r,i),t+=f}}function r(e){var t=e.children,n=0;if(t&&(s=t.length)){var i=-1,s;while(++i<s)n=Math.max(n,r(t[i]))}return 1+n}function i(i,s){var o=e.call(this,i,s);return n(o[0],0,t[0],t[1]/r(o[0])),o}var e=d3.layout.hierarchy(),t=[1,1];return i.size=function(e){return arguments.length?(t=e,i):t},N(i,e)},d3.layout.pie=function(){function i(s,o){var u=s.map(function(t,n){return+e.call(i,t,n)}),a=+(typeof n=="function"?n.apply(this,arguments):n),f=((typeof r=="function"?r.apply(this,arguments):r)-n)/d3.sum(u),l=d3.range(s.length);t!=null&&l.sort(t===h?function(e,t){return u[t]-u[e]}:function(e,n){return t(s[e],s[n])});var c=l.map(function(e){return{data:s[e],value:d=u[e],startAngle:a,endAngle:a+=d*f}});return s.map(function(e,t){return c[l[t]]})}var e=Number,t=h,n=0,r=2*Math.PI;return i.value=function(t){return arguments.length?(e=t,i):e},i.sort=function(e){return arguments.length?(t=e,i):t},i.startAngle=function(e){return arguments.length?(n=e,i):n},i.endAngle=function(e){return arguments.length?(r=e,i):r},i};var h={};d3.layout.stack=function(){function o(u,a){var f=u.map(function(t,n){return e.call(o,t,n)}),l=f.map(function(e,t){return e.map(function(e,t){return[i.call(o,e,t),s.call(o,e,t)]})}),c=t.call(o,l,a);f=d3.permute(f,c),l=d3.permute(l,c);var h=n.call(o,l,a),p=f.length,d=f[0].length,v,m,g;for(m=0;m<d;++m){r.call(o,f[0][m],g=h[m],l[0][m][1]);for(v=1;v<p;++v)r.call(o,f[v][m],g+=l[v-1][m][1],l[v][m][1])}return u}var e=Object,t=g["default"],n=y.zero,r=m,i=p,s=v;return o.values=function(t){return arguments.length?(e=t,o):e},o.order=function(e){return arguments.length?(t=typeof e=="function"?e:g[e],o):t},o.offset=function(e){return arguments.length?(n=typeof e=="function"?e:y[e],o):n},o.x=function(e){return arguments.length?(i=e,o):i},o.y=function(e){return arguments.length?(s=e,o):s},o.out=function(e){return arguments.length?(r=e,o):r},o};var g={"inside-out":function(e){var t=e.length,n,r,i=e.map(b),s=e.map(w),o=d3.range(t).sort(function(e,t){return i[e]-i[t]}),u=0,a=0,f=[],l=[];for(n=0;n<t;++n)r=o[n],u<a?(u+=s[r],f.push(r)):(a+=s[r],l.push(r));return l.reverse().concat(f)},reverse:function(e){return d3.range(e.length).reverse()},"default":function(e){return d3.range(e.length)}},y={silhouette:function(e){var t=e.length,n=e[0].length,r=[],i=0,s,o,u,a=[];for(o=0;o<n;++o){for(s=0,u=0;s<t;s++)u+=e[s][o][1];u>i&&(i=u),r.push(u)}for(o=0;o<n;++o)a[o]=(i-r[o])/2;return a},wiggle:function(e){var t=e.length,n=e[0],r=n.length,i=0,s,o,u,a,f,l,c,h,p,d=[];d[0]=h=p=0;for(o=1;o<r;++o){for(s=0,a=0;s<t;++s)a+=e[s][o][1];for(s=0,f=0,c=n[o][0]-n[o-1][0];s<t;++s){for(u=0,l=(e[s][o][1]-e[s][o-1][1])/(2*c);u<s;++u)l+=(e[u][o][1]-e[u][o-1][1])/c;f+=l*e[s][o][1]}d[o]=h-=a?f/a*c:0,h<p&&(p=h)}for(o=0;o<r;++o)d[o]-=p;return d},expand:function(e){var t=e.length,n=e[0].length,r=1/t,i,s,o,u=[];for(s=0;s<n;++s){for(i=0,o=0;i<t;i++)o+=e[i][s][1];if(o)for(i=0;i<t;i++)e[i][s][1]/=o;else for(i=0;i<t;i++)e[i][s][1]=r}for(s=0;s<n;++s)u[s]=0;return u},zero:function(e){var t=-1,n=e[0].length,r=[];while(++t<n)r[t]=0;return r}};d3.layout.histogram=function(){function i(i,s){var o=[],u=i.map(t,this),a=n.call(this,u,s),f=r.call(this,a,u,s),l,s=-1,c=u.length,h=f.length-1,p=e?1:1/c,d;while(++s<h)l=o[s]=[],l.dx=f[s+1]-(l.x=f[s]),l.y=0;s=-1;while(++s<c)d=u[s],d>=a[0]&&d<=a[1]&&(l=o[d3.bisect(f,d,1,h)-1],l.y+=p,l.push(i[s]));return o}var e=!0,t=Number,n=T,r=S;return i.value=function(e){return arguments.length?(t=e,i):t},i.range=function(e){return arguments.length?(n=d3.functor(e),i):n},i.bins=function(e){return arguments.length?(r=typeof e=="number"?function(t){return x(t,e)}:d3.functor(e),i):r},i.frequency=function(t){return arguments.length?(e=!!t,i):e},i},d3.layout.hierarchy=function(){function r(i,o,u){var a=t.call(s,i,o),f=O?i:{data:i};f.depth=o,u.push(f);if(a&&(c=a.length)){var l=-1,c,h=f.children=[],p=0,v=o+1;while(++l<c)d=r(a[l],v,u),d.parent=f,h.push(d),p+=d.value;e&&h.sort(e),n&&(f.value=p)}else n&&(f.value=+n.call(s,i,o)||0);return f}function i(e,t){var r=e.children,o=0;if(r&&(a=r.length)){var u=-1,a,f=t+1;while(++u<a)o+=i(r[u],f)}else n&&(o=+n.call(s,O?e:e.data,t)||0);return n&&(e.value=o),o}function s(e){var t=[];return r(e,0,t),t}var e=L,t=C,n=k;return s.sort=function(t){return arguments.length?(e=t,s):e},s.children=function(e){return arguments.length?(t=e,s):t},s.value=function(e){return arguments.length?(n=e,s):n},s.revalue=function(e){return i(e,0),e},s};var O=!1;d3.layout.pack=function(){function n(n,r){var i=e.call(this,n,r),s=i[0];s.x=0,s.y=0,F(s);var o=t[0],u=t[1],a=1/Math.max(2*s.r/o,2*s.r/u);return I(s,o/2,u/2,a),i}var e=d3.layout.hierarchy().sort(M),t=[1,1];return n.size=function(e){return arguments.length?(t=e,n):t},N(n,e)},d3.layout.cluster=function(){function r(r,i){var s=e.call(this,r,i),o=s[0],u,a=0,f,l;Y(o,function(e){var n=e.children;n&&n.length?(e.x=U(n),e.y=R(n)):(e.x=u?a+=t(e,u):0,e.y=0,u=e)});var c=z(o),h=W(o),p=c.x-t(c,h)/2,d=h.x+t(h,c)/2;return Y(o,function(e){e.x=(e.x-p)/(d-p)*n[0],e.y=(1-e.y/o.y)*n[1]}),s}var e=d3.layout.hierarchy().sort(null).value(null),t=X,n=[1,1];return r.separation=function(e){return arguments.length?(t=e,r):t},r.size=function(e){return arguments.length?(n=e,r):n},N(r,e)},d3.layout.tree=function(){function r(r,i){function u(e,n){var r=e.children,i=e._tree;if(r&&(s=r.length)){var s,o=r[0],a,l=o,c,h=-1;while(++h<s)c=r[h],u(c,a),l=f(c,a,l),a=c;Z(e);var p=.5*(o._tree.prelim+c._tree.prelim);n?(i.prelim=n._tree.prelim+t(e,n),i.mod=i.prelim-p):i.prelim=p}else n&&(i.prelim=n._tree.prelim+t(e,n))}function a(e,t){e.x=e._tree.prelim+t;var n=e.children;if(n&&(i=n.length)){var r=-1,i;t+=e._tree.mod;while(++r<i)a(n[r],t)}}function f(e,n,r){if(n){var i=e,s=e,o=n,u=e.parent.children[0],a=i._tree.mod,f=s._tree.mod,l=o._tree.mod,c=u._tree.mod,h;while(o=$(o),i=V(i),o&&i)u=V(u),s=$(s),s._tree.ancestor=e,h=o._tree.prelim+l-i._tree.prelim-a+t(o,i),h>0&&(et(tt(o,e,r),e,h),a+=h,f+=h),l+=o._tree.mod,a+=i._tree.mod,c+=u._tree.mod,f+=s._tree.mod;o&&!$(s)&&(s._tree.thread=o,s._tree.mod+=l-f),i&&!V(u)&&(u._tree.thread=i,u._tree.mod+=a-c,r=e)}return r}var s=e.call(this,r,i),o=s[0];Y(o,function(e,t){e._tree={ancestor:e,prelim:0,mod:0,change:0,shift:0,number:t?t._tree.number+1:0}}),u(o),a(o,-o._tree.prelim);var l=J(o,Q),c=J(o,K),h=J(o,G),p=l.x-t(l,c)/2,d=c.x+t(c,l)/2,v=h.depth||1;return Y(o,function(e){e.x=(e.x-p)/(d-p)*n[0],e.y=e.depth/v*n[1],delete e._tree}),s}var e=d3.layout.hierarchy().sort(null).value(null),t=X,n=[1,1];return r.separation=function(e){return arguments.length?(t=e,r):t},r.size=function(e){return arguments.length?(n=e,r):n},N(r,e)},d3.layout.treemap=function(){function a(e,t){var n=-1,r=e.length,i,s;while(++n<r)s=(i=e[n]).value*(t<0?0:t),i.area=isNaN(s)||s<=0?0:s}function f(e){var t=e.children;if(t&&t.length){var n=i(e),r=[],s=t.slice(),o,u=Infinity,l,p=Math.min(n.dx,n.dy),d;a(s,n.dx*n.dy/e.value),r.area=0;while((d=s.length)>0)r.push(o=s[d-1]),r.area+=o.area,(l=c(r,p))<=u?(s.pop(),u=l):(r.area-=r.pop().area,h(r,p,n,!1),p=Math.min(n.dx,n.dy),r.length=r.area=0,u=Infinity);r.length&&(h(r,p,n,!0),r.length=r.area=0),t.forEach(f)}}function l(e){var t=e.children;if(t&&t.length){var n=i(e),r=t.slice(),s,o=[];a(r,n.dx*n.dy/e.value),o.area=0;while(s=r.pop())o.push(s),o.area+=s.area,s.z!=null&&(h(o,s.z?n.dx:n.dy,n,!r.length),o.length=o.area=0);t.forEach(l)}}function c(e,t){var n=e.area,r,i=0,s=Infinity,o=-1,a=e.length;while(++o<a){if(!(r=e[o].area))continue;r<s&&(s=r),r>i&&(i=r)}return n*=n,t*=t,n?Math.max(t*i*u/n,n/(t*s*u)):Infinity}function h(e,n,r,i){var s=-1,o=e.length,u=r.x,a=r.y,f=n?t(e.area/n):0,l;if(n==r.dx){if(i||f>r.dy)f=f?r.dy:0;while(++s<o)l=e[s],l.x=u,l.y=a,l.dy=f,u+=l.dx=f?t(l.area/f):0;l.z=!0,l.dx+=r.x+r.dx-u,r.y+=f,r.dy-=f}else{if(i||f>r.dx)f=f?r.dx:0;while(++s<o)l=e[s],l.x=u,l.y=a,l.dx=f,a+=l.dy=f?t(l.area/f):0;l.z=!1,l.dy+=r.y+r.dy-a,r.x+=f,r.dx-=f}}function p(t){var r=o||e(t),i=r[0];return i.x=0,i.y=0,i.dx=n[0],i.dy=n[1],o&&e.revalue(i),a([i],i.dx*i.dy/i.value),(o?l:f)(i),s&&(o=r),r}var e=d3.layout.hierarchy(),t=Math.round,n=[1,1],r=null,i=nt,s=!1,o,u=.5*(1+Math.sqrt(5));return p.size=function(e){return arguments.length?(n=e,p):n},p.padding=function(e){function t(t){var n=e.call(p,t,t.depth);return n==null?nt(t):rt(t,typeof n=="number"?[n,n,n,n]:n)}function n(t){return rt(t,e)}if(!arguments.length)return r;var s;return i=(r=e)==null?nt:(s=typeof e)==="function"?t:s==="number"?(e=[e,e,e,e],n):n,p},p.round=function(e){return arguments.length?(t=e?Math.round:Number,p):t!=Number},p.sticky=function(e){return arguments.length?(s=e,o=null,p):s},p.ratio=function(e){return arguments.length?(u=e,p):u},N(p,e)}})();