<template>
  <div class="card">
    <div class="menu-list">
      <div class="list">
        <router-link to="/" class="btn"
          ><span class="bi-arrow-left mx-1"></span>กลับหน้าหลัก
        </router-link>
        <router-link to="/register" class="btn">
          ยังไม่บัญชีผู้ใช้ ? <b>สมัครสมาชิก</b>
        </router-link>
      </div>
    </div>
    <div class="card-body login-card-body">
      <h1 class="login-box-msg">เข้าสู่ระบบ</h1>
      <p class="login-box-msg">
        เข้าสู่ระบบเพื่อใช้งานระบบเว็บไซต์หน่วยงานสำเร็จรูป
      </p>
      <form>
        <div class="input-group mb-3">
          <input type="email" class="form-control" placeholder="Email" />
        </div>
        <div class="input-group mb-3">
          <input type="password" class="form-control" placeholder="Password" />
        </div>
        <div class="row">
          <div class="col-8">
            <div class="icheck-primary">
              <input type="checkbox" id="remember" />
              <label for="remember"> จดจำฉัน </label>
            </div>
          </div>
        </div>
      </form>
    </div>

    <div class="btn">
      <div class="btn-wrapper">
        <router-link to="#" class="btn btn-success mx-2 mb-2">
          เข้าสู่ระบบ
        </router-link>
      </div>
      <div class="btn-wrapper">
        <router-link to="/register" class="btn btn-success-outline mx-2 mb-4">
          สมัครสมาชิก
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style>
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
.btn-wrapper {
  margin-bottom: 40px;
}
</style>
