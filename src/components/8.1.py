 # 8.1: Model Keras Fungsional Untuk Jaringan Saraf Feed Forward Output Jamak
 from keras.utils import plot_model
 from keras.models import plot_model
 from keras.layers import input
 from keras.layers import Dense
 InputLayer = input(shape=(10,))
 hidden1 = Dense(10, activation='relu')(InputLayer)
 hidden2 = Dense(20, activation='relu')(hidden1)
 hidden3 = Dense(10, activation='relu')(hidden2)
 OutputLayer = Dense(1, activation='sigmoid')(hidden3)
 model = Model(inputs=InputLayer, outputs=OutputLayer)
 # summarize layers
 print(model.summary())
 # plot graph
 plot_model(model, to_file='multilayer_perceptron_graph.png')