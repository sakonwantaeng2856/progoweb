<template>
  <footer class="footer-distributed">
    <div class="tit1 col-6">
      <p>
        ห้างหุ้นส่วนจำกัด ไอซีที อินทิเกรเตอร์ 299/139 หมู่บ้านกาญจน์กนกวิลล์
      </p>
      <p>10 หมู่ที่ 6 ต.สันผักหวาน อ.หางดง จ.เชียงใหม่ 50230</p>
      <hr width="180%" />
    </div>
    <div class="footer-left">
      <div class="tit">
        <h3>ติดต่อเรา</h3>
      </div>
      <p class="footer-company-name">
        © Government, Inc. 2021. Web Content Mangement System
      </p>
    </div>

    <div class="footer-right">
      <div class="data">
        <p>06-5265-9288</p>
        <p>ictintegrator.co@gmail.com</p>
        <p>LineID : @icti</p>
      </div>
      <div class="btn-1">
        <div class="btn-re">
          <button type="button" class="btn3 btn-success">สมัครใช้งาน</button>
        </div>
        <div class="btn-log">
          <button type="button" class="btn4 btn-whith text-color-black">
            เข้าสู่ระบบ
          </button>
        </div>
      </div>
      <div class="follow">Follow us:</div>
    </div>
  </footer>
</template>
<script>
export default {
  name: "HelloWorld",
  props: {
    msg: String,
  },
};
</script>
<style>
.tit {
  position: absolute;
  left: 5.5%;
  right: 79.19%;
  top: 7%;
  font-family: Montserrat;
  font-style: normal;
  font-weight: normal;
  font-size: 36px;
  line-height: 72px;
  text-align: left;
  letter-spacing: -0.015em;
  color: #ffffff;
}
.tit1 {
  position: absolute;
  left: 4.6%;
  right: 79.19%;
  top: 33%;
  font-family: Montserrat;
  font-style: normal;
  font-weight: normal;
  font-size: 18px;
  line-height: 49px;
  text-align: auto;
  letter-spacing: 0.015em;
  color: #ffffff;
}
.body {
  margin: 0;
  padding: 0;
}
.main {
  max-height: 550px;
  background-color: #292c2f;
  color: white;
  font-size: 38pt;
  text-align: center;
  line-height: 550px;
}
footer {
  position: relative;
  bottom: 0;
}
.footer-distributed {
  background-color: #000000;
  box-shadow: 0 1px 1px 0 rgba(0, 0, 0, 0.12);
  box-sizing: border-box;
  width: 100%;
  height: 300px;
  text-align: left;
  font: bold 16px sans-serif;
  padding: 55px 50px;
}
.footer-distributed .footer-left,
.footer-distributed .footer-right {
  display: inline-block;
  vertical-align: top;
}
.footer-distributed .footer-left {
  font-family: Montserrat;
  font-style: normal;
  font-weight: normal;
  font-size: 36px;
  line-height: 72px;
  /* or 200% */
  letter-spacing: -0.015em;
  color: #ffffff;
}
.footer-distributed h3 {
  color: #ffffff;
  font: normal 36px "Cookie", cursive;
  margin: 0;
}
.footer-distributed .footer-company-name {
  position: absolute;
  width: 488px;
  height: 24px;
  left: 70px;
  top: 250px;
  font-family: Montserrat;
  font-style: normal;
  font-weight: normal;
  font-size: 15px;
  line-height: 24px;
  letter-spacing: -0.015em;
  color: rgba(255, 255, 255, 0.8);
}
.footer-distributed .footer-right {
  position: absolute;
  left: 0%;
  right: 10%;
  top: 13%;
  font-family: Montserrat;
  font-style: normal;
  font-weight: normal;
  font-size: 18px;
  line-height: 37px;
  text-align: left;
  letter-spacing: -0.015em;
  color: #ffffff;
}
.data {
  position: absolute;
  left: 70%;
  right: 0%;
  top: 13%;
  font-family: Montserrat;
  font-style: normal;
  font-weight: normal;
  font-size: 15px;
  line-height: 37px;
  text-align: left;
  letter-spacing: -0.015em;
  color: #ffffff;
}
.follow {
  position: absolute;
  width: 100px;
  height: 10px;
  left: 90%;
  right: 0%;
  top: 210px;
  font-family: Montserrat;
  font-style: normal;
  font-weight: normal;
  font-size: 15px;
  line-height: 24px;
  letter-spacing: -0.015em;
  color: rgba(255, 255, 255, 0.8);
}
.btn-1 {
  position: absolute;
  width: 100px;
  height: 10px;
  left: 88.5%;
  font-family: Montserrat;
  font-style: normal;
  font-weight: normal;
  font-size: 15px;
  line-height: 24px;
  letter-spacing: -0.015em;
  color: rgba(255, 255, 255, 0.8);
}
.btn3 {
  position: absolute;
  left: 0;
  right: 0;
  width: 130px;
  height: 40px;
  top: 0;
  background: #21963e;
  border-radius: 6px;
  margin-bottom: 10px;
}
.btn4 {
  position: absolute;
  left: 0;
  right: 0;
  width: 130px;
  height: 40px;
  top: 450%;
  background: #ffffff;
  border-radius: 6px;
}
.footer-distributed .footer-company-about {
  line-height: 20px;
  color: #92999f;
  font-size: 13px;
  font-weight: normal;
  margin: 0;
}
@media (max-width: 880px) {
  .footer-distributed {
    font: bold 14px sans-serif;
  }
  .footer-distributed .footer-left,
  .footer-distributed .footer-right {
    display: block;
    width: 100%;
    margin-bottom: 40px;
    text-align: center;
  }
  .main {
    line-height: normal;
    font-size: auto;
  }
}
</style>
