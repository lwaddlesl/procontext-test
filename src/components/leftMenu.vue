<template>
  <aside>
    <ul v-for="(list, i) in $store.state" :key="i">
      <li>
        <div class="arrow" @click="showItems(`${i}`)"></div>
        <input :class="`${i}-main`" @change="selectItems(i)" type="checkbox" />
        {{ i }}
      </li>
      <ul v-show="!showlist.includes(`show${i}`)">
        <li v-for="(item, index) in list" :key="index">
          <input
            @change="selectMain(i)"
            type="checkbox"
            :class="`${i}-items`"
          />
          {{ index }}
          <input
            max="100"
            min="0"
            @change="
              item.count > 1000
                ? (item.count = 1000)
                : item.count < 0
                ? (item.count = 0)
                : true
            "
            v-model.lazy="item.count"
            type="Number"
          />
          <input v-model.lazy="item.color" type="color" />
        </li>
      </ul>
    </ul>
  </aside>
</template>

<script>
export default {
  data() {
    return {
      showlist: [],
      statelist: [],
    };
  },
  methods: {
    showItems(show) {
      let arrow = document.querySelectorAll(".arrow");
      if (show == "list1" && this.showlist.includes("showlist1")) {
        this.showlist = this.showlist.filter((item) => item !== "showlist1");
        arrow[0].style.transform = "rotate(225deg)";
      } else if (show == "list2" && this.showlist.includes("showlist2")) {
        this.showlist = this.showlist.filter((item) => item !== "showlist2");
        arrow[1].style.transform = "rotate(225deg)";
      } else if (show == "list3" && this.showlist.includes("showlist3")) {
        this.showlist = this.showlist.filter((item) => item !== "showlist3");
        arrow[2].style.transform = "rotate(225deg)";
      } else {
        if (show == "list1") {
          this.showlist.push("showlist1");
          arrow[0].style.transform = "rotate(-45deg)";
        } else if (show == "list2") {
          this.showlist.push("showlist2");
          arrow[1].style.transform = "rotate(-45deg)";
        } else if (show == "list3") {
          this.showlist.push("showlist3");
          arrow[2].style.transform = "rotate(-45deg)";
        }
      }
    },
    selectItems(i) {
      let listItems;
      this.statelist.includes(i)
        ? (this.statelist = this.statelist.filter((item) => item !== i))
        : this.statelist.push(i);

      if (i == "list1") {
        listItems = document.querySelectorAll(".list1-items");
      } else if (i == "list2") {
        listItems = document.querySelectorAll(".list2-items");
      } else {
        listItems = document.querySelectorAll(".list3-items");
      }
      if (this.statelist.includes(i)) {
        for (let i = 0; i < listItems.length; i++) {
          listItems[i].checked = true;
        }
      } else {
        for (let i = 0; i < listItems.length; i++) {
          listItems[i].checked = false;
        }
      }
      console.log(i);
    },

    selectMain(i) {
      let list = document.querySelector(`.${i}-main`);
      let listItems = document.querySelectorAll(`.${i}-items`);
      let activeItems = 0;
      for (let i = 0; i < listItems.length; i++) {
        if (listItems[i].checked == true) {
          activeItems++;
        }
      }
      if (activeItems == listItems.length) {
        if (!this.statelist.includes(i)) {
          this.statelist.push(i);
        }
        list.indeterminate = false;
        list.checked = true;
      } else if (activeItems < listItems.length) {
        this.statelist = this.statelist.filter((item) => item !== i);
        list.checked = false;
        list.indeterminate = true;
      }
    },
  },
};
</script>

<style scoped>
aside {
  width: 30%;
  height: auto;
  padding: 2%;
  border: 1px solid;
}
li {
  list-style-type: none;
}
.arrow {
  display: block;
  width: 7px;
  height: 7px;
  border-left: 3px solid rgb(75, 75, 75);
  border-bottom: 3px solid rgb(75, 75, 75);
  transform: rotate(225deg);
}
</style>