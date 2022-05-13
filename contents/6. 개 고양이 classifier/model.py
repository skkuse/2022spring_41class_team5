from keras.layers import Conv2D,MaxPooling2D,Flatten,Dense,Dropout
from keras.models import Sequential


def get_model():

    model=Sequential()

    model.add(Conv2D(16,(3,3),activation='relu',input_shape=(150,150,3)))
    model.add(MaxPooling2D((2,2)))

    model.add(Conv2D(32,(3,3),activation='relu'))
    model.add(MaxPooling2D((2,2)))

    model.add(Conv2D(64,(3,3),activation='relu'))
    model.add(MaxPooling2D((2,2)))
    
    model.add(Flatten())
    model.add(Dense(512,activation='relu'))
    model.add(Dropout(0.5))
    model.add(Dense(1,activation='sigmoid'))

    model.summary()

    return model

def get_model1():
    model=Sequential()

    model.add(Conv2D(16,(3,3),activation='relu',input_shape=(150,150,3)))
    model.add(MaxPooling2D((2,2)))

    model.add(Conv2D(32,(3,3),activation='relu'))
    model.add(MaxPooling2D((2,2)))

    model.add(Conv2D(64,(3,3),activation='relu'))
    model.add(MaxPooling2D((2,2)))

    model.add(Conv2D(128,(3,3),activation='relu'))
    model.add(MaxPooling2D(2,2))

    model.add(Flatten())
    model.add(Dense(512,activation='relu'))
    model.add(Dense(1,activation='sigmoid'))

    model.summary()

    return model
