<template>
    <IonPage>
      <IonHeader :translucent="true">
        <IonToolbar>
          <IonTitle>Resources</IonTitle>
        </IonToolbar>
      </IonHeader>
  
      <IonContent :fullscreen="true">
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Resources</IonTitle>
          </IonToolbar>
        </IonHeader>
        <div id="container">
          <IonList :inset="true">
            <IonItem>
              <IonIcon :icon="bookOutline" slot="start"></IonIcon>
              <IonLabel
                ><a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://ionic.nuxtjs.org/"
                >
                  Nuxt Ionic Documentation</a
                ></IonLabel
              >
            </IonItem>
            <IonItem>
              <IonIcon :icon="rocketOutline" slot="start"></IonIcon>
              <IonLabel>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://stackblitz.com/github/nuxt-modules/ionic/tree/main/playground"
                  >Nuxt Ionic Playground</a
                ></IonLabel
              >
            </IonItem>
            <IonItem>
              <IonIcon :icon="logoGithub" slot="start"></IonIcon>
              <IonLabel>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://github.com/nuxt-modules/ionic"
                  >Nuxt Ionic GitHub Repo</a
                ></IonLabel
              >
            </IonItem>
            <IonItem>
              <IonIcon :icon="videocamOutline" slot="start"></IonIcon>
              <IonLabel class="ion-text-wrap">
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://www.youtube.com/watch?v=f4sB7NhCgRw"
                  >Video: Getting Started with Nuxt Ionic Module for Nuxt 3 by
                  Aaron Saunders</a
                ></IonLabel
              >
            </IonItem>
          </IonList>
          <IonButton @click="router.push('/')">Back</IonButton>
        </div>
      </IonContent>
    </IonPage>
  </template>

<script setup lang="ts">
import {
  IonPage,
  IonHeader,
  IonTitle,
  IonToolbar,
  IonContent,
  IonButton,
  IonList,
  IonItem,
  IonIcon,
  IonLabel
} from "@ionic/vue";

import { videocamOutline, logoGithub, rocketOutline, bookOutline } from 'ionicons/icons';

const router = useRouter();
</script>
  
  <style scoped>
  #container {
    text-align: center;
  
    position: absolute;
    left: 0;
    right: 0;
    top: 50%;
    transform: translateY(-50%);
  }
  #container strong {
    font-size: 20px;
    line-height: 26px;
  }
  #container p {
    font-size: 16px;
    line-height: 22px;
  
    color: #8c8c8c;
  
    margin: 0;
  }
  #container a {
    text-decoration: none;
  }
  </style>
  