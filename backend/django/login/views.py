from django.shortcuts import render
from django.http import *
from rest_framework.response import *
from .models import *
from rest_framework import status
from rest_framework.views import APIView
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
        
        serializer = loginSerializer(data=request.data)
        if serializer.is_valid():
            print(serializer.data)
        
        newqueryset = progress.objects.filter(email=reemail)
        if newqueryset.exists():
            progressserializer = progressSerializer(newqueryset, many=True)
            print(progressserializer.data)
            return Response(progressserializer.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST) 


class submitapi(APIView):
    def get(self, request):
        queryset = submit.objects.all()
        print(queryset)
        serializer = submitSerializer(queryset, many=True)
        return Response(serializer.data)
    
    def post(self, request):
        # 입력받는 api는
        # id : int, (시간)
        # email = char * 45,    
        # code = text, 
        # problem_id = int
        serializer = submitSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            print(serializer.data)
            return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST) 
        
    
class problemapi(APIView):
    def post(self, request):
        queryset = user.objects.all()
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
# Create your views here.
