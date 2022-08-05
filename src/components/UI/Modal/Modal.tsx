import { ActionIcon } from "../ActionIcon/ActionIcon";

interface ModalProps {
  visible: boolean;
  setVisible: Function;
  title: string;
  header?: JSX.Element;
  content?: JSX.Element;
  width?: string;
  innerRef?: React.RefObject<HTMLDivElement>;
}

export const Modal: React.FC<ModalProps> = ({ visible, setVisible, header, content, title, width, innerRef }) => {
  const handleClose = () => {
    setVisible(false);
  };
  return (
    <>
      {visible && (
        <div className="modal-overlay">
          <div className="modal" style={{ width: width }} ref={innerRef}>
            <div className="modal-header">
              {header ? (
                header
              ) : (
                <>
                  <div className="modal-title">{title}</div>
                  <div className="modal-close" onClick={handleClose}>
                    <ActionIcon type="hover" radius="md">
                      x
                    </ActionIcon>
                  </div>
                </>
              )}
            </div>
            <div className="modal-content">{content && content}</div>
          </div>
        </div>
      )}
    </>
  );
};
