<template>
  <main class="container">
    <div class="row mt-5">
      <div class="col-sm"></div>
      <div class="col-sm">
        <!-- form to handle the login -->
        <form v-if="!is2FAEnabled" @submit.prevent="loginRoute" id="login" name="login" method="post">
          <div class="mb-3">
            <label for="email" class="form-label" aria-label="Email">Email</label>
            <input type="email" class="form-control" id="email" name="email" placeholder="johndoe@realestatecare.com" aria-describedby="email-help">
          </div>
          <div class="mb-3">
            <label for="password" class="form-label" aria-label="Password">Password</label>
            <input type="password" class="form-control" id="password" name="password" placeholder="&bull;&bull;&bull;&bull;&bull;&bull;">
          </div>
          <div>
            <input type="submit" value="Login" class="btn btn-primary" aria-label="Login button">
          </div>
        </form>

        <!-- 2FA code verification form -->
        <form v-else @submit.prevent="verify2FACode" id="2fa-form" name="2fa-form" method="post">
          <div class="mb-3">
            <label for="2fa-code" class="form-label">Enter 2FA Code</label>
            <input
                type="text"
                class="form-control"
                id="2fa-code"
                v-model="code2FA"
                placeholder="Enter 6-digit code"
                required
                pattern="[0-9]{6}"
                maxlength="6"
            >
            <small class="form-text text-muted">Enter code: 123456</small>
          </div>
          <div>
            <input type="submit" value="Verify" class="btn btn-primary" aria-label="Verify button">
          </div>
        </form>
      </div>
      <div class="col-sm"></div>
    </div>

    <!-- toast message container -->
    <div v-if="showToast" class="toast-container position-fixed bottom-0 end-0 p-3">
      <div class="toast show" role="alert" aria-live="assertive" aria-atomic="true">
        <div class="toast-header" :class="{ 'bg-success text-white': toastType === 'success', 'bg-danger text-white': toastType === 'error' }">
          <strong class="me-auto">{{ toastType === 'success' ? 'Success!' : 'Error!' }}</strong>
          <button type="button" class="btn-close" @click="showToast = false" aria-label="Close"></button>
        </div>
        <div class="toast-body">
          {{ toastMessage }}
        </div>
      </div>
    </div>
  </main>
</template>

<script>
import axios from 'axios';
import store from '../store/auth.js';

export default {
  data() {
    return {
      email: "",
      password: "",
      alert: "",
      showToast: false,
      toastMessage: '',
      toastType: '',
      is2FAEnabled: false,
      code2FA: '',
      tempUser: null
    };
  },
  methods: {
    showToastMessage(type, message, duration = 3000) {
      this.toastType = type;
      this.toastMessage = message;
      this.showToast = true;
      setTimeout(() => {
        this.toastType = '';
        this.toastMessage = '';
        this.showToast = false;
      }, duration);
    },
    async loginRoute(submitEvent) {
      try {
        const response = await axios.get('https://api.jsonbin.io/v3/b/674886bcad19ca34f8d20b23/latest', {
          headers: {
            'X-Master-Key': '$2b$10$6OQ5plkCt1vMLN8m7VMniOP5RSMQB3WOfPoQlYh/JNbs2xeF7psUu'
          }
        });

        if (response.status !== 200) {
          this.showToastMessage('error', 'Could not verify the user');
          return;
        }

        const user = response.data.record.filter(user =>
            user.email === submitEvent.target.elements.email.value &&
            user.password === submitEvent.target.elements.password.value
        );

        if (user.length > 0) {
          this.tempUser = { ...user[0] };
          delete this.tempUser.password;

          // Enable 2FA verification
          this.is2FAEnabled = true;
          this.showToastMessage('success', 'Please enter 2FA code');
        } else {
          this.showToastMessage('error', 'There is no user with those credentials found');
        }
      } catch (err) {
        console.log(err);
        this.showToastMessage('error',
            err.code !== 'ERR_NETWORK'
                ? 'There has been an error occurred, contact the developer!'
                : 'You dont have wifi!'
        );
      }
    },
    async verify2FACode() {
      if (this.code2FA === '123456') {
        // Store user in Vuex
        store.commit('setUser', this.tempUser);

        this.showToastMessage('success', 'Login successful!');

        // Navigate after a short delay
        setTimeout(() => {
          this.$router.push('/');
        }, 1000);
      } else {
        this.showToastMessage('error', 'Invalid verification code');
        this.code2FA = ''; // Clear the invalid code
      }
    }
  }
}
</script>

<style scoped>
.toast-container {
  z-index: 1050;
}

.toast {
  min-width: 250px;
}

input[type="text"]::-webkit-outer-spin-button,
input[type="text"]::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}
</style>