type Props = {
  label: string;
  onClick?: () => void;
};

export const Button = ({ label, onClick }: Props) => {
  return (
    // biome-ignore lint/a11y/useButtonType: <explanation>
    <button
      onClick={onClick}
      className="flex items-center justify-center cursor-pointer text-center font-bold rounded-md md:rounded-lg py-3 px-5 md:py-4 md:px-9 bg-primary text-bg"
    >
      {label}
    </button>
  );
};
