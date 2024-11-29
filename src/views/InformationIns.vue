<template>
  <ion-content>
    <ion-header>
      <ion-toolbar>
        <ion-title>Getting Started</ion-title>
      </ion-toolbar>
    </ion-header>

    <ion-list>
      <ion-item>
        <ion-label>
          Download the RealEstateCare app from the App Store or Google Play.
        </ion-label>
      </ion-item>
    </ion-list>

    <ion-header>
      <ion-toolbar>
        <ion-title>Scheduled Inspections</ion-title>
      </ion-toolbar>
    </ion-header>

    <ion-list>
      <ion-item>
        <ion-label>
          From the main dashboard, click on "Scheduled Inspections" to view a list of all the addresses that have been assigned to you.
        </ion-label>
      </ion-item>
    </ion-list>

    <ion-header>
      <ion-toolbar>
        <ion-title>Completed Inspections</ion-title>
      </ion-toolbar>
    </ion-header>

    <ion-list>
      <ion-item>
        <ion-label>
          From the main dashboard, click on "Completed Inspections" to view a list of all the addresses that you have completed inspections for.
        </ion-label>
      </ion-item>
    </ion-list>

    <ion-header>
      <ion-toolbar>
        <ion-title>Knowledge Base</ion-title>
      </ion-toolbar>
    </ion-header>

    <ion-list>
      <ion-item>
        <ion-label>
          From the main dashboard, click on "Knowledge Base" to access a variety of helpful documents and resources.
        </ion-label>
      </ion-item>
    </ion-list>

    <ion-header>
      <ion-toolbar>
        <ion-title>Settings</ion-title>
      </ion-toolbar>
    </ion-header>

    <ion-list>
      <ion-item>
        <ion-label>
          From the main dashboard, click on "Settings" to access your profile information, change your password, and customize your notification preferences.
        </ion-label>
      </ion-item>
    </ion-list>

    <ion-header>
      <ion-toolbar>
        <ion-title>Additional Information</ion-title>
      </ion-toolbar>
    </ion-header>

    <ion-text>
      <p>
        For any issues, complaints, or help, please reach out to us at 
        <a href="mailto:team@realestatecare.com">team@realestatecare.com</a>.
      </p>
    </ion-text>

    <ion-router-link :to="{ name: 'home' }" class="ion-button ion-button-danger mt-3">
      Go back
    </ion-router-link>
  </ion-content>
</template>
