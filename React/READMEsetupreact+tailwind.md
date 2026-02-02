# React Setup Steps  Introduction

1. create a folder
2.open terminal  ( npm create vite@latest) copy this link from chrome react vite webdite.=>https://tailwindcss.com/docs/installation/using-vite
3.paste on terminal
4.add project name
5.select frame work - React
6.select variant - javascript
7.use rolldown vite - No
8.Install npm & start now -yes

<!-- After Installation of all folders or packages -->

1.open terrminal on project folder
2.search tailwind css on chrome and open installation tab
3.copy install tailwind css link(npm install tailwindcss @tailwindcss/vite)=>npm install tailwindcss @tailwindcss/vite
4.check packages.json (dependancies in which tailwind css is added)=>https://tailwindcss.com/docs/installation/using-vite
5.open vite.configration file and paste the commented lines from website
[import { defineConfig } from 'vite'
<!-- import tailwindcss from '@tailwindcss/vite' -->
export default defineConfig({
  plugins: [
    <!-- tailwindcss(), -->
  ],
})] 

6.open index.css file and remove all code from it and  this text from websitee
<!-- @import "tailwindcss"; -->
7.open terminal copy this form website for installtion of react-router-dom=>https://reactrouter.com/start/declarative/installation
<!-- npm install react-router-dom-->


<!-- /Run code using -->

8.npm run dev