from django.shortcuts import render
from django.http import *
from rest_framework.response import *
from .models import *
from rest_framework import status
from rest_framework.views import APIView
from rest_framework.parsers import *
from .serializers import *



class userapi(APIView):
    def get(self, request):
        queryset = user.objects.all()
        serializer = userSerializer(queryset, many=True)
        print(queryset)
        return Response(serializer.data)
        
    
    def post(self, request):
        serializer = userSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        print(serializer.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST) 
    
    
    def put(self, request):
        serializer = loginSerializer(data=request.data)
        if serializer.is_valid():
            print(serializer.data)
        queryset = user.objects.all()
        dbserializer = userSerializer(queryset, many=True)
        for i in dbserializer.data:
            if i["email"] == serializer.data['email'] and i["password"] == serializer.data['password']:
                return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST) 

        
        """
        if request.method == 'GET':
            queryset = user.objects.all()
            serializer = userSerializer(queryset, many=True)
            return JsonResponse(serializer.data, safe=False)

        elif request.method == 'POST':
            data = JSONParser().parse(request)
            serializer = userSerializer(data=data)
            if serializer.is_valid():
                serializer.save()
                return JsonResponse(serializer.data, status=201)
            return JsonResponse(serializer.errors, status=400)
            
        elif request.method == 'PUT':
            serializer = userSerializer(user, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
        """
        
class progressapi(APIView):
    def get(self, request):
        reemail = request.GET.get('email', None)
        print(reemail)
        serializer = loginSerializer(data=request.data)
        if serializer.is_valid():
            print(serializer.data)
        
        newqueryset = progress.objects.filter(email=reemail)
        if newqueryset.exists():
            progressserializer = progressSerializer(newqueryset, many=True)
            print(progressserializer.data)
            return Response(progressserializer.data)
        
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST) 
    
    def post(self, request):
        serializer = progressSerializer(progress,data=request.data)
        for i in serializer():
            print(i)
        if serializer.is_valid():
            print(serializer)
            serializer.save()
            return Response(serializer.data)
        print(serializer.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST) 



class submitapi(APIView):
    def get(self, request):
        queryset = submit.objects.all()
        print(queryset)
        serializer = submitSerializer(queryset, many=True)
        return Response(serializer.data)
    
    
    def post(self, request):
        try:
            model = submit.objects.get(email = request.data['email'])
            model.delete()
        except:
            pass
        serializer = submitSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
        
        
    
class problemapi(APIView):
    def get(self, request):
        queryset = problem.objects.all()
        print(queryset)
        serializer = problemSerializer(queryset, many=True)
        return Response(serializer.data)
    
class contentapi(APIView):
    def get(self, request):
        queryset = content.objects.all()
        serializer = contentSerializer(queryset, many=True)
        print(serializer.data)
        return Response(serializer.data)


class skeletonapi(APIView):
    def get(self, request):
        queryset = skeleton.objects.all()
        serializer = skeletonSerializer(queryset, many=True)
        print(serializer.data)
        return Response(serializer.data)
    
    def post(self, request):
        serializer = skeletonSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        print(serializer.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST) 
