let sidebarEl = document.querySelector('.sidebar');
let mainTop = document.querySelector('.main-content__top');
let mainBottom = document.querySelector('.main-content__bottom');
let alternativeContent = document.querySelector('.alternative-content');

sidebarEl.addEventListener(
    'click',
    function (event) {
        document.querySelectorAll('.menu__element').forEach(
            item => item.classList.remove('menu__element-active')
        );
        if (event.target.classList.contains('menu__element')){
            event.target.classList.add('menu__element-active');
        }
        if (event.target.id !== "menuEl-1" && event.target.classList.contains('menu__element')) {
            mainTop.style.display = "none";
            mainBottom.style.display = "none";
            alternativeContent.style.display = "block";
            let newEl = event.target.textContent;
            alternativeContent.innerHTML = `<p>${newEl}</p>`;
        }
        else
            if(event.target.classList.contains('menu__element'))
        {
            mainTop.style.display = "block";
            mainBottom.style.display = "block";
            alternativeContent.style.display = "none";
        }
    }
)

function randomizer() {
    let max = 100;
    return Math.round(Math.random() * max);
}

document.getElementById('change-plan').addEventListener(
    'click',
    () => {
        let newPrice = randomizer();
        document.querySelectorAll('.payment').forEach(
            item => item.innerHTML = newPrice
        )
    }
)

let tab = function () {
    let tabNav = document.querySelectorAll('.tabs-nav__item');
    let tabContent = document.querySelectorAll('.tabs-content__item');
    let tabName;

    tabNav.forEach(
        item => {
            item.addEventListener(
                'click',
                selectTabNav
            )
        }
    );

    function selectTabNav(event) {
        tabNav.forEach(item => {
            item.classList.remove('is-active');
        })
        event.target.classList.add('is-active');
        tabName = event.target.getAttribute('data-tab-name');
        selectTabContent(tabName);
    }

    function selectTabContent(tabName) {
        tabContent.forEach(
            item => {
                item.id === tabName ? item.classList.add('is-active') : item.classList.remove('is-active');
            }
        )
    }
};

tab();

document.getElementById('close').addEventListener(
    'click',
    () => {
        document.querySelector('.tariff-plan-content').style.display = 'none';
    }
)
