---
title: 'How to install laravel in windows 10 bash ubuntu'
date: '2018-05-09'
category: 'Tutorial'
tags: design, development
cover_image: '/img/blog/install_laravel_in_windows_10.jpg'
author: 'Joe Santos Garcia'
author_image: '/img/blog/authors/joe-santos-garcia.png'
author_link: 'https://www.codingphase.com'
---

<iframe src="https://www.youtube.com/embed/xt0iUBjL2JI" width="100%" height="400" frameborder="0" allowfullscreen="allowfullscreen"></iframe>

Alright so you have been looking everywhere on how to install laravel in windows 10 bash ubuntu.

Well here's the tutorial that you have been looking for... but before we start.

I'm assuming that you have MAMP, mysql workbench and Ubuntu installed. If you don't check this videos before you start this.

[https://codingphase.teachable.com/p/all-installations-you-will-need-for-web-development](https://codingphase.teachable.com/p/all-installations-you-will-need-for-web-development)
<a href="https://codingphase.teachable.com/p/all-installations-you-will-need-for-web-development">https://codingphase.teachable.com/p/all-installations-you-will-need-for-web-development</a>

Alright lets get started.

1 - Run each one of these commands on your bash ubuntu to get php and composer

```bash
sudo apt install php7.0-cli
sudo add-apt-repository ppa:ondrej/php
sudo apt-get update
sudo apt-get install php7.1
sudo apt install php-mbstring php-xml php-zip php-fpm php-mysql
```

2 - install composer run these commands on your bash Ubuntu

```bash
php -r "copy('https://getcomposer.org/installer', 'composer-setup.php');"
php -r "if (hash_file('SHA384', 'composer-setup.php') === '544e09ee996cdf60ece3804abc52599c22b1f40f4323403c44d44fdfdd586475ca9813a858088ffbc1f233e9b180f061') { echo 'Installer verified'; } else { echo 'Installer corrupt'; unlink('composer-setup.php'); } echo PHP_EOL;"
php composer-setup.php
php -r "unlink('composer-setup.php');"
composer global require "laravel/installer"
```

3 - Change directory into your C drive

```bash
cd /mnt/c
```

4 - Create or find the directory where you want your projects to be, I'm going to create a project folder on the c drive (this is my preference you can put it where you want) then I'm going to go inside of the projects folder

```bash
mkdir projects
cd projects
```

5 - create your laravel project

```bash
composer create-project --prefer-dist laravel/laravel write-your-project-name-here
```

6 - change directory to laravel project

```bash
cd project-name
```

7 - Create mysql Database for application I use workbench to create a new schema but if you like you can use phpmyadmin through your browser just make sure collation is utf8mb4

```bash
http://localhost:8888/MAMP/index.php?page=phpmyadmin&amp;language=English
```

8 - Copy the ".env.example" in your laravel root to a new file called ".env"

9 - put your database information on the .env file

```bash
DB_CONNECTION=mysql
DB_HOST=127.0.0.1
DB_PORT=3306
DB_DATABASE=databasename
DB_USERNAME=root
DB_PASSWORD=root
```

10 - then test your connection to your database by running the migration on your database

```bash
php artisan migrate:refresh
```

11 - If you are running an older version of mysql and get a database error

open app/Providers/AppServiceProvider.php

12 - add Schema to the top

```php
use Illuminate\Support\ServiceProvider;
use Schema;
```

13 - and replace boot function with this

```bash
public function boot()
{
    Schema::defaultStringLength(191);
}
```

14 - if you see this message migrations were created successfully you are ready to move on

```bash
Migration table not found.
Migration table created successfully.
Migrating: 2014_10_12_000000_create_users_table
Migrated:  2014_10_12_000000_create_users_table
Migrating: 2014_10_12_100000_create_password_resets_table
Migrated:  2014_10_12_100000_create_password_resets_table
```

15 - Now in your mamp webserver location to the location of your laravel project's public folder let the server restart

now go to your browser. Put in the browser

```bash
http://localhost:8888
```

16 - if you get an error saying key not found then run this on your terminal

```bash
php artisan key:generate
```

17 - then refresh your browser

```bash
http://localhost:8888
```

if you see the laravel page then you have successfully installed laravel. You don't have to go through this hassle every time, but you will have to repeat steps 5 to 17 every time you want to start a new project.
