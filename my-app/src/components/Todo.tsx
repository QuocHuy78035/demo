import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import {
  Button,
  Form,
  Input,
  message,
  Modal,
  Result,
  Spin,
  Table,
  Tag,
} from "antd";
import axios from "axios";
import { CheckCircleOutlined, SyncOutlined } from "@ant-design/icons";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router";
interface ITodo {
  id: number;
  todo: string;
  completed: boolean;
}

const fetchTodos = async (): Promise<ITodo[]> => {
  console.log("call");
  const res = await axios.get("https://dummyjson.com/todos/user/13");
  return res.data.todos;
};

const postTodo = async (title: string): Promise<void> => {
  await axios.post("https://dummyjson.com/todos/add", {
    title,
    completed: false,
    userId: 13,
  });
};

export const Todo = () => {
  const navigate = useNavigate();
  const [messageApi, contextHolder] = message.useMessage();
  const [form] = Form.useForm();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const queryClient = useQueryClient();

  const success = () => {
    messageApi.open({
      type: "success",
      content: "Create Todo Succesfully!",
    });
  };

  const mutation = useMutation({
    mutationFn: postTodo,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["todos"] });
      success();
    },
  });

  const { data, isLoading, error } = useQuery({
    queryKey: ["todos"],
    queryFn: fetchTodos,
    staleTime: 1000 * 60 * 5,
  });

  useEffect(() => {
    console.log("relog");
  }, []);

  if (isLoading) return <Spin fullscreen />;
  if (error)
    return (
      <Result
        status="500"
        title="500"
        subTitle="Sorry, something went wrong."
        extra={<Button type="primary">Back Home</Button>}
      />
    );

  const columns = [
    {
      title: "ID",
      dataIndex: "id",
      key: "id",
    },
    {
      title: "Tiêu đề",
      dataIndex: "todo",
      key: "todo",
      render: (todo: string) => {
        return <div style={{ maxWidth: 400 }}>{todo}</div>;
      },
    },
    {
      title: "Hoàn thành",
      dataIndex: "completed",
      key: "completed",
      render: (completed: boolean) => {
        return (
          <div style={{ maxWidth: 20 }}>
            {completed ? (
              <Tag icon={<CheckCircleOutlined />} color="success">
                Completed
              </Tag>
            ) : (
              <Tag icon={<SyncOutlined spin />} color="processing">
                processing
              </Tag>
            )}
          </div>
        );
      },
    },
  ];

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = async () => {
    const values = await form.validateFields();
    setIsModalOpen(false);
    form.resetFields();
    mutation.mutate(values.title);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      {contextHolder}

      <div>
        <Modal
          title="Basic Modal"
          closable={true}
          open={isModalOpen}
          onOk={handleOk}
          onCancel={handleCancel}
        >
          <Form form={form}>
            <Form.Item
              label="Title"
              name="title"
              rules={[
                { required: true, message: "Please input your TODO title!" },
              ]}
            >
              <Input />
            </Form.Item>
          </Form>
        </Modal>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            width: "50%",
          }}
        >
          <h2>Danh sách TODO</h2>
          <Button type="primary" onClick={showModal}>
            Add TODO
          </Button>
        </div>
        <Table
          dataSource={data}
          columns={columns}
          rowKey="id"
          pagination={{ pageSize: 5 }}
          loading={isLoading}
          style={{ marginTop: 20, maxWidth: "50%" }}
        />
      </div>
      <Button onClick={() => navigate("/another")}>Go to another page</Button>
    </>
  );
};
