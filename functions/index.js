const { setGlobalOptions } = require("firebase-functions");
const { onRequest } = require("firebase-functions/v2/https");
const logger = require("firebase-functions/logger");
const express = require("express");
const cors = require("cors");

setGlobalOptions({ maxInstances: 10 });

const app = express();

// Allow requests from your frontend
app.use(cors({ origin: true }));

// Example route
app.get("/hello", (req, res) => {
  logger.info("Request received on /hello endpoint");
  res.json({ message: "Hello from Firebase backend!" });
});

// You can add more routes like this
app.get("/time", (req, res) => {
  res.json({ now: new Date().toISOString() });
});

// Export API function
exports.api = onRequest(app);
