export interface TextInput {
  name: string;
  type: string;
  children?: React.ReactNode | null;
  defaultValue?: string;
  required?: boolean;
}
