const highlight = "#fd7e16";
const black = 'black';

const max = 5;
let skills = $('.skill');
console.log(skills);

for( let i = 0; i < skills.length; i++){
    
    const s = skills[i];
    const level = parseInt(skills[i].dataset.level)
    const span = document.createElement('span');
    span.style.display = 'flex';

    for (let n = 0; n < max ; n++) {
        // const div =  document.createElement('div');
        // div.classList.add('round');
        // div.classList.add(n < level ? 'highlight' : 'gray');
        // span.appendChild(div);
        span.innerHTML += circle_svg(n < level? highlight : black);
    }

    s.appendChild(span);
};

function circle_svg(color){
return `<svg height="20" width="20">
  <circle cx="10" cy="10" r="5" stroke="${color}"stroke-width="1" fill="${color}" />
</svg>`
}
