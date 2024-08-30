from flask import Flask, request, jsonify, make_response
from flask_cors import CORS
from helper import insertDate
from SqlHelper import fetch_burger,insert_order,insert_comment,fetch_pizza,fetch_orders

cart = {}
app = Flask(__name__)
login = False
CORS(app)

@app.route('/api/post', methods=['POST'])
def post_data():
    data = request.get_json()
    insertDate(data)
    print("done")
    if 'burger' in data:
        i = int(data['burger']) + 1
        id = f'B{i}'
        burgers = "burgers"
        result = fetch_burger(burgers,id)
        cart[id] =result
        print(cart)
    if 'deal' in data:
        print("Hello")
        i = int(data['deal']) + 1
        id = f'D{i}'
        burgers = "deals"
        result = fetch_burger(burgers,id)
        print(result)
        cart[id] =result
        print(cart)
    elif 'pizza' in data:
        print('Pizza')
        
    elif 'Pasta' in data:
        i = int(data['Pasta']) + 1
        id = f'Pa{i}'
        burgers = "pastas"
        result = fetch_burger(burgers,id)
        cart[id] =result
        print(cart)

    elif 'Steak' in data:
        i = int(data['Steak']) + 1
        id = f'S{i}'
        burgers = "steak"
        result = fetch_burger(burgers,id)
        cart[id] =result
        print(cart)
        print(cart)
    elif 'Fries' in data:
        i = int(data['Fries']) + 1
        id = f'F{i}'
        burgers = "fries"
        result = fetch_burger(burgers,id)
        cart[id] =result
        print(cart)
    elif 'drink' in data:
        i = int(data['drink']) + 1
        id = f'SD{i}'
        burgers = "drinks"
        result = fetch_burger(burgers,id)
        cart[id] =result
        print(cart)
    elif 'Pizza' in data:
        # print(data["Pizza"])
        result = fetch_pizza(data["Pizza"])
        id =data["Pizza"]
        cart[id] =result
        print(cart)
    else:
        print(data)
        print('Nothing')
    return f"Data received successfully {data}"




@app.route('/api/get/cart', methods=['GET'])
def get_data():

    return cart

@app.route('/api/update/cart', methods=['POST'])
def update_data():
    data = request.get_json()
    print(data)
    if "Add" == data['xi']:
        id = data['y']
        cart[id]["Quantity"] += 1
    if "subtract" == data['xi']:
        id = data['y']
        cart[id]["Quantity"] -= 1
    if "Remove" == data['xi']:
        id = data['y']
        del cart[id]
    return f"Cart Updated successfully"



@app.route('/api/get/details', methods=['POST'])
def get_details():
    global cart
    data = request.get_json()
    print(data)
    insert_order(data,cart)
    print(cart)
    cart = {}
    return f"Cart Updated successfully"


@app.route('/api/post/comments', methods=['POST'])
def get_comments():
    data = request.get_json()
    print(data)
    insert_comment(data)
    return f"Cart Updated successfully"


@app.route('/api/post/login',methods = ["POST"])
def get_login():
    print("Here is data")
    data = request.get_json()
    print(data)
    if "Sarmad" == data["name"] and "Sarmad" == data["password"]:
        response = make_response(jsonify({'Login': 'found'}), 200)
        return response
    else:
        response = make_response(jsonify({'Status': 'Login Failed'}), 404)
        return response

@app.route('/api/get/order', methods=['GET'])
def get_order():
    temp = fetch_orders()
    return temp




if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5000)


