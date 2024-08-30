import mysql.connector
from datetime import date,datetime
today = date.today()
cnx = mysql.connector.connect(
    host="localhost",
    user="root",
    password="Areej",
    database="deitalian"
)

def fetch_burger(item,id):
    cursor = cnx.cursor()
    query = "SELECT * FROM {} WHERE id = %s".format(item)
    cursor.execute(query, (id,))
    row = cursor.fetchone()
    result = {}
    result["food"] = row[1]
    result["price"] = row[2]
    result["Quantity"] = 1
    result["img"] = row[3]
    cursor.close()
    return result


def insert_comment(data):
    cursor = cnx.cursor()
    query = "INSERT INTO contactus (Name, Email, Comments) VALUES (%s,%s,%s)"
    values = (data['name'],data['email'],data['comment'])
    cursor.execute(query, values)
    cnx.commit()
    pid = cursor.lastrowid
    print("Inserted data with PID:", pid)

def insert_order(data,cart):
    cursor = cnx.cursor()
    total = 100
    for x in cart:
        total += cart[x]['price'] * cart[x]['Quantity']

    start_date = datetime(2024, 5, 5)
    current_date = datetime.now()
    time_difference = current_date - start_date
    seconds = time_difference.total_seconds() %100
    seconds = int(seconds)
    # seconds = "O1"

    query = "INSERT INTO `order` (ID,`Total Price`,Date) VALUES (%s, %s,%s)"
    values = (seconds, total,today)
    cursor.execute(query, values)
    pid = cursor.lastrowid
    # print("Inserted data with PID:", pid)
    query = "INSERT INTO address (Name ,Email,Phone,Address,Comments,`Order ID`) VALUES (%s, %s,%s,%s,%s,%s)"
    values = (data['name'], data['email'],data['address'],data['number'],data['comment'],seconds)
    cursor.execute(query, values)

    for x in cart:
        category = ""
        if "Pa" in x:
            category = "pastas"
        elif "P" in x:
            category = "pizzas"
        elif "B" in x:
            category = "burgers"
        elif "F" in x:
            category = "fries"
        elif "SD" in x:
            category = "drinks"
        elif "S" in x:
            category = "steak"

        print(category)
        query = "INSERT INTO cart (OID,MID,Category,Quantity) VALUES (%s, %s,%s,%s)"
        values = (seconds,x,category,cart[x]['Quantity'])
        cursor.execute(query,values)

    cnx.commit()

    cursor.close()
    print(total)

def fetch_pizza(id):
    cursor = cnx.cursor()
    query = "SELECT * FROM pizzas WHERE id = %s"
    cursor.execute(query, (id,))
    row = cursor.fetchone()
    print(row)
    result = {}
    result["food"] = f"{row[1]} {row[2]}"
    result["price"] = row[3]
    result["Quantity"] = 1
    result["img"] = row[4]
    cursor.close()
    return result

def fetch_orders():
    cart = []
    cursor = cnx.cursor()
    query = "SELECT * FROM `order`"
    cursor.execute(query,)
    row1 = cursor.fetchall() 
    print(row1)
    for x in row1:
        temp1 = {}
        order_id = x[0]
        temp1["price"] = x[2]
        temp1["id"] = order_id
        query = "SELECT * FROM address where `Order ID` = %s"
        cursor.execute(query,(order_id,))
        row = cursor.fetchone() 
        print(row)
        temp1["name"] = row[0]
        temp1["address"] = row[2]
        temp1["phone"] = row[3]
        query = "SELECT * FROM cart where OID = %s"
        cursor.execute(query,(order_id,))
        row2 = cursor.fetchall() 
        temp2 = []
        for y in row2:
            temp3={}
            meal_id = y[1]
            item = y[2]
            query = "SELECT * FROM {} where ID = %s".format(item)
            cursor.execute(query,(meal_id,))
            row3 = cursor.fetchone() 
            print(row3)
            if row3:
                temp3["name"] = row3[1]
                temp3["quantity"] = y[3]
                temp2.append(temp3)

        temp1["items"] = temp2
        cart.append(temp1)
    print(cart)
    return cart



    # result = {}
    # result["food"] = f"{row[1]} {row[2]}"
    # result["price"] = row[3]
    # result["Quantity"] = 1
    # result["img"] = row[4]
    # cursor.close()
    # print(result)

fetch_orders()
