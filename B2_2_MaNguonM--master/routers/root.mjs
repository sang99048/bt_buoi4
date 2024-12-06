import express from "express";
import fs from 'fs';
const rootRouter = express.Router()


const workexp = [
  {
    name : "Front End Developer",
    start_date:"Jan 2024",
    end_date:"Jan 2015",
    des:"alo, alo"
  },
  {
    name : "Back End Developer",
    start_date:"Jan 2015",
    end_date:"Jan 2099",
    des:"alo, alo"
  }
]
const Education_exp =[
  {
    edu:"DONG A UNIVERSITY",
    name:'Forever - Alone',
    des:'Create path successfully =))))'
  },
  {
    edu:"DONG A UNIVERSITY 1",
    name:'Forever - Alone',
    des:'Create path successfully =)))) <3'
  }
]



rootRouter.get("/",(req,res)=>{
  // res.send("Hello Express JS");
  // res.send(html)
  // res.render("index",{ title: 'Your Dynamic Title Here' })
  res.render('index', { workexp, Education_exp, title: "Dynamic Resume" });
});
rootRouter.get('/cv', (req, res) => {
  res.render('cv', { title: 'My CV', workexp, Education_exp });
});
rootRouter.get('/cv/:id', (req, res) => {
  console.log(req.params)
  res.render('cv', { title: 'My CV', workexp, Education_exp });
});
rootRouter.get('/ve', (req, res) => {
  let data = [
    {
      "city": "Hà Nội",
      "plate_no": "29,30,31,32,33,40"
    },
    {
      "city": "Thái Nguyên",
      "plate_no": "20"
    },
    {
      "city": "Phú Thọ",
      "plate_no": "19"
    },
    {
      "city": "Bắc Giang",
      "plate_no": "98"
    },
    {
      "city": "Hòa bình",
      "plate_no": "28"
    },
    {
      "city": "Bắc Ninh",
      "plate_no": "99"
    },
    {
      "city": "Hà Nam",
      "plate_no": "90"
    },
    {
      "city": "Hải Dương",
      "plate_no": "34"
    },
    {
      "city": "Hưng Yên",
      "plate_no": "89"
    },
    {
      "city": "Vĩnh Phúc",
      "plate_no": "88"
    },
    {
      "city": "Quảng Ninh",
      "plate_no": "14"
    },
    {
      "city": "Hải Phòng",
      "plate_no": "15, 16"
    },
    {
      "city": "Nam Định",
      "plate_no": "18"
    },
    {
      "city": "Ninh Bình",
      "plate_no": "35"
    },
    {
      "city": "Thái Bình",
      "plate_no": "17"
    },
    {
      "city": "Hà Giang",
      "plate_no": "23"
    },
    {
      "city": "Cao Bằng",
      "plate_no": "11"
    },
    {
      "city": "Lào Cai",
      "plate_no": "24"
    },
    {
      "city": "Bắc Cạn",
      "plate_no": "97"
    },
    {
      "city": "Lạng Sơn",
      "plate_no": "12"
    },
    {
      "city": "Tuyên Quang",
      "plate_no": "22"
    },
    {
      "city": "Yên Bái",
      "plate_no": "21"
    },
    {
      "city": "Điện Biên",
      "plate_no": "27"
    },
    {
      "city": "Lai Châu",
      "plate_no": "25"
    },
    {
      "city": "Sơn La",
      "plate_no": "26"
    },
    {
      "city": "Thanh Hóa",
      "plate_no": "36"
    },
    {
      "city": "Nghệ An",
      "plate_no": "37"
    },
    {
      "city": "Hà Tĩnh",
      "plate_no": "38"
    },
    {
      "city": "Quảng Bình",
      "plate_no": "73"
    },
    {
      "city": "Quảng Trị",
      "plate_no": "74"
    },
    {
      "city": "Thừa Thiên Huế",
      "plate_no": "75"
    },
    {
      "city": "Đà Nẵng",
      "plate_no": "43"
    },
    {
      "city": "Quảng Nam",
      "plate_no": "92"
    },
    {
      "city": "Quảng Ngãi",
      "plate_no": "76"
    },
    {
      "city": "Bình Định",
      "plate_no": "77"
    },
    {
      "city": "Phú Yên",
      "plate_no": "78"
    },
    {
      "city": "Khánh Hòa",
      "plate_no": "79"
    },
    {
      "city": "Ninh Thuận",
      "plate_no": "85"
    },
    {
      "city": "Bình Thuận",
      "plate_no": "86"
    },
    {
      "city": "Kon Tum",
      "plate_no": "82"
    },
    {
      "city": "Gia Lai",
      "plate_no": "81"
    },
    {
      "city": "Dak Lak",
      "plate_no": "47"
    },
    {
      "city": "Đắc Nông",
      "plate_no": "48"
    },
    {
      "city": "Lâm Đồng",
      "plate_no": "49"
    },
    {
      "city": "Hồ Chí Minh",
      "plate_no": "41,50,51,52,53,54,55,56,57,58,59"
    },
    {
      "city": "Bình Phước",
      "plate_no": "93"
    },
    {
      "city": "Bình Dương",
      "plate_no": "61"
    },
    {
      "city": "Đồng Nai",
      "plate_no": "38,60"
    },
    {
      "city": "Tây Ninh",
      "plate_no": "70"
    },
    {
      "city": "Bà Rịa Vũng Tàu",
      "plate_no": "72"
    },
    {
      "city": "Cần Thơ",
      "plate_no": "65"
    },
    {
      "city": "Long An",
      "plate_no": "62"
    },
    {
      "city": "Đồng Tháp",
      "plate_no": "66"
    },
    {
      "city": "Tiền Giang",
      "plate_no": "63"
    },
    {
      "city": "An Giang",
      "plate_no": "67"
    },
    {
      "city": "Bến Tre",
      "plate_no": "71"
    },
    {
      "city": "Vĩnh Long",
      "plate_no": "64"
    },
    {
      "city": "Hậu Giang",
      "plate_no": "95"
    },
    {
      "city": "Kiên Giang",
      "plate_no": "68"
    },
    {
      "city": "Sóc Trăng",
      "plate_no": "83"
    },
    {
      "city": "Bạc Liêu",
      "plate_no": "94"
    },
    {
      "city": "Cà Mau",
      "plate_no": "69"
    }
   ]
  res.render('vehicle', { title: 'My Vehicle',data});
});

rootRouter.get('/about', (req, res) => {
  res.render('about', { title: 'About Page' });
});

rootRouter.get("/contact", (req, res) => {
  res.send("Hello World");
});

// Middleware để phân tích body từ form (POST)
rootRouter.use(express.urlencoded({ extended: true }));

// Route hiển thị trang login
rootRouter.get('/lo', (req, res) => {
  res.render('login', { error: null, title: 'Login Page' });
});

// Route xử lý form login
rootRouter.post('/lo', (req, res) => {
  const { username, password } = req.body;

  fs.readFile('user.txt', 'utf8', (err, data) => {
    if (err) {
      return res.send('Error reading user file');
    }

    const [storedUsername, storedPassword] = data.split(':');
    
    if (username === storedUsername && password === storedPassword.trim()) {
      // Đăng nhập thành công, truyền thêm 'title' cho user.ejs
      res.render('user', { username, title: 'User Page' });
    } else {
      // Đăng nhập thất bại, trả về trang login với lỗi
      res.render('login', { error: 'Invalid username or password', title: 'Login Page' });
    }
  });
});

export default rootRouter;

