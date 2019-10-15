<template>
  <div class="homeBox">
    <components :is="componentOn" />
  </div>
</template>

<script>
import adminComponent from './admin'
import userComponent from './user'
import { mapGetters } from 'vuex'
export default {
  computed: {
    ...mapGetters(['userName']),
    componentOn() {
      console.log(this.userName,'用户获取权限');
      
      if (this.userName === 'admin') {
        return 'adminComponent'
      } else {
        return 'userComponent'
      }
    }
  },
  components: {
    adminComponent,
    userComponent
  }
}
</script>
