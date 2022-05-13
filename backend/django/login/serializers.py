from rest_framework import serializers
from .models import *

class userSerializer(serializers.ModelSerializer) :
    class Meta :
        model = user        
        fields = ['user_id' ,'name','email','password']            


class progressSerializer(serializers.ModelSerializer) :
    class Meta :
        model = progress        
        fields = ['user_id' ,'problem_id']   
       
        
class submitSerializer(serializers.ModelSerializer) :
    class Meta :
        model = submit        
        fields = ['user_id' ,'code','problem_id']   
        
        
class problemSerializer(serializers.ModelSerializer) :
    class Meta :
        model = problem        
        fields = ['problem_id' ,'problem_content']   
        
        
class contentSerializer(serializers.ModelSerializer) :
    class Meta :
        model = content        
        fields = ['content_id' ,'content_content']   