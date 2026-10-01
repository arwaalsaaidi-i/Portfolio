(function(){var c=document.getElementById('bg');if(!c)return;var x=c.getContext('2d'),W,H,D=Math.min(devicePixelRatio||1,2),t=0,still=matchMedia('(prefers-reduced-motion:reduce)').matches;
var orbs=[],N=7;function rs(){W=c.width=innerWidth*D;H=c.height=innerHeight*D}
function dark(){var a=document.documentElement.getAttribute('data-theme');return a?a==='dark':matchMedia('(prefers-color-scheme:dark)').matches}
rs();addEventListener('resize',rs);
for(var i=0;i<N;i++)orbs.push({x:Math.random(),y:Math.random(),r:.06+Math.random()*.14,s:.05+Math.random()*.1,p:Math.random()*6.28,k:i%3});
var cols=['127,83,136','139,185,193','86,74,112'];
function f(){x.clearRect(0,0,W,H);var d=dark();t+=.004;
orbs.forEach(function(o){var px=(o.x+Math.sin(t*o.s*10+o.p)*.08)*W,py=(o.y+Math.cos(t*o.s*9+o.p)*.08)*H,r=o.r*Math.max(W,H),g=x.createRadialGradient(px,py,0,px,py,r);
g.addColorStop(0,'rgba('+cols[o.k]+','+(d?.28:.2)+')');g.addColorStop(1,'rgba('+cols[o.k]+',0)');x.fillStyle=g;x.beginPath();x.arc(px,py,r,0,6.29);x.fill()});
x.lineWidth=1.2*D;for(var j=0;j<4;j++){x.beginPath();x.strokeStyle='rgba('+(d?'189,222,221':'86,74,112')+','+(d?.07:.08)+')';
for(var k=0;k<=W;k+=24*D){var y=H*(.2+j*.2)+Math.sin(k/(W/5)+t*(1+j*.3)+j)*H*.05;k?x.lineTo(k,y):x.moveTo(k,y)}x.stroke()}
var m=Math.sin(t*3)*.5+.5;var gx=W*(.78+Math.sin(t)*.05),gy=H*(.3+Math.cos(t*1.3)*.06),gg=x.createRadialGradient(gx,gy,0,gx,gy,50*D);
gg.addColorStop(0,'rgba('+(d?'189,222,221':'127,83,136')+','+(.55+m*.25)+')');gg.addColorStop(1,'rgba(139,185,193,0)');x.fillStyle=gg;x.beginPath();x.arc(gx,gy,50*D,0,6.29);x.fill();
if(!still)requestAnimationFrame(f)}
f()})();
