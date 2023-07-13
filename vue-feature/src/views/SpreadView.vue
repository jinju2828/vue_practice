<template>
  <div>

  </div>
</template>
<script>

export default {
  data() {
    return {
      person : {
        name: 'John',
        age: 30
      }
    }


  },
  mounted() {
    const extendedPerson = {
      ...this.person,
      occupation: 'Developer',
    };
    alert(JSON.stringify(extendedPerson));
  }
}

</script>