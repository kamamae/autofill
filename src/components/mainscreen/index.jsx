import React from 'react';

class RectangleWindow extends React.Component {
  render() {
    const windowStyle = {
      width: '50vw',
      height: '10vh',
      border: '1px solid black',
      borderRadius: '5px',
      margin: '10px',
      textAlign: 'center',
      marginLeft: 'auto',
      marginRight: 'auto',
      display: 'block',
    };

    const { title, link } = this.props;

    // function openFile(fileUrl) {
    //     // В этой функции вы можете выполнить действия для открытия файла,
    //     // например, перенаправить на URL файла или использовать другие способы открытия файла
    //     window.location.href = fileUrl; // Пример перенаправления на URL файла
    //   }

    return (
      
      <div style={windowStyle}>
        <div>
          <h2>{title}</h2>
          <button onClick={() => openFile({link})}>Открыть файл</button>      
    </div>
    </div>
    );
  }
}

export default RectangleWindow;