from email.policy import strict
from turtle import st
from django.contrib import admin
from .models import *
# Register your models here.



admin.site.register(user)
admin.site.register(progress)
admin.site.register(submit)
admin.site.register(problem)
admin.site.register(content)
admin.site.register(skeleton)
