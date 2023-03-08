<template>
  <div class="login-form postion">
    <form class="form">
      <span class="title">登录</span>
      <span class="sub-title">使用email创建账号</span>
      <div class="form-container">
        <input
          type="text"
          class="email input"
          autocomplete="off"
          placeholder="请输入电子邮件账号"
        />
        <input
          type="password"
          autocomplete="off"
          class="password input"
          placeholder="请输入密码"
        />
      </div>

      <button class="button">登录</button>
    </form>
    <div class="form-section">
      <p>
        没有账号？<a href="#" @click="() => $notify.info(tipsInfo)">创建账号</a>
      </p>
    </div>
  </div>
</template>



<script setup lang="ts">
const tipsInfo = {
  placement: "top-right",
  title: "通知",
  content: "暂时不可以创建账号哦~",
  duration: 3000,
};
</script>

<style scoped lang="scss">
.login-form {
  max-width: 300px;
  background: #f1f7fe;
  overflow: hidden;
  border-radius: 16px;
  color: #010101;
  box-shadow: 20px 20px 60px #b4e7ff26,
             -20px -20px 60px #aae1ed;
}
.postion {
  position: fixed;
  right: 12%;
  top: 45%;
  transform: translateY(-50%);
}
.form {
  position: relative;
  display: flex;
  flex-direction: column;
  padding: 32px 24px 24px;
  gap: 16px;
  text-align: center;
}

.title {
  font-weight: bold;
  font-size: 1.8rem;
}

.sub-title {
  font-size: 1rem;
  color: #666;
}

.form-container {
  overflow: hidden;
  border-radius: 8px;
  background-color: #fff;
  margin: 1rem 0 0.5rem;
  width: 100%;
}

.input {
  background: none;
  border: 0;
  outline: 0;
  height: 40px;
  width: 100%;
  border-bottom: 1px solid #eee;
  font-size: 0.9rem;
  padding: 8px 15px;
}

.form-section {
  padding: 16px;
  font-size: 0.85rem;
  background-color: #e0ecfb;
  box-shadow: rgb(0 0 0 / 8%) 0 -1px;
}

.form-section a {
  font-weight: bold;
  color: #0066ff;
  transition: color 0.3s ease;
}

.form-section a:hover {
  color: #005ce6;
  text-decoration: underline;
}

/*Button*/
.form button {
  background-color: #0066ff;
  color: #fff;
  border: 0;
  border-radius: 24px;
  padding: 10px 16px;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.form button:hover {
  background-color: #005ce6;
}
</style>
