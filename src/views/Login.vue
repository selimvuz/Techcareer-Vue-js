<template>
<div class="login-page">
    <div class="container mt-5">
        <div class="row justify-content-center">
            <div class="col-md-6">
                <h2>Giriş Yap</h2>
                <form @submit.prevent="login">
                    <div class="mb-3">
                    <label for="username" class="form-label">Kullanıcı Adı</label>
                    <input type="text" class="form-control" id="username" v-model="username">
                    </div>
                    <div class="mb-3">
                    <label for="password" class="form-label">Şifre</label>
                    <input type="password" class="form-control" id="password" v-model="password">
                    </div>
                    <button type="submit" class="btn btn-primary">Giriş Yap</button>
                </form>
            </div>
        </div>
    </div>
</div>
</template>

<script>
export default {
name: 'LoginPage',
data() {
    return {
    username: '',
    password: '',
    }
},
methods: {
  login() {
    const userString = localStorage.getItem('predefinedUser');
    if (!userString) {
      alert("Önceden tanımlı kullanıcı yok!");
      return;
    }
    const predefinedUser = JSON.parse(userString);
    if (this.username === predefinedUser.username && this.password === predefinedUser.password) {
      localStorage.setItem('user', JSON.stringify({ username: this.username }));
      this.$router.push('/');
    } else {
      alert("Kullanıcı adı veya şifre hatalı!");
    }
  }
}
}
</script>
  