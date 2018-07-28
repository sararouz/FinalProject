

from flask import Flask, render_template ,jsonify
import pandas as pd
import numpy as np
import matplotlib.pyplot as plt
import time
from scipy import interpolate
from sklearn import datasets, linear_model
from sklearn.metrics import mean_squared_error, r2_score
from scipy.signal import correlate
import scipy
from statsmodels.tsa.arima_model import ARIMA
import pickle

X = []
Y = []




def convertTime(date):
    pattern = '%B %d, %Y'
    return int(time.mktime(time.strptime(date, pattern)))


def convertTime2(date):
    pattern = '%Y %B'
    return int(time.mktime(time.strptime(date, pattern)))


def allData():
    global Y
    myData = []
    alldata = pd.read_csv('./Data/Table_1.3_Primary_Energy_Consumption_by_Source.csv')
    colNames = alldata.columns.values
    # print(colNames)
    for i,name in enumerate(colNames):
        temp = alldata[name].tolist()
        if i > 0 and name == 'Total Renewable Energy Consumption':
            temp1 = [0.0 if x=='Not Available' else float(x) for x in temp]
            myData.append(temp1)
            #plt.plot(myData[name],label=name)
        elif i == 0:
            myData.append([convertTime2(x) for x in temp])

    myF = interpolate.interp1d(myData[0],myData[1])
    newDates = np.arange(830847600,1519891200,86400)
    finalData = [newDates,myF(newDates)]
    pickle.dump(finalData,open('consumption.pickle','wb'))
    Y = myF(newDates)
    print('len(myData[1]):',len(myData[1]))
    print('len(finalData[1]):',len(finalData[1]))
    plt.plot(myData[0],myData[1], 'b*',label = 'Original Renewable Energy Consumption Data')
    plt.plot(finalData[0],finalData[1], 'r',label = 'Interpolated Renewable Energy Consumption Data')


    #print(myData['Coal Consumption'])
    plt.legend()
    plt.show()
    # plt.savefig('OriginalVsInterpolatedRE.png')
    plt.clf()
    # plt.show()





def ML():
    allData = {}
    propane = pd.read_csv('./Data/Propane-TX.csv')
    gasoline = pd.read_csv('./Data/Gasoline-NY.csv')
    diesel = pd.read_csv('./Data/Diesel-LA.csv')
    crude = pd.read_csv('./Data/Crude-Oil.csv')

    for data in [propane, diesel, gasoline, crude]:
        myData = []
        colNames = data.columns.values
        for i,name in enumerate(colNames):
            temp = data[name].tolist()
            if i > 0:
                temp1 = [0.0 if (x=='Not Available' or x == 'nan') else float(x) for x in temp]
                myData.append(temp1)
                #plt.plot(myData[name],label=name)
            else:
                myData.append([convertTime(x) for x in temp])


        myDate = []
        myValue = []
        for i in range(len(myData[0])):
            if myData[0][i] >= 830847600 and myData[0][i] <= 1519891200 :
                myDate.append(myData[0][i])
                myValue.append(myData[1][i])
        myF = interpolate.interp1d(myDate,myValue)
        newDates = np.arange(830847600,1519891200,86400)  # May 1, 1996 to March 1, 2018
        if name == 'Crude':
            allData[name] = [newDates,myF(newDates)/42.]
        else:
            allData[name] = [newDates,myF(newDates)]
        plt.plot(allData[name][0],allData[name][1], label=name+" Interpolated Prices")
        print(len(allData[name][0]))
    plt.legend()
    plt.savefig('OriginalVsInterpolatedPrices.png')
    plt.clf()

    # plt.show()
    pickle.dump(allData,open('prices.pickle','wb'))
    for k in allData:
        print(k)
        X.append(allData[k][1])




    # print([k for k in allData])


        # print(myData['Coal Consumption'])
    # plt.legend()

    # plt.show()
allData()
ML()



myX = np.asarray(X)
print("Pearson Correlation Feature 4:",scipy.stats.pearsonr(myX[3],Y))




X = np.transpose(np.asarray(X))
# X = np.asarray(X)
print('X.shape:',X.shape)
train_num = int(0.99*X.shape[0]) #7916
x_train = X[0:train_num]
print("x_train.shape:",x_train.shape)
x_test = X[train_num:]
print("x_test.shape:",x_test.shape)

print(x_test)

Y = np.asarray(Y)
print("Y.shape:",Y.shape)
y_train = Y[0:train_num]
print("y_train.shape:",y_train.shape)
y_test = Y[train_num:]
print("y_test.shape:",y_test.shape)

print(y_test)


y_train_detrend = scipy.signal.detrend(y_train)
# figure()
plt.plot(y_train,'r',label='Original Data')
plt.plot(y_train_detrend,'b',label='Detrended Data')
plt.legend()
#plt.show()
plt.savefig('OriginalvsDetrended.png')
plt.clf()


model = ARIMA(endog=y_train,exog=x_train,order=(10,0,2))
model_fit = model.fit()
# print(model_fit.summary())
# y_pred = model_fit.predict(start=len(y_train),end=len(y_train)+2,exog=x_test[0:3])
numPredict = 60
y_pred = model_fit.predict(start=len(y_train)-24,end=len(y_train)+numPredict-1,exog=x_test[0:numPredict])
myRes = {'myX':np.transpose(myX), 'y_train':y_train, 'y_test':y_test, 'x_train':np.transpose(x_train), 'x_test':np.transpose(x_test), 'y_pred':y_pred}
pickle.dump(myRes,open('myML.pickle','wb'))


plt.plot(np.arange(24),y_train[-24:],linestyle='None', marker='s',markeredgecolor='b',markerfacecolor='none')
plt.plot(np.arange(24),y_pred[:-numPredict],linestyle='None',marker='o',markeredgecolor='r',markerfacecolor='none')
plt.plot(np.arange(24,24+numPredict),y_test[0:numPredict],linestyle='None',marker='d',markeredgecolor='b',markerfacecolor='none')
plt.plot(np.arange(24,24+numPredict),y_pred[-numPredict:],linestyle='None',marker='*',markeredgecolor='r',markerfacecolor='none')
plt.legend()
plt.savefig('ARIMA.png')
plt.clf()

# plt.show()




regr = linear_model.LinearRegression()
regr = linear_model.BayesianRidge()
regr.fit(x_train, y_train)
y_pred = regr.predict(x_test)

print("Mean squared error: %.2f"
      % mean_squared_error(y_test, y_pred))
# Explained variance score: 1 is perfect prediction
print('Variance score: %.2f' % r2_score(y_test, y_pred))

plt.plot(y_test,'b*')
plt.plot(y_pred,'k')
plt.savefig('Regression.png')
plt.clf()

# plt.show()
