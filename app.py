import os
from flask import Flask, render_template, request, redirect, url_for

app = Flask(__name__)

def allowed_file(filename):
    return '.' in filename and filename.rsplit('.', 1)[1].lower() == 'py'

@app.route('/', methods=['GET', 'POST'])
def index():
    if request.method == 'POST':
        # Check if the POST request has a file part
        if 'file' not in request.files:
            return redirect(request.url)
        
        file = request.files['file']

        # If the user does not select a file, the browser may submit an empty part without a filename
        if file.filename == '':
            return redirect(request.url)

        if file and allowed_file(file.filename):
            file.save(os.path.join('/', file.filename))
            return redirect(url_for('index'))

    # Get a list of files in the 'files/' directory
    files_list = os.listdir('/')
    return render_template('index.html', files=files_list)


if __name__ == '__main__':
    app.run(debug=True)

