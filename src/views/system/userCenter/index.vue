<template>
  <el-form ref="refLoginForm" class="login-form" :model="userInfoForm" :rules="formRules">
    <div class="title-container">
      <h3 class="title text-center">{{ settings.title }}</h3>
    </div>
    <el-form-item prop="username" :rules="formRules.isNotNull('user not empty')">
      <span class="svg-container">
        <ElSvgIcon name="User" :size="14" />
      </span>
      <el-input v-model="userInfoForm.username" size="small" placeholder="用户名" />
    </el-form-item>
    <el-form-item prop="name" :rules="formRules.isNotNull('user not empty')">
      <span class="svg-container">
        <ElSvgIcon name="User" :size="14" />
      </span>
      <el-input v-model="userInfoForm.name" placeholder="姓名" />
    </el-form-item>
    <el-form-item prop="email" :rules="formRules.isNotNull('user not empty')">
      <span class="svg-container">
        <ElSvgIcon name="User" :size="14" />
      </span>
      <el-input v-model="userInfoForm.email" placeholder="邮箱" />
    </el-form-item>
    <el-form-item prop="phone" :rules="formRules.isNotNull('user not empty')">
      <span class="svg-container">
        <ElSvgIcon name="User" :size="14" />
      </span>
      <el-input v-model="userInfoForm.phone" placeholder="电话" />
    </el-form-item>
    <el-form-item prop="studentNo" :rules="formRules.isNotNull('user not empty')">
      <span class="svg-container">
        <ElSvgIcon name="User" :size="14" />
      </span>
      <el-input v-model="userInfoForm.studentNo" placeholder="学生号" />
    </el-form-item>
    <el-form-item prop="roomId" :rules="formRules.isNotNull('user not empty')">
      <span class="svg-container">
        <ElSvgIcon name="User" :size="14" />
      </span>
      <el-input v-model="userInfoForm.roomId" placeholder="房间ID" />
      <!-- 下拉框自己写一下 -->
      <!--占位-->
    </el-form-item>
    <el-form-item prop="password" :rules="formRules.isNotNull('password not empty')">
      <span class="svg-container">
        <ElSvgIcon name="Lock" :size="14" />
      </span>
      <el-input
        :key="passwordType"
        ref="refPassword"
        v-model="userInfoForm.password"
        :type="passwordType"
        name="password"
        placeholder="密码"
      />
      <span class="show-pwd" @click="showPwd">
        <svg-icon :icon-class="passwordType === 'password' ? 'eye' : 'eye-open'" />
      </span>
    </el-form-item>
    <el-form-item style="width: 100%">
      <el-button :loading="loading" size="large" type="primary" style="width: 100%" @click.prevent="handleModify">
        确认修改
      </el-button>
    </el-form-item>
  </el-form>
</template>

<script setup>
import {updateUserInfo} from '@/api/userCenter.js'
import { elMessage } from '@/hooks/use-element'

//数据域与回显
const userInfoForm = reactive({
  username: '',
  password: '',
  confirmPassword: '',
  name:'',
  email:'',
  phone:'',
  roomId:'',
  studentNo:'',
})

//确定修改
const handleModify = () => {
  updateUserInfo(userInfoForm).then(res=>{
    if(res.code!==200) return
    elMessage('修改成功','success')
  })
}
</script>

<style lang="scss" scoped></style>
