---
title: 'How to build an accordion menu with css'
date: '2019-02-25'
category: 'Tutorials'
tags: design, development
cover_image: '/img/blog/how-to-build-an-accordion-menu-with-css.png'
author: 'Joe Santos Garcia'
author_image: '/img/blog/authors/joe-santos-garcia.png'
---

Ok guys so ever wonder how to create an accordion menu with just css? No Javascript required!

For this example we will create a container just to center our accordion

```html
<div class="container">
  <!-- here we are adding the accordion -->
</div>
```

Now we will create the accordion inside the container
```html
<div class="container">
  <div class="accordion">
  </div>
</div>
```

Inside the accordion div we will add a check box and a with a unique id. You may be asking yourself why a checkbox? Well this is how we will keep track of when the accordion is open or closed. Also because the checkbox has a unique id we can use a label to change the status of the checkbox.
```html
<div class="container">
  <div class="accordion">
    <input type="checkbox" id="gender-options" class="toggle" checked />    
    <label class="title" for="gender-options">
      Gender
    </label>

  </div>
</div>
```

Now we add a div with the class of content thats where we will put any content. Then we are going to create a div with a few links inside of it. Even though we are doing a menu you can use a paragraph or any type of element.
```html
<div class="container">
  <div class="accordion">
    <input type="checkbox" id="gender-options" class="toggle" checked />    
    <label class="title" for="gender-options">
      Gender
    </label>
    <div class="content ">
      <div class="menu">
        <a href="#" class="link">Male</a>
        <a  href="#" class="link">Female</a>
      </div>
    </div>
  </div>
</div>
```
