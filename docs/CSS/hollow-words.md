# 空心字

> css text-shadow 实现空心字

## 效果

![效果](/css/hollow-words.jpg)

## 代码

```html
<div class="box">龙吟工作室</div>
```

```css
.box {
  font-size: 60px;
  color: #fff;
  --color: #008c8c;
  text-shadow: 0 -1px var(--color), 1px -1px var(--color), 1px 0 var(--color), 1px
      1px var(--color), 0 1px var(--color), -1px 1px var(--color),
    -1px 0 var(--color), -1px -1px var(--color);
}
```
