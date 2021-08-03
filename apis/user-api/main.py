from fastapi import FastAPI
from pydantic import BaseModel

app = FastAPI()

db = []

class Name(BaseModel):
	name: str
@app.get("/")
def index():
	return {"Hello": "World"}

@app.get("/names")
def get():
	return db

@app.post("/names")
def create_name(name: Name):
	db.append(name.dict())
	return db[-1]

@app.delete("/names/{name}")
def delete(name: int):
	db.pop(name-1)
	return {"status": "Deleted"}
