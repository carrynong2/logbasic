const mongoose = require("mongoose");

mongoose.connect(
  "mongodb+srv://logbasic:0639042389zx@code-blog1.6zg9f.mongodb.net/myFirstDatabase?retryWrites=true&w=majority",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }
);
