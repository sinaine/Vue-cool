<template>
    <div class="helper">
        <span class="left">{{unComplatedCount}} items left</span>
        <span class="tabs" v-for="state in statues" :key='state'
            :class="filter===state?'checked':''"
            @click="toggleFilter(state)"
        >
          {{state}} 
        </span>
        <span class="clear" @click="clearComlated">Clear Complated</span>

    </div>
</template>
<script>
export default {
  props: {
     
    filter: {
      type: String,
      required: true
    },
    todos:{
      type:Array,
      required:true,
    }
  },
  data() {
    return {
      statues: ["all", "active", "complated"]
    };
  },
  methods: {
    clearComlated: function() {
      this.$emit('clearAllComplated');
    },
    toggleFilter: function(state) {
      this.$emit('toggle',state);
    }
  },
  
  computed:{
    unComplatedCount:function(){
      return  this.todos.filter( item=> !item.complated).length;
    }
  }

};
</script>

<style scoped>
.helper {
  width: 100%;
  height: 60px;
  line-height: 60px;
  background-color: #fff;
  font-size: 12px;
  border-top: 1px solid #888;
  position: relative;
}
.left {
  cursor: pointer;
  width: 100px;
  display: inline-block;
  position: relative;
  left: 10px;
  height: 30px;
  line-height: 30px;
  border-radius: 4px;
  padding: 5px;
  box-sizing: content-box;
}

.tabs {
  vertical-align: middle;
  margin: 0 auto;
  cursor: pointer;
  display: inline-block;
  margin-left: 10px;
  height: 30px;
  line-height: 30px;
  padding: 5px;
  text-align: center;
  box-sizing: content-box;
}
.checked {
   background-image: -webkit-linear-gradient(10deg,red 10% ,green 60%, blue);
}
.clear {
  cursor: pointer;
  position: absolute;
  right: 30px;
  display: inline-block;
  border-radius: 4px;
  box-sizing: content-box;
}
</style>

