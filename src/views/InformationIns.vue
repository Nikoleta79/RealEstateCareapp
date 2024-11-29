<template>
  <main class="container" aria-label="Getting Started">
    <h2 class="my-3" aria-label="Getting Started">Getting Started</h2>
    <ul class="list-group">
      <li class="list-group-item" aria-label="Download the RealEstateCare app from the App Store or Google Play.">Download the RealEstateCare app from the App Store or Google Play.</li>
    </ul>

    <h2 class="my-3" aria-label="Scheduled Inspections">Scheduled Inspections</h2>
    <ul class="list-group">
      <li class="list-group-item" aria-label="From the main dashboard, click on Scheduled Inspections to view a list of all the addresses that have been assigned to you.">From the main dashboard, click on "Scheduled Inspections" to view a list of all the addresses that have been assigned to you.</li>
    </ul>

    <h2 class="my-3" aria-label="Completed Inspections">Completed Inspections</h2>
    <ul class="list-group">
      <li class="list-group-item" aria-label="From the main dashboard, click on Completed Inspections to view a list of all the addresses that you have completed inspections for.">From the main dashboard, click on "Completed Inspections" to view a list of all the addresses that you have completed inspections for.</li>
    </ul>

    <h2 class="my-3" aria-label="Knowledge Base">Knowledge Base</h2>
    <ul class="list-group">
      <li class="list-group-item" aria-label="From the main dashboard, click on Knowledge Base to access a variety of helpful documents and resources.">From the main dashboard, click on "Knowledge Base" to access a variety of helpful documents and resources.</li>
    </ul>

    <h2 class="my-3" aria-label="Settings">Settings</h2>
    <ul class="list-group">
      <li class="list-group-item" aria-label="From the main dashboard, click on Settings to access your profile information, change your password, and customize your notification preferences.">From the main dashboard, click on "Settings" to access your profile information, change your password, and customize your notification preferences.</li>
    </ul>

    <h2 class="my-3" aria-label="Additional Support">Additional Information</h2>
    <p aria-label="If you have any issues or questions about using the RealEstateCare app, please contact our support team at team@realestatecare.com. We are happy to help!">for any issue complain or help please reach us out at  <a href="mailto:team@realestatecare.com">team@realestatecare.com</a>. </p>
    <router-link :to="{ name: 'home' }" class="btn btn-danger mt-3" style="margin-right: 20px;" aria-label="Go back to the dashboard">Go back</router-link>

  </main>
</template>