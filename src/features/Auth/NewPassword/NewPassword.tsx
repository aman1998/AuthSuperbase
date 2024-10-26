"use client";

import React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Form } from "antd";
import { useRouter } from "next/navigation";

import { newPasswordSchema, TNewPasswordSchema } from "@features/Auth/NewPassword/lib/newPasswordSchema";

import Button from "@shared/ui/Button";
import InputControl from "@shared/controllers/InputControl";

import s from "./NewPassword.module.scss";

const NewPassword: React.FC = () => {
  const router = useRouter();

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<TNewPasswordSchema>({
    defaultValues: {
      password: "",
      confirmPassword: "",
    },
    resolver: zodResolver(newPasswordSchema),
    mode: "onSubmit",
  });

  const handleClick = (data: TNewPasswordSchema) => {
    console.log("data =>", data);
  };

  return (
    <Form className={s.form} onFinish={handleSubmit(handleClick)} layout="vertical">
      <h1 className={s.form__title}>Новый пароль</h1>
      <Form.Item
        style={{ margin: 0 }}
        validateStatus={errors.password?.message ? "error" : ""}
        help={errors.password?.message}
        label={<label className={s.form__label}>Введите новый пароль</label>}
      >
        <InputControl<TNewPasswordSchema>
          isPassword
          control={control}
          name="password"
          errorMessage={errors.password?.message}
          placeholder="Пароль"
        />
      </Form.Item>

      <Form.Item
        style={{ margin: 0 }}
        validateStatus={errors.confirmPassword?.message ? "error" : ""}
        help={errors.confirmPassword?.message}
      >
        <InputControl<TNewPasswordSchema>
          isPassword
          control={control}
          name="confirmPassword"
          errorMessage={errors.confirmPassword?.message}
          placeholder="Повторите пароль"
        />
      </Form.Item>

      <Form.Item style={{ margin: 0 }}>
        <Button className={s.form__btn} type="primary" htmlType="submit">
          Изменить пароль
        </Button>
      </Form.Item>
    </Form>
  );
};

export default NewPassword;
