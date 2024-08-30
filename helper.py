from pymongo import MongoClient

# Connect to MongoDB
def insertDate(x):
    client = MongoClient('mongodb://localhost:27017/')
    db = client['Project'] 
    collection = db['order']


    # Insert data into the 'order' collection
    insert_result = collection.insert_one(x)

    # Check if the insertion was successful
    if insert_result.acknowledged:
        print('Data inserted successfully.')
    else:
        print('Failed to insert data.')

    # Close the MongoDB connection
    client.close()