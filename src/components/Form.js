import { memo } from "react";
import { Form, Input, Button, Select } from "antd";
import MaskedInput from "antd-mask-input";
const { Option } = Select;
const FormComponent = () => {
  const onFinish = (values) => {
    console.log(values);
  };
  const onReset = () => {
    form.resetFields();
  };
  const [form] = Form.useForm();

  const selectBefore = (
    <Select defaultValue="http://" className="select-before">
      <Option value="http://">http://</Option>
      <Option value="https://">https://</Option>
    </Select>
  );
  const selectAfter = (
    <Select defaultValue=".com" className="select-after">
      <Option value=".com">.com</Option>
      <Option value=".jp">.jp</Option>
      <Option value=".cn">.cn</Option>
      <Option value=".org">.org</Option>
    </Select>
  );
  return (
    <Form
      layout="inline"
      onFinish={onFinish}
      form={form}
      name="my-form"
      initialValues={{ site: "www." }}
    >
      <Form.Item
        name="username"
        rules={[{ required: true, message: "Username is required" }]}
      >
        <Input style={{ width: 160 }} placeholder="Please input" />
      </Form.Item>
      <Form.Item name="card">
        <MaskedInput mask="1111 1111 1111 1111" size="20" />
      </Form.Item>
      <Form.Item name="phone">
        <MaskedInput mask="+7 (111) 111-111-11" />
      </Form.Item>
      <Form.Item name="site">
        <Input addonBefore={selectBefore} addonAfter={selectAfter} />
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
