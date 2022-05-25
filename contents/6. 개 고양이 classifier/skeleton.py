# 6번은 직접 서버에서 돌려보면서 코드를 수정해야할 것 같습니다

from tensorflow import keras
from keras.layers import Conv2D,MaxPooling2D,Flatten,Dense,Dropout
from keras.models import Sequential
import numpy as np
from sklearn.model_selection import train_test_split
from keras.preprocessing import image


class data_preprocessor():
    def __init__(self,path):
        self.path=path
    
    def data_preprocess(self):

        path_dog=self.path+'/dogs'
        path_cat=self.path+'/cats'

        # bring dog images : lable 0
        x_dogs=[np.array(image.load_img(path_dog+'/dog.{}.jpg'.format(i+1),target_size=(150,150))) for i in range(0,1500)]

        # bring cat images : lable 1
        x_cats=[np.array(image.load_img(path_cat+'/cat.{}.jpg'.format(i+1),target_size=(150,150))) for i in range(0,1500)]

        x_dogs=np.array(x_dogs)
        x_cats=np.array(x_cats)

        # make target and lables
        x_data=np.concatenate((x_dogs,x_cats))
        y_data=np.concatenate((np.full(len(x_dogs),0),np.full(len(x_cats),1)))

        np.save('./cats_and_dogs',x_data)

        x_data=x_data.astype('float32')/255.

        # make train,test,validation set
        x_train,x_test,y_train,y_test=train_test_split(x_data,y_data,stratify=y_data,test_size=0.1)
        x_train,x_val,y_train,y_val=train_test_split(x_train,y_train,stratify=y_train,test_size=0.1)

        print('***training set***') 
        print(f'x_train : {x_train.shape} y_train : {y_train.shape}') 
        print() 
        print('***validation set***') 
        print(f'x_train : {x_val.shape} y_val : {y_val.shape}') 
        print() 
        print('***test set***') 
        print(f'x_test : {x_test.shape} y_test : {y_test.shape}')

        return x_train,y_train,x_val,y_val,x_test,y_test

def solution():


    def get_model():
        model=Sequential()
        # 이곳에 코드를 작성하세요

        model.summary()
        return model

    path='./dataset/'

    d=data_preprocessor(path)

    x_train,y_train,x_val,y_val,x_test,y_test=d.data_preprocess()

    print(x_train.shape)

    cnn=get_model()

    cnn.compile(optimizer='adam',loss='binary_crossentropy',metrics=['acc'])

    history=cnn.fit(x_train,y_train,epochs=10,batch_size=64,validation_data=(x_val,y_val))

    print('***model evaluation***')
    results=cnn.evaluate(x_test,y_test)
    print(f'accuracy: {results[1]*100:.2f}')

    return results[1]

#################################skeleton answer#######################################

# 맞은 문제 개수
sum=0

#전체 문제 개수
num_pb=1

if(solution()>=75.0) : sum+=1

if(sum==num_pb) : print(f'pass ({sum}/{num_pb})')
else : print(f'fail ({sum}/{num_pb})')