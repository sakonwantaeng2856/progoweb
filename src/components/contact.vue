<template>
  <div class="background p-4">
    <div class="card text-left">
      <div class="card-body login-card-body">
        <h1 class="login-box-msg">ส่งข้อความถึงเรา</h1>
        <form>
          <div class="row">
            <div class="col-12 mt-5">
              <div class="input-group mb-3">
                <input
                  type="text"
                  class="form-control"
                  name="govname"
                  placeholder="ชื่อ-นามสกุล"
                  id="govname"
                  required
                />
              </div>
            </div>
            <div class="col-12">
              <div class="input-group mb-3">
                <input
                  type="text"
                  class="form-control"
                  name="username"
                  placeholder="Email"
                  id="username"
                  required
                />
              </div>
            </div>
            <div class="col-12">
              <div class="form-group mb-3">
                <div class="form-group">
                  <textarea
                    class="form-text"
                    id="exampleFormControlTextarea1"
                    placeholder="ข้อความของคุณ..."
                  ></textarea>
                </div>
              </div>
            </div>
          </div>
          <div class="btn-wrapper">
            <router-link to="#" class="btn btn-success"> Register </router-link>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.background {
  background-color: #005510;
}
.card {
  padding: 40px;
  width: 1150px;
  margin: 0 auto;
  float: none;
  margin-top: 150px;
  margin-bottom: 170px;
  background: #ffffff;
  box-shadow: 0px 0px 0px rgba(63, 63, 68, 0.05),
    0px 1px 3px rgba(63, 63, 68, 0.15);
  border-radius: 4px;
}
.btn-wrapper {
  position: relative;
  margin-bottom: 40px;
}
.form-text {
  height: 300px;
  width: 100%;
}
</style>
