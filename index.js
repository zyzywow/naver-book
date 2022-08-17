const express = require("express");
const app = express();
const axios = require("axios");
const cors = require("cors");
const dotenv = require("dotenv").config();
const NAVER_ID = process.env.NAVER_ID;
const NAVER_SECRET_ID = process.env.NAVER_SECRET_ID;
app.set("port", process.env.PORT || 8099);
const port = app.get("port");
// app.set("port", 8099);
app.use(cors());

// 라우팅
app.get("/", (req, res) => {
  res.send("gggggkkkkkkkkddddddddllllllllllll");
});

// 중간 대리인 역할
app.get("/book/:bookname", (req, res) => {
  const queryTxt = encodeURIComponent(req.params.bookname);
  // console.log(req.params.bookname);
  axios({
    url: `https://openapi.naver.com/v1/search/book.json?query=${queryTxt}`,
    headers: {
      "X-Naver-Client-Id": NAVER_ID,
      "X-Naver-Client-Secret": NAVER_SECRET_ID,
    },
  }).then(function (response) {
    // console.log(response.data);
    res.json(response.data);
  });
});
// ex))))))))))))))))))))))))))))))))))))))))))
app.get("/news/:bookname", (req, res) => {
  // :~~~ 주소가아닌 넘어가는데이터값 입력식임(params)..news까지가주소
  const queryTxt = encodeURIComponent(req.params.bookname);

  axios({
    url: `https://openapi.naver.com/v1/search/news.json?query=${queryTxt}&display=20`,
    headers: {
      "X-Naver-Client-Id": "775S2Y6x8tZKZ77mA7e_",
      "X-Naver-Client-Secret": "RpyHT_zjC4",
    },
  }).then(function (response) {
    res.json(response.data);
  });
});
app.get("/news02", (req, res) => {
  // /:~~~ 주소가아닌 넘어가는데이터값 입력식임,변수로받겠다는신호(params)news까지가주소
  const queryTxt = encodeURIComponent(req.query.bookname);
  // query방식은 주소뒤에 ?key값=value값로 입력 ex)?query=폭우
  axios({
    url: `https://openapi.naver.com/v1/search/news.json?query=${queryTxt}`,
    headers: {
      "X-Naver-Client-Id": "775S2Y6x8tZKZ77mA7e_",
      "X-Naver-Client-Secret": "RpyHT_zjC4",
    },
    data: {
      display: 5,
    },
  }).then(function (response) {
    console.log(response.data);
    res.json(response.data);
  });
});
//---------------------------------------------------
app.get("/movie/:moviename", (req, res) => {
  const queryTxt = encodeURIComponent(req.params.moviename);
  // console.log(req.params.bookname);
  // console.log(req.params.moviename);
  axios({
    url: `https://openapi.naver.com/v1/search/movie.json?query=${queryTxt}`,
    headers: {
      "X-Naver-Client-Id": "775S2Y6x8tZKZ77mA7e_",
      "X-Naver-Client-Secret": "RpyHT_zjC4",
    },
  }).then(function (response) {
    res.json(response.data);
    // console.log(response.data);
  });
});
app.get("/book02", (req, res) => {
  const queryTxt = encodeURIComponent(req.query.bookname);
  // console.log(req.params.bookname);
  axios({
    url: `https://openapi.naver.com/v1/search/book.json?query=${queryTxt}&display=100`,
    headers: {
      "X-Naver-Client-Id": "775S2Y6x8tZKZ77mA7e_",
      "X-Naver-Client-Secret": "RpyHT_zjC4",
    },
  }).then(function (response) {
    res.json(response.data);
  });
});

app.get("/login", (req, res) => {
  console.log(req.query);
  if (req.query.id === "c1234615" && req.query.pw === "123") {
    res.json({ isLogged: true });
  } else {
    res.json({ isLogged: false });
  }
});

app.listen(port, function () {
  console.log(`${port}에서 서버 대기중`);
});
