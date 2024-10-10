
document.getElementById('order_form_new').addEventListener('submit', function(e) {
    e.preventDefault();

    const token = '7379453969:AAHbbqDAHmtO3H3ZfcMruEBBBAWFsDWCp44';
    const chatId = '-1002214124726';
    const size = document.getElementById('select').value;
    const name = document.getElementById('name').value;
    const phone = document.getElementById('phone').value;
    const content = 'Дитяча сорочка з довгим рукавом';
    const price = '440грн';
    

    const text = `Товар: ${content}\nРозмір: ${size}\nІм'я: ${name}\nТелефон: ${phone}\nЦіна: ${price}`;

    fetch(`https://api.telegram.org/bot${token}/sendMessage`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            chat_id: chatId,
            text: text
        })
    })
    .then(response => response.json())
    .then(data => {
        if (data.ok) {
            alert('Заявка надіслана. Очікуйте дзвінка нашого менеджера!');
        } else {
            alert('Помилка при надсиланні заявки');
        }
    })
    .catch(error => {
        alert('Помилка при надсиланні заявки!');
        console.error('Error:', error);
    });
});