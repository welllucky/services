import { ChangeEventHandler } from "react";
import { Fildset, Image, Input, Legend, LegendText } from "./styles";

export interface IInputLegendProps {
  legendText?: string;
  width?: string;
  inputType?: string;
  placeholder?: string;
  height?: string;
  maxLength?: number;
  minLength?: number;
  value?: string;
  onChange?: ChangeEventHandler<HTMLInputElement>;
  source?: string;
  imgDescription?: string;
  hasImage?: boolean;
  border?: string;
  pattern?: string;
  // onClickImage?: () => void;
  id?: string;
  required?: boolean;
}

export const InputLegend = ({
  legendText,
  inputType,
  placeholder,
  width,
  height,
  value,
  maxLength,
  onChange,
  source,
  imgDescription,
  hasImage,
  border,
  minLength,
  pattern,
  id,
  required,
}: IInputLegendProps) => {
  const isMaxDate = inputType === "date" ? "2023-12-31" : "";
  return (
    <Fildset
      border={border}
      height={height}
      width={width}>
      <Legend>
        <LegendText>{legendText}</LegendText>
      </Legend>

      <Input
        placeholder={placeholder}
        type={inputType}
        maxLength={maxLength}
        minLength={minLength}
        max={isMaxDate}
        required={required}
        value={value}
        onChangeCapture={onChange}
        pattern={pattern}
        id={id}
      />
      {hasImage && (
        <Image
          src={source}
          alt={imgDescription}
        />
      )}
    </Fildset>
  );
};
