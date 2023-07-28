#
# Imports flask
#
from flask import Flask, request, render_template


#
# Creates Flask app
#
app = Flask(__name__)



#
# Defines root url function
#
@app.route("/", methods=["POST", "GET"])
def index():
    #
    # Checks if request is a POST request
    #
    if request.method == "POST":
        #
        # Saves ip to text file and prints it out
        #
        print(request.data.decode())
        with open("ips.txt", "a") as file:
            file.write(request.data.decode())

        
        #
        # Returns OK
        #
        return "OK"

    #
    # Returns html template
    #
    return render_template("index.html")



#
# Runs Flask app
#
if __name__ == "__main__":
    app.run(debug=True)
