<template>
  <div class="register-page">
    <div class="container mt-5">
      <div class="row justify-content-center">
            <div class="col-md-6">
                <form @submit.prevent="register">
                    <h2>Kayıt Ol</h2>
                    <div class="mb-3">
                    <label for="username" class="form-label">Kullanıcı Adı</label>
                    <input type="text" class="form-control" id="username" v-model="username">
                    </div>
                    <div class="mb-3">
                    <label for="password" class="form-label">Şifre</label>
                    <input type="password" class="form-control" id="password" v-model="password">
                    </div>
                    <button type="submit" class="btn btn-primary">Kayıt Ol</button>
                </form>
            </div>
        </div>
      </div>
  </div>
</template>
  
<script>
export default {
  name: 'RegisterPage',
  data() {
    return {
      username: '',
      password: '',
    }
  },
  methods: {
      register() {
          const user = {
          username: this.username,
          password: this.password
          };
          localStorage.setItem('predefinedUser', JSON.stringify(user));
          this.$router.push('/login');
      }
  }
}
</script>
  
<style>
.register-page {
  margin-top: 250px;
}
</style>