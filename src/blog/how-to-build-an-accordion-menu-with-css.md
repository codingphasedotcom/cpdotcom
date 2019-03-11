---
title: 'How to build an accordion menu with css'
date: '2019-02-25'
category: 'Tutorials'
tags: design, development
cover_image: '/img/blog/how-to-build-an-accordion-menu-with-css.png'
author: 'Joe Santos Garcia'
author_image: '/img/blog/authors/joe-santos-garcia.png'
author_link: 'https://www.codingphase.com'
---

Ok guys so ever wonder how to create an accordion menu with just css? No Javascript required!

For this example we will create a container just to center our accordion

```html
<div class="container"><!-- here we are adding the accordion --></div>
```

Now we will create the accordion inside the container

```html
<div class="container"><div class="accordion"></div></div>
```

Inside the accordion div we will add a check box and a with a unique id. You may be asking yourself why a checkbox? Well this is how we will keep track of when the accordion is open or closed. Also because the checkbox has a unique id we can use a label to change the status of the checkbox.

```html
<div class="container">
  <div class="accordion">
    <input type="checkbox" id="gender-options" class="toggle" checked />
    <label class="title" for="gender-options"> Gender </label>
  </div>
</div>
```

Now we add a div with the class of content thats where we will put any content. Then we are going to create a div with a few links inside of it. Even though we are doing a menu you can use a paragraph or any type of element.

```html
<div class="container">
  <div class="accordion">
    <input type="checkbox" id="gender-options" class="toggle" checked />
    <label class="title" for="gender-options"> Gender </label>
    <div class="content ">
      <div class="menu">
        <a href="#" class="link">Male</a> <a href="#" class="link">Female</a>
      </div>
    </div>
  </div>
</div>
```

Now lets focus on the CSS because this is where the magic happens. First thing we need to do is make sure we are using box-sizing border-box. Then we are going to center our accordion by targeting the container and we are going to add the accordion class but we not going to do anything to it.

```css
* {
  box-sizing: border-box;
}

html,
body {
  font: 16px 'Roboto';
  background-color: #eee;
  color: #7a7572;
}

.container {
  margin: 3em auto;
  max-width: 30em;
}
.accordion {
}
```

So we are going to hide to hide the checkbox but even though we are hiding we can still use it to keep track of the accordion if its open or not. We will give some styles to the label using the title class. Also we will create a plus sign with the :before and :after on the right side of the label.

```css
.toggle {
  display: none;
}

.title,
.content {
  -webkit-backface-visibility: hidden;
  backface-visibility: hidden;
  -webkit-transform: translateZ(0);
  transform: translateZ(0);
  transition: all 0.2s;
}

.title {
  background: #fff;
  padding: 1rem;
  display: block;
  color: #7a7572;
  font-weight: bold;
  margin-bottom: 1rem;
}

.title:after,
.title:before {
  content: '';
  position: absolute;
  right: 1.25em;
  top: 1.25em;
  width: 2px;
  height: 0.75em;
  background-color: #7a7572;
  transition: all 0.2s;
}

.title:after {
  -webkit-transform: rotate(90deg);
  transform: rotate(90deg);
}
```

Now we will add the styles for the content area here you can target whatever content you put inside. Also we add transition on the content div to put how fast we want the accordion to open.

```css
.content {
  max-height: 0;
  overflow: hidden;
}
.content .link {
  border: 1px solid #fff;
  padding: 10px;
  display: inline-block;
  color: grey;
  text-decoration: none;
  transition: all 0.2s ease-in-out;
  display: flex;
  align-items: center;
  justify-content: center;
}
.content .link:hover,
.content .link.selected {
  background: red;
  color: white;
  font-weight: 700;
  border: 1px solid red;
}
```

This is the fun part so when you click on the title we check the toggle which is the checkbox and if the checkbox is checked then we expand the content area to a maximum height of 500 px. Thats possible because we are using the "+" sign to be able to target the title and content area because they are on the same level as the toggle. Also when the toggle is checked we target title:before and move one of the lines in a 90 degree this makes a minus sign.

```css
.toggle:checked + .title + .content {
  max-height: 500px;
}
.toggle:checked + .title:before {
  -webkit-transform: rotate(90deg) !important;
  transform: rotate(90deg) !important;
}
```

<iframe src="https://codesandbox.io/embed/3qml2r8r2q?fontsize=14" style="width:100%; height:500px; border:0; border-radius: 4px; overflow:hidden;" sandbox="allow-modals allow-forms allow-popups allow-scripts allow-same-origin"></iframe>

We are done hopefully you guys picked up a few tricks.
