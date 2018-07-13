<template>
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark navbar-fixed-top">
        <div class="container"  >
        <div class="navbar-header">
        <a href="" class="navbar-brand"><strong> LOGO</strong></a>
        </div>
        <ul class="nav navbar-nav default">
            <li><a href="#">首页</a></li>
            <li class="active"><a href="#">关于我们</a></li>
            <li><a href="#">联系我们</a></li>
        </ul>
    </div>
    </nav>
</template>


<script>
export default {
  
}
</script>


<style scoped>
    .default li{
        float: left;
    }

    ul {
        list-style-type: none;
        padding: 0;
    }

    li {
        display: inline-block;
        margin: 0 10px;
    }

    a {
        color: #42b983;
    }
</style>