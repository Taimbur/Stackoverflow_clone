import express from "express";
import cookieParser from "cookie-parser";
import bcrypt from "bcrypt";
import mysql from "mysql";
import cors from "cors";
import jwt from "jsonwebtoken";

const app = express();
const port = 3000;

const corsOption = {
  origin: true,
  credentials: true,
};
//middleware
app.use(express.json());
app.use(
  cors(
    {
      origin: ["http://localhost:5173"],
      methods: ["POST", "GET"],
      credentials: true,
    },
    corsOption
  )
);
app.use(cookieParser());

const saltRounds = 10;

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "stackflow",
});

con.connect(function (err) {
  if (err) throw err;
  console.log("Connected!");
});

//databse end

app.get("/", (req, res) => {
  res.send("Hello World let make restful api!");
});

//  SIGNUP
app.post("/signup", (req, res) => {
  const sql = "INSERT INTO `user`(`name`, `email`, `password`) VALUES (?)";
  bcrypt.hash(req.body.password.toString(), saltRounds, (err, hash) => {
    if (err) return res.json({ Error: "not hassing" });
    const VALUES = [req.body.name, req.body.email, hash];
    con.query(sql, [VALUES], (err, data) => {
      if (err) return res.json({ Status: "insert nahi hua" });
      return res.json({ Status: "Success" });
    });
  });
});

//LOGIN

app.post("/login", (req, res) => {
  const sql = "SELECT * FROM user WHERE email=?";
  con.query(sql, [req.body.email], (err, data) => {
    if (err) return res.json({ Status: "Email not found" });
    if (data.length > 0) {
      bcrypt.compare(
        req.body.password.toString(),
        data[0].password,
        (err, response) => {
          if (err) return res.json({ Error: "Password not match" });
          if (response) {
            const name = data[0].name;
            const token = jwt.sign({ name }, "jwt-secret-key", {
              expiresIn: "1d",
            });
            res.cookie("token", token);
            return res.json({ Status: "Success", data });
          } else {
            return res.json({ Error: "password not matched" });
          }
        }
      );
    } else {
      return res.json({ Error: "email not existed" });
    }
  });
});
// authorizion
app.post("/auth", (req, res, next) => {
  // Get token value to the json body
  const token = req.cookies.token;
  // If the token is present
  if (token) {
    jwt.verify(token, "jwt-secret-key", function (err, decoded) {
      if (err) {
        return res.json({
          Error: "token not valid",
        });
      } else {
        req.name = decoded.name;
        res.json({
          Status: "Success",
          name: req.name,
        });
      }
    });
  }
});

// for clear coooke
app.post("/logout", (req, res) => {
  res.clearCookie("token");
  return res.json({ Status: "Success" });
});

// comments
app.post("/comment", (req, res) => {
  const sql =
    "INSERT INTO `comments`(`Comment_id`, `asked_by`, `title`, `problems`) VALUES (?)";
  let values = [
    req.body.comment_id,
    req.body.asked_by,
    req.body.title,
    req.body.problems,
  ];
  con.query(sql, [values], (err, data) => {
    if (err) return res.json({ Status: "insert nahi hua" });
    return res.json({ Status: "Success" })
  });
});
// to fetch all comment
app.get("/comment", (req, res) => {
  const sql = "SELECT * FROM `comments` WHERE 1";
  // let values = [
  //   req.body.title,
  //   req.body.problems
  // ];
  con.query(sql, (err, data) => {
    if (err) return res.json({ Status: "oops not able to found" });
    return res.send(data);
  });
});

// ANSWER POSTING

app.post("/answer", (req, res) => {
  const sql = "INSERT INTO `answer`(`aswer_id`, `user_name`, `id`, `answer`) VALUES (?)";
  let values = [
    req.body.aswer_id,
    req.body.user_name,
    req.body.id,
    req.body.answer];
  con.query(sql, [values], (err, data) => {
    if (err) return res.json({ Status: "insert nahi hua" });
    return res.json({ Status: "Success" });
  });
});



//to fetch details of comment 
app.get("/details/:id", (req, res) => {
  const id = req.params.id;

  con.query("SELECT * FROM `comments` WHERE id =?", id, (err, result) => {
    if (err) {
      console.log(err)
    }
    else {
      res.send(result)
    }
  })
})

//GET ALL ANSWER
app.get("/answer/:id", (req, res) => {
  const id = req.params.id;

  con.query("SELECT * FROM `answer` WHERE id =?", id, (err, result) => {
    if (err) {
      console.log(err)
    }
    else {
      res.send(result)
    }
  })
})






app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
