<template>
  <footer
    class="w-full border-t border-grey p-4 pin-b bg-primary-dk font-sans text-white"
  >
    <div class="flex justify-between max-w-screen-xl m-auto p-2">
      <div>
        <h4 class="text-2xl font-bold">{{ identity.siteName }}</h4>
        <address class="font-sans">
          <p>{{ identity.address }}</p>
          <p>
            {{ identity.city }}
            {{ identity.state }}
            {{ identity.zipCode }}
          </p>
        </address>
      </div>
      <div>
        <a class="" :href="`tel:${identity.phone}`">{{ identity.phone }}</a>
      </div>
    </div>
  </footer>
</template>
<script>
import { mapState } from 'vuex';
export default {
  computed: {
    ...mapState(['identity']),
  },
};
</script>
