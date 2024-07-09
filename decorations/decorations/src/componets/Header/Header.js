function Header () {
    return (
        <div class="page">              
            <header className="section">
                    <div className='nav-panel'>
                    
                        <nav>
                            <ul>
                                <li><a href="#">Главная</a></li>
                                <li><a href="#">Полезная информация</a></li>
                                <li><a href="#">Контакты</a></li>
                            </ul>
                        </nav>

                        <nav>
                            <ul>
                                <li><a href="#">Заказать</a></li>
                                <input type="text" placeholder="Поиск"></input> 
                            </ul>


                        </nav>

                    </div>

            </header>
        </div>
    );
        
} 
export default Header;



