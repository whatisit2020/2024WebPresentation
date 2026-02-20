<script src="gsap.min.js"></script>
const ptag = document.querySelector('p');
let output = '';
const content = ptag.innerHTML.replace(/<br>\s*\/?>/gi,'\n');
for(let str of content.split('')){
  output += '<span>'+str+'</span>';
};
ptag.innerHTML = output;
const tl = gsap.timeline();
tl.to('span',{
  duration:0.05,
  opacity:1,
  stagger:{
    from:'start',
    each:0.03,
  },
});