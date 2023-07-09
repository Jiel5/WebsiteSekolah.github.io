# first neural network with keras tutorial
from numpy import loadtxt
from tensorflow.keras.models import Sequential
from tensorflow.keras.layers import Dense
import numpy as numpy
import matplotlib.pyplot as plt
#1. Memuat data set
dataset = loadtxt('DataSetDiabetes/DataSetDiabetes.csv', delimiter=',')
# Memisahkan dataset menjadi kedalam variabel input (x) dan Target (T)
X = dataset[: , 0:8]
T = dataset[: , 8]

#2. membuat Model Keras
model = Sequential()
model.add(Dense(100, input_dim=8, activation='relu', use_bias=True))
model.add(Dense(100, activation='relu', use_bias=True))
model.add(Dense(100, activation='relu', use_bias=True))
model.add(Dense(8, activation='relu', use_bias=True))
model.add(Dense(1, activation='sigmoid'))

#3. Mengkompilasi Model Keras
model.compile(loss='binnary_crossentropy', optimizer='adam', metrics=['accuracy'])

#4. Training model keras
His=model.fit(X, T, epochs=250)
#Menampilkan Grafik Loss
#plt.plot(His.history['loss'])
#5. Melakukan Prediksi
HasilPrediki = model.predict(X)
#Menampilkan Hasil
Prediksi = (HasilPrediksi > 0.5).astype(int)
for i in range(25) :
	print('%s => %d (Harapan %d)' %(X[i].tolist(), Prediksi[i], T[i]))
plt.plot(His.history['loss']) 