import React, { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import DeleteSvg from "../svg/DeleteSvg";

export default function DeleteAccountModal({ open, onClose, onConfirm }) {
  const [password, setPassword] = useState("");

  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[400px] text-center rounded-2xl">
        <div className="flex flex-col items-center justify-center space-y-3 py-4">
          <div className="bg-red-100 p-3 rounded-full">
            <DeleteSvg />
          </div>

          <DialogHeader>
            <DialogTitle className="text-2xl font-bold text-gray-800">
              Delete Account
            </DialogTitle>
          </DialogHeader>

          <div className="flex flex-col items-start w-full text-gray-400 space-y-2">
            <label>
              Type your password <span className="text-red-500">*</span>
            </label>

            <input
              placeholder="Enter your password"
              type="text"
              className="w-full border placeholder:text-gray-400 text-black py-3 px-4 rounded-2xl"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
        </div>

        <DialogFooter className="flex mx-auto">
          <Button
            onClick={() => onConfirm(password)}
            className="bg-red-500 hover:bg-red-600 text-white px-6 rounded-full"
          >
            Delete
          </Button>
          <Button
            variant="outline"
            onClick={onClose}
            className="px-6 rounded-full"
          >
            Cancel
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
