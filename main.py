from flask import Flask
app = Flask(__name__)

@app.route('/')
def hello_world():
    return 'Hello Pooja Patel!'

@app.route('/picture')
def take_pic():
    return 'Take a Picture!'

app.run(host='0.0.0.0', port=8080)
