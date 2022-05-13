# 6번은 직접 서버에서 돌려보면서 코드를 수정해야할 것 같습니다

def solution():
    from keras.layers import Conv2D,MaxPooling2D,Flatten,Dense,Dropout
    from keras.models import Sequential
    import data_preprocessor as dp

    def get_model():
        model=Sequential()
        # 이곳에 코드를 작성하세요

        model.summary()
        return model

    path='./dataset/'

    d=dp.data_preprocessor(path)

    x_train,y_train,x_val,y_val,x_test,y_test=d.data_preprocess()

    print(x_train.shape)

    cnn=get_model()

    cnn.compile(optimizer='adam',loss='binary_crossentropy',metrics=['acc'])

    history=cnn.fit(x_train,y_train,epochs=10,batch_size=64,validation_data=(x_val,y_val))

    print('***model evaluation***')
    results=cnn.evaluate(x_test,y_test)
    print(f'accuracy: {results[1]*100:.2f}')

    return results