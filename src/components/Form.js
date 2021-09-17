import { memo } from "react";
import { Form, Input, Button } from "antd";

const FormComponent = () => {
  const onFinish = (values) => {
    console.log(values);
  };
  const onReset = () => {
    form.resetFields();
  };
  const [form] = Form.useForm();
  return (
    <Form layout="inline" onFinish={onFinish} form={form} name="my-form">
      <Form.Item
        name="username"
        rules={[{ required: true, message: "Username is required" }]}
      >
        <Input style={{ width: 160 }} placeholder="Please input" />
      </Form.Item>
      <Form.Item style={{ display: "flex" }}>
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
        <Button htmlType="button" onClick={onReset}>
          Reset
        </Button>
      </Form.Item>
    </Form>
  );
};
export default memo(FormComponent);
