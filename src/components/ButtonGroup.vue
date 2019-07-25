<template>
    <div>
      <el-tag type="success" style="width: 100px;height: 35px;float: left;margin: 10px;">菜鸟驿站
      </el-tag>
      <el-button type="success" @click="gotoBookingPackage" style="float: right;margin: 10px" plain>Customer</el-button>
      <el-button type="primary" @click="filterPackage()" plain>All</el-button>
      <el-button type="primary" @click="filterPackage(1)" plain>已预约</el-button>
      <el-button type="primary" @click="filterPackage(2)" plain>已取件</el-button>
      <el-button type="primary" @click="filterPackage(0)" plain>未预约</el-button>
      <AddDialog></AddDialog>
    </div>
</template>

<script>
  import AddDialog from '../components/AddDialog'
  export default {
    name: 'ButtonGroup',
    components:{AddDialog},
    methods: {
      filterPackage: function (state) {
        if (state !== undefined) {
          this.$store.dispatch('getPackagesByName', state);
        } else {
          this.$store.dispatch('getAllPackageInformation')
        }
      },
      gotoBookingPackage: function () {
        this.$router.push({path:'/about'})
      }
    }
  }
</script>

<style>
  .el-header, .el-footer {
    background-color: #B3C0D1;
    color: #333;
    text-align: center;
    line-height: 60px;
  }

  .el-aside {
    background-color: #D3DCE6;
    color: #333;
    text-align: center;
    line-height: 200px;
  }

  .el-main {
    background-color: #E9EEF3;
    color: #333;
    text-align: center;
    line-height: 160px;
  }

  body > .el-container {
    margin-bottom: 40px;
  }

  .el-container:nth-child(5) .el-aside,
  .el-container:nth-child(6) .el-aside {
    line-height: 260px;
  }

  .el-container:nth-child(7) .el-aside {
    line-height: 320px;
  }
</style>
