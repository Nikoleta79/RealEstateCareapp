<template>
  <main class="container">
    <div class="row">
      <div class="col-2-sm"></div>
      <!-- Profile settings container -->
      <div class="col-sm">
        <h1>Profile settings</h1>
        <!-- Profile form -->
        <form v-on:submit.prevent="updateAccountDetails" id="accountdetails" name="accountdetails" method="post">
          <div class="mb-3">
            <label for="firstname" class="form-label" aria-label="Firstname">Firstname</label>
            <input type="firstname" class="form-control" id="firstname" name="firstname" placeholder="John" v-model="firstname" aria-describedby="firstname-description">
            <small id="firstname-description" class="form-text text-muted">Enter your first name</small>
          </div>
          <div class="mb-3">
            <label for="lastname" class="form-label" aria-label="Lastname">Lastname</label>
            <input type="lastname" class="form-control" id="lastname" name="lastname" placeholder="Do" v-model="lastname" aria-describedby="lastname-description">
            <small id="lastname-description" class="form-text text-muted">Enter your last name</small>
          </div>
          <div class="mb-3">
            <label for="newpassword" class="form-label" aria-label="New password">New password</label>
            <input type="newpassword" class="form-control" id="newpassword" name="newpassword" placeholder="&bull;&bull;&bull;&bull;&bull;&bull;" v-model="newpassword" aria-describedby="newpassword-description">
            <small id="newpassword-description" class="form-text text-muted">Enter your new password</small>
          </div>
          <div class="mb-3">
            <label for="newpassword" class="form-label" aria-label="Confirm new password">Confirm new password</label>
            <input type="newpassword" class="form-control" id="newpassword" name="newpassword" placeholder="&bull;&bull;&bull;&bull;&bull;&bull;" v-model="confirmnewpassword" aria-describedby="confirmnewpassword-description">
            <small id="confirmnewpassword-description" class="form-text text-muted">Confirm your new password</small>
          </div>
          <div>
            <input :disabled="saving" type="submit" value="Change account" class="btn btn-primary" aria-label="Change account">
          </div>
        </form>

      </div>
      <div class="col-2-sm"></div>
    </div>
    <hr>
    <div class="row">
      <div class="col-2-sm"></div>
      <!-- Application settings for user container -->
      <div class="col-sm">
        <h1>Application settings</h1>
        <div class="form-check form-switch">
          <input class="form-check-input" type="checkbox" role="switch" id="darkModeSwitch"
                 v-model="darkTheme"
                 @change="toggleTheme"
                 aria-label="Dark mode switch">
          <label class="form-check-label" for="darkModeSwitch">Dark mode</label>
        </div>
        <div class="form-check form-switch">
          <input class="form-check-input" type="checkbox" role="switch" id="notificationsSwitch"
                 v-model="notifications"
                 aria-label="Notifications switch">
          <label class="form-check-label" for="notificationsSwitch">Notifications</label>
        </div>
        <div class="form-check form-switch mb-3">
          <input class="form-check-input" type="checkbox" role="switch" id="soundSwitch"
                 v-model="settings.sounds"
                 aria-label="Sound switch">
          <label class="form-check-label" for="soundSwitch">Sounds</label>
        </div>
        <button :disabled="saving" class="btn btn-primary" @click="updateSettings()" aria-label="Save changes">Save changes</button>
      </div>
      <div class="col-2-sm"></div>
    </div>
    <router-link :to="{ name: 'home' }" class="btn btn-danger mt-3" style="margin-right: 20px;" aria-label="Go back to the dashboard">Go back</router-link>

    <button class="btn btn-danger mt-3" style="margin-left: 20px;" :disabled="saving" @click="logout()" aria-label="Logout">Logout</button>


    <div v-if="showToast" class="toast-container">
      <div v-bind:class="{'show': showToast}" :class="'toast toast-' + toastType">
        {{ toastMessage }}
      </div>
    </div>
  </main>
</template>

<script>
import axios from 'axios';
import store from '../store/auth.js'


export default {
  created() {

  },
  data() {
    return {
      settings: (store.getters.user.settings != undefined) ? store.getters.user.settings : {
        darkTheme: false,
        notifications: false,
        sounds: false
      },
      firstname: (store.getters.user.firstName != undefined) ? store.getters.user.firstName : false,
      lastname: (store.getters.user.lastName != undefined) ? store.getters.user.lastName : false,
      password: '',
      newpassword: '',
      confirmnewpassword: '',
      showToast: false,
      toastMessage: '',
      toastType: '',
      saving: false,
    };
  },
  computed: {
    darkTheme: {
      get() {
        return this.$store.getters.darkTheme;
      },
      set() {
        this.$store.commit('toggleDarkTheme');
      }
    },
    notifications: {
      get() {
        return this.$store.getters.userNotifications;
      },
      set() {
        this.$store.commit('toggleNotifications');
      }
    }
  },
  methods: {
    async logout() {
      this.saving = true;
      try {
        const jsonInspections = await axios.get(inspections);
        const jsonUsers = await axios.get(users);

        if (jsonInspections.status === 200 && jsonUsers.status === 200) {
          const updateInspections = await axios.put(`https://api.jsonbin.io/v3/b/63c1a09815ab31599e35cf00`, jsonInspections.data, {
            headers: {
              'Content-Type': 'application/json',
              'X-Master-Key': '$2b$10$6OQ5plkCt1vMLN8m7VMniOP5RSMQB3WOfPoQlYh/JNbs2xeF7psUu'
            }
          });
          const updateUsers = await axios.put(`https://api.jsonbin.io/v3/b/63c0345215ab31599e349bb2`, jsonUsers.data, {
            headers: {
              'Content-Type': 'application/json',
              'X-Master-Key': '$2b$10$6OQ5plkCt1vMLN8m7VMniOP5RSMQB3WOfPoQlYh/JNbs2xeF7psUu'
            }
          });
          if(updateInspections.status === 200 && updateUsers.status === 200) {
            this.saving = false;
            store.commit("setUser", {});
            this.$router.go({ name: 'home' });
          }
        }
      } catch (error) {
        console.error('Logout error:', error);
      }
      this.saving = false;
      store.commit("setUser", {});
      this.$router.go({ name: 'home' });
    },
    async updateSettings() {
      try {
        this.saving = true;

        // Show success toast
        this.toastType = 'success';
        this.toastMessage = 'Settings saved successfully';
        this.showToast = true;

        setTimeout(() => {
          this.toastType = '';
          this.toastMessage = '';
          this.showToast = false;
        }, 3000);

      } catch(error) {
        this.toastType = 'error';
        this.toastMessage = 'An error occurred while saving settings';
        this.showToast = true;

        setTimeout(() => {
          this.toastType = '';
          this.toastMessage = '';
          this.showToast = false;
        }, 3000);
      }

      this.saving = false;
    },
    async updateAccountDetails() {
      try {
        // Validate user is logged in
        const usrArr = store.getters.user;
        if (!usrArr) {
          this.showErrorToast('No user logged in!');
          return;
        }

        this.saving = true;

        // Validate password if provided
        if (this.newpassword && this.newpassword.length > 0) {
          if (this.newpassword !== this.confirmnewpassword) {
            this.showErrorToast('Passwords do not match!');
            this.saving = false;
            return;
          }
        }

        // Validate at least one field is filled
        if (!this.firstname && !this.lastname && !this.newpassword) {
          this.showErrorToast('Please fill at least one field to update!');
          this.saving = false;
          return;
        }

        // Show success toast
        this.toastType = 'success';
        this.toastMessage = 'Account updated successfully';
        this.showToast = true;

        setTimeout(() => {
          this.toastType = '';
          this.toastMessage = '';
          this.showToast = false;
        }, 3000);

        // Clear password fields after successful update
        this.newpassword = '';
        this.confirmnewpassword = '';

      } catch(error) {
        this.showErrorToast('An error occurred while updating account');
      }

      this.saving = false;
    },
    showErrorToast(message) {
      this.toastType = 'error';
      this.toastMessage = message;
      this.showToast = true;

      setTimeout(() => {
        this.toastType = '';
        this.toastMessage = '';
        this.showToast = false;
      }, 3000);
    }
  }
}
</script>