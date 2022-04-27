import './Navbar.css'

function Navbar(){
    return (
        <div className="NavBlocks">
            <img className="NavIcon" src="https://cdn-icons-png.flaticon.com/128/6685/6685130.png"/>
            <div>
                <ul className="NavUl">
                    <li>Главная</li>
                    <li>Курсы</li>
                    <li>Расписание</li>
                    <li>Преподаватели</li>
                    <li>Рассылка</li>
                    <li>Контакты</li>
                </ul>
            </div>
            <div >
                <button className="Navbutton">Зайти в кабинет</button>
            </div>
        </div>
    )
}

export default Navbar