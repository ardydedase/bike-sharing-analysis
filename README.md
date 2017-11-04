
# Bike Sharing Demand


## Setup

```
virtualenv venv -p /usr/local/bin/python3
source venv/bin/activate
pip install -r requirements.txt
ipython notebook
```

## Notebook

![See Notebook](./bike-sharing.ipynb) 


## References

For weather API
http://api.openweathermap.org/data/2.5/forecast/daily?q=washington,usa&cnt=16&appid=b231606340553d9174136f7f083904b3&units=metric

Weather condition map
https://openweathermap.org/weather-conditions

```
// 1 = Clear, 2 = Misty, 3 = Light rain or snow, 4 = heavy rain
var weatherConditionsMapping = [];
weatherConditionsMapping['clear'] = [800, 801, 802, 803, 951, 952, 953, 954];
weatherConditionsMapping['misty'] = [701, 711, 721, 731, 741, 751, 761, 762, 771, 781];
weatherConditionsMapping['lightrain'] = [200, 201, 210, 230, 230, 300, 301, 302, 310, 311, 500, 501, 520, 521, 600, 601, 611, 612, 615, 620, 621, 804, 955, 956];
weatherConditionsMapping['heavyrain'] = [202, 211, 212, 221, 231, 232, 312, 313, 314, 321, 502, 503, 504, 511, 522, 531, 602, 616, 622, 900, 901, 902, 903, 904, 905, 906, 957, 958, 959, 960, 961, 962];
```

