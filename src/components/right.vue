<template>
  <main>
    <div class="lists" v-for="(list, i) in $store.state" :key="i">
      {{ i }}
      <div class="flex-row" v-for="(i, index) in list" :key="index">
        <div class="flex-row" v-for="item in +i.count" :key="item">
          <div
            :style="{
              'background-color': i.color,
            }"
            class="square"
            @click="i.count -= 1"
          ></div>
        </div>
      </div>
    </div>
  </main>
</template>

<script>
export default {
  data() {
    return {
      activeColor: "red",
    };
  },
};
</script>

<style>
.square {
  width: 10px;
  height: 10px;
  border: solid 1px;
  margin-left: 2px;
  margin-bottom: 10px;
}
.lists {
  margin-bottom: 2%;
  padding: 1%;
  border: 1px solid;
}
.flex-row {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
}
main {
  padding-top: 2%;
  padding-left: 2%;
  width: 60%;
  margin-left: 5%;
  border: 1px solid;
}
</style>