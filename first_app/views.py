from django.shortcuts import render,redirect
from django.http import HttpResponse
from django.contrib import messages
from django.contrib.auth.models import User,auth
# Create your views here.

def home(request):
    return render(request,'home.html')

def contactview(request):
    return render(request,'contact.html')

def aboutview(request):
    return render(request,'about.html')

def helpview(request):
    return render(request,'help.html')

def usercontactview(request):
    return render(request,'usercontact.html')

def useraboutview(request):
    return render(request,'userabout.html')

def userhelpview(request):
    return render(request,'userhelp.html')

def usertermsview(request):
    return render(request,'userterms.html')

def helpresultview(request):
    return render(request,'helpresult.html')


def userhelpresultview(request):
    return render(request,'userhelpresult.html')

def cartview(request):
    return render(request,'cart.html')

def termsview(request):
    return render(request,'terms.html')

def userhomeview(request):
    return render(request,'user.html')

def loginview(request):
    return render(request,'login.html')

def signupview(request):
    return render(request,'signup.html')

def clothview(request):
    return render(request,'clothing.html')

def grocview(request):
    return render(request,'groc.html')

def elecview(request):
    return render(request,'elec.html')


def clothuserview(request):
    return render(request,'clothing2.html')

def grocuserview(request):
    return render(request,'groc2.html')

def elecuserview(request):
    return render(request,'elec2.html')


def registerview(request):
    if request.method=='POST':
        val_email=request.POST['email']
        val_username=request.POST['username']
        val_password1=request.POST['password1']
        val_password2=request.POST['password2']
        if (val_password1==val_password2):
            if User.objects.filter(username=val_username).exists():
                messages.info(request,'Username Taken')
            elif User.objects.filter(email=val_email).exists():
                messages.info(request,'Email Taken')
            else:
                user=User.objects.create_user(username=val_username,password=val_password1,email=val_email)
                user.save();
                print("User created")
                return redirect('login')
        else:
            messages.info(request,'Not Registered')
        return render(request,'signup.html')

    else:
        return render(request,'signup.html')

def loginpageview(request):
    if request.method=='POST':
        val_username=request.POST['username']
        val_password=request.POST['password']

        user=auth.authenticate(username=val_username,password=val_password)

        if user is not None:
            auth.login(request,user)
            return redirect("userhome")
        else:
            messages.info(request,'Incorrect Credentials')
            return redirect('login')

    else:
        return render(request,'signup.html')

def logoutmypageview(request):
    auth.logout(request)
    return redirect('/')



def contactviewu(request):
    return render(request,'usercontact.html')

def aboutviewu(request):
    return render(request,'userabout.html')

def helpviewu(request):
    return render(request,'userhelp.html')

def termsviewu(request):
    return render(request,'userterms.html')
