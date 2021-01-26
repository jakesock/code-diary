interface ActionButtonProps {
  icon: string;
  clickHandler: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
  isDanger?: boolean;
}

const ActionButton: React.FC<ActionButtonProps> = ({
  icon,
  clickHandler,
  isDanger,
}) => {
  return (
    <>
      <button
        className={`btn btn-sm ${isDanger ? 'btn-danger' : 'btn-primary'}`}
        onClick={clickHandler}
      >
        <span>
          <i className={`fas ${icon}`}></i>
        </span>
      </button>
    </>
  );
};

export default ActionButton;
