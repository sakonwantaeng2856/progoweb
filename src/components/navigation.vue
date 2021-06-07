<template>
  <nav class="navbar navbar-expand navbar-light bg-light">
    <div class="container-fluid">
      <div class="logo-btn">
        <a class="navbar-brand" href="#">
          <img
            class="me-3"
            src="https://s3-alpha-sig.figma.com/img/f3a8/828d/c89176f9a2b21f7594514cf37464f3f2?Expires=1623628800&Signature=NdzZeaTiSbe7tYByVABtpyOxGVceW2S-suXc5MB~oYy8xTm5Em5faWRA7KSGaecO661tbOIw2Bu9oBy4getfCVcWTTlMLl9rpmEfe3e1m5CpoSzqlVrFFqJlHM22vqKjYoC473cOhPnZqyEHPhxoPvmJCSK6Mexr-XV3fRAhz-Ra4YJz7DMQpy1K0Kl1F-XPDpjfxSpTNWJ97cmRpGD6WJxLPxUJkM92ai6XDNJPnCw-my4VYRlJPqhE-VgaO8KsmP-NyN3LFcXBIkP6XmdqKhl30E~PxBTlqrWa3TyXcKw6CdMDKnUX~giEPS4YbzZOG2U48DYXyCJbsTdiTRtwjg__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA"
            alt=""
        /></a>
      </div>
      <div class="navbar-cen">
        <div class="btn1">
          <div>
            <router-link to="/login" class="btn btn-success-outline mx-2">
              คุณสมบัติ
            </router-link>
            <router-link to="/login" class="btn btn-success-outline mx-2">
              แพคเกจ
            </router-link>
            <router-link to="/login" class="btn btn-success-outline mx-2">
              ติดต่อเรา
            </router-link>
          </div>
        </div>
      </div>
      <ul class="btn1">
        <div class="btn-wrapper">
          <router-link to="/login" class="btn btn-success-outline mx-2">
            เข้าสู่ระบบ
          </router-link>
          <router-link to="/register" class="btn btn-success mx-2">
            สมัครใช้งาน
          </router-link>
          <router-view></router-view>
        </div>
      </ul>
    </div>
  </nav>
</template>

<script>
export default {
  name: "navigatin",
};
</script>

<style>
.navbar-cen {
  left: 0;
  right: 0;
  text-align: center;
}
.me-3 {
  height: 50px;
}
.btn {
  color: black;
}
</style>
