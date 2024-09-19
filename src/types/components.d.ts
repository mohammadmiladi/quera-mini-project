import { HTMLInputTypeAttribute } from "react";

type ButtonType = "submit" | "reset" | "button" | undefined

export interface ButtonProps {
    title: string;
    buttonStyle: string;
    buttonClick?: () => void;
    type: ButtonType;
}

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
    placeholder: string;
    label: string;
    title?: string;
    inputStyle: string;
    inputError?: string;
}
