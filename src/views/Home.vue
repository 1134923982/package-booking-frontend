<template>
  <el-container>
    <el-header>
      <el-tag type="success" style="width: 100px;height: 35px;float: left;margin: 10px;">菜鸟驿站
      </el-tag>
      <el-button type="success" @click="gotoBookingPackage" style="float: right;margin: 10px" plain>Customer</el-button>
      <el-button type="primary" @click="filterPackage()" plain>All</el-button>
      <el-button type="primary" @click="filterPackage(1)" plain>已预约</el-button>
      <el-button type="primary" @click="filterPackage(2)" plain>已取件</el-button>
      <el-button type="primary" @click="filterPackage(0)" plain>未预约</el-button>
      <AddDialog></AddDialog>
    </el-header>
    <PackageTable></PackageTable>
  </el-container>
</template>

<script>
  import AddDialog from '../components/AddDialog'
  import PackageTable from '../components/PackageTable'
  export default {
    name: 'home',
    components: {AddDialog,PackageTable},
    data: function () {
      return {
        dialogFormVisible: false,
        form: {
          username: '',
          id: '',
          iphoneNumber: '',
        },
        formLabelWidth: '80px'
      }
    },
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
    },
    mounted() {
      this.$store.dispatch('getAllPackageInformation')
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
