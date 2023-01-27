window.onload = () => {
    let mainDiv = document.querySelector('.mainDiv');
    mainDiv.classList.add('d-flex', 'row');

    // RED DIV: create
    let divClick = document.createElement('div');
    divClick.classList.add('col-3');
    mainDiv.appendChild(divClick);
    divClick.style.border = '1px solid red';
    divClick.style.position = 'fixed';
    divClick.style.bottom = '0px';
    divClick.style.left = '0px';
    divClick.style.backgroundColor = 'rgba(255, 0, 0, 0.5)'
    // RED DIV: add image
    let SVGobj1 = document.createElement('img');
    SVGobj1.src = './img/basket.svg'
    // SVGobj1.type = 'image/svg+xml';
    // SVGobj1.data = './img/basket.svg';
    divClick.appendChild(SVGobj1);
    // RED DIV: add text
    let label1 = document.createElement('p');
    label1.innerText = 'click event';
    label1.classList.add('text-center', 'fw-bold', 'text-uppercase')
    divClick.appendChild(label1);

    // GREEN DIV: add text
    let divMouseOver = document.createElement('div');
    divMouseOver.classList.add('col-3');
    mainDiv.appendChild(divMouseOver);
    divMouseOver.style.border = '1px solid green';
    divMouseOver.style.position = 'fixed';
    divMouseOver.style.bottom = '0px';
    divMouseOver.style.right = '0px';
    divMouseOver.style.backgroundColor = 'rgba(0, 128, 0,0.5)'
    // GREEN DIV: add image
    let SVGobj2 = document.createElement('object');
    SVGobj2.type = 'image/svg+xml';
    SVGobj2.data = './img/basket.svg';
    divMouseOver.appendChild(SVGobj2);
    // GREEN DIV: add text
    let label2 = document.createElement('p');
    label2.innerText = 'mouseover event';
    label2.classList.add('text-center', 'fw-bold', 'text-uppercase')
    divMouseOver.appendChild(label2);

    //RED DIV+GREEN DIV: eventListeners
    divClick.addEventListener('click', function () { alert('Alert from click div') })
    divMouseOver.addEventListener('mouseover', function () { alert('Alert from mouseover div') })
}