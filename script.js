let text = document.getElementById('text');
let bird1 = document.getElementById('bird1');
let bird2 = document.getElementById('bird2');
let rocks1 = document.getElementById('rocks1');
let rocks2 = document.getElementById('rocks2')
let forest = document.getElementById('forest');
let water = document.getElementById('water');
let btn = document.getElementById('btn');
let header = document.getElementById('header');
let cloud1 = document.getElementById('cloud1');
let cloud2 = document.getElementById('cloud2'); 
let title2 = document.getElementById('title2');

window.addEventListener('scroll', function(){
    let value = window.scrollY;

    text.style.bottom= 40 + value * -0.1 + '%';
    bird1.style.top = value * -1 + 'px';
    bird1.style.left = value * 2 + 'px';
    bird2.style.top = value * -3 + 'px';
    bird2.style.left = value * -7 + 'px';
    btn.style.marginTop = value * 1.5 + 'px';
    rocks1.style.left = value * 2 + 'px';
    rocks2.style.left = value * -2 + 'px';
    forest.style.top = value * 0.25 + 'px';
    header.style.top = value * 0.5 + 'px';
    forest.style.top = value * 0.25 + 'px';
    cloud1.style.right = value * 2 + 'px';
    cloud1.style.top = value * -1 + 'px';
    cloud2.style.top = value * -1 + 'px';
    cloud2.style.left = value * -2 + 'px';
    title2.style.left = value * 4 + 'px';
})

document.getElementById('exp').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

