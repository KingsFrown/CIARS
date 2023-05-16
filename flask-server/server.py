from flask import *

app = Flask(__name__)

# Members API Route

@app.route("/members")
def members():
    return {"members": ["Member1", "Member2"]}

@app.route("/data", methods=['GET','POST'])
def data():
    uploaded_file = request.get_json()
    if uploaded_file!='':
        return {"data": ["OK!", str(uploaded_file)]}
        

if __name__ == "__main__":
    app.run(debug=True)