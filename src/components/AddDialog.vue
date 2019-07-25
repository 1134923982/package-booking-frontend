<template>
  <span style="margin-left: 10px">
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
  </span>
</template>

<script>
  export default {
    name: 'add',
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
      addPackage: function () {
        this.dialogFormVisible = false
        this.form.state = 0;
        this.$store.dispatch('addPackage', this.form)
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
