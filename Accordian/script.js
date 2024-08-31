const accordion_item = document.querySelectorAll('.accordion-item');
accordion_item.forEach(item => {
    item.children[0].addEventListener('click', () => {
        let content = item.children[1];
        if (item.classList.contains('active')) {
            item.classList.remove('active');
            content.style.height = '0px';
        } else {
            closeAll();
            item.classList.add('active');
            content.style.height = `${content.scrollHeight}px`;
        }
    });
});
const closeAll = () => {
    accordion_item.forEach(item => {
        let content = item.children[1];
        item.classList.remove('active');
        content.style.height = '0px';
    });
}