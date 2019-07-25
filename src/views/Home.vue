<template>
  <el-container>
    <el-header>
      <ButtonGroup/>
    </el-header>
    <PackageTable></PackageTable>
  </el-container>
</template>

<script>
  import AddDialog from '../components/AddDialog'
  import PackageTable from '../components/PackageTable'
  import ButtonGroup from '../components/ButtonGroup'
  export default {
    name: 'home',
    components: {AddDialog,PackageTable,ButtonGroup},
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
        this.$router.push({path:'/booking'})
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
