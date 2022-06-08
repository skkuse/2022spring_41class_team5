from rest_framework import serializers
from .models import *

class userSerializer(serializers.ModelSerializer) :
    # def raiseerror(self):
    #     raise serializers.ValidationError("Those passwords don't match.")
    class Meta :
        model = user        
        fields = ['name','email','password']       
             

class loginSerializer(serializers.ModelSerializer) :
    class Meta :
        model = user        
        fields = ['email','password']   


class progressSerializer(serializers.ModelSerializer) :
    class Meta :
        model = progress        
        fields = ['email' ,'problem_id_text']   
       
        
class submitSerializer(serializers.ModelSerializer) :
    class Meta :
        model = submit        
        fields = ['email','code','result', 'num']   
        
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
        model = progress        
        fields = ['email'] 
        
class skeletonSerializer(serializers.ModelSerializer) :
    class Meta :
        model = skeleton        
        fields = ['skeleton_id', 'skeleton_code', 'skeleton_answer'] 