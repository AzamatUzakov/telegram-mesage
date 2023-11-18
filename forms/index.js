import axios from 'axios'
let main_loc = document.querySelector('.arrow')


main_loc.onclick = () => {
    location.href = "/"
}


const TOKEN = "6737039916:AAET_8JAh6awQpvHASNhzeod6lDe0KVlUkE"
const CHAT_ID = " -1002091957259"
const BASE_URL = `https://api.telegram.org/bot${ TOKEN }/sendMessage`



document.querySelector("#tg").addEventListener('submit', function (e) {
        e.preventDefault()

        let mesage = `<b>Заявка с сайта<b>\n`;
        mesage += `<b>Имя отправителья:</b>${this.name.value}\n`;
       /*  mesage += `<b>Фамилия отправителья:</b>${this.surname.value}\n`;
        mesage += `<b>Номер:</b>${this.phone.value}\n`; */
        mesage += `<b>Email:</b>${this.email.value}`;

        console.log(mesage);
       axios.post(BASE_URL, {
            chat_id: CHAT_ID,
            parse_mode: 'html',
            text: mesage
        }) 
    })
