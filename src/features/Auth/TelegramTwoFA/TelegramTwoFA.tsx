"use client";

import React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Form } from "antd";
import { useRouter } from "next/navigation";

import { telegramTwoFASchema, TTelegramTwoFASchema } from "@features/Auth/TelegramTwoFA/lib/telegramTwoFASchema";

import Button from "@shared/ui/Button";
import InputControl from "@shared/controllers/InputControl";
import { ROUTES } from "@shared/config/routes";

import s from "./TelegramTwoFA.module.scss";

const TelegramTwoFA: React.FC = () => {
  const router = useRouter();

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<TTelegramTwoFASchema>({
    defaultValues: {
      code: "",
    },
    resolver: zodResolver(telegramTwoFASchema),
    mode: "onSubmit",
  });

  const handleClick = (data: TTelegramTwoFASchema) => {
    console.log("data =>", data);
  };

  return (
    <Form className={s.form} onFinish={handleSubmit(handleClick)} layout="vertical">
      <h1 className={s.form__title}>Проверка 2FA</h1>

      <Form.Item
        style={{ margin: 0 }}
        validateStatus={errors.code?.message ? "error" : ""}
        help={errors.code?.message}
        label={<label className={s.form__label}>Введите цифры, которые прислал бот</label>}
      >
        <InputControl<TTelegramTwoFASchema>
          control={control}
          name="code"
          errorMessage={errors.code?.message}
          placeholder="Ввести цифры"
        />
      </Form.Item>

      <Form.Item style={{ margin: 0 }}>
        <Button className={s.form__btn} type="primary" htmlType="submit">
          Отправить
        </Button>
      </Form.Item>

      <Button type="link" onClick={() => router.push(ROUTES.telegramAuth)}>
        Вернуться назад
      </Button>
    </Form>
  );
};

export default TelegramTwoFA;
