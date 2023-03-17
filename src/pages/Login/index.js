import React from 'react'
import { useNavigate } from 'react-router-dom'
import { Button, Card, Checkbox, Form, Input, message } from 'antd'
import { useStore } from '@/store'

import './styled.scss'
import logo from '@/assets/images/home-logo-9d8sxt.png'

const Login = () => {
  // 获取跳转实例对象
  const navigate = useNavigate()
  const { loginStore } = useStore()
  const onFinishHandler = async values => {
    console.log('valuedd', values)
    const { mobile, code } = values
    try {
      await loginStore.login({ mobile, code })
      navigate('/')
    } catch (e) {
      message.error(e.response?.data?.message || '登录失败')
    }
  }
  return (
    <div className="login">
      <Card className="login-container">
        <img className="login-logo" src={logo} alt="login" />
        <h2 className="login-title"></h2>
        <Form
          autoComplete="off"
          labelCol={{ span: 5 }}
          colon={true}
          onFinish={onFinishHandler}
          initialValues={{
            mobile: '13911111111',
            code: '246810',
            remember: true
          }}
          validateTrigger={['onBlur', 'onChange']}>
          <Form.Item
            label={'Phone'}
            name={'mobile'}
            rules={[
              { required: true, message: '请输入手机号' },
              { pattern: /^1[3-9]\d{9}$/, message: '手机号码格式错误', validateTrigger: 'onBlur' }
            ]}>
            <Input size="large" placeholder="请输入手机号" />
          </Form.Item>
          <Form.Item
            label={'Password'}
            name={'code'}
            rules={[
              { required: true, message: '请输入密码' },
              { len: 6, message: '密码6位字符', validateTrigger: 'onBlur' }
            ]}>
            <Input.Password size="large" placeholder="请输入密码" maxLength={6} />
          </Form.Item>
          <Form.Item name={'remember'} valuePropName="checked">
            <Checkbox className="login-checkbox-container">
              我已阅读并同意「用户协议」和「隐私条款」
            </Checkbox>
          </Form.Item>
          <Form.Item>
            <Button type="primary" htmlType="submit" size="large" block>
              登录
            </Button>
          </Form.Item>
        </Form>
      </Card>
    </div>
  )
}

export default Login
