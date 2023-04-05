import { Component, ReactNode } from 'react';

import './modal.css';

class Modal extends Component {
  render(): ReactNode {
    return (
      <div className="overlay">
        <div className="modal">Данные отправлены</div>
      </div>
    );
  }
}
export { Modal };
