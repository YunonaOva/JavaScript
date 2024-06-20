function ShowAlertButton () {

    function showAlert() {
        alert ('Вы нажали кнопку')
    }
    
    return (
        <button onClick = {showAlert}> Нажми для УДАЧИ! </button>
    )
}
export default ShowAlertButton;