<template>
    <div  :class="['itemclas',todo.complated?'complated':'']">
        <input type="checkbox" 
        class="toggle" 
        v-model="todo.complated"
        />
        <label v-if="!isEdit" @click="ShowEdit">{{todo.name}}</label>
        <input v-else v-model="todo.name" @blur="saveTodo(todo.id,$event)" @keyup.esc="cancelEdit"/>
        <button class="del" @click="deleteItem(todo.id)">X</button>
    </div>
</template>
<script>
export default {
  data() {
    return {
      isEdit: false
    };
  },
  props: {
    todo: {
      type: Object,
      required: true
    }
  },

  methods: {
    deleteItem: function() {
      this.$emit("del", this.todo.id);
    },
    ShowEdit(e) {
      console.log(e);
      this.isEdit = true;
    },
    saveTodo(id,e) {
      let value = e.target.value;
      this.$emit('saveTodoById',id,value);
    },
    cancelEdit(){
        this.isEdit = false;
    }
  }
};
</script>
<style scoped>
.itemclas {
  width: 100%;
  height: auto;
  background-color: #fff;
  border-top: 1px solid #eee;
}
label {
  height: 60px;
  line-height: 60px;
  width: 90%;
  font-size: 24px;
  color: #999;
}
input {
  height: 60px;
  line-height: 60px;
  width: 90%;
  font-size: 24px;
  color: #999;
  border: none;
}
.complated {
  text-decoration: line-through;
}
.del {
  position: relative;
  right: 10px;
}
.toggle {
  width: 15px;
  height: 15px;
  margin-left: 10px;
}
button {
  background: #fff;
  border: none;
}
</style>
