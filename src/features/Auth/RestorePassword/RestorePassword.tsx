"use client";

import React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Form } from "antd";
import { useRouter } from "next/navigation";

import {
  restorePasswordSchema,
  TRestorePasswordSchema,
} from "@features/Auth/RestorePassword/lib/restorePasswordSchema";
import RestorePasswordConfirm from "@features/Auth/RestorePassword/components/RestorePasswordConfirm";

import Button from "@shared/ui/Button";
import InputControl from "@shared/controllers/InputControl";
import { ROUTES } from "@shared/config/routes";

import s from "./RestorePassword.module.scss";

const RestorePassword: React.FC = () => {
  const [isConfirmed, setIsConfirmed] = React.useState(false);

  const router = useRouter();

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<TRestorePasswordSchema>({
    defaultValues: {
      email: "",
    },
    resolver: zodResolver(restorePasswordSchema),
    mode: "onSubmit",
  });

  const handleClick = (data: TRestorePasswordSchema) => {
    console.log("data =>", data);
    setIsConfirmed(true);
  };

  if (isConfirmed) return <RestorePasswordConfirm />;

  return (
    <Form className={s.form} onFinish={handleSubmit(handleClick)} layout="vertical">
      <h1 className={s.form__title}>Сбросить пароль</h1>

      <Form.Item
        style={{ margin: 0 }}
        validateStatus={errors.email?.message ? "error" : ""}
        help={errors.email?.message}
        label={<label className={s.form__label}>Введите почту указанную при регистрации</label>}
      >
        <InputControl<TRestorePasswordSchema>
          control={control}
          name="email"
          errorMessage={errors.email?.message}
          placeholder="E-mail"
        />
      </Form.Item>

      <Form.Item style={{ margin: 0 }}>
        <Button className={s.form__btn} type="primary" htmlType="submit">
          Сбросить пароль
        </Button>
      </Form.Item>

      <Button type="link" onClick={() => router.push(ROUTES.signIn)}>
        Вернуться назад
      </Button>
    </Form>
  );
};

export default RestorePassword;
