import express from "express";
const app = express();

import morgan from "morgan";
import authRoutes from "./routes/authRoutes.js";
import categoryRoutes from "./routes/categoryRoutes.js";
import productRoutes from "./routes/productRoutes.js";
import orderRoutes from "./routes/orderRoutes.js";

import cors from "cors";

import errorMiddleware from "./middlewares/error.js";


//middelwares
app.use(cors());
app.use(express.json());
app.use(morgan("dev"));

app.use(cors({
  origin: 'http://demo.imantiles.co',
  credentials: true,
}));
//routes
app.use("/api/v1/auth", authRoutes);
app.use("/api/v1/category", categoryRoutes);
app.use("/api/v1/product", productRoutes);
app.use("/api/v1/order", orderRoutes);
app.use("/api/v1/test",(req, res) => {
  res.send('testing server)
})


//rest api
app.get("/", (req, res) => {
  res.send("<h1>Welcome to lubick  ecommerce app</h1>");
});



//middleware for error
app.use(errorMiddleware)


//exporting app
// module.exports = app;
export default app;
