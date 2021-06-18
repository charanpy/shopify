import { createContext, useState, ReactNode, FC, useEffect } from 'react';

interface AlertProps {
  open?: boolean;
  title?: string;
  variant?: any;
}

interface AlertMethodProps extends AlertProps {
  openAlert: Function;
  closeAlert: Function;
}

const defaultAlert = {
  open: false,
  title: '',
  variant: 'error',
};

export const AlertContext = createContext<AlertMethodProps>({
  ...defaultAlert,
  openAlert: () => {},
  closeAlert: () => {},
});

const AlertProvider: FC<ReactNode> = ({ children }) => {
  const [alert, setAlert] = useState<AlertProps>(defaultAlert);
  const { open } = alert;
  useEffect(() => {
    if (!open) return;
    const timer = window.setTimeout(() => {
      closeAlert();
    }, 5000);
    return () => window.clearTimeout(timer);
  }, [open]);
  const openAlert = ({ open = true, variant = 'error', title }: AlertProps) => {
    const alert = { open, variant, title };
    setAlert((prevState: AlertProps) => ({
      ...prevState,
      ...alert,
    }));
  };
  console.log(alert);

  const closeAlert = () => {
    setAlert((prevState) => ({
      ...prevState,
      ...defaultAlert,
    }));
  };
  const value = { ...alert, openAlert, closeAlert };
  return (
    <AlertContext.Provider value={value}>{children}</AlertContext.Provider>
  );
};

export default AlertProvider;
