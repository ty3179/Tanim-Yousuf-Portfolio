
const observer=new IntersectionObserver((es)=>{for(const e of es){if(e.isIntersecting){e.target.classList.add('revealed');observer.unobserve(e.target);}}},{threshold:.15});document.querySelectorAll('.card').forEach(el=>observer.observe(el));
const lb=document.getElementById('lightbox'),lbImg=document.getElementById('lbImg'),lbCaption=document.getElementById('lbCaption'),lbClose=document.getElementById('lbClose');
document.getElementById('gallery').addEventListener('click',(e)=>{const a=e.target.closest('a.card');if(!a)return;e.preventDefault();lbImg.src=a.href;lbCaption.textContent=a.dataset.caption||'';lb.hidden=false;});
lbClose.addEventListener('click',()=>lb.hidden=true);lb.addEventListener('click',(e)=>{if(e.target===lb)lb.hidden=true;});
function bindClipLoop(video){const s=parseFloat(video.dataset.start||0),e=parseFloat(video.dataset.end||0);if(Number.isFinite(s)&&Number.isFinite(e)&&e>0){const onTime=()=>{if(video.currentTime>=e)video.currentTime=s;};video.addEventListener('timeupdate',onTime);video.addEventListener('loadedmetadata',()=>{video.currentTime=s;});}}
document.querySelectorAll('video').forEach(bindClipLoop);
