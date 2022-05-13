from rest_framework import serializers
from .models import *

class userSerializer(serializers.ModelSerializer) :
    class Meta :
        model = user        
        fields = ['name','email','password']            


class progressSerializer(serializers.ModelSerializer) :
    class Meta :
        model = progress        
        fields = ['email' ,'problem_id_text']   
       
        
class submitSerializer(serializers.ModelSerializer) :
    class Meta :
        model = submit        
        fields = ['email' ,'code','problem_id']   
        
        
class problemSerializer(serializers.ModelSerializer) :
    class Meta :
        model = problem        
        fields = ['problem_id' ,'problem_content']   
        
        
class contentSerializer(serializers.ModelSerializer) :
    class Meta :
        model = content        
        fields = ['content_id' ,'content_content']   
        
class emailSerializer(serializers.ModelSerializer) :
    class Meta :
        model = content        
        fields = ['email'] 