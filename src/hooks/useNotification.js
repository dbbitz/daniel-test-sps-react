import { useSnackbar } from "notistack";

const useNotification = () => {
  const { enqueueSnackbar } = useSnackbar();

  const showSuccess = (message) => {
    enqueueSnackbar(message, {
      variant: "success",
      autoHideDuration: 3000,
      anchorOrigin: {
        vertical: "top",
        horizontal: "right",
      },
    });
  };

  const showError = (message) => {
    enqueueSnackbar(message, {
      variant: "error",
      autoHideDuration: 3000,
      anchorOrigin: {
        vertical: "top",
        horizontal: "right",
      },
    });
  };

  const showWarning = (message) => {
    enqueueSnackbar(message, {
      variant: "warning",
      autoHideDuration: 3000,
      anchorOrigin: {
        vertical: "top",
        horizontal: "right",
      },
    });
  };

  const showInfo = (message) => {
    enqueueSnackbar(message, {
      variant: "info",
      autoHideDuration: 3000,
      anchorOrigin: {
        vertical: "top",
        horizontal: "right",
      },
    });
  };

  return {
    showSuccess,
    showError,
    showWarning,
    showInfo,
  };
};

export default useNotification;
