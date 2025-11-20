"use client";

import { useRef } from "react";
import { QRCodeCanvas } from "qrcode.react";
import { Button } from "@/components/ui/Button";

type Props = {
  value: string;
  size?: number;
  includeDownload?: boolean;
};

export default function QrCode({ value, size = 120, includeDownload }: Props) {
  const ref = useRef<QRCodeCanvas | null>(null);

  const handleDownload = () => {
    try {
      const canvas = (ref.current as any)?.canvas;
      if (!canvas) return;
      const url = canvas.toDataURL("image/png");
      const link = document.createElement("a");
      link.href = url;
      link.download = "myrug-gallery-qr.png";
      link.click();
    } catch {
      // fail silently
    }
  };

  return (
    <div className="flex flex-col items-center gap-2">
      <QRCodeCanvas
        value={value}
        size={size}
        includeMargin
        bgColor="#FAF7F2"
        fgColor="#0B1220"
        ref={ref}
      />
      {includeDownload && (
        <Button
          type="button"
          variant="secondary"
          className="text-[11px] px-3 py-1.5"
          onClick={handleDownload}
        >
          Download PNG
        </Button>
      )}
    </div>
  );
}
