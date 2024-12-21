from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_methods=["GET", "POST", "PUT", "DELETE"],  # Make sure this includes your method
)
origings = ['http://localhost:3000']

app.add_middleware(CORSMiddleware, allow_origins=origings, allow_credentials=True, allow_methods=["*"], allow_headers=["*"])    

@app.get("/")
async def root():
    return {"message": "Hello World from FastAPI"}