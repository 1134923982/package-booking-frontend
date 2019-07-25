<template>
    <el-form ref="form" :model="form" label-width="80px">

      <el-form-item label="订单号">
        <el-select v-model="form.id" placeholder="请选择订单">
          <el-option v-for="item in packages" :value="item.id">{{item.id}}</el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="取件时间">
        <div class="block">
          <el-date-picker
            v-model="form.bookingTime"
            type="datetime"
            placeholder="选择日期时间"
            default-time="12:00:00">
          </el-date-picker>
        </div>
<!--        <el-input v-model="form.bookingTime"></el-input>-->
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="booking">立即预约</el-button>
        <el-button @click="gotoPackage">取消</el-button>
      </el-form-item>
    </el-form>
</template>
<script>
  export default {
    name: 'about',
    components: {},
    data: function () {
      return {
        dialogFormVisible: false,
        form: {
          id: '',
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
      gotoPackage: function () {
        this.$router.push({name:'home'})
      },
      booking: function () {
        const item = this.packages.filter(i=>i.id===this.form.id)[0];
        console.log(item)
        console.log(this.form)
        item.state=1;
        item.booingTime=this.form.booingTime;
        this.$store.dispatch('updatePackage',item)
      }
    },
    mounted() {
      this.$store.dispatch('getAllPackageInformation')
    },
    computed: {
      packages:function () {
        return this.$store.state.packages.filter(i=>i.state===0)
      }
    }
  }
</script>
