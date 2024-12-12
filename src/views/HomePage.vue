<template>
    <ion-page>    
      <Header />    
      <ion-content class="ion-no-padding">
        <div
            id="dashboard"
            class="container-fluid d-flex flex-column text-dark dashboard-wrapper"
            style="min-height: 100vh; display: flex;"
        >
          
          <component :is="currentBodyComponent" />
        </div>
      </ion-content>
  
      
      <Footer/>
    </ion-page>
  </template>
  
  <script setup>
  import { shallowRef } from "vue";
  import Header from "../components/HeaderOne.vue";
  import Footer from "../components/FooterOne.vue";
  import MainContent from "../components/DashBoard.vue"; 
  import ScheduledContent from "../components/ScheduledNow.vue"; 
  import InspectionSee from "../components/InspectionSee.vue"; 
  import InspectionAdd from "../components/InspectionAdd.vue";   
  // import Inspectiontwo from "./components/Inspectiontwo.vue"; 
  // import inspectionsService from "../service/inspectionService";
  import CompletedIns from "../components/CompletedIns.vue"; 
  import KnowledgeBase from "../components/KnowledgeBase.vue"; 
  import SearchIns from "../components/SearchIns.vue"; 
  import HelpIns from "../components/HelpIns.vue"; 
  import SettingsUser from "../components/SettingsUser.vue"; 
  
  
  const currentBodyComponent = shallowRef(MainContent);
  
  
  const showScheduled = () => {
    currentBodyComponent.value = ScheduledContent;
  };
  
  
  const goBackToMainContent = () => {
    currentBodyComponent.value = MainContent;
  };
  
  
  const showInspectionDetails = (id) => {
    console.log(`showInspectionDetails called with ID: ${id}`); 
    currentBodyComponent.value = InspectionSee;
  };
  
  
  const showInspectionAdd = () => {
    currentBodyComponent.value = InspectionAdd;
  };
  
  
  const showCompletedIns = () => {
    currentBodyComponent.value = CompletedIns;
  };
  
  
  const showKnowledgeBase = () => {
    currentBodyComponent.value = KnowledgeBase;
  };
  
  
  const showSearchIns = () => {
    currentBodyComponent.value = SearchIns;
  };
  
  
  const showHelpIns = () => {
    currentBodyComponent.value = HelpIns;
  };
  
  
  const showSettings = () => {
    currentBodyComponent.value = SettingsUser;
  };
  
  
  window.showScheduled = showScheduled;
  window.goBackToMainContent = goBackToMainContent;
  window.showInspectionDetails = showInspectionDetails;
  window.showInspectionAdd = showInspectionAdd;
  window.showCompletedIns = showCompletedIns;
  window.showKnowledgeBase = showKnowledgeBase;
  window.showSearchIns = showSearchIns;
  window.showHelpIns = showHelpIns;
  window.showSettings = showSettings;
  </script>
  
  <style scoped>
  
  #dashboard {
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    margin: 10px;
  }
  </style>