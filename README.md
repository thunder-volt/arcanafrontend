step1: open new folder in terminal
     in terminal run the command 
```
git clone https://github.com/thunder-volt/arcanafrontend 
```
step2: in the terminal run the command 
```     
yarn 
```
step3: in the terminal run the command 
```
yarn run dev
```

Backend Repo: https://github.com/thunder-volt/arcanabackend.git
Hosted backend on Amazon Web Services and frontend on vercel
1.  Market Trend Indicator - We used a decision tree classifier to build this indicator, which predicts whether the market trend is positive or negative. We used a meter to display the prediction result.
   
2.  RSI - The Relative Strength Index (RSI) is a technical analysis indicator that measures the magnitude of recent price changes to evaluate overbought or oversold conditions. We included this indicator to help users identify potential buy or sell signals.
1. Used mathematical formula to calculate the RSI value
2. The Relative Strength Index (RSI) is a technical analysis indicator that measures the magnitude of recent price changes to evaluate overbought or oversold conditions in a security or market. The formula for calculating the RSI value is as follows:

RSI = 100 - (100 / (1 + RS))

where RS stands for the average of the x days' up closes divided by the average of the x days' down closes. The value of x is usually set to 14 days, but can be adjusted depending on the specific application.

The formula for calculating the RS is as follows:

RS = (Average Gain / Average Loss)

where Average Gain is the sum of gains over the x days divided by x, and Average Loss is the sum of losses over the x days divided by x.

To calculate the first RSI value, the initial x-day average gain and loss values are calculated as follows:

Average Gain = Sum of Gains over the past x periods / x

Average Loss = Sum of Losses over the past x periods / x

Once the initial values are calculated, subsequent RSI values are calculated using the following formula:

Current Average Gain = [(Previous Average Gain * (x - 1)) + Current Gain] / x

Current Average Loss = [(Previous Average Loss * (x - 1)) + Current Loss] / x

where Current Gain is the current period's gain, and Current Loss is the current period's loss.

Once the current Average Gain and Average Loss values are calculated, the RS and RSI values can be calculated using the above formulas.
   
3. Sentiment Analysis - We text blob to get the data for sentiment analysis. This indicator provides two columns of sentiment scores and emotional scores that can help users assess market sentiment.
Hugging Face provides a range of pre-trained models that can be used for sentiment analysis. We used the pre-trained model to do the sentiment analysis of each quarter.
   
4.  Moving Averages - We included three moving average indicators with different time frames (9 days, 12 days, and 24 days) to help users analyze the market trend over a range of periods.
    Moving averages are commonly used in technical analysis to smooth out short-term fluctuations and highlight longer-term trends in the data.
    1.  Exponential Moving Average (EMA):

EMA = (P - EMA_prev) * multiplier + EMA_prev

where P is the current closing price, EMA_prev is the previous EMA value, and multiplier is a smoothing factor that depends on the number of periods used in the calculation.

The multiplier can be calculated as follows:

multiplier = 2 / (N + 1)

where N is the number of periods used in the calculation.

4.  Market Price Movement Graph - This indicator displays the historical price movement of the market, providing a visual representation of the trend and volatility.
1. Interactive Price vs Time graph
5.  Market Volume Chart - This chart displays the trading volume of the market, which can help users assess market activity and liquidity.
6. LSTM model- In one of the python file we ran the model for one of the stocks are got very good predictions.
