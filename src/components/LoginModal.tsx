"use client";

import React from 'react';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from './ui/button';
import { Input } from './ui/input';

export default function LoginModal() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <button className="text-sm font-semibold">
          nie masz psychy sie zalogowac
        </button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Logowanie</DialogTitle>
        </DialogHeader>
        <div className="mt-4 space-y-4">
          <Input placeholder="Login" />
          <Input type="password" placeholder="Hasło" />
          <Button className="w-full">Zaloguj</Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}
