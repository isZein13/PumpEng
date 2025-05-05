// script.js

// Функция для загрузки HTML компонента (header, footer) в указанный элемент
async function loadComponent(elementSelector, filePath) {
    try {
        const response = await fetch(filePath);
        if (!response.ok) {
            // Не выводим ошибку 404 в консоль, если файл просто не найден для специфичных страниц
            if (response.status === 404) {
                 console.warn(`Component file not found: ${filePath}`);
                 return; // Просто выходим, если файл не найден
            }
            throw new Error(`Could not fetch ${filePath}: ${response.statusText}`);
        }
        const html = await response.text();
        const element = document.querySelector(elementSelector);
        if (element) {
            element.innerHTML = html;
        } else {
            // Не выводим предупреждение, если селектор не найден (например, нет <header> на какой-то странице)
            // console.warn(`Element with selector "${elementSelector}" not found on this page.`);
        }
    } catch (error) {
        console.error('Error loading component:', error);
    }
}

// Функция, которая будет вызвана после загрузки DOM
function initializeComponents() {
    // Пытаемся загрузить header и footer. Если тегов нет на странице, ошибки не будет.
    loadComponent('header', 'header.html');
    loadComponent('footer', 'footer.html');
}

// Ждем, пока DOM полностью загрузится, прежде чем загружать компоненты
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initializeComponents);
} else {
    // DOM уже загружен
    initializeComponents();
}


// ======== Логика для кнопки "Наверх" ========

// Получаем кнопку
let scrollTopButton = document.getElementById("scrollToTopBtn");

// Показываем/скрываем кнопку при прокрутке
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  // Сначала проверяем, существует ли кнопка на странице
  scrollTopButton = document.getElementById("scrollToTopBtn"); // На всякий случай получаем элемент снова, если DOM изменился
  if (scrollTopButton) {
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
      scrollTopButton.style.display = "block";
      // Плавное появление (если используете visibility/opacity в CSS)
      // requestAnimationFrame(() => {
      //    scrollTopButton.style.visibility = "visible";
      //    scrollTopButton.style.opacity = "0.8";
      // });
    } else {
      scrollTopButton.style.display = "none";
      // Плавное исчезание (если используете visibility/opacity в CSS)
      // requestAnimationFrame(() => {
      //    scrollTopButton.style.visibility = "hidden";
      //    scrollTopButton.style.opacity = "0";
      // });
    }
  }
}

// Прокрутка наверх при клике
// Проверяем еще раз, т.к. скрипт может выполниться до того, как кнопка появится
if (scrollTopButton) {
  scrollTopButton.addEventListener('click', function() {
    window.scrollTo({top: 0, behavior: 'smooth'});
  });
} else {
    // Если кнопки нет сразу, попробуем добавить слушатель после загрузки DOM
    document.addEventListener('DOMContentLoaded', () => {
         scrollTopButton = document.getElementById("scrollToTopBtn");
         if (scrollTopButton) {
              scrollTopButton.addEventListener('click', function() {
                window.scrollTo({top: 0, behavior: 'smooth'});
              });
         }
    });
}


// ======== Конец логики для кнопки "Наверх" ========
