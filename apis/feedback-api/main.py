from fastapi import FastAPI
from pydantic import BaseModel

app = FastAPI()

db = []

class Name(BaseModel):
	feedback: str
	name: str

@app.get("/")
def index():
	return {"Hello World": "true"}

@app.get("/feedback")
def get_all_feedback():
	return db

@app.post("/feedback")
def create_ticket(name: Name):
	db.append(name.dict())
	return db[-1]

@app.delete("/feedback/{index}")
def delete_a_ticket(index: int):
	db.pop(name-1)
	return {"200 OK": "Deleted"}
