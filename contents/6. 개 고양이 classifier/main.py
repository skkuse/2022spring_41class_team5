import data_preprocessor as dp
import model

path='./dataset/'

d=dp.data_preprocessor(path)

x_train,y_train,x_val,y_val,x_test,y_test=d.data_preprocess()

print(x_train.shape)

cnn=model.get_model()

cnn.compile(optimizer='adam',loss='binary_crossentropy',metrics=['acc'])

history=cnn.fit(x_train,y_train,epochs=10,batch_size=64,validation_data=(x_val,y_val))

print('***model evaluation***')
results=cnn.evaluate(x_test,y_test)
print(f'accuracy: {results[1]*100:.2f}')
