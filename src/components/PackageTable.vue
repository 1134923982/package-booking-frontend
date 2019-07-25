<template>
    <el-main>
      <el-table :data="this.$store.state.packages">
        <el-table-column prop="id" label="运单号" width="140">
        </el-table-column>
        <el-table-column prop="username" label="收件人" width="120">
        </el-table-column>
        <el-table-column prop="iphoneNumber" label="电话" width="140"></el-table-column>
        <el-table-column prop="state" label="状态" width="140">
          <template slot-scope="scope">
            <span style="margin-left: 10px">{{ scope.row.state===0?'未预约':scope.row.state===1?'已预约':'已取件'}}</span>
          </template>

        </el-table-column>
        <el-table-column prop="bookingTime" label="预约时间" width="140"></el-table-column>
        <el-table-column label="">
          <template slot-scope="scope">
            <el-button type="primary" v-if="scope.row.state!==2" @click="confirmReceipt(scope.row)" plain>确认收货
            </el-button>
          </template>
        </el-table-column>

      </el-table>
    </el-main>
</template>

<script>
  export default {
    name: 'home',
    data: function () {
      return {
      }
    },
    methods: {
      confirmReceipt: function (item) {
        item.state = 2
        this.$store.dispatch('updatePackage', item)
      },
    },
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
