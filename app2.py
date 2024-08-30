from flask import Flask, request, jsonify, session
from flask_cors import CORS
from helper import insertDate
from SqlHelper import fetch_burger, insert_order, insert_comment, fetch_pizza
from flask_session import Session

app = Flask(__name__) # Change this to a secure key for production
app.config['SESSION_TYPE'] = 'filesystem' 
Session(app)
CORS(app)
# session['cart'] = {}

@app.route('/api/post', methods=['POST'])
def post_data():
    data = request.get_json()
    insertDate(data)
    print("Data received:", data)
    
    # Initialize cart in session if not already present
    if 'cart' not in session:
        session['cart'] = {}

    cart = session['cart']
    print(cart)
    
    if 'burger' in data:
        i = int(data['burger']) + 1
        id = f'B{i}'
        burgers = "burgers"
        result = fetch_burger(burgers, id)
        cart[id] = result
        print("Cart after adding burger:", cart)
    elif 'deal' in data:
        print("Hello")
        i = int(data['deal']) + 1
        id = f'D{i}'
        burgers = "deals"
        result = fetch_burger(burgers, id)
        print("Fetch result for deal:", result)
        cart[id] = result
        print("Cart after adding deal:", cart)
    elif 'pizza' in data:
        print('Pizza')
    elif 'Pasta' in data:
        i = int(data['Pasta']) + 1
        id = f'Pa{i}'
        burgers = "pastas"
        result = fetch_burger(burgers, id)
        cart[id] = result
        print("Cart after adding pasta:", cart)
    elif 'Steak' in data:
        i = int(data['Steak']) + 1
        id = f'S{i}'
        burgers = "steak"
        result = fetch_burger(burgers, id)
        cart[id] = result
        print("Cart after adding steak:", cart)
    elif 'Fries' in data:
        i = int(data['Fries']) + 1
        id = f'F{i}'
        burgers = "fries"
        result = fetch_burger(burgers, id)
        cart[id] = result
        print("Cart after adding fries:", cart)
    elif 'drink' in data:
        i = int(data['drink']) + 1
        id = f'SD{i}'
        burgers = "drinks"
        result = fetch_burger(burgers, id)
        cart[id] = result
        print("Cart after adding drink:", cart)
    elif 'Pizza' in data:
        result = fetch_pizza(data["Pizza"])
        id = data["Pizza"]
        cart[id] = result
        print("Cart after adding pizza:", cart)
    else:
        print("Received data:", data)
        print('Nothing matched')

    print(session)
    
    session['cart'] = cart  # Update session cart
    session.modified = True  # Ensure the session is marked as modified
    return f"Data received successfully {data}"

@app.route('/api/get/cart', methods=['GET'])
def get_data():
    cart = session.get('cart', {})
    print(cart)
    return jsonify(cart)

@app.route('/api/update/cart', methods=['POST'])
def update_data():
    data = request.get_json()
    print(data)
    cart = session.get('cart', {})
    if "Add" == data['xi']:
        id = data['y']
        cart[id]["Quantity"] += 1
    if "subtract" == data['xi']:
        id = data['y']
        cart[id]["Quantity"] -= 1
    if "Remove" == data['xi']:
        id = data['y']
        del cart[id]
    session['cart'] = cart  # Update session cart
    return f"Cart Updated successfully"

@app.route('/api/get/details', methods=['POST'])
def get_details():
    data = request.get_json()
    print(data)
    cart = session.get('cart', {})
    insert_order(data, cart)
    print(cart)
    session.pop('cart', None)  # Clear the cart after order is placed
    return f"Cart Updated successfully"


@app.route('/api/post/comments', methods=['POST'])
def get_comments():
    data = request.get_json()
    print(data)
    insert_comment(data)
    return f"Cart Updated successfully"

if __name__ == '__main__':
    app.run()
