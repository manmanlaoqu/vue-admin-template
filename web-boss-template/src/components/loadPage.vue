<template>
    <div class="loading">
            <i class="el-icon-loading"></i>
    </div>
</template>

<script>
export default {
    name:'loadPage'
}
</script>

<style lang="scss" scoped>
    .loading{
        position: relative;
        width: 100%;
        height: 100%;
        background-color: rgba(255,255,255,.3);
        .el-icon-loading{
            position: absolute;
            left: 50%;
            top: 50%;
            font-size: 24px;
            transform: translate(-50%,-50%);
        }
    }
</style>