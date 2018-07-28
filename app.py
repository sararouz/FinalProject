
from flask import Flask, render_template ,jsonify
import pandas as pd
import numpy as np
import matplotlib.pyplot as plt
import pickle

# # Database Setup
# engine = create_engine("sqlite:///university_data.sqlite")
# # reflect an existing database into a new model
# Base = automap_base()
# # reflect the tables
# Base.prepare(engine, reflect=True)

def isString(x):
    try:
        float(x)
        return False
    except:
        return True


app = Flask(__name__)

@app.route("/")
def home():
    return render_template("index.html")

@app.route("/consumptiondata")
def consumptionAllData():
    myData ={}
    alldata = pd.read_csv('./Data/Table_1.3_Primary_Energy_Consumption_by_Source.csv')
    colNames = alldata.columns.values
    for i,name in enumerate(colNames):
        temp = alldata[name].tolist()
        if i > 0:
            temp1 = [0.0 if x=='Not Available' else float(x) for x in temp]
            myData[name] = temp1
        else:
            myData[name] = temp
    # print(myData['Coal Consumption'])
    # plt.plot(myData['Coal Consumption'])
    # plt.show()

    return jsonify(myData)


@app.route("/conprorenewdata")
def consumptionProductionRenewableData():
    myData ={}
    alldata = pd.read_csv('./Data/Table_10.1_Renewable_Energy_Production_and_Consumption_by_Source.csv')
    colNames = alldata.columns.values
    for i,name in enumerate(colNames):
        temp = alldata[name].tolist()
        if i > 0:
            temp1 = [0.0 if x=='Not Available' else float(x) for x in temp]
            myData[name] = temp1
        else:
            myData[name] = temp
    # print(myData['Coal Consumption'])
    # plt.plot(myData['Coal Consumption'])
    # plt.show()

    return jsonify(myData)




@app.route("/bysector")
def sectorData():
    myData ={}
    alldata = pd.read_csv('./Data/bysector.csv')
    colNames = alldata.columns.values
    for i,name in enumerate(colNames):
        temp = alldata[name].tolist()
        if i > 0:
            temp1 = [0.0 if isString(x) else float(x) for x in temp]
            myData[name] = temp1
        else:
            myData[name] = temp
    # print(myData['Coal Consumption'])
    # plt.plot(myData['Coal Consumption'])
    # plt.show()

    return jsonify(myData)


@app.route("/renewdata")
def renewData():
    consumption = pickle.load(open('consumption.pickle','rb'))
    print(consumption[0],consumption[1][0])
    myData = {'dates':consumption[0].tolist(),'values':consumption[1].tolist()}
    return jsonify(myData)
    # myData ={}
    # alldata = pd.read_csv('./Data/Table_10.1_Renewable_Energy_Production_and_Consumption_by_Source.csv')
    # colNames = alldata.columns.values
    # for i,name in enumerate(colNames):
    #     temp = alldata[name].tolist()
    #     if i > 0:
    #         temp1 = [0.0 if x=='Not Available' else float(x) for x in temp]
    #         myData[name] = temp1
    #     else:
    #         myData[name] = temp
    # # print(myData['Coal Consumption'])
    # # plt.plot(myData['Coal Consumption'])
    # # plt.show()
    #
    # return jsonify(myData)

@app.route("/prices")
def prices():
    prices = pickle.load(open('prices.pickle','rb'))
    for k in prices:
        print(k)
        prices[k] = {'dates':prices[k][0].tolist(),'values':prices[k][1].tolist()}
    return jsonify(prices)

@app.route("/result")
def result():
    result = pickle.load(open('myML.pickle','rb'))
    prices = pickle.load(open('prices.pickle','rb'))
    consumption = pickle.load(open('consumption.pickle','rb'))
    for k in result:
        result[k] = result[k].tolist()
    for k in prices:
        prices[k] = [prices[k][0].tolist(),prices[k][1].tolist()]
    consumption[0] = consumption[0].tolist()
    consumption[1] = consumption[1].tolist()

    return jsonify({'result':result, 'prices': prices, 'consumption':consumption})



if __name__ == "__main__":
    app.run(debug=True)
