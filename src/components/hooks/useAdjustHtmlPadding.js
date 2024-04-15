import { useEffect } from "react";

export function useAdjustHtmlPadding() {
    useEffect(() => {
      // Функция для определения наличия вертикального скроллбара
      const hasVerticalScrollbar = () => {
        return document.documentElement.scrollHeight > window.innerHeight;
      };
  
      // Функция для установки или удаления отступа
      const adjustPadding = () => {
        if (hasVerticalScrollbar()) {
          // Удаляем отступ, если скроллбар есть
          document.documentElement.style.paddingRight = '0px';
          document.documentElement.style.paddingRight = '0px';
        } else {
          // Добавляем отступ, если скроллбара нет
          document.documentElement.style.paddingRight = 26 + 'px'; // Пример отступа, который вы хотите добавить
        }
      };
  
      // Вызов функции при монтировании компонента
      adjustPadding();
  
      // Добавление обработчика события resize для обновления отступа
      window.addEventListener('resize', adjustPadding);
  
      // Функция очистки при размонтировании компонента
      return () => {
        window.removeEventListener('resize', adjustPadding);
        document.documentElement.style.paddingRight = '0px'; // Сброс стилей
      };
    }, []); // Пустой массив зависимостей гарантирует, что эффект запустится только один раз
  }