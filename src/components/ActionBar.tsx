import './ActionBar.css';
import { useActions } from '../hooks/useActions';
import ActionButton from './ActionButton';

interface ActionBarProps {
  id: string;
}

const ActionBar: React.FC<ActionBarProps> = ({ id }) => {
  const { moveCell, deleteCell } = useActions();

  return (
    <div className="action-bar">
      <div className="btn-group" role="group">
        <ActionButton icon="fa-chevron-up" clickHandler={() => moveCell(id, 'up')} />
        <ActionButton
          icon="fa-chevron-down"
          clickHandler={() => moveCell(id, 'down')}
        />
        <ActionButton
          icon="fa-trash-alt"
          clickHandler={() => deleteCell(id)}
          isDanger
        />
      </div>
    </div>
  );
};

export default ActionBar;
