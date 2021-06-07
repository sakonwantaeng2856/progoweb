<template>
  <div class="card text-center">
    <div class="menu">
      <div class="list">
        <router-link to="/" class="link1"
          ><span class="bi-arrow-left mx-1"> กลับหน้าหลัก </span>
        </router-link>
        <router-link to="/login" class="link2">
          มีบัญชีผู้ใช้แล้ว ? <b>เข้าสู่ระบบ</b>
        </router-link>
      </div>
    </div>
    <div class="card-body login-card-body">
      <h1 class="login-box-msg">สมัครสมาชิก</h1>
      <p class="login-box-msg">
        สมัครสมาชิกเพื่อใช้งานระบบเว็บไซต์หน่วยงานสำเร็จรูป
      </p>
      <div class="container">
        <div class="row">
          <div class="col">
            <div>
              <form @submit.prevent="handleSubmit">
                <div class="form-group">
                  <label for="govename">ชื่อหน่วยงาน</label>
                  <input
                    type="text"
                    v-model="member.govename"
                    id="govename"
                    name="govename"
                    placeholder="ชื่อหน่วยงาน"
                    class="form-control"
                    :class="{
                      'is-invalid': submitted && $v.member.govename.$error,
                    }"
                  />
                  <div
                    v-if="submitted && !$v.member.govename.required"
                    class="invalid-feedback"
                  >
                    กรุณากรอกชื่อหน่วยงาน
                  </div>
                </div>
                <div class="form-group">
                  <label for="usernames">ชื่อผู้ติดต่อ</label>
                  <input
                    type="text"
                    v-model="member.usernames"
                    id="usernames"
                    name="usernames"
                    placeholder="ชื่อผู้ติดต่อ"
                    class="form-control"
                    :class="{
                      'is-invalid': submitted && $v.member.usernames.$error,
                    }"
                  />
                  <div
                    v-if="submitted && !$v.member.usernames.required"
                    class="invalid-feedback"
                  >
                    กรุณากรอกชื่อผู้ติดต่อ
                  </div>
                </div>
                <div class="form-group">
                  <label for="phone">เบอร์โทร</label>
                  <input
                    type="text"
                    v-model="member.phone"
                    id="phone"
                    name="phone"
                    placeholder="เบอร์โทร"
                    class="form-control"
                    :class="{
                      'is-invalid': submitted && $v.member.phone.$error,
                    }"
                  />
                  <div
                    v-if="submitted && !$v.member.phone.required"
                    class="invalid-feedback"
                  >
                    กรุณากรอกเบอร์โทร
                  </div>
                </div>

                <label for="">URL ใช้งาน</label>
                <div class="input-group mb-3 m">
                  government.com/
                  <input
                    type="goveurl"
                    v-model="member.goveurl"
                    id="goveurl"
                    name="goveurl"
                    placeholder="ชื่อ url"
                    class="form-control"
                    :class="{
                      'is-invalid': submitted && $v.member.email.$error,
                    }"
                  />
                  <div
                    v-if="submitted && $v.member.email.$error"
                    class="invalid-feedback"
                  >
                    <span v-if="!$v.user.member.required"
                      >กรุณากรอก URL Government</span
                    >
                    <span v-if="!$v.member.email.email"
                      >กรุณากรอก URL Government</span
                    >
                  </div>
                </div>
                <div class="form-group">
                  <label for="email">อีเมลล์</label>
                  <input
                    type="email"
                    v-model="member.email"
                    id="email"
                    name="email"
                    placeholder="อีเมล"
                    class="form-control"
                    :class="{
                      'is-invalid': submitted && $v.member.email.$error,
                    }"
                  />
                  <div
                    v-if="submitted && $v.member.email.$error"
                    class="invalid-feedback"
                  >
                    <span v-if="!$v.user.member.required"
                      >กรุณากรอกอีเมลล์</span
                    >
                    <span v-if="!$v.member.email.email">กรุณากรอกอีเมลล์</span>
                  </div>
                </div>
                <div class="form-group">
                  <label for="password">Password</label>
                  <input
                    type="password"
                    v-model="member.passwords"
                    id="password"
                    name="password"
                    placeholder="รหัสผ่าน"
                    class="form-control"
                    :class="{
                      'is-invalid': submitted && $v.member.passwords.$error,
                    }"
                  />
                  <div
                    v-if="submitted && $v.member.passwords.$error"
                    class="invalid-feedback"
                  >
                    <span v-if="!$v.member.passwords.required"
                      >กรุณากรอกรหัสผ่าน</span
                    >
                    <span v-if="!$v.member.passwords.minLength"
                      >รหัสผ่านต้องมีอย่างน้อย 6 ตัวอักษร</span
                    >
                  </div>
                </div>
                <div class="form-group">
                  <label for="confirmPassword">ยืนยันรหัสผ่าน</label>
                  <input
                    type="password"
                    v-model="member.confirmPassword"
                    id="confirmPassword"
                    name="confirmPassword"
                    placeholder="ยืนยันรหัสผ่าน"
                    class="form-control"
                    :class="{
                      'is-invalid':
                        submitted && $v.member.confirmPassword.$error,
                    }"
                  />
                  <div
                    v-if="submitted && $v.member.confirmPassword.$error"
                    class="invalid-feedback"
                  >
                    <span v-if="!$v.member.confirmPassword.required"
                      >กรุณายืนยันรหัสผ่าน</span
                    >
                    <span v-else-if="!$v.member.confirmPassword.sameAsPassword"
                      >รหัสผ่านไม่ตรงกัน</span
                    >
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
    <button type="submit" class="btn btn-success mx-2 mb-2" @click="sendData">
      สมัครสมาชิก
    </button>
  </div>
</template>

<script>
import { required, email, minLength, sameAs } from "vuelidate/lib/validators";
import axios from "axios";

export default {
  name: "register",
  data() {
    return {
      member: {
        govename: "",
        usernames: "",
        phone: "",
        goveurl: "",
        email: "",
        passwords: "",
        confirmPassword: "",
      },
      submitted: false,
    };
  },
  validations: {
    member: {
      govename: { required },
      usernames: { required },
      phone: { required },
      goveurl: { required },
      email: { required, email },
      passwords: { required, minLength: minLength(6) },
      confirmPassword: { required, sameAsPassword: sameAs("passwords") },
    },
  },
  methods: {
    sendData(e) {
      e.preventDefault();
      console.log("send data active!!");
      this.submitted = true;

      this.$v.$touch();
      if (this.$v.$invalid) {
        return;
      }
      axios
        .post("http://localhost/register.php", {
          govename: this.member.govename,
          usernames: this.member.usernames,
          phone: this.member.phone,
          goveurl: this.member.goveurl,
          email: this.member.email,
          passwords: this.member.passwords,
        })
        .then(function (response) {
          console.log(response);
        })
        .catch(function (error) {
          console.log(error);
        });
      this.$router.push({ path: "/confirmregister" });
    },
  },
};
</script>

<style scoped>
.card {
  padding: 40px;
  width: 500px;
  margin: 0 auto;
  float: none;
  margin-bottom: 10px;
  margin-top: 170px;
  background: #ffffff;
  box-shadow: 0px 0px 0px rgba(63, 63, 68, 0.05),
    0px 1px 3px rgba(63, 63, 68, 0.15);
  border-radius: 4px;
}
.card-body {
  text-align: left;
  margin-top: 40px;
}

.link1 {
  position: relative;
  right: 50px;
  text-decoration: none;
  color: #9ea0a5;
}

.link2 {
  position: relative;
  left: 50px;
  text-decoration: none;
  color: #9ea0a5;
}

b {
  color: green;
}

p {
  color: #9ea0a5;
  text-decoration: none;
}

label {
  color: #9ea0a5;
}
</style>
