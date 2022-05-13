from pickle import FALSE
from django.db import models

class user(models.Model):
    #user_id = models.IntegerField(primary_key=True, blank=False)
    name = models.CharField(max_length=45, blank=False)
    email = models.CharField(max_length=45,primary_key=True, blank=False)
    password = models.CharField(max_length=45, blank=False)


class progress(models.Model):
    email = models.CharField(max_length=45, blank=False, null=True)
    problem_id_text = models.TextField(blank=False, null=True)

        
class submit(models.Model):
    id = models.IntegerField(primary_key=True, blank=FALSE)
    email = models.CharField(max_length=45, blank=False, null=True)
    code = models.TextField(blank=False)
    problem_id = models.IntegerField(blank=False)
    
        
class problem(models.Model):
    problem_id = models.IntegerField(primary_key=True, blank=False)
    problem_content = models.TextField(blank=False)
    
                
class content(models.Model):
    content_id = models.IntegerField(primary_key=True, blank=False)
    content_content = models.TextField(blank=False)

