import pandas as pd
import numpy as np
from flask import *
from sklearn.linear_model import LinearRegression
from sklearn.model_selection import train_test_split
from sklearn.metrics import mean_absolute_error, mean_squared_error

# Define allowed files
ALLOWED_EXTENSIONS = {'csv'}

app = Flask(__name__)
def create_dataframe(orig):
    """
    Создает и возвращает объект pandas DataFrame на основе данных в orig.

    :param orig: объект pandas DataFrame, содержащий данные для DataFrame, который мы хотим создать
    :return: новый объект pandas DataFrame, содержащий только указанные столбцы
    """
    # список столбцов, которые мы хотим сохранить в новом DataFrame
    columns_to_keep = ['Name', 'Platform', 'Year_of_Release', 'Genre', 'Publisher', 'NA_Sales', 'EU_Sales', 'JP_Sales', 'Other_Sales', 'Critic score', 'Critic_Count', 'User_Score', 'User_Count', 'Developer', 'Rating']

    # создаем новый DataFrame на основе данных из orig, содержащий только указанные столбцы
    new_df = pd.DataFrame(orig, columns=columns_to_keep)

    # возвращаем новый DataFrame
    return new_df
# a=create_dataframe(orig)
# print(a)
def fillna_df(df, fill_value):
    df[['Name', 'Genre']] = df[['Name', 'Genre']].fillna(fill_value)
    df[['Critic score', 'Critic_Count','User_Score','User_Count']] = df[['Critic score', 'Critic_Count','User_Score','User_Count']].fillna(fill_value)
    df['Year_of_Release'] = df['Year_of_Release'].fillna(np.median(df['Year_of_Release']))
    df.loc[(df.Year_of_Release >2017), 'Year_of_Release'] = None
    df['Year_of_Release'] = df['Year_of_Release'].fillna(fill_value)
    df = df.dropna(subset = ['Year_of_Release'])
    return df
def train_linear_model(dataframe, x_column, y_column, test_size=0.2, random_state=1):
    X = np.array(dataframe[x_column]).reshape(-1, 1)
    y = np.array(dataframe[y_column])
    X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=test_size, random_state=random_state)
    model = LinearRegression()
    model.fit(X_train, y_train)
    y_pred = model.predict(X_test)
    mae = mean_absolute_error(y_test, y_pred)
    mse = mean_squared_error(y_test, y_pred)
    return model, X_train, X_test, y_train, y_test, y_pred, mae, mse
def calculate_metrics(y_test, y_pred):
    mae = mean_absolute_error(y_test, y_pred)
    mse = mean_squared_error(y_test, y_pred)
    return mae, mse

# @app.route("/data", methods=['GET','POST'])
# def data():
#     uploaded_file = request.get_json()
#     if uploaded_file!='':
#         return {"data": ["OK!", str(uploaded_file)]}

@app.route("/data", methods=['GET','POST'])
def predict():
      uploaded_file = request.get_json()['file']
      if uploaded_file!='':
        uploaded_file=pd.read_csv(uploaded_file)
        df=create_dataframe(uploaded_file)
        df=fillna_df(df,'Unknown')
        model, X_train, X_test, y_train, y_test, y_pred, mae, mse = train_linear_model(df, 'NA_Sales', 'JP_Sales')
        mae, mse = calculate_metrics(y_test, y_pred)
        mae=str(round(mae, 5))
        mse=str(round(mse, 5))

        return {'mae':mae,
                'mse':mse}

if __name__ == '__main__':
	app.run(debug=True)
