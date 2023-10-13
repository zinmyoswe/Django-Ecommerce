# Django E-commerce.

<p align='center'>
<img src="https://img.shields.io/badge/Django-239120?logo=django&logoColor=white" />
<img src="https://img.shields.io/badge/Python-239120?logo=python&logoColor=white" />
<img src="https://img.shields.io/badge/SQL%20Server-CC2927?logo=microsoft-sql-server&logoColor=white" />
<img src="https://img.shields.io/badge/html5-E34F26?logo=html5&logoColor=white" />
<img src="https://img.shields.io/badge/css3-1572B6?logo=css3&logoColor=white" />
<img src="https://img.shields.io/badge/bootstrap-563D7C?logo=bootstrap&logoColor=white" />
<img src="https://img.shields.io/badge/Github-181717?logo=github&logoColor=white" />
<img src="https://img.shields.io/badge/PayPal-000144?logo=paypal&logoColor=white" />
</p>


<hr class="dotted">

Ecommerce website built with Django 2.2.3, Python 3.7.3, and AWS(still working on it)

## About this Project:

The repository is a start point for most of my professional projects; for this, I'm using as a part of my portfolio, feel free to use wherever you want. I'll be happy if you provide any feedback or code improvements or suggestions.

<img src="https://user-images.githubusercontent.com/29988949/65267147-499fc580-dac9-11e9-90e8-eccbc93c7c3a.png" align="left" height="50%" width="50%" > <img src="https://user-images.githubusercontent.com/29988949/65999313-ff67fe00-e451-11e9-9ed9-fc7bce704f17.png" align="right" height="50%" width="50%" >


`Product Slide`
<img src="https://user-images.githubusercontent.com/29988949/65267147-499fc580-dac9-11e9-90e8-eccbc93c7c3a.png" width = "60%">

`Shop Page`
<img src="https://user-images.githubusercontent.com/29988949/65999313-ff67fe00-e451-11e9-9ed9-fc7bce704f17.png">

![image](https://user-images.githubusercontent.com/29988949/66098968-923f9000-e559-11e9-8691-cd5c2b181ca1.png)

`Product Detail Page`
![image](https://user-images.githubusercontent.com/29988949/66291084-bff84200-e895-11e9-8d53-3aa23b29dbae.png)

`Cart Page`
![image](https://user-images.githubusercontent.com/29988949/66291144-f0d87700-e895-11e9-8545-b8f93f799063.png)

`BillingAddress Page`
![image](https://user-images.githubusercontent.com/29988949/66291542-013d2180-e897-11e9-8ea9-40afcb90cee2.png)

`Stripe Payment Page`
![image](https://user-images.githubusercontent.com/29988949/66291610-29c51b80-e897-11e9-8b47-20de35d6c1d0.png)

`Order Success Page`
![image](https://user-images.githubusercontent.com/29988949/66291657-3e091880-e897-11e9-830b-6cf44e72a995.png)

## Installation

```
$ pip install django`
$ virtualenv env`

```
### For Mac/ Linux
```
`source env/bin/activate`
```
### For Window
```
`env\scripts\activate`

`pip install -r requirements.txt`

`python manage.py makemigrations`

`python manage.py migrate`

`python manage.py runserver`
```
## For Admin Login

```
python manage.py createsuperuser
Username : admin
Password : 12345678
```
## Potential Error and solutions
### 
django python tried to input http instead of https, but still have the following error: [13/Oct/2023 18:45:36] code 400, message Bad request version ('u|q&L¹°zUÀ\x00"\x13\x01\x13\x03\x13\x02À+À/Ì©Ì¨À,À0À')
[13/Oct/2023 18:45:36] You're accessing the development server over HTTPS, but it only supports HTTP.

This error indicates that there's an attempt to access the Django development server over HTTPS, but it only supports HTTP. This might be due to a few reasons:
1. **Clear browser cache**: Clear the cache of your browser and try again. Sometimes, the browser remembers that it should access a certain URL via HTTPS and tries to do so every time.



# HTML Template

https://colorlib.com/etc/fashe/index.html



## Some technical information:

- Django - 3.1.1 
- Django Allauth - 0.42.0
- Django Crispy Forms - 1.9.2
- Django Environ - 0.4.5
- Stripe - 2.51.0


## To Install:

Cloning the Repository:

```
$ git clone https://github.com/fl4viooliveira/django_ecommerce.git

$ cd django_ecommerce 

```

Installing the environment control:

```
$ pip install virtualenv

$ virtualenv env

```

Activating the environment:

on Windows:
```
env\Scripts\activate

```
on Mac OS / Linux:
```
$ source env/bin/activate

```

Installing dependencies:

```
$ pip install -r requirements.txt

```

Create a .env file on ecom folder (/ecom/.env) setting all requirements without using space after "=". 

Copy and paste on our .env file:

```
DEBUG=
SECRET_KEY=
DEFAULT_FROM_EMAIL=
NOTIFY_EMAIL=
PAYPAL_SANDBOX_CLIENT_ID=
PAYPAL_SANDBOX_SECRET_KEY=
PAYPAL_LIVE_CLIENT_ID=
PAYPAL_LIVE_SECRET_KEY=
STRIPE_PUBLIC_KEY=
STRIPE_SECRET_KEY=
STRIPE_WEBHOOK_SECRET=

```

Last commands to start:

```
$ python manage.py makemigrations

$ python manage.py migrate

```
Create a super user:

```
$ python manage.py createsuperuser admin-name

```

Finishing running server:

```
$ python manage.py runserver

```

## Contributing

You can send how many PR's do you want, I'll be glad to analyse and accept them! And if you have any question about the project...


Thank you!

## License

<a href="https://github.com/fl4viooliveira/django_ecommerce/blob/master/LICENSE">
    <img alt="NPM" src="https://img.shields.io/npm/l/license?style=for-the-badge">
</a>&nbsp;&nbsp;

This project is licensed under the MIT License - see the [LICENSE.md](https://github.com/fl4viooliveira/django_ecommerce/blob/master/LICENSE) file for details.
