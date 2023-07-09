import matplotlib.pyplot as plt
from scipy.io import wavfile
sNamaFileWav ="./DatasetSuara/tes/Buka (2).wav"
samplerate,data=wavfile.read(sNamaFileWav)
plt.plot(data)