# smooth-scroll

> 平滑滚动

```javascript
/**
 * @desc 平滑滚动到指定元素
 * @param {string} element - 滚动元素 元素选择器
 * @returns {void}
 */
const smoothScroll = (element) =>
  document.querySelector(element).scrollIntoView({
    behavior: "smooth",
  });
// 例子
smoothScroll("#fooBar");

// 平滑滚动到顶部
const scrollToTop = () => {
  const c = document.documentElement.scrollTop || document.body.scrollTop;
  if (c > 0) {
    window.requestAnimationFrame(scrollToTop);
    window.scrollTo(0, c - c / 8);
  }
};
```
