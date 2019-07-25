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
      <el-button type="primary" plain @click="dialogFormVisible = true">+添加</el-button>
      <el-dialog title="包裹入库" :visible.sync="dialogFormVisible">
        <el-form :model="form">
          <el-form-item label="订单号" :label-width="formLabelWidth">
            <el-input v-model="form.id" type="number" autocomplete="off"></el-input>
          </el-form-item>
          <el-form-item label="收件人" :label-width="formLabelWidth">
            <el-input v-model="form.username" autocomplete="off"></el-input>
          </el-form-item>
          <el-form-item label="电话" :label-width="formLabelWidth">
            <el-input v-model="form.iphoneNumber" autocomplete="off"></el-input>
          </el-form-item>
        </el-form>
        <div slot="footer" class="dialog-footer">
          <el-button @click="dialogFormVisible = false">取 消</el-button>
          <el-button type="primary" @click="addPackage">确 定</el-button>
        </div>
      </el-dialog>
    </el-header>
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
  </el-container>
</template>

<script>
  export default {
    name: 'home',
    components: {},
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
      confirmReceipt: function (item) {
        item.state = 2
        this.$store.dispatch('updatePackage', item)
      },
      addPackage: function () {
        this.dialogFormVisible = false
        this.form.state = 0;
        this.$store.dispatch('addPackage',this.form)
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
