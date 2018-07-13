<template>
    <section class="read-app">
      <div class=""  >
            <input type="text" v-model="val"   
                @keyup.enter="addItem"
                autofocus="autofocus"
                @keyup="canelEdit"
                placeholder="接下来做什么呢？"
            />
        </div>  
        <item  v-for="todo in filterTodo"  :todo="todo" :key="todo.id" @del="deleteTodo()" @saveTodoById="saveTodo" >{{todo}}</item>
        <tabs :filter="filter"  :todos=list  @toggle="toggleStatus"  @clearAllComplated="clearComplate"></tabs>
    </section>
       
</template>
<script>
let count = 0;
import Item from "./Item.vue";
import Tabs from "./Tabs.vue";

export default {
  components: {
    Item,
    Tabs
  },

  data() {
    return {
      list: [],
      val: "",
      filter: "all",
      complated: false
    };
  },
  methods: {
    addItem: function() {
      this.list.unshift({
        id: count++,
        name: this.val,
        complated: false
      });
      this.val = "";
    },
    canelEdit: function() {},
    deleteTodo: function(id) {
      this.list.splice(this.list.findIndex(item => id === item.id), 1);
    },
    toggleStatus: function(state) {
      this.filter = state;
    },
    clearComplate: function() {
      this.list = this.list.filter(item=>!item.complated);
    },
    saveTodo(id,value){
        debugger;
        console.log(...arguments);
        console.log(this.list.findIndex(item => id === item.id));
       this.list.splice(this.list.findIndex(item => id === item.id), 1 ,{id:id,name:value,complated:false});

    },
  },
  computed: {
    filterTodo() {
      if (this.filter === "all") {
        return this.list;
      }
      const sign = this.filter === "complated";
      return this.list.filter(item => item.complated === sign);
    }
  }
};
</script>
<style scoped>
section {
  width: 600px;
  margin: 0 auto;
  box-shadow: 0 0 10px rgb(221, 130, 130);
}
input {
  margin: 0;
  width: 100%;
  height: 60px;
  line-height: 60px;
  display: block;
  position: relative;
  font-size: 24px;
  border: 0;
  padding: 6px;
  border: 1px solid #999;
  box-sizing: border-box;
  border: none;
}
div {
  width: 100%;
}
</style>
