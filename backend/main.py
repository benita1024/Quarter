from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from api.products import router as products_router

app = FastAPI(
    title="Quarter API",
    description="Product aggregation API for men's quarter-zip sweaters",
    version="1.0.0"
)

# CORS Configuration
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:3000"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

app.include_router(products_router, prefix="/api", tags=["products"])

@app.get("/")
async def root():
    return {
        "message": "Quarter API",
        "version": "1.0.0",
        "status": "running"
    }

@app.get("/health")
async def health_check():
    return {"status": "healthy"}

if __name__ == "__main__":
    import uvicorn
    uvicorn.run("main:app", host="0.0.0.0", port=8000, reload=True)