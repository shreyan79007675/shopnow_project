from django.urls import path

from . import views

urlpatterns=[
    path('',views.home,name='home'),
    path('login/',views.loginview,name='login'),
    path('userhome/',views.userhomeview,name='userhome'),
    path('signup/',views.signupview,name='signup'),
    path('cloth/',views.clothview,name='cloth'),
    path('groc/',views.grocview,name='groc'),
    path('elec/',views.elecview,name='elec'),
    path('cloth2/',views.clothuserview,name='cloth2'),
    path('groc2/',views.grocuserview,name='groc2'),
    path('elec2/',views.elecuserview,name='elec2'),
    path('cart/',views.cartview,name='cart'),
    path('signup/register',views.registerview,name='register'),
    path('login/loginpage',views.loginpageview,name='loginpage'),
    path('logoutmypage/',views.logoutmypageview,name='logoutmypage'),
    path('terms/',views.termsview,name='terms'),
    path('about/',views.aboutview,name='about'),
    path('contact/',views.contactview,name='contact'),
    path('help/',views.helpview,name='help'),
    path('userterms/',views.usertermsview,name='userterms'),
    path('userabout/',views.useraboutview,name='userabout'),
    path('usercontact/',views.usercontactview,name='usercontact'),
    path('userhelp/',views.userhelpview,name='userhelp'),
    path('helpresult/',views.helpresultview,name='helpresult'),
    path('userhelpresult/',views.userhelpresultview,name='userhelpresult'),


]
