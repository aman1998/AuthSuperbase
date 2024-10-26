"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";

import Button from "@shared/ui/Button";
import { ROUTES } from "@shared/config/routes";

export default function Home() {
  const router = useRouter();
  return (
    <Button type="primary" onClick={() => router.push(ROUTES.signIn)}>
      Вход/Регистрация
    </Button>
  );
}
