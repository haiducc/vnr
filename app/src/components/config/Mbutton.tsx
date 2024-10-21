import { Button } from "antd";
import React from "react";

interface Props {
  type?: "secondary" | "primary" | "error";
  disabled?: boolean;
  text?: string;
  className?: string;
  htmlType?: "button" | "submit" | "reset";
  loading?: boolean;
  onClick?: React.MouseEventHandler<HTMLElement>;
  icon?: React.ReactNode;
  h?: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  onBlur?: any;
  children?: React.ReactNode;
}

function MButton({
  disabled,
  loading,
  text,
  className,
  htmlType,
  type = "primary",
  onClick,
  icon,
  h,
  onBlur,
}: Props) {
  return (
    <Button
      onBlur={onBlur}
      icon={icon}
      htmlType={htmlType}
      type="default"
      className={`${
        type == "primary"
          ? `${
              disabled
                ? "bg-m_neutral_400 text-m_neutral_100"
                : "bg-m_primary_500 text-white"
            }`
          : type == "secondary"
            ? `${
                disabled
                  ? " text-m_neutral_400 border-1 border-m_neutral_400"
                  : " text-m_primary_500 border bg-transparent border-m_primary_500"
              }`
            : `${
                disabled
                  ? " text-m_error_500 border-1 bg-m_neutral_400 border-m_error_500"
                  : " text-m_error_500 border bg-transparent border-m_error_500"
              }`
      } ${
        h ? h : "h-11  lg:h-12"
      }  body_semibold_14 lg:caption_semibold_16 rounded-lg ${className}`}
      loading={loading || false}
      onClick={onClick}
      disabled={disabled}
    >
      {text}
    </Button>
  );
}

export default MButton;