import './AddCell.css';
import { useActions } from '../hooks/useActions';

interface AddCellProps {
  prevCellId: string | null;
  forceVisible?: boolean;
}

const AddCell: React.FC<AddCellProps> = ({ prevCellId, forceVisible }) => {
  const { insertCellAfter } = useActions();
  return (
    <div className={`add-cell ${forceVisible && 'visible'}`}>
      <div className="add-cell-btn-container">
        <button
          className="btn btn-sm btn-primary"
          onClick={() => insertCellAfter(prevCellId, 'text')}
        >
          <span className="add-cell-icon">
            <i className="fas fa-plus-circle"></i>
          </span>
          Text
        </button>
        <button
          className="btn btn-sm btn-primary"
          onClick={() => insertCellAfter(prevCellId, 'code')}
        >
          <span className="add-cell-icon">
            <i className="fas fa-plus-circle"></i>
          </span>
          Code
        </button>
      </div>
      <div className="divider"></div>
    </div>
  );
};

export default AddCell;
