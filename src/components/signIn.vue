<template>
  <div>
    <h4>User Name</h4>
    <input v-model="text" placeholder="user name"/>
    <h4>Password</h4>
    <input v-model="text" placeholder="password"/>
    <h2></h2>
    <router-link to="/my-courses">
      <button>Sign In</button>
    </router-link>
  </div>
</template>
