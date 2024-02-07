from flask import Flask, render_template

app = Flask(__name__)

@app.route('/viz1/')
def viz1():  # put application's code here
    return render_template('page.html', indvlspec=0)

@app.route('/viz2/')
def viz2():  # put application's code here
    return render_template('page.html', indvlspec=1)

@app.route('/')
def hello_world():  # put application's code here
    return render_template('page.html')
    # return 'Hello World!'


if __name__ == '__main__':
    app.run()
