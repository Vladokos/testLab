export default function getScrollbarWidth() {
  // Создаем временный элемент
  const scrollDiv = document.createElement("div");

  // Присваиваем стили для создания прокрутки
  scrollDiv.style.width = "100px";
  scrollDiv.style.height = "100px";
  scrollDiv.style.overflow = "scroll";
  scrollDiv.style.position = "absolute";
  scrollDiv.style.top = "-9999px"; // Скрываем элемент

  // Добавляем элемент на страницу
  document.body.appendChild(scrollDiv);

  // Вычисляем ширину скроллбара
  const scrollbarWidth = scrollDiv.offsetWidth - scrollDiv.clientWidth;

  // Удаляем временный элемент
  document.body.removeChild(scrollDiv);

  return scrollbarWidth;
}
